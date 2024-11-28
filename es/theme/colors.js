import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFINE_PALETTE = {
  WHITE: '#FFFFFF',
  BLACK: '#323C47',
  GRAY_10: '#F4F7F9',
  GRAY_20: '#E8EFF5',
  GRAY_30: '#CFD7DE',
  GRAY_40: '#A3AFB7',
  GRAY_50: '#7D828C',
  GRAY_60: '#323C47',
  GRAY_70: '#1A252F',
  BLUE_10: '#4DA1FF',
  BLUE_20: '#238BFF',
  BLUE_30: '#0874F9',
  BLUE_40: '#687695',
  BLUE_50: '#4D5A78',
  GREEN_10: '#A6E50F',
  GREEN_20: '#62C59C',
  GREEN_30: '#3DC38C',
  GREEN_40: '#00BB6E',
  RED_10: '#F17B71',
  RED_20: '#FF6D4A',
  RED_30: '#FE4B3D',
  RED_40: '#FF2A25',
  PURPLE_10: '#9975D0',
  PURPLE_20: '#4D329A',
  PURPLE_30: '#32235E',
  PURPLE_40: '#261B48',
  MAGENTA_10: '#F900AF',
  YELLOW_10: '#FCDC51',
  YELLOW_20: '#FBD324',
  YELLOW_30: '#FFCF00'
};
var PALETTE = _objectSpread({}, DEFINE_PALETTE, {
  PRIMARY: DEFINE_PALETTE.BLUE_30,
  PRIMARY_LIGHT: DEFINE_PALETTE.BLUE_20,
  PRIMARY_LIGHTER: DEFINE_PALETTE.BLUE_10,
  SUCCESS_DARK: DEFINE_PALETTE.GREEN_40,
  SUCCESS: DEFINE_PALETTE.GREEN_30,
  SUCCESS_LIGHT: DEFINE_PALETTE.GREEN_20,
  SUCCESS_LIGHTER: DEFINE_PALETTE.GREEN_10,
  DANGER_DARK: DEFINE_PALETTE.RED_40,
  DANGER: DEFINE_PALETTE.RED_30,
  DANGER_LIGHT: DEFINE_PALETTE.RED_20,
  DANGER_LIGHTER: DEFINE_PALETTE.RED_10,
  WARNING: DEFINE_PALETTE.YELLOW_30,
  WARNING_LIGHT: DEFINE_PALETTE.YELLOW_20,
  WARNING_LIGHTER: DEFINE_PALETTE.YELLOW_10,
  SECONDARY: DEFINE_PALETTE.GREEN_40,
  BLUE: DEFINE_PALETTE.BLUE_30,
  RED: DEFINE_PALETTE.RED_30,
  YELLOW: DEFINE_PALETTE.YELLOW_30,
  GRAY: DEFINE_PALETTE.GRAY_30,
  GREEN: DEFINE_PALETTE.GREEN_30,
  TRANSPARENT: 'transparent'
});
var COLORS = _objectSpread({}, PALETTE, {
  PRIMARY_BORDER_COLOR: PALETTE.GRAY_30,
  SECONDARY_BORDER_COLOR: PALETTE.GRAY_20,
  PRIMARY_HOVER_GRAY_COLOR: PALETTE.GRAY_10,
  DISABLED_COLOR: PALETTE.GRAY_10,
  PLACEHOLDER_COLOR: PALETTE.GRAY_30,
  DISABLED_TEXT_COLOR: PALETTE.GRAY_30,
  PRIMARY_TEXT_COLOR: PALETTE.GRAY_60,
  SECONDARY_TEXT_COLOR: PALETTE.GRAY_50,
  LIGHT_TEXT_COLOR: PALETTE.GRAY_40
});
export { COLORS, PALETTE };