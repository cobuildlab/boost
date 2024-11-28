import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { IconWrapperTag, IconFontTag, IconSvgTag } from './Icon.theme';
import { IconsConsumer } from './IconsProvider';
import { COLORS } from '../../theme';
import * as glyphs from './glyphs';
var Icon = function Icon(_ref) {
  var name = _ref.name,
    className = _ref.className,
    children = _ref.children,
    title = _ref.title,
    rest = _objectWithoutProperties(_ref, ["name", "className", "children", "title"]);
  return ___EmotionJSX(IconsConsumer, null, function (_ref2) {
    var _ref2$icons = _ref2.icons,
      icons = _ref2$icons === void 0 ? {} : _ref2$icons;
    var Glyph = icons[name] || glyphs[name];
    if (typeof children === 'function') {
      return ___EmotionJSX(IconWrapperTag, _extends({
        tagName: "span"
      }, rest), ___EmotionJSX(IconSvgTag, {
        tagName: "i",
        title: title,
        modifiers: rest,
        className: className
      }, children(Glyph)));
    }
    return ___EmotionJSX(IconWrapperTag, _extends({
      tagName: "span"
    }, rest), !!className && !Glyph ? ___EmotionJSX(IconFontTag, {
      tagName: "i",
      title: title,
      modifiers: rest
    }) : !!Glyph ? ___EmotionJSX(IconSvgTag, {
      tagName: "i",
      title: title,
      modifiers: rest,
      className: className
    }, ___EmotionJSX(Glyph, null)) : null);
  });
};
Icon.defaultProps = {
  size: 'md'
};
export { Icon };