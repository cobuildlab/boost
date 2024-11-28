import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Progress } from './';
import { ProgressValueTag, ProgressTextTag } from './Progress.theme';
describe('<Progress />', function () {
  it('should render Progress components', function () {
    var wrapper = mount(___EmotionJSX(Progress, {
      value: 30
    }));
    expect(wrapper.find(ProgressTextTag).text()).toBe('30 %');
    expect(wrapper.find(ProgressValueTag).props().style.width).toBe('30%');
  });
  it('should render Progress components with over value', function () {
    var wrapper = mount(___EmotionJSX(Progress, {
      value: 370
    }));
    expect(wrapper.find(ProgressTextTag).text()).toBe('70 %');
    expect(wrapper.find(ProgressValueTag).props().style.width).toBe('70%');
  });
});