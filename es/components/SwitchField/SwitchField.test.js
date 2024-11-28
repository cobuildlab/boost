import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { SwitchField } from './SwitchField';
describe('<SwitchField />', function () {
  it('should pass props to the children', function () {
    var onChange = jest.fn();
    var wrapper = shallow(___EmotionJSX(SwitchField, {
      input: {
        onChange: onChange,
        value: true
      }
    }));
    expect(wrapper).toMatchInlineSnapshot("\n<FormField\n  direction=\"column\"\n  hideErrorLabel={false}\n  input={\n    Object {\n      \"onChange\": [MockFunction],\n      \"value\": true,\n    }\n  }\n  stretch={true}\n>\n  <Switch\n    hasError={false}\n    onChange={[MockFunction]}\n    value={true}\n  />\n</FormField>\n");
  });
});