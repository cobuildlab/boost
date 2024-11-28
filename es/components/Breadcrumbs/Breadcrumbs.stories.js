import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Breadcrumbs } from '../../';
var routes = [{
  path: '/',
  label: 'Dashboard'
}, {
  path: '/app',
  component: function component(_ref) {
    var param = _ref.param;
    return param;
  }
}, {
  path: '/app/settings',
  label: 'Settings'
}, {
  path: '/app/settings/security',
  label: 'Security'
}];
export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs
};
export var common = function common() {
  return ___EmotionJSX(Breadcrumbs, {
    pathname: "/app/settings/security",
    routes: routes,
    param: 1
  });
};
common.story = {
  name: 'common'
};