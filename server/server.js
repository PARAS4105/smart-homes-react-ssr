// ✅ Enable Babel for JSX/ES6+ and ignore CSS imports
require("ignore-styles");
require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

console.log("🚀 server.js started");

// ✅ Core modules and React
import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
const { HelmetProvider } = require("react-helmet-async");
// ✅ Your React App
const App = require("../src/App.jsx").default;

// ✅ API services (adjust paths as needed)
import { PropertyList } from "../src/services/PropertList";
import { CompletedPropertyList } from "../src/services/CompletedPropertyList";
import { PageList } from "../src/services/PageList";
import { SocialMediaList } from "../src/services/SocialMediaList";
import { AdminDetail } from "../src/services/AdminDetail";
import { HomeDetail } from "../src/services/HomeDetail";
import { ContactDetail } from "../src/services/ContactDetail.js";
import { JobList } from "../src/services/JobList.js";

// ✅ Init Express app
const app = express();
const PORT = 3000;





// ✅ Serve static assets (JS, CSS, images)
app.use(
  express.static(path.resolve(__dirname, "../public"), {
    index: false, // do NOT auto-serve public/index.html
    extensions: false,
    // maxAge: "1y", // optional: cache-control
  })
);

// ✅ Main SSR handler
app.get("/*", async (req, res) => {
  try {
    console.log("🚀 [SSR] Incoming request:", req.url);

    // 🛑 Skip SSR for non-page or system paths
    const skipSSRPaths = [
      "/robots.txt",
      "/favicon.ico",
      "/manifest.json",
      "/sitemap.xml"
    ];
    if (
      req.url.startsWith("/.well-known/") ||
      skipSSRPaths.includes(req.url)
    ) {
      const filePath = path.resolve(__dirname, `../public${req.url}`);
      if (fs.existsSync(filePath)) {
        return res.sendFile(filePath);
      } else {
        return res.status(404).send("Not Found");
      }
    }

    // 1️⃣ Prepare data containers
    const data = {
      homeDetailData: null,
      ContactDetailData: null,
      contactSeoData: null,
      ChannelDetailData: null,
      aboutDetailData: null,
      CareerDetailData: null,
      PropertyListData: [],
      CompletedPropertyListData: [],
      SocialMediaListData: [],
      PageListData: [],
      AdminDetailData: [],
      JobListData: [],
    };

    // 2️⃣ Fetch shared data in parallel
    const [adminData, socialData, propertyList, pageList, completedList, homeDetail, ContactDetailData, jobListData] = await Promise.all([
      AdminDetail(),
      SocialMediaList(),
      PropertyList(),
      PageList(),
      CompletedPropertyList(),
      HomeDetail(),
      ContactDetail(),
      JobList(),
    ]);

    data.AdminDetailData = adminData;
    data.JobListData = jobListData;
    data.SocialMediaListData = socialData;
    data.PropertyListData = propertyList;
    data.PageListData = pageList;
    data.CompletedPropertyListData = completedList;
    data.homeDetailData = homeDetail;
    data.ContactDetailData = ContactDetailData;

    // 5️⃣ Route analysis
    const staticPaths = ['about-us', 'completed-projects', 'contact-us', 'channelpartner', 'career'];
    let slug = null;
    let isStaticPage = false;

    const parts = req.path.split("/").filter(Boolean);
    if (parts.length === 1) {
      const firstPart = parts[0];

      if (staticPaths.includes(firstPart)) {
        isStaticPage = true;

        if (firstPart === "about-us") {
          data.aboutDetailData = data.PageListData.find(p => p.slug === "about-us");
        }
        if (firstPart === "channelpartner") {
          data.ChannelDetailData = data.PageListData.find(p => p.slug === "channelpartner");
        }
        if (firstPart === "contact-us") {
          data.contactSeoData = data.PageListData.find(p => p.slug === "contact-us");
        }
        if (firstPart === "career") {
          data.CareerDetailData = data.PageListData.find(p => p.slug === "career");
        }
        if (firstPart === "completed-projects") { }


      } else {
        slug = firstPart;
      }
    }




    let projectData = null;
    if (slug && !isStaticPage) {
      const allProjects = [...propertyList, ...completedList];
      projectData = allProjects.find((p) => p.slug === slug);

      if (projectData) {
        data.projectData = projectData;
        // MetaData.title = projectData.page_title;
        // MetaData.description = projectData.page_description;
        // MetaData.keywords = projectData.page_keywords;
        // MetaData.path = "/" + projectData.slug + "/";
      } else {
        console.log(`❌ Project not found for slug: ${slug}`);
        return res.redirect("/");
      }
    }

    // 7️⃣ Render app HTML
    const helmetContext = {}; // ✅ init empty


    const appHtml = renderToString(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={req.url}>
          <App data={data} />
        </StaticRouter>
      </HelmetProvider>
    );
    const { helmet } = helmetContext;

    // 9️⃣ Final HTML
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
          <link rel="preload" as="font" href="/fonts/cabinet-grotesk/CabinetGrotesk-Black.woff2" type="font/woff2" crossorigin="anonymous" />
	        <link rel="preload" as="font" href="/fonts/cabinet-grotesk/CabinetGrotesk-Black.woff" type="font/woff" crossorigin="anonymous" />
	        <link rel="preload" as="font" href="/fonts/cabinet-grotesk/CabinetGrotesk-Bold.woff2" type="font/woff2" crossorigin="anonymous" />
	        <link rel="preload" as="font" href="/fonts/cabinet-grotesk/CabinetGrotesk-Bold.woff" type="font/woff" crossorigin="anonymous" />
	        <link rel="preload" as="font" href="/fonts/cabinet-grotesk/CabinetGrotesk-Light.woff2" type="font/woff2" crossorigin="anonymous" />
	        <link rel="preload" as="font" href="/fonts/cabinet-grotesk/CabinetGrotesk-Light.woff" type="font/woff" crossorigin="anonymous" />
	        <link rel="preload" as="font" href="/fonts/cabinet-grotesk/CabinetGrotesk-Medium.woff2" type="font/woff2" crossorigin="anonymous" />
	        <link rel="preload" as="font" href="/fonts/cabinet-grotesk/CabinetGrotesk-Medium.woff" type="font/woff" crossorigin="anonymous" />
	        <link rel="preload" as="font" href="/fonts/cabinet-grotesk/CabinetGrotesk-Regular.woff2" type="font/woff2" crossorigin="anonymous" />
	        <link rel="preload" as="font" href="/fonts/cabinet-grotesk/CabinetGrotesk-Regular.woff" type="font/woff" crossorigin="anonymous" />
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link rel="preload" href="/styles/globals.css" as="style">
          <link rel="stylesheet" href="/styles/globals.css">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0" />
          <style>
		body {
			overflow-x: hidden !important;
		}

		.page-view {
			min-height: 100vh;
			/* padding-top: 90px; */
		}


		.fullpageloader {
			display: grid;
			place-items: center;
			position: fixed;
			top: 0;
			left: 0;
			width: 100svw;
			height: 100svh;
			z-index: 99999999999999;
			background-color: #ffffff;
			transition: opacity ease 0.4s;
			-moz-transition: opacity ease 0.4s;
			-webkit-transition: opacity ease 0.4s;
			-ms-transition: opacity ease 0.4s;
			-o-transition: opacity ease 0.4s;
		}

		.fullpageloader.hiddenloader {
			opacity: 0;
			visibility: hidden;
			/* display: none; */
			pointer-events: none !important;
		}

		.fullpageloader div {
			width: 50%;
		}

		.fullpageloader div svg {
			width: 100%;
		}






		@media only screen and (max-width: 767px) {
			.fullpageloader div {
				width: 80%;
			}
		}
	</style>
        </head>
        <body>
          <div id="root">${appHtml}</div>
          <script>
            window.__INITIAL_DATA__ = ${JSON.stringify(data).replace(/</g, '\\u003c')};
          </script>
          <script src="/bundle.js?v=${Date.now()}"></script>
        </body>
      </html>
    `;

    // ✅ Send final response
    res.status(200).type("html").send(html);

  } catch (err) {
    console.error("❌ SSR Error:", err);
    res.status(500).send("Internal Server Error");
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 SSR server running at Port: ${PORT}`);
});
