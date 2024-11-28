import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { InputField, Column, Grid, Icon } from '../../';
var onChange = function onChange() {
  return null;
};
export default {
  title: 'Components/InputField',
  component: InputField
};
export var common = function common() {
  return ___EmotionJSX(Grid.Layout, {
    gap: "lg",
    columns: "auto auto auto"
  }, ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Column, {
    gap: "md"
  }, ___EmotionJSX(InputField, {
    label: "Default",
    input: {
      name: 'input',
      onChange: onChange
    },
    stretch: false
  }), ___EmotionJSX(InputField, {
    label: "with placeholder",
    placeholder: "placeholder",
    input: {
      name: 'input',
      onChange: onChange
    },
    stretch: false
  }), ___EmotionJSX(InputField, {
    label: "With align center",
    input: {
      name: 'input',
      value: 'value',
      onChange: onChange
    },
    align: "center",
    stretch: false
  }), ___EmotionJSX(InputField, {
    label: "With clearable",
    clearable: true,
    input: {
      name: 'input',
      value: 'value',
      onChange: onChange
    },
    stretch: false
  }), ___EmotionJSX(InputField, {
    label: "With left icon",
    leftIcon: ___EmotionJSX(Icon, {
      name: "Search",
      size: "xs"
    }),
    input: {
      name: 'input',
      value: 'value',
      onChange: onChange
    },
    stretch: false
  }), ___EmotionJSX(InputField, {
    label: "With right icon",
    rightIcon: ___EmotionJSX(Icon, {
      name: "Alert",
      color: "DANGER",
      size: "xs"
    }),
    input: {
      name: 'input',
      value: 'value',
      onChange: onChange
    },
    stretch: false
  }), ___EmotionJSX(InputField, {
    label: "With type number",
    type: "number",
    input: {
      name: 'input',
      value: 0,
      onChange: onChange
    },
    stretch: false
  }), ___EmotionJSX(InputField, {
    label: "With stretch",
    input: {
      name: 'input',
      onChange: onChange
    }
  }))), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Column, {
    gap: "md"
  }, ___EmotionJSX(InputField, {
    label: "With note",
    input: {
      name: 'input',
      onChange: onChange
    },
    note: "Note",
    stretch: false
  }), ___EmotionJSX(InputField, {
    label: "With error",
    input: {
      name: 'input',
      onChange: onChange
    },
    meta: {
      error: 'Required',
      touched: true
    },
    stretch: false
  }), ___EmotionJSX(InputField, {
    label: "With big error",
    input: {
      name: 'input',
      onChange: onChange
    },
    meta: {
      error: 'Sadie objectation bainie painkiller archae Clinton Slavian Pinkerton echinus bearishly',
      touched: true
    },
    stretch: false
  }), ___EmotionJSX(InputField, {
    label: "Without error label",
    hideErrorLabel: true,
    hideErrorIndicator: true,
    input: {
      name: 'input',
      onChange: onChange
    },
    meta: {
      error: 'Required',
      touched: true
    },
    stretch: false
  }), ___EmotionJSX(InputField, {
    label: "With note and error",
    input: {
      name: 'input',
      onChange: onChange
    },
    note: "Note",
    meta: {
      error: 'Required',
      touched: true
    },
    stretch: false
  }), ___EmotionJSX(InputField, {
    label: "With mask",
    input: {
      name: 'input',
      value: '12',
      onChange: onChange
    },
    mask: "999-999",
    stretch: false
  }), ___EmotionJSX(InputField, {
    label: "Email",
    disabled: true,
    input: {
      name: 'input',
      value: 'hello@8base.com',
      onChange: onChange
    }
  }))), ___EmotionJSX(Grid.Box, null, ___EmotionJSX(Column, {
    gap: "md"
  }, ___EmotionJSX(InputField, {
    label: "With row direction",
    direction: "row",
    input: {
      name: 'input',
      onChange: onChange
    },
    stretch: false
  }), ___EmotionJSX(InputField, {
    label: "With custom width",
    direction: "row",
    width: 7,
    input: {
      name: 'input',
      onChange: onChange
    }
  }), ___EmotionJSX(InputField, {
    label: "With stretch and row direction",
    direction: "row",
    input: {
      name: 'input',
      onChange: onChange
    }
  }))));
};
common.story = {
  name: 'common'
};