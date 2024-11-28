import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { COLORS } from '../../theme';
import { NavigationTag } from './Navigation.theme';
import { NavigationItem } from './NavigationItem';

var Navigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      expandedWidth: _this.props.expandedWidth,
      expanded: false
    };
    _this.navRef = React.createRef();

    _this.isControllable = function () {
      return typeof _this.props.expanded === 'boolean';
    };

    _this.onMouseEnter = function () {
      if (_this.navRef.current) {
        _this.navRef.current.style.width = _this.state.expandedWidth;
      }

      _this.setState({
        expanded: true
      });
    };

    _this.onMouseLeave = function () {
      if (_this.navRef.current) {
        _this.navRef.current.style.width = _this.props.collapsedWidth;
      }

      _this.setState({
        expanded: false
      });
    };

    return _this;
  }

  _createClass(Navigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var navElement = this.navRef.current;

      if (navElement && !this.isControllable()) {
        requestAnimationFrame(function () {
          if (!_this2.props.expandedWidth) {
            _this2.setState({
              expandedWidth: getComputedStyle(navElement).width
            });
          }

          navElement.style.width = _this2.props.collapsedWidth;
          navElement.addEventListener('mouseenter', _this2.onMouseEnter);
          navElement.addEventListener('mouseleave', _this2.onMouseLeave);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var navElement = this.navRef.current;

      if (navElement && !this.isControllable()) {
        navElement.removeEventListener('mouseenter', this.onMouseEnter);
        navElement.removeEventListener('mouseleave', this.onMouseLeave);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["color", "children"]);

      var controllable = this.isControllable();
      var expanded = controllable ? this.props.expanded : this.state.expanded;
      return ___EmotionJSX(NavigationTag, _extends({}, rest, {
        expanded: expanded,
        controllable: controllable,
        insideRef: this.navRef,
        color: color,
        tagName: "nav"
      }), React.Children.map(children, function (child) {
        return React.cloneElement(child, {
          color: child.props.color || color,
          parentExpanded: expanded
        });
      }));
    }
  }]);

  return Navigation;
}(React.Component);

Navigation.displayName = 'Navigation';
Navigation.Item = NavigationItem;
Navigation.defaultProps = {
  collapsedWidth: '60px'
};
export { Navigation };