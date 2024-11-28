import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Tabs } from './';
describe('<Tabs />', function () {
  it('should render Tabs', function () {
    var wrapper = mount(___EmotionJSX(Tabs, {
      defaultSelectedTabId: "1"
    }, ___EmotionJSX(Tabs.Title, {
      tabId: "1"
    }, ___EmotionJSX("div", null, "Tab-1")), ___EmotionJSX(Tabs.Title, {
      tabId: "2"
    }, ___EmotionJSX("div", null, "Tab-2")), ___EmotionJSX(Tabs.Panel, {
      tabId: "1"
    }, ___EmotionJSX("div", {
      className: "body-1"
    }, "Body-1")), ___EmotionJSX(Tabs.Panel, {
      tabId: "2"
    }, ___EmotionJSX("div", {
      className: "body-2"
    }, "Body-2"))));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render selected tab', function () {
    var wrapper = mount(___EmotionJSX(Tabs, {
      selectedTabId: "1"
    }, ___EmotionJSX(Tabs.Title, {
      tabId: "1"
    }, ___EmotionJSX("div", null, "Tab-1")), ___EmotionJSX(Tabs.Title, {
      tabId: "2"
    }, ___EmotionJSX("div", null, "Tab-2")), ___EmotionJSX(Tabs.Panel, {
      tabId: "1"
    }, ___EmotionJSX("div", {
      className: "body-1"
    }, "Body-1")), ___EmotionJSX(Tabs.Panel, {
      tabId: "2"
    }, ___EmotionJSX("div", {
      className: "body-2"
    }, "Body-2"))));
    expect(wrapper.find('.body-1').text()).toBe('Body-1');
    expect(wrapper.find('.body-2')).toHaveLength(0);
    wrapper.setProps({
      selectedTabId: '2'
    });
    expect(wrapper.find('.body-1')).toHaveLength(0);
    expect(wrapper.find('.body-2').text()).toBe('Body-2');
  });
  it('should render head as a render prop', function () {
    var wrapper = mount(___EmotionJSX(Tabs, {
      selectedTabId: "1"
    }, ___EmotionJSX(Tabs.Title, {
      tabId: "1"
    }, function (_ref) {
      var selected = _ref.selected;
      return ___EmotionJSX("div", {
        className: "head-1"
      }, "Tab-1 is ", selected && 'selected');
    }), ___EmotionJSX(Tabs.Title, {
      tabId: "2"
    }, function (_ref2) {
      var selected = _ref2.selected;
      return ___EmotionJSX("div", {
        className: "head-2"
      }, "Tab-2 is ", !selected && 'not selected');
    }), ___EmotionJSX(Tabs.Panel, {
      tabId: "1"
    }, "Body-1"), ___EmotionJSX(Tabs.Panel, {
      tabId: "2"
    }, "Body-2")));
    expect(wrapper.find('.head-1').text()).toBe('Tab-1 is selected');
    expect(wrapper.find('.head-2').text()).toBe('Tab-2 is not selected');
  });
  it('should call onSelect callback', function () {
    var onSelect = jest.fn();
    var wrapper = mount(___EmotionJSX(Tabs, {
      selectedTabId: "1",
      onSelect: onSelect
    }, ___EmotionJSX(Tabs.Title, {
      tabId: "1"
    }, ___EmotionJSX("div", null, "Tab-1")), ___EmotionJSX(Tabs.Title, {
      tabId: "2"
    }, ___EmotionJSX("div", null, "Tab-2")), ___EmotionJSX(Tabs.Panel, {
      tabId: "1"
    }, ___EmotionJSX("div", {
      className: "body-1"
    }, "Body-1")), ___EmotionJSX(Tabs.Panel, {
      tabId: "2"
    }, ___EmotionJSX("div", {
      className: "body-2"
    }, "Body-2"))));
    wrapper.find(Tabs.Title).at(0).simulate('click');
    expect(onSelect.mock.calls[0][0]).toBe('1');
    wrapper.find(Tabs.Title).at(1).simulate('click');
    expect(onSelect.mock.calls[1][0]).toBe('2');
  });
  it('should toggle tabs in statefull mode', function () {
    var wrapper = mount(___EmotionJSX(Tabs, {
      defaultSelectedTabId: "1"
    }, ___EmotionJSX(Tabs.Title, {
      tabId: "1"
    }, ___EmotionJSX("div", null, "Tab-1")), ___EmotionJSX(Tabs.Title, {
      tabId: "2"
    }, ___EmotionJSX("div", null, "Tab-2")), ___EmotionJSX(Tabs.Panel, {
      tabId: "1"
    }, ___EmotionJSX("div", {
      className: "body-1"
    }, "Body-1")), ___EmotionJSX(Tabs.Panel, {
      tabId: "2"
    }, ___EmotionJSX("div", {
      className: "body-2"
    }, "Body-2"))));
    wrapper.find(Tabs.Title).at(1).simulate('click');
    expect(wrapper.find('.body-1')).toHaveLength(0);
    expect(wrapper.find('.body-2').text()).toBe('Body-2');
    wrapper.find(Tabs.Title).at(0).simulate('click');
    expect(wrapper.find('.body-1').text()).toBe('Body-1');
    expect(wrapper.find('.body-2')).toHaveLength(0);
  });
  it('should render panels with force', function () {
    var onSelect = jest.fn();
    var wrapper = mount(___EmotionJSX(Tabs, {
      selectedTabId: "1",
      onSelect: onSelect
    }, ___EmotionJSX(Tabs.Title, {
      tabId: "1"
    }, ___EmotionJSX("div", null, "Tab-1")), ___EmotionJSX(Tabs.Title, {
      tabId: "2"
    }, ___EmotionJSX("div", null, "Tab-2")), ___EmotionJSX(Tabs.Panel, {
      tabId: "1",
      forceRender: true
    }, ___EmotionJSX("span", {
      className: "body-1"
    }, "Body-1")), ___EmotionJSX(Tabs.Panel, {
      tabId: "2",
      forceRender: true
    }, ___EmotionJSX("span", {
      className: "body-2"
    }, "Body-2"))));
    expect(wrapper.find('.body-1').text()).toBe('Body-1');
    expect(wrapper.find('.body-2').text()).toBe('Body-2');
  });
});