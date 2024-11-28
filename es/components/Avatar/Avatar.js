import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { theme, AvatarImgTag, AvatarTag, AvatarHandleTag, AvatarHandleFullWidthTag, AvatarHandleIconContainerTag } from './Avatar.theme';
import { Icon } from '../Icon';
var DEFAULT_INITIALS = 'A';
var CAMERA_ICON_SIZE = {
  xs: '8px',
  sm: '12px',
  md: '18px',
  lg: '18px',
  xl: '24px',
  xxl: '24px'
};

var getInitials = function getInitials(firstName, lastName) {
  if (firstName && lastName) return firstName.slice(0, 1) + lastName.slice(0, 1);
  if (firstName && !lastName) return firstName.slice(0, 1);
  if (!firstName && lastName) return lastName.slice(0, 1);
  return DEFAULT_INITIALS;
};

function Avatar(_ref) {
  var src = _ref.src,
      firstName = _ref.firstName,
      lastName = _ref.lastName,
      onPick = _ref.onPick,
      pickLabel = _ref.pickLabel,
      pickVariant = _ref.pickVariant,
      rest = _objectWithoutProperties(_ref, ["src", "firstName", "lastName", "onPick", "pickLabel", "pickVariant"]);

  var initials = getInitials(firstName, lastName);
  return ___EmotionJSX(AvatarTag, _extends({
    transparent: !!src,
    pickVariant: pickVariant
  }, rest, {
    firstName: firstName,
    tagName: "div"
  }), src ? ___EmotionJSX(AvatarImgTag, {
    modifiers: rest,
    tagName: "img",
    src: src
  }) : initials, onPick && pickVariant === 'bottom' && ___EmotionJSX(AvatarHandleTag, {
    modifiers: rest,
    onClick: onPick
  }, pickLabel), onPick && pickVariant === 'fullWidth' && ___EmotionJSX(AvatarHandleFullWidthTag, {
    modifiers: rest,
    onClick: onPick
  }, ___EmotionJSX(AvatarHandleIconContainerTag, {
    modifiers: rest
  }, ___EmotionJSX(Icon, {
    name: "Camera",
    color: "WHITE",
    size: "custom",
    customSize: CAMERA_ICON_SIZE[rest.size || 'lg']
  }), ___EmotionJSX("div", null, pickLabel))));
}

Avatar.defaultProps = {
  size: 'lg',
  variant: 'circle',
  pickVariant: 'bottom',
  pickLabel: 'Change'
};
export { Avatar, theme };