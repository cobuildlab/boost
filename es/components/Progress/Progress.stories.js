import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Progress, Column } from '../../';
export default {
  title: 'Components/Progress',
  component: Progress
};
export var common = function common() {
  return ___EmotionJSX(Column, {
    style: {
      width: 300
    }
  }, ___EmotionJSX(Progress, {
    value: 0
  }), ___EmotionJSX("br", null), ___EmotionJSX(Progress, {
    value: 30
  }), ___EmotionJSX("br", null), ___EmotionJSX(Progress, {
    value: 50
  }), ___EmotionJSX("br", null), ___EmotionJSX(Progress, {
    value: 100
  }), ___EmotionJSX("br", null), ___EmotionJSX(Progress, {
    showSeparator: true,
    backgroundColor: "GREEN_30",
    value: 75
  }), ___EmotionJSX("br", null), ___EmotionJSX(Progress, {
    size: "sm",
    valueWidth: "75%",
    label: "API Requests",
    valueText: "1,230,000/2,500,000",
    value: 100 * 1230000 / 2500000
  }), ___EmotionJSX("br", null), ___EmotionJSX(Progress, {
    size: "sm",
    valueWidth: "75%",
    label: "End-User Accounts",
    valueText: "3,500/5,000",
    value: 100 * 3500 / 5000
  }), ___EmotionJSX("br", null), ___EmotionJSX(Progress, {
    size: "sm",
    valueWidth: "75%",
    label: "8base Database Rows",
    valueText: "200,300/125,000",
    value: 100 * 200300 / 125000
  }), ___EmotionJSX("br", null), ___EmotionJSX(Progress, {
    size: "sm",
    valueWidth: "50%",
    label: "Background color",
    valueText: ___EmotionJSX("div", null, "100000 / ", ___EmotionJSX("span", {
      style: {
        fontWeight: 600
      }
    }, "125000")),
    value: 100 * 100000 / 125000,
    showSeparator: true,
    backgroundColor: "GREEN_30"
  }), ___EmotionJSX("br", null), ___EmotionJSX(Progress, {
    size: "xs",
    valueWidth: "25%",
    label: ___EmotionJSX("div", null, ___EmotionJSX("span", {
      style: {
        fontWeight: 600
      }
    }, "Developers and Administrator Accounts")),
    description: ___EmotionJSX("div", null, "+$40/mo per  additional member"),
    valueText: ___EmotionJSX("div", null, "8 / 6"),
    value: 100 * 8 / 6,
    showSeparator: true,
    backgroundColor: "RED_30"
  }), ___EmotionJSX("br", null));
};
common.story = {
  name: 'common'
};