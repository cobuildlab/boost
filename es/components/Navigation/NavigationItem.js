import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Icon } from '../Icon';
import { NavigationItemTag, NavigationItemLabel, NavigationItemIcon, NavigationItemLabelPreview } from './Navigation.theme';
import { COLORS } from '../../theme';
var NavigationItem = function NavigationItem(_ref) {
  var icon = _ref.icon,
    label = _ref.label,
    iconSize = _ref.iconSize,
    rest = _objectWithoutProperties(_ref, ["icon", "label", "iconSize"]);
  return ___EmotionJSX(NavigationItemTag, rest, ___EmotionJSX(NavigationItemIcon, {
    modifiers: rest
  }, icon === undefined && typeof label === 'string' && label.length > 0 ? ___EmotionJSX(NavigationItemLabelPreview, null, label && label.charAt(0).toUpperCase()) : null, typeof icon === 'string' ? ___EmotionJSX(Icon, {
    name: icon || '',
    color: "WHITE",
    size: iconSize
  }) : null), label && ___EmotionJSX(NavigationItemLabel, {
    modifiers: rest,
    className: "NavigationItem-label"
  }, label));
};
NavigationItem.defaultProps = {
  tagName: 'a'
};
export { NavigationItem };