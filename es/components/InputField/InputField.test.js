import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { InputField } from './InputField';
describe('<InputField />', function () {
  it('should pass props to the children', function () {
    var onChange = jest.fn();
    var wrapper = shallow(___EmotionJSX(InputField, {
      meta: {},
      input: {
        onChange: onChange,
        value: 'some input value',
        touched: true
      }
    }));
    expect(wrapper).toMatchInlineSnapshot("\n<FormField\n  direction=\"column\"\n  hideErrorLabel={false}\n  input={\n    Object {\n      \"onChange\": [MockFunction],\n      \"touched\": true,\n      \"value\": \"some input value\",\n    }\n  }\n  meta={Object {}}\n  stretch={true}\n>\n  <Input\n    align=\"left\"\n    autoComplete={false}\n    hasError={false}\n    hideErrorIndicator={false}\n    hideNumberArrows={true}\n    kind=\"bordered\"\n    onChange={[MockFunction]}\n    stretch={true}\n    type=\"text\"\n    value=\"some input value\"\n  />\n</FormField>\n");
  });
  it('should accept `type` from `input` prop over `type` prop', function () {
    var wrapper = shallow(___EmotionJSX(InputField, {
      type: "text",
      input: {
        type: 'number',
        value: 'some input value'
      }
    }));
    expect(wrapper).toMatchInlineSnapshot("\n<FormField\n  direction=\"column\"\n  hideErrorLabel={false}\n  input={\n    Object {\n      \"type\": \"number\",\n      \"value\": \"some input value\",\n    }\n  }\n  meta={Object {}}\n  stretch={true}\n>\n  <Input\n    align=\"left\"\n    autoComplete={false}\n    hasError={false}\n    hideErrorIndicator={false}\n    hideNumberArrows={true}\n    kind=\"bordered\"\n    stretch={true}\n    type=\"number\"\n    value=\"some input value\"\n  />\n</FormField>\n");
  });
});