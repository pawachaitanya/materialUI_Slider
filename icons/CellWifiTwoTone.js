"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), _react.default.createElement("path", {
  d: "M22 5.97l-4 4.01v2.8l2-2V20h-2v2h4z",
  opacity: ".3"
}), _react.default.createElement("path", {
  d: "M9.07 11.07L11 13l1.93-1.93c-1.07-1.06-2.79-1.06-3.86 0zm9.01-5.14c-3.91-3.91-10.25-3.91-14.15 0l1.29 1.29c3.19-3.19 8.38-3.19 11.57 0l1.29-1.29zM15.5 8.5c-2.48-2.48-6.52-2.48-9 0l1.29 1.29c1.77-1.77 4.65-1.77 6.43 0L15.5 8.5zm2.5 4.28v-2.8L6 22h12v-2.05z"
})), 'CellWifiTwoTone');

exports.default = _default;