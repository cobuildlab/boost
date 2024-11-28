import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import * as React from 'react';
import { Dialog } from './Dialog';
import { HeaderCloseTag } from './Dialog.theme';
import { Modal } from '../Modal';
import { OverlayTag } from '../Modal/Modal.theme';
describe('<Dialog />', function () {
  it('should render dialog content', function () {
    var wrapper = mount(___EmotionJSX(Dialog, {
      size: "sm",
      isOpen: true
    }, ___EmotionJSX(Dialog.Header, {
      title: "header-text"
    }), ___EmotionJSX(Dialog.Body, null, "body-text"), ___EmotionJSX(Dialog.Footer, null, "footer-text")));
    expect(wrapper.find(Dialog.Header).text()).toBe('header-text');
    expect(wrapper.find(Dialog.Body).text()).toBe('body-text');
    expect(wrapper.find(Dialog.Footer).text()).toBe('footer-text');
  });
  it('should call onClose callback', function () {
    var onClose = jest.fn();
    var wrapper = mount(___EmotionJSX(Dialog, {
      size: "sm",
      isOpen: true
    }, ___EmotionJSX(Dialog.Header, {
      title: "header-text",
      onClose: onClose
    })));
    wrapper.find(HeaderCloseTag).simulate('click');
    expect(onClose).toHaveBeenCalled();
  });
  it('should pass props to the Modal component', function () {
    var onClose = jest.fn();
    var onOpen = jest.fn();
    var shouldCloseOnOverlayClick = false;
    var shouldCloseOnEscPress = false;
    var isOpen = true;
    var id = 'ID';
    var args = {
      someArg: 42
    };
    var modalProps = {
      onClose: onClose,
      onOpen: onOpen,
      shouldCloseOnOverlayClick: shouldCloseOnOverlayClick,
      shouldCloseOnEscPress: shouldCloseOnEscPress,
      isOpen: isOpen,
      id: id,
      args: args
    };
    var wrapper = shallow(___EmotionJSX(Dialog, modalProps));
    var _wrapper$find$props = wrapper.find(Modal).props(),
      children = _wrapper$find$props.children,
      passedProps = _objectWithoutProperties(_wrapper$find$props, ["children"]);
    expect(passedProps).toEqual(modalProps);
  });
  it('should call onClose callback on overlay click', function () {
    var onClose = jest.fn();
    var wrapper = mount(___EmotionJSX(Dialog, {
      size: "sm",
      isOpen: true,
      onClose: onClose
    }, ___EmotionJSX(Dialog.Header, {
      title: "title"
    })));
    wrapper.find(OverlayTag).simulate('mouseDown');
    expect(onClose).toHaveBeenCalled();
  });
  it('should not call onClose callback on overlay click', function () {
    var onClose = jest.fn();
    var wrapper = mount(___EmotionJSX(Dialog, {
      size: "sm",
      isOpen: true,
      onClose: onClose
    }, ___EmotionJSX(Dialog.Header, {
      title: "title"
    })));
    wrapper.find(OverlayTag).simulate('mouseDown');
    expect(onClose).toHaveBeenCalled();
  });
  it('should call onClose callback on escape with shouldCloseOnOverlayClick=false', function () {
    var onClose = jest.fn();
    var wrapper = mount(___EmotionJSX(Dialog, {
      size: "sm",
      isOpen: true,
      onClose: onClose,
      shouldCloseOnOverlayClick: false
    }, ___EmotionJSX(Dialog.Header, {
      title: "title"
    })));
    wrapper.find(OverlayTag).simulate('mouseDown');
    expect(onClose).not.toHaveBeenCalled();
  });
});