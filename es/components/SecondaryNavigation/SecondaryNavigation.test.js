import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { SecondaryNavigation } from './';
describe('<SecondaryNavigation />', function () {
  it('should shallow SecondaryNavigation', function () {
    var wrapper = shallow(___EmotionJSX(SecondaryNavigation, null, ___EmotionJSX(SecondaryNavigation.Item, {
      label: "First item"
    })));
    expect(wrapper).toMatchSnapshot();
  });
  it('should shallow SecondaryNavigation item', function () {
    var wrapper = shallow(___EmotionJSX(SecondaryNavigation.Item, {
      label: "First item"
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render SecondaryNavigation components content', function () {
    var wrapper = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(SecondaryNavigation, null, ___EmotionJSX(SecondaryNavigation.Item, {
      label: "First item"
    }), ___EmotionJSX(SecondaryNavigation.Item, {
      label: "Second item",
      className: "active"
    }), ___EmotionJSX(SecondaryNavigation.Item, {
      label: "Third item"
    }), ___EmotionJSX(SecondaryNavigation.Item, {
      label: "Fourth item"
    }))));
    expect(wrapper.find(SecondaryNavigation.Item).at(0).text()).toBe('First item');
    expect(wrapper.find(SecondaryNavigation.Item).at(3).text()).toBe('Fourth item');
  });
});