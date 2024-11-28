import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getPaths = function getPaths(pathname) {
  return pathname.replace(/\/$/, '').split('/').reduce(function (result, path, index) {
    return [].concat(_toConsumableArray(result), [index < 2 ? "/".concat(path) : "".concat(result[result.length - 1], "/").concat(path)]);
  }, []);
};
var matchPathDefault = function matchPathDefault(path) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return path === options.path;
};
var getBreadcrumbs = function getBreadcrumbs(pathname, routes) {
  var matchPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : matchPathDefault;
  var paths = getPaths(pathname);
  var breadcrumbs = paths.reduce(function (result, path) {
    var matchedRoute = routes.find(function (route) {
      return matchPath ? matchPath(path, _objectSpread({
        path: route.path
      }, route.matchOptions || {})) : route.path === path;
    });
    if (matchedRoute) {
      var match = matchPath(path, _objectSpread({
        path: matchedRoute.path
      }, matchedRoute.matchOptions || {}));
      result = [].concat(_toConsumableArray(result), [_objectSpread({}, matchedRoute, {
        originalPath: path,
        match: match
      })]);
    }
    return result;
  }, []);
  return breadcrumbs;
};
export { getBreadcrumbs };