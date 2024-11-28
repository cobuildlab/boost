import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button';
describe('<ButtonGroup />', function () {
  it('should render button group', function () {
    var wrapper = mount(___EmotionJSX(ButtonGroup, null, ___EmotionJSX(Button, {
      variant: "outlined"
    }, "Button 1"), ___EmotionJSX(Button, {
      variant: "outlined"
    }, "Button 2")));
    expect(wrapper.find(Button).at(0).text()).toBe('Button 1');
    expect(wrapper.find(Button).at(1).text()).toBe('Button 2');
  });
});