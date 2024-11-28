import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Table } from './';
import { TableAction } from './TableAction';
describe('<Table />', function () {
  var TABLE_DATA = [{
    id: '1',
    firstName: 'Cecily'
  }, {
    id: '2',
    firstName: 'Dian'
  }, {
    id: '3',
    firstName: 'Preston'
  }, {
    id: '4',
    firstName: 'Laveta'
  }];

  var renderTableBody = function renderTableBody(client) {
    return ___EmotionJSX(Table.BodyRow, {
      columns: "repeat(6, 1fr)",
      key: client.id
    }, ___EmotionJSX(Table.BodyCell, null, client.id), ___EmotionJSX(Table.BodyCell, null, client.firstName));
  };

  it('should render table', function () {
    var wrapper = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Table, null, ___EmotionJSX(Table.Header, {
      columns: "repeat(6, 1fr)"
    }, ___EmotionJSX(Table.HeaderCell, null, "Id"), ___EmotionJSX(Table.HeaderCell, null, "Name")), ___EmotionJSX(Table.Body, {
      data: TABLE_DATA
    }, renderTableBody), ___EmotionJSX(Table.Footer, null, "Footer"))));
    expect(wrapper.find(Table.Header).at(0).find(Table.HeaderCell).at(0).text()).toBe('Id');
    expect(wrapper.find(Table.Header).at(0).find(Table.HeaderCell).at(1).text()).toBe('Name');
    expect(wrapper.find(Table.BodyRow).at(0).find(Table.BodyCell).at(0).text()).toBe('1');
    expect(wrapper.find(Table.BodyRow).at(0).find(Table.BodyCell).at(1).text()).toBe('Cecily');
    expect(wrapper.find(Table.BodyRow).at(3).find(Table.BodyCell).at(0).text()).toBe('4');
    expect(wrapper.find(Table.BodyRow).at(3).find(Table.BodyCell).at(1).text()).toBe('Laveta');
  });
  it('should call action callback', function () {
    var onActionClick = jest.fn();
    var wrapper = mount(___EmotionJSX(Table, null, ___EmotionJSX(Table.Header, {
      columns: "repeat(6, 1fr)"
    }, ___EmotionJSX(Table.HeaderCell, null, "Id"), ___EmotionJSX(Table.HeaderCell, null, "Name")), ___EmotionJSX(Table.Body, {
      data: TABLE_DATA,
      action: "Create Client",
      onActionClick: onActionClick
    }, renderTableBody)));
    expect(wrapper.find(TableAction).text()).toBe('Create Client');
    wrapper.find(TableAction).find('button').simulate('click');
    expect(onActionClick).toHaveBeenCalled();
  });
  it('should render with custom action button', function () {
    var wrapper = mount(___EmotionJSX(Table, null, ___EmotionJSX(Table.Header, {
      columns: "repeat(6, 1fr)"
    }, ___EmotionJSX(Table.HeaderCell, null, "Id"), ___EmotionJSX(Table.HeaderCell, null, "Name")), ___EmotionJSX(Table.Body, {
      data: TABLE_DATA,
      action: ___EmotionJSX("button", null, "Create Client")
    }, renderTableBody)));
    expect(wrapper.find(TableAction).text()).toBe('Create Client');
  });
  it('should render without data', function () {
    var wrapper = mount(___EmotionJSX(Table, null, ___EmotionJSX(Table.Header, {
      columns: "repeat(6, 1fr)"
    }, ___EmotionJSX(Table.HeaderCell, null, "Id"), ___EmotionJSX(Table.HeaderCell, null, "Name")), ___EmotionJSX(Table.Body, {
      data: [],
      action: ___EmotionJSX("button", null, "Create Client")
    }, renderTableBody)));
    expect(wrapper.find(Table.BodyRow)).toHaveLength(0);
    expect(wrapper.find(Table.Body).find('Icon')).toHaveLength(1);
  });
});