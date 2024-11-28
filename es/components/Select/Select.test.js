import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import ReactSelect from 'react-select';
import { SelectTag } from './Select.theme';
import { Select } from './';
describe('<Select />', function () {
  it('should pass props to ReactSelect', function () {
    var options = [{
      label: 'ovenlike',
      value: 'ovenlike'
    }];
    var placeholder = 'Select an option';
    var clearable = true;
    var multiple = true;
    var hasError = false;
    var loading = false;
    var disabled = true;
    var stretch = true;
    var components = {};
    var wrapper = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Select, {
      clearable: clearable,
      multiple: multiple,
      hasError: hasError,
      onChange: jest.fn(),
      placeholder: placeholder,
      options: options,
      value: options[0].value,
      loading: loading,
      disabled: disabled,
      components: components,
      stretch: stretch
    })));
    var _wrapper$find$props = wrapper.find(SelectTag).props(),
      children = _wrapper$find$props.children,
      passedStyledProps = _objectWithoutProperties(_wrapper$find$props, ["children"]);
    var _wrapper$find$props2 = wrapper.find(ReactSelect).props(),
      styles = _wrapper$find$props2.styles,
      menuPortalTarget = _wrapper$find$props2.menuPortalTarget,
      onChange = _wrapper$find$props2.onChange,
      valueComponent = _wrapper$find$props2.valueComponent,
      passedSelectProps = _objectWithoutProperties(_wrapper$find$props2, ["styles", "menuPortalTarget", "onChange", "valueComponent"]);
    expect(passedSelectProps).toMatchInlineSnapshot("\nObject {\n  \"autoFocus\": undefined,\n  \"components\": Object {\n    \"ClearIndicator\": [Function],\n    \"MultiValueRemove\": [Function],\n  },\n  \"defaultInputValue\": \"\",\n  \"defaultMenuIsOpen\": false,\n  \"defaultValue\": null,\n  \"filterOption\": undefined,\n  \"formatOptionLabel\": undefined,\n  \"getOptionLabel\": undefined,\n  \"getOptionValue\": undefined,\n  \"inputValue\": undefined,\n  \"isClearable\": true,\n  \"isDisabled\": true,\n  \"isLoading\": false,\n  \"isMulti\": true,\n  \"isSearchable\": undefined,\n  \"menuIsOpen\": undefined,\n  \"menuPlacement\": \"auto\",\n  \"onInputChange\": undefined,\n  \"options\": Array [\n    Object {\n      \"label\": \"ovenlike\",\n      \"value\": \"ovenlike\",\n    },\n  ],\n  \"placeholder\": \"Select an option\",\n  \"value\": Object {\n    \"label\": \"ovenlike\",\n    \"value\": \"ovenlike\",\n  },\n}\n");
    expect(passedStyledProps).toEqual({
      hasError: hasError,
      'aria-busy': String(loading),
      stretch: stretch,
      tagName: 'div'
    });
  });
});