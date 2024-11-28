import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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