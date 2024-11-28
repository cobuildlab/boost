import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { DateInputField, Column } from '../../';
import { StateContainer } from '../../../storybook/StateContainer';
export default {
  title: 'Components/DateInputField',
  component: DateInputField
};
export var common = function common() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(StateContainer, {
    value: null,
    withForm: true
  }, ___EmotionJSX(DateInputField, {
    label: "Date",
    placeholder: "mm/dd/yyyy"
  })), ___EmotionJSX(StateContainer, {
    value: null,
    withForm: true
  }, ___EmotionJSX(DateInputField, {
    label: "Datetime",
    withTime: true
  })), ___EmotionJSX(StateContainer, {
    value: "2018-11-07",
    withForm: true
  }, ___EmotionJSX(DateInputField, {
    label: "Date"
  })), ___EmotionJSX(StateContainer, {
    value: "2018-11-29T21:00:00.000Z",
    withForm: true
  }, ___EmotionJSX(DateInputField, {
    label: "Datetime",
    withTime: true
  })));
};
common.story = {
  name: 'common'
};