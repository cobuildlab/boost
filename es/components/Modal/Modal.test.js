import { jsx as ___EmotionJSX } from "@emotion/core";
import * as React from 'react';
import { Modal } from './Modal';
import { OverlayTag } from './Modal.theme';
var map = {};
describe('<Modal />', function () {
  beforeAll(function () {
    // $FlowIgnore
    document.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    }); // $FlowIgnore

    document.removeEventListener = jest.fn(function (event) {
      map[event] = undefined;
    });
  });
  it('should render modal content when modal is open', function () {
    var wrapper = shallow(___EmotionJSX(Modal, {
      isOpen: true
    }, ___EmotionJSX("div", {
      className: "modal-content"
    }, "content")));
    expect(wrapper.find('.modal-content')).toHaveLength(1);
    expect(wrapper.find('.modal-content').children().text()).toBe('content');
  });
  it('should render modal content when modal is open with function as a children', function () {
    var wrapper = mount(___EmotionJSX(Modal, {
      isOpen: true,
      args: {
        content: 'content'
      }
    }, function (_ref) {
      var args = _ref.args;
      return ___EmotionJSX("div", {
        className: "modal-content"
      }, args.content);
    }));
    expect(wrapper.find('.modal-content')).toHaveLength(1);
    expect(wrapper.text()).toBe('content');
  });
  it('should not render modal content when modal is close', function () {
    var wrapper = mount(___EmotionJSX(Modal, {
      isOpen: false
    }, ___EmotionJSX("div", {
      className: "modal-content"
    }, "content")));
    expect(wrapper.find('.modal-content')).toHaveLength(0);
  });
  it('should not call onClose callback on overlay click', function () {
    var onClose = jest.fn();
    var wrapper = mount(___EmotionJSX(Modal, {
      isOpen: true,
      onClose: onClose
    }, ___EmotionJSX("div", null)));
    wrapper.find(OverlayTag).simulate('mouseDown');
    expect(onClose).toHaveBeenCalled();
  });
  it('should call onClose callback on escape with shouldCloseOnOverlayClick=false', function () {
    var onClose = jest.fn();
    var wrapper = mount(___EmotionJSX(Modal, {
      isOpen: true,
      onClose: onClose,
      shouldCloseOnOverlayClick: false
    }, ___EmotionJSX("div", null)));
    wrapper.find(OverlayTag).simulate('mouseDown');
    expect(onClose).not.toHaveBeenCalled();
  });
  it('should call onClose callback on escape key', function () {
    var onClose = jest.fn();
    var wrapper = mount(___EmotionJSX(Modal, {
      isOpen: true,
      onClose: onClose
    }, ___EmotionJSX("div", null)));
    map.keydown({
      key: 'Escape'
    });
    expect(onClose).toHaveBeenCalled();
    wrapper.unmount();
    expect(map.keydown).toBeUndefined();
  });
  it('should not call onClose callback on escape key with shouldCloseOnEscPress=false', function () {
    var onClose = jest.fn();
    var map = {}; // $FlowIgnore

    document.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });
    mount(___EmotionJSX(Modal, {
      isOpen: true,
      onClose: onClose,
      shouldCloseOnEscPress: false
    }, ___EmotionJSX("div", null)));
    map.keydown({
      key: 'Escape'
    });
    expect(onClose).not.toHaveBeenCalled();
  });
});