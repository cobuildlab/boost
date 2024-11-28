import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { jsx as ___EmotionJSX } from "@emotion/core";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import ReactSelect, { components } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { withTheme } from 'emotion-theming';
import { css } from '@emotion/core';
import color from 'color';
import { SelectTag } from './Select.theme';
import { COLORS, Z_INDEX } from '../../theme';
import { Tooltip } from '../Tooltip';

var customStyles = function customStyles(_ref3) {
  var hasError = _ref3.hasError,
      _ref3$zIndex = _ref3.zIndex,
      zIndex = _ref3$zIndex === void 0 ? Z_INDEX.DROPDOWN : _ref3$zIndex,
      COLORS = _ref3.COLORS;
  return {
    control: function control(style, _ref4) {
      var isFocused = _ref4.isFocused,
          isDisabled = _ref4.isDisabled;
      return _objectSpread({}, style, {
        minHeight: '36px',
        backgroundColor: isDisabled ? COLORS.DISABLED_COLOR : COLORS.WHITE,
        borderColor: hasError ? COLORS.DANGER : isFocused ? COLORS.PRIMARY : COLORS.PRIMARY_BORDER_COLOR,
        boxShadow: null,
        '&:hover': {
          borderColor: null
        }
      });
    },
    menuPortal: function menuPortal(style) {
      return _objectSpread({}, style, {
        zIndex: zIndex
      });
    },
    placeholder: function placeholder(style) {
      return _objectSpread({}, style, {
        color: COLORS.PLACEHOLDER_COLOR,
        whiteSpace: 'nowrap'
      });
    },
    indicatorSeparator: function indicatorSeparator(style) {
      return _objectSpread({}, style, {
        display: 'none'
      });
    },
    multiValue: function multiValue(style) {
      return _objectSpread({}, style, {
        borderRadius: '12px',
        padding: '0 8px',
        color: COLORS.SECONDARY_TEXT_COLOR,
        border: '1px solid #d0d7dd',
        backgroundColor: COLORS.WHITE,
        height: 26,
        alignItems: 'center'
      });
    },
    multiValueLabel: function multiValueLabel(style) {
      return _objectSpread({}, style, {
        color: 'inherit'
      });
    },
    multiValueRemove: function multiValueRemove(style) {
      return _objectSpread({}, style, {
        color: 'inherit',
        '&:hover': {
          backgroundColor: 'transparent',
          color: 'inherit',
          cursor: 'pointer'
        }
      });
    },
    dropdownIndicator: function dropdownIndicator(style) {
      return _objectSpread({}, style, {
        padding: '0 8px'
      });
    },
    clearIndicator: function clearIndicator(style) {
      return _objectSpread({}, style, {
        padding: '0 8px'
      });
    },
    option: function option(style, _ref5) {
      var isFocused = _ref5.isFocused,
          isDisabled = _ref5.isDisabled,
          isSelected = _ref5.isSelected;
      return _objectSpread({}, style, {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        backgroundColor: isDisabled ? null : isSelected ? COLORS.PRIMARY : isFocused ? color(COLORS.PRIMARY).alpha(0.1).string() : null,
        color: isDisabled ? COLORS.DISABLED_TEXT_COLOR : isSelected ? color(COLORS.PRIMARY).contrast(color(COLORS.WHITE)) > 2 ? COLORS.WHITE : COLORS.BLACK : COLORS.PRIMARY_TEXT_COLOR,
        ':active': _objectSpread({}, style[':active'], {
          backgroundColor: !isDisabled && !isSelected && color(COLORS.PRIMARY).alpha(0.3).string()
        })
      });
    }
  };
};

