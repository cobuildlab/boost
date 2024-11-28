import { jsx as ___EmotionJSX } from "@emotion/core";

/* eslint-disable no-alert */
import React from 'react';
import { Avatar, Row, Column } from '../../';
export default {
  title: 'Components/Avatar',
  component: Avatar
};
export var common = function common() {
  return ___EmotionJSX(Column, {
    gap: "lg"
  }, ___EmotionJSX(Row, null, ___EmotionJSX(Avatar, null), ___EmotionJSX(Avatar, {
    firstName: "Madelyn",
    lastName: "Clantz"
  }), ___EmotionJSX(Avatar, {
    firstName: "0",
    lastName: "Wiers"
  }), ___EmotionJSX(Avatar, {
    src: "https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-1.2.1&auto=format&fit=crop&w=1930&q=80"
  }), ___EmotionJSX(Avatar, {
    src: "https://randomuser.me/api/portraits/women/17.jpg"
  })), ___EmotionJSX(Row, null, ___EmotionJSX(Avatar, {
    size: "xxl"
  }), ___EmotionJSX(Avatar, {
    size: "xl"
  }), ___EmotionJSX(Avatar, {
    size: "lg"
  }), ___EmotionJSX(Avatar, {
    size: "md"
  }), ___EmotionJSX(Avatar, {
    size: "sm"
  }), ___EmotionJSX(Avatar, {
    size: "xs"
  })), ___EmotionJSX(Row, null, ___EmotionJSX(Avatar, {
    size: "xl",
    variant: "circle"
  }), ___EmotionJSX(Avatar, {
    size: "xl",
    variant: "square"
  }), ___EmotionJSX(Avatar, {
    size: "xl",
    variant: "rounded"
  })));
};
common.story = {
  name: 'common'
};
export var withPick = function withPick() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(Row, null, ___EmotionJSX(Avatar, {
    src: "https://randomuser.me/api/portraits/women/17.jpg",
    onPick: function onPick() {
      return alert(1);
    }
  }), ___EmotionJSX(Avatar, {
    src: "https://randomuser.me/api/portraits/women/17.jpg",
    size: "xxl",
    onPick: function onPick() {
      return alert(1);
    },
    pickLabel: "Update",
    pickVariant: "fullWidth",
    variant: "rounded"
  })));
};
withPick.story = {
  name: 'with pick'
};