import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Column, TreeSelect } from '../../';
import { StateContainer } from '../../../storybook/StateContainer';
var OPTIONS = {
  label: 'Search me',
  value: 'searchme',
  children: [{
    label: 'Search me too',
    value: 'searchmetoo',
    children: [{
      label: 'No one can get me',
      value: 'anonymous'
    }]
  }, {
    label: 'Search me too 2',
    value: 'searchmetoo2'
  }, {
    label: 'Search me too 3',
    value: 'searchmetoo3'
  }, {
    label: 'Search me too 4',
    value: 'searchmetoo4'
  }, {
    label: 'Search me too 5',
    value: 'searchmetoo5'
  }]
};
var LONG_OPTIONS = [{
  label: 'Geoglossaceae nontransportation laemodipodiform gluttonously spaework ankylorrhinia zain carlet ironheartedness geoglossaceae nontransportation laemodipodiform gluttonously spaework ankylorrhinia zain carlet ironheartedness topia antiorthodox cerebropedal Sothis whispered basilica idealizer outvalue thwacking unafraid coining nak friskily renishly stringsman',
  value: 'ovenlike'
}, {
  label: 'backhander unpersecuted platch antisymmetrical fumaroid chromitite Microthelyphonida epigraphically myope supramechanical pageant ankle camphory nitronaphthalene thieve umquhile mornings gynomonoecism unvulgarize rickmatic saltless sternoglossal pungi pronumber',
  value: 'serjeant'
}, {
  label: 'juju tattlery nonperpetual nonexternal vocabularied umber lichenological repressure unpoled blepharosynechia peragration reduplicature acarid citizenism nongelatinizing splenoptosia unpoisoned tympanic tachogram unhardness dovetail transonic cuinage tributariness',
  value: 'wiseheartedly'
}];
export default {
  title: 'Components/TreeSelect',
  component: TreeSelect
};
export var common = function common() {
  return ___EmotionJSX(Column, null, ___EmotionJSX(StateContainer, {
    value: []
  }, function (_ref) {
    var value = _ref.value,
        _onChange = _ref.onChange;
    return ___EmotionJSX(TreeSelect, {
      value: value,
      options: OPTIONS,
      onChange: function onChange(_, selectedNodes) {
        return _onChange(selectedNodes.map(function (_ref2) {
          var value = _ref2.value;
          return value;
        }));
      }
    });
  }), ___EmotionJSX(StateContainer, {
    value: [OPTIONS.children[1].value, OPTIONS.children[2].value, OPTIONS.children[0].children[0].value]
  }, function (_ref3) {
    var value = _ref3.value,
        _onChange2 = _ref3.onChange;
    return ___EmotionJSX(TreeSelect, {
      value: value,
      options: OPTIONS,
      onChange: function onChange(_, selectedNodes) {
        return _onChange2(selectedNodes.map(function (_ref4) {
          var value = _ref4.value;
          return value;
        }));
      }
    });
  }), ___EmotionJSX(StateContainer, {
    value: [LONG_OPTIONS[0].value, LONG_OPTIONS[2].value]
  }, function (_ref5) {
    var value = _ref5.value,
        _onChange3 = _ref5.onChange;
    return ___EmotionJSX(TreeSelect, {
      value: value,
      options: LONG_OPTIONS,
      onChange: function onChange(_, selectedNodes) {
        return _onChange3(selectedNodes.map(function (_ref6) {
          var value = _ref6.value;
          return value;
        }));
      }
    });
  }));
};
common.story = {
  name: 'common'
};