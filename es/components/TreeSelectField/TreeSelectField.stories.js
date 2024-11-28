import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { TreeSelectField, Column } from '../../';
import { StateContainer } from '../../../storybook/StateContainer';
var OPTIONS = {
  label: 'Search me',
  value: 'searchme',
  children: [{
    label: 'Search me too',
    value: 'searchmetoo',
    children: [{
      label: 'No one can get me',
      value: 'anonymous'
    }]
  }, {
    label: 'Search me too 2',
    value: 'searchmetoo2'
  }, {
    label: 'Search me too 3',
    value: 'searchmetoo3'
  }, {
    label: 'Search me too 4',
    value: 'searchmetoo4'
  }, {
    label: 'Search me too 5',
    value: 'searchmetoo5'
  }]
};
export default {
  title: 'Components/TreeSelectField',
  component: TreeSelectField
};
export var common = function common() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(StateContainer, {
    value: [OPTIONS.children[2].value],
    withForm: true
  }, ___EmotionJSX(TreeSelectField, {
    label: "TreeSelect",
    name: "name",
    placeholder: "Select an option",
    options: OPTIONS
  })));
};
common.story = {
  name: 'common'
};