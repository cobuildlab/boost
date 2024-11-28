import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { DateInput, Column } from '../../';
import { StateContainer } from '../../../storybook/StateContainer';
export default {
  title: 'Components/DateInput',
  component: DateInput
};
export var common = function common() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(StateContainer, {
    value: null
  }, ___EmotionJSX(DateInput, {
    placeholder: "mm/dd/yyyy"
  })), ___EmotionJSX(StateContainer, {
    value: null
  }, ___EmotionJSX(DateInput, {
    withTime: true
  })), ___EmotionJSX(StateContainer, {
    value: "2018-11-07"
  }, ___EmotionJSX(DateInput, {
    clearable: true
  })), ___EmotionJSX(StateContainer, {
    value: "2018-11-29T21:00:00.000Z"
  }, ___EmotionJSX(DateInput, {
    withTime: true,
    clearable: true
  })), ___EmotionJSX(StateContainer, {
    value: "2018-11-15T21:00:00.000Z"
  }, ___EmotionJSX(DateInput, {
    minDate: new Date('2018-11-15T21:00:00.00+03:00'),
    minTime: new Date('2018-11-15T00:00:00.00+03:00'),
    maxTime: new Date('2018-11-15T02:00:00.00+03:00'),
    withTime: true
  })), ___EmotionJSX(StateContainer, {
    value: null
  }, ___EmotionJSX(DateInput, {
    placeholder: "mm/dd/yyyy",
    disabled: true
  })), ___EmotionJSX(StateContainer, {
    value: "2019-08"
  }, ___EmotionJSX(DateInput, {
    placeholder: "mm/yyyy",
    isMonthPicker: true,
    clearable: true
  })));
};
common.story = {
  name: 'common'
};