import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { SecondaryNavigation } from '../../';
export default {
  title: 'Components/SecondaryNavigation',
  component: SecondaryNavigation
};
export var defaultStory = function defaultStory() {
  return ___EmotionJSX(SecondaryNavigation, null, ___EmotionJSX(SecondaryNavigation.Item, {
    label: "First item"
  }), ___EmotionJSX(SecondaryNavigation.Item, {
    label: "Second item",
    className: "active"
  }), ___EmotionJSX(SecondaryNavigation.Item, {
    label: "Third item"
  }), ___EmotionJSX(SecondaryNavigation.Item, {
    label: "Fourth item"
  }));
};
defaultStory.story = {
  name: 'default'
};
export var defaultWithActions = function defaultWithActions() {
  return ___EmotionJSX(SecondaryNavigation, null, ___EmotionJSX(SecondaryNavigation.Item, {
    label: "First item"
  }), ___EmotionJSX(SecondaryNavigation.Item, {
    label: "Second item",
    className: "active",
    actions: [{
      label: 'Action',
      onClick: function onClick() {
        return null;
      }
    }]
  }), ___EmotionJSX(SecondaryNavigation.Item, {
    label: "Third item"
  }), ___EmotionJSX(SecondaryNavigation.Item, {
    label: "Fourth item"
  }));
};
defaultWithActions.story = {
  name: 'default with actions'
};