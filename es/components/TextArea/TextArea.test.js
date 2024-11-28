import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { TextArea } from './';
describe('<TextArea />', function () {
  it('should render with value', function () {
    var wrapper = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(TextArea, {
      value: "some-text"
    })));
    expect(wrapper.find('textarea').prop('value')).toBe('some-text');
  });
  it('should call onChange callback', function () {
    var onChange = jest.fn();
    var wrapper = mount(___EmotionJSX(TextArea, {
      onChange: onChange
    }));
    wrapper.find('textarea').simulate('change', {
      target: {
        value: 'changed-value'
      }
    });
    expect(onChange.mock.calls[0][0]).toBe('changed-value');
  });
});