import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Button, Row, Column, Icon } from '../../';
export default {
  title: 'Components/Button',
  component: Button
};
export var common = function common() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(Row, null, ___EmotionJSX(Button, {
    color: "primary"
  }, "Button"), ___EmotionJSX(Button, {
    color: "danger"
  }, "Button"), ___EmotionJSX(Button, {
    color: "warning"
  }, "Button"), ___EmotionJSX(Button, {
    color: "success"
  }, "Button"), ___EmotionJSX(Button, {
    color: "neutral"
  }, "Button"), ___EmotionJSX(Button, {
    disabled: true
  }, "Button")), ___EmotionJSX(Row, null, ___EmotionJSX(Button, {
    color: "primary",
    loading: true
  }, "Button"), ___EmotionJSX(Button, {
    color: "danger",
    loading: true
  }, "Button"), ___EmotionJSX(Button, {
    color: "warning",
    loading: true
  }, "Button"), ___EmotionJSX(Button, {
    color: "success",
    loading: true
  }, "Button"), ___EmotionJSX(Button, {
    color: "neutral",
    loading: true
  }, "Button")), ___EmotionJSX(Row, null, ___EmotionJSX(Button, {
    color: "primary",
    variant: "outlined"
  }, "Button"), ___EmotionJSX(Button, {
    color: "danger",
    variant: "outlined"
  }, "Button"), ___EmotionJSX(Button, {
    color: "warning",
    variant: "outlined"
  }, "Button"), ___EmotionJSX(Button, {
    color: "success",
    variant: "outlined"
  }, "Button")), ___EmotionJSX(Row, null, ___EmotionJSX(Button, {
    color: "primary",
    variant: "outlined",
    loading: true
  }, "Button"), ___EmotionJSX(Button, {
    color: "danger",
    variant: "outlined",
    loading: true
  }, "Button"), ___EmotionJSX(Button, {
    color: "warning",
    variant: "outlined",
    loading: true
  }, "Button"), ___EmotionJSX(Button, {
    color: "success",
    variant: "outlined",
    loading: true
  }, "Button")), ___EmotionJSX(Row, null, ___EmotionJSX(Button, {
    color: "primary",
    variant: "link"
  }, "Button Link"), ___EmotionJSX(Button, {
    color: "danger",
    variant: "link"
  }, "Button Link"), ___EmotionJSX(Button, {
    color: "success",
    variant: "link"
  }, "Button Link"), ___EmotionJSX(Button, {
    color: "neutral",
    variant: "link"
  }, "Button Link"), ___EmotionJSX(Button, {
    disabled: true,
    variant: "link"
  }, "Button Link")), ___EmotionJSX(Row, null, ___EmotionJSX(Button, {
    size: "sm"
  }, "Button"), ___EmotionJSX(Button, {
    size: "md"
  }, "Button"), ___EmotionJSX(Button, {
    size: "lg"
  }, "Button")), ___EmotionJSX(Row, null, ___EmotionJSX(Button, {
    rounded: true
  }, "Button"), ___EmotionJSX(Button, {
    squared: true
  }, ___EmotionJSX(Icon, {
    name: "Trashcan"
  })), ___EmotionJSX(Button, null, ___EmotionJSX(Icon, {
    name: "Trashcan"
  }), "Delete")), ___EmotionJSX(Row, {
    style: {
      width: '100%'
    }
  }, ___EmotionJSX(Button, {
    stretch: true
  }, "Button")));
};
common.story = {
  name: 'common'
};