import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Button } from './Button';
describe('<Button />', function () {
  it('should render button with text', function () {
    var wrapper = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Button, {
      squared: true,
      variant: "outlined"
    }, "some-text")));
    expect(wrapper.find('button').text()).toBe('some-text');
  });
  it('should render button with default props', function () {
    var wrapper = shallow(___EmotionJSX(Button, null, "some-text"));
    expect(wrapper).toMatchInlineSnapshot("\n<Boost(button)\n  aria-busy=\"false\"\n  color=\"primary\"\n  onClick={[Function]}\n  size=\"md\"\n  tagName=\"button\"\n  variant=\"raised\"\n  withIconAutosize={true}\n>\n  <span\n    key=\".0\"\n  >\n    some-text\n  </span>\n</Boost(button)>\n");
  });
  it('should call onClick callback', function () {
    var onClick = jest.fn();
    var wrapper = shallow(___EmotionJSX(Button, {
      onClick: onClick
    }));
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('should pass children to the button body', function () {
    var wrapper = mount(___EmotionJSX(Button, null, ___EmotionJSX("div", {
      className: "first-child"
    }), ___EmotionJSX("div", {
      className: "second-child"
    }), "some-text"));
    expect(wrapper.find('.first-child')).toHaveLength(1);
    expect(wrapper.find('.second-child')).toHaveLength(1);
    expect(wrapper.text()).toBe('some-text');
  });
  it('should pass custom tag to the button', function () {
    var wrapper = mount(___EmotionJSX(Button, {
      tagName: "a",
      href: "https://break-core.ch"
    }));
    expect(wrapper.find('a')).toHaveLength(1);
    expect(wrapper.find('a').props().href).toBe('https://break-core.ch');
  });
  it('shouldn\'t call onClick callback on disabled button', function () {
    var onClick = jest.fn();
    var wrapper = shallow(___EmotionJSX(Button, {
      disabled: true,
      onClick: onClick
    }));
    wrapper.simulate('click');
    expect(onClick).not.toHaveBeenCalled();
  });
  it('should not click on button while it loading', function () {
    var onClick = jest.fn();
    var wrapper = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Button, {
      onClick: onClick,
      loading: true
    })));
    wrapper.simulate('click');
    expect(onClick).not.toHaveBeenCalled();
    expect(wrapper.find('button').prop('aria-busy')).toBe('true');
  });
});