var _ref = process.env.NODE_ENV === "production" ? {
  name: "p3cqjb",
  styles: "display:flex;align-items:center;height:14px;"
} : {
  name: "p3cqjb",
  styles: "display:flex;align-items:center;height:14px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlbGVjdC9TZWxlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUl1QyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TZWxlY3QvU2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdFNlbGVjdCwgeyBjb21wb25lbnRzIH0gZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCBDcmVhdGFibGVTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0L2NyZWF0YWJsZSc7XG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICdlbW90aW9uLXRoZW1pbmcnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyB0eXBlIFNlcmlhbGl6ZWRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgY29sb3IgZnJvbSAnY29sb3InO1xuXG5pbXBvcnQgeyBTZWxlY3RUYWcgfSBmcm9tICcuL1NlbGVjdC50aGVtZSc7XG5pbXBvcnQgeyB0eXBlIFRoZW1lLCBDT0xPUlMsIFpfSU5ERVggfSBmcm9tICcuLi8uLi90aGVtZSc7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnLi4vVG9vbHRpcCc7XG5cbnR5cGUgU2VsZWN0UHJvcHMgPSB7fFxuICBvcHRpb25zOiBBcnJheTx7IGxhYmVsOiBtaXhlZCwgdmFsdWU6IHN0cmluZywgb3B0aW9ucz86IEFycmF5PE9iamVjdD4gfT4sXG4gIG9uQ2hhbmdlOiAodmFsdWU6IG1peGVkLCBldmVudD86IFN5bnRoZXRpY0lucHV0RXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQsXG4gIGlucHV0VmFsdWU/OiBzdHJpbmcsXG4gIG9uSW5wdXRDaGFuZ2UgPzogKHZhbHVlOiBzdHJpbmcsIGV2ZW50PzogU3ludGhldGljSW5wdXRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZCxcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmcsXG4gIHZhbHVlPzogYW55IHwgYW55W10sXG4gIGxvYWRpbmc/OiBib29sZWFuLFxuICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gIC8qIE11bHRpcGxlIHByb3AgaXMgZGVwcmVjYXRlZCAqL1xuICBtdWx0aXBsZT86IGJvb2xlYW4sXG4gIGlzTXVsdGk/OiBib29sZWFuLFxuICBjbGVhcmFibGU/OiBib29sZWFuLFxuICBoYXNFcnJvcj86IGJvb2xlYW4sXG4gIHdpdGhQb3J0YWw/OiBib29sZWFuLFxuICBtZW51SXNPcGVuPzogYm9vbGVhbixcbiAgYXV0b0ZvY3VzPzogYm9vbGVhbixcbiAgekluZGV4Pzogc3RyaW5nIHwgbnVtYmVyLFxuICB2YWx1ZUNvbXBvbmVudD86IFJlYWN0JE5vZGUsXG4gIGNvbXBvbmVudHM/OiBPYmplY3QsXG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgZm9ybWF0T3B0aW9uTGFiZWw/OiBGdW5jdGlvbixcbiAgZmlsdGVyT3B0aW9uPzogRnVuY3Rpb24sXG4gIGdldE9wdGlvblZhbHVlPzogRnVuY3Rpb24sXG4gIGdldE9wdGlvbkxhYmVsPzogRnVuY3Rpb24sXG4gIC8qKiB3aGVuIHN0cmV0Y2ggaXMgdHJ1ZSwgd2lkdGggaXMgMTAwJSAqL1xuICBzdHJldGNoPzogYm9vbGVhbixcbiAgaXNTZWFyY2hhYmxlPzogYm9vbGVhbixcbiAgY3NzPzogU2VyaWFsaXplZFN0eWxlcyxcbiAgY3JlYXRhYmxlPzogYm9vbGVhbjtcbnx9O1xuXG50eXBlIFNlbGVjdFByb3BzRnJvbUhPQ3MgPSB7fFxuICB0aGVtZTogVGhlbWVcbnx9XG5cbmNvbnN0IGN1c3RvbVN0eWxlcyA9ICh7IGhhc0Vycm9yLCB6SW5kZXggPSBaX0lOREVYLkRST1BET1dOLCBDT0xPUlMgfSkgPT4gKHtcbiAgY29udHJvbDogKHN0eWxlLCB7IGlzRm9jdXNlZCwgaXNEaXNhYmxlZCB9KSA9PiAoe1xuICAgIC4uLnN0eWxlLFxuICAgIG1pbkhlaWdodDogJzM2cHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IENPTE9SUy5ESVNBQkxFRF9DT0xPUiA6IENPTE9SUy5XSElURSxcbiAgICBib3JkZXJDb2xvcjogaGFzRXJyb3IgPyBDT0xPUlMuREFOR0VSIDogKGlzRm9jdXNlZCA/IENPTE9SUy5QUklNQVJZIDogQ09MT1JTLlBSSU1BUllfQk9SREVSX0NPTE9SKSxcbiAgICBib3hTaGFkb3c6IG51bGwsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3JkZXJDb2xvcjogbnVsbCxcbiAgICB9LFxuICB9KSxcbiAgbWVudVBvcnRhbDogKHN0eWxlKSA9PiAoe1xuICAgIC4uLnN0eWxlLFxuICAgIHpJbmRleCxcbiAgfSksXG4gIHBsYWNlaG9sZGVyOiAoc3R5bGUpID0+ICh7XG4gICAgLi4uc3R5bGUsXG4gICAgY29sb3I6IENPTE9SUy5QTEFDRUhPTERFUl9DT0xPUixcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgfSksXG4gIGluZGljYXRvclNlcGFyYXRvcjogKHN0eWxlKSA9PiAoe1xuICAgIC4uLnN0eWxlLFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgfSksXG4gIG11bHRpVmFsdWU6IChzdHlsZSkgPT4gKHtcbiAgICAuLi5zdHlsZSxcbiAgICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgIGNvbG9yOiBDT0xPUlMuU0VDT05EQVJZX1RFWFRfQ09MT1IsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkMGQ3ZGQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogQ09MT1JTLldISVRFLFxuICAgIGhlaWdodDogMjYsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH0pLFxuICBtdWx0aVZhbHVlTGFiZWw6IChzdHlsZSkgPT4gKHtcbiAgICAuLi5zdHlsZSxcbiAgICBjb2xvcjogJ2luaGVyaXQnLFxuICB9KSxcbiAgbXVsdGlWYWx1ZVJlbW92ZTogKHN0eWxlKSA9PiAoe1xuICAgIC4uLnN0eWxlLFxuICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgfSxcbiAgfSksXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiAoc3R5bGUpID0+ICh7XG4gICAgLi4uc3R5bGUsXG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgfSksXG4gIGNsZWFySW5kaWNhdG9yOiAoc3R5bGUpID0+ICh7XG4gICAgLi4uc3R5bGUsXG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgfSksXG4gIG9wdGlvbjogKHN0eWxlLCB7IGlzRm9jdXNlZCwgaXNEaXNhYmxlZCwgaXNTZWxlY3RlZCB9KSA9PiAoe1xuICAgIC4uLnN0eWxlLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkXG4gICAgICA/IG51bGxcbiAgICAgIDogaXNTZWxlY3RlZFxuICAgICAgICA/IENPTE9SUy5QUklNQVJZXG4gICAgICAgIDogaXNGb2N1c2VkXG4gICAgICAgICAgPyBjb2xvcihDT0xPUlMuUFJJTUFSWSkuYWxwaGEoMC4xKS5zdHJpbmcoKVxuICAgICAgICAgIDogbnVsbCxcbiAgICBjb2xvcjogaXNEaXNhYmxlZFxuICAgICAgPyBDT0xPUlMuRElTQUJMRURfVEVYVF9DT0xPUlxuICAgICAgOiBpc1NlbGVjdGVkXG4gICAgICAgID8gY29sb3IoQ09MT1JTLlBSSU1BUlkpLmNvbnRyYXN0KGNvbG9yKENPTE9SUy5XSElURSkpID4gMlxuICAgICAgICAgID8gQ09MT1JTLldISVRFXG4gICAgICAgICAgOiBDT0xPUlMuQkxBQ0tcbiAgICAgICAgOiBDT0xPUlMuUFJJTUFSWV9URVhUX0NPTE9SLFxuXG4gICAgJzphY3RpdmUnOiB7XG4gICAgICAuLi5zdHlsZVsnOmFjdGl2ZSddLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAhaXNEaXNhYmxlZCAmJiAhaXNTZWxlY3RlZCAmJiBjb2xvcihDT0xPUlMuUFJJTUFSWSkuYWxwaGEoMC4zKS5zdHJpbmcoKSxcbiAgICB9LFxuICB9KSxcbn0pO1xuXG5jb25zdCBNdWx0aVZhbHVlUmVtb3ZlID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUb29sdGlwIG1lc3NhZ2U9XCJSZW1vdmVcIiBjc3M9eyBjc3NgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgaGVpZ2h0OiAxNHB4O2AgfT5cbiAgICAgIDxjb21wb25lbnRzLk11bHRpVmFsdWVSZW1vdmUgeyAuLi5wcm9wcyB9IC8+XG4gICAgPC9Ub29sdGlwPlxuICApO1xufTtcblxuY29uc3QgQ2xlYXJJbmRpY2F0b3IgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRvb2x0aXAgbWVzc2FnZT1cIlJlbW92ZSBBbGxcIiBjc3M9eyBjc3NgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtgIH0+XG4gICAgICA8Y29tcG9uZW50cy5DbGVhckluZGljYXRvciB7IC4uLnByb3BzIH0gLz5cbiAgICA8L1Rvb2x0aXA+XG4gICk7XG59O1xuXG5cbmNvbnN0IGdldENyZWF0YWJsZU9wdGlvbkJ5VmFsdWUgPSAodmFsdWUpID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLm1hcCh2YWx1ZUl0ZW0gPT4gZ2V0Q3JlYXRhYmxlT3B0aW9uQnlWYWx1ZSh2YWx1ZUl0ZW0pKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWw6IHZhbHVlLFxuICAgICAgdmFsdWUsXG4gICAgfTtcbiAgfVxufTtcblxuXG5jb25zdCBnZXRPcHRpb25CeVZhbHVlID0gKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5tYXAoKHZhbHVlSXRlbSkgPT4gZ2V0T3B0aW9uQnlWYWx1ZSh2YWx1ZUl0ZW0sIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGNvbnN0IGZvdW5kT3B0aW9uID0gb3B0aW9ucy5yZWR1Y2UoKHJlc3VsdCwgb3B0aW9uKSA9PiB7XG4gICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvcHRpb24ub3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIGdldE9wdGlvbkJ5VmFsdWUodmFsdWUsIG9wdGlvbi5vcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gZm91bmRPcHRpb247XG59O1xuXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2VsZWN0UHJvcHMgJiBTZWxlY3RQcm9wc0Zyb21IT0NzPiB7XG4gIHN0YXRpYyBjb21wb25lbnRzID0gY29tcG9uZW50cztcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB3aXRoUG9ydGFsOiB0cnVlLFxuICAgIHN0cmV0Y2g6IHRydWUsXG4gIH07XG5cbiAgb25DaGFuZ2UgPSAob3B0aW9uOiBPYmplY3QpID0+IHtcbiAgICBjb25zdCB7IGlzTXVsdGkgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbikgfHwgaXNNdWx0aSkge1xuICAgICAgdmFsdWUgPSAob3B0aW9uIHx8IFtdKS5tYXAoKHsgdmFsdWUgfSkgPT4gdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAob3B0aW9uKSB7XG4gICAgICAoeyB2YWx1ZSB9ID0gb3B0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsXG4gICAgICBsb2FkaW5nLFxuICAgICAgY2xlYXJhYmxlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIGlzTXVsdGksXG4gICAgICBvcHRpb25zLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICB2YWx1ZUNvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudHMsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHdpdGhQb3J0YWwsXG4gICAgICB0aGVtZSxcbiAgICAgIGZvcm1hdE9wdGlvbkxhYmVsLFxuICAgICAgaW5wdXRWYWx1ZSxcbiAgICAgIG9uSW5wdXRDaGFuZ2UsXG4gICAgICBtZW51SXNPcGVuLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgZmlsdGVyT3B0aW9uLFxuICAgICAgZ2V0T3B0aW9uVmFsdWUsXG4gICAgICBnZXRPcHRpb25MYWJlbCxcbiAgICAgIGlzU2VhcmNoYWJsZSxcbiAgICAgIGNyZWF0YWJsZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHNlbGVjdFZhbHVlID0gY3JlYXRhYmxlID8gZ2V0Q3JlYXRhYmxlT3B0aW9uQnlWYWx1ZSh2YWx1ZSkgOiBnZXRPcHRpb25CeVZhbHVlKHZhbHVlLCBvcHRpb25zIHx8IFtdKTtcblxuICAgIGNvbnN0IFNlbGVjdENvbXBvbmVudCA9IGNyZWF0YWJsZSA/IENyZWF0YWJsZVNlbGVjdCA6IFJlYWN0U2VsZWN0O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RUYWcgeyAuLi5yZXN0IH0gYXJpYS1idXN5PXsgU3RyaW5nKGxvYWRpbmcgfHwgZmFsc2UpIH0+XG4gICAgICAgIDxTZWxlY3RDb21wb25lbnRcbiAgICAgICAgICBpc0NsZWFyYWJsZT17IGNsZWFyYWJsZSB9XG4gICAgICAgICAgaXNEaXNhYmxlZD17IGRpc2FibGVkIH1cbiAgICAgICAgICBpc0xvYWRpbmc9eyBsb2FkaW5nIH1cbiAgICAgICAgICBpc011bHRpPXsgbXVsdGlwbGUgfHwgaXNNdWx0aSB9XG4gICAgICAgICAgbWVudVBsYWNlbWVudD1cImF1dG9cIlxuICAgICAgICAgIG1lbnVQb3J0YWxUYXJnZXQ9eyB3aXRoUG9ydGFsID8gZG9jdW1lbnQuYm9keSA6IGZhbHNlIH1cbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UgfVxuICAgICAgICAgIG9wdGlvbnM9eyBvcHRpb25zIH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17IHBsYWNlaG9sZGVyIH1cbiAgICAgICAgICB2YWx1ZUNvbXBvbmVudD17IHZhbHVlQ29tcG9uZW50IH1cbiAgICAgICAgICBzdHlsZXM9eyBjdXN0b21TdHlsZXMoeyAuLi5yZXN0LCBDT0xPUlM6IHRoZW1lLkNPTE9SUyB8fCBDT0xPUlMgfSkgfVxuICAgICAgICAgIHZhbHVlPXsgc2VsZWN0VmFsdWUgfVxuICAgICAgICAgIGF1dG9Gb2N1cz17IGF1dG9Gb2N1cyB9XG4gICAgICAgICAgY29tcG9uZW50cz17eyBNdWx0aVZhbHVlUmVtb3ZlLCBDbGVhckluZGljYXRvciwgLi4uY29tcG9uZW50cyB9fVxuICAgICAgICAgIGZvcm1hdE9wdGlvbkxhYmVsPXsgZm9ybWF0T3B0aW9uTGFiZWwgfVxuICAgICAgICAgIGlucHV0VmFsdWU9eyBpbnB1dFZhbHVlIH1cbiAgICAgICAgICBvbklucHV0Q2hhbmdlPXsgb25JbnB1dENoYW5nZSB9XG4gICAgICAgICAgbWVudUlzT3Blbj17IG1lbnVJc09wZW4gfVxuICAgICAgICAgIGZpbHRlck9wdGlvbj17IGZpbHRlck9wdGlvbiB9XG4gICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyBnZXRPcHRpb25WYWx1ZSB9XG4gICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyBnZXRPcHRpb25MYWJlbCB9XG4gICAgICAgICAgaXNTZWFyY2hhYmxlPXsgaXNTZWFyY2hhYmxlIH1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VsZWN0VGFnPlxuICAgICk7XG4gIH1cbn1cblxuU2VsZWN0ID0gd2l0aFRoZW1lKFNlbGVjdCk7XG5cbmV4cG9ydCB7IFNlbGVjdCB9O1xuIl19 */"
};

