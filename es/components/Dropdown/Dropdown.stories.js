import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Dropdown, Button, Icon, Menu, Column, Text, Row } from '../../';

var BodyContent = function BodyContent() {
  return ___EmotionJSX("div", {
    style: {
      padding: '8px'
    }
  }, "Body");
};

export default {
  title: 'Components/Dropdown',
  component: Dropdown
};
export var common = function common() {
  return ___EmotionJSX(Column, {
    growChildren: true,
    alignItems: "stretch",
    style: {
      width: '100%'
    }
  }, ___EmotionJSX(Row, null, ___EmotionJSX(Dropdown, {
    defaultOpen: true
  }, ___EmotionJSX(Dropdown.Head, null, ___EmotionJSX(Button, null, "Head")), ___EmotionJSX(Dropdown.Body, {
    offset: "none",
    background: "white",
    closeOnClickOutside: false
  }, ___EmotionJSX(BodyContent, null))), ___EmotionJSX(Dropdown, {
    defaultOpen: true
  }, ___EmotionJSX(Dropdown.Head, null, ___EmotionJSX(Button, null, "Head")), ___EmotionJSX(Dropdown.Body, {
    offset: "xs",
    background: "white",
    closeOnClickOutside: false
  }, ___EmotionJSX(BodyContent, null))), ___EmotionJSX(Dropdown, {
    defaultOpen: true
  }, ___EmotionJSX(Dropdown.Head, null, ___EmotionJSX(Button, null, "Head")), ___EmotionJSX(Dropdown.Body, {
    offset: "sm",
    background: "white",
    closeOnClickOutside: false
  }, ___EmotionJSX(BodyContent, null))), ___EmotionJSX(Dropdown, {
    defaultOpen: true
  }, ___EmotionJSX(Dropdown.Head, null, ___EmotionJSX(Button, null, "Head")), ___EmotionJSX(Dropdown.Body, {
    offset: "md",
    background: "white",
    closeOnClickOutside: false
  }, ___EmotionJSX(BodyContent, null))), ___EmotionJSX(Dropdown, {
    defaultOpen: true
  }, ___EmotionJSX(Dropdown.Head, null, ___EmotionJSX(Button, null, "Head")), ___EmotionJSX(Dropdown.Body, {
    offset: "lg",
    background: "white",
    closeOnClickOutside: false
  }, ___EmotionJSX(BodyContent, null))), ___EmotionJSX(Dropdown, {
    defaultOpen: true
  }, ___EmotionJSX(Dropdown.Head, null, ___EmotionJSX(Button, null, "Head")), ___EmotionJSX(Dropdown.Body, {
    offset: "xl",
    background: "white",
    closeOnClickOutside: false
  }, ___EmotionJSX(BodyContent, null)))), ___EmotionJSX("br", null), ___EmotionJSX("br", null), ___EmotionJSX("br", null), ___EmotionJSX("br", null), ___EmotionJSX(Row, null, ___EmotionJSX(Dropdown, {
    defaultOpen: true
  }, ___EmotionJSX(Dropdown.Head, null, ___EmotionJSX(Button, null, "Head")), ___EmotionJSX(Dropdown.Body, {
    background: "dark",
    closeOnClickOutside: false
  }, ___EmotionJSX(BodyContent, null))), ___EmotionJSX(Dropdown, {
    defaultOpen: true
  }, ___EmotionJSX(Dropdown.Head, null, ___EmotionJSX(Button, null, "Head")), ___EmotionJSX(Dropdown.Body, {
    background: "white",
    closeOnClickOutside: false
  }, ___EmotionJSX(BodyContent, null))), ___EmotionJSX(Dropdown, {
    defaultOpen: true
  }, ___EmotionJSX(Dropdown.Head, null, ___EmotionJSX(Button, null, "Head")), ___EmotionJSX(Dropdown.Body, {
    closeOnClickOutside: false
  }, ___EmotionJSX(BodyContent, null)))));
};
common.story = {
  name: 'common'
};
export var withPin = function withPin() {
  return ___EmotionJSX(Column, {
    growChildren: true,
    alignItems: "stretch",
    style: {
      width: '100%'
    }
  }, ___EmotionJSX(Text, null, "With default pin"), ___EmotionJSX(Dropdown, {
    defaultOpen: true
  }, ___EmotionJSX(Dropdown.Head, {
    stretch: true
  }, ___EmotionJSX(Button, {
    stretch: true
  }, "Head")), ___EmotionJSX(Dropdown.Body, {
    background: "white"
  }, ___EmotionJSX(BodyContent, null))), ___EmotionJSX("br", null), ___EmotionJSX("br", null), ___EmotionJSX("br", null), ___EmotionJSX(Text, null, "With pin to right"), ___EmotionJSX(Dropdown, {
    defaultOpen: true
  }, ___EmotionJSX(Dropdown.Head, {
    stretch: true
  }, ___EmotionJSX(Button, {
    stretch: true
  }, "Head")), ___EmotionJSX(Dropdown.Body, {
    pin: "right",
    background: "white"
  }, ___EmotionJSX(BodyContent, null))));
};
withPin.story = {
  name: 'with pin'
};
export var withStretch = function withStretch() {
  return ___EmotionJSX(Column, {
    growChildren: true,
    alignItems: "stretch",
    style: {
      width: '100%'
    }
  }, ___EmotionJSX("div", null, ___EmotionJSX(Text, null, "With target stretch"), ___EmotionJSX(Dropdown, {
    defaultOpen: true
  }, ___EmotionJSX(Dropdown.Head, {
    stretch: true
  }, ___EmotionJSX(Button, {
    stretch: true
  }, "Head")), ___EmotionJSX(Dropdown.Body, {
    closeOnClickOutside: false,
    background: "white"
  }, ___EmotionJSX(BodyContent, null)))), ___EmotionJSX("br", null), ___EmotionJSX("br", null), ___EmotionJSX("br", null), ___EmotionJSX("div", null, ___EmotionJSX(Text, null, "With body stretch"), ___EmotionJSX(Dropdown, {
    defaultOpen: true
  }, ___EmotionJSX(Dropdown.Head, {
    stretch: true
  }, ___EmotionJSX(Button, {
    stretch: true
  }, "Head")), ___EmotionJSX(Dropdown.Body, {
    stretch: true,
    closeOnClickOutside: false,
    background: "white"
  }, ___EmotionJSX(BodyContent, null)))), ___EmotionJSX("br", null), ___EmotionJSX("br", null), ___EmotionJSX("br", null), ___EmotionJSX("div", null, ___EmotionJSX(Text, null, "With custom body width"), ___EmotionJSX(Dropdown, {
    defaultOpen: true
  }, ___EmotionJSX(Dropdown.Head, {
    stretch: true
  }, ___EmotionJSX(Button, {
    stretch: true
  }, "Head")), ___EmotionJSX(Dropdown.Body, {
    width: 170,
    closeOnClickOutside: false,
    background: "white"
  }, ___EmotionJSX(BodyContent, null)))));
};
withStretch.story = {
  name: 'with stretch'
};
export var withoutCloseOnOutsideClick = function withoutCloseOnOutsideClick() {
  return ___EmotionJSX(Dropdown, {
    defaultOpen: true
  }, ___EmotionJSX(Dropdown.Head, null, ___EmotionJSX(Button, null, "Head")), ___EmotionJSX(Dropdown.Body, {
    closeOnClickOutside: false,
    background: "white"
  }, ___EmotionJSX(BodyContent, null)));
};
withoutCloseOnOutsideClick.story = {
  name: 'without close on outside click'
};
export var withForceRender = function withForceRender() {
  return ___EmotionJSX(Dropdown, {
    defaultOpen: true
  }, ___EmotionJSX(Dropdown.Head, null, ___EmotionJSX(Button, null, "Head")), ___EmotionJSX(Dropdown.Body, {
    forceRender: true,
    background: "white"
  }, ___EmotionJSX(BodyContent, null)));
};
withForceRender.story = {
  name: 'with force render'
};
export var withMenu = function withMenu() {
  return ___EmotionJSX(Dropdown, {
    defaultOpen: false
  }, ___EmotionJSX(Dropdown.Head, null, ___EmotionJSX(Icon, {
    name: "More",
    color: "GRAY_30"
  })), ___EmotionJSX(Dropdown.Body, {
    forceRender: true
  }, ___EmotionJSX(Menu, null, ___EmotionJSX(Menu.Item, null, "Tramman"), ___EmotionJSX(Menu.Item, null, "Gripman"), ___EmotionJSX(Menu.Item, null, "Proalliance"))));
};
withMenu.story = {
  name: 'with menu'
};