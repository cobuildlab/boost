import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Input } from '../Input';

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "gqnu2z",
  styles: "& > input{border-top-right-radius:0;border-bottom-right-radius:0;}"
} : {
  name: "gqnu2z",
  styles: "& > input{border-top-right-radius:0;border-bottom-right-radius:0;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RhdGVJbnB1dC9EYXRlSW5wdXRWYWx1ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQlMiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRGF0ZUlucHV0L0RhdGVJbnB1dFZhbHVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICcuLi9JbnB1dCc7XG5cbnR5cGUgRGF0ZUlucHV0VmFsdWVQcm9wcyA9IHtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogT2JqZWN0KSA9PiB2b2lkLFxuICBvbkJsdXI6ICgpID0+IHZvaWQsXG4gIHZhbHVlOiA/c3RyaW5nLFxuICBtYXNrOiBzdHJpbmcsXG4gIGNsZWFyYWJsZT86IGJvb2xlYW4sXG4gIGRpc2FibGVkPzogYm9vbGVhbixcbn07XG5cbmNvbnN0IERhdGVJbnB1dFZhbHVlID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCAuLi5wcm9wcyB9OiBEYXRlSW5wdXRWYWx1ZVByb3BzKSA9PiAoXG4gIDxJbnB1dCBjc3M9e3sgJyYgPiBpbnB1dCc6IHsgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDAsIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAwIH19fSBvbkNoYW5nZT17ICh2YWwpID0+IG9uQ2hhbmdlKHsgdGFyZ2V0OiB7IHZhbHVlOiB2YWwgfX0pIH0gdmFsdWU9eyB2YWx1ZSB9IHsgLi4ucHJvcHMgfSAvPlxuKTtcblxuZXhwb3J0IHsgRGF0ZUlucHV0VmFsdWUgfTtcbiJdfQ== */"
};

var DateInputValue = function DateInputValue(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["value", "onChange"]);

  return ___EmotionJSX(Input, _extends({
    css: _ref2,
    onChange: function onChange(val) {
      return _onChange({
        target: {
          value: val
        }
      });
    },
    value: value
  }, props));
};

export { DateInputValue };