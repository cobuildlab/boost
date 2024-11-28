import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import renderer from 'react-test-renderer';
import { Tag } from '../';
it('As developer, I can use tag for collect common props.', function () {
  var tree = renderer.create(___EmotionJSX(Tag, {
    tagName: "div",
    onClick: function onClick() {
      return null;
    }
  }, "children"));
  expect(tree.toJSON()).toMatchSnapshot();
});
it('As developer, I can pass data attributes to the tag.', function () {
  var tree = renderer.create(___EmotionJSX(Tag, {
    tagName: "div",
    "data-attr": 10
  }));
  expect(tree.toJSON()).toMatchSnapshot();
});