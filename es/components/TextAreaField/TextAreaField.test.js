import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { TextAreaField } from './';
import { TextArea } from '../TextArea';
describe('<TextAreaField />', function () {
  it('should render with text in children', function () {
    var value = '42';
    var onChange = jest.fn();
    var wrapper = shallow(___EmotionJSX(TextAreaField, {
      input: {
        value: value,
        onChange: onChange
      }
    }));
    expect(wrapper.find(TextArea).props().value).toBe(value);
    expect(wrapper.find(TextArea).props().onChange).toBe(onChange);
  });
});