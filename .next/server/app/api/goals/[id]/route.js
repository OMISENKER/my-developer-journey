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
exports.id = "app/api/goals/[id]/route";
exports.ids = ["app/api/goals/[id]/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgoals%2F%5Bid%5D%2Froute&page=%2Fapi%2Fgoals%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgoals%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5CGitHub%5Cmy-developer-journey%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5CGitHub%5Cmy-developer-journey&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgoals%2F%5Bid%5D%2Froute&page=%2Fapi%2Fgoals%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgoals%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5CGitHub%5Cmy-developer-journey%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5CGitHub%5Cmy-developer-journey&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_Complab502_01_Documents_GitHub_my_developer_journey_app_api_goals_id_route_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/api/goals/[id]/route.ts */ \"(rsc)/./app/api/goals/[id]/route.ts\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/goals/[id]/route\",\n        pathname: \"/api/goals/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/goals/[id]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Complab502-01\\\\Documents\\\\GitHub\\\\my-developer-journey\\\\app\\\\api\\\\goals\\\\[id]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Complab502_01_Documents_GitHub_my_developer_journey_app_api_goals_id_route_ts__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/goals/[id]/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZnb2FscyUyRiU1QmlkJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZnb2FscyUyRiU1QmlkJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZ29hbHMlMkYlNUJpZCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNDb21wbGFiNTAyLTAxJTVDRG9jdW1lbnRzJTVDR2l0SHViJTVDbXktZGV2ZWxvcGVyLWpvdXJuZXklNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0NvbXBsYWI1MDItMDElNUNEb2N1bWVudHMlNUNHaXRIdWIlNUNteS1kZXZlbG9wZXItam91cm5leSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDZ0U7QUFDL0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDaUo7O0FBRWpKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZGV2LWpvdXJuZXkvPzdiYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQ29tcGxhYjUwMi0wMVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXG15LWRldmVsb3Blci1qb3VybmV5XFxcXGFwcFxcXFxhcGlcXFxcZ29hbHNcXFxcW2lkXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ29hbHMvW2lkXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2dvYWxzL1tpZF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2dvYWxzL1tpZF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxDb21wbGFiNTAyLTAxXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcbXktZGV2ZWxvcGVyLWpvdXJuZXlcXFxcYXBwXFxcXGFwaVxcXFxnb2Fsc1xcXFxbaWRdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2dvYWxzL1tpZF0vcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgoals%2F%5Bid%5D%2Froute&page=%2Fapi%2Fgoals%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgoals%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5CGitHub%5Cmy-developer-journey%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5CGitHub%5Cmy-developer-journey&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/auth.config.ts":
/*!*************************************!*\
  !*** ./app/api/auth/auth.config.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user user:email repo public_repo\"\n                }\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    callbacks: {\n        async jwt ({ token, account, profile }) {\n            // Persist the OAuth access_token and user profile during signin\n            if (account && profile) {\n                token.accessToken = account.access_token;\n                token.profile = profile;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            // Send properties to the client\n            session.accessToken = token.accessToken;\n            if (token.profile) {\n                session.user = {\n                    ...session.user,\n                    ...token.profile\n                };\n            }\n            return session;\n        }\n    },\n    debug: true,\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvYXV0aC5jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN1RDtBQUNkO0FBQ2E7QUFFL0MsTUFBTUcsY0FBMkI7SUFDdENDLFNBQVNGLHFFQUFjQSxDQUFDRCxvREFBYUE7SUFDckNJLFdBQVc7UUFDVEwsc0VBQWNBLENBQUM7WUFDYk0sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7WUFDdkNDLGVBQWU7Z0JBQ2JDLFFBQVE7b0JBQ05DLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0tBQ0Q7SUFDREMsU0FBUztRQUNQQyxVQUFVO1FBQ1ZDLFFBQVEsS0FBSyxLQUFLLEtBQUs7SUFDekI7SUFDQUMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtZQUNuQyxnRUFBZ0U7WUFDaEUsSUFBSUQsV0FBV0MsU0FBUztnQkFDdEJGLE1BQU1HLFdBQVcsR0FBR0YsUUFBUUcsWUFBWTtnQkFDeENKLE1BQU1FLE9BQU8sR0FBR0E7WUFDbEI7WUFDQSxPQUFPRjtRQUNUO1FBQ0EsTUFBTUwsU0FBUSxFQUFFQSxPQUFPLEVBQUVLLEtBQUssRUFBZ0M7WUFDNUQsZ0NBQWdDO1lBQ2hDTCxRQUFRUSxXQUFXLEdBQUdILE1BQU1HLFdBQVc7WUFDdkMsSUFBSUgsTUFBTUUsT0FBTyxFQUFFO2dCQUNqQlAsUUFBUVUsSUFBSSxHQUFHO29CQUFFLEdBQUdWLFFBQVFVLElBQUk7b0JBQUUsR0FBR0wsTUFBTUUsT0FBTztnQkFBQztZQUNyRDtZQUNBLE9BQU9QO1FBQ1Q7SUFDRjtJQUNBVyxPQUFPO0lBQ1BDLFFBQVFwQixRQUFRQyxHQUFHLENBQUNvQixlQUFlO0FBQ3JDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1kZXYtam91cm5leS8uL2FwcC9hcGkvYXV0aC9hdXRoLmNvbmZpZy50cz83OTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWInXHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gJ0AvbGliL21vbmdvZGInXHJcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSAnQGF1dGgvbW9uZ29kYi1hZGFwdGVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBBdXRoT3B0aW9ucyA9IHtcclxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdpdGh1YlByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCBhcyBzdHJpbmcsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCBhcyBzdHJpbmcsXHJcbiAgICAgIGF1dGhvcml6YXRpb246IHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNjb3BlOiAncmVhZDp1c2VyIHVzZXI6ZW1haWwgcmVwbyBwdWJsaWNfcmVwbycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxyXG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCwgLy8gMzAgZGF5c1xyXG4gIH0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgYWNjb3VudCwgcHJvZmlsZSB9KSB7XHJcbiAgICAgIC8vIFBlcnNpc3QgdGhlIE9BdXRoIGFjY2Vzc190b2tlbiBhbmQgdXNlciBwcm9maWxlIGR1cmluZyBzaWduaW5cclxuICAgICAgaWYgKGFjY291bnQgJiYgcHJvZmlsZSkge1xyXG4gICAgICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gYWNjb3VudC5hY2Nlc3NfdG9rZW5cclxuICAgICAgICB0b2tlbi5wcm9maWxlID0gcHJvZmlsZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlblxyXG4gICAgfSxcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9OiB7IHNlc3Npb246IGFueTsgdG9rZW46IGFueSB9KSB7XHJcbiAgICAgIC8vIFNlbmQgcHJvcGVydGllcyB0byB0aGUgY2xpZW50XHJcbiAgICAgIHNlc3Npb24uYWNjZXNzVG9rZW4gPSB0b2tlbi5hY2Nlc3NUb2tlblxyXG4gICAgICBpZiAodG9rZW4ucHJvZmlsZSkge1xyXG4gICAgICAgIHNlc3Npb24udXNlciA9IHsgLi4uc2Vzc2lvbi51c2VyLCAuLi50b2tlbi5wcm9maWxlIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2Vzc2lvblxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRlYnVnOiB0cnVlLCAvLyBFbmFibGUgZGVidWcgbWVzc2FnZXNcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxufVxyXG4iXSwibmFtZXMiOlsiR2l0aHViUHJvdmlkZXIiLCJjbGllbnRQcm9taXNlIiwiTW9uZ29EQkFkYXB0ZXIiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiYXV0aG9yaXphdGlvbiIsInBhcmFtcyIsInNjb3BlIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJhY2NvdW50IiwicHJvZmlsZSIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwidXNlciIsImRlYnVnIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/auth.config.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/goals/[id]/route.ts":
/*!*************************************!*\
  !*** ./app/api/goals/[id]/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_auth_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.config */ \"(rsc)/./app/api/auth/auth.config.ts\");\n\n\n\n\nasync function DELETE(request, { params }) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_auth_auth_config__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session?.user?.email) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const goalId = params.id;\n        // Validate the goal ID\n        if (!goalId) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Invalid goal ID\"\n            }, {\n                status: 400\n            });\n        }\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db(\"mydevjourney\");\n        console.log(\"Attempting to delete goal with ID:\", goalId);\n        console.log(\"User email:\", session.user.email);\n        // First, let's find the user and their goals\n        const userWithGoals = await db.collection(\"users\").findOne({\n            email: session.user.email\n        }, {\n            projection: {\n                goals: 1,\n                email: 1\n            }\n        });\n        console.log(\"Current user data:\", JSON.stringify({\n            email: userWithGoals?.email,\n            goalsCount: userWithGoals?.goals?.length || 0\n        }, null, 2));\n        console.log(\"User goals:\", JSON.stringify(userWithGoals?.goals, null, 2));\n        // Check if the goal exists\n        const goalExists = userWithGoals?.goals?.some((goal)=>{\n            const matches = goal.id === goalId;\n            console.log(`Comparing goal ${goal.id} with ${goalId}: ${matches}`);\n            return matches;\n        });\n        console.log(\"Goal exists:\", goalExists);\n        if (!goalExists) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Goal not found for this user\"\n            }, {\n                status: 404\n            });\n        }\n        // Delete the goal from the user's goals array\n        const userResult = await db.collection(\"users\").updateOne({\n            email: session.user.email\n        }, {\n            $pull: {\n                goals: {\n                    id: goalId\n                }\n            }\n        });\n        console.log(\"Update result:\", JSON.stringify(userResult, null, 2));\n        if (userResult.modifiedCount === 0) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Goal not found or already deleted\"\n            }, {\n                status: 404\n            });\n        }\n        // Delete all progress entries for this goal\n        const progressResult = await db.collection(\"progress\").deleteMany({\n            goalId: goalId\n        });\n        console.log(\"Progress deletion result:\", JSON.stringify(progressResult, null, 2));\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            success: true,\n            message: \"Goal and related progress deleted successfully\"\n        });\n    } catch (error) {\n        console.error(\"Detailed error:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Internal server error\",\n            details: error instanceof Error ? error.message : \"Unknown error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7WUFDdkI0QixTQUFTO1lBQ1RDLFNBQVM7UUFDWDtJQUNGLEVBQUUsT0FBTzVCLE9BQU87UUFDZE0sUUFBUU4sS0FBSyxDQUFDLG1CQUFtQkE7UUFFakMsT0FBT1gsa0ZBQVlBLENBQUNVLElBQUksQ0FDdEI7WUFDRUMsT0FBTztZQUNQNkIsU0FBUzdCLGlCQUFpQjhCLFFBQVE5QixNQUFNNEIsT0FBTyxHQUFHO1FBQ3BELEdBQ0E7WUFBRTNCLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZGV2LWpvdXJuZXkvLi9hcHAvYXBpL2dvYWxzL1tpZF0vcm91dGUudHM/ZDQzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gJ0AvbGliL21vbmdvZGInO1xyXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJztcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICcuLi8uLi9hdXRoL2F1dGguY29uZmlnJztcclxuaW1wb3J0IHR5cGUgeyBHb2FsIH0gZnJvbSAnQC9tb2RlbHMvdXNlcic7XHJcbmltcG9ydCB7IE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKFxyXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXHJcbiAgeyBwYXJhbXMgfTogeyBwYXJhbXM6IHsgaWQ6IHN0cmluZyB9IH1cclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ29hbElkID0gcGFyYW1zLmlkO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHRoZSBnb2FsIElEXHJcbiAgICBpZiAoIWdvYWxJZCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgZ29hbCBJRCcgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoJ215ZGV2am91cm5leScpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdBdHRlbXB0aW5nIHRvIGRlbGV0ZSBnb2FsIHdpdGggSUQ6JywgZ29hbElkKTtcclxuICAgIGNvbnNvbGUubG9nKCdVc2VyIGVtYWlsOicsIHNlc3Npb24udXNlci5lbWFpbCk7XHJcblxyXG4gICAgLy8gRmlyc3QsIGxldCdzIGZpbmQgdGhlIHVzZXIgYW5kIHRoZWlyIGdvYWxzXHJcbiAgICBjb25zdCB1c2VyV2l0aEdvYWxzID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5maW5kT25lKFxyXG4gICAgICB7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSxcclxuICAgICAgeyBwcm9qZWN0aW9uOiB7IGdvYWxzOiAxLCBlbWFpbDogMSB9IH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnQgdXNlciBkYXRhOicsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgZW1haWw6IHVzZXJXaXRoR29hbHM/LmVtYWlsLFxyXG4gICAgICBnb2Fsc0NvdW50OiB1c2VyV2l0aEdvYWxzPy5nb2Fscz8ubGVuZ3RoIHx8IDBcclxuICAgIH0sIG51bGwsIDIpKTtcclxuICAgIGNvbnNvbGUubG9nKCdVc2VyIGdvYWxzOicsIEpTT04uc3RyaW5naWZ5KHVzZXJXaXRoR29hbHM/LmdvYWxzLCBudWxsLCAyKSk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGdvYWwgZXhpc3RzXHJcbiAgICBjb25zdCBnb2FsRXhpc3RzID0gdXNlcldpdGhHb2Fscz8uZ29hbHM/LnNvbWUoZ29hbCA9PiB7XHJcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBnb2FsLmlkID09PSBnb2FsSWQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBDb21wYXJpbmcgZ29hbCAke2dvYWwuaWR9IHdpdGggJHtnb2FsSWR9OiAke21hdGNoZXN9YCk7XHJcbiAgICAgIHJldHVybiBtYXRjaGVzO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnR29hbCBleGlzdHM6JywgZ29hbEV4aXN0cyk7XHJcblxyXG4gICAgaWYgKCFnb2FsRXhpc3RzKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnR29hbCBub3QgZm91bmQgZm9yIHRoaXMgdXNlcicgfSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWxldGUgdGhlIGdvYWwgZnJvbSB0aGUgdXNlcidzIGdvYWxzIGFycmF5XHJcbiAgICBjb25zdCB1c2VyUmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS51cGRhdGVPbmUoXHJcbiAgICAgIHsgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB9LFxyXG4gICAgICB7ICRwdWxsOiB7IGdvYWxzOiB7IGlkOiBnb2FsSWQgfSB9IH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1VwZGF0ZSByZXN1bHQ6JywgSlNPTi5zdHJpbmdpZnkodXNlclJlc3VsdCwgbnVsbCwgMikpO1xyXG5cclxuICAgIGlmICh1c2VyUmVzdWx0Lm1vZGlmaWVkQ291bnQgPT09IDApIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdHb2FsIG5vdCBmb3VuZCBvciBhbHJlYWR5IGRlbGV0ZWQnIH0sIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVsZXRlIGFsbCBwcm9ncmVzcyBlbnRyaWVzIGZvciB0aGlzIGdvYWxcclxuICAgIGNvbnN0IHByb2dyZXNzUmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbigncHJvZ3Jlc3MnKS5kZWxldGVNYW55KHtcclxuICAgICAgZ29hbElkOiBnb2FsSWRcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdQcm9ncmVzcyBkZWxldGlvbiByZXN1bHQ6JywgSlNPTi5zdHJpbmdpZnkocHJvZ3Jlc3NSZXN1bHQsIG51bGwsIDIpKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBtZXNzYWdlOiAnR29hbCBhbmQgcmVsYXRlZCBwcm9ncmVzcyBkZWxldGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRGV0YWlsZWQgZXJyb3I6JywgZXJyb3IpO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAge1xyXG4gICAgICAgIGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyxcclxuICAgICAgICBkZXRhaWxzOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdVbmtub3duIGVycm9yJyxcclxuICAgICAgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY2xpZW50UHJvbWlzZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsIkRFTEVURSIsInJlcXVlc3QiLCJwYXJhbXMiLCJzZXNzaW9uIiwidXNlciIsImVtYWlsIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiZ29hbElkIiwiaWQiLCJjbGllbnQiLCJkYiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyV2l0aEdvYWxzIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJwcm9qZWN0aW9uIiwiZ29hbHMiLCJKU09OIiwic3RyaW5naWZ5IiwiZ29hbHNDb3VudCIsImxlbmd0aCIsImdvYWxFeGlzdHMiLCJzb21lIiwiZ29hbCIsIm1hdGNoZXMiLCJ1c2VyUmVzdWx0IiwidXBkYXRlT25lIiwiJHB1bGwiLCJtb2RpZmllZENvdW50IiwicHJvZ3Jlc3NSZXN1bHQiLCJkZWxldGVNYW55Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJkZXRhaWxzIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/goals/[id]/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/@auth"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgoals%2F%5Bid%5D%2Froute&page=%2Fapi%2Fgoals%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgoals%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5CGitHub%5Cmy-developer-journey%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CComplab502-01%5CDocuments%5CGitHub%5Cmy-developer-journey&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();