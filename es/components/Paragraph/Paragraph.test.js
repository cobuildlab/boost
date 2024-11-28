import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Paragraph } from './';
describe('<Paragraph />', function () {
  it('should render Paragraph components', function () {
    var wrapper = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Paragraph, {
      kind: "primary"
    }, "Primary Paragraph")));
    expect(wrapper.text()).toBe('Primary Paragraph');
  });
  it('should render Paragraph components with text prop', function () {
    var wrapper = mount(___EmotionJSX(Paragraph, {
      kind: "primary",
      text: "Primary Paragraph"
    }));
    expect(wrapper.text()).toBe('Primary Paragraph');
  });
});