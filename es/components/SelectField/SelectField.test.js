import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { FormField } from '../Form/FormField';
import { Select } from '../Select';
import { SelectField } from './';
describe('<SelectField />', function () {
  var options = [{
    label: 'ovenlike',
    value: 'ovenlike'
  }, {
    label: 'serjeant',
    value: 'serjeant'
  }];
  it('should pass props to Select and to Form', function () {
    var label = 'Select Label';
    var placeholder = 'Select an option';
    var clearable = true;
    var multiple = true;
    var input = {
      name: 'input',
      onChange: jest.fn(),
      value: null
    };
    var meta = {
      error: 'asdasd',
      touched: true
    };
    var wrapper = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(SelectField, {
      label: label,
      input: input,
      meta: meta,
      stretch: true,
      clearable: clearable,
      multiple: multiple,
      placeholder: placeholder,
      options: options
    })));
    var _wrapper$find$props = wrapper.find(Select).props(),
      onChange = _wrapper$find$props.onChange,
      passedSelectProps = _objectWithoutProperties(_wrapper$find$props, ["onChange"]);
    var _wrapper$find$props2 = wrapper.find(FormField).props(),
      children = _wrapper$find$props2.children,
      passedFormFieldProps = _objectWithoutProperties(_wrapper$find$props2, ["children"]);
    expect(passedSelectProps).toEqual({
      clearable: clearable,
      hasError: true,
      input: input,
      label: label,
      meta: meta,
      multiple: multiple,
      name: 'input',
      options: options,
      placeholder: placeholder,
      stretch: true,
      value: null
    });
    expect(passedFormFieldProps).toEqual({
      direction: 'column',
      hideErrorLabel: false,
      input: input,
      label: label,
      meta: meta,
      stretch: true
    });
  });
  it('should pass correct value', function () {
    var onChange = jest.fn();
    var wrapper = shallow(___EmotionJSX(SelectField, {
      input: {
        name: 'input',
        onChange: onChange,
        value: 'serjeant'
      },
      meta: {},
      options: options
    }));
    expect(wrapper.find(Select).props().value).toEqual('serjeant');
    wrapper.setProps({
      input: {
        value: ['ovenlike', 'serjeant']
      }
    });
    expect(wrapper.find(Select).props().value).toEqual(['ovenlike', 'serjeant']);
  });
  it('should pass call onChange callback', function () {
    var onChange = jest.fn();
    var wrapper = shallow(___EmotionJSX(SelectField, {
      input: {
        name: 'input',
        onChange: onChange
      },
      meta: {},
      options: options
    }));
    wrapper.find(Select).props().onChange(options[0].value);
    expect(onChange.mock.calls[0][0]).toBe(options[0].value);
    wrapper.find(Select).props().onChange(['ovenlike', 'serjeant']);
    expect(onChange.mock.calls[1][0]).toEqual(['ovenlike', 'serjeant']);
    wrapper.find(Select).props().onChange(null);
    expect(onChange.mock.calls[2][0]).toBeNull();
  });
});