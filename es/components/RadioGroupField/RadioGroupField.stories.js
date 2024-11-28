import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { RadioGroupField, Radio } from '../../';
export default {
  title: 'Components/RadioGroupField',
  component: RadioGroupField
};
export var defaultStory = function defaultStory() {
  return ___EmotionJSX(RadioGroupField, {
    direction: "row",
    input: {
      value: 1
    },
    meta: {}
  }, ___EmotionJSX(Radio.Item, {
    label: "Radio",
    value: 1
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    value: 2
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    value: 3
  }));
};
defaultStory.story = {
  name: 'default'
};
export var button = function button() {
  return ___EmotionJSX(RadioGroupField, {
    direction: "row",
    input: {
      value: 1
    },
    meta: {},
    gap: "none"
  }, ___EmotionJSX(Radio.Button, {
    label: "Radio",
    value: 1
  }), ___EmotionJSX(Radio.Button, {
    label: "Radio",
    value: 2
  }), ___EmotionJSX(Radio.Button, {
    label: "Radio",
    value: 3
  }));
};
button.story = {
  name: 'button'
};
export var disabledStory = function disabledStory() {
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(RadioGroupField, {
    direction: "row",
    input: {
      value: 1
    },
    meta: {},
    disabled: true
  }, ___EmotionJSX(Radio.Item, {
    label: "Radio",
    value: 1
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    value: 2
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    value: 3
  })), ___EmotionJSX(RadioGroupField, {
    direction: "row",
    input: {
      value: 3
    },
    meta: {},
    options: [{
      label: '1',
      value: 1
    }, {
      label: '2',
      value: 2,
      disabled: true
    }, {
      label: '3',
      value: 3,
      disabled: true
    }]
  }));
};
disabledStory.story = {
  name: 'disabled'
};
export var withError = function withError() {
  return ___EmotionJSX(RadioGroupField, {
    direction: "row",
    input: {},
    meta: {
      error: 'Required',
      touched: true
    }
  }, ___EmotionJSX(Radio.Item, {
    label: "Radio",
    value: 1
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    value: 2
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    value: 3
  }));
};
withError.story = {
  name: 'with error'
};