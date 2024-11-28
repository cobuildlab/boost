import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Text, Column } from '../../';
var placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
export default {
  title: 'Components/Text',
  component: Text
};
export var common = function common() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(Text, null, "Semibold: ", placeholderText), ___EmotionJSX(Text, {
    color: "PRIMARY"
  }, "Primary color: ", placeholderText), ___EmotionJSX(Text, {
    color: "SECONDARY"
  }, "Secondary color: ", placeholderText), ___EmotionJSX(Text, {
    color: "DANGER"
  }, "Danger color: ", placeholderText), ___EmotionJSX(Text, {
    color: "GREEN_20"
  }, "Green color: ", placeholderText), ___EmotionJSX(Text, {
    color: "BLUE_30"
  }, "Blue color: ", placeholderText), ___EmotionJSX(Text, {
    weight: "semibold"
  }, "Semibold: ", placeholderText), ___EmotionJSX(Text, {
    weight: "bold"
  }, "Bold: ", placeholderText), ___EmotionJSX(Text, {
    disabled: true
  }, "Disabled: ", placeholderText));
};
common.story = {
  name: 'common'
};
export var withKindModifiers = function withKindModifiers() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(Text, {
    kind: "h1"
  }, "H1 kind: ", placeholderText), ___EmotionJSX(Text, {
    kind: "h2"
  }, "H2 kind: ", placeholderText), ___EmotionJSX(Text, {
    kind: "h3"
  }, "H3 kind: ", placeholderText), ___EmotionJSX(Text, {
    kind: "h4"
  }, "H4 kind: ", placeholderText), ___EmotionJSX(Text, {
    kind: "h5"
  }, "H5 kind: ", placeholderText), ___EmotionJSX(Text, {
    kind: "subtitle"
  }, "Subtitle kind: ", placeholderText), ___EmotionJSX(Text, {
    kind: "body"
  }, "Body kind: ", placeholderText), ___EmotionJSX(Text, {
    kind: "overline-1"
  }, "Overline-1 kind: ", placeholderText), ___EmotionJSX(Text, {
    kind: "overline-2"
  }, "Overline-2 kind: ", placeholderText), ___EmotionJSX(Text, {
    kind: "small-1"
  }, "Small-1 kind: ", placeholderText), ___EmotionJSX(Text, {
    kind: "small-2"
  }, "Small-2 kind: ", placeholderText));
};
withKindModifiers.story = {
  name: 'with kind modifiers'
};
export var withAlignModifiers = function withAlignModifiers() {
  return ___EmotionJSX("div", {
    style: {
      width: '300px',
      display: ' flex',
      flexDirection: 'column'
    }
  }, ___EmotionJSX(Text, {
    align: "left"
  }, placeholderText), ___EmotionJSX("br", null), ___EmotionJSX(Text, {
    align: "right"
  }, placeholderText), ___EmotionJSX("br", null), ___EmotionJSX(Text, {
    align: "center"
  }, placeholderText));
};
withAlignModifiers.story = {
  name: 'with align modifiers'
};