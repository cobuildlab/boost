import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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