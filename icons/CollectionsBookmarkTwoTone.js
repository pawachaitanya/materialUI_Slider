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
  d: "M20 4h-1v9l-3-2.25L13 13V4H8v12h12z",
  opacity: ".3"
}), _react.default.createElement("path", {
  d: "M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2zm18-6V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zM15 4h2v5l-1-.75L15 9V4zM8 4h5v9l3-2.25L19 13V4h1v12H8V4z"
})), 'CollectionsBookmarkTwoTone');

exports.default = _default;