var MultiValueRemove = function MultiValueRemove(props) {
  return ___EmotionJSX(Tooltip, {
    message: "Remove",
    css: _ref
  }, ___EmotionJSX(components.MultiValueRemove, props));
};

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "70qvj9",
  styles: "display:flex;align-items:center;"
} : {
  name: "70qvj9",
  styles: "display:flex;align-items:center;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlbGVjdC9TZWxlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkkyQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TZWxlY3QvU2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdFNlbGVjdCwgeyBjb21wb25lbnRzIH0gZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCBDcmVhdGFibGVTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0L2NyZWF0YWJsZSc7XG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICdlbW90aW9uLXRoZW1pbmcnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyB0eXBlIFNlcmlhbGl6ZWRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgY29sb3IgZnJvbSAnY29sb3InO1xuXG5pbXBvcnQgeyBTZWxlY3RUYWcgfSBmcm9tICcuL1NlbGVjdC50aGVtZSc7XG5pbXBvcnQgeyB0eXBlIFRoZW1lLCBDT0xPUlMsIFpfSU5ERVggfSBmcm9tICcuLi8uLi90aGVtZSc7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnLi4vVG9vbHRpcCc7XG5cbnR5cGUgU2VsZWN0UHJvcHMgPSB7fFxuICBvcHRpb25zOiBBcnJheTx7IGxhYmVsOiBtaXhlZCwgdmFsdWU6IHN0cmluZywgb3B0aW9ucz86IEFycmF5PE9iamVjdD4gfT4sXG4gIG9uQ2hhbmdlOiAodmFsdWU6IG1peGVkLCBldmVudD86IFN5bnRoZXRpY0lucHV0RXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQsXG4gIGlucHV0VmFsdWU/OiBzdHJpbmcsXG4gIG9uSW5wdXRDaGFuZ2UgPzogKHZhbHVlOiBzdHJpbmcsIGV2ZW50PzogU3ludGhldGljSW5wdXRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZCxcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmcsXG4gIHZhbHVlPzogYW55IHwgYW55W10sXG4gIGxvYWRpbmc/OiBib29sZWFuLFxuICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gIC8qIE11bHRpcGxlIHByb3AgaXMgZGVwcmVjYXRlZCAqL1xuICBtdWx0aXBsZT86IGJvb2xlYW4sXG4gIGlzTXVsdGk/OiBib29sZWFuLFxuICBjbGVhcmFibGU/OiBib29sZWFuLFxuICBoYXNFcnJvcj86IGJvb2xlYW4sXG4gIHdpdGhQb3J0YWw/OiBib29sZWFuLFxuICBtZW51SXNPcGVuPzogYm9vbGVhbixcbiAgYXV0b0ZvY3VzPzogYm9vbGVhbixcbiAgekluZGV4Pzogc3RyaW5nIHwgbnVtYmVyLFxuICB2YWx1ZUNvbXBvbmVudD86IFJlYWN0JE5vZGUsXG4gIGNvbXBvbmVudHM/OiBPYmplY3QsXG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgZm9ybWF0T3B0aW9uTGFiZWw/OiBGdW5jdGlvbixcbiAgZmlsdGVyT3B0aW9uPzogRnVuY3Rpb24sXG4gIGdldE9wdGlvblZhbHVlPzogRnVuY3Rpb24sXG4gIGdldE9wdGlvbkxhYmVsPzogRnVuY3Rpb24sXG4gIC8qKiB3aGVuIHN0cmV0Y2ggaXMgdHJ1ZSwgd2lkdGggaXMgMTAwJSAqL1xuICBzdHJldGNoPzogYm9vbGVhbixcbiAgaXNTZWFyY2hhYmxlPzogYm9vbGVhbixcbiAgY3NzPzogU2VyaWFsaXplZFN0eWxlcyxcbiAgY3JlYXRhYmxlPzogYm9vbGVhbjtcbnx9O1xuXG50eXBlIFNlbGVjdFByb3BzRnJvbUhPQ3MgPSB7fFxuICB0aGVtZTogVGhlbWVcbnx9XG5cbmNvbnN0IGN1c3RvbVN0eWxlcyA9ICh7IGhhc0Vycm9yLCB6SW5kZXggPSBaX0lOREVYLkRST1BET1dOLCBDT0xPUlMgfSkgPT4gKHtcbiAgY29udHJvbDogKHN0eWxlLCB7IGlzRm9jdXNlZCwgaXNEaXNhYmxlZCB9KSA9PiAoe1xuICAgIC4uLnN0eWxlLFxuICAgIG1pbkhlaWdodDogJzM2cHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IENPTE9SUy5ESVNBQkxFRF9DT0xPUiA6IENPTE9SUy5XSElURSxcbiAgICBib3JkZXJDb2xvcjogaGFzRXJyb3IgPyBDT0xPUlMuREFOR0VSIDogKGlzRm9jdXNlZCA/IENPTE9SUy5QUklNQVJZIDogQ09MT1JTLlBSSU1BUllfQk9SREVSX0NPTE9SKSxcbiAgICBib3hTaGFkb3c6IG51bGwsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3JkZXJDb2xvcjogbnVsbCxcbiAgICB9LFxuICB9KSxcbiAgbWVudVBvcnRhbDogKHN0eWxlKSA9PiAoe1xuICAgIC4uLnN0eWxlLFxuICAgIHpJbmRleCxcbiAgfSksXG4gIHBsYWNlaG9sZGVyOiAoc3R5bGUpID0+ICh7XG4gICAgLi4uc3R5bGUsXG4gICAgY29sb3I6IENPTE9SUy5QTEFDRUhPTERFUl9DT0xPUixcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgfSksXG4gIGluZGljYXRvclNlcGFyYXRvcjogKHN0eWxlKSA9PiAoe1xuICAgIC4uLnN0eWxlLFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgfSksXG4gIG11bHRpVmFsdWU6IChzdHlsZSkgPT4gKHtcbiAgICAuLi5zdHlsZSxcbiAgICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgIGNvbG9yOiBDT0xPUlMuU0VDT05EQVJZX1RFWFRfQ09MT1IsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkMGQ3ZGQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogQ09MT1JTLldISVRFLFxuICAgIGhlaWdodDogMjYsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH0pLFxuICBtdWx0aVZhbHVlTGFiZWw6IChzdHlsZSkgPT4gKHtcbiAgICAuLi5zdHlsZSxcbiAgICBjb2xvcjogJ2luaGVyaXQnLFxuICB9KSxcbiAgbXVsdGlWYWx1ZVJlbW92ZTogKHN0eWxlKSA9PiAoe1xuICAgIC4uLnN0eWxlLFxuICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgfSxcbiAgfSksXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiAoc3R5bGUpID0+ICh7XG4gICAgLi4uc3R5bGUsXG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgfSksXG4gIGNsZWFySW5kaWNhdG9yOiAoc3R5bGUpID0+ICh7XG4gICAgLi4uc3R5bGUsXG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgfSksXG4gIG9wdGlvbjogKHN0eWxlLCB7IGlzRm9jdXNlZCwgaXNEaXNhYmxlZCwgaXNTZWxlY3RlZCB9KSA9PiAoe1xuICAgIC4uLnN0eWxlLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkXG4gICAgICA/IG51bGxcbiAgICAgIDogaXNTZWxlY3RlZFxuICAgICAgICA/IENPTE9SUy5QUklNQVJZXG4gICAgICAgIDogaXNGb2N1c2VkXG4gICAgICAgICAgPyBjb2xvcihDT0xPUlMuUFJJTUFSWSkuYWxwaGEoMC4xKS5zdHJpbmcoKVxuICAgICAgICAgIDogbnVsbCxcbiAgICBjb2xvcjogaXNEaXNhYmxlZFxuICAgICAgPyBDT0xPUlMuRElTQUJMRURfVEVYVF9DT0xPUlxuICAgICAgOiBpc1NlbGVjdGVkXG4gICAgICAgID8gY29sb3IoQ09MT1JTLlBSSU1BUlkpLmNvbnRyYXN0KGNvbG9yKENPTE9SUy5XSElURSkpID4gMlxuICAgICAgICAgID8gQ09MT1JTLldISVRFXG4gICAgICAgICAgOiBDT0xPUlMuQkxBQ0tcbiAgICAgICAgOiBDT0xPUlMuUFJJTUFSWV9URVhUX0NPTE9SLFxuXG4gICAgJzphY3RpdmUnOiB7XG4gICAgICAuLi5zdHlsZVsnOmFjdGl2ZSddLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAhaXNEaXNhYmxlZCAmJiAhaXNTZWxlY3RlZCAmJiBjb2xvcihDT0xPUlMuUFJJTUFSWSkuYWxwaGEoMC4zKS5zdHJpbmcoKSxcbiAgICB9LFxuICB9KSxcbn0pO1xuXG5jb25zdCBNdWx0aVZhbHVlUmVtb3ZlID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUb29sdGlwIG1lc3NhZ2U9XCJSZW1vdmVcIiBjc3M9eyBjc3NgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgaGVpZ2h0OiAxNHB4O2AgfT5cbiAgICAgIDxjb21wb25lbnRzLk11bHRpVmFsdWVSZW1vdmUgeyAuLi5wcm9wcyB9IC8+XG4gICAgPC9Ub29sdGlwPlxuICApO1xufTtcblxuY29uc3QgQ2xlYXJJbmRpY2F0b3IgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRvb2x0aXAgbWVzc2FnZT1cIlJlbW92ZSBBbGxcIiBjc3M9eyBjc3NgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtgIH0+XG4gICAgICA8Y29tcG9uZW50cy5DbGVhckluZGljYXRvciB7IC4uLnByb3BzIH0gLz5cbiAgICA8L1Rvb2x0aXA+XG4gICk7XG59O1xuXG5cbmNvbnN0IGdldENyZWF0YWJsZU9wdGlvbkJ5VmFsdWUgPSAodmFsdWUpID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLm1hcCh2YWx1ZUl0ZW0gPT4gZ2V0Q3JlYXRhYmxlT3B0aW9uQnlWYWx1ZSh2YWx1ZUl0ZW0pKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWw6IHZhbHVlLFxuICAgICAgdmFsdWUsXG4gICAgfTtcbiAgfVxufTtcblxuXG5jb25zdCBnZXRPcHRpb25CeVZhbHVlID0gKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5tYXAoKHZhbHVlSXRlbSkgPT4gZ2V0T3B0aW9uQnlWYWx1ZSh2YWx1ZUl0ZW0sIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGNvbnN0IGZvdW5kT3B0aW9uID0gb3B0aW9ucy5yZWR1Y2UoKHJlc3VsdCwgb3B0aW9uKSA9PiB7XG4gICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvcHRpb24ub3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIGdldE9wdGlvbkJ5VmFsdWUodmFsdWUsIG9wdGlvbi5vcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gZm91bmRPcHRpb247XG59O1xuXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2VsZWN0UHJvcHMgJiBTZWxlY3RQcm9wc0Zyb21IT0NzPiB7XG4gIHN0YXRpYyBjb21wb25lbnRzID0gY29tcG9uZW50cztcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB3aXRoUG9ydGFsOiB0cnVlLFxuICAgIHN0cmV0Y2g6IHRydWUsXG4gIH07XG5cbiAgb25DaGFuZ2UgPSAob3B0aW9uOiBPYmplY3QpID0+IHtcbiAgICBjb25zdCB7IGlzTXVsdGkgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbikgfHwgaXNNdWx0aSkge1xuICAgICAgdmFsdWUgPSAob3B0aW9uIHx8IFtdKS5tYXAoKHsgdmFsdWUgfSkgPT4gdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAob3B0aW9uKSB7XG4gICAgICAoeyB2YWx1ZSB9ID0gb3B0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsXG4gICAgICBsb2FkaW5nLFxuICAgICAgY2xlYXJhYmxlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIGlzTXVsdGksXG4gICAgICBvcHRpb25zLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICB2YWx1ZUNvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudHMsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHdpdGhQb3J0YWwsXG4gICAgICB0aGVtZSxcbiAgICAgIGZvcm1hdE9wdGlvbkxhYmVsLFxuICAgICAgaW5wdXRWYWx1ZSxcbiAgICAgIG9uSW5wdXRDaGFuZ2UsXG4gICAgICBtZW51SXNPcGVuLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgZmlsdGVyT3B0aW9uLFxuICAgICAgZ2V0T3B0aW9uVmFsdWUsXG4gICAgICBnZXRPcHRpb25MYWJlbCxcbiAgICAgIGlzU2VhcmNoYWJsZSxcbiAgICAgIGNyZWF0YWJsZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHNlbGVjdFZhbHVlID0gY3JlYXRhYmxlID8gZ2V0Q3JlYXRhYmxlT3B0aW9uQnlWYWx1ZSh2YWx1ZSkgOiBnZXRPcHRpb25CeVZhbHVlKHZhbHVlLCBvcHRpb25zIHx8IFtdKTtcblxuICAgIGNvbnN0IFNlbGVjdENvbXBvbmVudCA9IGNyZWF0YWJsZSA/IENyZWF0YWJsZVNlbGVjdCA6IFJlYWN0U2VsZWN0O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RUYWcgeyAuLi5yZXN0IH0gYXJpYS1idXN5PXsgU3RyaW5nKGxvYWRpbmcgfHwgZmFsc2UpIH0+XG4gICAgICAgIDxTZWxlY3RDb21wb25lbnRcbiAgICAgICAgICBpc0NsZWFyYWJsZT17IGNsZWFyYWJsZSB9XG4gICAgICAgICAgaXNEaXNhYmxlZD17IGRpc2FibGVkIH1cbiAgICAgICAgICBpc0xvYWRpbmc9eyBsb2FkaW5nIH1cbiAgICAgICAgICBpc011bHRpPXsgbXVsdGlwbGUgfHwgaXNNdWx0aSB9XG4gICAgICAgICAgbWVudVBsYWNlbWVudD1cImF1dG9cIlxuICAgICAgICAgIG1lbnVQb3J0YWxUYXJnZXQ9eyB3aXRoUG9ydGFsID8gZG9jdW1lbnQuYm9keSA6IGZhbHNlIH1cbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UgfVxuICAgICAgICAgIG9wdGlvbnM9eyBvcHRpb25zIH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17IHBsYWNlaG9sZGVyIH1cbiAgICAgICAgICB2YWx1ZUNvbXBvbmVudD17IHZhbHVlQ29tcG9uZW50IH1cbiAgICAgICAgICBzdHlsZXM9eyBjdXN0b21TdHlsZXMoeyAuLi5yZXN0LCBDT0xPUlM6IHRoZW1lLkNPTE9SUyB8fCBDT0xPUlMgfSkgfVxuICAgICAgICAgIHZhbHVlPXsgc2VsZWN0VmFsdWUgfVxuICAgICAgICAgIGF1dG9Gb2N1cz17IGF1dG9Gb2N1cyB9XG4gICAgICAgICAgY29tcG9uZW50cz17eyBNdWx0aVZhbHVlUmVtb3ZlLCBDbGVhckluZGljYXRvciwgLi4uY29tcG9uZW50cyB9fVxuICAgICAgICAgIGZvcm1hdE9wdGlvbkxhYmVsPXsgZm9ybWF0T3B0aW9uTGFiZWwgfVxuICAgICAgICAgIGlucHV0VmFsdWU9eyBpbnB1dFZhbHVlIH1cbiAgICAgICAgICBvbklucHV0Q2hhbmdlPXsgb25JbnB1dENoYW5nZSB9XG4gICAgICAgICAgbWVudUlzT3Blbj17IG1lbnVJc09wZW4gfVxuICAgICAgICAgIGZpbHRlck9wdGlvbj17IGZpbHRlck9wdGlvbiB9XG4gICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyBnZXRPcHRpb25WYWx1ZSB9XG4gICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyBnZXRPcHRpb25MYWJlbCB9XG4gICAgICAgICAgaXNTZWFyY2hhYmxlPXsgaXNTZWFyY2hhYmxlIH1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VsZWN0VGFnPlxuICAgICk7XG4gIH1cbn1cblxuU2VsZWN0ID0gd2l0aFRoZW1lKFNlbGVjdCk7XG5cbmV4cG9ydCB7IFNlbGVjdCB9O1xuIl19 */"
};

