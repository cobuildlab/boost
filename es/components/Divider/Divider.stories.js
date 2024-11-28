import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Divider } from '../../';
export default {
  title: 'Components/Divider',
  component: Divider
};
export var withoutTitle = function withoutTitle() {
  return ___EmotionJSX(Divider, null);
};
withoutTitle.story = {
  name: 'without title'
};
export var withTitle = function withTitle() {
  return ___EmotionJSX(Divider, null, "With Title");
};
withTitle.story = {
  name: 'with title'
};