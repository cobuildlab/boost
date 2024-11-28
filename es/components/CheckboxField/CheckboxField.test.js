import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { CheckboxField } from './CheckboxField';
describe('<Checkbox />', function () {
  it('should pass props to the children', function () {
    var onChange = jest.fn();
    var wrapper = shallow(___EmotionJSX(CheckboxField, {
      input: {
        onChange: onChange,
        value: true
      }
    }));
    expect(wrapper).toMatchInlineSnapshot("\n<FormField\n  direction=\"column\"\n  hideErrorLabel={false}\n  input={\n    Object {\n      \"onChange\": [MockFunction],\n      \"value\": true,\n    }\n  }\n  stretch={true}\n>\n  <Checkbox\n    checked={true}\n    disabled={false}\n    hasError={false}\n    indeterminate={false}\n    onChange={[MockFunction]}\n  />\n</FormField>\n");
  });
});