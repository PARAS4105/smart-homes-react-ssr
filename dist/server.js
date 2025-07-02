/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_services_PropertList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/services/PropertList */ \"./src/services/PropertList.js\");\n/* harmony import */ var _src_services_CompletedPropertyList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/services/CompletedPropertyList */ \"./src/services/CompletedPropertyList.js\");\n/* harmony import */ var _src_services_PageList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/services/PageList */ \"./src/services/PageList.js\");\n/* harmony import */ var _src_services_SocialMediaList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/services/SocialMediaList */ \"./src/services/SocialMediaList.js\");\n/* harmony import */ var _src_services_AdminDetail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/services/AdminDetail */ \"./src/services/AdminDetail.js\");\n/* harmony import */ var _src_services_HomeDetail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/services/HomeDetail */ \"./src/services/HomeDetail.js\");\n/* harmony import */ var _src_services_ContactDetail_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/services/ContactDetail.js */ \"./src/services/ContactDetail.js\");\n/* harmony import */ var _src_services_JobList_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/services/JobList.js */ \"./src/services/JobList.js\");\n// ✅ Enable Babel for JSX/ES6+ and ignore CSS imports\n__webpack_require__(/*! ignore-styles */ \"ignore-styles\");\n__webpack_require__(/*! @babel/register */ \"@babel/register\")({\n  presets: [\"@babel/preset-env\", \"@babel/preset-react\"]\n});\nconsole.log(\"🚀 server.js started\");\n\n// ✅ Core modules and React\n\n\n\n\n\n\nconst {\n  HelmetProvider\n} = __webpack_require__(/*! react-helmet-async */ \"react-helmet-async\");\n// ✅ Your React App\nconst App = (__webpack_require__(/*! ../src/App.jsx */ \"./src/App.jsx\")[\"default\"]);\n\n// ✅ API services (adjust paths as needed)\n\n\n\n\n\n\n\n\n\n// ✅ Init Express app\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst PORT = 3000;\n\n// ✅ Serve static assets (JS, CSS, images)\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, \"../public\"), {\n  index: false,\n  // do NOT auto-serve public/index.html\n  extensions: false\n  // maxAge: \"1y\", // optional: cache-control\n}));\n\n// ✅ Main SSR handler\napp.get(\"/*\", async (req, res) => {\n  try {\n    console.log(\"🚀 [SSR] Incoming request:\", req.url);\n\n    // 🛑 Skip SSR for non-page or system paths\n    const skipSSRPaths = [\"/robots.txt\", \"/favicon.ico\", \"/manifest.json\", \"/sitemap.xml\"];\n    if (req.url.startsWith(\"/.well-known/\") || skipSSRPaths.includes(req.url)) {\n      const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, \"../public\".concat(req.url));\n      if (fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(filePath)) {\n        return res.sendFile(filePath);\n      } else {\n        return res.status(404).send(\"Not Found\");\n      }\n    }\n\n    // 1️⃣ Prepare data containers\n    const data = {\n      homeDetailData: null,\n      ContactDetailData: null,\n      contactSeoData: null,\n      ChannelDetailData: null,\n      aboutDetailData: null,\n      CareerDetailData: null,\n      PropertyListData: [],\n      CompletedPropertyListData: [],\n      SocialMediaListData: [],\n      PageListData: [],\n      AdminDetailData: [],\n      JobListData: []\n    };\n\n    // 2️⃣ Fetch shared data in parallel\n    const [adminData, socialData, propertyList, pageList, completedList, homeDetail, ContactDetailData, jobListData] = await Promise.all([(0,_src_services_AdminDetail__WEBPACK_IMPORTED_MODULE_10__.AdminDetail)(), (0,_src_services_SocialMediaList__WEBPACK_IMPORTED_MODULE_9__.SocialMediaList)(), (0,_src_services_PropertList__WEBPACK_IMPORTED_MODULE_6__.PropertyList)(), (0,_src_services_PageList__WEBPACK_IMPORTED_MODULE_8__.PageList)(), (0,_src_services_CompletedPropertyList__WEBPACK_IMPORTED_MODULE_7__.CompletedPropertyList)(), (0,_src_services_HomeDetail__WEBPACK_IMPORTED_MODULE_11__.HomeDetail)(), (0,_src_services_ContactDetail_js__WEBPACK_IMPORTED_MODULE_12__.ContactDetail)(), (0,_src_services_JobList_js__WEBPACK_IMPORTED_MODULE_13__.JobList)()]);\n    data.AdminDetailData = adminData;\n    data.JobListData = jobListData;\n    data.SocialMediaListData = socialData;\n    data.PropertyListData = propertyList;\n    data.PageListData = pageList;\n    data.CompletedPropertyListData = completedList;\n    data.homeDetailData = homeDetail;\n    data.ContactDetailData = ContactDetailData;\n\n    // 5️⃣ Route analysis\n    const staticPaths = ['about-us', 'completed-projects', 'contact-us', 'channelpartner', 'career'];\n    let slug = null;\n    let isStaticPage = false;\n    const parts = req.path.split(\"/\").filter(Boolean);\n    if (parts.length === 1) {\n      const firstPart = parts[0];\n      if (staticPaths.includes(firstPart)) {\n        isStaticPage = true;\n        if (firstPart === \"about-us\") {\n          data.aboutDetailData = data.PageListData.find(p => p.slug === \"about-us\");\n        }\n        if (firstPart === \"channelpartner\") {\n          data.ChannelDetailData = data.PageListData.find(p => p.slug === \"channelpartner\");\n        }\n        if (firstPart === \"contact-us\") {\n          data.contactSeoData = data.PageListData.find(p => p.slug === \"contact-us\");\n        }\n        if (firstPart === \"career\") {\n          data.CareerDetailData = data.PageListData.find(p => p.slug === \"career\");\n        }\n        if (firstPart === \"completed-projects\") {}\n      } else {\n        slug = firstPart;\n      }\n    }\n    let projectData = null;\n    if (slug && !isStaticPage) {\n      const allProjects = [...propertyList, ...completedList];\n      projectData = allProjects.find(p => p.slug === slug);\n      if (projectData) {\n        data.projectData = projectData;\n        // MetaData.title = projectData.page_title;\n        // MetaData.description = projectData.page_description;\n        // MetaData.keywords = projectData.page_keywords;\n        // MetaData.path = \"/\" + projectData.slug + \"/\";\n      } else {\n        console.log(\"\\u274C Project not found for slug: \".concat(slug));\n        return res.redirect(\"/\");\n      }\n    }\n\n    // 7️⃣ Render app HTML\n    const helmetContext = {}; // ✅ init empty\n\n    const appHtml = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(HelmetProvider, {\n      context: helmetContext\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__.StaticRouter, {\n      location: req.url\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(App, {\n      data: data\n    }))));\n    const {\n      helmet\n    } = helmetContext;\n\n    // 9️⃣ Final HTML\n    const html = \"\\n      <!DOCTYPE html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n          <meta charset=\\\"UTF-8\\\" />\\n          <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n          \".concat(helmet.title.toString(), \"\\n          \").concat(helmet.meta.toString(), \"\\n          \").concat(helmet.link.toString(), \"\\n          <link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\">\\n          <link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\" crossorigin>\\n          <link rel=\\\"preload\\\" href=\\\"/styles/globals.css\\\" as=\\\"style\\\">\\n          <link rel=\\\"stylesheet\\\" href=\\\"/styles/globals.css\\\">\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0\\\" />\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\">\").concat(appHtml, \"</div>\\n          <script>\\n            window.__INITIAL_DATA__ = \").concat(JSON.stringify(data).replace(/</g, '\\\\u003c'), \";\\n          </script>\\n          <script src=\\\"/bundle.js?v=\").concat(Date.now(), \"\\\"></script>\\n        </body>\\n      </html>\\n    \");\n\n    // ✅ Send final response\n    res.status(200).type(\"html\").send(html);\n  } catch (err) {\n    console.error(\"❌ SSR Error:\", err);\n    res.status(500).send(\"Internal Server Error\");\n  }\n});\n\n// ✅ Start server\napp.listen(PORT, () => {\n  console.log(\"\\uD83D\\uDE80 SSR server running at Port: \".concat(PORT));\n});\n\n//# sourceURL=webpack://swati-react-ssr/./server/server.js?");

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n// import Home from \"./pages/Home\";\n// import Header from \"./components/Header\";\n// import Footer from \"./components/Footer\";\n// import Detail from \"./pages/Detail\"\n// import CompletedProjects from \"./pages/CompletedProjects\"\n// import Thankyou from \"./pages/ThankYou\";\n// import ContactUs from \"./pages/ContactUs\"\n// import ChannelPartner from \"./pages/ChannelPartner\"\n// import Career from \"./pages/Career\"\n// import AboutUs from \"./pages/AboutUs\"\n\n\n// import ScrollToTop from \"./components/ScrollToTop\";\n// import HeaderInquiryForm from \"./components/HeaderInquiryForm\";\n// import \"../public/styles/globals.css\"\nif (typeof window !== \"undefined\") {\n  Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! @fancyapps/ui/dist/fancybox/fancybox.css */ \"@fancyapps/ui/dist/fancybox/fancybox.css\", 23));\n}\nconst App = _ref => {\n  let {\n    data\n  } = _ref;\n  const [inquiryPopup, setInquiryPopup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [inquiryPopupObj, setInquiryPopupObj] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [isAmenityOpen, setAmenityToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [isProximityOpen, setProximityToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const shouldLockScroll = inquiryPopup || isAmenityOpen || isProximityOpen;\n    document.body.style.overflow = shouldLockScroll ? \"hidden\" : \"auto\";\n    return () => {\n      document.body.style.overflow = \"auto\"; // cleanup on unmount\n    };\n  }, [inquiryPopup, isAmenityOpen, isProximityOpen]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Hello From App.jsx\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {\n    position: \"bottom-right\",\n    autoClose: 3000,\n    hideProgressBar: true,\n    newestOnTop: false,\n    closeOnClick: true,\n    rtl: false,\n    pauseOnFocusLoss: false,\n    draggable: false,\n    pauseOnHover: false\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://swati-react-ssr/./src/App.jsx?");

