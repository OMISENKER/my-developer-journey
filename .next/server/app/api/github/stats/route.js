"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/github/stats/route";
exports.ids = ["app/api/github/stats/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgithub%2Fstats%2Froute&page=%2Fapi%2Fgithub%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgithub%2Fstats%2Froute.ts&appDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgithub%2Fstats%2Froute&page=%2Fapi%2Fgithub%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgithub%2Fstats%2Froute.ts&appDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_Complab502_01_Documents_webdev_hackathon_mydev_app_api_github_stats_route_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/api/github/stats/route.ts */ \"(rsc)/./app/api/github/stats/route.ts\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/github/stats/route\",\n        pathname: \"/api/github/stats\",\n        filename: \"route\",\n        bundlePath: \"app/api/github/stats/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Complab502-01\\\\Documents\\\\webdev-hackathon\\\\mydev\\\\app\\\\api\\\\github\\\\stats\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Complab502_01_Documents_webdev_hackathon_mydev_app_api_github_stats_route_ts__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/github/stats/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZnaXRodWIlMkZzdGF0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ2l0aHViJTJGc3RhdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZnaXRodWIlMkZzdGF0cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNDb21wbGFiNTAyLTAxJTVDRG9jdW1lbnRzJTVDd2ViZGV2LWhhY2thdGhvbiU1Q215ZGV2JTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNDb21wbGFiNTAyLTAxJTVDRG9jdW1lbnRzJTVDd2ViZGV2LWhhY2thdGhvbiU1Q215ZGV2JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUM2RDtBQUM1SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1kZXYtam91cm5leS8/MTNhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxDb21wbGFiNTAyLTAxXFxcXERvY3VtZW50c1xcXFx3ZWJkZXYtaGFja2F0aG9uXFxcXG15ZGV2XFxcXGFwcFxcXFxhcGlcXFxcZ2l0aHViXFxcXHN0YXRzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9naXRodWIvc3RhdHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9naXRodWIvc3RhdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2dpdGh1Yi9zdGF0cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXENvbXBsYWI1MDItMDFcXFxcRG9jdW1lbnRzXFxcXHdlYmRldi1oYWNrYXRob25cXFxcbXlkZXZcXFxcYXBwXFxcXGFwaVxcXFxnaXRodWJcXFxcc3RhdHNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvZ2l0aHViL3N0YXRzL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgithub%2Fstats%2Froute&page=%2Fapi%2Fgithub%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgithub%2Fstats%2Froute.ts&appDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/auth.config.ts":
/*!*************************************!*\
  !*** ./app/api/auth/auth.config.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user user:email repo public_repo\"\n                }\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    callbacks: {\n        async jwt ({ token, account, profile }) {\n            // Persist the OAuth access_token and user profile during signin\n            if (account && profile) {\n                token.accessToken = account.access_token;\n                token.profile = profile;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            // Send properties to the client\n            session.accessToken = token.accessToken;\n            if (token.profile) {\n                session.user = {\n                    ...session.user,\n                    ...token.profile\n                };\n            }\n            return session;\n        }\n    },\n    debug: true,\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvYXV0aC5jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN1RDtBQUNkO0FBQ2E7QUFFL0MsTUFBTUcsY0FBMkI7SUFDdENDLFNBQVNGLHFFQUFjQSxDQUFDRCxvREFBYUE7SUFDckNJLFdBQVc7UUFDVEwsc0VBQWNBLENBQUM7WUFDYk0sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7WUFDdkNDLGVBQWU7Z0JBQ2JDLFFBQVE7b0JBQ05DLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0tBQ0Q7SUFDREMsU0FBUztRQUNQQyxVQUFVO1FBQ1ZDLFFBQVEsS0FBSyxLQUFLLEtBQUs7SUFDekI7SUFDQUMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtZQUNuQyxnRUFBZ0U7WUFDaEUsSUFBSUQsV0FBV0MsU0FBUztnQkFDdEJGLE1BQU1HLFdBQVcsR0FBR0YsUUFBUUcsWUFBWTtnQkFDeENKLE1BQU1FLE9BQU8sR0FBR0E7WUFDbEI7WUFDQSxPQUFPRjtRQUNUO1FBQ0EsTUFBTUwsU0FBUSxFQUFFQSxPQUFPLEVBQUVLLEtBQUssRUFBZ0M7WUFDNUQsZ0NBQWdDO1lBQ2hDTCxRQUFRUSxXQUFXLEdBQUdILE1BQU1HLFdBQVc7WUFDdkMsSUFBSUgsTUFBTUUsT0FBTyxFQUFFO2dCQUNqQlAsUUFBUVUsSUFBSSxHQUFHO29CQUFFLEdBQUdWLFFBQVFVLElBQUk7b0JBQUUsR0FBR0wsTUFBTUUsT0FBTztnQkFBQztZQUNyRDtZQUNBLE9BQU9QO1FBQ1Q7SUFDRjtJQUNBVyxPQUFPO0lBQ1BDLFFBQVFwQixRQUFRQyxHQUFHLENBQUNvQixlQUFlO0FBQ3JDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1kZXYtam91cm5leS8uL2FwcC9hcGkvYXV0aC9hdXRoLmNvbmZpZy50cz83OTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWInXHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gJ0AvbGliL21vbmdvZGInXHJcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSAnQGF1dGgvbW9uZ29kYi1hZGFwdGVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBBdXRoT3B0aW9ucyA9IHtcclxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdpdGh1YlByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCBhcyBzdHJpbmcsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCBhcyBzdHJpbmcsXHJcbiAgICAgIGF1dGhvcml6YXRpb246IHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNjb3BlOiAncmVhZDp1c2VyIHVzZXI6ZW1haWwgcmVwbyBwdWJsaWNfcmVwbycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxyXG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCwgLy8gMzAgZGF5c1xyXG4gIH0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgYWNjb3VudCwgcHJvZmlsZSB9KSB7XHJcbiAgICAgIC8vIFBlcnNpc3QgdGhlIE9BdXRoIGFjY2Vzc190b2tlbiBhbmQgdXNlciBwcm9maWxlIGR1cmluZyBzaWduaW5cclxuICAgICAgaWYgKGFjY291bnQgJiYgcHJvZmlsZSkge1xyXG4gICAgICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gYWNjb3VudC5hY2Nlc3NfdG9rZW5cclxuICAgICAgICB0b2tlbi5wcm9maWxlID0gcHJvZmlsZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlblxyXG4gICAgfSxcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9OiB7IHNlc3Npb246IGFueTsgdG9rZW46IGFueSB9KSB7XHJcbiAgICAgIC8vIFNlbmQgcHJvcGVydGllcyB0byB0aGUgY2xpZW50XHJcbiAgICAgIHNlc3Npb24uYWNjZXNzVG9rZW4gPSB0b2tlbi5hY2Nlc3NUb2tlblxyXG4gICAgICBpZiAodG9rZW4ucHJvZmlsZSkge1xyXG4gICAgICAgIHNlc3Npb24udXNlciA9IHsgLi4uc2Vzc2lvbi51c2VyLCAuLi50b2tlbi5wcm9maWxlIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2Vzc2lvblxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRlYnVnOiB0cnVlLCAvLyBFbmFibGUgZGVidWcgbWVzc2FnZXNcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxufVxyXG4iXSwibmFtZXMiOlsiR2l0aHViUHJvdmlkZXIiLCJjbGllbnRQcm9taXNlIiwiTW9uZ29EQkFkYXB0ZXIiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiYXV0aG9yaXphdGlvbiIsInBhcmFtcyIsInNjb3BlIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJhY2NvdW50IiwicHJvZmlsZSIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwidXNlciIsImRlYnVnIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/auth.config.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/github/stats/route.ts":
/*!***************************************!*\
  !*** ./app/api/github/stats/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @octokit/rest */ \"(rsc)/./node_modules/@octokit/rest/dist-web/index.js\");\n/* harmony import */ var _auth_auth_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.config */ \"(rsc)/./app/api/auth/auth.config.ts\");\n\n\n\n\nasync function GET() {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_auth_auth_config__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Unauthorized - No session\"\n            }, {\n                status: 401\n            });\n        }\n        const token = session.accessToken;\n        if (!token) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Unauthorized - No access token\"\n            }, {\n                status: 401\n            });\n        }\n        const octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_3__.Octokit({\n            auth: token\n        });\n        // Get the authenticated user\n        const { data: user } = await octokit.users.getAuthenticated();\n        // Get the last 30 days of activity\n        const thirtyDaysAgo = new Date();\n        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);\n        // Get user's events\n        const { data: events } = await octokit.activity.listEventsForAuthenticatedUser({\n            username: user.login,\n            per_page: 100\n        });\n        // Filter events to last 30 days and transform them\n        const recentActivity = events.filter((event)=>new Date(event.created_at) >= thirtyDaysAgo).map((event)=>({\n                id: event.id,\n                type: event.type,\n                repo: event.repo.name,\n                createdAt: event.created_at,\n                details: getEventDetails(event)\n            })).slice(0, 10) // Get only the 10 most recent activities\n        ;\n        // Calculate stats\n        const stats = events.reduce((acc, event)=>{\n            const eventDate = new Date(event.created_at);\n            if (eventDate >= thirtyDaysAgo) {\n                switch(event.type){\n                    case \"PushEvent\":\n                        acc.totalCommits += event.payload.commits?.length || 0;\n                        break;\n                    case \"PullRequestEvent\":\n                        if (event.payload.action === \"opened\") {\n                            acc.totalPRs++;\n                        }\n                        break;\n                    case \"IssuesEvent\":\n                        if (event.payload.action === \"opened\") {\n                            acc.totalIssues++;\n                        }\n                        break;\n                }\n            }\n            return acc;\n        }, {\n            totalCommits: 0,\n            totalPRs: 0,\n            totalIssues: 0\n        });\n        // Calculate daily activity for the progress chart\n        const dailyActivity = events.reduce((acc, event)=>{\n            const date = new Date(event.created_at).toISOString().split(\"T\")[0];\n            if (new Date(date) >= thirtyDaysAgo) {\n                acc[date] = (acc[date] || 0) + 1;\n            }\n            return acc;\n        }, {});\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            ...stats,\n            recentActivity,\n            dailyActivity\n        });\n    } catch (error) {\n        console.error(\"Error fetching GitHub stats:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Failed to fetch GitHub stats\"\n        }, {\n            status: 500\n        });\n    }\n}\nfunction getEventDetails(event) {\n    switch(event.type){\n        case \"PushEvent\":\n            return `Pushed ${event.payload.commits?.length || 0} commit(s)`;\n        case \"PullRequestEvent\":\n            return `${event.payload.action} pull request: ${event.payload.pull_request?.title}`;\n        case \"IssuesEvent\":\n            return `${event.payload.action} issue: ${event.payload.issue?.title}`;\n        case \"CreateEvent\":\n            return `Created ${event.payload.ref_type} ${event.payload.ref || \"\"}`;\n        case \"DeleteEvent\":\n            return `Deleted ${event.payload.ref_type} ${event.payload.ref}`;\n        case \"WatchEvent\":\n            return \"Starred the repository\";\n        case \"ForkEvent\":\n            return \"Forked the repository\";\n        default:\n            return event.type.replace(\"Event\", \"\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vbXktZGV2LWpvdXJuZXkvLi9hcHAvYXBpL2dpdGh1Yi9zdGF0cy9yb3V0ZS50cz9lOTVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgeyBPY3Rva2l0IH0gZnJvbSAnQG9jdG9raXQvcmVzdCdcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICcuLi8uLi9hdXRoL2F1dGguY29uZmlnJ1xyXG5cclxuLy8gQWRkIHR5cGUgZGVmaW5pdGlvbnMgZm9yIEdpdEh1YiBldmVudHNcclxuaW50ZXJmYWNlIEdpdEh1YkNvbW1pdCB7XHJcbiAgc2hhOiBzdHJpbmc7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIGRpc3RpbmN0OiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgR2l0SHViRXZlbnRQYXlsb2FkIHtcclxuICBjb21taXRzPzogR2l0SHViQ29tbWl0W107XHJcbiAgYWN0aW9uPzogc3RyaW5nO1xyXG4gIGlzc3VlPzogeyBpZDogbnVtYmVyOyBudW1iZXI6IG51bWJlcjsgc3RhdGU6IHN0cmluZzsgdGl0bGU/OiBzdHJpbmcgfTtcclxuICBwdWxsX3JlcXVlc3Q/OiB7IGlkOiBudW1iZXI7IG51bWJlcjogbnVtYmVyOyBzdGF0ZTogc3RyaW5nOyB0aXRsZT86IHN0cmluZyB9O1xyXG4gIGlkPzogbnVtYmVyO1xyXG4gIG51bWJlcj86IG51bWJlcjtcclxuICBzdGF0ZT86IHN0cmluZztcclxuICByZWZfdHlwZT86IHN0cmluZztcclxuICByZWY/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBHaXRIdWJFdmVudCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcmVwbzogeyBuYW1lOiBzdHJpbmcgfTtcclxuICBjcmVhdGVkX2F0OiBzdHJpbmc7XHJcbiAgcGF5bG9hZDogR2l0SHViRXZlbnRQYXlsb2FkO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcclxuICAgIFxyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnVW5hdXRob3JpemVkIC0gTm8gc2Vzc2lvbicgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAxIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRva2VuID0gc2Vzc2lvbi5hY2Nlc3NUb2tlblxyXG4gICAgXHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnVW5hdXRob3JpemVkIC0gTm8gYWNjZXNzIHRva2VuJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb2N0b2tpdCA9IG5ldyBPY3Rva2l0KHtcclxuICAgICAgYXV0aDogdG9rZW4sXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEdldCB0aGUgYXV0aGVudGljYXRlZCB1c2VyXHJcbiAgICBjb25zdCB7IGRhdGE6IHVzZXIgfSA9IGF3YWl0IG9jdG9raXQudXNlcnMuZ2V0QXV0aGVudGljYXRlZCgpXHJcblxyXG4gICAgLy8gR2V0IHRoZSBsYXN0IDMwIGRheXMgb2YgYWN0aXZpdHlcclxuICAgIGNvbnN0IHRoaXJ0eURheXNBZ28gPSBuZXcgRGF0ZSgpXHJcbiAgICB0aGlydHlEYXlzQWdvLnNldERhdGUodGhpcnR5RGF5c0Fnby5nZXREYXRlKCkgLSAzMClcclxuXHJcbiAgICAvLyBHZXQgdXNlcidzIGV2ZW50c1xyXG4gICAgY29uc3QgeyBkYXRhOiBldmVudHMgfSA9IGF3YWl0IG9jdG9raXQuYWN0aXZpdHkubGlzdEV2ZW50c0ZvckF1dGhlbnRpY2F0ZWRVc2VyKHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXIubG9naW4sXHJcbiAgICAgIHBlcl9wYWdlOiAxMDAsXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEZpbHRlciBldmVudHMgdG8gbGFzdCAzMCBkYXlzIGFuZCB0cmFuc2Zvcm0gdGhlbVxyXG4gICAgY29uc3QgcmVjZW50QWN0aXZpdHkgPSBldmVudHNcclxuICAgICAgLmZpbHRlcigoZXZlbnQ6IEdpdEh1YkV2ZW50KSA9PiBuZXcgRGF0ZShldmVudC5jcmVhdGVkX2F0KSA+PSB0aGlydHlEYXlzQWdvKVxyXG4gICAgICAubWFwKChldmVudDogR2l0SHViRXZlbnQpID0+ICh7XHJcbiAgICAgICAgaWQ6IGV2ZW50LmlkLFxyXG4gICAgICAgIHR5cGU6IGV2ZW50LnR5cGUsXHJcbiAgICAgICAgcmVwbzogZXZlbnQucmVwby5uYW1lLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogZXZlbnQuY3JlYXRlZF9hdCxcclxuICAgICAgICBkZXRhaWxzOiBnZXRFdmVudERldGFpbHMoZXZlbnQpXHJcbiAgICAgIH0pKVxyXG4gICAgICAuc2xpY2UoMCwgMTApIC8vIEdldCBvbmx5IHRoZSAxMCBtb3N0IHJlY2VudCBhY3Rpdml0aWVzXHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHN0YXRzXHJcbiAgICBjb25zdCBzdGF0cyA9IGV2ZW50cy5yZWR1Y2UoXHJcbiAgICAgIChhY2MsIGV2ZW50OiBHaXRIdWJFdmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmNyZWF0ZWRfYXQpXHJcbiAgICAgICAgaWYgKGV2ZW50RGF0ZSA+PSB0aGlydHlEYXlzQWdvKSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnUHVzaEV2ZW50JzpcclxuICAgICAgICAgICAgICBhY2MudG90YWxDb21taXRzICs9IChldmVudC5wYXlsb2FkLmNvbW1pdHM/Lmxlbmd0aCB8fCAwKVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ1B1bGxSZXF1ZXN0RXZlbnQnOlxyXG4gICAgICAgICAgICAgIGlmIChldmVudC5wYXlsb2FkLmFjdGlvbiA9PT0gJ29wZW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGFjYy50b3RhbFBScysrXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ0lzc3Vlc0V2ZW50JzpcclxuICAgICAgICAgICAgICBpZiAoZXZlbnQucGF5bG9hZC5hY3Rpb24gPT09ICdvcGVuZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBhY2MudG90YWxJc3N1ZXMrK1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWNjXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdG90YWxDb21taXRzOiAwLCB0b3RhbFBSczogMCwgdG90YWxJc3N1ZXM6IDAgfVxyXG4gICAgKVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBkYWlseSBhY3Rpdml0eSBmb3IgdGhlIHByb2dyZXNzIGNoYXJ0XHJcbiAgICBjb25zdCBkYWlseUFjdGl2aXR5ID0gZXZlbnRzLnJlZHVjZSgoYWNjOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+LCBldmVudDogR2l0SHViRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmNyZWF0ZWRfYXQpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gICAgICBpZiAobmV3IERhdGUoZGF0ZSkgPj0gdGhpcnR5RGF5c0Fnbykge1xyXG4gICAgICAgIGFjY1tkYXRlXSA9IChhY2NbZGF0ZV0gfHwgMCkgKyAxXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFjY1xyXG4gICAgfSwge30pXHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgLi4uc3RhdHMsXHJcbiAgICAgIHJlY2VudEFjdGl2aXR5LFxyXG4gICAgICBkYWlseUFjdGl2aXR5XHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBHaXRIdWIgc3RhdHM6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggR2l0SHViIHN0YXRzJyB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV2ZW50RGV0YWlscyhldmVudDogR2l0SHViRXZlbnQpIHtcclxuICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcclxuICAgIGNhc2UgJ1B1c2hFdmVudCc6XHJcbiAgICAgIHJldHVybiBgUHVzaGVkICR7ZXZlbnQucGF5bG9hZC5jb21taXRzPy5sZW5ndGggfHwgMH0gY29tbWl0KHMpYFxyXG4gICAgY2FzZSAnUHVsbFJlcXVlc3RFdmVudCc6XHJcbiAgICAgIHJldHVybiBgJHtldmVudC5wYXlsb2FkLmFjdGlvbn0gcHVsbCByZXF1ZXN0OiAke2V2ZW50LnBheWxvYWQucHVsbF9yZXF1ZXN0Py50aXRsZX1gXHJcbiAgICBjYXNlICdJc3N1ZXNFdmVudCc6XHJcbiAgICAgIHJldHVybiBgJHtldmVudC5wYXlsb2FkLmFjdGlvbn0gaXNzdWU6ICR7ZXZlbnQucGF5bG9hZC5pc3N1ZT8udGl0bGV9YFxyXG4gICAgY2FzZSAnQ3JlYXRlRXZlbnQnOlxyXG4gICAgICByZXR1cm4gYENyZWF0ZWQgJHtldmVudC5wYXlsb2FkLnJlZl90eXBlfSAke2V2ZW50LnBheWxvYWQucmVmIHx8ICcnfWBcclxuICAgIGNhc2UgJ0RlbGV0ZUV2ZW50JzpcclxuICAgICAgcmV0dXJuIGBEZWxldGVkICR7ZXZlbnQucGF5bG9hZC5yZWZfdHlwZX0gJHtldmVudC5wYXlsb2FkLnJlZn1gXHJcbiAgICBjYXNlICdXYXRjaEV2ZW50JzpcclxuICAgICAgcmV0dXJuICdTdGFycmVkIHRoZSByZXBvc2l0b3J5J1xyXG4gICAgY2FzZSAnRm9ya0V2ZW50JzpcclxuICAgICAgcmV0dXJuICdGb3JrZWQgdGhlIHJlcG9zaXRvcnknXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gZXZlbnQudHlwZS5yZXBsYWNlKCdFdmVudCcsICcnKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsIk9jdG9raXQiLCJhdXRoT3B0aW9ucyIsIkdFVCIsInNlc3Npb24iLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJ0b2tlbiIsImFjY2Vzc1Rva2VuIiwib2N0b2tpdCIsImF1dGgiLCJkYXRhIiwidXNlciIsInVzZXJzIiwiZ2V0QXV0aGVudGljYXRlZCIsInRoaXJ0eURheXNBZ28iLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJldmVudHMiLCJhY3Rpdml0eSIsImxpc3RFdmVudHNGb3JBdXRoZW50aWNhdGVkVXNlciIsInVzZXJuYW1lIiwibG9naW4iLCJwZXJfcGFnZSIsInJlY2VudEFjdGl2aXR5IiwiZmlsdGVyIiwiZXZlbnQiLCJjcmVhdGVkX2F0IiwibWFwIiwiaWQiLCJ0eXBlIiwicmVwbyIsIm5hbWUiLCJjcmVhdGVkQXQiLCJkZXRhaWxzIiwiZ2V0RXZlbnREZXRhaWxzIiwic2xpY2UiLCJzdGF0cyIsInJlZHVjZSIsImFjYyIsImV2ZW50RGF0ZSIsInRvdGFsQ29tbWl0cyIsInBheWxvYWQiLCJjb21taXRzIiwibGVuZ3RoIiwiYWN0aW9uIiwidG90YWxQUnMiLCJ0b3RhbElzc3VlcyIsImRhaWx5QWN0aXZpdHkiLCJkYXRlIiwidG9JU09TdHJpbmciLCJzcGxpdCIsImNvbnNvbGUiLCJwdWxsX3JlcXVlc3QiLCJ0aXRsZSIsImlzc3VlIiwicmVmX3R5cGUiLCJyZWYiLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/github/stats/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    let globalWithMongo = global;\n    if (!globalWithMongo._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        globalWithMongo._mongoClientPromise = client.connect();\n    }\n    clientPromise = globalWithMongo._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU07QUFDbEI7QUFFQSxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJUCxJQUF5QixFQUFlO0lBQzFDLElBQUlRLGtCQUFrQkM7SUFJdEIsSUFBSSxDQUFDRCxnQkFBZ0JFLG1CQUFtQixFQUFFO1FBQ3hDSixTQUFTLElBQUlQLGdEQUFXQSxDQUFDSyxLQUFLQztRQUM5QkcsZ0JBQWdCRSxtQkFBbUIsR0FBR0osT0FBT0ssT0FBTztJQUN0RDtJQUNBSixnQkFBZ0JDLGdCQUFnQkUsbUJBQW1CO0FBQ3JELE9BQU8sRUFHTjtBQUVELGlFQUFlSCxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZGV2LWpvdXJuZXkvLi9saWIvbW9uZ29kYi50cz8wNWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQvTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJylcclxufVxyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcclxuY29uc3Qgb3B0aW9ucyA9IHt9XHJcblxyXG5sZXQgY2xpZW50XHJcbmxldCBjbGllbnRQcm9taXNlOiBQcm9taXNlPE1vbmdvQ2xpZW50PlxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgbGV0IGdsb2JhbFdpdGhNb25nbyA9IGdsb2JhbCBhcyB0eXBlb2YgZ2xvYmFsVGhpcyAmIHtcclxuICAgIF9tb25nb0NsaWVudFByb21pc2U/OiBQcm9taXNlPE1vbmdvQ2xpZW50PlxyXG4gIH1cclxuXHJcbiAgaWYgKCFnbG9iYWxXaXRoTW9uZ28uX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICAgIGdsb2JhbFdpdGhNb25nby5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsV2l0aE1vbmdvLl9tb25nb0NsaWVudFByb21pc2VcclxufSBlbHNlIHtcclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2VcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImdsb2JhbFdpdGhNb25nbyIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/@auth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/@octokit","vendor-chunks/before-after-hook","vendor-chunks/wrappy","vendor-chunks/universal-user-agent","vendor-chunks/once","vendor-chunks/deprecation"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgithub%2Fstats%2Froute&page=%2Fapi%2Fgithub%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgithub%2Fstats%2Froute.ts&appDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();