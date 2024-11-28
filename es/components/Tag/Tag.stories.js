import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Tag, Column } from '../../';
export default {
  title: 'Components/Tag',
  component: Tag
};
export var common = function common() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(Tag, null, "Content"), ___EmotionJSX(Tag, {
    color: "GRAY_50"
  }, "Content"), ___EmotionJSX(Tag, {
    color: "GRAY_40"
  }, "Content"), ___EmotionJSX(Tag, {
    color: "YELLOW_30"
  }, "Content"), ___EmotionJSX(Tag, {
    color: "PURPLE_10"
  }, "Content"), ___EmotionJSX(Tag, {
    color: "BLUE_10"
  }, "Content"), ___EmotionJSX(Tag, {
    color: "BLUE_20"
  }, "Content"), ___EmotionJSX(Tag, {
    color: "BLUE_30"
  }, "Content"), ___EmotionJSX(Tag, {
    color: "BLUE_40"
  }, "Content"), ___EmotionJSX(Tag, {
    color: "GREEN_40"
  }, "Content"));
};
common.story = {
  name: 'common'
};
export var withLargeContent = function withLargeContent() {
  return ___EmotionJSX("div", {
    style: {
      width: '200px'
    }
  }, ___EmotionJSX(Tag, null, "data-builder-test-js-as-an-authorized-user-i-should-see-require-validation-during-create-the-text-filled.png"));
};
withLargeContent.story = {
  name: 'with large content'
};
export var condensed = function condensed() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(Tag, {
    condensed: true
  }, "Content"), ___EmotionJSX(Tag, {
    condensed: true,
    color: "GRAY_50"
  }, "Content"), ___EmotionJSX(Tag, {
    condensed: true,
    color: "GRAY_40"
  }, "Content"), ___EmotionJSX(Tag, {
    condensed: true,
    color: "YELLOW_30"
  }, "Content"), ___EmotionJSX(Tag, {
    condensed: true,
    color: "PURPLE_10"
  }, "Content"), ___EmotionJSX(Tag, {
    condensed: true,
    color: "BLUE_10"
  }, "Content"), ___EmotionJSX(Tag, {
    condensed: true,
    color: "BLUE_20"
  }, "Content"), ___EmotionJSX(Tag, {
    condensed: true,
    color: "BLUE_30"
  }, "Content"), ___EmotionJSX(Tag, {
    condensed: true,
    color: "BLUE_40"
  }, "Content"), ___EmotionJSX(Tag, {
    condensed: true,
    color: "GREEN_40"
  }, "Content"));
};
condensed.story = {
  name: 'condensed tag'
};