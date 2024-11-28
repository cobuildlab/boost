import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { Component } from 'react';
import { Radio, Column, Row } from '../../';
var RadioState = /*#__PURE__*/function (_Component) {
  _inherits(RadioState, _Component);
  function RadioState() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, RadioState);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadioState)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      value: 2
    };
    _this.changeValue = function (value) {
      return _this.setState({
        value: value
      });
    };
    return _this;
  }
  _createClass(RadioState, [{
    key: "render",
    value: function render() {
      return this.props.children({
        value: this.state.value,
        changeValue: this.changeValue
      });
    }
  }]);
  return RadioState;
}(Component);
export default {
  title: 'Components/Radio',
  component: Radio
};
export var common = function common() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(Radio.Item, {
    label: "Without selected",
    value: 1,
    selectedValue: 2
  }), ___EmotionJSX(Radio.Item, {
    label: "With selected",
    value: 1,
    selectedValue: 1
  }), ___EmotionJSX(Radio.Item, {
    label: "With disabled",
    disabled: true,
    value: 1,
    selectedValue: 1
  }));
};
common.story = {
  name: 'common'
};
export var button = function button() {
  return ___EmotionJSX(RadioState, null, function (_ref) {
    var value = _ref.value,
      changeValue = _ref.changeValue;
    return ___EmotionJSX(Radio.Group, {
      value: value,
      onChange: changeValue,
      direction: "row",
      gap: "none"
    }, ___EmotionJSX(Radio.Button, {
      label: "Radio",
      value: 1
    }), ___EmotionJSX(Radio.Button, {
      label: "Radio",
      value: 2
    }), ___EmotionJSX(Radio.Button, {
      label: "Radio",
      value: 3
    }));
  });
};
button.story = {
  name: 'button'
};
export var withCustomGap = function withCustomGap() {
  return ___EmotionJSX(Row, {
    gap: "md"
  }, ___EmotionJSX(Radio.Group, {
    value: 1,
    gap: "none"
  }, ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 1
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 2
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 3
  })), ___EmotionJSX(Radio.Group, {
    value: 1,
    gap: "xs"
  }, ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 1
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 2
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 3
  })), ___EmotionJSX(Radio.Group, {
    value: 1,
    gap: "sm"
  }, ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 1
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 2
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 3
  })), ___EmotionJSX(Radio.Group, {
    value: 1,
    gap: "md"
  }, ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 1
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 2
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 3
  })), ___EmotionJSX(Radio.Group, {
    value: 1,
    gap: "lg"
  }, ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 1
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 2
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 3
  })), ___EmotionJSX(Radio.Group, {
    value: 1,
    gap: "xl"
  }, ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 1
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 2
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 3
  })));
};
withCustomGap.story = {
  name: 'with custom gap'
};
export var withGroup = function withGroup() {
  return ___EmotionJSX(Radio.Group, {
    value: 1
  }, ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 1
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 2
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 3
  }));
};
withGroup.story = {
  name: 'with group'
};
export var withOptions = function withOptions() {
  return ___EmotionJSX(Radio.Group, {
    value: 2,
    options: [{
      label: 'Radio 1',
      value: 1
    }, {
      label: 'Radio 2',
      value: 2
    }, {
      label: 'Radio 3',
      value: 3
    }]
  });
};
withOptions.story = {
  name: 'with options'
};
export var withRowDirection = function withRowDirection() {
  return ___EmotionJSX(Radio.Group, {
    value: 1,
    direction: "row"
  }, ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 1
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 2
  }), ___EmotionJSX(Radio.Item, {
    label: "Radio",
    color: "primary",
    value: 3
  }));
};
withRowDirection.story = {
  name: 'with row direction'
};
export var withState = function withState() {
  return ___EmotionJSX(RadioState, null, function (_ref2) {
    var value = _ref2.value,
      changeValue = _ref2.changeValue;
    return ___EmotionJSX(Radio.Group, {
      value: value,
      onChange: changeValue
    }, ___EmotionJSX(Radio.Item, {
      label: "Radio",
      color: "primary",
      value: 1
    }), ___EmotionJSX(Radio.Item, {
      label: "Radio",
      color: "primary",
      value: 2
    }), ___EmotionJSX(Radio.Item, {
      label: "Radio",
      color: "primary",
      value: 3
    }));
  });
};
withState.story = {
  name: 'with state'
};