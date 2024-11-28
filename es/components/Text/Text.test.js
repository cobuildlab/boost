import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Text } from './';
describe('<Text />', function () {
  it('should render with text prop', function () {
    var wrapper = render(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Text, {
      text: "some-text"
    })));
    expect(wrapper.text()).toBe('some-text');
  });
  it('should render with children prop', function () {
    var wrapper = render(___EmotionJSX(Text, null, "some-text"));
    expect(wrapper.text()).toBe('some-text');
  });
});