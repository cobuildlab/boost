// @flow

import React from 'react';
import { createStyledTag, createComponentTheme } from '../../utils';

type ScrollableProps = {|
  children: React$Node,
|};

const name = 'scrollable';

const theme = createComponentTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const ScrollableWrapper = createStyledTag(name, {
  width: '100%',
  height: '100%',
  overflowY: 'auto',
});

const ScrollableContent = createStyledTag(`${name}Content`, {
  height: '100%',
});

function Scrollable({
  children,
  ...rest
  }: ScrollableProps) {
  return (
    <ScrollableWrapper { ...rest } tagName="div">
      <ScrollableContent tagName="div">{ children }</ScrollableContent>
    </ScrollableWrapper>
  );
}

export { Scrollable, theme };