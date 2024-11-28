import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Navigation } from './Navigation';
describe('<Navigation />', function () {
  it('should shallow navigation', function () {
    var wrapper = shallow(___EmotionJSX(Navigation, {
      color: "GREEN_40"
    }, ___EmotionJSX(Navigation.Item, {
      icon: "Trashcan",
      label: "Jobs",
      href: "/jobs"
    })));
    expect(wrapper).toMatchSnapshot();
  });
  it('should shallow navigation item', function () {
    var wrapper = shallow(___EmotionJSX(Navigation.Item, {
      icon: "Trashcan",
      label: "Jobs",
      href: "/jobs"
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render navigation with custom tag', function () {
    var Link = function Link() {
      return null;
    };

    var wrapper = mount(___EmotionJSX(Navigation, {
      color: "GREEN_40"
    }, ___EmotionJSX(Navigation.Item, {
      icon: "Trashcan",
      label: "Jobs",
      tagName: Link,
      to: "/jobs"
    })));
    expect(wrapper.find(Link).props().to).toBe('/jobs');
  });
});