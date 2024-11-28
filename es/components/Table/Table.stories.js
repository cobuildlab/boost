import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { jsx as ___EmotionJSX } from "@emotion/core";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable no-alert */
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Table, TableBuilder, Link, Dropdown, Icon, Column, Text, Menu, Button, Row } from '../../';
var TABLE_COLUMNS = [{
  name: 'id',
  title: 'Id',
  width: '64px'
}, {
  name: 'createdAt',
  title: 'Created At'
}, {
  name: 'updatedAt',
  title: 'Updated At'
}, {
  name: 'firstName',
  title: 'First Name'
}, {
  name: 'lastName',
  title: 'Last Name'
}, {
  name: 'email',
  title: 'Email'
}];
var TABLE_EXPANDABLE_COLUMNS = [{
  name: 'id',
  title: 'Id',
  width: '82px'
}].concat(_toConsumableArray(TABLE_COLUMNS.slice(1)));
var TABLE_DATA = [{
  id: '1',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Cecily',
  lastName: 'Oen',
  email: 'parasol@skilfish.co.uk'
}, {
  id: '2',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Dian',
  lastName: 'Wegge',
  email: 'clinanthium@illuminize.com'
}, {
  id: '3',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Preston',
  lastName: 'Bonini',
  email: 'tiza@unlovingness.net'
}, {
  id: '4',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Laveta',
  lastName: 'Unick',
  email: 'farcist@parasyphilosis.com'
}, {
  id: '5',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Lorena',
  lastName: 'Deuman',
  email: 'leucophyllous@lobectomy.co.uk'
}, {
  id: '6',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Marilu',
  lastName: 'Weiderhold',
  email: 'stich@saeume.co.uk'
}, {
  id: '7',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Delphia',
  lastName: 'Valko',
  email: 'formel@osmotherapy.org'
}, {
  id: '8',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Cleo',
  lastName: 'Galstad',
  email: 'metalworker@cuichunchulli.net'
}, {
  id: '9',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Kenyetta',
  lastName: 'Bullington',
  email: 'turbid@trilobed.edu'
}, {
  id: '10',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Carleen',
  lastName: 'Joncas',
  email: 'orthantimonic@kingbird.edu'
}, {
  id: '11',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Providencia',
  lastName: 'Cedano',
  email: 'salsola@unduke.net'
}, {
  id: '12',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Adella',
  lastName: 'Hitchen',
  email: 'calibration@undelightfully.com'
}, {
  id: '13',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Elizabeth',
  lastName: 'Bednarik',
  email: 'thallogenic@titanomachy.edu'
}, {
  id: '14',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Georgine',
  lastName: 'Piechowski',
  email: 'quadruplator@racemulose.co.uk'
}, {
  id: '15',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Matt',
  lastName: 'Sankoh',
  email: 'browed@headstand.net'
}, {
  id: '16',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Jamie',
  lastName: 'Rosenhagen',
  email: 'trichorrhexic@venomousness.org'
}, {
  id: '17',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Kristel',
  lastName: 'Pillado',
  email: 'heteroglobulose@venedotian.org'
}, {
  id: '18',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Rosario',
  lastName: 'Saracino',
  email: 'overage@homogamic.org'
}, {
  id: '19',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Cyndy',
  lastName: 'Leta',
  email: 'deserted@infirmarer.co.uk'
}, {
  id: '20',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Dung',
  lastName: 'Turnell',
  email: 'ba@jahve.co.uk'
}, {
  id: '21',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Alexia',
  lastName: 'Bosket',
  email: 'presentationism@vuln.net'
}, {
  id: '22',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Hyon',
  lastName: 'Caillier',
  email: 'submicroscopic@dugway.net'
}, {
  id: '23',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Jeanice',
  lastName: 'Francisco',
  email: 'trinodine@shogi.co.uk'
}, {
  id: '24',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Chas',
  lastName: 'Dalrymple',
  email: 'inadaptive@brucine.net'
}, {
  id: '25',
  createdAt: '2018-09-03T09:59:46.000Z',
  updatedAt: '2018-09-03T09:59:46.000Z',
  firstName: 'Meghann',
  lastName: 'Akapo',
  email: 'monostromatic@overfavorably.com'
}, {
  id: '26',
  createdAt: '2018-09-03T09:59:46.000Z',
  updatedAt: '2018-09-03T09:59:46.000Z',
  firstName: 'Evangelina',
  lastName: 'Korner',
  email: 'maidenliness@semiflexion.co.uk'
}, {
  id: '27',
  createdAt: '2018-09-03T09:59:46.000Z',
  updatedAt: '2018-09-03T09:59:46.000Z',
  firstName: 'Kelvin',
  lastName: 'Dumlao',
  email: 'unestranged@fingered.org'
}, {
  id: '28',
  createdAt: '2018-09-03T09:59:46.000Z',
  updatedAt: '2018-09-03T09:59:46.000Z',
  firstName: 'Robt',
  lastName: 'Basse',
  email: 'hallway@unimbordered.org'
}, {
  id: '29',
  createdAt: '2018-09-03T10:34:15.000Z',
  updatedAt: '2018-09-03T10:34:15.000Z',
  firstName: 'Larry',
  lastName: 'Marwick',
  email: 'lashlite@stabber.edu'
}, {
  id: '30',
  createdAt: '2018-09-03T10:55:52.000Z',
  updatedAt: '2018-09-03T10:55:52.000Z',
  firstName: 'sadas',
  lastName: 'dsada',
  email: 'zouxuoz@gmail.com'
}];
var GROUPED_TABLE_DATA = [{
  id: '1',
  group: 'First',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Cecily',
  lastName: 'Oen',
  email: 'parasol@skilfish.co.uk'
}, {
  id: '2',
  group: 'First',
  createdAt: '2018-09-03T10:34:15.000Z',
  updatedAt: '2018-09-03T10:34:15.000Z',
  firstName: 'Larry',
  lastName: 'Marwick',
  email: 'parasol@skilfish.co.uk'
}, {
  id: '3',
  group: 'First',
  createdAt: '2018-09-03T09:59:46.000Z',
  updatedAt: '2018-09-03T09:59:46.000Z',
  firstName: 'Evangelina',
  lastName: 'Korner',
  email: 'maidenliness@semiflexion.co.uk'
}, {
  id: '4',
  group: 'Second',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Dian',
  lastName: 'Wegge',
  email: 'clinanthium@illuminize.com'
}, {
  id: '5',
  group: 'Second',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Chas',
  lastName: 'Dalrymple',
  email: 'inadaptive@brucine.net'
}, {
  id: '6',
  group: 'Third',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Preston',
  lastName: 'Bonini',
  email: 'tiza@unlovingness.net'
}, {
  id: '7',
  group: 'Third',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Chas',
  lastName: 'Dalrymple',
  email: 'inadaptive@brucine.net'
}, {
  id: '8',
  group: 'First',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Chas',
  lastName: 'Dalrymple',
  email: 'inadaptive@brucine.net'
}];

