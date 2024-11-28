import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Modal, ModalContext, Button } from '../../';

var CustomBackground = function CustomBackground(_ref) {
  var children = _ref.children;
  return ___EmotionJSX("div", {
    style: {
      backgroundColor: '#fff',
      padding: '10px'
    }
  }, children);
};

export default {
  title: 'Components/Modal',
  component: Modal
};
export var defaultStory = function defaultStory() {
  return ___EmotionJSX(Modal, {
    isOpen: true,
    "data-e2e-id": "default-modal"
  }, ___EmotionJSX(CustomBackground, null, "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null)));
};
defaultStory.story = {
  name: 'default'
};
export var withMultipleModals = function withMultipleModals() {
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(Modal, {
    isOpen: true
  }, ___EmotionJSX(CustomBackground, null, "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null))), ___EmotionJSX(Modal, {
    isOpen: true,
    "data-e2e-id": "multiple-modal"
  }, ___EmotionJSX(CustomBackground, null, "00000", ___EmotionJSX("br", null), "00000", ___EmotionJSX("br", null), "00000", ___EmotionJSX("br", null), "00000", ___EmotionJSX("br", null), "00000", ___EmotionJSX("br", null))));
};
withMultipleModals.story = {
  name: 'with multiple modals'
};
export var withState = function withState() {
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(Modal, {
    id: "ID"
  }, function (_ref2) {
    var args = _ref2.args;
    return ___EmotionJSX(CustomBackground, null, "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXX", args.foo, "XXXX", ___EmotionJSX("br", null), "XXXX", args.bar, "XXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null), "XXXXXXXXXX", ___EmotionJSX("br", null));
  }), ___EmotionJSX(ModalContext.Consumer, null, function (_ref3) {
    var openModal = _ref3.openModal;
    return ___EmotionJSX(Button, {
      onClick: function onClick() {
        return openModal('ID', {
          foo: '00',
          bar: '00'
        });
      }
    }, "Open");
  }));
};
withState.story = {
  name: 'with state'
};