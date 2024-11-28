import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { DateInputField } from './DateInputField';
describe('<DateInputField />', function () {
  it('should pass props to the children', function () {
    var wrapper = shallow(___EmotionJSX(DateInputField, {
      label: "Date",
      input: {
        value: '2018-11-07',
        onChange: jest.fn()
      }
    }));
    expect(wrapper).toMatchInlineSnapshot("\n<FormField\n  direction=\"column\"\n  hideErrorLabel={false}\n  input={\n    Object {\n      \"onChange\": [MockFunction],\n      \"value\": \"2018-11-07\",\n    }\n  }\n  label=\"Date\"\n  stretch={true}\n>\n  <DateInput\n    onChange={[MockFunction]}\n    stretch={true}\n    value=\"2018-11-07\"\n    withPortal={true}\n  />\n</FormField>\n");
  });
});