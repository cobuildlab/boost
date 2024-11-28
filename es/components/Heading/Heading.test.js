import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Heading } from './';
describe('<Heading />', function () {
  it('should render Heading components', function () {
    var wrapper = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Heading, {
      type: "h1",
      kind: "primary"
    }, "Primary Heading")));
    expect(wrapper.text()).toBe('Primary Heading');
  });
  it('should render Heading components with text prop', function () {
    var wrapper = mount(___EmotionJSX(Heading, {
      type: "h1",
      kind: "primary",
      text: "Primary Heading"
    }));
    expect(wrapper.text()).toBe('Primary Heading');
  });
});