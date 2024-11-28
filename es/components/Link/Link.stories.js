import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Link, Avatar } from '../../';
export default {
  title: 'Components/Link',
  component: Link
};
export var common = function common() {
  return ___EmotionJSX(Link, {
    to: "https://randomuser.me/api/portraits/women/76.jpg",
    text: "With text"
  });
};
common.story = {
  name: 'common'
};
export var withChildren = function withChildren() {
  return ___EmotionJSX(Link, {
    to: "https://randomuser.me/api/portraits/women/87.jpg"
  }, ___EmotionJSX(Avatar, {
    src: "https://randomuser.me/api/portraits/women/87.jpg"
  }));
};
withChildren.story = {
  name: 'with children'
};