/***/ }),

/***/ "./src/services/AdminDetail.js":
/*!*************************************!*\
  !*** ./src/services/AdminDetail.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdminDetail: () => (/* binding */ AdminDetail)\n/* harmony export */ });\nconst AdminDetail = async () => {\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Admin/admin/details\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        user_name: \"swatiprocon\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/AdminDetail.js?");

/***/ }),

/***/ "./src/services/CompletedPropertyList.js":
/*!***********************************************!*\
  !*** ./src/services/CompletedPropertyList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CompletedPropertyList: () => (/* binding */ CompletedPropertyList)\n/* harmony export */ });\nconst CompletedPropertyList = async () => {\n  console.log(\"✅ In Completed function\");\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Services/properties/completed_properties\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        all_detail: \"1\",\n        master_user_id: \"373\",\n        logged_in_master_user_id: \"373\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/CompletedPropertyList.js?");

/***/ }),

/***/ "./src/services/ContactDetail.js":
/*!***************************************!*\
  !*** ./src/services/ContactDetail.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContactDetail: () => (/* binding */ ContactDetail)\n/* harmony export */ });\nconst ContactDetail = async () => {\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Admin/contact_page/details\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        master_user_id: \"373\",\n        logged_in_master_user_id: \"373\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/ContactDetail.js?");

