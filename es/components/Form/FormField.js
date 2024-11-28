import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React from 'react';
import { createThemeTag } from '../../theme/createThemeTag';
import * as formUtils from '../../utils/forms';
var name = 'formField';
var _createThemeTag = createThemeTag(name, {
    root: function root(props) {
      return {
        position: 'relative',
        display: 'inline-flex',
        width: props.stretch ? '100%' : 'auto'
      };
    }
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  FormFieldTag = _createThemeTag2[0],
  themeField = _createThemeTag2[1];
var _createThemeTag3 = createThemeTag("".concat(name, "Label"), function (_ref) {
    var FONTS = _ref.FONTS;
    return {
      root: function root(props) {
        return _objectSpread({}, FONTS.OVERLINE_1, {
          marginLeft: props.direction === 'row' ? '8px' : 0,
          marginBottom: '4px'
        });
      }
    };
  }),
  _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
  FormLabel = _createThemeTag4[0],
  themeLabel = _createThemeTag4[1];
var _createThemeTag5 = createThemeTag("".concat(name, "Error"), function (_ref2) {
    var COLORS = _ref2.COLORS,
      FONTS = _ref2.FONTS;
    return {
      root: _objectSpread({
        position: 'relative'
      }, FONTS.SMALL_1, {
        color: COLORS.DANGER,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        display: 'block',
        maxWidth: '100%'
      })
    };
  }),
  _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
  ControlErrorTag = _createThemeTag6[0],
  themeError = _createThemeTag6[1];
var _createThemeTag7 = createThemeTag("".concat(name, "Note"), function (_ref3) {
    var FONTS = _ref3.FONTS;
    return {
      root: _objectSpread({
        position: 'relative'
      }, FONTS.SMALL_1, {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        display: 'block',
        maxWidth: '100%',
        marginTop: 4
      })
    };
  }),
  _createThemeTag8 = _slicedToArray(_createThemeTag7, 2),
  FormFieldNoteTag = _createThemeTag8[0],
  themeNote = _createThemeTag8[1];
var _createThemeTag9 = createThemeTag("".concat(name, "Direction"), {
    root: function root(props) {
      return {
        display: 'inline-flex',
        flexDirection: props.direction === 'row' ? 'row-reverse' : 'column',
        alignItems: props.direction === 'row' ? 'center' : 'flex-start',
        justifyContent: props.direction === 'row' ? 'flex-end' : 'flex-start',
        width: props.stretch ? '100%' : 'auto'
      };
    }
  }),
  _createThemeTag10 = _slicedToArray(_createThemeTag9, 2),
  FormFieldDirectionTag = _createThemeTag10[0],
  themeDirection = _createThemeTag10[1];
var _createThemeTag11 = createThemeTag("".concat(name, "ErrorWrapper"), {
    root: {
      display: 'block',
      position: 'absolute',
      bottom: 0,
      height: 0,
      maxWidth: '100%'
    }
  }),
  _createThemeTag12 = _slicedToArray(_createThemeTag11, 2),
  ControlErrorWrapperTag = _createThemeTag12[0],
  themeErrorWrapper = _createThemeTag12[1];
var theme = _objectSpread({}, themeErrorWrapper, {}, themeDirection, {}, themeLabel, {}, themeError, {}, themeField, {}, themeNote);
var FormField = function FormField(_ref4) {
  var _ref4$meta = _ref4.meta,
    meta = _ref4$meta === void 0 ? {} : _ref4$meta,
    label = _ref4.label,
    note = _ref4.note,
    children = _ref4.children,
    hideErrorLabel = _ref4.hideErrorLabel,
    showErrorOnTouched = _ref4.showErrorOnTouched,
    rest = _objectWithoutProperties(_ref4, ["meta", "label", "note", "children", "hideErrorLabel", "showErrorOnTouched"]);
  var hasError = formUtils.hasError(meta, showErrorOnTouched);
  var error = formUtils.getError(meta, showErrorOnTouched);
  var hasLabel = !!label;
  if (typeof error === 'object') {
    error = Object.keys(error).map(function (key) {
      return error[key];
    });
  }
  return ___EmotionJSX(FormFieldTag, _extends({}, rest, {
    tagName: "div"
  }), ___EmotionJSX(FormFieldDirectionTag, {
    modifiers: rest,
    tagName: "div"
  }, hasLabel ? ___EmotionJSX(FormLabel, {
    modifiers: rest,
    tagName: "div"
  }, label) : null, children, !!note ? ___EmotionJSX(FormFieldNoteTag, {
    modifiers: rest,
    title: note
  }, note) : null), hasError && !hideErrorLabel ? ___EmotionJSX(ControlErrorWrapperTag, {
    modifiers: rest,
    tagName: "div"
  }, ___EmotionJSX(ControlErrorTag, {
    modifiers: rest,
    role: "alert",
    tagName: "span",
    title: error.toString()
  }, error.toString())) : null);
};
FormField.defaultProps = {
  hideErrorLabel: false,
  stretch: true,
  direction: 'column',
  showErrorOnTouched: true
};
export { FormField, theme, FormLabel, ControlErrorTag };