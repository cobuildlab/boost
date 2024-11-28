import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Radio } from './';
import { RadioCircleInnerTag, RadioTag } from './Radio.theme';
describe('<Radio />', function () {
  it('should render radio items with correct selected value', function () {
    var firstItem = null;
    var secondItem = null;
    var wrapper = mount(___EmotionJSX(Radio.Group, {
      value: 2,
      gap: "xs"
    }, ___EmotionJSX(Radio.Item, {
      label: "Radio",
      value: 1
    }), ___EmotionJSX(Radio.Item, {
      label: "Radio",
      value: 2
    }), ___EmotionJSX(Radio.Item, {
      label: "Radio",
      value: 3
    })));
    firstItem = wrapper.find(Radio.Item).at(0);
    secondItem = wrapper.find(Radio.Item).at(1);
    expect(firstItem.find(RadioCircleInnerTag).prop('checked')).toBeFalsy();
    expect(firstItem.find(RadioTag).prop('checked')).toBeFalsy();
    expect(secondItem.find(RadioCircleInnerTag).prop('checked')).toBeTruthy();
    expect(secondItem.find(RadioTag).prop('checked')).toBeTruthy();
    wrapper.setProps({
      value: 2
    });
    firstItem = wrapper.find(Radio.Item).at(0);
    secondItem = wrapper.find(Radio.Item).at(1);
    expect(firstItem.find(RadioCircleInnerTag).prop('checked')).toBeFalsy();
    expect(firstItem.find(RadioTag).prop('checked')).toBeFalsy();
    expect(secondItem.find(RadioCircleInnerTag).prop('checked')).toBeTruthy();
    expect(secondItem.find(RadioTag).prop('checked')).toBeTruthy();
  });
  it('should call onChange callback', function () {
    var onChange = jest.fn();
    var wrapper = mount(___EmotionJSX(Radio.Group, {
      value: 1,
      gap: "xs",
      onChange: onChange
    }, ___EmotionJSX(Radio.Item, {
      label: "Radio",
      value: 1
    }), ___EmotionJSX(Radio.Item, {
      label: "Radio",
      value: 2
    }), ___EmotionJSX(Radio.Item, {
      label: "Radio",
      value: 3
    })));
    wrapper.find(Radio.Item).at(1).find('input').simulate('change');
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0]).toBe(2);
  });
  it('should not call onChange callback on disabled radio', function () {
    var onChange = jest.fn();
    var wrapper = mount(___EmotionJSX(Radio.Group, {
      value: 1,
      gap: "xs",
      onChange: onChange
    }, ___EmotionJSX(Radio.Item, {
      label: "Radio",
      value: 1
    }), ___EmotionJSX(Radio.Item, {
      label: "Radio",
      disabled: true,
      value: 2
    }), ___EmotionJSX(Radio.Item, {
      label: "Radio",
      value: 3
    })));
    wrapper.find(Radio.Item).at(1).find('input').simulate('change');
    expect(onChange).not.toHaveBeenCalled();
  });
});