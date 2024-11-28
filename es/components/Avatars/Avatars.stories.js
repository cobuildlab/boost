import { jsx as ___EmotionJSX } from "@emotion/core";
/* eslint-disable no-alert */

import React from 'react';
import { Avatars, Column } from '../../';
var USERS = [{
  firstName: 'Louann',
  lastName: 'Buczek'
}, {
  firstName: 'Conrad',
  lastName: 'Mynear'
}, {
  firstName: 'Elissa',
  lastName: 'Schwarz'
}, {
  firstName: 'Marty',
  lastName: 'Normandin'
}, {
  firstName: 'Phylis',
  lastName: 'Tshudy'
}, {
  firstName: 'Eva',
  lastName: 'Rennie'
}, {
  firstName: 'Aubrey',
  lastName: 'Modrak'
}];
export default {
  title: 'Components/Avatars',
  component: Avatars
};
export var common = function common() {
  return ___EmotionJSX(Column, {
    gap: "lg"
  }, ___EmotionJSX(Avatars, {
    size: "md",
    users: USERS,
    withPlusButton: true
  }), ___EmotionJSX(Avatars, {
    users: USERS,
    withPlusButton: true
  }));
};
common.story = {
  name: 'common'
};