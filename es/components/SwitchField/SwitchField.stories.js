import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { SwitchField, Column } from '../../';
export default {
  title: 'Components/SwitchField',
  component: SwitchField
};
export var common = function common() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(SwitchField, {
    label: "Disabled",
    input: {}
  }), ___EmotionJSX(SwitchField, {
    label: "Enabled",
    input: {
      value: true
    }
  }), ___EmotionJSX(SwitchField, {
    label: "With error",
    input: {
      value: false
    },
    meta: {
      error: 'Required',
      touched: true
    }
  }));
};
common.story = {
  name: 'common'
};