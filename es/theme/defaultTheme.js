import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { theme } from '../components/theme';
import { COLORS } from './colors';
import { SIZES } from './sizes';
import { Z_INDEX } from './zIndex';
import { FONTS } from './fonts';
export var defaultRawTheme = {
  COLORS: COLORS,
  SIZES: SIZES,
  Z_INDEX: Z_INDEX,
  FONTS: FONTS,
  components: _objectSpread({}, Object.keys(theme).reduce(function (result, componentName) {
    return _objectSpread({}, result, _defineProperty({}, componentName, theme[componentName]));
  }, {}))
};