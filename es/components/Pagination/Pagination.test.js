import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import Select from 'react-select';
import { Pagination } from './Pagination';
import { PaginationItemTag } from './Pagination.theme';
import { ButtonTag } from '../Button/Button.theme';
describe('<Pagination />', function () {
  it('should trigger onChange with next page by clicking on next button', function () {
    var onChange = jest.fn();
    var pagination = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Pagination, {
      onChange: onChange,
      defaultPage: 5,
      total: 500
    })));
    expect(pagination.text()).toMatchInlineSnapshot('"1345675041 - 50 of 500 records"');
    pagination.find(ButtonTag).at(1).simulate('click');
    expect(pagination.text()).toMatchInlineSnapshot('"1456785051 - 60 of 500 records"');
    expect(onChange.mock.calls).toEqual([[6, 10]]);
  });
  it('should trigger onChange with prev page by clicking on prev button', function () {
    var onChange = jest.fn();
    var pagination = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Pagination, {
      onChange: onChange,
      defaultPage: 5,
      total: 500
    })));
    expect(pagination.text()).toMatchInlineSnapshot('"1345675041 - 50 of 500 records"');
    pagination.find(ButtonTag).at(0).simulate('click');
    expect(pagination.text()).toMatchInlineSnapshot('"1234565031 - 40 of 500 records"');
    expect(onChange.mock.calls).toEqual([[4, 10]]);
  });
  it('should trigger onChange with last page by clicking on last page', function () {
    var onChange = jest.fn();
    var pagination = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Pagination, {
      onChange: onChange,
      defaultPage: 5,
      total: 500
    })));
    expect(pagination.text()).toMatchInlineSnapshot('"1345675041 - 50 of 500 records"');
    pagination.find(PaginationItemTag).at(8).simulate('click');
    expect(pagination.text()).toMatchInlineSnapshot('"14647484950491 - 500 of 500 records"');
    expect(onChange.mock.calls).toEqual([[50, 10]]);
  });
  it('should trigger onChange with new page size by changing page size', function () {
    var onChange = jest.fn();
    var pagination = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Pagination, {
      onChange: onChange,
      defaultPage: 5,
      total: 500,
      showSizeChanger: true
    })));
    expect(pagination.text()).toMatchInlineSnapshot('"134567501041 - 50 of 500 records"');
    pagination.find(Select).props().onChange({
      value: 20,
      label: '20'
    });
    expect(pagination.text()).toMatchInlineSnapshot('"134567252081 - 100 of 500 records"');
    expect(onChange.mock.calls).toEqual([[5, 20]]);
  });
});