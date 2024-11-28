import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Input } from './Input';
describe('<Input />', function () {
  it('should shallow input', function () {
    var onChange = jest.fn();
    var wrapper = shallow(___EmotionJSX(Input, {
      onChange: onChange,
      value: "val",
      leftIcon: "i",
      clearable: true
    }));
    expect(wrapper).toMatchInlineSnapshot("\n<Boost(inputWrapper)\n  stretch={true}\n  tagName=\"div\"\n>\n  <Boost(input)\n    align=\"left\"\n    autoComplete=\"off\"\n    hasError={false}\n    hasLeftIcon={true}\n    hasRightIcon={false}\n    hideNumberArrows={true}\n    kind=\"bordered\"\n    modifiers={\n      Object {\n        \"onChange\": [MockFunction],\n      }\n    }\n    onChange={[Function]}\n    stretch={true}\n    tagName=\"input\"\n    type=\"text\"\n    value=\"val\"\n  />\n  <Boost(inputLeftIcon)\n    modifiers={\n      Object {\n        \"onChange\": [MockFunction],\n      }\n    }\n    tagName=\"div\"\n  >\n    i\n  </Boost(inputLeftIcon)>\n  <Boost(inputClearButton)\n    modifiers={\n      Object {\n        \"onChange\": [MockFunction],\n      }\n    }\n    onClick={[Function]}\n    tagName=\"div\"\n  >\n    <Icon\n      name=\"Delete\"\n      size=\"sm\"\n    />\n  </Boost(inputClearButton)>\n</Boost(inputWrapper)>\n");
  });
  it('should call onCahnge with text value', function () {
    var onChange = jest.fn();
    var wrapper = mount(___EmotionJSX(Input, {
      onChange: onChange
    }));
    wrapper.find('input').simulate('change', {
      target: {
        value: 'val'
      }
    });
    expect(onChange.mock.calls[0][0]).toBe('val');
  });
  it('should call onChange with number value', function () {
    var onChange = jest.fn();
    var wrapper = mount(___EmotionJSX(Input, {
      onChange: onChange,
      type: "number"
    }));
    wrapper.find('input').simulate('change', {
      target: {
        value: '42'
      }
    });
    expect(onChange.mock.calls[0][0]).toBe(42);
    expect(typeof onChange.mock.calls[0][0]).toBe('number');
  });
  it('should call onChange with empty value after click on clear button', function () {
    var onChange = jest.fn();
    var wrapper = mount(___EmotionJSX(Input, {
      value: "Text",
      onChange: onChange,
      clearable: true
    }));
    wrapper.find({
      name: 'Delete'
    }).simulate('click');
    expect(onChange.mock.calls).toEqual([['']]);
  });
  it('should not call onCahnge with max value', function () {
    var onChange = jest.fn();
    var wrapper = mount(___EmotionJSX(Input, {
      onChange: onChange,
      maxLength: 2
    }));
    wrapper.find('input').simulate('change', {
      target: {
        value: '123'
      }
    });
    expect(onChange).not.toHaveBeenCalled();
    wrapper.find('input').simulate('change', {
      target: {
        value: '12'
      }
    });
    expect(onChange.mock.calls[0][0]).toBe('12');
  });
  it('should use autoComplete from props if it\'s string', function () {
    var wrapper = shallow(___EmotionJSX(Input, {
      autoComplete: "new-password"
    }));
    expect(wrapper).toMatchInlineSnapshot("\n<Boost(inputWrapper)\n  stretch={true}\n  tagName=\"div\"\n>\n  <Boost(input)\n    align=\"left\"\n    autoComplete=\"new-password\"\n    hasError={false}\n    hasLeftIcon={false}\n    hasRightIcon={false}\n    hideNumberArrows={true}\n    kind=\"bordered\"\n    modifiers={Object {}}\n    onChange={[Function]}\n    stretch={true}\n    tagName=\"input\"\n    type=\"text\"\n  />\n</Boost(inputWrapper)>\n");
  });
  it('should convert autoComplete to "on" or "off" if it\'s boolean', function () {
    var wrapperOn = shallow(___EmotionJSX(Input, {
      autoComplete: true
    }));
    var wrapperOff = shallow(___EmotionJSX(Input, {
      autoComplete: false
    }));
    expect(wrapperOn).toMatchInlineSnapshot("\n<Boost(inputWrapper)\n  stretch={true}\n  tagName=\"div\"\n>\n  <Boost(input)\n    align=\"left\"\n    autoComplete=\"on\"\n    hasError={false}\n    hasLeftIcon={false}\n    hasRightIcon={false}\n    hideNumberArrows={true}\n    kind=\"bordered\"\n    modifiers={Object {}}\n    onChange={[Function]}\n    stretch={true}\n    tagName=\"input\"\n    type=\"text\"\n  />\n</Boost(inputWrapper)>\n");
    expect(wrapperOff).toMatchInlineSnapshot("\n<Boost(inputWrapper)\n  stretch={true}\n  tagName=\"div\"\n>\n  <Boost(input)\n    align=\"left\"\n    autoComplete=\"off\"\n    hasError={false}\n    hasLeftIcon={false}\n    hasRightIcon={false}\n    hideNumberArrows={true}\n    kind=\"bordered\"\n    modifiers={Object {}}\n    onChange={[Function]}\n    stretch={true}\n    tagName=\"input\"\n    type=\"text\"\n  />\n</Boost(inputWrapper)>\n");
  });
  describe('input with type number', function () {
    it('should increment and decrement number on arrows click', function () {
      var onChange = jest.fn();
      var wrapper = mount(___EmotionJSX(Input, {
        value: "",
        onChange: onChange,
        type: "number",
        hideNumberArrows: false
      })); // From "" (0) to 1

      wrapper.find('Boost(inputArrow)').first().simulate('click');
      expect(onChange).toHaveBeenCalledWith(1); // From "" (0) to -1

      wrapper.find('Boost(inputArrow)').last().simulate('click');
      expect(onChange).toHaveBeenCalledWith(-1);
    });
  });
});