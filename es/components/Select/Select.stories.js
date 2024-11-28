import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Select, Column, Icon, Row } from '../../';
import { StateContainer } from '../../../storybook/StateContainer';
var OPTIONS = [{
  label: 'ovenlike',
  value: 'ovenlike'
}, {
  label: 'serjeant',
  value: 'serjeant'
}, {
  label: 'wiseheartedly',
  value: 'wiseheartedly'
}, {
  label: 'disabled',
  value: 'disabled',
  isDisabled: true
}];
var LONG_OPTIONS = [{
  label: 'GeoglossaceaenontransportationlaemodipodiformgluttonouslyspaeworkankylorrhiniazaincarletironheartednesstopiaantiorthodoxcerebropedalSothiswhisperedbasilicaidealizeroutvaluethwackingunafraidcoiningnakfriskilyrenishlystringsman',
  value: 'ovenlike'
}, {
  label: 'backhander unpersecuted platch antisymmetrical fumaroid chromitite Microthelyphonida epigraphically myope supramechanical pageant ankle camphory nitronaphthalene thieve umquhile mornings gynomonoecism unvulgarize rickmatic saltless sternoglossal pungi pronumber',
  value: 'serjeant'
}, {
  label: 'juju tattlery nonperpetual nonexternal vocabularied umber lichenological repressure unpoled blepharosynechia peragration reduplicature acarid citizenism nongelatinizing splenoptosia unpoisoned tympanic tachogram unhardness dovetail transonic cuinage tributariness',
  value: 'wiseheartedly'
}];
export default {
  title: 'Components/Select',
  component: Select
};
export var common = function common() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(StateContainer, {
    value: null
  }, ___EmotionJSX(Select, {
    name: "name",
    placeholder: "Select an option",
    options: OPTIONS,
    stretch: false
  })), ___EmotionJSX(StateContainer, {
    value: OPTIONS[1].value
  }, ___EmotionJSX(Select, {
    name: "name",
    placeholder: "Select an option",
    options: OPTIONS,
    clearable: true
  })), ___EmotionJSX(StateContainer, {
    value: [OPTIONS[1].value, OPTIONS[2].value]
  }, ___EmotionJSX(Select, {
    name: "name",
    placeholder: "Select an option",
    options: OPTIONS,
    multiple: true
  })), ___EmotionJSX(StateContainer, {
    value: [LONG_OPTIONS[1].value]
  }, ___EmotionJSX(Select, {
    name: "name",
    placeholder: "Select an option",
    options: LONG_OPTIONS,
    multiple: true
  })), ___EmotionJSX(StateContainer, {
    value: [OPTIONS[1].value, OPTIONS[2].value]
  }, ___EmotionJSX(Select, {
    name: "name",
    placeholder: "Select an option",
    options: OPTIONS,
    components: {
      MultiValueLabel: function MultiValueLabel(_ref) {
        var children = _ref.children,
            props = _objectWithoutProperties(_ref, ["children"]);

        return ___EmotionJSX(Select.components.MultiValueLabel, props, ___EmotionJSX(Row, null, ___EmotionJSX(Icon, {
          name: "Table",
          size: "sm"
        }), ___EmotionJSX("span", null, children)));
      }
    },
    multiple: true
  })), ___EmotionJSX(StateContainer, {
    value: null
  }, ___EmotionJSX(Select, {
    name: "name",
    placeholder: "Select an option",
    options: OPTIONS,
    disabled: true
  })), ___EmotionJSX(Select, {
    name: "name",
    placeholder: "With error",
    options: OPTIONS,
    hasError: true
  }));
};
common.story = {
  name: 'common'
};