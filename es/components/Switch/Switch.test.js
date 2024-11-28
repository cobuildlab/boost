import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Switch } from './Switch';
import { SwitchInputTag, SwitchApperanceTag } from './Switch.theme';
describe('<Switch />', function () {
  it('should call onChange callback', function () {
    var onChange = jest.fn();
    var wrapper = mount(___EmotionJSX(Switch, {
      onChange: onChange,
      value: false
    }));
    wrapper.find('input').simulate('change', {
      target: {
        checked: true
      }
    });
    expect(onChange.mock.calls[0][0]).toBe(true);
  });
  it('should pass value props', function () {
    var wrapper = shallow(___EmotionJSX(Switch, {
      value: false
    }));
    expect(wrapper.find(SwitchInputTag).props().checked).toBeFalsy();
    expect(wrapper.find(SwitchApperanceTag).props().value).toBeFalsy();
    wrapper.setProps({
      value: true
    });
    expect(wrapper.find(SwitchInputTag).props().checked).toBeTruthy();
    expect(wrapper.find(SwitchApperanceTag).props().value).toBeTruthy();
  });
  it('should render label', function () {
    var wrapper = mount(___EmotionJSX(Switch, {
      value: false
    }));
    expect(wrapper.text()).toBe('');
    wrapper.setProps({
      label: 'label'
    });
    expect(wrapper.text()).toBe('label');
  });
});