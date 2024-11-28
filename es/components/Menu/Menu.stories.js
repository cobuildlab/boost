import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Menu } from '../../';
export default {
  title: 'Components/Menu',
  component: Menu
};
export var common = function common() {
  return ___EmotionJSX(Menu, null, ___EmotionJSX(Menu.Item, null, "Tramman"), ___EmotionJSX(Menu.Item, null, "Gripman"), ___EmotionJSX(Menu.Item, {
    disabled: true
  }, "Proalliance"));
};
common.story = {
  name: 'common'
};