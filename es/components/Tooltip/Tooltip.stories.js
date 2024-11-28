import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { css } from '@emotion/core';
import { Tooltip, Icon } from '../../';
var anchorCss = process.env.NODE_ENV === "production" ? {
  name: "okxw92",
  styles: "color:white;&:visited{color:white;}"
} : {
  name: "okxw92",
  styles: "color:white;&:visited{color:white;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXAvVG9vbHRpcC5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlxQiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwL1Rvb2x0aXAuc3Rvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IFRvb2x0aXAsIEljb24gfSBmcm9tICcuLi8uLi8nO1xuXG5jb25zdCBhbmNob3JDc3MgPSBjc3NgXG4gIGNvbG9yOiB3aGl0ZTtcblxuICAmOnZpc2l0ZWQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ0NvbXBvbmVudHMvVG9vbHRpcCcsXG4gIGNvbXBvbmVudDogVG9vbHRpcCxcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RvcnkgPSAoKSA9PiAoXG4gIDxUb29sdGlwIG1lc3NhZ2U9XCJJdCBpcyB0cmFwISBZb3Ugd2FzIGNhdGNoZWQhXCI+XG4gICAgPEljb24gbmFtZT1cIkhlbHBDZW50ZXJcIiAvPlxuICA8L1Rvb2x0aXA+XG4pO1xuXG5kZWZhdWx0U3Rvcnkuc3RvcnkgPSB7XG4gIG5hbWU6ICdkZWZhdWx0Jyxcbn07XG5cblxuZXhwb3J0IGNvbnN0IHdpdGhQbGFjZW1lbnQgPSAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogJzUwcHgnLCBsZWZ0OiAnMTAwcHgnIH19PlxuICAgIDxUb29sdGlwIHRyaWdnZXI9XCJjbGlja1wiIHBsYWNlbWVudD1cImxlZnRcIiBtZXNzYWdlPVwiTGVmdCBUb29sdGlwXCI+XG4gICAgICA8VG9vbHRpcCB0cmlnZ2VyPVwiY2xpY2tcIiBwbGFjZW1lbnQ9XCJ0b3BcIiBtZXNzYWdlPVwiVG9wIFRvb2x0aXBcIj5cbiAgICAgICAgPFRvb2x0aXAgdHJpZ2dlcj1cImNsaWNrXCIgcGxhY2VtZW50PVwiYm90dG9tXCIgbWVzc2FnZT1cIkJvdHRvbSBUb29sdGlwXCI+XG4gICAgICAgICAgPFRvb2x0aXAgdHJpZ2dlcj1cImNsaWNrXCIgcGxhY2VtZW50PVwicmlnaHRcIiBtZXNzYWdlPVwiUmlnaHQgVG9vbHRpcFwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgZ3JheScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgQ2xpY2sgTWVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9Ub29sdGlwPlxuICAgIDwvVG9vbHRpcD5cbiAgPC9kaXY+XG4pO1xuXG53aXRoUGxhY2VtZW50LnN0b3J5ID0ge1xuICBuYW1lOiAnd2l0aCBwbGFjZW1lbnQnLFxufTtcblxuXG5leHBvcnQgY29uc3Qgd2l0aENsaWNrVHJpZ2dlciA9ICgpID0+IChcbiAgPFRvb2x0aXAgdHJpZ2dlcj1cImNsaWNrXCIgbWVzc2FnZT1cIkl0IGlzIHRyYXAhIFlvdSB3YXMgY2F0Y2hlZCFcIj5cbiAgICA8SWNvbiBuYW1lPVwiSGVscENlbnRlclwiIC8+XG4gIDwvVG9vbHRpcD5cbik7XG5cbndpdGhDbGlja1RyaWdnZXIuc3RvcnkgPSB7XG4gIG5hbWU6ICd3aXRoIGNsaWNrIHRyaWdnZXInLFxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhSZW5kZXJQcm9wcyA9ICgpID0+IChcbiAgPFRvb2x0aXAgdHJpZ2dlcj1cImNsaWNrXCIgbWVzc2FnZT1cIkl0IGlzIHRyYXAhIFlvdSB3YXMgY2F0Y2hlZCFcIj5cbiAgICB7ICh7IHRvZ2dsZVRvb2x0aXAgfSkgPT4gPEljb24gbmFtZT1cIkhlbHBDZW50ZXJcIiBvbkNsaWNrPXsgdG9nZ2xlVG9vbHRpcCB9IC8+IH1cbiAgPC9Ub29sdGlwPlxuKTtcblxud2l0aFJlbmRlclByb3BzLnN0b3J5ID0ge1xuICBuYW1lOiAnd2l0aCByZW5kZXJQcm9wcycsXG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aE1vZGlmaWVycyA9ICgpID0+IChcbiAgPFRvb2x0aXBcbiAgICBtZXNzYWdlPXtcbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL3BvcHBlci5qcy5vcmcvcG9wcGVyLWRvY3VtZW50YXRpb24uaHRtbCNtb2RpZmllcnNcIlxuICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgY3NzPXsgYW5jaG9yQ3NzIH1cbiAgICAgID5cbiAgICAgICAgU2VlIGFsbCBtb2RpZmllcnMgaGVyZVxuICAgICAgPC9hPlxuICAgIH1cbiAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgbW9kaWZpZXJzPXt7IG9mZnNldDogeyBmbGlwOiB7IGVuYWJsZWQ6IGZhbHNlIH19fX1cbiAgPlxuICAgIDxJY29uIG5hbWU9XCJIZWxwQ2VudGVyXCIgLz5cbiAgPC9Ub29sdGlwPlxuKTtcblxud2l0aE1vZGlmaWVycy5zdG9yeSA9IHtcbiAgbmFtZTogJ3dpdGggbW9kaWZpZXJzJyxcbn07XG4iXX0= */"
};
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