import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Form, InputField } from '../../';
var FieldMock = function FieldMock(_ref) {
  var Component = _ref.component,
    label = _ref.label,
    name = _ref.name;
  return ___EmotionJSX(Component, {
    label: label,
    input: {
      name: name
    }
  });
};
export default {
  title: 'Components/Form',
  component: Form
};
export var common = function common() {
  return ___EmotionJSX(Form, null, ___EmotionJSX(Form.Error, {
    error: "Some error"
  }), ___EmotionJSX(Form.Section, null, ___EmotionJSX(Form.SectionTitle, null, "Some section 1"), ___EmotionJSX(Form.SectionBody, null, ___EmotionJSX(FieldMock, {
    component: InputField,
    name: "curple",
    label: "Jobs"
  }), ___EmotionJSX(FieldMock, {
    component: InputField,
    name: "provect",
    label: "Posted"
  }), ___EmotionJSX(FieldMock, {
    component: InputField,
    name: "inlaying",
    label: "My Active Jobs"
  }))), ___EmotionJSX(Form.Section, null, ___EmotionJSX(Form.SectionTitle, null, "Some section 2"), ___EmotionJSX(Form.SectionBody, null, ___EmotionJSX(FieldMock, {
    component: InputField,
    name: "saccharifier",
    label: "Active Requests"
  }), ___EmotionJSX(FieldMock, {
    component: InputField,
    name: "inertance",
    label: "Applied"
  }))));
};
common.story = {
  name: 'common'
};
export var withoutGroups = function withoutGroups() {
  return ___EmotionJSX(Form, null, ___EmotionJSX(FieldMock, {
    component: InputField,
    name: "curple",
    label: "Jobs"
  }), ___EmotionJSX(FieldMock, {
    component: InputField,
    name: "provect",
    label: "Posted"
  }), ___EmotionJSX(FieldMock, {
    component: InputField,
    name: "inlaying",
    label: "My Active Jobs"
  }), ___EmotionJSX(FieldMock, {
    component: InputField,
    name: "saccharifier",
    label: "Active Requests"
  }), ___EmotionJSX(FieldMock, {
    component: InputField,
    name: "inertance",
    label: "Applied"
  }));
};
withoutGroups.story = {
  name: 'without groups'
};