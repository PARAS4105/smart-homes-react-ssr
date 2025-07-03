/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_services_PropertList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/services/PropertList */ \"./src/services/PropertList.js\");\n/* harmony import */ var _src_services_CompletedPropertyList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/services/CompletedPropertyList */ \"./src/services/CompletedPropertyList.js\");\n/* harmony import */ var _src_services_PageList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/services/PageList */ \"./src/services/PageList.js\");\n/* harmony import */ var _src_services_SocialMediaList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/services/SocialMediaList */ \"./src/services/SocialMediaList.js\");\n/* harmony import */ var _src_services_AdminDetail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/services/AdminDetail */ \"./src/services/AdminDetail.js\");\n/* harmony import */ var _src_services_HomeDetail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/services/HomeDetail */ \"./src/services/HomeDetail.js\");\n/* harmony import */ var _src_services_ContactDetail_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/services/ContactDetail.js */ \"./src/services/ContactDetail.js\");\n/* harmony import */ var _src_services_JobList_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/services/JobList.js */ \"./src/services/JobList.js\");\n// ✅ Enable Babel for JSX/ES6+ and ignore CSS imports\n__webpack_require__(/*! ignore-styles */ \"ignore-styles\");\n__webpack_require__(/*! @babel/register */ \"@babel/register\")({\n  presets: [\"@babel/preset-env\", \"@babel/preset-react\"]\n});\nconsole.log(\"🚀 server.js started\");\n\n// ✅ Core modules and React\n\n\n\n\n\n\nconst {\n  HelmetProvider\n} = __webpack_require__(/*! react-helmet-async */ \"react-helmet-async\");\n// ✅ Your React App\nconst App = (__webpack_require__(/*! ../src/App.jsx */ \"./src/App.jsx\")[\"default\"]);\n\n// ✅ API services (adjust paths as needed)\n\n\n\n\n\n\n\n\n\n// ✅ Init Express app\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst PORT = 3000;\n\n// ✅ Serve static assets (JS, CSS, images)\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, \"../public\"), {\n  index: false,\n  // do NOT auto-serve public/index.html\n  extensions: false\n  // maxAge: \"1y\", // optional: cache-control\n}));\n\n// ✅ Main SSR handler\napp.get(\"/*\", async (req, res) => {\n  try {\n    console.log(\"🚀 [SSR] Incoming request:\", req.url);\n\n    // 🛑 Skip SSR for non-page or system paths\n    const skipSSRPaths = [\"/robots.txt\", \"/favicon.ico\", \"/manifest.json\", \"/sitemap.xml\"];\n    if (req.url.startsWith(\"/.well-known/\") || skipSSRPaths.includes(req.url)) {\n      const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, \"../public\".concat(req.url));\n      if (fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(filePath)) {\n        return res.sendFile(filePath);\n      } else {\n        return res.status(404).send(\"Not Found\");\n      }\n    }\n\n    // 1️⃣ Prepare data containers\n    const data = {\n      homeDetailData: null,\n      ContactDetailData: null,\n      contactSeoData: null,\n      ChannelDetailData: null,\n      aboutDetailData: null,\n      CareerDetailData: null,\n      PropertyListData: [],\n      CompletedPropertyListData: [],\n      SocialMediaListData: [],\n      PageListData: [],\n      AdminDetailData: [],\n      JobListData: []\n    };\n\n    // 2️⃣ Fetch shared data in parallel\n    const [adminData, socialData, propertyList, pageList, completedList, homeDetail, ContactDetailData, jobListData] = await Promise.all([(0,_src_services_AdminDetail__WEBPACK_IMPORTED_MODULE_10__.AdminDetail)(), (0,_src_services_SocialMediaList__WEBPACK_IMPORTED_MODULE_9__.SocialMediaList)(), (0,_src_services_PropertList__WEBPACK_IMPORTED_MODULE_6__.PropertyList)(), (0,_src_services_PageList__WEBPACK_IMPORTED_MODULE_8__.PageList)(), (0,_src_services_CompletedPropertyList__WEBPACK_IMPORTED_MODULE_7__.CompletedPropertyList)(), (0,_src_services_HomeDetail__WEBPACK_IMPORTED_MODULE_11__.HomeDetail)(), (0,_src_services_ContactDetail_js__WEBPACK_IMPORTED_MODULE_12__.ContactDetail)(), (0,_src_services_JobList_js__WEBPACK_IMPORTED_MODULE_13__.JobList)()]);\n    data.AdminDetailData = adminData;\n    data.JobListData = jobListData;\n    data.SocialMediaListData = socialData;\n    data.PropertyListData = propertyList;\n    data.PageListData = pageList;\n    data.CompletedPropertyListData = completedList;\n    data.homeDetailData = homeDetail;\n    data.ContactDetailData = ContactDetailData;\n\n    // 5️⃣ Route analysis\n    const staticPaths = ['about-us', 'completed-projects', 'contact-us', 'channelpartner', 'career'];\n    let slug = null;\n    let isStaticPage = false;\n    const parts = req.path.split(\"/\").filter(Boolean);\n    if (parts.length === 1) {\n      const firstPart = parts[0];\n      if (staticPaths.includes(firstPart)) {\n        isStaticPage = true;\n        if (firstPart === \"about-us\") {\n          data.aboutDetailData = data.PageListData.find(p => p.slug === \"about-us\");\n        }\n        if (firstPart === \"channelpartner\") {\n          data.ChannelDetailData = data.PageListData.find(p => p.slug === \"channelpartner\");\n        }\n        if (firstPart === \"contact-us\") {\n          data.contactSeoData = data.PageListData.find(p => p.slug === \"contact-us\");\n        }\n        if (firstPart === \"career\") {\n          data.CareerDetailData = data.PageListData.find(p => p.slug === \"career\");\n        }\n        if (firstPart === \"completed-projects\") {}\n      } else {\n        slug = firstPart;\n      }\n    }\n    let projectData = null;\n    if (slug && !isStaticPage) {\n      const allProjects = [...propertyList, ...completedList];\n      projectData = allProjects.find(p => p.slug === slug);\n      if (projectData) {\n        data.projectData = projectData;\n        // MetaData.title = projectData.page_title;\n        // MetaData.description = projectData.page_description;\n        // MetaData.keywords = projectData.page_keywords;\n        // MetaData.path = \"/\" + projectData.slug + \"/\";\n      } else {\n        console.log(\"\\u274C Project not found for slug: \".concat(slug));\n        return res.redirect(\"/\");\n      }\n    }\n\n    // 7️⃣ Render app HTML\n    const helmetContext = {}; // ✅ init empty\n\n    const appHtml = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(HelmetProvider, {\n      context: helmetContext\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__.StaticRouter, {\n      location: req.url\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(App, {\n      data: data\n    }))));\n    const {\n      helmet\n    } = helmetContext;\n\n    // 9️⃣ Final HTML\n    const html = \"\\n      <!DOCTYPE html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n          <meta charset=\\\"UTF-8\\\" />\\n          <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n          \".concat(helmet.title.toString(), \"\\n          \").concat(helmet.meta.toString(), \"\\n          \").concat(helmet.link.toString(), \"\\n          <link rel=\\\"preload\\\" as=\\\"font\\\" href=\\\"/fonts/cabinet-grotesk/CabinetGrotesk-Black.woff2\\\" type=\\\"font/woff2\\\" crossorigin=\\\"anonymous\\\" />\\n\\t        <link rel=\\\"preload\\\" as=\\\"font\\\" href=\\\"/fonts/cabinet-grotesk/CabinetGrotesk-Black.woff\\\" type=\\\"font/woff\\\" crossorigin=\\\"anonymous\\\" />\\n\\t        <link rel=\\\"preload\\\" as=\\\"font\\\" href=\\\"/fonts/cabinet-grotesk/CabinetGrotesk-Bold.woff2\\\" type=\\\"font/woff2\\\" crossorigin=\\\"anonymous\\\" />\\n\\t        <link rel=\\\"preload\\\" as=\\\"font\\\" href=\\\"/fonts/cabinet-grotesk/CabinetGrotesk-Bold.woff\\\" type=\\\"font/woff\\\" crossorigin=\\\"anonymous\\\" />\\n\\t        <link rel=\\\"preload\\\" as=\\\"font\\\" href=\\\"/fonts/cabinet-grotesk/CabinetGrotesk-Light.woff2\\\" type=\\\"font/woff2\\\" crossorigin=\\\"anonymous\\\" />\\n\\t        <link rel=\\\"preload\\\" as=\\\"font\\\" href=\\\"/fonts/cabinet-grotesk/CabinetGrotesk-Light.woff\\\" type=\\\"font/woff\\\" crossorigin=\\\"anonymous\\\" />\\n\\t        <link rel=\\\"preload\\\" as=\\\"font\\\" href=\\\"/fonts/cabinet-grotesk/CabinetGrotesk-Medium.woff2\\\" type=\\\"font/woff2\\\" crossorigin=\\\"anonymous\\\" />\\n\\t        <link rel=\\\"preload\\\" as=\\\"font\\\" href=\\\"/fonts/cabinet-grotesk/CabinetGrotesk-Medium.woff\\\" type=\\\"font/woff\\\" crossorigin=\\\"anonymous\\\" />\\n\\t        <link rel=\\\"preload\\\" as=\\\"font\\\" href=\\\"/fonts/cabinet-grotesk/CabinetGrotesk-Regular.woff2\\\" type=\\\"font/woff2\\\" crossorigin=\\\"anonymous\\\" />\\n\\t        <link rel=\\\"preload\\\" as=\\\"font\\\" href=\\\"/fonts/cabinet-grotesk/CabinetGrotesk-Regular.woff\\\" type=\\\"font/woff\\\" crossorigin=\\\"anonymous\\\" />\\n          <link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\">\\n          <link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\" crossorigin>\\n          <link rel=\\\"preload\\\" href=\\\"/styles/globals.css\\\" as=\\\"style\\\">\\n          <link rel=\\\"stylesheet\\\" href=\\\"/styles/globals.css\\\">\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0\\\" />\\n          <style>\\n\\t\\tbody {\\n\\t\\t\\toverflow-x: hidden !important;\\n\\t\\t}\\n\\n\\t\\t.page-view {\\n\\t\\t\\tmin-height: 100vh;\\n\\t\\t\\t/* padding-top: 90px; */\\n\\t\\t}\\n\\n\\n\\t\\t.fullpageloader {\\n\\t\\t\\tdisplay: grid;\\n\\t\\t\\tplace-items: center;\\n\\t\\t\\tposition: fixed;\\n\\t\\t\\ttop: 0;\\n\\t\\t\\tleft: 0;\\n\\t\\t\\twidth: 100svw;\\n\\t\\t\\theight: 100svh;\\n\\t\\t\\tz-index: 99999999999999;\\n\\t\\t\\tbackground-color: #ffffff;\\n\\t\\t\\ttransition: opacity ease 0.4s;\\n\\t\\t\\t-moz-transition: opacity ease 0.4s;\\n\\t\\t\\t-webkit-transition: opacity ease 0.4s;\\n\\t\\t\\t-ms-transition: opacity ease 0.4s;\\n\\t\\t\\t-o-transition: opacity ease 0.4s;\\n\\t\\t}\\n\\n\\t\\t.fullpageloader.hiddenloader {\\n\\t\\t\\topacity: 0;\\n\\t\\t\\tvisibility: hidden;\\n\\t\\t\\t/* display: none; */\\n\\t\\t\\tpointer-events: none !important;\\n\\t\\t}\\n\\n\\t\\t.fullpageloader div {\\n\\t\\t\\twidth: 50%;\\n\\t\\t}\\n\\n\\t\\t.fullpageloader div svg {\\n\\t\\t\\twidth: 100%;\\n\\t\\t}\\n\\n\\n\\n\\n\\n\\n\\t\\t@media only screen and (max-width: 767px) {\\n\\t\\t\\t.fullpageloader div {\\n\\t\\t\\t\\twidth: 80%;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t</style>\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\">\").concat(appHtml, \"</div>\\n          <script>\\n            window.__INITIAL_DATA__ = \").concat(JSON.stringify(data).replace(/</g, '\\\\u003c'), \";\\n          </script>\\n          <script src=\\\"/bundle.js?v=\").concat(Date.now(), \"\\\"></script>\\n        </body>\\n      </html>\\n    \");\n\n    // ✅ Send final response\n    res.status(200).type(\"html\").send(html);\n  } catch (err) {\n    console.error(\"❌ SSR Error:\", err);\n    res.status(500).send(\"Internal Server Error\");\n  }\n});\n\n// ✅ Start server\napp.listen(PORT, () => {\n  console.log(\"\\uD83D\\uDE80 SSR server running at Port: \".concat(PORT));\n});\n\n//# sourceURL=webpack://swati-react-ssr/./server/server.js?");

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ \"./src/pages/Home.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.jsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_ScrollToTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ScrollToTop */ \"./src/components/ScrollToTop.jsx\");\n\n\n\n\n// import Footer from \"./components/Footer\";\n// import Detail from \"./pages/Detail\"\n// import CompletedProjects from \"./pages/CompletedProjects\"\n// import Thankyou from \"./pages/ThankYou\";\n// import ContactUs from \"./pages/ContactUs\"\n// import ChannelPartner from \"./pages/ChannelPartner\"\n// import Career from \"./pages/Career\"\n// import AboutUs from \"./pages/AboutUs\"\n\n\n\n// import HeaderInquiryForm from \"./components/HeaderInquiryForm\";\n// import \"../public/styles/globals.css\"\nif (typeof window !== \"undefined\") {\n  Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! @fancyapps/ui/dist/fancybox/fancybox.css */ \"@fancyapps/ui/dist/fancybox/fancybox.css\", 23));\n}\nconst App = _ref => {\n  let {\n    data\n  } = _ref;\n  const [inquiryPopup, setInquiryPopup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [inquiryPopupObj, setInquiryPopupObj] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [isAmenityOpen, setAmenityToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [isProximityOpen, setProximityToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const shouldLockScroll = inquiryPopup || isAmenityOpen || isProximityOpen;\n    document.body.style.overflow = shouldLockScroll ? \"hidden\" : \"auto\";\n    return () => {\n      document.body.style.overflow = \"auto\"; // cleanup on unmount\n    };\n  }, [inquiryPopup, isAmenityOpen, isProximityOpen]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, !isAmenityOpen && !isProximityOpen && !inquiryPopup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    inquiryPopup: inquiryPopup,\n    setInquiryPopup: setInquiryPopup,\n    adminDetail: data.AdminDetailData,\n    propertylist: data.PropertyListData,\n    socialList: data.SocialMediaListData\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ScrollToTop__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"main\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      inquiryPopupObj: inquiryPopupObj,\n      setInquiryPopupObj: setInquiryPopupObj,\n      inquiryPopup: inquiryPopup,\n      setInquiryPopup: setInquiryPopup,\n      homeDetails: data.homeDetailData,\n      propertylist: data.PropertyListData,\n      completedPropertylist: data.CompletedPropertyListData\n    })\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n    position: \"bottom-right\",\n    autoClose: 3000,\n    hideProgressBar: true,\n    newestOnTop: false,\n    closeOnClick: true,\n    rtl: false,\n    pauseOnFocusLoss: false,\n    draggable: false,\n    pauseOnHover: false\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://swati-react-ssr/./src/App.jsx?");

