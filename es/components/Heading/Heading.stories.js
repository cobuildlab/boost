import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Heading, Grid } from '../../';
export default {
  title: 'Components/Heading',
  component: Heading
};
export var common = function common() {
  return ___EmotionJSX(Grid.Layout, {
    gap: "xl"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Heading, {
    type: "h1"
  }, "Heading 1"), ___EmotionJSX(Heading, {
    type: "h2"
  }, "Heading 2"), ___EmotionJSX(Heading, {
    type: "h3"
  }, "Heading 3"), ___EmotionJSX(Heading, {
    type: "h4"
  }, "Heading 4"), ___EmotionJSX(Heading, {
    type: "h5"
  }, "Heading 5")));
};
common.story = {
  name: 'common'
};