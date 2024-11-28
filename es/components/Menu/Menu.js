import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Paper } from '../Paper';
import { MenuItem } from './MenuItem';
import { MenuTag } from './Menu.theme';

var Menu = function Menu(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return ___EmotionJSX(Paper, {
    padding: "none",
    borderRadius: "all"
  }, ___EmotionJSX(MenuTag, _extends({
    tagName: "div"
  }, rest), children));
};

Menu.displayName = 'Menu';
Menu.Item = MenuItem;
export { Menu };