/***/ }),

/***/ "./src/components/Header.css":
/*!***********************************!*\
  !*** ./src/components/Header.css ***!
  \***********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://swati-react-ssr/./src/components/Header.css?");

/***/ }),

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.css */ \"./src/components/Header.css\");\n/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Header(_ref) {\n  let {\n    inquiryPopup,\n    setInquiryPopup,\n    adminDetail,\n    propertylist,\n    socialList\n  } = _ref;\n  const location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();\n  const activePath = location.pathname;\n  const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [isMobileScreen, setMobileScreen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [categoryList, setCategoryList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [megaMenuCategory, setMegaMenuCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [megaMenuActive, setMegaMenuToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [menuToggle, setMenuToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [megaMenuList, setMegaMenuList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const toggleAccordion = index => {\n    setActiveIndex(index === activeIndex ? null : index);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (window.innerWidth < 767) {\n      setMobileScreen(true);\n    }\n    if (Array.isArray(propertylist)) {\n      getCategory();\n    }\n    setIsMounted(true);\n    console.log(categoryList);\n  }, [propertylist]);\n  async function getCategory() {\n    try {\n      const categorySet = new Set();\n      const categoryArray = [];\n      propertylist.forEach(value => {\n        if (!categorySet.has(value.category)) {\n          categoryArray.push({\n            category: value.category\n          });\n          categorySet.add(value.category);\n        }\n      });\n      setCategoryList(categoryArray);\n    } catch (error) {\n      console.error(\"Error fetching property details:\", error);\n    }\n  }\n  const megaMenuClick = category => {\n    if (megaMenuCategory == category) {\n      setMegaMenuCategory('');\n      setMegaMenuToggle(false);\n      setMegaMenuList([]);\n    } else {\n      setMegaMenuCategory(category);\n      setMegaMenuToggle(true);\n      let tempArray = propertylist.filter(p => p.category == category);\n      setMegaMenuList(tempArray);\n    }\n  };\n  const megaMenuClickClose = () => {\n    setMegaMenuCategory('');\n    setMegaMenuToggle(false);\n  };\n  if (!categoryList || categoryList.length === 0) return null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header-wrapper noPrint\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"main-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header-flex  \".concat(inquiryPopup ? \"webmenu_hidden2\" : \"\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header-logo\",\n    onClick: () => {\n      setMenuToggle(!menuToggle);\n      megaMenuClickClose();\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"/images/logo/smart-homes-logo.svg\",\n    alt: \"\",\n    className: \"\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header-links-ul\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"section-paragraph hidden-xs hidden-sm\"\n  }, categoryList && categoryList.length > 0 && categoryList.map((category_data, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: \"hide-tab-mobile\",\n    key: index,\n    onClick: e => {\n      setMenuToggle(false);\n      megaMenuClick(category_data.category);\n      e.stopPropagation();\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"javascript:void(0);\",\n    className: \" \".concat(megaMenuCategory == category_data.category ? \"active \" : \"\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"capitalize \".concat(megaMenuCategory == category_data.category ? \"secondary-color\" : \"\")\n  }, category_data.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"material-symbols-outlined\"\n  }, \" keyboard_arrow_down \")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"bulk-land-in-dholera/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"capitalize \".concat(activePath == '/bulk-land-in-dholera/' ? \"secondary-color\" : \"\")\n  }, \"Bulk Land\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"about-us/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"capitalize \".concat(activePath == '/about-us/' ? \"secondary-color\" : \"\")\n  }, \"About\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"channel-partners/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"capitalize \".concat(activePath == '/channel-partners/' ? \"secondary-color\" : \"\")\n  }, \"Channel Partners\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"nri-corner/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"capitalize \".concat(activePath == '/nri-corner/' ? \"secondary-color\" : \"\")\n  }, \"NRI Corner\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: \"headerBtn\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"contact-us/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"reecosys-template-button button-style-secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"\"\n  }, \"Contact Us\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"visible-tab-mobile\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    \"ng-click\": \"open_contact_dropdown(); mobile_menu_close();\",\n    className: \"blink-background\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"/images/icon/call-green.svg\",\n    alt: \"\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"menubar \".concat(menuToggle ? 'active' : ''),\n    onClick: () => {\n      setMenuToggle(!menuToggle);\n      megaMenuClickClose();\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"bar bar-top\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"bar bar-middle\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"bar bar-bottom\"\n  })))))))), megaMenuActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenu-wrapper\",\n    id: \"megamenu-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenugrid\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenuTitle inner-flex inner-flex-big j-c-sb\",\n    style: {\n      height: \"100%\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"section-title\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: \"medium-fonts uppercase\"\n  }, megaMenuCategory, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), \"Projects\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"wfc\",\n    style: \"margin-top: 2rem\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"projects/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"reecosys-template-button button-style-primary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"\"\n  }, \"View All Projects\")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenuContent\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenuItem relative inner-flex\",\n    \"ng-repeat\": \"data in megaMenuList | limitTo : 8\",\n    \"ng-className\": \"{'active' : activePath == '/{{data.slug}}/' }\",\n    \"ng-if\": \"data.project_id != 744  \",\n    \"ng-click\": \"megaMenuClickClose();\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"{{data.slug}}/\",\n    \"ng-if\": \"megaMenuCategory != 'Commercial' \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenuStatus statusText\",\n    \"ng-if\": \"data.status\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"text-uppercase white-color\"\n  }, data.status == \"under construction\" ? \"Ongoing\" : data.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenuImg relative overflow small-border-radius\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://dummyimage.com/250x250/c1c1c1/c1c1c1\",\n    hires: \"{{data.banner_data.image_web_full}}&h=350&w=350&q=100\",\n    alt: \"reecosys\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenu_overlay\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenu_overlay_2\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenuText\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"section-paragraph\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"medium-fonts text-uppercase white-color\"\n  }, data.project_title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"inner-flex inner-flex-smallest\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"project-info-flex flex-row alc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"project_list_icon common-icon\",\n    \"ng-if\": \"data.size_price\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"assets/images/icon/building.svg\",\n    alt: \"{{data.project_title}}\",\n    className: \"filterIcon\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"white-color\"\n  }, data.size_price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"project-info-flex flex-row alc\",\n    \"ng-if\": \"data.location\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"project_list_icon common-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"assets/images/icon/location.svg\",\n    alt: \"{{data.project_title}}\",\n    className: \"filterIcon\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"white-color\"\n  }, data.location)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"project-info-flex small_content ellips2 flex-row alc\",\n    \"ng-if\": \"data.construction\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"progress-status-list\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"progress\",\n    \"data-percentage\": \"{{data.construction.progress_percent}}\",\n    \"ng-if\": \"data.construction.progress_percent > 0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"progress-left\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"progress-bar\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"progress-right\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"progress-bar\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"progress-value\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"white-color\"\n  }, data.construction.progress_percent))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"iconimg\",\n    \"ng-if\": \"data.construction.progress_percent <= 0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"assets/images/icon/construction.svg\",\n    className: \"filterIcon\",\n    alt: \"Construction Image\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"white-color capitalize\"\n  }, data.status))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"{{data.slug}}/\",\n    \"ng-if\": \"megaMenuCategory == 'Commercial' \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenuStatus statusText\",\n    \"ng-if\": \"data.status\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"text-uppercase white-color\"\n  }, data.status == \"under construction\" ? \"Ongoing\" : data.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenuImg relative overflow small-border-radius\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://dummyimage.com/250x250/c1c1c1/c1c1c1\",\n    hires: \"{{data.banner_data.image_web_full}}&h=350&w=350&q=100\",\n    alt: \"reecosys\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenu_overlay\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenu_overlay_2\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenuText\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"section-paragraph\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"medium-fonts text-uppercase white-color\"\n  }, data.project_title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"inner-flex inner-flex-smallest\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"project-info-flex flex-row alc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"project_list_icon common-icon\",\n    \"ng-if\": \"data.size_price\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"assets/images/icon/building.svg\",\n    alt: \"{{data.project_title}}\",\n    className: \"filterIcon\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"white-color\"\n  }, data.size_price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"project-info-flex flex-row alc\",\n    \"ng-if\": \"data.location\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"project_list_icon common-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"assets/images/icon/location.svg\",\n    alt: \"{{data.project_title}}\",\n    className: \"filterIcon\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"white-color\"\n  }, data.location)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"project-info-flex small_content ellips2 flex-row alc\",\n    \"ng-if\": \"data.construction\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"progress-status-list\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"progress\",\n    \"data-percentage\": \"{{data.construction.progress_percent}}\",\n    \"ng-if\": \"data.construction.progress_percent > 0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"progress-left\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"progress-bar\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"progress-right\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"progress-bar\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"progress-value\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"white-color\"\n  }, data.construction.progress_percent))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"iconimg\",\n    \"ng-if\": \"data.construction.progress_percent <= 0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"assets/images/icon/construction.svg\",\n    className: \"filterIcon\",\n    alt: \"Construction Image\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"white-color capitalize\"\n  }, data.status)))))))))));\n}\n\n//# sourceURL=webpack://swati-react-ssr/./src/components/Header.jsx?");

