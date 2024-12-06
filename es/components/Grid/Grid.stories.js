import _styled from "@emotion/styled/base";
import { jsx as ___EmotionJSX } from "@emotion/core";
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React from 'react';
import { Grid, Column, Row } from '../../';
var ColorBlock = /*#__PURE__*/_styled('div', {
  target: "e137ef0i0"
})(function (props) {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '100px',
    minHeight: '30px',
    backgroundColor: props.color,
    border: '1px solid gray'
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZC5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUltQiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HcmlkL0dyaWQuc3Rvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBHcmlkLCBDb2x1bW4sIFJvdyB9IGZyb20gJy4uLy4uLyc7XG5cbmNvbnN0IENvbG9yQmxvY2sgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgbWluV2lkdGg6ICcxMDBweCcsXG4gIG1pbkhlaWdodDogJzMwcHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmNvbG9yLFxuICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXG59KSk7XG5cbmNvbnN0IEJvcmRlckJsb2NrID0gc3R5bGVkKCdkaXYnKSh7XG4gIGJvcmRlcjogJzFweCBzb2xpZCBncmF5Jyxcbn0pO1xuXG5jb25zdCBCbG9jayA9ICh7IGNoaWxkcmVuIH0pID0+IDxDb2xvckJsb2NrIGNvbG9yPVwiI2UyZTRlOVwiPnsgY2hpbGRyZW4gfTwvQ29sb3JCbG9jaz47XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdDb21wb25lbnRzL0dyaWQnLFxuICBjb21wb25lbnQ6IEdyaWQsXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0b3J5ID0gKCkgPT4gKFxuICA8R3JpZC5MYXlvdXQ+XG4gICAgPEdyaWQuQm94PlxuICAgICAgPEJsb2NrPjE8L0Jsb2NrPlxuICAgIDwvR3JpZC5Cb3g+XG4gICAgPEdyaWQuQm94PlxuICAgICAgPEJsb2NrPjI8L0Jsb2NrPlxuICAgIDwvR3JpZC5Cb3g+XG4gICAgPEdyaWQuQm94PlxuICAgICAgPEJsb2NrPjM8L0Jsb2NrPlxuICAgIDwvR3JpZC5Cb3g+XG4gIDwvR3JpZC5MYXlvdXQ+XG4pO1xuXG5kZWZhdWx0U3Rvcnkuc3RvcnkgPSB7XG4gIG5hbWU6ICdkZWZhdWx0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoSW5saW5lID0gKCkgPT4gKFxuICA8R3JpZC5MYXlvdXQgaW5saW5lIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgIDxHcmlkLkJveD5cbiAgICAgIDxCbG9jaz4xPC9CbG9jaz5cbiAgICA8L0dyaWQuQm94PlxuICAgIDxHcmlkLkJveD5cbiAgICAgIDxCbG9jaz4yPC9CbG9jaz5cbiAgICA8L0dyaWQuQm94PlxuICAgIDxHcmlkLkJveD5cbiAgICAgIDxCbG9jaz4zPC9CbG9jaz5cbiAgICA8L0dyaWQuQm94PlxuICA8L0dyaWQuTGF5b3V0PlxuKTtcblxud2l0aElubGluZS5zdG9yeSA9IHtcbiAgbmFtZTogJ3dpdGggaW5saW5lJyxcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoR2FwID0gKCkgPT4gKFxuICA8Q29sdW1uPlxuICAgIDxHcmlkLkxheW91dCBpbmxpbmUgZ2FwPVwibm9uZVwiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2s+bm9uZTwvQmxvY2s+XG4gICAgICA8L0dyaWQuQm94PlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2sgLz5cbiAgICAgIDwvR3JpZC5Cb3g+XG4gICAgICA8R3JpZC5Cb3g+XG4gICAgICAgIDxCbG9jayAvPlxuICAgICAgPC9HcmlkLkJveD5cbiAgICA8L0dyaWQuTGF5b3V0PlxuICAgIDxHcmlkLkxheW91dCBpbmxpbmUgZ2FwPVwieHNcIiBjb2x1bW5zPVwiYXV0byBhdXRvIGF1dG9cIj5cbiAgICAgIDxHcmlkLkJveD5cbiAgICAgICAgPEJsb2NrPnhzPC9CbG9jaz5cbiAgICAgIDwvR3JpZC5Cb3g+XG4gICAgICA8R3JpZC5Cb3g+XG4gICAgICAgIDxCbG9jayAvPlxuICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDxHcmlkLkJveD5cbiAgICAgICAgPEJsb2NrIC8+XG4gICAgICA8L0dyaWQuQm94PlxuICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPEdyaWQuTGF5b3V0IGlubGluZSBnYXA9XCJzbVwiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2s+c208L0Jsb2NrPlxuICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDxHcmlkLkJveD5cbiAgICAgICAgPEJsb2NrIC8+XG4gICAgICA8L0dyaWQuQm94PlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2sgLz5cbiAgICAgIDwvR3JpZC5Cb3g+XG4gICAgPC9HcmlkLkxheW91dD5cbiAgICA8R3JpZC5MYXlvdXQgaW5saW5lIGdhcD1cIm1kXCIgY29sdW1ucz1cImF1dG8gYXV0byBhdXRvXCI+XG4gICAgICA8R3JpZC5Cb3g+XG4gICAgICAgIDxCbG9jaz5tZDwvQmxvY2s+XG4gICAgICA8L0dyaWQuQm94PlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2sgLz5cbiAgICAgIDwvR3JpZC5Cb3g+XG4gICAgICA8R3JpZC5Cb3g+XG4gICAgICAgIDxCbG9jayAvPlxuICAgICAgPC9HcmlkLkJveD5cbiAgICA8L0dyaWQuTGF5b3V0PlxuICAgIDxHcmlkLkxheW91dCBpbmxpbmUgZ2FwPVwibGdcIiBjb2x1bW5zPVwiYXV0byBhdXRvIGF1dG9cIj5cbiAgICAgIDxHcmlkLkJveD5cbiAgICAgICAgPEJsb2NrPmxnPC9CbG9jaz5cbiAgICAgIDwvR3JpZC5Cb3g+XG4gICAgICA8R3JpZC5Cb3g+XG4gICAgICAgIDxCbG9jayAvPlxuICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDxHcmlkLkJveD5cbiAgICAgICAgPEJsb2NrIC8+XG4gICAgICA8L0dyaWQuQm94PlxuICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPEdyaWQuTGF5b3V0IGlubGluZSBnYXA9XCJ4bFwiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2s+eGw8L0Jsb2NrPlxuICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDxHcmlkLkJveD5cbiAgICAgICAgPEJsb2NrIC8+XG4gICAgICA8L0dyaWQuQm94PlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2sgLz5cbiAgICAgIDwvR3JpZC5Cb3g+XG4gICAgPC9HcmlkLkxheW91dD5cbiAgICA8R3JpZC5MYXlvdXQgaW5saW5lIGdhcD1cInh4bFwiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2s+eHhsPC9CbG9jaz5cbiAgICAgIDwvR3JpZC5Cb3g+XG4gICAgICA8R3JpZC5Cb3g+XG4gICAgICAgIDxCbG9jayAvPlxuICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDxHcmlkLkJveD5cbiAgICAgICAgPEJsb2NrIC8+XG4gICAgICA8L0dyaWQuQm94PlxuICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPEdyaWQuTGF5b3V0IGlubGluZSBnYXA9XCJjdXN0b21cIiBjdXN0b21HYXA9XCI2NHB4XCIgY29sdW1ucz1cImF1dG8gYXV0byBhdXRvXCI+XG4gICAgICA8R3JpZC5Cb3g+XG4gICAgICAgIDxCbG9jaz5jdXN0b208L0Jsb2NrPlxuICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDxHcmlkLkJveD5cbiAgICAgICAgPEJsb2NrIC8+XG4gICAgICA8L0dyaWQuQm94PlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2sgLz5cbiAgICAgIDwvR3JpZC5Cb3g+XG4gICAgPC9HcmlkLkxheW91dD5cbiAgPC9Db2x1bW4+XG4pO1xuXG53aXRoR2FwLnN0b3J5ID0ge1xuICBuYW1lOiAnd2l0aCBnYXAnLFxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhQYWRkaW5nID0gKCkgPT4gKFxuICA8Um93PlxuICAgIDxCb3JkZXJCbG9jaz5cbiAgICAgIDxHcmlkLkxheW91dCBpbmxpbmUgcGFkZGluZz1cIm5vbmVcIiBjb2x1bW5zPVwiYXV0byBhdXRvIGF1dG9cIj5cbiAgICAgICAgPEdyaWQuQm94PlxuICAgICAgICAgIDxCbG9jaz5ub25lPC9CbG9jaz5cbiAgICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPC9Cb3JkZXJCbG9jaz5cbiAgICA8Qm9yZGVyQmxvY2s+XG4gICAgICA8R3JpZC5MYXlvdXQgaW5saW5lIHBhZGRpbmc9XCJ4c1wiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgICA8R3JpZC5Cb3g+XG4gICAgICAgICAgPEJsb2NrPnhzPC9CbG9jaz5cbiAgICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPC9Cb3JkZXJCbG9jaz5cbiAgICA8Qm9yZGVyQmxvY2s+XG4gICAgICA8R3JpZC5MYXlvdXQgaW5saW5lIHBhZGRpbmc9XCJzbVwiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgICA8R3JpZC5Cb3g+XG4gICAgICAgICAgPEJsb2NrPnNtPC9CbG9jaz5cbiAgICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPC9Cb3JkZXJCbG9jaz5cbiAgICA8Qm9yZGVyQmxvY2s+XG4gICAgICA8R3JpZC5MYXlvdXQgaW5saW5lIHBhZGRpbmc9XCJtZFwiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgICA8R3JpZC5Cb3g+XG4gICAgICAgICAgPEJsb2NrPm1kPC9CbG9jaz5cbiAgICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPC9Cb3JkZXJCbG9jaz5cbiAgICA8Qm9yZGVyQmxvY2s+XG4gICAgICA8R3JpZC5MYXlvdXQgaW5saW5lIHBhZGRpbmc9XCJsZ1wiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgICA8R3JpZC5Cb3g+XG4gICAgICAgICAgPEJsb2NrPmxnPC9CbG9jaz5cbiAgICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPC9Cb3JkZXJCbG9jaz5cbiAgICA8Qm9yZGVyQmxvY2s+XG4gICAgICA8R3JpZC5MYXlvdXQgaW5saW5lIHBhZGRpbmc9XCJ4bFwiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgICA8R3JpZC5Cb3g+XG4gICAgICAgICAgPEJsb2NrPnhsPC9CbG9jaz5cbiAgICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPC9Cb3JkZXJCbG9jaz5cbiAgPC9Sb3c+XG4pO1xuXG53aXRoUGFkZGluZy5zdG9yeSA9IHtcbiAgbmFtZTogJ3dpdGggcGFkZGluZycsXG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aFN0cmV0Y2ggPSAoKSA9PiAoXG4gIDxHcmlkLkxheW91dCBjb2x1bW5zPVwiMzAwcHggbWlubWF4KDIwMHB4LCAxZnIpIDIwMHB4XCI+XG4gICAgPEdyaWQuQm94PlxuICAgICAgPEJsb2NrPjMwMHB4PC9CbG9jaz5cbiAgICA8L0dyaWQuQm94PlxuICAgIDxHcmlkLkJveD5cbiAgICAgIDxCbG9jaz5zdHJldGNoPC9CbG9jaz5cbiAgICA8L0dyaWQuQm94PlxuICAgIDxHcmlkLkJveD5cbiAgICAgIDxCbG9jaz4yMDBweDwvQmxvY2s+XG4gICAgPC9HcmlkLkJveD5cbiAgPC9HcmlkLkxheW91dD5cbik7XG5cbndpdGhTdHJldGNoLnN0b3J5ID0ge1xuICBuYW1lOiAnd2l0aCBzdHJldGNoJyxcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoR3JpZEFyZWFzID0gKCkgPT4gKFxuICA8R3JpZC5MYXlvdXRcbiAgICBjb2x1bW5zPVwiYXV0b1wiXG4gICAgYXJlYXM9eyBbXG4gICAgICBbJ2F2YXRhcicsICdpbmZvJywgJ3JhdGluZycsICdyYXRlJywgJ2FjdGlvbnMnXSxcbiAgICAgIFsnYXZhdGFyJywgJ3NraWxscycsICdza2lsbHMnLCAnc2tpbGxzJywgJ2FjdGlvbnMnXSxcbiAgICBdIH1cbiAgPlxuICAgIDxHcmlkLkJveCBhcmVhPVwiYXZhdGFyXCI+XG4gICAgICA8QmxvY2s+YXZhdGFyPC9CbG9jaz5cbiAgICA8L0dyaWQuQm94PlxuICAgIDxHcmlkLkJveCBhcmVhPVwiaW5mb1wiPlxuICAgICAgPEJsb2NrPmluZm88L0Jsb2NrPlxuICAgIDwvR3JpZC5Cb3g+XG4gICAgPEdyaWQuQm94IGFyZWE9XCJyYXRpbmdcIj5cbiAgICAgIDxCbG9jaz5yYXRpbmc8L0Jsb2NrPlxuICAgIDwvR3JpZC5Cb3g+XG4gICAgPEdyaWQuQm94IGFyZWE9XCJyYXRlXCI+XG4gICAgICA8QmxvY2s+cmF0ZTwvQmxvY2s+XG4gICAgPC9HcmlkLkJveD5cbiAgICA8R3JpZC5Cb3ggYXJlYT1cImFjdGlvbnNcIj5cbiAgICAgIDxCbG9jaz5hY3Rpb25zPC9CbG9jaz5cbiAgICA8L0dyaWQuQm94PlxuICAgIDxHcmlkLkJveCBhcmVhPVwic2tpbGxzXCI+XG4gICAgICA8QmxvY2s+c2tpbGxzPC9CbG9jaz5cbiAgICA8L0dyaWQuQm94PlxuICA8L0dyaWQuTGF5b3V0PlxuKTtcblxud2l0aEdyaWRBcmVhcy5zdG9yeSA9IHtcbiAgbmFtZTogJ3dpdGggZ3JpZCBhcmVhcycsXG59O1xuIl19 */");
var BorderBlock = /*#__PURE__*/_styled('div', {
  target: "e137ef0i1"
})(process.env.NODE_ENV === "production" ? {
  name: "1l68nnx",
  styles: "border:1px solid gray;"
} : {
  name: "1l68nnx",
  styles: "border:1px solid gray;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZC5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNvQiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HcmlkL0dyaWQuc3Rvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBHcmlkLCBDb2x1bW4sIFJvdyB9IGZyb20gJy4uLy4uLyc7XG5cbmNvbnN0IENvbG9yQmxvY2sgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgbWluV2lkdGg6ICcxMDBweCcsXG4gIG1pbkhlaWdodDogJzMwcHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmNvbG9yLFxuICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXG59KSk7XG5cbmNvbnN0IEJvcmRlckJsb2NrID0gc3R5bGVkKCdkaXYnKSh7XG4gIGJvcmRlcjogJzFweCBzb2xpZCBncmF5Jyxcbn0pO1xuXG5jb25zdCBCbG9jayA9ICh7IGNoaWxkcmVuIH0pID0+IDxDb2xvckJsb2NrIGNvbG9yPVwiI2UyZTRlOVwiPnsgY2hpbGRyZW4gfTwvQ29sb3JCbG9jaz47XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdDb21wb25lbnRzL0dyaWQnLFxuICBjb21wb25lbnQ6IEdyaWQsXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0b3J5ID0gKCkgPT4gKFxuICA8R3JpZC5MYXlvdXQ+XG4gICAgPEdyaWQuQm94PlxuICAgICAgPEJsb2NrPjE8L0Jsb2NrPlxuICAgIDwvR3JpZC5Cb3g+XG4gICAgPEdyaWQuQm94PlxuICAgICAgPEJsb2NrPjI8L0Jsb2NrPlxuICAgIDwvR3JpZC5Cb3g+XG4gICAgPEdyaWQuQm94PlxuICAgICAgPEJsb2NrPjM8L0Jsb2NrPlxuICAgIDwvR3JpZC5Cb3g+XG4gIDwvR3JpZC5MYXlvdXQ+XG4pO1xuXG5kZWZhdWx0U3Rvcnkuc3RvcnkgPSB7XG4gIG5hbWU6ICdkZWZhdWx0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoSW5saW5lID0gKCkgPT4gKFxuICA8R3JpZC5MYXlvdXQgaW5saW5lIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgIDxHcmlkLkJveD5cbiAgICAgIDxCbG9jaz4xPC9CbG9jaz5cbiAgICA8L0dyaWQuQm94PlxuICAgIDxHcmlkLkJveD5cbiAgICAgIDxCbG9jaz4yPC9CbG9jaz5cbiAgICA8L0dyaWQuQm94PlxuICAgIDxHcmlkLkJveD5cbiAgICAgIDxCbG9jaz4zPC9CbG9jaz5cbiAgICA8L0dyaWQuQm94PlxuICA8L0dyaWQuTGF5b3V0PlxuKTtcblxud2l0aElubGluZS5zdG9yeSA9IHtcbiAgbmFtZTogJ3dpdGggaW5saW5lJyxcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoR2FwID0gKCkgPT4gKFxuICA8Q29sdW1uPlxuICAgIDxHcmlkLkxheW91dCBpbmxpbmUgZ2FwPVwibm9uZVwiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2s+bm9uZTwvQmxvY2s+XG4gICAgICA8L0dyaWQuQm94PlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2sgLz5cbiAgICAgIDwvR3JpZC5Cb3g+XG4gICAgICA8R3JpZC5Cb3g+XG4gICAgICAgIDxCbG9jayAvPlxuICAgICAgPC9HcmlkLkJveD5cbiAgICA8L0dyaWQuTGF5b3V0PlxuICAgIDxHcmlkLkxheW91dCBpbmxpbmUgZ2FwPVwieHNcIiBjb2x1bW5zPVwiYXV0byBhdXRvIGF1dG9cIj5cbiAgICAgIDxHcmlkLkJveD5cbiAgICAgICAgPEJsb2NrPnhzPC9CbG9jaz5cbiAgICAgIDwvR3JpZC5Cb3g+XG4gICAgICA8R3JpZC5Cb3g+XG4gICAgICAgIDxCbG9jayAvPlxuICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDxHcmlkLkJveD5cbiAgICAgICAgPEJsb2NrIC8+XG4gICAgICA8L0dyaWQuQm94PlxuICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPEdyaWQuTGF5b3V0IGlubGluZSBnYXA9XCJzbVwiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2s+c208L0Jsb2NrPlxuICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDxHcmlkLkJveD5cbiAgICAgICAgPEJsb2NrIC8+XG4gICAgICA8L0dyaWQuQm94PlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2sgLz5cbiAgICAgIDwvR3JpZC5Cb3g+XG4gICAgPC9HcmlkLkxheW91dD5cbiAgICA8R3JpZC5MYXlvdXQgaW5saW5lIGdhcD1cIm1kXCIgY29sdW1ucz1cImF1dG8gYXV0byBhdXRvXCI+XG4gICAgICA8R3JpZC5Cb3g+XG4gICAgICAgIDxCbG9jaz5tZDwvQmxvY2s+XG4gICAgICA8L0dyaWQuQm94PlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2sgLz5cbiAgICAgIDwvR3JpZC5Cb3g+XG4gICAgICA8R3JpZC5Cb3g+XG4gICAgICAgIDxCbG9jayAvPlxuICAgICAgPC9HcmlkLkJveD5cbiAgICA8L0dyaWQuTGF5b3V0PlxuICAgIDxHcmlkLkxheW91dCBpbmxpbmUgZ2FwPVwibGdcIiBjb2x1bW5zPVwiYXV0byBhdXRvIGF1dG9cIj5cbiAgICAgIDxHcmlkLkJveD5cbiAgICAgICAgPEJsb2NrPmxnPC9CbG9jaz5cbiAgICAgIDwvR3JpZC5Cb3g+XG4gICAgICA8R3JpZC5Cb3g+XG4gICAgICAgIDxCbG9jayAvPlxuICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDxHcmlkLkJveD5cbiAgICAgICAgPEJsb2NrIC8+XG4gICAgICA8L0dyaWQuQm94PlxuICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPEdyaWQuTGF5b3V0IGlubGluZSBnYXA9XCJ4bFwiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2s+eGw8L0Jsb2NrPlxuICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDxHcmlkLkJveD5cbiAgICAgICAgPEJsb2NrIC8+XG4gICAgICA8L0dyaWQuQm94PlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2sgLz5cbiAgICAgIDwvR3JpZC5Cb3g+XG4gICAgPC9HcmlkLkxheW91dD5cbiAgICA8R3JpZC5MYXlvdXQgaW5saW5lIGdhcD1cInh4bFwiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2s+eHhsPC9CbG9jaz5cbiAgICAgIDwvR3JpZC5Cb3g+XG4gICAgICA8R3JpZC5Cb3g+XG4gICAgICAgIDxCbG9jayAvPlxuICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDxHcmlkLkJveD5cbiAgICAgICAgPEJsb2NrIC8+XG4gICAgICA8L0dyaWQuQm94PlxuICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPEdyaWQuTGF5b3V0IGlubGluZSBnYXA9XCJjdXN0b21cIiBjdXN0b21HYXA9XCI2NHB4XCIgY29sdW1ucz1cImF1dG8gYXV0byBhdXRvXCI+XG4gICAgICA8R3JpZC5Cb3g+XG4gICAgICAgIDxCbG9jaz5jdXN0b208L0Jsb2NrPlxuICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDxHcmlkLkJveD5cbiAgICAgICAgPEJsb2NrIC8+XG4gICAgICA8L0dyaWQuQm94PlxuICAgICAgPEdyaWQuQm94PlxuICAgICAgICA8QmxvY2sgLz5cbiAgICAgIDwvR3JpZC5Cb3g+XG4gICAgPC9HcmlkLkxheW91dD5cbiAgPC9Db2x1bW4+XG4pO1xuXG53aXRoR2FwLnN0b3J5ID0ge1xuICBuYW1lOiAnd2l0aCBnYXAnLFxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhQYWRkaW5nID0gKCkgPT4gKFxuICA8Um93PlxuICAgIDxCb3JkZXJCbG9jaz5cbiAgICAgIDxHcmlkLkxheW91dCBpbmxpbmUgcGFkZGluZz1cIm5vbmVcIiBjb2x1bW5zPVwiYXV0byBhdXRvIGF1dG9cIj5cbiAgICAgICAgPEdyaWQuQm94PlxuICAgICAgICAgIDxCbG9jaz5ub25lPC9CbG9jaz5cbiAgICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPC9Cb3JkZXJCbG9jaz5cbiAgICA8Qm9yZGVyQmxvY2s+XG4gICAgICA8R3JpZC5MYXlvdXQgaW5saW5lIHBhZGRpbmc9XCJ4c1wiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgICA8R3JpZC5Cb3g+XG4gICAgICAgICAgPEJsb2NrPnhzPC9CbG9jaz5cbiAgICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPC9Cb3JkZXJCbG9jaz5cbiAgICA8Qm9yZGVyQmxvY2s+XG4gICAgICA8R3JpZC5MYXlvdXQgaW5saW5lIHBhZGRpbmc9XCJzbVwiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgICA8R3JpZC5Cb3g+XG4gICAgICAgICAgPEJsb2NrPnNtPC9CbG9jaz5cbiAgICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPC9Cb3JkZXJCbG9jaz5cbiAgICA8Qm9yZGVyQmxvY2s+XG4gICAgICA8R3JpZC5MYXlvdXQgaW5saW5lIHBhZGRpbmc9XCJtZFwiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgICA8R3JpZC5Cb3g+XG4gICAgICAgICAgPEJsb2NrPm1kPC9CbG9jaz5cbiAgICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPC9Cb3JkZXJCbG9jaz5cbiAgICA8Qm9yZGVyQmxvY2s+XG4gICAgICA8R3JpZC5MYXlvdXQgaW5saW5lIHBhZGRpbmc9XCJsZ1wiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgICA8R3JpZC5Cb3g+XG4gICAgICAgICAgPEJsb2NrPmxnPC9CbG9jaz5cbiAgICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPC9Cb3JkZXJCbG9jaz5cbiAgICA8Qm9yZGVyQmxvY2s+XG4gICAgICA8R3JpZC5MYXlvdXQgaW5saW5lIHBhZGRpbmc9XCJ4bFwiIGNvbHVtbnM9XCJhdXRvIGF1dG8gYXV0b1wiPlxuICAgICAgICA8R3JpZC5Cb3g+XG4gICAgICAgICAgPEJsb2NrPnhsPC9CbG9jaz5cbiAgICAgICAgPC9HcmlkLkJveD5cbiAgICAgIDwvR3JpZC5MYXlvdXQ+XG4gICAgPC9Cb3JkZXJCbG9jaz5cbiAgPC9Sb3c+XG4pO1xuXG53aXRoUGFkZGluZy5zdG9yeSA9IHtcbiAgbmFtZTogJ3dpdGggcGFkZGluZycsXG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aFN0cmV0Y2ggPSAoKSA9PiAoXG4gIDxHcmlkLkxheW91dCBjb2x1bW5zPVwiMzAwcHggbWlubWF4KDIwMHB4LCAxZnIpIDIwMHB4XCI+XG4gICAgPEdyaWQuQm94PlxuICAgICAgPEJsb2NrPjMwMHB4PC9CbG9jaz5cbiAgICA8L0dyaWQuQm94PlxuICAgIDxHcmlkLkJveD5cbiAgICAgIDxCbG9jaz5zdHJldGNoPC9CbG9jaz5cbiAgICA8L0dyaWQuQm94PlxuICAgIDxHcmlkLkJveD5cbiAgICAgIDxCbG9jaz4yMDBweDwvQmxvY2s+XG4gICAgPC9HcmlkLkJveD5cbiAgPC9HcmlkLkxheW91dD5cbik7XG5cbndpdGhTdHJldGNoLnN0b3J5ID0ge1xuICBuYW1lOiAnd2l0aCBzdHJldGNoJyxcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoR3JpZEFyZWFzID0gKCkgPT4gKFxuICA8R3JpZC5MYXlvdXRcbiAgICBjb2x1bW5zPVwiYXV0b1wiXG4gICAgYXJlYXM9eyBbXG4gICAgICBbJ2F2YXRhcicsICdpbmZvJywgJ3JhdGluZycsICdyYXRlJywgJ2FjdGlvbnMnXSxcbiAgICAgIFsnYXZhdGFyJywgJ3NraWxscycsICdza2lsbHMnLCAnc2tpbGxzJywgJ2FjdGlvbnMnXSxcbiAgICBdIH1cbiAgPlxuICAgIDxHcmlkLkJveCBhcmVhPVwiYXZhdGFyXCI+XG4gICAgICA8QmxvY2s+YXZhdGFyPC9CbG9jaz5cbiAgICA8L0dyaWQuQm94PlxuICAgIDxHcmlkLkJveCBhcmVhPVwiaW5mb1wiPlxuICAgICAgPEJsb2NrPmluZm88L0Jsb2NrPlxuICAgIDwvR3JpZC5Cb3g+XG4gICAgPEdyaWQuQm94IGFyZWE9XCJyYXRpbmdcIj5cbiAgICAgIDxCbG9jaz5yYXRpbmc8L0Jsb2NrPlxuICAgIDwvR3JpZC5Cb3g+XG4gICAgPEdyaWQuQm94IGFyZWE9XCJyYXRlXCI+XG4gICAgICA8QmxvY2s+cmF0ZTwvQmxvY2s+XG4gICAgPC9HcmlkLkJveD5cbiAgICA8R3JpZC5Cb3ggYXJlYT1cImFjdGlvbnNcIj5cbiAgICAgIDxCbG9jaz5hY3Rpb25zPC9CbG9jaz5cbiAgICA8L0dyaWQuQm94PlxuICAgIDxHcmlkLkJveCBhcmVhPVwic2tpbGxzXCI+XG4gICAgICA8QmxvY2s+c2tpbGxzPC9CbG9jaz5cbiAgICA8L0dyaWQuQm94PlxuICA8L0dyaWQuTGF5b3V0PlxuKTtcblxud2l0aEdyaWRBcmVhcy5zdG9yeSA9IHtcbiAgbmFtZTogJ3dpdGggZ3JpZCBhcmVhcycsXG59O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Block = function Block(_ref) {
  var children = _ref.children;
  return ___EmotionJSX(ColorBlock, {
    color: "#e2e4e9"
  }, children);
};
export default {
  title: 'Components/Grid',
  component: Grid
};
export var defaultStory = function defaultStory() {
  return ___EmotionJSX(Grid.Layout, null, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "1")), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "2")), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "3")));
};
defaultStory.story = {
  name: 'default'
};
export var withInline = function withInline() {
  return ___EmotionJSX(Grid.Layout, {
    inline: true,
    columns: "auto auto auto"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "1")), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "2")), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "3")));
};
withInline.story = {
  name: 'with inline'
};
export var withGap = function withGap() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(Grid.Layout, {
    inline: true,
    gap: "none",
    columns: "auto auto auto"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "none")), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null)), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null))), ___EmotionJSX(Grid.Layout, {
    inline: true,
    gap: "xs",
    columns: "auto auto auto"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "xs")), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null)), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null))), ___EmotionJSX(Grid.Layout, {
    inline: true,
    gap: "sm",
    columns: "auto auto auto"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "sm")), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null)), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null))), ___EmotionJSX(Grid.Layout, {
    inline: true,
    gap: "md",
    columns: "auto auto auto"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "md")), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null)), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null))), ___EmotionJSX(Grid.Layout, {
    inline: true,
    gap: "lg",
    columns: "auto auto auto"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "lg")), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null)), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null))), ___EmotionJSX(Grid.Layout, {
    inline: true,
    gap: "xl",
    columns: "auto auto auto"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "xl")), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null)), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null))), ___EmotionJSX(Grid.Layout, {
    inline: true,
    gap: "xxl",
    columns: "auto auto auto"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "xxl")), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null)), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null))), ___EmotionJSX(Grid.Layout, {
    inline: true,
    gap: "custom",
    customGap: "64px",
    columns: "auto auto auto"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "custom")), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null)), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null))));
};
withGap.story = {
  name: 'with gap'
};
export var withPadding = function withPadding() {
  return ___EmotionJSX(Row, null, ___EmotionJSX(BorderBlock, null, ___EmotionJSX(Grid.Layout, {
    inline: true,
    padding: "none",
    columns: "auto auto auto"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "none")))), ___EmotionJSX(BorderBlock, null, ___EmotionJSX(Grid.Layout, {
    inline: true,
    padding: "xs",
    columns: "auto auto auto"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "xs")))), ___EmotionJSX(BorderBlock, null, ___EmotionJSX(Grid.Layout, {
    inline: true,
    padding: "sm",
    columns: "auto auto auto"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "sm")))), ___EmotionJSX(BorderBlock, null, ___EmotionJSX(Grid.Layout, {
    inline: true,
    padding: "md",
    columns: "auto auto auto"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "md")))), ___EmotionJSX(BorderBlock, null, ___EmotionJSX(Grid.Layout, {
    inline: true,
    padding: "lg",
    columns: "auto auto auto"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "lg")))), ___EmotionJSX(BorderBlock, null, ___EmotionJSX(Grid.Layout, {
    inline: true,
    padding: "xl",
    columns: "auto auto auto"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "xl")))));
};
withPadding.story = {
  name: 'with padding'
};
export var withStretch = function withStretch() {
  return ___EmotionJSX(Grid.Layout, {
    columns: "300px minmax(200px, 1fr) 200px"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "300px")), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "stretch")), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Block, null, "200px")));
};
withStretch.story = {
  name: 'with stretch'
};
export var withGridAreas = function withGridAreas() {
  return ___EmotionJSX(Grid.Layout, {
    columns: "auto",
    areas: [['avatar', 'info', 'rating', 'rate', 'actions'], ['avatar', 'skills', 'skills', 'skills', 'actions']]
  }, ___EmotionJSX(Grid.Box, {
    area: "avatar"
  }, ___EmotionJSX(Block, null, "avatar")), ___EmotionJSX(Grid.Box, {
    area: "info"
  }, ___EmotionJSX(Block, null, "info")), ___EmotionJSX(Grid.Box, {
    area: "rating"
  }, ___EmotionJSX(Block, null, "rating")), ___EmotionJSX(Grid.Box, {
    area: "rate"
  }, ___EmotionJSX(Block, null, "rate")), ___EmotionJSX(Grid.Box, {
    area: "actions"
  }, ___EmotionJSX(Block, null, "actions")), ___EmotionJSX(Grid.Box, {
    area: "skills"
  }, ___EmotionJSX(Block, null, "skills")));
};
withGridAreas.story = {
  name: 'with grid areas'
};
