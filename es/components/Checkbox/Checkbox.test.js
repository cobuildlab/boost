import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Checkbox } from './Checkbox';
describe('<Checkbox />', function () {
  it('should shallow checkbox', function () {
    var onChange = jest.fn();
    var wrapper = shallow(___EmotionJSX(Checkbox, {
      onChange: onChange,
      label: "Label",
      checked: true
    }));
    expect(wrapper).toMatchInlineSnapshot("\n<Boost(checkboxWrapper)\n  checked={true}\n  disabled={false}\n  hasError={false}\n  indeterminate={false}\n  tagName=\"label\"\n>\n  <Boost(checkboxTag)\n    checked={true}\n    disabled={false}\n    insideRef={\n      Object {\n        \"current\": null,\n      }\n    }\n    modifiers={\n      Object {\n        \"checked\": true,\n        \"disabled\": false,\n        \"hasError\": false,\n        \"indeterminate\": false,\n      }\n    }\n    onChange={[Function]}\n    tagName=\"input\"\n    type=\"checkbox\"\n  />\n  <Boost(checkboxSquare)\n    modifiers={\n      Object {\n        \"checked\": true,\n        \"disabled\": false,\n        \"hasError\": false,\n        \"indeterminate\": false,\n      }\n    }\n    tagName=\"div\"\n  >\n    <Boost(checkboxIcon)\n      modifiers={\n        Object {\n          \"checked\": true,\n          \"disabled\": false,\n          \"hasError\": false,\n          \"indeterminate\": false,\n          \"isShown\": true,\n        }\n      }\n      tagName=\"div\"\n    >\n      <Icon\n        name=\"Check\"\n        size=\"xs\"\n      />\n    </Boost(checkboxIcon)>\n  </Boost(checkboxSquare)>\n  <Boost(checkboxText)\n    modifiers={\n      Object {\n        \"checked\": true,\n        \"disabled\": false,\n        \"hasError\": false,\n        \"indeterminate\": false,\n      }\n    }\n    tagName=\"div\"\n  >\n    Label\n  </Boost(checkboxText)>\n</Boost(checkboxWrapper)>\n");
  });
  it('should call onChange callback with false', function () {
    var onChange = jest.fn();
    var wrapper = mount(___EmotionJSX(Checkbox, {
      onChange: onChange,
      checked: true
    }));
    wrapper.find('input').simulate('change', {
      target: {
        checked: false
      }
    });
    expect(onChange.mock.calls[0][0]).toBe(false);
  });
  it('should call onChange callback with true', function () {
    var onChange = jest.fn();
    var wrapper = mount(___EmotionJSX(Checkbox, {
      onChange: onChange
    }));
    wrapper.find('input').simulate('change', {
      target: {
        checked: true
      }
    });
    expect(onChange.mock.calls[0][0]).toBe(true);
  });
  it('should not call onChange callback with disabled prop', function () {
    var onChange = jest.fn();
    var wrapper = mount(___EmotionJSX(Checkbox, {
      onChange: onChange,
      disabled: true
    }));
    wrapper.find('input').simulate('change', {
      target: {}
    });
    expect(onChange).not.toHaveBeenCalled();
  });
});