/***/ }),

/***/ "./src/components/ScrollToTop.jsx":
/*!****************************************!*\
  !*** ./src/components/ScrollToTop.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollToTop)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ScrollToTop() {\n  const {\n    pathname\n  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    // Scroll to top whenever the pathname changes\n    window.scrollTo(0, 0);\n  }, [pathname]);\n  return null; // This component does not render anything\n}\n\n//# sourceURL=webpack://swati-react-ssr/./src/components/ScrollToTop.jsx?");

/***/ }),

/***/ "./src/components/Seo.jsx":
/*!********************************!*\
  !*** ./src/components/Seo.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ \"react-helmet-async\");\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Seo = _ref => {\n  let {\n    metaData = {}\n  } = _ref;\n  if (!metaData.page_title) return null;\n  const baseUrl = \"https://swati-react.onrender.com/\";\n  const fullUrl = \"\".concat(baseUrl.replace(/\\/+$/, \"\"), \"/\").concat((metaData.slug || \"\").replace(/^\\/+/, \"\"));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, metaData.page_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"description\",\n    content: metaData.page_description || \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"keywords\",\n    content: metaData.page_keywords || \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    property: \"og:title\",\n    content: metaData.page_title\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    property: \"og:description\",\n    content: metaData.page_description || \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    property: \"og:type\",\n    content: \"website\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    property: \"og:url\",\n    content: fullUrl\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    property: \"og:locale\",\n    content: \"en_US\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    property: \"og:site_name\",\n    content: \"SwatiProcon\"\n  }), metaData.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    property: \"og:image\",\n    content: metaData.image\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"twitter:card\",\n    content: \"summary_large_image\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"twitter:title\",\n    content: metaData.page_title\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"twitter:description\",\n    content: metaData.page_description || \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"twitter:site\",\n    content: \"@SwatiProcon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"twitter:creator\",\n    content: \"@SwatiProcon\"\n  }), metaData.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"twitter:image\",\n    content: metaData.image\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"robots\",\n    content: \"index, follow\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"author\",\n    content: \"SwatiProcon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"link\", {\n    rel: \"canonical\",\n    href: fullUrl\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);\n\n//# sourceURL=webpack://swati-react-ssr/./src/components/Seo.jsx?");

/***/ }),

