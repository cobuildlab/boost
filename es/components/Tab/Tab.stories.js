import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import { jsx as ___EmotionJSX } from "@emotion/core";
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      background-color: #f4f7f9;\n    "]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
import React from 'react';
import { css } from '@emotion/react';
import { Tab, Row } from '../../';
export default {
  title: 'Components/Tab',
  component: Tab
};
export var common = function common() {
  return ___EmotionJSX("div", {
    css: css(_templateObject())
  }, ___EmotionJSX(Row, {
    gap: "xs",
    offsetX: "lg",
    offsetY: "lg"
  }, ___EmotionJSX(Tab, {
    tagName: "div",
    className: "active"
  }, "Active Tab"), ___EmotionJSX(Tab, {
    tagName: "div"
  }, "Inactive Tab")));
};
common.story = {
  name: 'common'
};