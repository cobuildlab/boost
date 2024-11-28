import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Grid } from './';
describe('<Grid />', function () {
  it('should render grid components', function () {
    var wrapper = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Grid.Layout, {
      columns: "auto",
      rows: "auto",
      autoColumns: "auto",
      justifyContent: "center",
      alignContent: "center",
      justifyItems: "center",
      alignItems: "center",
      areas: [['avatar', 'info', 'rating', 'rate', 'actions'], ['avatar', 'skills', 'skills', 'skills', 'actions']]
    }, ___EmotionJSX(Grid.Box, null, "1"), ___EmotionJSX(Grid.Box, null, "2"), ___EmotionJSX(Grid.Box, {
      columnStart: "auto",
      columnEnd: "auto",
      rowStart: "auto",
      rowEnd: "auto",
      column: "auto",
      row: "auto",
      justifySelf: "center",
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      textAlign: "center",
      area: "avatar"
    }, "3"))));
    expect(wrapper.find(Grid.Box).at(0).text()).toBe('1');
    expect(wrapper.find(Grid.Box).at(1).text()).toBe('2');
    expect(wrapper.find(Grid.Box).at(2).text()).toBe('3');
  });
  it('should render grid box with scrollabe div', function () {
    var wrapper = shallow(___EmotionJSX(Grid.Box, {
      scrollable: true
    }));
    expect(wrapper.findWhere(function (el) {
      return el.props().style && el.props().style.position === 'absolute';
    })).toHaveLength(1);
  });
});