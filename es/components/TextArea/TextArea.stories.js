import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { TextArea } from '../../';
export default {
  title: 'Components/TextArea',
  component: TextArea
};
export var defaultStory = function defaultStory() {
  return ___EmotionJSX(TextArea, {
    name: "input",
    value: "Affectious vindicably splenopathy demirevetment saffron redeny epitheliosis reacclimatization pistacite obdeltoid Balawu drugman lasher godlet immomentous unguentaria curwhibble dismastment filterable virilist subtrigonal iditol Silybum banshee",
    onChange: function onChange() {
      return null;
    },
    cols: 100,
    rows: 5
  });
};
defaultStory.story = {
  name: 'default'
};
export var withoutValue = function withoutValue() {
  return ___EmotionJSX(TextArea, {
    name: "input",
    onChange: function onChange() {
      return null;
    },
    cols: 100,
    rows: 5
  });
};
withoutValue.story = {
  name: 'without value'
};
export var withPlaceholder = function withPlaceholder() {
  return ___EmotionJSX(TextArea, {
    name: "input",
    placeholder: "placeholder",
    onChange: function onChange() {
      return null;
    },
    cols: 100,
    rows: 5
  });
};
withPlaceholder.story = {
  name: 'with placeholder'
};
export var withDisabled = function withDisabled() {
  return ___EmotionJSX(TextArea, {
    name: "input",
    placeholder: "placeholder",
    onChange: function onChange() {
      return null;
    },
    cols: 100,
    rows: 5,
    disabled: true
  });
};
withDisabled.story = {
  name: 'with disabled'
};
export var withError = function withError() {
  return ___EmotionJSX(TextArea, {
    name: "input",
    placeholder: "placeholder",
    onChange: function onChange() {
      return null;
    },
    cols: 100,
    rows: 5,
    hasError: true
  });
};
withError.story = {
  name: 'with error'
};