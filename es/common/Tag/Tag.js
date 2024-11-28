import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { PureComponent } from 'react';
import pickBy from 'lodash/pickBy';
var COLLECTED_PROPS = ['accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'alt', 'aria-busy', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'children', 'cite', 'classID', 'className', 'cols', 'colSpan', 'content', 'contentEditable', 'contextMenu', 'controls', 'controlsList', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'for', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'nonce', 'noValidate', 'onBlur', 'onChange', 'onClick', 'onDoubleClick', 'onFocus', 'onKeyDown', 'onKeyUp', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onScroll', 'onSubmit', 'open', 'optimum', 'options', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rows', 'rowSpan', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'to', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'];
var HTML_TAGS = ['div', 'span', 'button', 'a', 'p', 'input', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'nav', 'img', 'pre', 'textarea'];
var collectProps = function collectProps(props) {
  return pickBy(props, function (value, name) {
    return COLLECTED_PROPS.indexOf(name) !== -1 || /^data-/.test(name);
  });
};
var Tag = /*#__PURE__*/function (_PureComponent) {
  _inherits(Tag, _PureComponent);
  function Tag() {
    _classCallCheck(this, Tag);
    return _possibleConstructorReturn(this, _getPrototypeOf(Tag).apply(this, arguments));
  }
  _createClass(Tag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        TagComponent = _this$props.tagName,
        modifiers = _this$props.modifiers,
        props = _objectWithoutProperties(_this$props, ["tagName", "modifiers"]);
      var collectedProps = HTML_TAGS.indexOf(TagComponent) === -1 ? props : collectProps(props);
      if (HTML_TAGS.indexOf(TagComponent) !== -1) {
        collectedProps.ref = props.insideRef;
      }
      return ___EmotionJSX(TagComponent, collectedProps);
    }
  }]);
  return Tag;
}(PureComponent);
Tag.defaultProps = {
  tagName: 'div'
};
export { Tag };