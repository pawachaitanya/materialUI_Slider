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
  d: "M3 3h2v2H3zm0 16h2v2H3zM15 3h2v2h-2zm0 16h2v2h-2zm0-8h2v2h-2zM3 15h2v2H3zm0-4h2v2H3zm0-4h2v2H3zm8 8h2v2h-2zm-4-4h2v2H7zm0-8h2v2H7zm12 0h2v18h-2zM7 19h2v2H7zm4-16h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 8h2v2h-2z"
})), 'BorderRightTwoTone');

exports.default = _default;