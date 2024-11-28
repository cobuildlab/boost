import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Column, Indicator } from '../../';
export default {
  title: 'Components/Indicator',
  component: Indicator
};
export var common = function common() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(Indicator, null, "Disabled"), ___EmotionJSX(Indicator, {
    status: "enabled"
  }, "Enabled"));
};
common.story = {
  name: 'common'
};