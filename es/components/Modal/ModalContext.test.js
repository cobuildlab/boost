import { jsx as ___EmotionJSX } from "@emotion/core";
import * as React from 'react';
import { Button } from '../Button';
import { Modal } from './Modal';
import { ModalContext } from './ModalContext';
import { ModalProvider } from './ModalProvider';
import { withModal } from './withModal';
describe('<ModalConsumer />', function () {
  var OpenCloseModal = function OpenCloseModal(_ref) {
    var openModal = _ref.openModal,
      closeModal = _ref.closeModal;
    return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(Button, {
      onClick: function onClick() {
        return openModal('ID', {
          ff: '00'
        });
      }
    }, ___EmotionJSX("span", {
      className: "open-button"
    }, "Open")), ___EmotionJSX(Button, {
      onClick: function onClick() {
        return closeModal('ID');
      }
    }, ___EmotionJSX("span", {
      className: "close-button"
    }, "Close")));
  };
  it('should open and close modal by modal id', function () {
    var wrapper = mount(___EmotionJSX(ModalProvider, null, ___EmotionJSX(Modal, {
      id: "ID"
    }, function (_ref2) {
      var args = _ref2.args;
      return ___EmotionJSX("div", {
        className: "modal-content"
      }, args.ff);
    }), ___EmotionJSX(ModalContext.Consumer, null, function (_ref3) {
      var openModal = _ref3.openModal,
        closeModal = _ref3.closeModal;
      return ___EmotionJSX(OpenCloseModal, {
        openModal: openModal,
        closeModal: closeModal
      });
    })));
    expect(wrapper.find('.modal-content')).toHaveLength(0);
    wrapper.find('.open-button').simulate('click');
    expect(wrapper.find('.modal-content')).toHaveLength(1);
    expect(wrapper.find('.modal-content').text()).toBe('00');
    wrapper.find('.close-button').simulate('click');
    expect(wrapper.find('.modal-content')).toHaveLength(0);
  });
  it('should open and close modal by modal id using hoc', function () {
    var OpenCloseModalWrapped = withModal(OpenCloseModal);
    var wrapper = mount(___EmotionJSX(ModalProvider, null, ___EmotionJSX(Modal, {
      id: "ID"
    }, function (_ref4) {
      var args = _ref4.args;
      return ___EmotionJSX("div", {
        className: "modal-content"
      }, args.ff);
    }), ___EmotionJSX(OpenCloseModalWrapped, null)));
    expect(wrapper.find('.modal-content')).toHaveLength(0);
    wrapper.find('.open-button').simulate('click');
    expect(wrapper.find('.modal-content')).toHaveLength(1);
    expect(wrapper.find('.modal-content').text()).toBe('00');
    wrapper.find('.close-button').simulate('click');
    expect(wrapper.find('.modal-content')).toHaveLength(0);
  });
});