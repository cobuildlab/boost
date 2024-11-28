import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { Fragment } from 'react';
import { Paragraph } from '../../';
export default {
  title: 'Components/Paragraph',
  component: Paragraph
};
export var common = function common() {
  return ___EmotionJSX(Fragment, null, ___EmotionJSX(Paragraph, {
    color: "PRIMARY_TEXT_COLOR"
  }, "Primary Paragraph"), ___EmotionJSX(Paragraph, {
    color: "SECONDARY_TEXT_COLOR"
  }, "Secondary Paragraph"), ___EmotionJSX(Paragraph, {
    color: "DISABLED_TEXT_COLOR"
  }, "Disabled Paragraph"));
};
common.story = {
  name: 'common '
};
export var withText = function withText() {
  return ___EmotionJSX(Paragraph, {
    text: "Binode carpetbaggism preyouthful salesmanship sinuventricular outskirmish autoepilation frescoer Jebus waneless hyperinsulinize Oxycoccus onlooker upbrought gryllid apopenptic sinuatrial nonresidency villainy planxty gelatinize fructivorous headlock aggrieve"
  });
};
withText.story = {
  name: 'with text'
};
export var withChildren = function withChildren() {
  return ___EmotionJSX(Paragraph, null, 'Binode carpetbaggism preyouthful salesmanship sinuventricular outskirmish autoepilation frescoer Jebus waneless hyperinsulinize Oxycoccus onlooker upbrought gryllid apopenptic sinuatrial nonresidency villainy planxty gelatinize fructivorous headlock aggrieve</Paragraph');
};
withChildren.story = {
  name: 'with children'
};