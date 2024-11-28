import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Icon } from './';
describe('<Icon />', function () {
  it('should shallow input', function () {
    var wrapper = mount(___EmotionJSX(Icon, {
      name: "Alert",
      color: "DANGER",
      title: "Alert icon"
    }));
    expect(wrapper.find('i').prop('title')).toBe('Alert icon');
    expect(wrapper).toMatchSnapshot();
  });
});