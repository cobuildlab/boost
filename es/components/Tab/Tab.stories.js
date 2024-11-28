import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { css } from '@emotion/core';
import { Tab, Row } from '../../';
export default {
  title: 'Components/Tab',
  component: Tab
};

var _ref = process.env.NODE_ENV === "production" ? {
  name: "7ge6ag",
  styles: "background-color:#f4f7f9;"
} : {
  name: "7ge6ag",
  styles: "background-color:#f4f7f9;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RhYi9UYWIuc3Rvcmllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhYSIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UYWIvVGFiLnN0b3JpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBUYWIsIFJvdyB9IGZyb20gJy4uLy4uLyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdDb21wb25lbnRzL1RhYicsXG4gIGNvbXBvbmVudDogVGFiLFxufTtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbiA9ICgpID0+IChcbiAgPGRpdlxuICAgIGNzcz17IGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY3Zjk7XG4gICAgYCB9XG4gID5cbiAgICA8Um93IGdhcD1cInhzXCIgb2Zmc2V0WD1cImxnXCIgb2Zmc2V0WT1cImxnXCI+XG4gICAgICA8VGFiIHRhZ05hbWU9XCJkaXZcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgQWN0aXZlIFRhYlxuICAgICAgPC9UYWI+XG4gICAgICA8VGFiIHRhZ05hbWU9XCJkaXZcIj5JbmFjdGl2ZSBUYWI8L1RhYj5cbiAgICA8L1Jvdz5cbiAgPC9kaXY+XG4pO1xuXG5jb21tb24uc3RvcnkgPSB7XG4gIG5hbWU6ICdjb21tb24nLFxufTtcbiJdfQ== */"
};

export var common = function common() {
  return ___EmotionJSX("div", {
    css: _ref
  }, ___EmotionJSX(Row, {
    gap: "xs",
    offsetX: "lg",
    offsetY: "lg"
  }, ___EmotionJSX(Tab, {
    tagName: "div",
    className: "active"
  }, "Active Tab"), ___EmotionJSX(Tab, {
    tagName: "div"
  }, "Inactive Tab")));
};
common.story = {
  name: 'common'
};