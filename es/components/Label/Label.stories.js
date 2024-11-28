import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Label, Column } from '../../';
export default {
  title: 'Components/Label',
  component: Label
};
export var common = function common() {
  return ___EmotionJSX(Column, {
    gap: "md"
  }, ___EmotionJSX(Label, {
    text: "Default Label"
  }), ___EmotionJSX(Label, {
    kind: "primary",
    text: "Primary Label"
  }), ___EmotionJSX(Label, {
    kind: "secondary",
    text: "Secondary Label"
  }), ___EmotionJSX(Label, {
    kind: "disabled",
    text: "Disabled Label"
  }));
};
common.story = {
  name: 'common'
};