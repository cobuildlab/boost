import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Loader } from '../Loader';

var AsyncContent = function AsyncContent(_ref) {
  var loading = _ref.loading,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["loading", "children"]);

  if (loading) {
    return ___EmotionJSX(Loader, props);
  }

  return children;
};

export { AsyncContent };