import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html {\n    -webkit-font-smoothing: antialiased;\n    font-size: 62.5% !important;\n  }\n\n  body {\n    font-family: 'Poppins', sans-serif !important;\n    font-size: ", " !important;\n    line-height: ", " !important;\n    font-weight: ", " !important;\n    letter-spacing: ", " !important;\n    color: ", ";\n  }\n\n  *, *:after, *:before {\n    box-sizing: border-box;\n  }\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video, input, textarea, button, select, optgroup {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n"]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
import { css } from '@emotion/react';
var resetStyles = function resetStyles(_ref) {
  var FONTS = _ref.FONTS;
  return css(_templateObject(), FONTS.BODY_1.fontSize, FONTS.BODY_1.lineHeight, FONTS.BODY_1.fontWeight, FONTS.BODY_1.letterSpacing, FONTS.BODY_1.color);
};
export { resetStyles };