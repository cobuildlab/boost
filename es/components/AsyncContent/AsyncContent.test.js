import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { AsyncContent } from './AsyncContent';
import { Loader } from '../Loader';
describe('<AsyncContent />', function () {
  it('should render loader with passed props ', function () {
    var wrapper = shallow(___EmotionJSX(AsyncContent, {
      loading: true,
      stretch: true
    }, ___EmotionJSX("div", {
      className: "some-children"
    })));
    expect(wrapper.find('.some-children')).toHaveLength(0);
    expect(wrapper.find(Loader)).toHaveLength(1);
    expect(wrapper.find(Loader).props()).toEqual({
      color: 'RED',
      stretch: true,
      size: 'md'
    });
  });
  it('should render children ', function () {
    var wrapper = shallow(___EmotionJSX(AsyncContent, {
      loading: false
    }, ___EmotionJSX("div", {
      className: "some-children"
    })));
    expect(wrapper.find('.some-children')).toHaveLength(1);
    expect(wrapper.find(Loader)).toHaveLength(0);
  });
});