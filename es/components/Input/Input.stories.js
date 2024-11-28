import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Input } from '../../';
import { StateContainer } from '../../../storybook/StateContainer';
export default {
  title: 'Components/Input',
  component: Input
};
export var defaultStory = function defaultStory() {
  return ___EmotionJSX(Input, {
    name: "input",
    onChange: function onChange() {
      return null;
    }
  });
};
defaultStory.story = {
  name: 'default'
};
export var withValue = function withValue() {
  return ___EmotionJSX(Input, {
    name: "input",
    value: "value",
    onChange: function onChange() {
      return null;
    }
  });
};
withValue.story = {
  name: 'with value'
};
export var withPlaceholder = function withPlaceholder() {
  return ___EmotionJSX(Input, {
    name: "input",
    placeholder: "custom placeholder",
    onChange: function onChange() {
      return null;
    }
  });
};
withPlaceholder.story = {
  name: 'with placeholder'
};
export var withError = function withError() {
  return ___EmotionJSX(Input, {
    name: "input",
    hasError: true,
    onChange: function onChange() {
      return null;
    }
  });
};
withError.story = {
  name: 'with error'
};
export var withStretchFalse = function withStretchFalse() {
  return ___EmotionJSX(Input, {
    name: "input",
    stretch: false,
    onChange: function onChange() {
      return null;
    }
  });
};
withStretchFalse.story = {
  name: 'with stretch=false'
};
export var withCustomWidth = function withCustomWidth() {
  return ___EmotionJSX(Input, {
    name: "input",
    width: 5,
    onChange: function onChange() {
      return null;
    }
  });
};
withCustomWidth.story = {
  name: 'with custom width'
};
export var withLeftIcon = function withLeftIcon() {
  return ___EmotionJSX(Input, {
    name: "input",
    leftIcon: "i"
  });
};
withLeftIcon.story = {
  name: 'with left icon'
};
export var withRightIcon = function withRightIcon() {
  return ___EmotionJSX(Input, {
    name: "input",
    rightIcon: "i"
  });
};
withRightIcon.story = {
  name: 'with right icon'
};
export var withRightIconAndError = function withRightIconAndError() {
  return ___EmotionJSX(Input, {
    name: "input",
    rightIcon: "i",
    hasError: true,
    hideErrorIndicator: true
  });
};
withRightIconAndError.story = {
  name: 'with right icon and error'
};
export var withHtmlAutoComplete = function withHtmlAutoComplete() {
  return ___EmotionJSX(Input, {
    name: "input",
    autoComplete: true
  });
};
withHtmlAutoComplete.story = {
  name: 'with html auto-complete'
};
export var withCenterAlign = function withCenterAlign() {
  return ___EmotionJSX(Input, {
    name: "input",
    align: "center"
  });
};
withCenterAlign.story = {
  name: 'with center align'
};
export var withClearButton = function withClearButton() {
  return ___EmotionJSX(StateContainer, {
    value: "Text"
  }, ___EmotionJSX(Input, {
    name: "input",
    clearable: true
  }));
};
withClearButton.story = {
  name: 'with clear button'
};
export var withTypeNumber = function withTypeNumber() {
  return ___EmotionJSX(StateContainer, {
    value: "0"
  }, ___EmotionJSX(Input, {
    name: "input",
    type: "number",
    stretch: false
  }));
};
withTypeNumber.story = {
  name: 'with type number'
};
export var withKindUnderline = function withKindUnderline() {
  return ___EmotionJSX(Input, {
    name: "input",
    kind: "underline",
    placeholder: "custom placeholder",
    onChange: function onChange() {
      return null;
    }
  });
};
withKindUnderline.story = {
  name: 'with kind="underline"'
};
export var disabledStory = function disabledStory() {
  return ___EmotionJSX(Input, {
    value: "hello@8base.com",
    name: "input",
    onChange: function onChange() {
      return null;
    },
    disabled: true
  });
};
disabledStory.story = {
  name: 'with disabled=true'
};