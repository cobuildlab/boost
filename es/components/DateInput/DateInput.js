import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateInputValue } from './DateInputValue';
import { Dropdown } from '../Dropdown';
import { Icon } from '../Icon';
import { DateInputTag, DateInputCalendarTag } from './DateInput.theme';
import * as utils from './DateInput.utils';

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "72fd9l",
  styles: "flex:0;"
} : {
  name: "72fd9l",
  styles: "flex:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RhdGVJbnB1dC9EYXRlSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0tVIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RhdGVJbnB1dC9EYXRlSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAncmVhY3QtZGF0ZXBpY2tlcic7XG5pbXBvcnQgJ3JlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzcyc7XG5cbmltcG9ydCB7IERhdGVJbnB1dFZhbHVlIH0gZnJvbSAnLi9EYXRlSW5wdXRWYWx1ZSc7XG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJy4uL0Ryb3Bkb3duJztcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi9JY29uJztcblxuaW1wb3J0IHsgRGF0ZUlucHV0VGFnLCBEYXRlSW5wdXRDYWxlbmRhclRhZyB9IGZyb20gJy4vRGF0ZUlucHV0LnRoZW1lJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vRGF0ZUlucHV0LnV0aWxzJztcblxudHlwZSBEYXRlSW5wdXRQcm9wcyA9IHtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogP3N0cmluZykgPT4gdm9pZCxcbiAgdmFsdWU6ID9zdHJpbmcsXG4gIHdpdGhUaW1lPzogYm9vbGVhbixcbiAgd2l0aFBvcnRhbD86IGJvb2xlYW4sXG4gIHN0cmV0Y2g/OiBib29sZWFuLFxuICBjbGVhcmFibGU/OiBib29sZWFuLFxuICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gIGlzTW9udGhQaWNrZXI/OiBib29sZWFuLFxuICBhdXRvRm9jdXM/OiBib29sZWFuLFxuICBwbGFjZWhvbGRlcj86IHN0cmluZyxcbn07XG5cbnR5cGUgRGF0ZUlucHV0U3RhdGUgPSB7fFxuICBpc09wZW46IGJvb2xlYW4sXG4gIHRleHRWYWx1ZTogP3N0cmluZyxcbnx9O1xuXG5jbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RGF0ZUlucHV0UHJvcHMsIERhdGVJbnB1dFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3RyZXRjaDogdHJ1ZSxcbiAgICB3aXRoUG9ydGFsOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBEYXRlSW5wdXRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IGRhdGVGb3JtYXQgPSB0aGlzLmdldERhdGVGb3JtYXQoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXh0VmFsdWU6IHV0aWxzLmZyb21JU09Ub1ZpZXdGb3JtYXQocHJvcHMudmFsdWUsIGRhdGVGb3JtYXQpLFxuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogRGF0ZUlucHV0UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRhdGVGb3JtYXQgPSB0aGlzLmdldERhdGVGb3JtYXQoKTtcblxuICAgIGlmICh2YWx1ZSAhPT0gcHJldlByb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGV4dFZhbHVlOiB1dGlscy5mcm9tSVNPVG9WaWV3Rm9ybWF0KHZhbHVlLCBkYXRlRm9ybWF0KSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldERhdGVGb3JtYXQoKSB7XG4gICAgY29uc3QgeyBpc01vbnRoUGlja2VyLCB3aXRoVGltZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiBpc01vbnRoUGlja2VyID8gdXRpbHMuWUVBUl9NT05USF9GT1JNQVQgOiB3aXRoVGltZSA/IHV0aWxzLkRBVEVUSU1FX0ZPUk1BVCA6IHV0aWxzLkRBVEVfRk9STUFUO1xuICB9XG5cbiAgb25DaGFuZ2VUZXh0ID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH19OiBPYmplY3QpID0+IHtcbiAgICBjb25zdCB7IHdpdGhUaW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRhdGVGb3JtYXQgPSB0aGlzLmdldERhdGVGb3JtYXQoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0VmFsdWU6IHZhbHVlIH0pO1xuXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbHV4b25WYWx1ZSA9IHV0aWxzLmZyb21WaWV3Rm9ybWF0VG9MdXhvbih2YWx1ZSwgZGF0ZUZvcm1hdCk7XG5cbiAgICAgIGlmIChsdXhvblZhbHVlICYmIGx1eG9uVmFsdWUuaXNWYWxpZCkge1xuICAgICAgICB2YWx1ZSA9IHV0aWxzLmZyb21MdXhvblRvSVNPKGx1eG9uVmFsdWUsIHdpdGhUaW1lKTtcblxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgb25CbHVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdGV4dFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGRhdGVGb3JtYXQgPSB0aGlzLmdldERhdGVGb3JtYXQoKTtcblxuICAgIGNvbnN0IGx1eG9uVmFsdWUgPSB1dGlscy5mcm9tVmlld0Zvcm1hdFRvTHV4b24odGV4dFZhbHVlLCBkYXRlRm9ybWF0KTtcblxuICAgIGlmIChsdXhvblZhbHVlICYmICFsdXhvblZhbHVlLmlzVmFsaWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0VmFsdWU6IHV0aWxzLmZyb21JU09Ub1ZpZXdGb3JtYXQodGhpcy5wcm9wcy52YWx1ZSwgZGF0ZUZvcm1hdCkgfSk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2VEYXRlID0gKHNlbGVjdGVkOiBEYXRlKSA9PiB7XG4gICAgY29uc3QgeyB3aXRoVGltZSwgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBpc29WYWx1ZSA9IHV0aWxzLmZyb21KU0RhdGVUb0lTTyhzZWxlY3RlZCwgd2l0aFRpbWUpO1xuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShpc29WYWx1ZSk7XG5cbiAgICBpZiAoIXdpdGhUaW1lIHx8IE1hdGguYWJzKHNlbGVjdGVkIC0gKHZhbHVlID8gbmV3IERhdGUodmFsdWUpIDogMCkpIDw9IDI0ICogNjAgKiA2MCAqIDEwMDApIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgY29sbGVjdFByb3BzKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHdpdGhUaW1lLCB3aXRoUG9ydGFsLCBpc01vbnRoUGlja2VyLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkOiB1dGlscy5mcm9tSVNPdG9KU0RhdGUodmFsdWUpLFxuICAgICAgZGF0ZUZvcm1hdDogdGhpcy5nZXREYXRlRm9ybWF0KCksXG4gICAgICAuLi5yZXN0LFxuICAgICAgc2hvd1RpbWVTZWxlY3Q6IHdpdGhUaW1lLFxuICAgICAgc2hvd01vbnRoWWVhclBpY2tlcjogaXNNb250aFBpY2tlcixcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlRGF0ZSxcbiAgICAgIGlubGluZTogdHJ1ZSxcbiAgICAgIHRvZGF5QnV0dG9uOiBpc01vbnRoUGlja2VyID8gJ0N1cnJlbnQnIDogJ1RvZGF5JyxcbiAgICB9O1xuICB9XG5cbiAgdG9nZ2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogIWlzT3BlbiB9KTtcbiAgfTtcblxuICBvcGVuID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFpc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IHRydWUgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IGZhbHNlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb2xsZWN0ZWRQcm9wcyA9IHRoaXMuY29sbGVjdFByb3BzKCk7XG5cbiAgICBjb25zdCB7IHZhbHVlLCB3aXRoVGltZSwgd2l0aFBvcnRhbCwgc3RyZXRjaCwgb25DaGFuZ2UsIGNsZWFyYWJsZSwgZGlzYWJsZWQsIHBsYWNlaG9sZGVyLCBpc01vbnRoUGlja2VyLCBhdXRvRm9jdXMsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7IHRleHRWYWx1ZSwgaXNPcGVuIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG1hc2sgPSBpc01vbnRoUGlja2VyID8gdXRpbHMuWUVBUl9NT05USF9NQVNLIDogd2l0aFRpbWUgPyB1dGlscy5EQVRFVElNRV9NQVNLIDogdXRpbHMuREFURV9NQVNLO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEYXRlSW5wdXRUYWcgc3RyZXRjaD17IHN0cmV0Y2ggfSB7IC4uLnJlc3QgfT5cbiAgICAgICAgPERhdGVJbnB1dFZhbHVlXG4gICAgICAgICAgcGxhY2Vob2xkZXI9eyBwbGFjZWhvbGRlciB9XG4gICAgICAgICAgbWFzaz17IG1hc2sgfVxuICAgICAgICAgIHZhbHVlPXsgdGV4dFZhbHVlIH1cbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VUZXh0IH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ciB9XG4gICAgICAgICAgY2xlYXJhYmxlPXsgY2xlYXJhYmxlIH1cbiAgICAgICAgICBkaXNhYmxlZD17IGRpc2FibGVkIH1cbiAgICAgICAgICBhdXRvRm9jdXM9eyBhdXRvRm9jdXMgfVxuICAgICAgICAvPlxuICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICBpc09wZW49eyBpc09wZW4gJiYgIWRpc2FibGVkIH1cbiAgICAgICAgICBzdHJldGNoPXsgc3RyZXRjaCB9XG4gICAgICAgICAgb25DbG9zZURyb3Bkb3duPXsgdGhpcy5jbG9zZSB9XG4gICAgICAgICAgb25PcGVuRHJvcGRvd249eyB0aGlzLm9wZW4gfVxuICAgICAgICAgIGNzcz17eyBmbGV4OiAwIH19XG4gICAgICAgID5cbiAgICAgICAgICA8RHJvcGRvd24uSGVhZCBvbkNsaWNrPXsgdGhpcy50b2dnbGUgfT5cbiAgICAgICAgICAgIDxEYXRlSW5wdXRDYWxlbmRhclRhZz5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cIkNhbGVuZGFyXCIgLz5cbiAgICAgICAgICAgIDwvRGF0ZUlucHV0Q2FsZW5kYXJUYWc+XG4gICAgICAgICAgPC9Ecm9wZG93bi5IZWFkPlxuICAgICAgICAgIDxEcm9wZG93bi5Cb2R5IHdpdGhQb3J0YWw9eyB3aXRoUG9ydGFsIH0gcGxhY2VtZW50PVwiYm90dG9tLWVuZFwiIG1vZGlmaWVycz17e1xuICAgICAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiAndmlld3BvcnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxEYXRlUGlja2VyIHsgLi4uY29sbGVjdGVkUHJvcHMgfSAvPlxuICAgICAgICAgIDwvRHJvcGRvd24uQm9keT5cbiAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgIDwvRGF0ZUlucHV0VGFnPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHsgRGF0ZUlucHV0IH07XG4iXX0= */"
};

var DateInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DateInput, _React$Component);

  function DateInput(props) {
    var _this;

    _classCallCheck(this, DateInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateInput).call(this, props));

    _this.onChangeText = function (_ref) {
      var value = _ref.target.value;
      var withTime = _this.props.withTime;

      var dateFormat = _this.getDateFormat();

      _this.setState({
        textValue: value
      });

      if (!value) {
        _this.props.onChange(null);

        return;
      } else {
        var luxonValue = utils.fromViewFormatToLuxon(value, dateFormat);

        if (luxonValue && luxonValue.isValid) {
          value = utils.fromLuxonToISO(luxonValue, withTime);

          _this.props.onChange(value);
        }
      }
    };

    _this.onBlur = function () {
      var textValue = _this.state.textValue;

      var dateFormat = _this.getDateFormat();

      var luxonValue = utils.fromViewFormatToLuxon(textValue, dateFormat);

      if (luxonValue && !luxonValue.isValid) {
        _this.setState({
          textValue: utils.fromISOToViewFormat(_this.props.value, dateFormat)
        });
      }
    };

    _this.onChangeDate = function (selected) {
      var _this$props = _this.props,
          withTime = _this$props.withTime,
          value = _this$props.value;
      var isoValue = utils.fromJSDateToISO(selected, withTime);

      _this.props.onChange(isoValue);

      if (!withTime || Math.abs(selected - (value ? new Date(value) : 0)) <= 24 * 60 * 60 * 1000) {
        _this.close();
      }
    };

    _this.toggle = function () {
      var isOpen = _this.state.isOpen;

      _this.setState({
        isOpen: !isOpen
      });
    };

    _this.open = function () {
      var isOpen = _this.state.isOpen;

      if (!isOpen) {
        _this.setState({
          isOpen: true
        });
      }
    };

    _this.close = function () {
      _this.setState({
        isOpen: false
      });
    };

    var _dateFormat = _this.getDateFormat();

    _this.state = {
      textValue: utils.fromISOToViewFormat(props.value, _dateFormat),
      isOpen: false
    };
    return _this;
  }

  _createClass(DateInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var value = this.props.value;
      var dateFormat = this.getDateFormat();

      if (value !== prevProps.value) {
        this.setState({
          textValue: utils.fromISOToViewFormat(value, dateFormat)
        });
      }
    }
  }, {
    key: "getDateFormat",
    value: function getDateFormat() {
      var _this$props2 = this.props,
          isMonthPicker = _this$props2.isMonthPicker,
          withTime = _this$props2.withTime;
      return isMonthPicker ? utils.YEAR_MONTH_FORMAT : withTime ? utils.DATETIME_FORMAT : utils.DATE_FORMAT;
    }
  }, {
    key: "collectProps",
    value: function collectProps() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          withTime = _this$props3.withTime,
          withPortal = _this$props3.withPortal,
          isMonthPicker = _this$props3.isMonthPicker,
          rest = _objectWithoutProperties(_this$props3, ["value", "withTime", "withPortal", "isMonthPicker"]);

      return _objectSpread({
        selected: utils.fromISOtoJSDate(value),
        dateFormat: this.getDateFormat()
      }, rest, {
        showTimeSelect: withTime,
        showMonthYearPicker: isMonthPicker,
        onChange: this.onChangeDate,
        inline: true,
        todayButton: isMonthPicker ? 'Current' : 'Today'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var collectedProps = this.collectProps();

      var _this$props4 = this.props,
          value = _this$props4.value,
          withTime = _this$props4.withTime,
          withPortal = _this$props4.withPortal,
          stretch = _this$props4.stretch,
          onChange = _this$props4.onChange,
          clearable = _this$props4.clearable,
          disabled = _this$props4.disabled,
          placeholder = _this$props4.placeholder,
          isMonthPicker = _this$props4.isMonthPicker,
          autoFocus = _this$props4.autoFocus,
          rest = _objectWithoutProperties(_this$props4, ["value", "withTime", "withPortal", "stretch", "onChange", "clearable", "disabled", "placeholder", "isMonthPicker", "autoFocus"]);

      var _this$state = this.state,
          textValue = _this$state.textValue,
          isOpen = _this$state.isOpen;
      var mask = isMonthPicker ? utils.YEAR_MONTH_MASK : withTime ? utils.DATETIME_MASK : utils.DATE_MASK;
      return ___EmotionJSX(DateInputTag, _extends({
        stretch: stretch
      }, rest), ___EmotionJSX(DateInputValue, {
        placeholder: placeholder,
        mask: mask,
        value: textValue,
        onChange: this.onChangeText,
        onBlur: this.onBlur,
        clearable: clearable,
        disabled: disabled,
        autoFocus: autoFocus
      }), ___EmotionJSX(Dropdown, {
        isOpen: isOpen && !disabled,
        stretch: stretch,
        onCloseDropdown: this.close,
        onOpenDropdown: this.open,
        css: _ref2
      }, ___EmotionJSX(Dropdown.Head, {
        onClick: this.toggle
      }, ___EmotionJSX(DateInputCalendarTag, null, ___EmotionJSX(Icon, {
        name: "Calendar"
      }))), ___EmotionJSX(Dropdown.Body, {
        withPortal: withPortal,
        placement: "bottom-end",
        modifiers: {
          preventOverflow: {
            boundariesElement: 'viewport'
          }
        }
      }, ___EmotionJSX(DatePicker, collectedProps))));
    }
  }]);

  return DateInput;
}(React.Component);

DateInput.defaultProps = {
  stretch: true,
  withPortal: true
};
export { DateInput };