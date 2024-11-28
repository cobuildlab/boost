import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { jsx as ___EmotionJSX } from "@emotion/core";
function _templateObject2() {
  var data = _taggedTemplateLiteral(["display: flex; align-items: center;"]);
  _templateObject2 = function _templateObject2() {
    return data;
  };
  return data;
}
function _templateObject() {
  var data = _taggedTemplateLiteral(["display: flex; align-items: center; height: 14px;"]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React from 'react';
import ReactSelect, { components } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { withTheme } from '@emotion/react';
import { css } from '@emotion/react';
import color from 'color';
import { SelectTag } from './Select.theme';
import { COLORS, Z_INDEX } from '../../theme';
import { Tooltip } from '../Tooltip';
var customStyles = function customStyles(_ref) {
  var hasError = _ref.hasError,
    _ref$zIndex = _ref.zIndex,
    zIndex = _ref$zIndex === void 0 ? Z_INDEX.DROPDOWN : _ref$zIndex,
    COLORS = _ref.COLORS;
  return {
    control: function control(style, _ref2) {
      var isFocused = _ref2.isFocused,
        isDisabled = _ref2.isDisabled;
      return _objectSpread({}, style, {
        minHeight: '36px',
        backgroundColor: isDisabled ? COLORS.DISABLED_COLOR : COLORS.WHITE,
        borderColor: hasError ? COLORS.DANGER : isFocused ? COLORS.PRIMARY : COLORS.PRIMARY_BORDER_COLOR,
        boxShadow: null,
        '&:hover': {
          borderColor: null
        }
      });
    },
    menuPortal: function menuPortal(style) {
      return _objectSpread({}, style, {
        zIndex: zIndex
      });
    },
    placeholder: function placeholder(style) {
      return _objectSpread({}, style, {
        color: COLORS.PLACEHOLDER_COLOR,
        whiteSpace: 'nowrap'
      });
    },
    indicatorSeparator: function indicatorSeparator(style) {
      return _objectSpread({}, style, {
        display: 'none'
      });
    },
    multiValue: function multiValue(style) {
      return _objectSpread({}, style, {
        borderRadius: '12px',
        padding: '0 8px',
        color: COLORS.SECONDARY_TEXT_COLOR,
        border: '1px solid #d0d7dd',
        backgroundColor: COLORS.WHITE,
        height: 26,
        alignItems: 'center'
      });
    },
    multiValueLabel: function multiValueLabel(style) {
      return _objectSpread({}, style, {
        color: 'inherit'
      });
    },
    multiValueRemove: function multiValueRemove(style) {
      return _objectSpread({}, style, {
        color: 'inherit',
        '&:hover': {
          backgroundColor: 'transparent',
          color: 'inherit',
          cursor: 'pointer'
        }
      });
    },
    dropdownIndicator: function dropdownIndicator(style) {
      return _objectSpread({}, style, {
        padding: '0 8px'
      });
    },
    clearIndicator: function clearIndicator(style) {
      return _objectSpread({}, style, {
        padding: '0 8px'
      });
    },
    option: function option(style, _ref3) {
      var isFocused = _ref3.isFocused,
        isDisabled = _ref3.isDisabled,
        isSelected = _ref3.isSelected;
      return _objectSpread({}, style, {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        backgroundColor: isDisabled ? null : isSelected ? COLORS.PRIMARY : isFocused ? color(COLORS.PRIMARY).alpha(0.1).string() : null,
        color: isDisabled ? COLORS.DISABLED_TEXT_COLOR : isSelected ? color(COLORS.PRIMARY).contrast(color(COLORS.WHITE)) > 2 ? COLORS.WHITE : COLORS.BLACK : COLORS.PRIMARY_TEXT_COLOR,
        ':active': _objectSpread({}, style[':active'], {
          backgroundColor: !isDisabled && !isSelected && color(COLORS.PRIMARY).alpha(0.3).string()
        })
      });
    }
  };
};
var MultiValueRemove = function MultiValueRemove(props) {
  return ___EmotionJSX(Tooltip, {
    message: "Remove",
    css: css(_templateObject())
  }, ___EmotionJSX(components.MultiValueRemove, props));
};
var ClearIndicator = function ClearIndicator(props) {
  return ___EmotionJSX(Tooltip, {
    message: "Remove All",
    css: css(_templateObject2())
  }, ___EmotionJSX(components.ClearIndicator, props));
};
var getCreatableOptionByValue = function getCreatableOptionByValue(value) {
  if (Array.isArray(value)) {
    return value.map(function (valueItem) {
      return getCreatableOptionByValue(valueItem);
    });
  } else {
    return {
      label: value,
      value: value
    };
  }
};
var getOptionByValue = function getOptionByValue(value, options) {
  if (Array.isArray(value)) {
    return value.map(function (valueItem) {
      return getOptionByValue(valueItem, options);
    });
  }
  var foundOption = options.reduce(function (result, option) {
    if (result === null) {
      if (option.value === value) {
        return option;
      } else if (Array.isArray(option.options)) {
        return getOptionByValue(value, option.options);
      }
    }
    return result;
  }, null);
  return foundOption;
};
var Select = /*#__PURE__*/function (_React$Component) {
  _inherits(Select, _React$Component);
  function Select() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, Select);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.onChange = function (option) {
      var isMulti = _this.props.isMulti;
      var value = null;
      if (Array.isArray(option) || isMulti) {
        value = (option || []).map(function (_ref4) {
          var value = _ref4.value;
          return value;
        });
      } else if (option) {
        value = option.value;
      }
      _this.props.onChange(value);
    };
    return _this;
  }
  _createClass(Select, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        value = _this$props.value,
        loading = _this$props.loading,
        clearable = _this$props.clearable,
        disabled = _this$props.disabled,
        multiple = _this$props.multiple,
        isMulti = _this$props.isMulti,
        options = _this$props.options,
        placeholder = _this$props.placeholder,
        valueComponent = _this$props.valueComponent,
        components = _this$props.components,
        onChange = _this$props.onChange,
        withPortal = _this$props.withPortal,
        theme = _this$props.theme,
        formatOptionLabel = _this$props.formatOptionLabel,
        inputValue = _this$props.inputValue,
        onInputChange = _this$props.onInputChange,
        menuIsOpen = _this$props.menuIsOpen,
        autoFocus = _this$props.autoFocus,
        filterOption = _this$props.filterOption,
        getOptionValue = _this$props.getOptionValue,
        getOptionLabel = _this$props.getOptionLabel,
        isSearchable = _this$props.isSearchable,
        creatable = _this$props.creatable,
        rest = _objectWithoutProperties(_this$props, ["value", "loading", "clearable", "disabled", "multiple", "isMulti", "options", "placeholder", "valueComponent", "components", "onChange", "withPortal", "theme", "formatOptionLabel", "inputValue", "onInputChange", "menuIsOpen", "autoFocus", "filterOption", "getOptionValue", "getOptionLabel", "isSearchable", "creatable"]);
      var selectValue = creatable ? getCreatableOptionByValue(value) : getOptionByValue(value, options || []);
      var SelectComponent = creatable ? CreatableSelect : ReactSelect;
      return ___EmotionJSX(SelectTag, _extends({}, rest, {
        "aria-busy": String(loading || false)
      }), ___EmotionJSX(SelectComponent, {
        isClearable: clearable,
        isDisabled: disabled,
        isLoading: loading,
        isMulti: multiple || isMulti,
        menuPlacement: "auto",
        menuPortalTarget: withPortal ? document.body : false,
        onChange: this.onChange,
        options: options,
        placeholder: placeholder,
        valueComponent: valueComponent,
        styles: customStyles(_objectSpread({}, rest, {
          COLORS: theme.COLORS || COLORS
        })),
        value: selectValue,
        autoFocus: autoFocus,
        components: _objectSpread({
          MultiValueRemove: MultiValueRemove,
          ClearIndicator: ClearIndicator
        }, components),
        formatOptionLabel: formatOptionLabel,
        inputValue: inputValue,
        onInputChange: onInputChange,
        menuIsOpen: menuIsOpen,
        filterOption: filterOption,
        getOptionValue: getOptionValue,
        getOptionLabel: getOptionLabel,
        isSearchable: isSearchable
      }));
    }
  }]);
  return Select;
}(React.Component);
Select.components = components;
Select.defaultProps = {
  withPortal: true,
  stretch: true
};
Select = withTheme(Select);
export { Select };