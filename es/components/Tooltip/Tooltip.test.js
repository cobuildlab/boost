import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Tooltip } from './';
import { TooltipTargetTag, TooltipMessageTag } from './Tooltip.theme';
describe('<Tooltip />', function () {
  it('should show tooltip message on hover', function () {
    var wrapper = mount(___EmotionJSX(Tooltip, {
      message: "Tooltip message"
    }, ___EmotionJSX("div", null, "Tooltip target")));
    expect(wrapper.text()).toBe('Tooltip target');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(0);
    wrapper.find(TooltipTargetTag).simulate('mouseEnter');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(1);
    expect(wrapper.find(TooltipMessageTag).text()).toBe('Tooltip message');
    wrapper.find(TooltipTargetTag).simulate('mouseLeave');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(0);
  });
  it('should show tooltip message on click', function () {
    var wrapper = mount(___EmotionJSX(Tooltip, {
      message: "Tooltip message",
      trigger: "click"
    }, ___EmotionJSX("div", null, "Tooltip target")));
    expect(wrapper.text()).toBe('Tooltip target');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(0);
    wrapper.find(TooltipTargetTag).simulate('click');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(1);
    expect(wrapper.find(TooltipMessageTag).text()).toBe('Tooltip message');
    wrapper.find(TooltipTargetTag).simulate('click');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(0);
  });
  it('should not close tooltip message on click by the messsage', function () {
    var wrapper = mount(___EmotionJSX(Tooltip, {
      message: "Tooltip message",
      trigger: "click",
      defaultOpen: true
    }, ___EmotionJSX("div", null, "Tooltip target")));
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(1);
    wrapper.find(TooltipMessageTag).simulate('click');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(1);
    wrapper.setProps({
      trigger: 'hover'
    });
    wrapper.find(TooltipMessageTag).simulate('click');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(1);
    wrapper.find(TooltipTargetTag).simulate('mouseLeave');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(0);
  });
});