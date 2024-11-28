import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { ModalContext, Dialog, Paragraph, Button, Column } from '../../';
export default {
  title: 'Components/Dialog',
  component: Dialog
};
export var defaultStory = function defaultStory() {
  return ___EmotionJSX(Dialog, {
    size: "sm",
    isOpen: true,
    "data-e2e-id": "default-dialog"
  }, ___EmotionJSX(Dialog.Header, {
    title: "Mark Job as Completed"
  }), ___EmotionJSX(Dialog.Body, null, ___EmotionJSX(Paragraph, null, "Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics")), ___EmotionJSX(Dialog.Footer, null, ___EmotionJSX(Button, {
    color: "neutral",
    variant: "outlined"
  }, "Cancel"), ___EmotionJSX(Button, {
    type: "submit"
  }, "Apply")));
};
defaultStory.story = {
  name: 'default'
};
export var withStretch = function withStretch() {
  return ___EmotionJSX(Dialog, {
    stretch: true,
    size: "sm",
    isOpen: true,
    "data-e2e-id": "default-dialog"
  }, ___EmotionJSX(Dialog.Header, {
    title: "Mark Job as Completed"
  }), ___EmotionJSX(Dialog.Body, null, ___EmotionJSX(Paragraph, null, "Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics")), ___EmotionJSX(Dialog.Footer, null, ___EmotionJSX(Button, {
    color: "neutral",
    variant: "outlined"
  }, "Cancel"), ___EmotionJSX(Button, {
    type: "submit"
  }, "Apply")));
};
withStretch.story = {
  name: 'with stretch'
};
export var withLargeSize = function withLargeSize() {
  return ___EmotionJSX(Dialog, {
    size: "xl",
    isOpen: true,
    "data-e2e-id": "default-dialog"
  }, ___EmotionJSX(Dialog.Header, {
    title: "Mark Job as Completed"
  }), ___EmotionJSX(Dialog.Body, null, ___EmotionJSX(Paragraph, null, "Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics")), ___EmotionJSX(Dialog.Footer, null, ___EmotionJSX(Button, {
    color: "neutral",
    variant: "outlined"
  }, "Cancel"), ___EmotionJSX(Button, {
    type: "submit"
  }, "Apply")));
};
withLargeSize.story = {
  name: 'with large size'
};
export var withScroll = function withScroll() {
  return ___EmotionJSX(Dialog, {
    size: "sm",
    isOpen: true,
    "data-e2e-id": "default-dialog"
  }, ___EmotionJSX(Dialog.Header, {
    title: "Mark Job as Completed"
  }), ___EmotionJSX(Dialog.Body, {
    scrollable: true
  }, ___EmotionJSX(Column, null, new Array(100).fill('').map(function () {
    return ___EmotionJSX(Paragraph, {
      key: ""
    }, "Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics");
  }))), ___EmotionJSX(Dialog.Footer, null, ___EmotionJSX(Button, {
    color: "neutral",
    variant: "outlined"
  }, "Cancel"), ___EmotionJSX(Button, {
    type: "submit"
  }, "Apply")));
};
withScroll.story = {
  name: 'with scroll'
};
export var withStretchScroll = function withStretchScroll() {
  return ___EmotionJSX(Dialog, {
    size: "sm",
    isOpen: true,
    "data-e2e-id": "default-dialog",
    stretch: true
  }, ___EmotionJSX(Dialog.Header, {
    title: "Mark Job as Completed"
  }), ___EmotionJSX(Dialog.Body, {
    scrollable: true
  }, ___EmotionJSX(Column, null, new Array(100).fill('').map(function () {
    return ___EmotionJSX(Paragraph, {
      key: ""
    }, "Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics");
  }))), ___EmotionJSX(Dialog.Footer, null, ___EmotionJSX(Button, {
    color: "neutral",
    variant: "outlined"
  }, "Cancel"), ___EmotionJSX(Button, {
    type: "submit"
  }, "Apply")));
};
withScroll.story = {
  name: 'with stretch scroll'
};
export var withState = function withState() {
  return ___EmotionJSX(ModalContext.Consumer, null, function (_ref) {
    var openModal = _ref.openModal,
      closeModal = _ref.closeModal;
    return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(Dialog, {
      id: "ID",
      size: "sm",
      onClose: function onClose() {
        return closeModal('ID');
      }
    }, function (_ref2) {
      var args = _ref2.args,
        onClose = _ref2.onClose;
      return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(Dialog.Header, {
        title: "Mark Job as Completed",
        onClose: onClose
      }), ___EmotionJSX(Dialog.Body, null, ___EmotionJSX(Paragraph, null, "Fagelia cancrivorous ", args.foo, " Curucaneca Echinocaris ", args.bar, " glassful agronomics")), ___EmotionJSX(Dialog.Footer, null, ___EmotionJSX(Button, {
        color: "neutral",
        variant: "outlined",
        onClick: onClose
      }, "Cancel"), ___EmotionJSX(Button, {
        type: "submit"
      }, "Apply")));
    }), ___EmotionJSX(Button, {
      onClick: function onClick() {
        return openModal('ID', {
          foo: '00',
          bar: '00'
        });
      }
    }, "Open"));
  });
};
withState.story = {
  name: 'with state'
};