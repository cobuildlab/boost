import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Tabs, Row, Button } from '../../';
export default {
  title: 'Components/Tabs',
  component: Tabs
};
export var defaultStory = function defaultStory() {
  return ___EmotionJSX(Tabs, {
    defaultSelectedTabId: "1"
  }, ___EmotionJSX(Row, {
    gap: "xs"
  }, ___EmotionJSX(Tabs.Title, {
    tabId: "1"
  }, ___EmotionJSX(Button, null, "Tab-1")), ___EmotionJSX(Tabs.Title, {
    tabId: "2"
  }, ___EmotionJSX(Button, null, "Tab-2"))), ___EmotionJSX(Tabs.Panel, {
    tabId: "1"
  }, "Body-1"), ___EmotionJSX(Tabs.Panel, {
    tabId: "2"
  }, "Body-2"));
};
defaultStory.story = {
  name: 'default'
};
export var withForceRender = function withForceRender() {
  return ___EmotionJSX(Tabs, {
    defaultSelectedTabId: "1"
  }, ___EmotionJSX(Row, {
    gap: "xs"
  }, ___EmotionJSX(Tabs.Title, {
    tabId: "1"
  }, ___EmotionJSX(Button, null, "Tab-1")), ___EmotionJSX(Tabs.Title, {
    tabId: "2"
  }, ___EmotionJSX(Button, null, "Tab-2"))), ___EmotionJSX(Tabs.Panel, {
    tabId: "1",
    forceRender: true
  }, "Body-1"), ___EmotionJSX(Tabs.Panel, {
    tabId: "2",
    forceRender: true
  }, "Body-2"));
};
withForceRender.story = {
  name: 'with force render'
};
export var withSelectedTitle = function withSelectedTitle() {
  return ___EmotionJSX(Tabs, {
    defaultSelectedTabId: "1"
  }, ___EmotionJSX(Row, {
    gap: "xs"
  }, ___EmotionJSX(Tabs.Title, {
    tabId: "1"
  }, function (_ref) {
    var selected = _ref.selected;
    return ___EmotionJSX(Button, {
      color: selected ? 'primary' : 'neutral'
    }, "Tab-1");
  }), ___EmotionJSX(Tabs.Title, {
    tabId: "2"
  }, function (_ref2) {
    var selected = _ref2.selected;
    return ___EmotionJSX(Button, {
      color: selected ? 'primary' : 'neutral'
    }, "Tab-2");
  }), ___EmotionJSX(Tabs.Title, {
    tabId: "3"
  }, function (_ref3) {
    var selected = _ref3.selected;
    return ___EmotionJSX(Button, {
      color: selected ? 'primary' : 'neutral'
    }, "Tab-3");
  })), ___EmotionJSX(Tabs.Panel, {
    tabId: "1",
    forceRender: true
  }, "Body-1"), ___EmotionJSX(Tabs.Panel, {
    tabId: "2",
    forceRender: true
  }, "Body-2"), ___EmotionJSX(Tabs.Panel, {
    tabId: "3",
    forceRender: true
  }, "Body-3"));
};
withSelectedTitle.story = {
  name: 'with selected title'
};