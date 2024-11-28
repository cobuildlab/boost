import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _set from "lodash/fp/set";
import _pipe from "lodash/fp/pipe";
import _memoize from "lodash/fp/memoize";
import _get from "lodash/fp/get";
import _equals from "lodash/fp/equals";
import { jsx as ___EmotionJSX } from "@emotion/core";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import DropdownTreeSelect from 'react-dropdown-tree-select';
import { TreeSelectWrapperTag, CLASS_NAME_FILLED, CLASS_NAME } from './TreeSelect.theme';

var getDeepKeys = function getDeepKeys(obj) {
  var keys = [];

  var _loop = function _loop(key) {
    keys.push(key);

    if (typeof obj[key] === 'object') {
      var subkeys = getDeepKeys(obj[key]);
      keys = keys.concat(subkeys.map(function (subkey) {
        return "".concat(key, ".").concat(subkey);
      }));
    }
  };

  for (var key in obj) {
    _loop(key);
  }

  return keys;
};

var getNodePath = function getNodePath(treeData, value) {
  var treePaths = getDeepKeys(treeData).map(function (key) {
    return key.split('.');
  });
  var nodePath = null;
  [[]].concat(_toConsumableArray(treePaths)).forEach(function (path) {
    var node = _equals(path, []) ? treeData : _get(path, treeData);

    if (node && node.value === value) {
      nodePath = path;
    }
  });
  return nodePath;
};

var TreeSelect =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TreeSelect, _React$PureComponent);

  function TreeSelect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TreeSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TreeSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.toggledNodes = {};
    _this.getSelectedData = _memoize(function (_ref) {
      var value = _ref.value,
          toggledNodes = _ref.toggledNodes,
          options = _ref.options;

      if (!value) {
        return options;
      }

      var selectedData = value.reduce(function (accum, selectedValue) {
        var nodePath = getNodePath(options, selectedValue);
        if (nodePath === null) return accum;
        return _pipe(_set([].concat(_toConsumableArray(nodePath), ['checked']), true))(accum);
      }, options);
      var expandedData = Object.keys(toggledNodes).reduce(function (accum, key) {
        var node = toggledNodes[key];
        var nodePath = getNodePath(options, node.value);
        if (nodePath === null) return accum;
        return _set([].concat(_toConsumableArray(nodePath), ['expanded']), node.expanded, accum);
      }, selectedData);
      return expandedData;
    });

    _this.onNodeToggle = function (currentNode) {
      var onNodeToggle = _this.props.onNodeToggle;
      onNodeToggle && onNodeToggle(currentNode);
      _this.toggledNodes = _objectSpread({}, _this.toggledNodes, _defineProperty({}, currentNode._id, currentNode));
    };

    return _this;
  }

  _createClass(TreeSelect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          stretch = _this$props.stretch,
          value = _this$props.value,
          options = _this$props.options,
          placeholder = _this$props.placeholder,
          rest = _objectWithoutProperties(_this$props, ["stretch", "value", "options", "placeholder"]);

      var selectedData = this.getSelectedData({
        value: value,
        options: options,
        toggledNodes: this.toggledNodes
      });
      var className = value.length > 0 ? "".concat(CLASS_NAME, " ").concat(CLASS_NAME_FILLED) : CLASS_NAME;
      return ___EmotionJSX(TreeSelectWrapperTag, {
        tagName: "div",
        stretch: stretch
      }, ___EmotionJSX(DropdownTreeSelect, _extends({}, rest, {
        data: selectedData,
        className: className,
        onNodeToggle: this.onNodeToggle,
        placeholderText: placeholder
      })));
    }
  }]);

  return TreeSelect;
}(React.PureComponent);

TreeSelect.defaultProps = {
  stretch: true,
  value: [],
  placeholder: 'Select...'
};
export { TreeSelect };