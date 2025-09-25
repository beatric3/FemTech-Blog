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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "(pages-dir-node)/./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_URL: () => (/* binding */ API_URL),\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\nconst API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';\nasync function api(path, options = {}) {\n    const token =  false ? 0 : null;\n    const headers = {\n        'Content-Type': 'application/json',\n        ...options.headers || {}\n    };\n    if (token) headers['Authorization'] = `Bearer ${token}`;\n    const res = await fetch(`${API_URL}${path}`, {\n        ...options,\n        headers\n    });\n    const data = await res.json();\n    if (!res.ok) throw new Error(data.error || 'Erro na API');\n    return data;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2xpYi9hcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLG1CQUFtQixJQUFJLHdCQUF3QjtBQUUzRSxlQUFlQyxJQUFJQyxJQUFJLEVBQUVDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLE1BQU1DLFFBQVEsTUFBNkIsR0FBR0MsQ0FBNkIsR0FBRztJQUM5RSxNQUFNRSxVQUFVO1FBQUUsZ0JBQWdCO1FBQW9CLEdBQUlKLFFBQVFJLE9BQU8sSUFBSSxDQUFDLENBQUM7SUFBRTtJQUNqRixJQUFJSCxPQUFPRyxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxPQUFPLEVBQUVILE9BQU87SUFFdkQsTUFBTUksTUFBTSxNQUFNQyxNQUFNLEdBQUdaLFVBQVVLLE1BQU0sRUFBRTtRQUFFLEdBQUdDLE9BQU87UUFBRUk7SUFBUTtJQUNuRSxNQUFNRyxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFDM0IsSUFBSSxDQUFDSCxJQUFJSSxFQUFFLEVBQUUsTUFBTSxJQUFJQyxNQUFNSCxLQUFLSSxLQUFLLElBQUk7SUFDM0MsT0FBT0o7QUFDVCIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxMZW5vdm9cXERvd25sb2Fkc1xccHJvamV0by1mdWxsc3RhY2tcXHByb2pldG8tZnVsbHN0YWNrXFxmcm9udGVuZFxcbGliXFxhcGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBpKHBhdGgsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB0b2tlbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiBudWxsO1xuICBjb25zdCBoZWFkZXJzID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAuLi4ob3B0aW9ucy5oZWFkZXJzIHx8IHt9KSB9O1xuICBpZiAodG9rZW4pIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9JHtwYXRofWAsIHsgLi4ub3B0aW9ucywgaGVhZGVycyB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoZGF0YS5lcnJvciB8fCAnRXJybyBuYSBBUEknKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiYXBpIiwicGF0aCIsIm9wdGlvbnMiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoZWFkZXJzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm9rIiwiRXJyb3IiLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./lib/api.js\n");

/***/ }),

