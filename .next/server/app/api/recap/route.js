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
exports.id = "app/api/recap/route";
exports.ids = ["app/api/recap/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frecap%2Froute&page=%2Fapi%2Frecap%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frecap%2Froute.ts&appDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frecap%2Froute&page=%2Fapi%2Frecap%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frecap%2Froute.ts&appDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_Complab502_01_Documents_webdev_hackathon_mydev_app_api_recap_route_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/api/recap/route.ts */ \"(rsc)/./app/api/recap/route.ts\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/recap/route\",\n        pathname: \"/api/recap\",\n        filename: \"route\",\n        bundlePath: \"app/api/recap/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Complab502-01\\\\Documents\\\\webdev-hackathon\\\\mydev\\\\app\\\\api\\\\recap\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Complab502_01_Documents_webdev_hackathon_mydev_app_api_recap_route_ts__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/recap/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyZWNhcCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcmVjYXAlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZyZWNhcCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNDb21wbGFiNTAyLTAxJTVDRG9jdW1lbnRzJTVDd2ViZGV2LWhhY2thdGhvbiU1Q215ZGV2JTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNDb21wbGFiNTAyLTAxJTVDRG9jdW1lbnRzJTVDd2ViZGV2LWhhY2thdGhvbiU1Q215ZGV2JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNxRDtBQUNwSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1kZXYtam91cm5leS8/ZWJjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxDb21wbGFiNTAyLTAxXFxcXERvY3VtZW50c1xcXFx3ZWJkZXYtaGFja2F0aG9uXFxcXG15ZGV2XFxcXGFwcFxcXFxhcGlcXFxccmVjYXBcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3JlY2FwL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcmVjYXBcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3JlY2FwL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQ29tcGxhYjUwMi0wMVxcXFxEb2N1bWVudHNcXFxcd2ViZGV2LWhhY2thdGhvblxcXFxteWRldlxcXFxhcHBcXFxcYXBpXFxcXHJlY2FwXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3JlY2FwL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frecap%2Froute&page=%2Fapi%2Frecap%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frecap%2Froute.ts&appDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/auth.config.ts":
/*!*************************************!*\
  !*** ./app/api/auth/auth.config.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user user:email repo public_repo\"\n                }\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    callbacks: {\n        async jwt ({ token, account, profile }) {\n            // Persist the OAuth access_token and user profile during signin\n            if (account && profile) {\n                token.accessToken = account.access_token;\n                token.profile = profile;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            // Send properties to the client\n            session.accessToken = token.accessToken;\n            if (token.profile) {\n                session.user = {\n                    ...session.user,\n                    ...token.profile\n                };\n            }\n            return session;\n        }\n    },\n    debug: true,\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvYXV0aC5jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN1RDtBQUNkO0FBQ2E7QUFFL0MsTUFBTUcsY0FBMkI7SUFDdENDLFNBQVNGLHFFQUFjQSxDQUFDRCxvREFBYUE7SUFDckNJLFdBQVc7UUFDVEwsc0VBQWNBLENBQUM7WUFDYk0sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7WUFDdkNDLGVBQWU7Z0JBQ2JDLFFBQVE7b0JBQ05DLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0tBQ0Q7SUFDREMsU0FBUztRQUNQQyxVQUFVO1FBQ1ZDLFFBQVEsS0FBSyxLQUFLLEtBQUs7SUFDekI7SUFDQUMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtZQUNuQyxnRUFBZ0U7WUFDaEUsSUFBSUQsV0FBV0MsU0FBUztnQkFDdEJGLE1BQU1HLFdBQVcsR0FBR0YsUUFBUUcsWUFBWTtnQkFDeENKLE1BQU1FLE9BQU8sR0FBR0E7WUFDbEI7WUFDQSxPQUFPRjtRQUNUO1FBQ0EsTUFBTUwsU0FBUSxFQUFFQSxPQUFPLEVBQUVLLEtBQUssRUFBZ0M7WUFDNUQsZ0NBQWdDO1lBQ2hDTCxRQUFRUSxXQUFXLEdBQUdILE1BQU1HLFdBQVc7WUFDdkMsSUFBSUgsTUFBTUUsT0FBTyxFQUFFO2dCQUNqQlAsUUFBUVUsSUFBSSxHQUFHO29CQUFFLEdBQUdWLFFBQVFVLElBQUk7b0JBQUUsR0FBR0wsTUFBTUUsT0FBTztnQkFBQztZQUNyRDtZQUNBLE9BQU9QO1FBQ1Q7SUFDRjtJQUNBVyxPQUFPO0lBQ1BDLFFBQVFwQixRQUFRQyxHQUFHLENBQUNvQixlQUFlO0FBQ3JDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1kZXYtam91cm5leS8uL2FwcC9hcGkvYXV0aC9hdXRoLmNvbmZpZy50cz83OTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWInXHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gJ0AvbGliL21vbmdvZGInXHJcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSAnQGF1dGgvbW9uZ29kYi1hZGFwdGVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBBdXRoT3B0aW9ucyA9IHtcclxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdpdGh1YlByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCBhcyBzdHJpbmcsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCBhcyBzdHJpbmcsXHJcbiAgICAgIGF1dGhvcml6YXRpb246IHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNjb3BlOiAncmVhZDp1c2VyIHVzZXI6ZW1haWwgcmVwbyBwdWJsaWNfcmVwbycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxyXG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCwgLy8gMzAgZGF5c1xyXG4gIH0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgYWNjb3VudCwgcHJvZmlsZSB9KSB7XHJcbiAgICAgIC8vIFBlcnNpc3QgdGhlIE9BdXRoIGFjY2Vzc190b2tlbiBhbmQgdXNlciBwcm9maWxlIGR1cmluZyBzaWduaW5cclxuICAgICAgaWYgKGFjY291bnQgJiYgcHJvZmlsZSkge1xyXG4gICAgICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gYWNjb3VudC5hY2Nlc3NfdG9rZW5cclxuICAgICAgICB0b2tlbi5wcm9maWxlID0gcHJvZmlsZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlblxyXG4gICAgfSxcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9OiB7IHNlc3Npb246IGFueTsgdG9rZW46IGFueSB9KSB7XHJcbiAgICAgIC8vIFNlbmQgcHJvcGVydGllcyB0byB0aGUgY2xpZW50XHJcbiAgICAgIHNlc3Npb24uYWNjZXNzVG9rZW4gPSB0b2tlbi5hY2Nlc3NUb2tlblxyXG4gICAgICBpZiAodG9rZW4ucHJvZmlsZSkge1xyXG4gICAgICAgIHNlc3Npb24udXNlciA9IHsgLi4uc2Vzc2lvbi51c2VyLCAuLi50b2tlbi5wcm9maWxlIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2Vzc2lvblxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRlYnVnOiB0cnVlLCAvLyBFbmFibGUgZGVidWcgbWVzc2FnZXNcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxufVxyXG4iXSwibmFtZXMiOlsiR2l0aHViUHJvdmlkZXIiLCJjbGllbnRQcm9taXNlIiwiTW9uZ29EQkFkYXB0ZXIiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiYXV0aG9yaXphdGlvbiIsInBhcmFtcyIsInNjb3BlIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJhY2NvdW50IiwicHJvZmlsZSIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwidXNlciIsImRlYnVnIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/auth.config.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/recap/route.ts":
/*!********************************!*\
  !*** ./app/api/recap/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @octokit/rest */ \"(rsc)/./node_modules/@octokit/rest/dist-web/index.js\");\n/* harmony import */ var _auth_auth_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.config */ \"(rsc)/./app/api/auth/auth.config.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n\n\n\n\n\nasync function GET() {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_auth_auth_config__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        console.log(\"Session details:\", {\n            hasSession: !!session,\n            hasUser: !!session?.user,\n            email: session?.user?.email,\n            name: session?.user?.name,\n            accessToken: session?.accessToken ? \"Present\" : \"Missing\",\n            sessionKeys: session ? Object.keys(session) : []\n        });\n        if (!session) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Unauthorized - No session\"\n            }, {\n                status: 401\n            });\n        }\n        const token = session.accessToken;\n        if (!token) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Unauthorized - No access token\"\n            }, {\n                status: 401\n            });\n        }\n        console.log(\"Initializing Octokit\");\n        const octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_4__.Octokit({\n            auth: token\n        });\n        // Get the authenticated user first\n        console.log(\"Getting authenticated user\");\n        const { data: user } = await octokit.users.getAuthenticated();\n        console.log(\"Authenticated as:\", user.login);\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n        const db = client.db(\"mydevjourney\");\n        // Get the first day of current month\n        const now = new Date();\n        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);\n        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);\n        console.log(\"Fetching events for user:\", user.login);\n        const { data: events } = await octokit.activity.listEventsForAuthenticatedUser({\n            username: user.login,\n            per_page: 100\n        });\n        console.log(\"Successfully fetched events:\", events.length);\n        // Filter push events within the month\n        const monthlyCommits = events.filter((event)=>{\n            const eventDate = new Date(event.created_at);\n            return event.type === \"PushEvent\" && eventDate >= startOfMonth && eventDate <= endOfMonth;\n        }).flatMap((event)=>event.payload?.commits || []);\n        // Calculate most active day\n        const commitsByDay = monthlyCommits.reduce((acc, commit)=>{\n            const date = new Date(commit.created_at || new Date());\n            const day = date.toLocaleDateString(\"en-US\", {\n                weekday: \"long\"\n            });\n            acc[day] = (acc[day] || 0) + 1;\n            return acc;\n        }, {});\n        const mostActiveDay = Object.entries(commitsByDay).reduce((max, [day, count])=>{\n            return count > max.count ? {\n                name: day,\n                count\n            } : max;\n        }, {\n            name: \"No activity\",\n            count: 0\n        });\n        // Get goals from database\n        const goals = await db.collection(\"goals\").find({\n            userId: session.user?.email,\n            status: {\n                $ne: \"completed\"\n            }\n        }).toArray();\n        // Calculate goal statistics\n        const goalStats = goals.map((goal)=>({\n                id: goal._id.toString(),\n                title: goal.title,\n                progress: goal.progress || 0,\n                target: goal.target || 100,\n                category: goal.category\n            }));\n        // Calculate language statistics (mocked for now)\n        const languageStats = {\n            JavaScript: 45,\n            TypeScript: 35,\n            Python: 20\n        };\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            mostActiveDay,\n            languageStats,\n            goalStats,\n            totalCommits: monthlyCommits.length,\n            startDate: startOfMonth,\n            endDate: endOfMonth\n        });\n    } catch (error) {\n        console.error(\"Fatal error in recap endpoint:\", {\n            name: error instanceof Error ? error.name : \"Unknown\",\n            message: error instanceof Error ? error.message : \"Unknown error\",\n            stack: error instanceof Error ? error.stack : undefined,\n            error: error\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Error fetching GitHub data\",\n            details: error instanceof Error ? error.message : \"Unknown error\",\n            mostActiveDay: {\n                name: \"No activity\",\n                count: 0\n            },\n            languageStats: {},\n            goalStats: [],\n            totalCommits: 0,\n            startDate: new Date(),\n            endDate: new Date()\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0ZBQVlBLENBQUNrQixJQUFJLENBQUM7WUFDdkJDLE9BQU87WUFDUHVFLFNBQVN2RSxpQkFBaUJtRSxRQUFRbkUsTUFBTW9FLE9BQU8sR0FBRztZQUNsRDVCLGVBQWU7Z0JBQUU5QyxNQUFNO2dCQUFlaUQsT0FBTztZQUFFO1lBQy9DaUIsZUFBZSxDQUFDO1lBQ2hCVixXQUFXLEVBQUU7WUFDYmMsY0FBYztZQUNkQyxXQUFXLElBQUlyRDtZQUNmc0QsU0FBUyxJQUFJdEQ7UUFDZixHQUFHO1lBQUVYLFFBQVE7UUFBSTtJQUNuQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZGV2LWpvdXJuZXkvLi9hcHAvYXBpL3JlY2FwL3JvdXRlLnRzP2M5MTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnXHJcbmltcG9ydCB7IE9jdG9raXQgfSBmcm9tICdAb2N0b2tpdC9yZXN0J1xyXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJy4uL2F1dGgvYXV0aC5jb25maWcnXHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gJ0AvbGliL21vbmdvZGInXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcclxuICAgIGNvbnNvbGUubG9nKCdTZXNzaW9uIGRldGFpbHM6Jywge1xyXG4gICAgICBoYXNTZXNzaW9uOiAhIXNlc3Npb24sXHJcbiAgICAgIGhhc1VzZXI6ICEhc2Vzc2lvbj8udXNlcixcclxuICAgICAgZW1haWw6IHNlc3Npb24/LnVzZXI/LmVtYWlsLFxyXG4gICAgICBuYW1lOiBzZXNzaW9uPy51c2VyPy5uYW1lLFxyXG4gICAgICBhY2Nlc3NUb2tlbjogc2Vzc2lvbj8uYWNjZXNzVG9rZW4gPyAnUHJlc2VudCcgOiAnTWlzc2luZycsXHJcbiAgICAgIHNlc3Npb25LZXlzOiBzZXNzaW9uID8gT2JqZWN0LmtleXMoc2Vzc2lvbikgOiBbXVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoIXNlc3Npb24pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQgLSBObyBzZXNzaW9uJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBzZXNzaW9uLmFjY2Vzc1Rva2VuXHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnVW5hdXRob3JpemVkIC0gTm8gYWNjZXNzIHRva2VuJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0luaXRpYWxpemluZyBPY3Rva2l0JylcclxuICAgIGNvbnN0IG9jdG9raXQgPSBuZXcgT2N0b2tpdCh7XHJcbiAgICAgIGF1dGg6IHRva2VuLFxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBHZXQgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlciBmaXJzdFxyXG4gICAgY29uc29sZS5sb2coJ0dldHRpbmcgYXV0aGVudGljYXRlZCB1c2VyJylcclxuICAgIGNvbnN0IHsgZGF0YTogdXNlciB9ID0gYXdhaXQgb2N0b2tpdC51c2Vycy5nZXRBdXRoZW50aWNhdGVkKClcclxuICAgIGNvbnNvbGUubG9nKCdBdXRoZW50aWNhdGVkIGFzOicsIHVzZXIubG9naW4pXHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZVxyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoJ215ZGV2am91cm5leScpXHJcblxyXG4gICAgLy8gR2V0IHRoZSBmaXJzdCBkYXkgb2YgY3VycmVudCBtb250aFxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxyXG4gICAgY29uc3Qgc3RhcnRPZk1vbnRoID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAxKVxyXG4gICAgY29uc3QgZW5kT2ZNb250aCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSArIDEsIDApXHJcblxyXG4gICAgY29uc29sZS5sb2coJ0ZldGNoaW5nIGV2ZW50cyBmb3IgdXNlcjonLCB1c2VyLmxvZ2luKVxyXG4gICAgY29uc3QgeyBkYXRhOiBldmVudHMgfSA9IGF3YWl0IG9jdG9raXQuYWN0aXZpdHkubGlzdEV2ZW50c0ZvckF1dGhlbnRpY2F0ZWRVc2VyKHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXIubG9naW4sXHJcbiAgICAgIHBlcl9wYWdlOiAxMDAsXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgZmV0Y2hlZCBldmVudHM6JywgZXZlbnRzLmxlbmd0aClcclxuXHJcbiAgICAvLyBGaWx0ZXIgcHVzaCBldmVudHMgd2l0aGluIHRoZSBtb250aFxyXG4gICAgY29uc3QgbW9udGhseUNvbW1pdHMgPSBldmVudHNcclxuICAgICAgLmZpbHRlcigoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmNyZWF0ZWRfYXQpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIGV2ZW50LnR5cGUgPT09ICdQdXNoRXZlbnQnICYmXHJcbiAgICAgICAgICBldmVudERhdGUgPj0gc3RhcnRPZk1vbnRoICYmXHJcbiAgICAgICAgICBldmVudERhdGUgPD0gZW5kT2ZNb250aFxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICAgICAgLmZsYXRNYXAoKGV2ZW50OiBhbnkpID0+IChldmVudC5wYXlsb2FkPy5jb21taXRzIHx8IFtdKSlcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgbW9zdCBhY3RpdmUgZGF5XHJcbiAgICBjb25zdCBjb21taXRzQnlEYXkgPSBtb250aGx5Q29tbWl0cy5yZWR1Y2UoKGFjYywgY29tbWl0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjb21taXQuY3JlYXRlZF9hdCB8fCBuZXcgRGF0ZSgpKVxyXG4gICAgICBjb25zdCBkYXkgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7IHdlZWtkYXk6ICdsb25nJyB9KVxyXG4gICAgICBhY2NbZGF5XSA9IChhY2NbZGF5XSB8fCAwKSArIDFcclxuICAgICAgcmV0dXJuIGFjY1xyXG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPilcclxuXHJcbiAgICBjb25zdCBtb3N0QWN0aXZlRGF5ID0gT2JqZWN0LmVudHJpZXMoY29tbWl0c0J5RGF5KS5yZWR1Y2UoXHJcbiAgICAgIChtYXg6IHsgbmFtZTogc3RyaW5nOyBjb3VudDogbnVtYmVyIH0sIFtkYXksIGNvdW50XTogW3N0cmluZywgbnVtYmVyXSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjb3VudCA+IG1heC5jb3VudCA/IHsgbmFtZTogZGF5LCBjb3VudCB9IDogbWF4XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgbmFtZTogJ05vIGFjdGl2aXR5JywgY291bnQ6IDAgfVxyXG4gICAgKVxyXG5cclxuICAgIC8vIEdldCBnb2FscyBmcm9tIGRhdGFiYXNlXHJcbiAgICBjb25zdCBnb2FscyA9IGF3YWl0IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdnb2FscycpXHJcbiAgICAgIC5maW5kKHtcclxuICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlcj8uZW1haWwsICAvLyBVc2luZyBlbWFpbCBhcyBhIHN0YWJsZSBpZGVudGlmaWVyXHJcbiAgICAgICAgc3RhdHVzOiB7ICRuZTogJ2NvbXBsZXRlZCcgfVxyXG4gICAgICB9KVxyXG4gICAgICAudG9BcnJheSgpXHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGdvYWwgc3RhdGlzdGljc1xyXG4gICAgY29uc3QgZ29hbFN0YXRzID0gZ29hbHMubWFwKGdvYWwgPT4gKHtcclxuICAgICAgaWQ6IGdvYWwuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgIHRpdGxlOiBnb2FsLnRpdGxlLFxyXG4gICAgICBwcm9ncmVzczogZ29hbC5wcm9ncmVzcyB8fCAwLFxyXG4gICAgICB0YXJnZXQ6IGdvYWwudGFyZ2V0IHx8IDEwMCxcclxuICAgICAgY2F0ZWdvcnk6IGdvYWwuY2F0ZWdvcnlcclxuICAgIH0pKVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBsYW5ndWFnZSBzdGF0aXN0aWNzIChtb2NrZWQgZm9yIG5vdylcclxuICAgIGNvbnN0IGxhbmd1YWdlU3RhdHMgPSB7XHJcbiAgICAgIEphdmFTY3JpcHQ6IDQ1LFxyXG4gICAgICBUeXBlU2NyaXB0OiAzNSxcclxuICAgICAgUHl0aG9uOiAyMFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgIG1vc3RBY3RpdmVEYXksXHJcbiAgICAgIGxhbmd1YWdlU3RhdHMsXHJcbiAgICAgIGdvYWxTdGF0cyxcclxuICAgICAgdG90YWxDb21taXRzOiBtb250aGx5Q29tbWl0cy5sZW5ndGgsXHJcbiAgICAgIHN0YXJ0RGF0ZTogc3RhcnRPZk1vbnRoLFxyXG4gICAgICBlbmREYXRlOiBlbmRPZk1vbnRoXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdGYXRhbCBlcnJvciBpbiByZWNhcCBlbmRwb2ludDonLCB7XHJcbiAgICAgIG5hbWU6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5uYW1lIDogJ1Vua25vd24nLFxyXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdVbmtub3duIGVycm9yJyxcclxuICAgICAgc3RhY2s6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5zdGFjayA6IHVuZGVmaW5lZCxcclxuICAgICAgZXJyb3I6IGVycm9yXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBcclxuICAgICAgZXJyb3I6ICdFcnJvciBmZXRjaGluZyBHaXRIdWIgZGF0YScsXHJcbiAgICAgIGRldGFpbHM6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ1Vua25vd24gZXJyb3InLFxyXG4gICAgICBtb3N0QWN0aXZlRGF5OiB7IG5hbWU6ICdObyBhY3Rpdml0eScsIGNvdW50OiAwIH0sXHJcbiAgICAgIGxhbmd1YWdlU3RhdHM6IHt9LFxyXG4gICAgICBnb2FsU3RhdHM6IFtdLFxyXG4gICAgICB0b3RhbENvbW1pdHM6IDAsXHJcbiAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgZW5kRGF0ZTogbmV3IERhdGUoKVxyXG4gICAgfSwgeyBzdGF0dXM6IDUwMCB9KVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiT2N0b2tpdCIsImF1dGhPcHRpb25zIiwiY2xpZW50UHJvbWlzZSIsIkdFVCIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiaGFzU2Vzc2lvbiIsImhhc1VzZXIiLCJ1c2VyIiwiZW1haWwiLCJuYW1lIiwiYWNjZXNzVG9rZW4iLCJzZXNzaW9uS2V5cyIsIk9iamVjdCIsImtleXMiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJ0b2tlbiIsIm9jdG9raXQiLCJhdXRoIiwiZGF0YSIsInVzZXJzIiwiZ2V0QXV0aGVudGljYXRlZCIsImxvZ2luIiwiY2xpZW50IiwiZGIiLCJub3ciLCJEYXRlIiwic3RhcnRPZk1vbnRoIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImVuZE9mTW9udGgiLCJldmVudHMiLCJhY3Rpdml0eSIsImxpc3RFdmVudHNGb3JBdXRoZW50aWNhdGVkVXNlciIsInVzZXJuYW1lIiwicGVyX3BhZ2UiLCJsZW5ndGgiLCJtb250aGx5Q29tbWl0cyIsImZpbHRlciIsImV2ZW50IiwiZXZlbnREYXRlIiwiY3JlYXRlZF9hdCIsInR5cGUiLCJmbGF0TWFwIiwicGF5bG9hZCIsImNvbW1pdHMiLCJjb21taXRzQnlEYXkiLCJyZWR1Y2UiLCJhY2MiLCJjb21taXQiLCJkYXRlIiwiZGF5IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsIm1vc3RBY3RpdmVEYXkiLCJlbnRyaWVzIiwibWF4IiwiY291bnQiLCJnb2FscyIsImNvbGxlY3Rpb24iLCJmaW5kIiwidXNlcklkIiwiJG5lIiwidG9BcnJheSIsImdvYWxTdGF0cyIsIm1hcCIsImdvYWwiLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwidGl0bGUiLCJwcm9ncmVzcyIsInRhcmdldCIsImNhdGVnb3J5IiwibGFuZ3VhZ2VTdGF0cyIsIkphdmFTY3JpcHQiLCJUeXBlU2NyaXB0IiwiUHl0aG9uIiwidG90YWxDb21taXRzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIkVycm9yIiwibWVzc2FnZSIsInN0YWNrIiwidW5kZWZpbmVkIiwiZGV0YWlscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/recap/route.ts\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/@auth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/@octokit","vendor-chunks/before-after-hook","vendor-chunks/once","vendor-chunks/wrappy","vendor-chunks/universal-user-agent","vendor-chunks/deprecation"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frecap%2Froute&page=%2Fapi%2Frecap%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frecap%2Froute.ts&appDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5Cwebdev-hackathon%5Cmydev&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();