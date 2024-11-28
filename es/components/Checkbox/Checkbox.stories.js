import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _styled from "@emotion/styled-base";
import { jsx as ___EmotionJSX } from "@emotion/core";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React, { Component } from 'react';
import { Checkbox, Column } from '../../';
var Container = /*#__PURE__*/_styled('div', {
  target: "e1j6z9yy0"
})(process.env.NODE_ENV === "production" ? {
  name: "1m2z7wn",
  styles: "max-width:100px;"
} : {
  name: "1m2z7wn",
  styles: "max-width:100px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NoZWNrYm94L0NoZWNrYm94LnN0b3JpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSytCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NoZWNrYm94L0NoZWNrYm94LnN0b3JpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgQ2hlY2tib3gsIENvbHVtbiB9IGZyb20gJy4uLy4uLyc7XG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgbWF4LXdpZHRoOiAxMDBweDtcbmA7XG5cbmNsYXNzIENoZWNrYm94U3RhdGUgZXh0ZW5kcyBDb21wb25lbnQ8KiwgT2JqZWN0PiB7XG4gIHN0YXRlID0ge1xuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICB9XG5cbiAgY2hhbmdlQ2hlY2sgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4gdGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWQgfSlcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oeyBjaGVja2VkOiB0aGlzLnN0YXRlLmNoZWNrZWQsIGNoYW5nZUNoZWNrOiB0aGlzLmNoYW5nZUNoZWNrIH0pO1xuICB9XG59XG5cbmNsYXNzIENoZWNrYm94SW5kZXJ0ZW1pbmF0ZVN0YXRlIGV4dGVuZHMgQ29tcG9uZW50PCosIE9iamVjdD4ge1xuICBzdGF0ZSA9IHtcbiAgICBvcHRpb25zOiBbeyBsYWJlbDogJ09yYW5nZScsIGNoZWNrZWQ6IHRydWUgfSwgeyBsYWJlbDogJ01hbmdvJywgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgfVxuXG4gIHNldEFsbE9wdGlvbnNUbyhjaGVja2VkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgb3B0aW9uczogcHJldlN0YXRlLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAoeyAuLi5vcHRpb24sIGNoZWNrZWQgfSkpLFxuICAgIH0pKTtcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmluZGV0ZXJtaW5hdGUgfHwgdGhpcy5zdGF0ZS5jaGVja2VkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7IC4uLnByZXZTdGF0ZSwgaW5kZXRlcm1pbmF0ZTogZmFsc2UsIGNoZWNrZWQ6IGZhbHNlIH0pKTtcbiAgICAgIHRoaXMuc2V0QWxsT3B0aW9uc1RvKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIGluZGV0ZXJtaW5hdGU6IGZhbHNlLCBjaGVja2VkOiB0cnVlIH0pKTtcbiAgICAgIHRoaXMuc2V0QWxsT3B0aW9uc1RvKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uT3B0aW9uQ2hhbmdlID0gKG9wdGlvbikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IHByZXZTdGF0ZS5vcHRpb25zLm1hcChpdGVtID0+IG9wdGlvbiA9PT0gaXRlbSA/IHsgLi4uaXRlbSwgY2hlY2tlZDogIWl0ZW0uY2hlY2tlZCB9IDogaXRlbSk7XG4gICAgICBjb25zdCBpc0FsbENoZWNrZWQgPSBuZXdPcHRpb25zLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5jaGVja2VkKTtcbiAgICAgIGNvbnN0IGlzQWxsVW5jaGVja2VkID0gbmV3T3B0aW9ucy5ldmVyeShpdGVtID0+ICFpdGVtLmNoZWNrZWQpO1xuXG4gICAgICByZXR1cm4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBpbmRldGVybWluYXRlOiAhaXNBbGxDaGVja2VkICYmICFpc0FsbFVuY2hlY2tlZCxcbiAgICAgICAgY2hlY2tlZDogaXNBbGxDaGVja2VkLFxuICAgICAgICBvcHRpb25zOiBuZXdPcHRpb25zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oeyBzdGF0ZTogdGhpcy5zdGF0ZSwgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2UsIG9uT3B0aW9uQ2hhbmdlOiB0aGlzLm9uT3B0aW9uQ2hhbmdlIH0pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ0NvbXBvbmVudHMvQ2hlY2tib3gnLFxuICBjb21wb25lbnQ6IENoZWNrYm94LFxufTtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbiA9ICgpID0+IChcbiAgPENvbHVtbj5cbiAgICA8Q2hlY2tib3ggY2hlY2tlZCAvPlxuICAgIDxDaGVja2JveCBsYWJlbD1cIldpdGhvdXQgQ2hlY2tcIiAvPlxuICAgIDxDaGVja2JveCBsYWJlbD1cIldpdGggQ2hlY2tcIiBjaGVja2VkIC8+XG4gICAgPENoZWNrYm94IGxhYmVsPVwiV2l0aCBlcnJvclwiIGNoZWNrZWQgaGFzRXJyb3IgLz5cbiAgICA8Q2hlY2tib3ggbGFiZWw9XCJXaXRoIGRpc2FibGVkXCIgY2hlY2tlZCBkaXNhYmxlZCAvPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8Q2hlY2tib3ggbGFiZWw9XCJXaXRoIG92ZXJmbG93XCIgbm93cmFwIGNoZWNrZWQgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8Q2hlY2tib3ggbGFiZWw9XCJXaXRoIGluZGV0ZXJtaW5hdGVcIiBpbmRldGVybWluYXRlIC8+XG4gIDwvQ29sdW1uPlxuKTtcblxuY29tbW9uLnN0b3J5ID0ge1xuICBuYW1lOiAnY29tbW9uJyxcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoU3RhdGUgPSAoKSA9PiAoXG4gIDxDaGVja2JveFN0YXRlPlxuICAgIHsgKHsgY2hlY2tlZCwgY2hhbmdlQ2hlY2sgfSkgPT4gKFxuICAgICAgPENoZWNrYm94IGxhYmVsPVwiQ2hlY2tib3hcIiBjaGVja2VkPXsgY2hlY2tlZCB9IG9uQ2hhbmdlPXsgY2hhbmdlQ2hlY2sgfSAvPlxuICAgICkgfVxuICA8L0NoZWNrYm94U3RhdGU+XG4pO1xuXG53aXRoU3RhdGUuc3RvcnkgPSB7XG4gIG5hbWU6ICd3aXRoIHN0YXRlJyxcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoSW5kZXRlcm1pbmF0ZSA9ICgpID0+IChcbiAgPENoZWNrYm94SW5kZXJ0ZW1pbmF0ZVN0YXRlPlxuICAgIHsgKHsgc3RhdGUsIG9uQ2hhbmdlLCBvbk9wdGlvbkNoYW5nZSB9KSA9PiAoXG4gICAgICA8Q29sdW1uPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBsYWJlbD1cIkZydWl0c1wiXG4gICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZSB9XG4gICAgICAgICAgaW5kZXRlcm1pbmF0ZT17IHN0YXRlLmluZGV0ZXJtaW5hdGUgfVxuICAgICAgICAgIGNoZWNrZWQ9eyBzdGF0ZS5jaGVja2VkIH1cbiAgICAgICAgLz5cblxuICAgICAgICB7IHN0YXRlLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAoXG4gICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICBrZXk9eyBvcHRpb24ubGFiZWwgfVxuICAgICAgICAgICAgbGFiZWw9eyBvcHRpb24ubGFiZWwgfVxuICAgICAgICAgICAgY2hlY2tlZD17IG9wdGlvbi5jaGVja2VkIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCkgPT4gb25PcHRpb25DaGFuZ2Uob3B0aW9uKSB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSkgfVxuICAgICAgPC9Db2x1bW4+XG4gICAgKSB9XG4gIDwvQ2hlY2tib3hJbmRlcnRlbWluYXRlU3RhdGU+XG4pO1xuXG53aXRoSW5kZXRlcm1pbmF0ZS5zdG9yeSA9IHtcbiAgbmFtZTogJ3dpdGggaW5kZXRlcm1pbmF0ZScsXG59O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var CheckboxState = /*#__PURE__*/function (_Component) {
  _inherits(CheckboxState, _Component);
  function CheckboxState() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, CheckboxState);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CheckboxState)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      checked: false
    };
    _this.changeCheck = function (checked) {
      return _this.setState({
        checked: checked
      });
    };
    return _this;
  }
  _createClass(CheckboxState, [{
    key: "render",
    value: function render() {
      return this.props.children({
        checked: this.state.checked,
        changeCheck: this.changeCheck
      });
    }
  }]);
  return CheckboxState;
}(Component);
var CheckboxInderteminateState = /*#__PURE__*/function (_Component2) {
  _inherits(CheckboxInderteminateState, _Component2);
  function CheckboxInderteminateState() {
    var _getPrototypeOf3;
    var _this2;
    _classCallCheck(this, CheckboxInderteminateState);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(CheckboxInderteminateState)).call.apply(_getPrototypeOf3, [this].concat(args)));
    _this2.state = {
      options: [{
        label: 'Orange',
        checked: true
      }, {
        label: 'Mango',
        checked: false
      }],
      indeterminate: true,
      checked: false
    };
    _this2.onChange = function () {
      if (_this2.state.indeterminate || _this2.state.checked) {
        _this2.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            indeterminate: false,
            checked: false
          });
        });
        _this2.setAllOptionsTo(false);
      } else {
        _this2.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            indeterminate: false,
            checked: true
          });
        });
        _this2.setAllOptionsTo(true);
      }
    };
    _this2.onOptionChange = function (option) {
      _this2.setState(function (prevState) {
        var newOptions = prevState.options.map(function (item) {
          return option === item ? _objectSpread({}, item, {
            checked: !item.checked
          }) : item;
        });
        var isAllChecked = newOptions.every(function (item) {
          return item.checked;
        });
        var isAllUnchecked = newOptions.every(function (item) {
          return !item.checked;
        });
        return _objectSpread({}, prevState, {
          indeterminate: !isAllChecked && !isAllUnchecked,
          checked: isAllChecked,
          options: newOptions
        });
      });
    };
    return _this2;
  }
  _createClass(CheckboxInderteminateState, [{
    key: "setAllOptionsTo",
    value: function setAllOptionsTo(checked) {
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          options: prevState.options.map(function (option) {
            return _objectSpread({}, option, {
              checked: checked
            });
          })
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children({
        state: this.state,
        onChange: this.onChange,
        onOptionChange: this.onOptionChange
      });
    }
  }]);
  return CheckboxInderteminateState;
}(Component);
export default {
  title: 'Components/Checkbox',
  component: Checkbox
};
export var common = function common() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(Checkbox, {
    checked: true
  }), ___EmotionJSX(Checkbox, {
    label: "Without Check"
  }), ___EmotionJSX(Checkbox, {
    label: "With Check",
    checked: true
  }), ___EmotionJSX(Checkbox, {
    label: "With error",
    checked: true,
    hasError: true
  }), ___EmotionJSX(Checkbox, {
    label: "With disabled",
    checked: true,
    disabled: true
  }), ___EmotionJSX(Container, null, ___EmotionJSX(Checkbox, {
    label: "With overflow",
    nowrap: true,
    checked: true
  })), ___EmotionJSX(Checkbox, {
    label: "With indeterminate",
    indeterminate: true
  }));
};
common.story = {
  name: 'common'
};
export var withState = function withState() {
  return ___EmotionJSX(CheckboxState, null, function (_ref) {
    var checked = _ref.checked,
      changeCheck = _ref.changeCheck;
    return ___EmotionJSX(Checkbox, {
      label: "Checkbox",
      checked: checked,
      onChange: changeCheck
    });
  });
};
withState.story = {
  name: 'with state'
};
export var withIndeterminate = function withIndeterminate() {
  return ___EmotionJSX(CheckboxInderteminateState, null, function (_ref2) {
    var state = _ref2.state,
      onChange = _ref2.onChange,
      onOptionChange = _ref2.onOptionChange;
    return ___EmotionJSX(Column, null, ___EmotionJSX(Checkbox, {
      label: "Fruits",
      onChange: onChange,
      indeterminate: state.indeterminate,
      checked: state.checked
    }), state.options.map(function (option) {
      return ___EmotionJSX(Checkbox, {
        key: option.label,
        label: option.label,
        checked: option.checked,
        onChange: function onChange() {
          return onOptionChange(option);
        }
      });
    }));
  });
};
withIndeterminate.story = {
  name: 'with indeterminate'
};