/***/ "./src/pages/Home.jsx":
/*!****************************!*\
  !*** ./src/pages/Home.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_HomeDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/HomeDetail */ \"./src/services/HomeDetail.js\");\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Seo */ \"./src/components/Seo.jsx\");\n\n\n\n\n\nfunction Home(_ref) {\n  let {\n    inquiryPopupObj,\n    setInquiryPopupObj,\n    inquiryPopup,\n    setInquiryPopup,\n    homeDetails,\n    propertylist,\n    completedPropertylist\n  } = _ref;\n  const [isMobilescreen, setMobileScreen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [homeDetailsData, setHomeDetail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(homeDetails || null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (window.innerWidth < 767) {\n      setMobileScreen(true);\n    }\n    // if (!homeDetailsData) {\n\n    // }\n  }, []);\n  const seoMetaData = homeDetailsData && {\n    page_title: homeDetailsData.page_title || \"\",\n    page_description: homeDetailsData.page_description || \"\",\n    page_keywords: homeDetailsData.page_keywords || \"\",\n    slug: \"/\",\n    image: homeDetailsData.page_image_full ? homeDetailsData.page_image_full.includes(\"?\") ? \"\".concat(homeDetailsData.page_image_full, \"&w=1280&h=640\") : \"\".concat(homeDetailsData.page_image_full, \"?w=1280&h=640\") : \"/images/og-image.png\"\n  };\n  if (!homeDetailsData) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Error loading data\");\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Hello From Home Page\"), \"      \");\n}\n\n//# sourceURL=webpack://swati-react-ssr/./src/pages/Home.jsx?");

