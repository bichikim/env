'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _split = require('lodash/split');

var _split2 = _interopRequireDefault(_split);

var _appRootPath = require('app-root-path');

var _appRootPath2 = _interopRequireDefault(_appRootPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var savedEnv = void 0;

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var rowEnv = void 0;
  if (savedEnv) {
    return savedEnv;
  }
  savedEnv = {};
  try {
    var _options$name = options.name,
        name = _options$name === undefined ? '.env' : _options$name;

    var envPath = options.path || _appRootPath2.default.path;
    rowEnv = _fs2.default.readFileSync(_path2.default.resolve(envPath, name)).toString();
  } catch (error) {
    console.warn('[env] Warning it needs .env ' + error);
    return savedEnv;
  }

  if (!rowEnv) {
    return savedEnv;
  }
  (0, _split2.default)(rowEnv, '\n').forEach(function (RawDeclaration) {
    var declaration = RawDeclaration.trim();
    if (declaration.length > 1 && declaration.indexOf('=') === -1) {
      throw new Error('[env] \'invalid declaration: ' + declaration);
    }

    var _declaration$split = declaration.split('='),
        _declaration$split2 = _slicedToArray(_declaration$split, 2),
        key = _declaration$split2[0],
        value = _declaration$split2[1];

    if (key && value) {
      Object.assign(savedEnv, _defineProperty({}, key.trim(), value.trim()));
    }
  });
  return savedEnv;
};