/***/ }),

/***/ "./src/services/HomeDetail.js":
/*!************************************!*\
  !*** ./src/services/HomeDetail.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomeDetail: () => (/* binding */ HomeDetail)\n/* harmony export */ });\nconst HomeDetail = async () => {\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Admin/home/details\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        master_user_id: \"373\",\n        logged_in_master_user_id: \"373\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/HomeDetail.js?");

/***/ }),

/***/ "./src/services/JobList.js":
/*!*********************************!*\
  !*** ./src/services/JobList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   JobList: () => (/* binding */ JobList)\n/* harmony export */ });\nconst JobList = async () => {\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Services/career_jobs/list\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        master_user_id: \"373\",\n        logged_in_master_user_id: \"373\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/JobList.js?");

/***/ }),

/***/ "./src/services/PageList.js":
/*!**********************************!*\
  !*** ./src/services/PageList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageList: () => (/* binding */ PageList)\n/* harmony export */ });\nconst PageList = async () => {\n  console.log(\"✅ In PageList function\");\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Admin/pages/list\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        master_user_id: \"373\",\n        logged_in_master_user_id: \"373\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/PageList.js?");

/***/ }),

/***/ "./src/services/PropertList.js":
/*!*************************************!*\
  !*** ./src/services/PropertList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PropertyList: () => (/* binding */ PropertyList)\n/* harmony export */ });\nconst PropertyList = async () => {\n  console.log(\"✅ In PropertyList function\");\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Services/properties/list\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        all_detail: \"1\",\n        master_user_id: \"373\",\n        logged_in_master_user_id: \"373\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/PropertList.js?");

/***/ }),

/***/ "./src/services/SocialMediaList.js":
/*!*****************************************!*\
  !*** ./src/services/SocialMediaList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SocialMediaList: () => (/* binding */ SocialMediaList)\n/* harmony export */ });\nconst SocialMediaList = async () => {\n  console.log(\"✅ In SocialMediaList function\");\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Admin/social_page/list\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        master_user_id: \"373\",\n        logged_in_master_user_id: \"373\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    } else {\n      return null;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/SocialMediaList.js?");

/***/ }),

/***/ "@babel/register":
/*!**********************************!*\
  !*** external "@babel/register" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@babel/register");

/***/ }),

/***/ "@fancyapps/ui/dist/fancybox/fancybox.css":
/*!***********************************************************!*\
  !*** external "@fancyapps/ui/dist/fancybox/fancybox.css" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("@fancyapps/ui/dist/fancybox/fancybox.css");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "ignore-styles":
/*!********************************!*\
  !*** external "ignore-styles" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("ignore-styles");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet-async":
/*!*************************************!*\
  !*** external "react-helmet-async" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("react-helmet-async");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ "react-toastify/dist/ReactToastify.css":
/*!********************************************************!*\
  !*** external "react-toastify/dist/ReactToastify.css" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("react-toastify/dist/ReactToastify.css");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	
/******/ })()
;