// @flow

import React from 'react';

export default (asStory: *) => {
  asStory('ATOMS/DATA ENTRY/Switch', module, (story, { Switch, Column }) => {
    story
      .add('with label', () => (
        <Column>
          <Switch label="Switch Label" value={ false } />
          <Switch label="Switch Label" value />
        </Column>
      ));
  });
};