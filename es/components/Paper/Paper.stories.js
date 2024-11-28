import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Paper, Row } from '../../';
export default {
  title: 'Components/Paper',
  component: Paper
};
export var defaultStory = function defaultStory() {
  return ___EmotionJSX(Paper, {
    padding: "md"
  }, "Paper");
};
defaultStory.story = {
  name: 'default'
};
export var withPadding = function withPadding() {
  return ___EmotionJSX(Row, null, ___EmotionJSX(Paper, {
    padding: "none"
  }, "none"), ___EmotionJSX(Paper, {
    padding: "xs"
  }, "xs"), ___EmotionJSX(Paper, {
    padding: "sm"
  }, "sm"), ___EmotionJSX(Paper, {
    padding: "md"
  }, "md"), ___EmotionJSX(Paper, {
    padding: "lg"
  }, "lg"), ___EmotionJSX(Paper, {
    padding: "xl"
  }, "xl"));
};
withPadding.story = {
  name: 'with padding'
};
export var withBorderRadius = function withBorderRadius() {
  return ___EmotionJSX(Row, null, ___EmotionJSX(Paper, {
    padding: "lg",
    borderRadius: "top"
  }, "top"), ___EmotionJSX(Paper, {
    padding: "lg",
    borderRadius: "bottom"
  }, "bottom"), ___EmotionJSX(Paper, {
    padding: "lg",
    borderRadius: "all"
  }, "all"));
};
withBorderRadius.story = {
  name: 'with borderRadius'
};