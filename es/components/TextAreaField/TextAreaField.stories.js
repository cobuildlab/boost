import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { TextAreaField } from '../../';
export default {
  title: 'Components/TextAreaField',
  component: TextAreaField
};
export var defaultStory = function defaultStory() {
  return ___EmotionJSX(TextAreaField, {
    label: "Area",
    input: {
      name: 'input',
      value: 'value',
      onChange: function onChange() {
        return null;
      }
    }
  });
};
defaultStory.story = {
  name: 'default'
};
export var withoutValue = function withoutValue() {
  return ___EmotionJSX(TextAreaField, {
    label: "Area",
    input: {
      name: 'input',
      onChange: function onChange() {
        return null;
      }
    }
  });
};
withoutValue.story = {
  name: 'without value'
};
export var withPlaceholder = function withPlaceholder() {
  return ___EmotionJSX(TextAreaField, {
    label: "Area",
    input: {
      name: 'input',
      onChange: function onChange() {
        return null;
      }
    },
    placeholder: "placeholder"
  });
};
withPlaceholder.story = {
  name: 'with placeholder'
};
export var withDisabled = function withDisabled() {
  return ___EmotionJSX(TextAreaField, {
    label: "Area",
    input: {
      name: 'input',
      onChange: function onChange() {
        return null;
      }
    },
    placeholder: "placeholder",
    disabled: true
  });
};
withDisabled.story = {
  name: 'with disabled'
};
export var withError = function withError() {
  return ___EmotionJSX(TextAreaField, {
    label: "Area",
    input: {
      name: 'input',
      onChange: function onChange() {
        return null;
      }
    },
    meta: {
      error: 'Required',
      touched: true
    },
    placeholder: "placeholder"
  });
};
withError.story = {
  name: 'with error'
};