/***/ }),

/***/ "./src/services/AdminDetail.js":
/*!*************************************!*\
  !*** ./src/services/AdminDetail.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdminDetail: () => (/* binding */ AdminDetail)\n/* harmony export */ });\nconst AdminDetail = async () => {\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Admin/admin/details\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        user_name: \"smarthomesinfrastructure\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/AdminDetail.js?");

/***/ }),

/***/ "./src/services/CompletedPropertyList.js":
/*!***********************************************!*\
  !*** ./src/services/CompletedPropertyList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CompletedPropertyList: () => (/* binding */ CompletedPropertyList)\n/* harmony export */ });\nconst CompletedPropertyList = async () => {\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Services/properties/completed_properties\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        all_detail: \"1\",\n        master_user_id: \"339\",\n        logged_in_master_user_id: \"339\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/CompletedPropertyList.js?");

/***/ }),

/***/ "./src/services/ContactDetail.js":
/*!***************************************!*\
  !*** ./src/services/ContactDetail.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContactDetail: () => (/* binding */ ContactDetail)\n/* harmony export */ });\nconst ContactDetail = async () => {\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Admin/contact_page/details\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        master_user_id: \"339\",\n        logged_in_master_user_id: \"339\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/ContactDetail.js?");

/***/ }),

/***/ "./src/services/HomeDetail.js":
/*!************************************!*\
  !*** ./src/services/HomeDetail.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomeDetail: () => (/* binding */ HomeDetail)\n/* harmony export */ });\nconst HomeDetail = async () => {\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Admin/home/details\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        master_user_id: \"339\",\n        logged_in_master_user_id: \"339\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/HomeDetail.js?");