/***/ "(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Clogin.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Clogin.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   handler: () => (/* binding */ handler),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(pages-dir-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(pages-dir-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"(pages-dir-node)/./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"(pages-dir-node)/./pages/_app.js\");\n/* harmony import */ var _pages_login_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages\\login.js */ \"(pages-dir-node)/./pages/login.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/route-modules/pages/pages-handler */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/pages-handler.js\");\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_login_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_login_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_login_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_login_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_login_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_login_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_login_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_login_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_login_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_login_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_login_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/login\",\n        pathname: \"/login\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    distDir: \".next\" || 0,\n    relativeProjectDir:  false || '',\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_login_js__WEBPACK_IMPORTED_MODULE_5__\n});\nconst handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({\n    srcPage: \"/login\",\n    config,\n    userland: _pages_login_js__WEBPACK_IMPORTED_MODULE_5__,\n    routeModule,\n    getStaticPaths,\n    getStaticProps,\n    getServerSideProps\n});\n\n//# sourceMappingURL=pages.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVMmcGFnZT0lMkZsb2dpbiZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDbG9naW4uanMmYWJzb2x1dGVBcHBQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9hcHAmYWJzb2x1dGVEb2N1bWVudFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2RvY3VtZW50Jm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdGO0FBQ2hDO0FBQ0U7QUFDMUQ7QUFDeUQ7QUFDVjtBQUMvQztBQUM4QztBQUNrQztBQUNoRjtBQUNBLGlFQUFlLHdFQUFLLENBQUMsNENBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sdUJBQXVCLHdFQUFLLENBQUMsNENBQVE7QUFDckMsdUJBQXVCLHdFQUFLLENBQUMsNENBQVE7QUFDckMsMkJBQTJCLHdFQUFLLENBQUMsNENBQVE7QUFDekMsZUFBZSx3RUFBSyxDQUFDLDRDQUFRO0FBQzdCLHdCQUF3Qix3RUFBSyxDQUFDLDRDQUFRO0FBQzdDO0FBQ08sZ0NBQWdDLHdFQUFLLENBQUMsNENBQVE7QUFDOUMsZ0NBQWdDLHdFQUFLLENBQUMsNENBQVE7QUFDOUMsaUNBQWlDLHdFQUFLLENBQUMsNENBQVE7QUFDL0MsZ0NBQWdDLHdFQUFLLENBQUMsNENBQVE7QUFDOUMsb0NBQW9DLHdFQUFLLENBQUMsNENBQVE7QUFDekQ7QUFDTyx3QkFBd0Isa0dBQWdCO0FBQy9DO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEsT0FBb0MsSUFBSSxDQUFFO0FBQ3ZELHdCQUF3QixNQUF1QztBQUMvRDtBQUNBO0FBQ0EsYUFBYSw4REFBVztBQUN4QixrQkFBa0Isb0VBQWdCO0FBQ2xDLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQztBQUNNLGdCQUFnQiw4RkFBVTtBQUNqQztBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIGFwcCBhbmQgZG9jdW1lbnQgbW9kdWxlcy5cbmltcG9ydCAqIGFzIGRvY3VtZW50IGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2RvY3VtZW50XCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxsb2dpbi5qc1wiO1xuaW1wb3J0IHsgZ2V0SGFuZGxlciB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMvcGFnZXMtaGFuZGxlclwiO1xuLy8gUmUtZXhwb3J0IHRoZSBjb21wb25lbnQgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFNlcnZlclNpZGVQcm9wcycpO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsICdyZXBvcnRXZWJWaXRhbHMnKTtcbi8vIFJlLWV4cG9ydCBsZWdhY3kgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhcmFtcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvbG9naW5cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2xvZ2luXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgZGlzdERpcjogcHJvY2Vzcy5lbnYuX19ORVhUX1JFTEFUSVZFX0RJU1RfRElSIHx8ICcnLFxuICAgIHJlbGF0aXZlUHJvamVjdERpcjogcHJvY2Vzcy5lbnYuX19ORVhUX1JFTEFUSVZFX1BST0pFQ1RfRElSIHx8ICcnLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgLy8gZGVmYXVsdCBleHBvcnQgbWlnaHQgbm90IGV4aXN0IHdoZW4gb3B0aW1pemVkIGZvciBkYXRhIG9ubHlcbiAgICAgICAgQXBwOiBhcHAuZGVmYXVsdCxcbiAgICAgICAgRG9jdW1lbnQ6IGRvY3VtZW50LmRlZmF1bHRcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gZ2V0SGFuZGxlcih7XG4gICAgc3JjUGFnZTogXCIvbG9naW5cIixcbiAgICBjb25maWcsXG4gICAgdXNlcmxhbmQsXG4gICAgcm91dGVNb2R1bGUsXG4gICAgZ2V0U3RhdGljUGF0aHMsXG4gICAgZ2V0U3RhdGljUHJvcHMsXG4gICAgZ2V0U2VydmVyU2lkZVByb3BzXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMuanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Clogin.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\projeto-fullstack\\\\projeto-fullstack\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThCO0FBRWYsU0FBU0EsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFBTyw4REFBQ0Q7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTGVub3ZvXFxEb3dubG9hZHNcXHByb2pldG8tZnVsbHN0YWNrXFxwcm9qZXRvLWZ1bGxzdGFja1xcZnJvbnRlbmRcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG59XHJcbiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/api */ \"(pages-dir-node)/./lib/api.js\");\n\n\n\n\nfunction Login() {\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    async function submit(e) {\n        e.preventDefault();\n        setError(null);\n        if (!email || !password) {\n            setError('Preencha todos os campos.');\n            return;\n        }\n        try {\n            setLoading(true);\n            const res = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.api)('/auth/login', {\n                method: 'POST',\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            localStorage.setItem('token', res.token);\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/profile');\n        } catch (err) {\n            setError('Erro ao entrar: ' + (err.message || 'Tente novamente.'));\n        } finally{\n            setLoading(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            minHeight: '100vh',\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            backgroundColor: '#e6dfd3',\n            fontFamily: 'Arial, sans-serif'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                padding: 30,\n                width: 400,\n                backgroundColor: '#f4eee1',\n                borderRadius: 10,\n                textAlign: 'center',\n                boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {\n                        color: '#5b3a29',\n                        marginBottom: 20\n                    },\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\projeto-fullstack\\\\projeto-fullstack\\\\frontend\\\\pages\\\\login.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        color: 'red',\n                        marginBottom: 10\n                    },\n                    children: error\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\projeto-fullstack\\\\projeto-fullstack\\\\frontend\\\\pages\\\\login.js\",\n                    lineNumber: 58,\n                    columnNumber: 19\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: submit,\n                    style: {\n                        display: 'flex',\n                        flexDirection: 'column',\n                        gap: 10\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value),\n                            placeholder: \"Email\",\n                            style: {\n                                padding: 10,\n                                borderRadius: 5,\n                                border: '1px solid #d4b996'\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\projeto-fullstack\\\\projeto-fullstack\\\\frontend\\\\pages\\\\login.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value),\n                            placeholder: \"Senha\",\n                            style: {\n                                padding: 10,\n                                borderRadius: 5,\n                                border: '1px solid #d4b996'\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\projeto-fullstack\\\\projeto-fullstack\\\\frontend\\\\pages\\\\login.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            disabled: loading,\n                            style: {\n                                padding: 12,\n                                backgroundColor: '#a87c5a',\n                                color: '#fff',\n                                border: 'none',\n                                borderRadius: 5,\n                                cursor: 'pointer',\n                                marginTop: 10\n                            },\n                            children: loading ? 'Entrando...' : 'Entrar'\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\projeto-fullstack\\\\projeto-fullstack\\\\frontend\\\\pages\\\\login.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\projeto-fullstack\\\\projeto-fullstack\\\\frontend\\\\pages\\\\login.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\projeto-fullstack\\\\projeto-fullstack\\\\frontend\\\\pages\\\\login.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\projeto-fullstack\\\\projeto-fullstack\\\\frontend\\\\pages\\\\login.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL2xvZ2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNBO0FBQ0E7QUFFbEIsU0FBU0c7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBRW5DLGVBQWVZLE9BQU9DLENBQUM7UUFDckJBLEVBQUVDLGNBQWM7UUFDaEJILFNBQVM7UUFFVCxJQUFJLENBQUNQLFNBQVMsQ0FBQ0UsVUFBVTtZQUN2QkssU0FBUztZQUNUO1FBQ0Y7UUFFQSxJQUFJO1lBQ0ZGLFdBQVc7WUFDWCxNQUFNTSxNQUFNLE1BQU1iLDZDQUFHQSxDQUFDLGVBQWU7Z0JBQ25DYyxRQUFRO2dCQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVmO29CQUFPRTtnQkFBUztZQUN6QztZQUNBYyxhQUFhQyxPQUFPLENBQUMsU0FBU04sSUFBSU8sS0FBSztZQUN2Q3JCLHVEQUFXLENBQUM7UUFDZCxFQUFFLE9BQU91QixLQUFLO1lBQ1piLFNBQVMscUJBQXNCYSxDQUFBQSxJQUFJQyxPQUFPLElBQUksa0JBQWlCO1FBQ2pFLFNBQVU7WUFDUmhCLFdBQVc7UUFDYjtJQUNGO0lBRUEscUJBQ0UsOERBQUNpQjtRQUNDQyxPQUFPO1lBQ0xDLFdBQVc7WUFDWEMsU0FBUztZQUNUQyxnQkFBZ0I7WUFDaEJDLFlBQVk7WUFDWkMsaUJBQWlCO1lBQ2pCQyxZQUFZO1FBQ2Q7a0JBRUEsNEVBQUNQO1lBQ0NDLE9BQU87Z0JBQ0xPLFNBQVM7Z0JBQ1RDLE9BQU87Z0JBQ1BILGlCQUFpQjtnQkFDakJJLGNBQWM7Z0JBQ2RDLFdBQVc7Z0JBQ1hDLFdBQVc7WUFDYjs7OEJBRUEsOERBQUNDO29CQUFHWixPQUFPO3dCQUFFYSxPQUFPO3dCQUFXQyxjQUFjO29CQUFHOzhCQUFHOzs7Ozs7Z0JBRWxEL0IsdUJBQVMsOERBQUNnQztvQkFBRWYsT0FBTzt3QkFBRWEsT0FBTzt3QkFBT0MsY0FBYztvQkFBRzs4QkFBSS9COzs7Ozs7OEJBRXpELDhEQUFDaUM7b0JBQUtDLFVBQVVoQztvQkFBUWUsT0FBTzt3QkFBRUUsU0FBUzt3QkFBUWdCLGVBQWU7d0JBQVVDLEtBQUs7b0JBQUc7O3NDQUNqRiw4REFBQ0M7NEJBQ0NDLE9BQU81Qzs0QkFDUDZDLFVBQVVwQyxDQUFBQSxJQUFLUixTQUFTUSxFQUFFcUMsTUFBTSxDQUFDRixLQUFLOzRCQUN0Q0csYUFBWTs0QkFDWnhCLE9BQU87Z0NBQUVPLFNBQVM7Z0NBQUlFLGNBQWM7Z0NBQUdnQixRQUFROzRCQUFvQjs7Ozs7O3NDQUVyRSw4REFBQ0w7NEJBQ0NNLE1BQUs7NEJBQ0xMLE9BQU8xQzs0QkFDUDJDLFVBQVVwQyxDQUFBQSxJQUFLTixZQUFZTSxFQUFFcUMsTUFBTSxDQUFDRixLQUFLOzRCQUN6Q0csYUFBWTs0QkFDWnhCLE9BQU87Z0NBQUVPLFNBQVM7Z0NBQUlFLGNBQWM7Z0NBQUdnQixRQUFROzRCQUFvQjs7Ozs7O3NDQUdyRSw4REFBQ0U7NEJBQ0NELE1BQUs7NEJBQ0xFLFVBQVUvQzs0QkFDVm1CLE9BQU87Z0NBQ0xPLFNBQVM7Z0NBQ1RGLGlCQUFpQjtnQ0FDakJRLE9BQU87Z0NBQ1BZLFFBQVE7Z0NBQ1JoQixjQUFjO2dDQUNkb0IsUUFBUTtnQ0FDUkMsV0FBVzs0QkFDYjtzQ0FFQ2pELFVBQVUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12QyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxMZW5vdm9cXERvd25sb2Fkc1xccHJvamV0by1mdWxsc3RhY2tcXHByb2pldG8tZnVsbHN0YWNrXFxmcm9udGVuZFxccGFnZXNcXGxvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9saWIvYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldEVycm9yKG51bGwpO1xuXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICAgIHNldEVycm9yKCdQcmVlbmNoYSB0b2RvcyBvcyBjYW1wb3MuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkoJy9hdXRoL2xvZ2luJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSlcbiAgICAgIH0pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzLnRva2VuKTtcbiAgICAgIFJvdXRlci5wdXNoKCcvcHJvZmlsZScpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoJ0Vycm8gYW8gZW50cmFyOiAnICsgKGVyci5tZXNzYWdlIHx8ICdUZW50ZSBub3ZhbWVudGUuJykpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTZkZmQzJyxcbiAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsLCBzYW5zLXNlcmlmJ1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogMzAsXG4gICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjRlZWUxJyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgYm94U2hhZG93OiAnMnB4IDJweCAxMHB4IHJnYmEoMCwwLDAsMC4xKSdcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiAnIzViM2EyOScsIG1hcmdpbkJvdHRvbTogMjAgfX0+TG9naW48L2gxPlxuXG4gICAgICAgIHtlcnJvciAmJiA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIG1hcmdpbkJvdHRvbTogMTAgfX0+e2Vycm9yfTwvcD59XG5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdH0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAxMCB9fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMTAsIGJvcmRlclJhZGl1czogNSwgYm9yZGVyOiAnMXB4IHNvbGlkICNkNGI5OTYnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmhhXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDEwLCBib3JkZXJSYWRpdXM6IDUsIGJvcmRlcjogJzFweCBzb2xpZCAjZDRiOTk2JyB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogMTIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhODdjNWEnLFxuICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bG9hZGluZyA/ICdFbnRyYW5kby4uLicgOiAnRW50cmFyJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSb3V0ZXIiLCJhcGkiLCJMb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwiZXJyIiwibWVzc2FnZSIsImRpdiIsInN0eWxlIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsImZvbnRGYW1pbHkiLCJwYWRkaW5nIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0QWxpZ24iLCJib3hTaGFkb3ciLCJoMSIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJvcmRlciIsInR5cGUiLCJidXR0b24iLCJkaXNhYmxlZCIsImN1cnNvciIsIm1hcmdpblRvcCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/login.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "../../../shared/lib/no-fallback-error.external":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/no-fallback-error.external.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Clogin.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();