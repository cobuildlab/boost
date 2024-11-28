import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { SelectField, Column } from '../../';
import { StateContainer } from '../../../storybook/StateContainer';
var OPTIONS = [{
  label: 'ovenlike',
  value: 'ovenlike'
}, {
  label: 'serjeant',
  value: 'serjeant'
}, {
  label: 'wiseheartedly',
  value: 'wiseheartedly'
}];
export default {
  title: 'Components/SelectField',
  component: SelectField
};
export var common = function common() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(StateContainer, {
    value: null,
    withForm: true
  }, ___EmotionJSX(SelectField, {
    label: "Stretch = false",
    name: "name",
    placeholder: "Select an option",
    options: OPTIONS,
    stretch: false
  })), ___EmotionJSX(StateContainer, {
    value: OPTIONS[1].value,
    withForm: true
  }, ___EmotionJSX(SelectField, {
    label: "Clearable select",
    name: "name",
    placeholder: "Select an option",
    options: OPTIONS,
    clearable: true
  })), ___EmotionJSX(StateContainer, {
    value: [OPTIONS[1].value, OPTIONS[2].value],
    withForm: true
  }, ___EmotionJSX(SelectField, {
    label: "Multiple select",
    name: "name",
    placeholder: "Select an option",
    options: OPTIONS,
    multiple: true
  })), ___EmotionJSX(StateContainer, {
    value: [OPTIONS[1].value, OPTIONS[2].value],
    withForm: true
  }, ___EmotionJSX(SelectField, {
    label: "Multiple select",
    name: "name",
    placeholder: "Select an option",
    options: OPTIONS,
    disabled: true
  })));
};
common.story = {
  name: 'common'
};