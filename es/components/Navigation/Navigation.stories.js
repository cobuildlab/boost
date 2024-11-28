import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { useState } from 'react';
import { Navigation, Button } from '../../';
var ExpandState = function ExpandState(_ref) {
  var children = _ref.children;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    expanded = _useState2[0],
    setExpanded = _useState2[1];
  return children({
    expanded: expanded,
    setExpanded: setExpanded
  });
};
export default {
  title: 'Components/Navigation',
  component: Navigation
};
export var defaultStory = function defaultStory() {
  return ___EmotionJSX(Navigation, {
    color: "GREEN_40",
    "data-e2e-id": "default-navigation"
  }, ___EmotionJSX(Navigation.Item, {
    icon: "Trashcan",
    label: "Jobs",
    to: "/jobs"
  }), ___EmotionJSX(Navigation.Item, {
    icon: "Mail",
    label: "Posted",
    to: "/posted"
  }), ___EmotionJSX(Navigation.Item, {
    icon: "Search",
    label: "My Active Jobs",
    to: "/my-active-jobs"
  }));
};
defaultStory.story = {
  name: 'default'
};
export var withIconSize = function withIconSize() {
  return ___EmotionJSX(Navigation, {
    color: "GREEN_40"
  }, ___EmotionJSX(Navigation.Item, {
    iconSize: "lg",
    icon: "Trashcan",
    label: "Jobs",
    to: "/jobs"
  }), ___EmotionJSX(Navigation.Item, {
    iconSize: "lg",
    icon: "Mail",
    label: "Posted",
    to: "/posted"
  }), ___EmotionJSX(Navigation.Item, {
    iconSize: "lg",
    icon: "Search",
    label: "My Active Jobs",
    to: "/my-active-jobs"
  }));
};
withIconSize.story = {
  name: 'with icon size'
};
export var withoutIcons = function withoutIcons() {
  return ___EmotionJSX(Navigation, {
    color: "GREEN_40",
    "data-e2e-id": "default-navigation"
  }, ___EmotionJSX(Navigation.Item, {
    label: "Jobs",
    to: "/jobs"
  }), ___EmotionJSX(Navigation.Item, {
    label: "Posted",
    to: "/posted"
  }), ___EmotionJSX(Navigation.Item, {
    label: "My Active Jobs",
    to: "/my-active-jobs"
  }));
};
withoutIcons.story = {
  name: 'without icons'
};
export var withExpandButton = function withExpandButton() {
  return ___EmotionJSX(ExpandState, null, function (_ref2) {
    var expanded = _ref2.expanded,
      setExpanded = _ref2.setExpanded;
    return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(Button, {
      onClick: function onClick() {
        return setExpanded(!expanded);
      }
    }, expanded ? 'Collapse' : 'Expand'), ___EmotionJSX(Navigation, {
      expanded: expanded,
      expandedWidth: 196,
      color: "GREEN_40",
      "data-e2e-id": "default-navigation"
    }, ___EmotionJSX(Navigation.Item, {
      icon: "Trashcan",
      label: "Jobs",
      to: "/jobs"
    }), ___EmotionJSX(Navigation.Item, {
      icon: "Mail",
      label: "Posted",
      to: "/posted"
    }), ___EmotionJSX(Navigation.Item, {
      icon: "Search",
      label: "My Active Jobs",
      to: "/my-active-jobs"
    })));
  });
};
withExpandButton.story = {
  name: 'with expand button'
};