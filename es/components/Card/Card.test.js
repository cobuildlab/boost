import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Card } from './';
describe('<Card />', function () {
  it('should render Card components', function () {
    var wrapper = mount(___EmotionJSX(Card, {
      padding: "sm"
    }, ___EmotionJSX(Card.Header, {
      padding: "md"
    }, "Header"), ___EmotionJSX(Card.Body, {
      padding: "lg"
    }, ___EmotionJSX(Card.Section, null, "Body")), ___EmotionJSX(Card.Footer, {
      padding: "xl"
    }, "Footer")));
    expect(wrapper.find(Card.Header).text()).toBe('Header');
    expect(wrapper.find(Card.Body).text()).toBe('Body');
    expect(wrapper.find(Card.Footer).text()).toBe('Footer');
    expect(wrapper.find(Card.Header).props().padding).toBe('md');
    expect(wrapper.find(Card.Body).props().padding).toBe('lg');
    expect(wrapper.find(Card.Footer).props().padding).toBe('xl');
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Card components with render prop', function () {
    var wrapper = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Card, {
      someArg: 42,
      padding: "xl"
    }, function (_ref) {
      var someArg = _ref.someArg;
      return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(Card.Header, null, "Header"), ___EmotionJSX(Card.Body, {
        scrollable: true
      }, "Body ", someArg), ___EmotionJSX(Card.Footer, null, "Footer"));
    })));
    expect(wrapper.find(Card.Body).text()).toBe('Body 42');
  });
});