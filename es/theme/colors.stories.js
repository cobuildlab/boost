import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { PALETTE } from './colors';
export default {
  title: 'Theme'
};
export var palette = function palette() {
  return ___EmotionJSX("div", null, React.Children.toArray(Object.keys(PALETTE).map(function (key) {
    return ___EmotionJSX("div", {
      key: key,
      style: {
        width: '400px',
        height: '30px',
        color: '#fff',
        backgroundColor: PALETTE[key],
        display: 'flex',
        alignItems: 'center'
      }
    }, key);
  })));
};
palette.story = {
  name: 'palette'
};