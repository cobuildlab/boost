import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Form } from './';
import { ControlErrorTag } from './FormField';
describe('<Form />', function () {
  it('should shallow form', function () {
    var wrapperForm = shallow(___EmotionJSX(Form, null, ___EmotionJSX("div", null)));
    expect(wrapperForm).toMatchSnapshot();
  });
  it('should shallow form error', function () {
    var wrapperFormError = shallow(___EmotionJSX(Form.Error, {
      error: "Some error"
    }));
    expect(wrapperFormError).toMatchSnapshot();
  });
  it('should shallow form section', function () {
    var wrapperFormSection = shallow(___EmotionJSX(Form.Section, null, ___EmotionJSX("div", null)));
    expect(wrapperFormSection).toMatchSnapshot();
  });
  it('should shallow form section body', function () {
    var wrapperFormSectionBody = shallow(___EmotionJSX(Form.SectionBody, null, ___EmotionJSX("div", null)));
    expect(wrapperFormSectionBody).toMatchSnapshot();
  });
  it('should shallow form field', function () {
    var wrapperFormField = shallow(___EmotionJSX(Form.Field, {
      meta: {},
      label: "Field label"
    }));
    expect(wrapperFormField).toMatchSnapshot();
  });
  it('should render form components content', function () {
    var wrapper = mount(___EmotionJSX(BoostProvider, null, ___EmotionJSX(Form, null, ___EmotionJSX(Form.Error, {
      error: "Some error"
    }), ___EmotionJSX(Form.Section, null, ___EmotionJSX(Form.SectionTitle, null, "Some section 1"), ___EmotionJSX(Form.SectionBody, null, ___EmotionJSX(Form.Field, {
      meta: {},
      label: "Field label"
    }))), ___EmotionJSX(Form.Section, null, ___EmotionJSX(Form.SectionTitle, {
      text: "Some section 2"
    }), ___EmotionJSX(Form.SectionBody, null, ___EmotionJSX(Form.Field, {
      direction: "row",
      stretch: false,
      meta: {},
      label: "Field label"
    }))))));
    expect(wrapper.find(Form.SectionTitle).at(0).text()).toBe('Some section 1');
    expect(wrapper.find(Form.SectionTitle).at(1).text()).toBe('Some section 2');
    expect(wrapper.find(Form.Error).text()).toBe('!Some error');
  });
  it('should render form error', function () {
    var wrapper = mount(___EmotionJSX(Form.Error, {
      error: "Some error"
    }));
    expect(wrapper.find(Form.Error).text()).toBe('!Some error');
    wrapper.setProps({
      error: '',
      children: 'Another error'
    });
    expect(wrapper.find(Form.Error).text()).toBe('!Another error');
    wrapper.setProps({
      error: '',
      children: ''
    });
    expect(wrapper.find(Form.Error).props().children).toBe('');
  });
  it('should render field error', function () {
    var wrapper = mount(___EmotionJSX(Form.Field, {
      meta: {
        error: 'Field error',
        touched: true
      }
    }));
    expect(wrapper.find(ControlErrorTag).text()).toBe('Field error');
    wrapper.setProps({
      hideErrorLabel: true
    });
    expect(wrapper.find(ControlErrorTag)).toHaveLength(0);
  });
});