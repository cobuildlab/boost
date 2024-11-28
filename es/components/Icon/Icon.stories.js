import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import * as glyphs from './glyphs';
import { Icon, Row, Text, Grid } from '../../';
export default {
  title: 'Components/Icon',
  component: Icon
};
export var allIcons = function allIcons() {
  return ___EmotionJSX(Grid.Layout, {
    columns: "auto auto auto auto auto",
    gap: "sm"
  }, Object.keys(glyphs).map(function (name) {
    return ___EmotionJSX(Grid.Box, {
      key: name
    }, ___EmotionJSX(Row, null, ___EmotionJSX(Icon, {
      name: name
    }), ___EmotionJSX(Text, null, name)));
  }));
};
allIcons.story = {
  name: 'all icons'
};
export var withColor = function withColor() {
  return ___EmotionJSX(Row, {
    alignItems: "center"
  }, ___EmotionJSX(Icon, {
    name: "Alert",
    color: "DANGER"
  }), ___EmotionJSX(Icon, {
    name: "DismissData",
    color: "BLUE_10"
  }), ___EmotionJSX(Icon, {
    name: "FirewallOn",
    color: "BLUE_30"
  }), ___EmotionJSX(Icon, {
    name: "Search",
    color: "GREEN_40"
  }), ___EmotionJSX(Icon, {
    name: "House",
    color: "GRAY_40"
  }));
};
withColor.story = {
  name: 'with color'
};
export var withSize = function withSize() {
  return ___EmotionJSX(Row, {
    alignItems: "center"
  }, ___EmotionJSX(Icon, {
    name: "Search",
    size: "xs"
  }), ___EmotionJSX(Icon, {
    name: "Search",
    size: "sm"
  }), ___EmotionJSX(Icon, {
    name: "Search",
    size: "md"
  }), ___EmotionJSX(Icon, {
    name: "Search",
    size: "lg"
  }), ___EmotionJSX(Icon, {
    name: "Search",
    size: "xl"
  }));
};
withSize.story = {
  name: 'with size'
};
export var withCustomSize = function withCustomSize() {
  return ___EmotionJSX(Row, {
    alignItems: "center"
  }, ___EmotionJSX(Icon, {
    name: "House",
    size: "custom",
    customSize: "100px"
  }), ___EmotionJSX(Icon, {
    name: "House",
    size: "custom",
    customSize: "2rem"
  }));
};
withCustomSize.story = {
  name: 'with custom size'
};