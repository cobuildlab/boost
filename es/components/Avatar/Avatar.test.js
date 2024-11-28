import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Avatar } from './Avatar';
import { AvatarHandleTag } from './Avatar.theme';
describe('<Avatar />', function () {
  it('should render avatar with name', function () {
    var wrapper = mount(___EmotionJSX(Avatar, {
      firstName: "Albert",
      lastName: "Santalo"
    }));
    expect(wrapper.text()).toBe('AS');
  });
  it('should render avatar without name', function () {
    var wrapper = mount(___EmotionJSX(Avatar, null));
    expect(wrapper.text()).toBe('A');
  });
  it('should render avatar with pick label', function () {
    var onPick = jest.fn();
    var wrapper = mount(___EmotionJSX(Avatar, {
      pickLabel: "change avatar",
      onPick: onPick
    }));
    expect(wrapper.find(AvatarHandleTag).text()).toBe('change avatar');
    wrapper.find(AvatarHandleTag).simulate('click');
    expect(onPick).toHaveBeenCalled();
  });
  it('should render avatar with image', function () {
    var wrapper = mount(___EmotionJSX(Avatar, {
      src: "image-src"
    }));
    expect(wrapper.find('img').props().src).toBe('image-src');
  });
});