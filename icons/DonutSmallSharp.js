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
  d: "M13 9.18c.85.3 1.51.97 1.82 1.82h7.13c-.47-4.72-4.23-8.48-8.95-8.95v7.13zm-2 5.64C9.84 14.4 9 13.3 9 12c0-1.3.84-2.4 2-2.82V2.05c-5.05.5-9 4.76-9 9.95 0 5.19 3.95 9.45 9 9.95v-7.13zM14.82 13c-.3.85-.97 1.51-1.82 1.82v7.13c4.72-.47 8.48-4.23 8.95-8.95h-7.13z"
})), 'DonutSmallSharp');

exports.default = _default;