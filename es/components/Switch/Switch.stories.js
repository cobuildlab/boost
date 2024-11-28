import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Switch, Column } from '../../';
export default {
  title: 'Components/Switch',
  component: Switch
};
export var common = function common() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(Switch, {
    label: "Unchecked",
    value: false
  }), ___EmotionJSX(Switch, {
    label: "Checked",
    value: true
  }), ___EmotionJSX(Switch, {
    label: "Checked",
    value: true,
    inverted: true
  }));
};
common.story = {
  name: 'common'
};