var fetchData =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(page, pageSize) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return function () {
              return new Promise(function (resolve) {
                return setTimeout(resolve, 5000);
              });
            }();

          case 2:
            return _context.abrupt("return", TABLE_DATA.slice((page - 1) * pageSize, page * pageSize));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var TableState =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableState, _React$Component);

  function TableState(props) {
    var _this;

    _classCallCheck(this, TableState);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableState).call(this, props));

    _this.setTableState = function (tableState) {
      _this.setState({
        tableState: tableState
      });
    };

    _this.state = {
      tableState: {
        pagination: {
          page: 1,
          pageSize: 10,
          total: null
        }
      },
      loading: props.async || false,
      data: []
    };
    return _this;
  }

  _createClass(TableState, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2() {
        var tableState, data;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.props.async) {
                  _context2.next = 8;
                  break;
                }

                tableState = this.state.tableState;
                _context2.next = 4;
                return fetchData(tableState.pagination.page, tableState.pagination.pageSize);

              case 4:
                data = _context2.sent;
                this.setState(function (_ref2) {
                  var tableState = _ref2.tableState;
                  return {
                    loading: false,
                    data: data,
                    tableState: _objectSpread({}, tableState, {
                      pagination: _objectSpread({}, tableState.pagination, {
                        total: TABLE_DATA.length
                      })
                    })
                  };
                });
                _context2.next = 9;
                break;

              case 8:
                this.setState(function () {
                  return {
                    data: TABLE_DATA
                  };
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee3(prevProps, _ref3) {
        var tableState, _tableState, data;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                tableState = _ref3.tableState;

                if (!(this.props.async && (this.state.tableState.pagination.page !== tableState.pagination.page || this.state.tableState.pagination.pageSize !== tableState.pagination.pageSize))) {
                  _context3.next = 8;
                  break;
                }

                this.setState(function () {
                  return {
                    loading: true
                  };
                });
                _tableState = this.state.tableState;
                _context3.next = 6;
                return fetchData(_tableState.pagination.page, _tableState.pagination.pageSize);

              case 6:
                data = _context3.sent;
                this.setState(function (_ref4) {
                  var tableState = _ref4.tableState;
                  return {
                    loading: false,
                    data: data,
                    tableState: _objectSpread({}, tableState, {
                      pagination: _objectSpread({}, tableState.pagination, {
                        total: TABLE_DATA.length
                      })
                    })
                  };
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidUpdate(_x3, _x4) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state = this.state,
          tableState = _this$state.tableState,
          loading = _this$state.loading,
          data = _this$state.data;
      return children({
        tableState: tableState,
        setTableState: this.setTableState,
        loading: loading,
        data: data
      });
    }
  }]);

  return TableState;
}(React.Component);

export default {
  title: 'Components/Table',
  component: Table
};
export var defaultStory = function defaultStory() {
  return ___EmotionJSX("div", {
    style: {
      display: 'flex',
      height: '600px'
    }
  }, ___EmotionJSX(Table, null, ___EmotionJSX(Table.Header, {
    columns: "repeat(6, 1fr)"
  }, ___EmotionJSX(Table.HeaderCell, null, "Id"), ___EmotionJSX(Table.HeaderCell, null, "Name"), ___EmotionJSX(Table.HeaderCell, null, "Email"), ___EmotionJSX(Table.HeaderCell, null, "Created At"), ___EmotionJSX(Table.HeaderCell, null, "Updated At"), ___EmotionJSX(Table.HeaderCell, null)), ___EmotionJSX(Table.Body, {
    data: TABLE_DATA,
    action: "Create Client",
    onActionClick: function onActionClick() {
      return alert('Create');
    }
  }, function (client) {
    return ___EmotionJSX(Table.BodyRow, {
      columns: "repeat(6, 1fr)",
      key: client.id
    }, ___EmotionJSX(Table.BodyCell, null, client.id), ___EmotionJSX(Table.BodyCell, null, ___EmotionJSX(Link, {
      to: "/"
    }, "".concat(client.firstName, " ").concat(client.lastName))), ___EmotionJSX(Table.BodyCell, null, client.email), ___EmotionJSX(Table.BodyCell, null, client.createdAt), ___EmotionJSX(Table.BodyCell, null, client.updatedAt), ___EmotionJSX(Table.BodyCell, null, ___EmotionJSX(Dropdown, {
      defaultOpen: false
    }, ___EmotionJSX(Dropdown.Head, null, ___EmotionJSX(Icon, {
      name: "More",
      color: "GRAY_30"
    })), ___EmotionJSX(Dropdown.Body, {
      pin: "right"
    }, ___EmotionJSX(Menu, null, ___EmotionJSX(Menu.Item, {
      onClick: function onClick() {
        return alert('Delete');
      }
    }, "Delete"))))));
  })));
};
defaultStory.story = {
  name: 'default'
};
export var grouped = function grouped() {
  return ___EmotionJSX("div", {
    style: {
      display: 'flex',
      height: '600px'
    }
  }, ___EmotionJSX(TableBuilder, {
    columns: TABLE_COLUMNS,
    data: GROUPED_TABLE_DATA,
    groupBy: function groupBy(data) {
      return data.reduce(function (acc, item) {
        if (!acc[item.group]) {
          return _objectSpread({}, acc, _defineProperty({}, item.group, [item]));
        }

        acc[item.group] = [].concat(_toConsumableArray(acc[item.group]), [item]);
        return acc;
      }, {});
    }
  }));
};
grouped.story = {
  name: 'grouped'
};
export var withLoader = function withLoader() {
  return ___EmotionJSX("div", {
    style: {
      display: 'flex',
      height: '600px'
    }
  }, ___EmotionJSX(Table, null, ___EmotionJSX(Table.Header, {
    columns: "repeat(6, 1fr)"
  }, ___EmotionJSX(Table.HeaderCell, null, "Id"), ___EmotionJSX(Table.HeaderCell, null, "Name"), ___EmotionJSX(Table.HeaderCell, null, "Email"), ___EmotionJSX(Table.HeaderCell, null, "Created At"), ___EmotionJSX(Table.HeaderCell, null, "Updated At"), ___EmotionJSX(Table.HeaderCell, null)), ___EmotionJSX(Table.Body, {
    loading: true,
    action: "Create Client",
    onActionClick: function onActionClick() {
      return alert('Create');
    }
  })));
};
withLoader.story = {
  name: 'with loader'
};
export var withoutData = function withoutData() {
  return ___EmotionJSX("div", {
    style: {
      display: 'flex',
      height: '600px'
    }
  }, ___EmotionJSX(Table, {
    stretch: true
  }, ___EmotionJSX(Table.Header, {
    columns: "repeat(6, 1fr)"
  }, ___EmotionJSX(Table.HeaderCell, null, "Id"), ___EmotionJSX(Table.HeaderCell, null, "Name"), ___EmotionJSX(Table.HeaderCell, null, "Email"), ___EmotionJSX(Table.HeaderCell, null, "Created At"), ___EmotionJSX(Table.HeaderCell, null, "Updated At"), ___EmotionJSX(Table.HeaderCell, null)), ___EmotionJSX(Table.Body, null)));
};
withoutData.story = {
  name: 'without data'
};
export var withData = function withData() {
  return ___EmotionJSX("div", {
    style: {
      display: 'flex',
      height: '600px'
    }
  }, ___EmotionJSX(Table, null, ___EmotionJSX(Table.Header, {
    columns: "repeat(6, 1fr)"
  }, ___EmotionJSX(Table.HeaderCell, null, "Id"), ___EmotionJSX(Table.HeaderCell, null, "Name"), ___EmotionJSX(Table.HeaderCell, null, "Email"), ___EmotionJSX(Table.HeaderCell, null, "Created At"), ___EmotionJSX(Table.HeaderCell, null, "Updated At"), ___EmotionJSX(Table.HeaderCell, null)), ___EmotionJSX(Table.Body, {
    data: [TABLE_DATA[0], TABLE_DATA[1]],
    action: "Create Client",
    onActionClick: function onActionClick() {
      return alert('Create');
    }
  }, function (client) {
    return ___EmotionJSX(Table.BodyRow, {
      columns: "repeat(6, 1fr)",
      key: client.id
    }, ___EmotionJSX(Table.BodyCell, null, client.id), ___EmotionJSX(Table.BodyCell, null, ___EmotionJSX(Link, {
      to: "/"
    }, "".concat(client.firstName, " ").concat(client.lastName))), ___EmotionJSX(Table.BodyCell, null, client.email), ___EmotionJSX(Table.BodyCell, null, client.createdAt), ___EmotionJSX(Table.BodyCell, null, client.updatedAt), ___EmotionJSX(Table.BodyCell, null, ___EmotionJSX(Dropdown, {
      defaultOpen: false
    }, ___EmotionJSX(Dropdown.Head, null, ___EmotionJSX(Icon, {
      name: "More",
      color: "GRAY_30"
    })), ___EmotionJSX(Dropdown.Body, {
      pin: "right"
    }, ___EmotionJSX(Menu, null, ___EmotionJSX(Menu.Item, {
      onClick: function onClick() {
        return alert('Delete');
      }
    }, "Delete"))))));
  })));
};
withData.story = {
  name: 'with data'
};
export var withCustomActionButton = function withCustomActionButton() {
  return ___EmotionJSX("div", {
    style: {
      display: 'flex',
      height: '600px'
    }
  }, ___EmotionJSX(Table, {
    stretch: true
  }, ___EmotionJSX(Table.Header, {
    columns: "repeat(6, 1fr)"
  }, ___EmotionJSX(Table.HeaderCell, null, "Id"), ___EmotionJSX(Table.HeaderCell, null, "Name"), ___EmotionJSX(Table.HeaderCell, null, "Email"), ___EmotionJSX(Table.HeaderCell, null, "Created At"), ___EmotionJSX(Table.HeaderCell, null, "Updated At"), ___EmotionJSX(Table.HeaderCell, null)), ___EmotionJSX(Table.Body, {
    action: ___EmotionJSX(Button, {
      color: "success",
      variant: "outlined",
      onClick: function onClick() {
        return alert('Create');
      }
    }, "Create Client")
  })));
};
withCustomActionButton.story = {
  name: 'with custom action button'
};
export var withSort = function withSort() {
  return ___EmotionJSX("div", {
    style: {
      display: 'flex',
      height: '600px'
    }
  }, ___EmotionJSX(TableState, null, function (_ref5) {
    var tableState = _ref5.tableState,
        setTableState = _ref5.setTableState;
    return ___EmotionJSX(TableBuilder, {
      columns: TABLE_COLUMNS,
      data: TABLE_DATA,
      action: "Create Client",
      onActionClick: function onActionClick() {
        return alert('Create');
      },
      onChange: setTableState,
      tableState: tableState,
      withMultipleSort: true
    });
  }));
};
withSort.story = {
  name: 'with sort'
};
export var withSelectionStory = function withSelectionStory() {
  return ___EmotionJSX("div", {
    style: {
      display: 'flex',
      height: '600px'
    }
  }, ___EmotionJSX(TableState, null, function (_ref6) {
    var tableState = _ref6.tableState,
        setTableState = _ref6.setTableState;
    return ___EmotionJSX(TableBuilder, {
      columns: TABLE_COLUMNS,
      data: TABLE_DATA,
      action: "Create Client",
      onActionClick: function onActionClick() {
        return alert('Create');
      },
      onChange: setTableState,
      tableState: tableState,
      withSelection: true
    });
  }));
};
withSelectionStory.story = {
  name: 'with selection'
};
export var withPaginationStory = function withPaginationStory() {
  return ___EmotionJSX("div", {
    style: {
      display: 'flex',
      height: '600px'
    }
  }, ___EmotionJSX(TableState, {
    async: true
  }, function (_ref7) {
    var tableState = _ref7.tableState,
        setTableState = _ref7.setTableState,
        loading = _ref7.loading,
        data = _ref7.data;
    return ___EmotionJSX(TableBuilder, {
      columns: TABLE_COLUMNS,
      data: data,
      action: "Create Client",
      onActionClick: function onActionClick() {
        return alert('Create');
      },
      onChange: setTableState,
      tableState: tableState,
      withPagination: true,
      withSelection: true,
      loading: loading
    });
  }));
};
withPaginationStory.story = {
  name: 'with pagination'
};
export var withCondensedModifier = function withCondensedModifier() {
  return ___EmotionJSX("div", {
    style: {
      display: 'flex',
      height: '600px'
    }
  }, ___EmotionJSX(TableState, null, function (_ref8) {
    var tableState = _ref8.tableState,
        setTableState = _ref8.setTableState;
    return ___EmotionJSX(TableBuilder, {
      columns: TABLE_COLUMNS,
      data: TABLE_DATA,
      action: "Create Client",
      onActionClick: function onActionClick() {
        return alert('Create');
      },
      onChange: setTableState,
      tableState: tableState,
      condensed: true
    });
  }));
};
withCondensedModifier.story = {
  name: 'with condensed modifier'
};
export var withBorderedModifier = function withBorderedModifier() {
  return ___EmotionJSX("div", {
    style: {
      display: 'flex',
      height: '600px'
    }
  }, ___EmotionJSX(TableState, null, function (_ref9) {
    var tableState = _ref9.tableState,
        setTableState = _ref9.setTableState;
    return ___EmotionJSX(TableBuilder, {
      columns: TABLE_COLUMNS,
      data: TABLE_DATA,
      action: "Create Client",
      onActionClick: function onActionClick() {
        return alert('Create');
      },
      onChange: setTableState,
      tableState: tableState,
      bordered: true
    });
  }));
};
withBorderedModifier.story = {
  name: 'with bordered modifier'
};
export var withCustomNoDataComponent = function withCustomNoDataComponent() {
  return ___EmotionJSX("div", {
    style: {
      display: 'flex',
      height: '600px'
    }
  }, ___EmotionJSX(TableState, null, function (_ref10) {
    var tableState = _ref10.tableState,
        setTableState = _ref10.setTableState;
    return ___EmotionJSX(TableBuilder, {
      columns: TABLE_COLUMNS,
      data: [],
      onChange: setTableState,
      tableState: tableState,
      noData: ___EmotionJSX(Column, {
        gap: "none",
        justifyContent: "center",
        alignItems: "center",
        stretch: true
      }, ___EmotionJSX(Icon, {
        name: "EightBase",
        size: "xl",
        color: "GRAY_20"
      }), ___EmotionJSX(Text, {
        color: "GRAY_20"
      }, "Can't find any data")),
      bordered: true
    });
  }));
};
withCustomNoDataComponent.story = {
  name: 'with custom NoData component'
};
export var WithExpandableRows = function WithExpandableRows() {
  var renderCell = useCallback(function (_ref11, rowData, _ref12) {
    var columnName = _ref11.name;
    var expandRow = _ref12.expandRow,
        isExpanded = _ref12.isExpanded;

    if (columnName === 'id') {
      return ___EmotionJSX(Button, {
        "data-testid": "expand-row-".concat(rowData[columnName]),
        variant: "link",
        onClick: function onClick() {
          return expandRow();
        },
        withIconAutosize: false
      }, ___EmotionJSX(Icon, {
        name: isExpanded ? 'ChevronTop' : 'ChevronDown',
        size: "sm"
      }), ___EmotionJSX("span", null, rowData[columnName]));
    }

    return rowData[columnName];
  }, []);
  return ___EmotionJSX("div", {
    style: {
      display: 'flex',
      height: '600px'
    }
  }, ___EmotionJSX(TableBuilder, {
    columns: TABLE_EXPANDABLE_COLUMNS,
    data: TABLE_DATA,
    expandedRowRender: function expandedRowRender(_ref13) {
      var rowData = _ref13.rowData;
      return (// It will be rendered in <TableBodyRow /> that has the same `grid-template-columns` as any other row in the table
        // So in order to occupy the whole width you can use `grid-column` for that
        ___EmotionJSX(Table.BodyCell, {
          style: {
            gridColumn: '1 / -1'
          },
          bordered: false
        }, "Expanded row with id ", rowData.id)
      );
    },
    renderCell: renderCell,
    bordered: true
  }));
};
WithExpandableRows.story = {
  name: 'with expandable rows'
};

var LoadableComponent = function LoadableComponent() {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  useEffect(function () {
    setTimeout(function () {
      return setLoading(false);
    }, 1000);
  }, []);
  return loading ? ___EmotionJSX("div", null, "Loading...") : ___EmotionJSX("div", null, "Loaded");
};

export var WithControlledExpandableRows = function WithControlledExpandableRows() {
  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      expandedRowKeys = _useState4[0],
      setExpandedRowKeys = _useState4[1];

  var ids = useMemo(function () {
    return TABLE_DATA.map(function (_ref14) {
      var id = _ref14.id;
      return id;
    });
  }, []);
  var renderCell = useCallback(function (_ref15, rowData, _ref16) {
    var columnName = _ref15.name;
    var expandRow = _ref16.expandRow,
        isExpanded = _ref16.isExpanded;

    if (columnName === 'id') {
      return ___EmotionJSX(Button, {
        variant: "link",
        onClick: function onClick() {
          return expandRow();
        },
        withIconAutosize: false
      }, ___EmotionJSX(Icon, {
        name: isExpanded ? 'ChevronTop' : 'ChevronDown',
        size: "sm"
      }), ___EmotionJSX("span", null, rowData[columnName]));
    }

    return rowData[columnName];
  }, []);
  var expandedRowRender = useCallback(function (_ref17) {
    var rowData = _ref17.rowData;
    return ___EmotionJSX(React.Fragment, null, ___EmotionJSX("div", null), ___EmotionJSX(Table.BodyCell, {
      bordered: false
    }, "Expanded row with id ", rowData.id), ___EmotionJSX(Table.BodyCell, {
      style: {
        gridColumn: '3 / -1'
      },
      bordered: false
    }, ___EmotionJSX(LoadableComponent, null)));
  }, []);
  return ___EmotionJSX(Column, {
    style: {
      height: '600px'
    },
    gap: "md"
  }, ___EmotionJSX(Row, {
    gap: "md"
  }, ___EmotionJSX(Button, {
    onClick: function onClick() {
      return setExpandedRowKeys(ids);
    }
  }, "Expand all"), ___EmotionJSX(Button, {
    onClick: function onClick() {
      return setExpandedRowKeys([]);
    },
    variant: "outlined"
  }, "Collapse all")), ___EmotionJSX(TableBuilder, {
    columns: TABLE_EXPANDABLE_COLUMNS,
    data: TABLE_DATA,
    expandedRowKeys: expandedRowKeys,
    expandedRowRender: expandedRowRender,
    renderCell: renderCell,
    onExpand: function onExpand(_ref18) {
      var key = _ref18.key,
          isExpanded = _ref18.isExpanded;
      return setExpandedRowKeys(function (s) {
        return isExpanded ? [].concat(_toConsumableArray(s), [key]) : s.filter(function (el) {
          return el !== key;
        });
      });
    },
    bordered: false
  }));
};
WithControlledExpandableRows.story = {
  name: 'with controlled expandable rows'
};