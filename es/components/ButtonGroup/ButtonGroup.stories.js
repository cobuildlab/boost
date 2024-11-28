import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Button, ButtonGroup } from '../../';
export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup
};
export var common = function common() {
  return ___EmotionJSX(ButtonGroup, null, ___EmotionJSX(Button, {
    variant: "outlined"
  }, "Button"), ___EmotionJSX(Button, {
    variant: "outlined"
  }, "Button"), ___EmotionJSX(Button, null, "Button"), ___EmotionJSX(Button, {
    variant: "outlined"
  }, "Button"));
};
common.story = {
  name: 'common'
};