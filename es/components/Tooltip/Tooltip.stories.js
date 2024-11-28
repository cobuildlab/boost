import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import { jsx as ___EmotionJSX } from "@emotion/core";
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n\n  &:visited {\n    color: white;\n  }\n"]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
import React from 'react';
import { css } from '@emotion/react';
import { Tooltip, Icon } from '../../';
var anchorCss = css(_templateObject());
export default {
  title: 'Components/Tooltip',
  component: Tooltip
};
export var defaultStory = function defaultStory() {
  return ___EmotionJSX(Tooltip, {
    message: "It is trap! You was catched!"
  }, ___EmotionJSX(Icon, {
    name: "HelpCenter"
  }));
};
defaultStory.story = {
  name: 'default'
};
export var withPlacement = function withPlacement() {
  return ___EmotionJSX("div", {
    style: {
      position: 'relative',
      top: '50px',
      left: '100px'
    }
  }, ___EmotionJSX(Tooltip, {
    trigger: "click",
    placement: "left",
    message: "Left Tooltip"
  }, ___EmotionJSX(Tooltip, {
    trigger: "click",
    placement: "top",
    message: "Top Tooltip"
  }, ___EmotionJSX(Tooltip, {
    trigger: "click",
    placement: "bottom",
    message: "Bottom Tooltip"
  }, ___EmotionJSX(Tooltip, {
    trigger: "click",
    placement: "right",
    message: "Right Tooltip"
  }, ___EmotionJSX("div", {
    style: {
      width: '100px',
      height: '100px',
      border: '1px solid gray',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "Click Me"))))));
};
withPlacement.story = {
  name: 'with placement'
};
export var withClickTrigger = function withClickTrigger() {
  return ___EmotionJSX(Tooltip, {
    trigger: "click",
    message: "It is trap! You was catched!"
  }, ___EmotionJSX(Icon, {
    name: "HelpCenter"
  }));
};
withClickTrigger.story = {
  name: 'with click trigger'
};
export var withRenderProps = function withRenderProps() {
  return ___EmotionJSX(Tooltip, {
    trigger: "click",
    message: "It is trap! You was catched!"
  }, function (_ref) {
    var toggleTooltip = _ref.toggleTooltip;
    return ___EmotionJSX(Icon, {
      name: "HelpCenter",
      onClick: toggleTooltip
    });
  });
};
withRenderProps.story = {
  name: 'with renderProps'
};
export var withModifiers = function withModifiers() {
  return ___EmotionJSX(Tooltip, {
    message: ___EmotionJSX("a", {
      href: "https://popper.js.org/popper-documentation.html#modifiers",
      target: "__blank",
      css: anchorCss
    }, "See all modifiers here"),
    placement: "right",
    modifiers: {
      offset: {
        flip: {
          enabled: false
        }
      }
    }
  }, ___EmotionJSX(Icon, {
    name: "HelpCenter"
  }));
};
withModifiers.story = {
  name: 'with modifiers'
};