var ClearIndicator = function ClearIndicator(props) {
  return ___EmotionJSX(Tooltip, {
    message: "Remove All",
    css: _ref2
  }, ___EmotionJSX(components.ClearIndicator, props));
};

var getCreatableOptionByValue = function getCreatableOptionByValue(value) {
  if (Array.isArray(value)) {
    return value.map(function (valueItem) {
      return getCreatableOptionByValue(valueItem);
    });
  } else {
    return {
      label: value,
      value: value
    };
  }
};

var getOptionByValue = function getOptionByValue(value, options) {
  if (Array.isArray(value)) {
    return value.map(function (valueItem) {
      return getOptionByValue(valueItem, options);
    });
  }

  var foundOption = options.reduce(function (result, option) {
    if (result === null) {
      if (option.value === value) {
        return option;
      } else if (Array.isArray(option.options)) {
        return getOptionByValue(value, option.options);
      }
    }

    return result;
  }, null);
  return foundOption;
};

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onChange = function (option) {
      var isMulti = _this.props.isMulti;
      var value = null;

      if (Array.isArray(option) || isMulti) {
        value = (option || []).map(function (_ref6) {
          var value = _ref6.value;
          return value;
        });
      } else if (option) {
        value = option.value;
      }

      _this.props.onChange(value);
    };

    return _this;
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          loading = _this$props.loading,
          clearable = _this$props.clearable,
          disabled = _this$props.disabled,
          multiple = _this$props.multiple,
          isMulti = _this$props.isMulti,
          options = _this$props.options,
          placeholder = _this$props.placeholder,
          valueComponent = _this$props.valueComponent,
          components = _this$props.components,
          onChange = _this$props.onChange,
          withPortal = _this$props.withPortal,
          theme = _this$props.theme,
          formatOptionLabel = _this$props.formatOptionLabel,
          inputValue = _this$props.inputValue,
          onInputChange = _this$props.onInputChange,
          menuIsOpen = _this$props.menuIsOpen,
          autoFocus = _this$props.autoFocus,
          filterOption = _this$props.filterOption,
          getOptionValue = _this$props.getOptionValue,
          getOptionLabel = _this$props.getOptionLabel,
          isSearchable = _this$props.isSearchable,
          creatable = _this$props.creatable,
          rest = _objectWithoutProperties(_this$props, ["value", "loading", "clearable", "disabled", "multiple", "isMulti", "options", "placeholder", "valueComponent", "components", "onChange", "withPortal", "theme", "formatOptionLabel", "inputValue", "onInputChange", "menuIsOpen", "autoFocus", "filterOption", "getOptionValue", "getOptionLabel", "isSearchable", "creatable"]);

      var selectValue = creatable ? getCreatableOptionByValue(value) : getOptionByValue(value, options || []);
      var SelectComponent = creatable ? CreatableSelect : ReactSelect;
      return ___EmotionJSX(SelectTag, _extends({}, rest, {
        "aria-busy": String(loading || false)
      }), ___EmotionJSX(SelectComponent, {
        isClearable: clearable,
        isDisabled: disabled,
        isLoading: loading,
        isMulti: multiple || isMulti,
        menuPlacement: "auto",
        menuPortalTarget: withPortal ? document.body : false,
        onChange: this.onChange,
        options: options,
        placeholder: placeholder,
        valueComponent: valueComponent,
        styles: customStyles(_objectSpread({}, rest, {
          COLORS: theme.COLORS || COLORS
        })),
        value: selectValue,
        autoFocus: autoFocus,
        components: _objectSpread({
          MultiValueRemove: MultiValueRemove,
          ClearIndicator: ClearIndicator
        }, components),
        formatOptionLabel: formatOptionLabel,
        inputValue: inputValue,
        onInputChange: onInputChange,
        menuIsOpen: menuIsOpen,
        filterOption: filterOption,
        getOptionValue: getOptionValue,
        getOptionLabel: getOptionLabel,
        isSearchable: isSearchable
      }));
    }
  }]);

  return Select;
}(React.Component);

Select.components = components;
Select.defaultProps = {
  withPortal: true,
  stretch: true
};
Select = withTheme(Select);
export { Select };