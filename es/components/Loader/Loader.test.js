import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Loader } from './';
import { LoaderTag, LoaderWrapperTag } from './Loader.theme';
describe('<Loader />', function () {
  it('should render Loader components with stretch', function () {
    var wrapper = mount(___EmotionJSX(Loader, null));
    expect(wrapper.find(LoaderTag)).toHaveLength(1);
    expect(wrapper.find(LoaderWrapperTag)).toHaveLength(0);
    wrapper.setProps({
      stretch: true
    });
    expect(wrapper.find(LoaderTag)).toHaveLength(1);
    expect(wrapper.find(LoaderWrapperTag)).toHaveLength(1);
  });
});