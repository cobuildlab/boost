import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Loader, Row } from '../../';
export default {
  title: 'Components/Loader',
  component: Loader
};
export var common = function common() {
  return ___EmotionJSX(Row, {
    alignItems: "center",
    gap: "md"
  }, ___EmotionJSX(Loader, {
    size: "sm"
  }), ___EmotionJSX(Loader, {
    size: "md"
  }), ___EmotionJSX(Loader, {
    size: "lg"
  }));
};
common.story = {
  name: 'common'
};
export var withStretch = function withStretch() {
  return ___EmotionJSX("div", {
    style: {
      border: '1px solid gray',
      height: '300px'
    }
  }, ___EmotionJSX(Loader, {
    stretch: true
  }));
};
withStretch.story = {
  name: 'with stretch'
};
export var withColor = function withColor() {
  return ___EmotionJSX(Row, {
    alignItems: "center",
    gap: "lg",
    flexWrap: "wrap"
  }, ___EmotionJSX(Loader, {
    size: "md",
    color: "PRIMARY"
  }), ___EmotionJSX(Loader, {
    size: "md",
    color: "SUCCESS"
  }), ___EmotionJSX(Loader, {
    size: "md",
    color: "PURPLE_10"
  }));
};
withColor.story = {
  name: 'with color'
};