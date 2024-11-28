import { css } from '@emotion/core';

var resetStyles = function resetStyles(_ref) {
  var FONTS = _ref.FONTS;
  return (
    /*#__PURE__*/
    css("html{-webkit-font-smoothing:antialiased;font-size:62.5% !important;}body{font-family:'Poppins',sans-serif !important;font-size:", FONTS.BODY_1.fontSize, " !important;line-height:", FONTS.BODY_1.lineHeight, " !important;font-weight:", FONTS.BODY_1.fontWeight, " !important;letter-spacing:", FONTS.BODY_1.letterSpacing, " !important;color:", FONTS.BODY_1.color, ";}*,*:after,*:before{box-sizing:border-box;}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,input,textarea,button,select,optgroup{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aGVtZS9yZXNldFN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJeUMiLCJmaWxlIjoiLi4vLi4vc3JjL3RoZW1lL3Jlc2V0U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IHJlc2V0U3R5bGVzID0gKHsgRk9OVFMgfTogKikgPT4gY3NzYFxuICBodG1sIHtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICBmb250LXNpemU6IDYyLjUlICFpbXBvcnRhbnQ7XG4gIH1cblxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAke0ZPTlRTLkJPRFlfMS5mb250U2l6ZX0gIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogJHtGT05UUy5CT0RZXzEubGluZUhlaWdodH0gIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogJHtGT05UUy5CT0RZXzEuZm9udFdlaWdodH0gIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogJHtGT05UUy5CT0RZXzEubGV0dGVyU3BhY2luZ30gIWltcG9ydGFudDtcbiAgICBjb2xvcjogJHtGT05UUy5CT0RZXzEuY29sb3J9O1xuICB9XG5cbiAgKiwgKjphZnRlciwgKjpiZWZvcmUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbiAgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuICBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG4gIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG4gIGIsIHUsIGksIGNlbnRlcixcbiAgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbiAgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG4gIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuICBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbiAgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxuICBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbiAgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvLCBpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiwgc2VsZWN0LCBvcHRncm91cCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB9XG5cbiAgYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbiAgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBvbCwgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgYmxvY2txdW90ZSwgcSB7XG4gICAgcXVvdGVzOiBub25lO1xuICB9XG4gIGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxuICBxOmJlZm9yZSwgcTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgY29udGVudDogbm9uZTtcbiAgfVxuICB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgfVxuYDtcblxuZXhwb3J0IHsgcmVzZXRTdHlsZXMgfTtcbiJdfQ== */"))
  );
};

export { resetStyles };