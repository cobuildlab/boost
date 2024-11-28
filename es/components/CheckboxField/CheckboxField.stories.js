import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { CheckboxField, Column } from '../../';
export default {
  title: 'Components/CheckboxField',
  component: CheckboxField
};
export var common = function common() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(CheckboxField, {
    label: "Without check",
    input: {}
  }), ___EmotionJSX(CheckboxField, {
    label: "With check",
    input: {
      value: true
    }
  }), ___EmotionJSX(CheckboxField, {
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