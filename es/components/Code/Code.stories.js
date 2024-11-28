import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Code } from '../../';
export default {
  title: 'Components/Code',
  component: Code
};
export var common = function common() {
  return ___EmotionJSX(Code, null, ___EmotionJSX("p", null, "npm i -g 8base"), ___EmotionJSX("p", null, "8base init my-project"));
};
common.story = {
  name: 'common'
};
export var withCustomHeight = function withCustomHeight() {
  return ___EmotionJSX(Code, {
    height: 200
  }, "npm i -g 8base\n8base init my-project\n\nnpm i -g 8base\n8base init my-project\nnpm i -g 8base\n8base init my-project\nnpm i -g 8base\n8base init my-project\nnpm i -g 8base\n8base init my-project\nnpm i -g 8base\n8base init my-project\nnpm i -g 8base\n8base init my-project\nnpm i -g 8base\n8base init my-project\nnpm i -g 8base\n8base init my-project\nnpm i -g 8base\n8base init my-project\n");
};
withCustomHeight.story = {
  name: 'with custom height'
};
export var withCopyButtonStory = function withCopyButtonStory() {
  return ___EmotionJSX(Code, {
    height: 200,
    withCopyButton: true
  }, "\n<p>\n  npm i -g 8base\n  8base init my-project\n</p>\n<p>\n  npm i -g 8base\n  8base init my-project\n</p>\n<p>\n  npm i -g 8base\n  8base init my-project\n</p>\n<p>\n  npm i -g 8base\n  8base init my-project\n</p>\n          ");
};
withCopyButtonStory.story = {
  name: 'with copy button'
};