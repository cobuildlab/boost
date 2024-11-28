import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Scrollable } from './';
describe('<Scrollable />', function () {
  it('should render Scrollable components', function () {
    var wrapper = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Scrollable, null, "some-text")));
    expect(wrapper.text()).toBe('some-text');
  });
});