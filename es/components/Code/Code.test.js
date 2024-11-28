import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Code } from './Code';
import { CodeBodyTag, CodeNumberPlateTag } from './Code.theme';
describe('<Code />', function () {
  it('should render code with react node in children', function () {
    var wrapper = mount(___EmotionJSX(Code, null, ___EmotionJSX("span", null, "some-code")));
    expect(wrapper.find(CodeBodyTag).text()).toBe('some-code');
  });
  it('should render code with text in children', function () {
    var codeText = "\nimport React from 'react';\nimport { Code } from './Code';\n    ";
    var wrapper = mount(___EmotionJSX(Code, null, codeText));
    expect(wrapper.find(CodeBodyTag).text()).toBe(codeText);
  });
  it('should scroll code', function () {
    var codeText = "\nimport React from 'react';\nimport { Code } from './Code';\nimport React from 'react';\nimport { Code } from './Code';\nimport React from 'react';\nimport { Code } from './Code';\nimport React from 'react';\nimport { Code } from './Code';\nimport React from 'react';\nimport { Code } from './Code';\nimport React from 'react';\nimport { Code } from './Code';\nimport React from 'react';\nimport { Code } from './Code';\n    ";
    var wrapper = mount(___EmotionJSX("div", {
      style: {
        height: '50px'
      }
    }, ___EmotionJSX(Code, null, codeText)));
    wrapper.find(CodeBodyTag).getDOMNode().scrollTop = 30;
    wrapper.find(CodeBodyTag).simulate('scroll');
    expect(wrapper.find(CodeNumberPlateTag).getDOMNode().scrollTop).toBe(30);
  });
});