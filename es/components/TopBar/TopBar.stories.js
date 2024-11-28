import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";

/* eslint-disable no-alert */
import React, { useState } from 'react';
import { TopBar, Column, Icon, Text, Button } from '../../';

var TopBarWithState = function TopBarWithState(props) {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  return ___EmotionJSX(TopBar, _extends({
    isOpen: isOpen,
    onClose: function onClose() {
      return setIsOpen(false);
    }
  }, props));
};

export default {
  title: 'Components/TopBar',
  component: TopBar
};
export var common = function common() {
  return ___EmotionJSX(Column, {
    gap: "lg"
  }, ___EmotionJSX(TopBar, {
    color: "BLUE"
  }, ___EmotionJSX(Text, {
    color: "WHITE",
    weight: "semibold"
  }, "You have 7 days until your FREE TRIAL ends."), ___EmotionJSX(Button, {
    color: "white",
    variant: "ghost",
    size: "sm"
  }, "Update")), ___EmotionJSX(TopBarWithState, {
    color: "DANGER"
  }, ___EmotionJSX(Icon, {
    color: "YELLOW_30",
    name: "Alert"
  }), ___EmotionJSX(Text, {
    color: "WHITE",
    weight: "semibold"
  }, "Oh no! Your FREE TRIAL has ended, please update your payment details."), ___EmotionJSX(Button, {
    color: "white",
    variant: "ghost",
    size: "sm"
  }, "Update")), ___EmotionJSX(TopBar, {
    color: "DANGER"
  }, ___EmotionJSX(Icon, {
    color: "YELLOW_30",
    name: "Alert"
  }), ___EmotionJSX(Text, {
    color: "WHITE",
    weight: "semibold"
  }, "Oh no! Your FREE TRIAL has ended, please update your payment details."), ___EmotionJSX(Button, {
    color: "white",
    variant: "ghost",
    size: "sm"
  }, "Update")), ___EmotionJSX(TopBar, {
    color: "DANGER"
  }, ___EmotionJSX(Text, {
    color: "WHITE",
    weight: "semibold"
  }, "Oh no! Your FREE TRIAL has ended,", ___EmotionJSX("br", null), "please update your", ___EmotionJSX("br", null), "payment details.")));
};
common.story = {
  name: 'common'
};