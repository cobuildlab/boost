import { jsx as ___EmotionJSX } from "@emotion/core";
import * as React from 'react';
import { Dropdown } from './';
import { Popper } from 'react-popper';
describe('<Dropdown />', function () {
  it('should render dropdown', function () {
    var wrapper = mount(___EmotionJSX(Dropdown, {
      isOpen: false
    }, ___EmotionJSX(Dropdown.Head, null, "Head"), ___EmotionJSX(Dropdown.Body, null, ___EmotionJSX("div", {
      className: "body"
    }, "Body"))));
    expect(wrapper).toMatchSnapshot();
  });
  it('should pass props to Popper component', function () {
    var wrapper = mount(___EmotionJSX(Dropdown, {
      isOpen: true
    }, ___EmotionJSX(Dropdown.Head, null, ___EmotionJSX("div", null)), ___EmotionJSX(Dropdown.Body, {
      positionFixed: true
    }, ___EmotionJSX("div", null))));
    expect(wrapper.find(Popper).props().positionFixed).toBeTruthy();
  });
  it('should open and close dropdown by changing the props', function () {
    var wrapper = mount(___EmotionJSX(Dropdown, {
      isOpen: false
    }, ___EmotionJSX(Dropdown.Head, null, "Head"), ___EmotionJSX(Dropdown.Body, null, ___EmotionJSX("div", {
      className: "body"
    }, "Body"))));
    expect(wrapper.find(Dropdown.Head).text()).toBe('Head');
    expect(wrapper.find('.body')).toHaveLength(0);
    wrapper.setProps({
      isOpen: true
    });
    expect(wrapper.find('.body')).toHaveLength(1);
    expect(wrapper.find(Dropdown.Body).text()).toBe('Body');
    wrapper.setProps({
      isOpen: false
    });
    expect(wrapper.find('.body')).toHaveLength(0);
  });
  it('should call onClose and onOpen callbacks', function () {
    var onOpenDropdown = jest.fn();
    var onCloseDropdown = jest.fn();
    var wrapper = mount(___EmotionJSX(Dropdown, {
      isOpen: false,
      onCloseDropdown: onCloseDropdown,
      onOpenDropdown: onOpenDropdown
    }, ___EmotionJSX(Dropdown.Head, null, "Head"), ___EmotionJSX(Dropdown.Body, null, ___EmotionJSX("div", {
      className: "body"
    }, "Body"))));
    wrapper.find(Dropdown.Head).simulate('click');
    expect(onOpenDropdown).toHaveBeenCalled();
    wrapper.setProps({
      isOpen: true
    });
    wrapper.find(Dropdown.Head).simulate('click');
    expect(onCloseDropdown).toHaveBeenCalled();
  });
  it('should open and close dropdwon by clicking to head', function () {
    var wrapper = mount(___EmotionJSX(Dropdown, {
      defaultOpen: true
    }, ___EmotionJSX(Dropdown.Head, null, "Head"), ___EmotionJSX(Dropdown.Body, null, ___EmotionJSX("div", {
      className: "body"
    }, "Body"))));
    expect(wrapper.find('.body')).toHaveLength(1);
    expect(wrapper.find('.body').text()).toBe('Body');
    wrapper.find(Dropdown.Head).simulate('click');
    expect(wrapper.find('.body')).toHaveLength(0);
    wrapper.find(Dropdown.Head).simulate('click');
    expect(wrapper.find('.body')).toHaveLength(1);
    expect(wrapper.find('.body').text()).toBe('Body');
  });
  it('shouldn\'t open and close dropdown when disabled=true', function () {
    var wrapper = mount(___EmotionJSX(Dropdown, null, ___EmotionJSX(Dropdown.Head, {
      disabled: true
    }, "Head"), ___EmotionJSX(Dropdown.Body, null, ___EmotionJSX("div", {
      className: "body"
    }, "Body"))));
    expect(wrapper.find('.body')).toHaveLength(0);
    wrapper.find(Dropdown.Head).simulate('click');
    expect(wrapper.find('.body')).toHaveLength(0);
  });
  it('should render with function in body', function () {
    var onCloseDropdown = jest.fn();
    var wrapper = mount(___EmotionJSX(Dropdown, {
      isOpen: true,
      onCloseDropdown: onCloseDropdown
    }, ___EmotionJSX(Dropdown.Head, null, "Head"), ___EmotionJSX(Dropdown.Body, {
      stretch: true
    }, function (_ref) {
      var closeDropdown = _ref.closeDropdown;
      return ___EmotionJSX("div", {
        className: "close-dropdown",
        onClick: closeDropdown
      });
    })));
    wrapper.find('.close-dropdown').simulate('click');
    expect(onCloseDropdown).toHaveBeenCalled();
  });
});