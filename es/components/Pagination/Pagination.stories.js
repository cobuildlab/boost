import { jsx as ___EmotionJSX } from "@emotion/core";

/* eslint-disable no-alert */
import React from 'react';
import { Pagination, Column } from '../../';
export default {
  title: 'Components/Pagination',
  component: Pagination
};
export var common = function common() {
  return ___EmotionJSX(Column, {
    gap: "lg"
  }, ___EmotionJSX(Pagination, {
    defaultPage: 1,
    total: 500
  }), ___EmotionJSX(Pagination, {
    defaultPage: 2,
    total: 500
  }), ___EmotionJSX(Pagination, {
    defaultPage: 3,
    total: 500
  }), ___EmotionJSX(Pagination, {
    defaultPage: 4,
    total: 500
  }), ___EmotionJSX(Pagination, {
    defaultPage: 5,
    total: 500
  }), ___EmotionJSX(Pagination, {
    defaultPage: 46,
    total: 500
  }), ___EmotionJSX(Pagination, {
    defaultPage: 47,
    total: 500
  }), ___EmotionJSX(Pagination, {
    defaultPage: 48,
    total: 500
  }), ___EmotionJSX(Pagination, {
    defaultPage: 49,
    total: 500
  }), ___EmotionJSX(Pagination, {
    defaultPage: 50,
    total: 500
  }), ___EmotionJSX(Pagination, {
    defaultPage: 50,
    total: 50000,
    showSizeChanger: true
  }));
};
common.story = {
  name: 'common'
};