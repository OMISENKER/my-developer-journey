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
exports.id = "app/api/goals/streaks/route";
exports.ids = ["app/api/goals/streaks/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgoals%2Fstreaks%2Froute&page=%2Fapi%2Fgoals%2Fstreaks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgoals%2Fstreaks%2Froute.ts&appDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgoals%2Fstreaks%2Froute&page=%2Fapi%2Fgoals%2Fstreaks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgoals%2Fstreaks%2Froute.ts&appDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_Complab502_01_Documents_webdev_hackathon_mydev_app_api_goals_streaks_route_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/api/goals/streaks/route.ts */ \"(rsc)/./app/api/goals/streaks/route.ts\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/goals/streaks/route\",\n        pathname: \"/api/goals/streaks\",\n        filename: \"route\",\n        bundlePath: \"app/api/goals/streaks/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Complab502-01\\\\Documents\\\\webdev-hackathon\\\\mydev\\\\app\\\\api\\\\goals\\\\streaks\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Complab502_01_Documents_webdev_hackathon_mydev_app_api_goals_streaks_route_ts__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/goals/streaks/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZnb2FscyUyRnN0cmVha3MlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdvYWxzJTJGc3RyZWFrcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdvYWxzJTJGc3RyZWFrcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNDb21wbGFiNTAyLTAxJTVDRG9jdW1lbnRzJTVDd2ViZGV2LWhhY2thdGhvbiU1Q215ZGV2JTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNDb21wbGFiNTAyLTAxJTVDRG9jdW1lbnRzJTVDd2ViZGV2LWhhY2thdGhvbiU1Q215ZGV2JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUM4RDtBQUM3SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1kZXYtam91cm5leS8/Zjg1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxDb21wbGFiNTAyLTAxXFxcXERvY3VtZW50c1xcXFx3ZWJkZXYtaGFja2F0aG9uXFxcXG15ZGV2XFxcXGFwcFxcXFxhcGlcXFxcZ29hbHNcXFxcc3RyZWFrc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ29hbHMvc3RyZWFrcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2dvYWxzL3N0cmVha3NcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2dvYWxzL3N0cmVha3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxDb21wbGFiNTAyLTAxXFxcXERvY3VtZW50c1xcXFx3ZWJkZXYtaGFja2F0aG9uXFxcXG15ZGV2XFxcXGFwcFxcXFxhcGlcXFxcZ29hbHNcXFxcc3RyZWFrc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9nb2Fscy9zdHJlYWtzL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgoals%2Fstreaks%2Froute&page=%2Fapi%2Fgoals%2Fstreaks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgoals%2Fstreaks%2Froute.ts&appDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/auth.config.ts":
/*!*************************************!*\
  !*** ./app/api/auth/auth.config.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user user:email repo public_repo\"\n                }\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    callbacks: {\n        async jwt ({ token, account, profile }) {\n            // Persist the OAuth access_token and user profile during signin\n            if (account && profile) {\n                token.accessToken = account.access_token;\n                token.profile = profile;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            // Send properties to the client\n            session.accessToken = token.accessToken;\n            if (token.profile) {\n                session.user = {\n                    ...session.user,\n                    ...token.profile\n                };\n            }\n            return session;\n        }\n    },\n    debug: true,\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvYXV0aC5jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN1RDtBQUNkO0FBQ2E7QUFFL0MsTUFBTUcsY0FBMkI7SUFDdENDLFNBQVNGLHFFQUFjQSxDQUFDRCxvREFBYUE7SUFDckNJLFdBQVc7UUFDVEwsc0VBQWNBLENBQUM7WUFDYk0sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7WUFDdkNDLGVBQWU7Z0JBQ2JDLFFBQVE7b0JBQ05DLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0tBQ0Q7SUFDREMsU0FBUztRQUNQQyxVQUFVO1FBQ1ZDLFFBQVEsS0FBSyxLQUFLLEtBQUs7SUFDekI7SUFDQUMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtZQUNuQyxnRUFBZ0U7WUFDaEUsSUFBSUQsV0FBV0MsU0FBUztnQkFDdEJGLE1BQU1HLFdBQVcsR0FBR0YsUUFBUUcsWUFBWTtnQkFDeENKLE1BQU1FLE9BQU8sR0FBR0E7WUFDbEI7WUFDQSxPQUFPRjtRQUNUO1FBQ0EsTUFBTUwsU0FBUSxFQUFFQSxPQUFPLEVBQUVLLEtBQUssRUFBZ0M7WUFDNUQsZ0NBQWdDO1lBQ2hDTCxRQUFRUSxXQUFXLEdBQUdILE1BQU1HLFdBQVc7WUFDdkMsSUFBSUgsTUFBTUUsT0FBTyxFQUFFO2dCQUNqQlAsUUFBUVUsSUFBSSxHQUFHO29CQUFFLEdBQUdWLFFBQVFVLElBQUk7b0JBQUUsR0FBR0wsTUFBTUUsT0FBTztnQkFBQztZQUNyRDtZQUNBLE9BQU9QO1FBQ1Q7SUFDRjtJQUNBVyxPQUFPO0lBQ1BDLFFBQVFwQixRQUFRQyxHQUFHLENBQUNvQixlQUFlO0FBQ3JDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1kZXYtam91cm5leS8uL2FwcC9hcGkvYXV0aC9hdXRoLmNvbmZpZy50cz83OTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWInXHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gJ0AvbGliL21vbmdvZGInXHJcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSAnQGF1dGgvbW9uZ29kYi1hZGFwdGVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBBdXRoT3B0aW9ucyA9IHtcclxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdpdGh1YlByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCBhcyBzdHJpbmcsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCBhcyBzdHJpbmcsXHJcbiAgICAgIGF1dGhvcml6YXRpb246IHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNjb3BlOiAncmVhZDp1c2VyIHVzZXI6ZW1haWwgcmVwbyBwdWJsaWNfcmVwbycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxyXG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCwgLy8gMzAgZGF5c1xyXG4gIH0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgYWNjb3VudCwgcHJvZmlsZSB9KSB7XHJcbiAgICAgIC8vIFBlcnNpc3QgdGhlIE9BdXRoIGFjY2Vzc190b2tlbiBhbmQgdXNlciBwcm9maWxlIGR1cmluZyBzaWduaW5cclxuICAgICAgaWYgKGFjY291bnQgJiYgcHJvZmlsZSkge1xyXG4gICAgICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gYWNjb3VudC5hY2Nlc3NfdG9rZW5cclxuICAgICAgICB0b2tlbi5wcm9maWxlID0gcHJvZmlsZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlblxyXG4gICAgfSxcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9OiB7IHNlc3Npb246IGFueTsgdG9rZW46IGFueSB9KSB7XHJcbiAgICAgIC8vIFNlbmQgcHJvcGVydGllcyB0byB0aGUgY2xpZW50XHJcbiAgICAgIHNlc3Npb24uYWNjZXNzVG9rZW4gPSB0b2tlbi5hY2Nlc3NUb2tlblxyXG4gICAgICBpZiAodG9rZW4ucHJvZmlsZSkge1xyXG4gICAgICAgIHNlc3Npb24udXNlciA9IHsgLi4uc2Vzc2lvbi51c2VyLCAuLi50b2tlbi5wcm9maWxlIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2Vzc2lvblxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRlYnVnOiB0cnVlLCAvLyBFbmFibGUgZGVidWcgbWVzc2FnZXNcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxufVxyXG4iXSwibmFtZXMiOlsiR2l0aHViUHJvdmlkZXIiLCJjbGllbnRQcm9taXNlIiwiTW9uZ29EQkFkYXB0ZXIiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiYXV0aG9yaXphdGlvbiIsInBhcmFtcyIsInNjb3BlIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJhY2NvdW50IiwicHJvZmlsZSIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwidXNlciIsImRlYnVnIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/auth.config.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/goals/streaks/route.ts":
/*!****************************************!*\
  !*** ./app/api/goals/streaks/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_auth_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.config */ \"(rsc)/./app/api/auth/auth.config.ts\");\n\n\n\n\nasync function GET() {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_auth_auth_config__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db();\n        // Get user's goals and progress\n        const user = await db.collection(\"users\").findOne({\n            email: session.user?.email\n        });\n        if (!user) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"User not found\"\n            }, {\n                status: 404\n            });\n        }\n        const goals = user.goals || [];\n        const progress = await db.collection(\"progress\").find({\n            goalId: {\n                $in: goals.map((g)=>g.id)\n            }\n        }).sort({\n            date: -1\n        }).toArray();\n        // Calculate streaks for each goal\n        const streaks = goals.map((goal)=>{\n            let currentStreak = 0;\n            let lastDate = new Date();\n            // Sort progress by date in descending order\n            const goalProgress = progress.filter((p)=>p.goalId === goal.id).sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime());\n            // Calculate current streak\n            for (const p of goalProgress){\n                const progressDate = new Date(p.date);\n                const dayDiff = Math.floor((lastDate.getTime() - progressDate.getTime()) / (1000 * 60 * 60 * 24));\n                if (dayDiff <= 1 && p.achieved) {\n                    currentStreak++;\n                    lastDate = progressDate;\n                } else {\n                    break;\n                }\n            }\n            return {\n                goalId: goal.id,\n                title: goal.title,\n                currentStreak\n            };\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(streaks);\n    } catch (error) {\n        console.error(\"Error fetching goal streaks:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dvYWxzL3N0cmVha3Mvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBDO0FBQ0Q7QUFDRztBQUNRO0FBRzdDLGVBQWVJO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1ILDJEQUFnQkEsQ0FBQ0MsMERBQVdBO1FBQ2xELElBQUksQ0FBQ0UsU0FBUztZQUNaLE9BQU9MLGtGQUFZQSxDQUFDTSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBZSxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDcEU7UUFFQSxNQUFNQyxTQUFTLE1BQU1SLG9EQUFhQTtRQUNsQyxNQUFNUyxLQUFLRCxPQUFPQyxFQUFFO1FBRXBCLGdDQUFnQztRQUNoQyxNQUFNQyxPQUFPLE1BQU1ELEdBQUdFLFVBQVUsQ0FBQyxTQUFTQyxPQUFPLENBQUM7WUFBRUMsT0FBT1QsUUFBUU0sSUFBSSxFQUFFRztRQUFNO1FBQy9FLElBQUksQ0FBQ0gsTUFBTTtZQUNULE9BQU9YLGtGQUFZQSxDQUFDTSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBaUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3RFO1FBRUEsTUFBTU8sUUFBUUosS0FBS0ksS0FBSyxJQUFJLEVBQUU7UUFDOUIsTUFBTUMsV0FBVyxNQUFNTixHQUFHRSxVQUFVLENBQUMsWUFDbENLLElBQUksQ0FBQztZQUFFQyxRQUFRO2dCQUFFQyxLQUFLSixNQUFNSyxHQUFHLENBQUNDLENBQUFBLElBQUtBLEVBQUVDLEVBQUU7WUFBRTtRQUFFLEdBQzdDQyxJQUFJLENBQUM7WUFBRUMsTUFBTSxDQUFDO1FBQUUsR0FDaEJDLE9BQU87UUFFVixrQ0FBa0M7UUFDbEMsTUFBTUMsVUFBVVgsTUFBTUssR0FBRyxDQUFDTyxDQUFBQTtZQUN4QixJQUFJQyxnQkFBZ0I7WUFDcEIsSUFBSUMsV0FBVyxJQUFJQztZQUVuQiw0Q0FBNEM7WUFDNUMsTUFBTUMsZUFBZWYsU0FDbEJnQixNQUFNLENBQUNDLENBQUFBLElBQUtBLEVBQUVmLE1BQU0sS0FBS1MsS0FBS0wsRUFBRSxFQUNoQ0MsSUFBSSxDQUFDLENBQUNXLEdBQUdDLElBQU0sSUFBSUwsS0FBS0ssRUFBRVgsSUFBSSxFQUFFWSxPQUFPLEtBQUssSUFBSU4sS0FBS0ksRUFBRVYsSUFBSSxFQUFFWSxPQUFPO1lBRXZFLDJCQUEyQjtZQUMzQixLQUFLLE1BQU1ILEtBQUtGLGFBQWM7Z0JBQzVCLE1BQU1NLGVBQWUsSUFBSVAsS0FBS0csRUFBRVQsSUFBSTtnQkFDcEMsTUFBTWMsVUFBVUMsS0FBS0MsS0FBSyxDQUN4QixDQUFDWCxTQUFTTyxPQUFPLEtBQUtDLGFBQWFELE9BQU8sRUFBQyxJQUFNLFFBQU8sS0FBSyxLQUFLLEVBQUM7Z0JBR3JFLElBQUlFLFdBQVcsS0FBS0wsRUFBRVEsUUFBUSxFQUFFO29CQUM5QmI7b0JBQ0FDLFdBQVdRO2dCQUNiLE9BQU87b0JBQ0w7Z0JBQ0Y7WUFDRjtZQUVBLE9BQU87Z0JBQ0xuQixRQUFRUyxLQUFLTCxFQUFFO2dCQUNmb0IsT0FBT2YsS0FBS2UsS0FBSztnQkFDakJkO1lBQ0Y7UUFDRjtRQUVBLE9BQU81QixrRkFBWUEsQ0FBQ00sSUFBSSxDQUFDb0I7SUFDM0IsRUFBRSxPQUFPbkIsT0FBTztRQUNkb0MsUUFBUXBDLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQzlDLE9BQU9QLGtGQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM3RTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZGV2LWpvdXJuZXkvLi9hcHAvYXBpL2dvYWxzL3N0cmVha3Mvcm91dGUudHM/YmQzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnQC9saWIvbW9uZ29kYidcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICcuLi8uLi9hdXRoL2F1dGguY29uZmlnJ1xyXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcclxuICAgIGlmICghc2Vzc2lvbikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2VcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKClcclxuICAgIFxyXG4gICAgLy8gR2V0IHVzZXIncyBnb2FscyBhbmQgcHJvZ3Jlc3NcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmZpbmRPbmUoeyBlbWFpbDogc2Vzc2lvbi51c2VyPy5lbWFpbCB9KVxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVXNlciBub3QgZm91bmQnIH0sIHsgc3RhdHVzOiA0MDQgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnb2FscyA9IHVzZXIuZ29hbHMgfHwgW11cclxuICAgIGNvbnN0IHByb2dyZXNzID0gYXdhaXQgZGIuY29sbGVjdGlvbigncHJvZ3Jlc3MnKVxyXG4gICAgICAuZmluZCh7IGdvYWxJZDogeyAkaW46IGdvYWxzLm1hcChnID0+IGcuaWQpIH0gfSlcclxuICAgICAgLnNvcnQoeyBkYXRlOiAtMSB9KVxyXG4gICAgICAudG9BcnJheSgpXHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHN0cmVha3MgZm9yIGVhY2ggZ29hbFxyXG4gICAgY29uc3Qgc3RyZWFrcyA9IGdvYWxzLm1hcChnb2FsID0+IHtcclxuICAgICAgbGV0IGN1cnJlbnRTdHJlYWsgPSAwXHJcbiAgICAgIGxldCBsYXN0RGF0ZSA9IG5ldyBEYXRlKClcclxuXHJcbiAgICAgIC8vIFNvcnQgcHJvZ3Jlc3MgYnkgZGF0ZSBpbiBkZXNjZW5kaW5nIG9yZGVyXHJcbiAgICAgIGNvbnN0IGdvYWxQcm9ncmVzcyA9IHByb2dyZXNzXHJcbiAgICAgICAgLmZpbHRlcihwID0+IHAuZ29hbElkID09PSBnb2FsLmlkKVxyXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShiLmRhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGEuZGF0ZSkuZ2V0VGltZSgpKVxyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIGN1cnJlbnQgc3RyZWFrXHJcbiAgICAgIGZvciAoY29uc3QgcCBvZiBnb2FsUHJvZ3Jlc3MpIHtcclxuICAgICAgICBjb25zdCBwcm9ncmVzc0RhdGUgPSBuZXcgRGF0ZShwLmRhdGUpXHJcbiAgICAgICAgY29uc3QgZGF5RGlmZiA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAobGFzdERhdGUuZ2V0VGltZSgpIC0gcHJvZ3Jlc3NEYXRlLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNClcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGlmIChkYXlEaWZmIDw9IDEgJiYgcC5hY2hpZXZlZCkge1xyXG4gICAgICAgICAgY3VycmVudFN0cmVhaysrXHJcbiAgICAgICAgICBsYXN0RGF0ZSA9IHByb2dyZXNzRGF0ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBnb2FsSWQ6IGdvYWwuaWQsXHJcbiAgICAgICAgdGl0bGU6IGdvYWwudGl0bGUsXHJcbiAgICAgICAgY3VycmVudFN0cmVha1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihzdHJlYWtzKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBnb2FsIHN0cmVha3M6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSwgeyBzdGF0dXM6IDUwMCB9KVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY2xpZW50UHJvbWlzZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsIkdFVCIsInNlc3Npb24iLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJjbGllbnQiLCJkYiIsInVzZXIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsImVtYWlsIiwiZ29hbHMiLCJwcm9ncmVzcyIsImZpbmQiLCJnb2FsSWQiLCIkaW4iLCJtYXAiLCJnIiwiaWQiLCJzb3J0IiwiZGF0ZSIsInRvQXJyYXkiLCJzdHJlYWtzIiwiZ29hbCIsImN1cnJlbnRTdHJlYWsiLCJsYXN0RGF0ZSIsIkRhdGUiLCJnb2FsUHJvZ3Jlc3MiLCJmaWx0ZXIiLCJwIiwiYSIsImIiLCJnZXRUaW1lIiwicHJvZ3Jlc3NEYXRlIiwiZGF5RGlmZiIsIk1hdGgiLCJmbG9vciIsImFjaGlldmVkIiwidGl0bGUiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/goals/streaks/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/@auth"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgoals%2Fstreaks%2Froute&page=%2Fapi%2Fgoals%2Fstreaks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgoals%2Fstreaks%2Froute.ts&appDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();