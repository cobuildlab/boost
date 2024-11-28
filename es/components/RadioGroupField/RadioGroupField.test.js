import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { RadioGroupField } from './';
describe('<RadioGroupField />', function () {
  it('should pass props to the children', function () {
    var onChange = jest.fn();
    var options = [{
      label: 'Radio 1',
      value: 1
    }, {
      label: 'Radio 2',
      value: 2
    }, {
      label: 'Radio 3',
      value: 3
    }];
    var input = {
      onChange: onChange,
      value: 2
    };
    var wrapper = shallow(___EmotionJSX(RadioGroupField, {
      meta: {},
      input: input,
      options: options
    }));

    var _wrapper$find$props = wrapper.find('FormField').props(),
        children = _wrapper$find$props.children,
        formFieldPassedProps = _objectWithoutProperties(_wrapper$find$props, ["children"]);

    expect(formFieldPassedProps).toEqual({
      direction: 'column',
      hideErrorLabel: false,
      input: input,
      meta: {},
      stretch: true
    });
    expect(wrapper.find('RadioGroup').props()).toEqual({
      direction: 'column',
      gap: 'md',
      hasError: false,
      onChange: onChange,
      options: options,
      value: 2
    });
  });
});