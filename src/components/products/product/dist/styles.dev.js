"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@material-ui/core");

var _default = (0, _core.makeStyles)(function () {
  return {
    root: {
      maxWidth: '100%'
    },
    media: {
      height: 0,
      paddingTop: '56.25%'
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  };
});

exports["default"] = _default;