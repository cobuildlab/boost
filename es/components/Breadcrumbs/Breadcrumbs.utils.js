import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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