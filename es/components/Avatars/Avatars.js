import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import { jsx as ___EmotionJSX } from "@emotion/core";
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: 2px solid #fff;\n  cursor: pointer;\n"]);
  _templateObject2 = function _templateObject2() {
    return data;
  };
  return data;
}
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  &:not(:first-of-type) {\n    margin-left: -10px;\n  }\n"]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
/* eslint-disable react/jsx-key */
import React from 'react';
import { css } from '@emotion/react';
import { theme, AvatarsTag, AvatarsHandleTag, AvatarsCounterTag } from './Avatars.theme';
import { Tooltip } from '../Tooltip';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
var tooltipClassName = css(_templateObject());
var avatarClassName = css(_templateObject2());
var Avatars = function Avatars(_ref) {
  var users = _ref.users,
    size = _ref.size,
    onAvatarsClick = _ref.onAvatarsClick,
    onCounterClick = _ref.onCounterClick,
    onPlusClick = _ref.onPlusClick,
    withPlusButton = _ref.withPlusButton,
    rest = _objectWithoutProperties(_ref, ["users", "size", "onAvatarsClick", "onCounterClick", "onPlusClick", "withPlusButton"]);
  return ___EmotionJSX(AvatarsTag, _extends({}, rest, {
    tagName: "div"
  }), React.Children.toArray(users.slice(0, 4).map(function (_ref2, index) {
    var firstName = _ref2.firstName,
      lastName = _ref2.lastName,
      avatarUrl = _ref2.avatarUrl;
    return ___EmotionJSX(Tooltip, {
      css: css(tooltipClassName),
      message: "".concat(firstName, " ").concat(lastName)
    }, ___EmotionJSX(Avatar, {
      onClick: onAvatarsClick,
      css: css(avatarClassName),
      style: {
        zIndex: Math.abs(index - 7)
      },
      firstName: firstName,
      lastName: lastName,
      src: avatarUrl,
      size: size
    }));
  })), users.length > 4 ? ___EmotionJSX(AvatarsCounterTag, {
    onClick: onCounterClick,
    size: size
  }, "+ ", users.length - 4) : null, !!withPlusButton ? ___EmotionJSX(AvatarsHandleTag, {
    onClick: onPlusClick,
    size: size
  }, ___EmotionJSX(Icon, {
    name: "Plus",
    size: "xs",
    color: "PRIMARY"
  })) : null);
};
Avatars.defaultProps = {
  size: 'lg'
};
export { Avatars, theme };