/***/ }),

/***/ "./src/services/JobList.js":
/*!*********************************!*\
  !*** ./src/services/JobList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   JobList: () => (/* binding */ JobList)\n/* harmony export */ });\nconst JobList = async () => {\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Services/career_jobs/list\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        master_user_id: \"339\",\n        logged_in_master_user_id: \"339\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/JobList.js?");

/***/ }),

/***/ "./src/services/PageList.js":
/*!**********************************!*\
  !*** ./src/services/PageList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageList: () => (/* binding */ PageList)\n/* harmony export */ });\nconst PageList = async () => {\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Admin/pages/list\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        master_user_id: \"339\",\n        logged_in_master_user_id: \"339\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/PageList.js?");

/***/ }),

/***/ "./src/services/PropertList.js":
/*!*************************************!*\
  !*** ./src/services/PropertList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PropertyList: () => (/* binding */ PropertyList)\n/* harmony export */ });\nconst PropertyList = async () => {\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Services/properties/list\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        all_detail: \"1\",\n        master_user_id: \"339\",\n        logged_in_master_user_id: \"339\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/PropertList.js?");

/***/ }),

/***/ "./src/services/SocialMediaList.js":
/*!*****************************************!*\
  !*** ./src/services/SocialMediaList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SocialMediaList: () => (/* binding */ SocialMediaList)\n/* harmony export */ });\nconst SocialMediaList = async () => {\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Admin/social_page/list\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        master_user_id: \"339\",\n        logged_in_master_user_id: \"339\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    } else {\n      return null;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/SocialMediaList.js?");

/***/ }),

/***/ "@babel/register":
/*!**********************************!*\
  !*** external "@babel/register" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/register");

/***/ }),

/***/ "@fancyapps/ui/dist/fancybox/fancybox.css":
/*!***********************************************************!*\
  !*** external "@fancyapps/ui/dist/fancybox/fancybox.css" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fancyapps/ui/dist/fancybox/fancybox.css");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "ignore-styles":
/*!********************************!*\
  !*** external "ignore-styles" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("ignore-styles");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet-async":
/*!*************************************!*\
  !*** external "react-helmet-async" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet-async");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom/server");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react-toastify/dist/ReactToastify.css":
/*!********************************************************!*\
  !*** external "react-toastify/dist/ReactToastify.css" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
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