import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Menu } from './';
describe('<Menu />', function () {
  it('should shallow Menu', function () {
    var wrapper = shallow(___EmotionJSX(Menu, null, ___EmotionJSX(Menu.Item, null, "Tramman")));
    expect(wrapper).toMatchSnapshot();
  });
  it('should shallow Menu item', function () {
    var wrapper = shallow(___EmotionJSX(Menu.Item, null, "Tramman"));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Menu components content', function () {
    var wrapper = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Menu, null, ___EmotionJSX(Menu.Item, null, "Tramman"), ___EmotionJSX(Menu.Item, null, "Gripman"), ___EmotionJSX(Menu.Item, null, "Proalliance"))));
    expect(wrapper.find(Menu.Item).at(0).text()).toBe('Tramman');
    expect(wrapper.find(Menu.Item).at(1).text()).toBe('Gripman');
    expect(wrapper.find(Menu.Item).at(2).text()).toBe('Proalliance');
  });
});