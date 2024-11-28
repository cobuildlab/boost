import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Icon } from '../Icon';
import { Column } from '../FlexLayout';
import { NoDataIconContainerTag, NoDataTextTag } from './NoData.theme';
var NoData = function NoData(props) {
  return ___EmotionJSX(Column, {
    stretch: true,
    justifyContent: "center",
    alignItems: "center",
    gap: "lg",
    offsetY: "lg"
  }, ___EmotionJSX(NoDataIconContainerTag, {
    modifiers: props
  }, ___EmotionJSX(Icon, {
    size: "stretch",
    name: "DismissData",
    color: "GRAY_30"
  })), ___EmotionJSX(NoDataTextTag, {
    modifiers: props
  }, "no data"));
};
export { NoData };