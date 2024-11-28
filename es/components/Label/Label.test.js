import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Label } from './';
describe('<Label />', function () {
  it('should render Label components', function () {
    var wrapper = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Label, {
      kind: "primary"
    }, "Primary Label")));
    expect(wrapper.text()).toBe('Primary Label');
  });
  it('should render Label components with text prop', function () {
    var wrapper = mount(___EmotionJSX(Label, {
      kind: "primary",
      text: "Primary Label"
    }));
    expect(wrapper.text()).toBe('Primary Label');
  });
});