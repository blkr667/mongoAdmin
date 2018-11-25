webpackJsonp([0],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isomorphicFetch = __webpack_require__(62);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchAsync = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _isomorphicFetch2.default)(url);

                    case 2:
                        _context.next = 4;
                        return _context.sent.json();

                    case 4:
                        return _context.abrupt("return", _context.sent);

                    case 5:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function fetchAsync(_x) {
        return _ref.apply(this, arguments);
    };
}();

var syncFetch = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
        var response, json;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return (0, _isomorphicFetch2.default)(url);

                    case 2:
                        response = _context2.sent;
                        _context2.next = 5;
                        return response.json();

                    case 5:
                        json = _context2.sent;

                    case 6:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function syncFetch(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var authenticationHandler = {
    isAuthenticated: function isAuthenticated(handleAuthCallback) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/authcheck").then(function (res) {
            return res.json();
        }).then(function (res) {
            handleAuthCallback(res.status);
        });
    },
    authenticate: function authenticate(handleAuthCallback, user) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            handleAuthCallback(res.status);
        });
    },
    createUser: function createUser(handleAuthCallback, user) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/register", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            handleAuthCallback(res.status);
        });
    },
    authenticate2: function authenticate2(handleAuthCallback) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/login").then(function (res) {
            return res.json();
        }).then(function (res) {
            handleAuthCallback(res.status);
        });
    },
    logout: function logout(handleAuthCallback) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/logout").then(function (res) {
            return res.json();
        }).then(function (res) {
            handleAuthCallback(res.status);
        });
    }
};

exports.default = authenticationHandler;

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isomorphicFetch = __webpack_require__(62);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _usersService = __webpack_require__(444);

var _usersService2 = _interopRequireDefault(_usersService);

var _authService = __webpack_require__(445);

var _authService2 = _interopRequireDefault(_authService);

var _customizedPagesService = __webpack_require__(446);

var _customizedPagesService2 = _interopRequireDefault(_customizedPagesService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dbClient = {
    users: _usersService2.default,
    auth: _authService2.default,
    customizedPages: _customizedPagesService2.default
};

exports.default = dbClient;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = AuthExample;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fakeAuth = {
    isAuthenticated: false,
    authenticate: function authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout: function signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

var Public = function Public() {
    return _react2.default.createElement(
        'h3',
        null,
        'Public'
    );
};
var Protected = function Protected() {
    return _react2.default.createElement(
        'h3',
        null,
        'Protected'
    );
};

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Login);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            redirectToReferrer: false
        }, _this.login = function () {
            fakeAuth.authenticate(function () {
                _this.setState(function () {
                    return {
                        redirectToReferrer: true
                    };
                });
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {
            var _ref2 = this.props.location.state || { from: { pathname: '/' } },
                from = _ref2.from;

            var redirectToReferrer = this.state.redirectToReferrer;


            if (redirectToReferrer === true) {
                return _react2.default.createElement(_reactRouterDom.Redirect, { to: from });
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'You must log in to view the page'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.login },
                    'Log in'
                )
            );
        }
    }]);

    return Login;
}(_react2.default.Component);

var PrivateRoute = function PrivateRoute(_ref3) {
    var Component = _ref3.component,
        rest = _objectWithoutProperties(_ref3, ['component']);

    return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {
            return fakeAuth.isAuthenticated === true ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {
                    pathname: '/login',
                    state: { from: props.location }
                } });
        } }));
};

var AuthButton = (0, _reactRouterDom.withRouter)(function (_ref4) {
    var history = _ref4.history;
    return fakeAuth.isAuthenticated ? _react2.default.createElement(
        'p',
        null,
        'Welcome! ',
        _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                    fakeAuth.signout(function () {
                        return history.push('/');
                    });
                } },
            'Sign out'
        )
    ) : _react2.default.createElement(
        'p',
        null,
        'You are not logged in.'
    );
});

function AuthExample() {
    return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(AuthButton, null),
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/admin/public' },
                        'Public Page'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/admin/protected' },
                        'Protected Page'
                    )
                )
            ),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/admin/public', component: Public }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: Login }),
            _react2.default.createElement(PrivateRoute, { path: '/admin/protected', component: Protected })
        )
    );
}

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputFile = function (_React$Component) {
    _inherits(InputFile, _React$Component);

    function InputFile(props) {
        _classCallCheck(this, InputFile);

        var _this = _possibleConstructorReturn(this, (InputFile.__proto__ || Object.getPrototypeOf(InputFile)).call(this, props));

        _this.fileInput = _react2.default.createRef();
        _this.handleFile = _this.handleFile.bind(_this);
        return _this;
    }

    _createClass(InputFile, [{
        key: 'handleFile',
        value: function handleFile(e) {
            var onChange = this.props.onChange;

            var file = this.fileInput.current.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function () {
                onChange({
                    fileName: file.name,
                    fileType: file.type,
                    base64image: reader.result.split(',')[1]
                });
            };
            e.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                label = _props.label,
                inputValue = _props.inputValue,
                disabled = _props.disabled;

            var fullBase64img = getBase64Image(inputValue);
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'input-group mb-3' },
                    _react2.default.createElement(
                        'div',
                        { className: 'input-group-prepend' },
                        _react2.default.createElement(
                            'span',
                            { className: 'input-group-text', id: 'basic-addon3' },
                            label
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'custom-file' },
                        _react2.default.createElement('input', {
                            disabled: disabled,
                            type: 'file',
                            className: 'custom-file-input',
                            onChange: this.handleFile,
                            ref: this.fileInput
                        }),
                        _react2.default.createElement(
                            'label',
                            { className: 'custom-file-label text-nowrap' },
                            inputValue && inputValue.fileName || 'Choose file'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    inputValue && _react2.default.createElement('img', { className: 'img-thumbnail', src: fullBase64img, width: '200px' })
                )
            );
        }
    }]);

    return InputFile;
}(_react2.default.Component);

function getBase64Image(inputValue) {
    if (inputValue) {
        var base64img = inputValue.base64image ? inputValue.base64image : encode(inputValue.buffer.data);
        return 'data:' + inputValue.fileType + ';base64,' + base64img;
    }
    return null;
}

function encode(input) {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1 = void 0,
        chr2 = void 0,
        chr3 = void 0,
        enc1 = void 0,
        enc2 = void 0,
        enc3 = void 0,
        enc4 = void 0;
    var i = 0;

    while (i < input.length) {
        chr1 = input[i++];
        chr2 = i < input.length ? input[i++] : Number.NaN; // Not sure if the index
        chr3 = i < input.length ? input[i++] : Number.NaN; // checks are needed here

        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output += keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }
    return output;
}

exports.default = InputFile;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(178);
module.exports = __webpack_require__(380);


/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(383);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(157);

var _reactRedux = __webpack_require__(54);

var _reducers = __webpack_require__(417);

var _reducers2 = _interopRequireDefault(_reducers);

var _App = __webpack_require__(418);

var _App2 = _interopRequireDefault(_App);

var _reactRouterDom = __webpack_require__(6);

__webpack_require__(478);

__webpack_require__(481);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default, _extends({}, window.APP_STATE));

_reactDom2.default.hydrate(_react2.default.createElement(
  _reactRouterDom.BrowserRouter,
  null,
  _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_App2.default, null)
  )
), document.getElementById('app'));

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputText = function (_React$Component) {
    _inherits(InputText, _React$Component);

    function InputText() {
        _classCallCheck(this, InputText);

        return _possibleConstructorReturn(this, (InputText.__proto__ || Object.getPrototypeOf(InputText)).apply(this, arguments));
    }

    _createClass(InputText, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                label = _props.label,
                inputValue = _props.inputValue,
                disabled = _props.disabled,
                onChange = _props.onChange;

            return _react2.default.createElement(
                "div",
                { className: "input-group mb-3" },
                _react2.default.createElement(
                    "div",
                    { className: "input-group-prepend" },
                    _react2.default.createElement(
                        "span",
                        { className: "input-group-text", id: "basic-addon3" },
                        label
                    )
                ),
                _react2.default.createElement("input", {
                    disabled: disabled,
                    type: "text",
                    className: "form-control",
                    placeholder: "Enter text",
                    value: inputValue,
                    onChange: onChange
                })
            );
        }
    }]);

    return InputText;
}(_react2.default.Component);

exports.default = InputText;

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return _extends({}, state, { initialText: 'changed in the browser!' });
        case 'AUTHENTICATE':
            return _extends({}, state, { authenticated: true, loggedUser: action.username });
        case 'LOG_OUT':
            return _extends({}, state, { authenticated: false, loggedUser: null });
        case 'SET_ACTIVE_TAB':
            return _extends({}, state, { loggedUser: action.selectedTab });
        default:
            return _extends({}, state);
    }
}

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(54);

var _LoginPage = __webpack_require__(442);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _LogoutPage = __webpack_require__(447);

var _LogoutPage2 = _interopRequireDefault(_LogoutPage);

var _AdminPanel = __webpack_require__(448);

var _AdminPanel2 = _interopRequireDefault(_AdminPanel);

var _ForbiddenPage = __webpack_require__(473);

var _ForbiddenPage2 = _interopRequireDefault(_ForbiddenPage);

var _MainNavbar = __webpack_require__(474);

var _MainNavbar2 = _interopRequireDefault(_MainNavbar);

var _PrivateRoute = __webpack_require__(476);

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _ProtectedRoute = __webpack_require__(477);

var _ProtectedRoute2 = _interopRequireDefault(_ProtectedRoute);

var _authenticationHandler = __webpack_require__(117);

var _authenticationHandler2 = _interopRequireDefault(_authenticationHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        var authenticated = props.authenticated;

        _this.state = {
            authenticated: authenticated
        };
        _this.setAuthenticated = _this.setAuthenticated.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'setAuthenticated',
        value: function setAuthenticated() {
            this.setState({ authenticated: true });
        }
    }, {
        key: 'render',
        value: function render() {
            var authenticated = this.props.authenticated;

            return _react2.default.createElement(
                'div',
                { className: 'login-background' },
                _react2.default.createElement(_MainNavbar2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        _reactRouterDom.Switch,
                        null,
                        _react2.default.createElement(_reactRouterDom.Route, { component: _LoginPage2.default, path: '/', exact: true }),
                        _react2.default.createElement(_reactRouterDom.Route, { component: _LoginPage2.default, path: '/loginPage' }),
                        _react2.default.createElement(_reactRouterDom.Route, { component: _LogoutPage2.default, path: '/logoutPage' }),
                        _react2.default.createElement(_ProtectedRoute2.default, { component: _AdminPanel2.default, path: '/admin', authenticated: authenticated }),
                        _react2.default.createElement(_reactRouterDom.Route, { component: _ForbiddenPage2.default })
                    )
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return { authenticated: state.authenticated };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(App));

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

var _reactRedux = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_React$Component) {
    _inherits(LoginPage, _React$Component);

    function LoginPage() {
        _classCallCheck(this, LoginPage);

        var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this));

        _this.handleKeyPress = function (event) {
            if (event.key == 'Enter') {
                if (_this.state.username && _this.state.password) {
                    _this.login();
                } else {
                    _this.setState({ errorMsg: "Enter username and password" });
                }
            }
        };

        _this.state = {
            redirectToReferrer: false,
            errorMsg: null
        };
        _this.login = _this.login.bind(_this);
        _this.setUsername = _this.setUsername.bind(_this);
        _this.setPassword = _this.setPassword.bind(_this);
        return _this;
    }

    _createClass(LoginPage, [{
        key: 'setUsername',
        value: function setUsername(event) {
            this.setState({ username: event.target.value });
        }
    }, {
        key: 'setPassword',
        value: function setPassword(event) {
            this.setState({ password: event.target.value });
        }
    }, {
        key: 'login',
        value: function login() {
            var _this2 = this;

            var user = { username: this.state.username, password: this.state.password };
            _dbClient2.default.auth.login(function (authenticationStatus) {
                _this2.props.authenticate(user.username);
                _this2.setState({ redirectToReferrer: authenticationStatus });
            }, function (errorMsg) {
                _this2.setState({ errorMsg: errorMsg });
            }, user);
        }
    }, {
        key: 'render',
        value: function render() {
            var _ref = this.props.location.state || { from: { pathname: '/admin' } },
                from = _ref.from;

            var _state = this.state,
                redirectToReferrer = _state.redirectToReferrer,
                errorMsg = _state.errorMsg;

            if (redirectToReferrer) {
                return _react2.default.createElement(_reactRouterDom.Redirect, { to: from });
            }

            return _react2.default.createElement(
                'div',
                { className: 'jumbotron mx-auto mb-md-3 mt-md-3 w-50', onKeyPress: this.handleKeyPress },
                _react2.default.createElement(
                    'h3',
                    { className: 'display-4' },
                    'Login page!'
                ),
                _react2.default.createElement('input', { type: 'text', placeholder: 'Enter username', onChange: this.setUsername, required: true, className: 'form-control mt-md-3' }),
                _react2.default.createElement('input', { type: 'password', placeholder: 'Enter password', onChange: this.setPassword, required: true, className: 'form-control mt-md-3' }),
                this.state.username && this.state.password ? _react2.default.createElement(
                    'button',
                    { type: 'button', onClick: this.login, className: 'btn btn-primary mt-md-3' },
                    'Log in'
                ) : _react2.default.createElement(
                    'button',
                    { type: 'button', className: 'btn btn-primary mt-md-3 disabled' },
                    'Log in'
                ),
                errorMsg && _react2.default.createElement(
                    'div',
                    { className: 'mt-md-3 alert alert-danger', role: 'alert' },
                    _react2.default.createElement(
                        'strong',
                        null,
                        ' Can not login'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        errorMsg
                    )
                )
            );
        }
    }]);

    return LoginPage;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        authenticate: function authenticate(username) {
            dispatch({ type: "AUTHENTICATE", username: username });
        }
    };
};

var mapStateToProps = function mapStateToProps(state) {
    return { authenticated: state.authenticated };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoginPage));

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isomorphicFetch = __webpack_require__(62);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var usersService = {
    fetchUsers: function fetchUsers(cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/users").then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    fetchUser: function fetchUser(id, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/users/" + id).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    createUser: function createUser(user, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    deleteUser: function deleteUser(id, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/users/" + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    editUser: function editUser(user, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/users/" + user._id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    }
};

exports.default = usersService;

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isomorphicFetch = __webpack_require__(62);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authService = {
    login: function login(handleAuthCallback, errorCallback, user) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(function (res) {
            if (res.status === 200) return res.json();
            errorCallback(res.status + ": " + res.statusText);
        }).then(function (res) {
            handleAuthCallback(res.status);
        }).catch(function (err) {
            console.log("catch: " + err);
        });
    },
    logout: function logout(handleAuthCallback) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/logout").then(function (res) {
            return res.json();
        }).then(function (res) {
            handleAuthCallback(res.status);
        });
    }
};

exports.default = authService;

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isomorphicFetch = __webpack_require__(62);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customizedPagesService = {
    fetchList: function fetchList(cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/customizedPages").then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    fetch: function fetch(name, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/customizedPages/" + name).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    delete: function _delete(id, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/customizedPages/" + id, { method: 'DELETE' }).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    create: function create(customizedPage, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/customizedPages", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customizedPage)
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    edit: function edit(customizedPage, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/customizedPages/", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customizedPage)
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    addHeading: function addHeading(pageId, newHeading, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/customizedPages/heading/" + pageId, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newHeading)
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    deleteHeading: function deleteHeading(pageId, heading, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/customizedPages/heading/" + pageId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(heading)
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    editHeading: function editHeading(pageId, heading, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/customizedPages/heading/" + pageId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(heading)
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    addParagraph: function addParagraph(pageId, paragraph, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/customizedPages/paragraph/" + pageId, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paragraph)
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    deleteParagraph: function deleteParagraph(pageId, paragraph, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/customizedPages/paragraph/" + pageId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paragraph)
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    editParagraph: function editParagraph(pageId, paragraph, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/customizedPages/paragraph/" + pageId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paragraph)
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    addImage: function addImage(pageId, imageFormData, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/customizedPages/image/" + pageId, {
            method: 'POST',
            body: imageFormData
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    editImage: function editImage(pageId, imageFormData, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/customizedPages/image/" + pageId, {
            method: 'PUT',
            body: imageFormData
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    },
    deleteImage: function deleteImage(pageId, image, cb) {
        (0, _isomorphicFetch2.default)("http://localhost:3000/customizedPages/image/" + pageId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(image)
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            cb(res);
        });
    }
};

exports.default = customizedPagesService;

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogoutPage = function (_React$Component) {
    _inherits(LogoutPage, _React$Component);

    function LogoutPage() {
        _classCallCheck(this, LogoutPage);

        return _possibleConstructorReturn(this, (LogoutPage.__proto__ || Object.getPrototypeOf(LogoutPage)).apply(this, arguments));
    }

    _createClass(LogoutPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'jumbotron  mb-md-3 mt-md-3' },
                _react2.default.createElement(
                    'h3',
                    { className: 'display-4' },
                    'Logged out successfully!'
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/loginPage' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-primary btn-md', type: 'button' },
                        'Go to Login Page'
                    )
                )
            );
        }
    }]);

    return LogoutPage;
}(_react2.default.Component);

exports.default = LogoutPage;

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _Home = __webpack_require__(449);

var _Home2 = _interopRequireDefault(_Home);

var _AdminNavbar = __webpack_require__(450);

var _AdminNavbar2 = _interopRequireDefault(_AdminNavbar);

var _About = __webpack_require__(451);

var _About2 = _interopRequireDefault(_About);

var _UserList = __webpack_require__(452);

var _UserList2 = _interopRequireDefault(_UserList);

var _UserCreate = __webpack_require__(454);

var _UserCreate2 = _interopRequireDefault(_UserCreate);

var _UserEdit = __webpack_require__(455);

var _UserEdit2 = _interopRequireDefault(_UserEdit);

var _User = __webpack_require__(456);

var _User2 = _interopRequireDefault(_User);

var _CustomizedPageList = __webpack_require__(457);

var _CustomizedPageList2 = _interopRequireDefault(_CustomizedPageList);

var _CustomizedPageCreate = __webpack_require__(459);

var _CustomizedPageCreate2 = _interopRequireDefault(_CustomizedPageCreate);

var _CustomizedPage = __webpack_require__(460);

var _CustomizedPage2 = _interopRequireDefault(_CustomizedPage);

var _NotFoundPage = __webpack_require__(472);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminPanel = function (_React$Component) {
    _inherits(AdminPanel, _React$Component);

    function AdminPanel() {
        _classCallCheck(this, AdminPanel);

        return _possibleConstructorReturn(this, (AdminPanel.__proto__ || Object.getPrototypeOf(AdminPanel)).apply(this, arguments));
    }

    _createClass(AdminPanel, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_AdminNavbar2.default, null),
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/admin/', component: _Home2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/admin/home', component: _Home2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/admin/about', component: _About2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/admin/customizedPages', component: _CustomizedPageList2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/admin/customizedPages/new', component: _CustomizedPageCreate2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/admin/customizedPages/:id', component: _CustomizedPage2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/admin/users', component: _UserList2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/admin/users/new', component: _UserCreate2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/admin/users/:id', component: _User2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/admin/users/:id/edit', component: _UserEdit2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { component: _NotFoundPage2.default })
                )
            );
        }
    }]);

    return AdminPanel;
}(_react2.default.Component);

exports.default = AdminPanel;

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(54);

var _AuthExample = __webpack_require__(173);

var _AuthExample2 = _interopRequireDefault(_AuthExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'onButtonClick',
    value: function onButtonClick(event) {
      event.preventDefault();

      this.props.changeText();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'HOME',
        _react2.default.createElement(
          'p',
          null,
          this.props.initialText
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.onButtonClick.bind(this) },
          'change text!'
        ),
        _react2.default.createElement(_AuthExample2.default, null)
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

Home.propTypes = {
  initialText: _propTypes2.default.string.isRequired,
  changeText: _propTypes2.default.func.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeText: function changeText() {
      return dispatch({ type: 'CHANGE_TEXT' });
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminNavbar = function (_React$Component) {
    _inherits(AdminNavbar, _React$Component);

    function AdminNavbar() {
        _classCallCheck(this, AdminNavbar);

        return _possibleConstructorReturn(this, (AdminNavbar.__proto__ || Object.getPrototypeOf(AdminNavbar)).apply(this, arguments));
    }

    _createClass(AdminNavbar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-expand-lg navbar-light bg-dark' },
                _react2.default.createElement(
                    'span',
                    { className: 'my-2 my-lg-0' },
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { className: 'btn btn-sm btn-success ml-1', activeClassName: 'btn-outline-success', to: '/admin/home' },
                        'Home'
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { className: 'btn btn-sm btn-success ml-1', activeClassName: 'btn-outline-success', to: '/admin/about' },
                        'About'
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { className: 'btn btn-sm btn-success ml-1', activeClassName: 'btn-outline-success', to: '/admin/users' },
                        'Users'
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { className: 'btn btn-sm btn-success ml-1', activeClassName: 'btn-outline-success', to: '/admin/customizedPages' },
                        'Customized pages'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-sm btn-success ml-1 disabled', type: 'button' },
                        'Blog'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-sm btn-success ml-1 disabled', type: 'button' },
                        'Pages'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-sm btn-success ml-1 disabled', type: 'button' },
                        'Tags'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-sm btn-success ml-1 disabled', type: 'button' },
                        'Account Settings'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-sm btn-success ml-1 disabled', type: 'button' },
                        'Blog'
                    )
                )
            );
        }
    }]);

    return AdminNavbar;
}(_react2.default.Component);

exports.default = AdminNavbar;

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _AuthExample = __webpack_require__(173);

var _AuthExample2 = _interopRequireDefault(_AuthExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'About'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Some information about the page'
    ),
    _react2.default.createElement(_AuthExample2.default, null)
  );
};

exports.default = About;

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

var _reactRouterDom = __webpack_require__(6);

var _UserListItem = __webpack_require__(453);

var _UserListItem2 = _interopRequireDefault(_UserListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserList = function (_React$Component) {
    _inherits(UserList, _React$Component);

    function UserList() {
        _classCallCheck(this, UserList);

        var _this = _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).call(this));

        _this.setUserList = _this.setUserList.bind(_this);
        _this.state = {
            users: []
        };
        return _this;
    }

    _createClass(UserList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _dbClient2.default.users.fetchUsers(this.setUserList);
        }
    }, {
        key: 'setUserList',
        value: function setUserList(users) {
            this.setState({ users: users });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'jumbotron bg-light mt-md-3' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Users'
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'list-group mb-3 w-50' },
                    this.state.users.map(function (user) {
                        return _react2.default.createElement(_UserListItem2.default, { key: user.username, user: user });
                    })
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/admin/users/new' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-primary mt-md-2 btn-md' },
                        'Create new user'
                    )
                )
            );
        }
    }]);

    return UserList;
}(_react2.default.Component);

exports.default = UserList;

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserListItem = function (_React$Component) {
    _inherits(UserListItem, _React$Component);

    function UserListItem() {
        _classCallCheck(this, UserListItem);

        return _possibleConstructorReturn(this, (UserListItem.__proto__ || Object.getPrototypeOf(UserListItem)).apply(this, arguments));
    }

    _createClass(UserListItem, [{
        key: 'render',
        value: function render() {
            var user = this.props.user;

            return _react2.default.createElement(
                'li',
                { className: 'list-group-item d-flex justify-content-between lh-condensed' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h6',
                        { className: 'my-0' },
                        user.username
                    ),
                    _react2.default.createElement(
                        'small',
                        { className: 'text-muted' },
                        user.displayName
                    )
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'text-muted' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: "/admin/users/" + user._id },
                        _react2.default.createElement(
                            'button',
                            { className: 'float-right btn btn-light btn-sm ml-1' },
                            'Show details'
                        )
                    )
                )
            );
        }
    }]);

    return UserListItem;
}(_react2.default.Component);

exports.default = UserListItem;

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserCreate = function (_React$Component) {
    _inherits(UserCreate, _React$Component);

    function UserCreate() {
        _classCallCheck(this, UserCreate);

        var _this = _possibleConstructorReturn(this, (UserCreate.__proto__ || Object.getPrototypeOf(UserCreate)).call(this));

        _this.createUser = _this.createUser.bind(_this);
        _this.setUsername = _this.setUsername.bind(_this);
        _this.setPassword = _this.setPassword.bind(_this);
        _this.setDisplayName = _this.setDisplayName.bind(_this);
        return _this;
    }

    _createClass(UserCreate, [{
        key: 'setUsername',
        value: function setUsername(event) {
            this.setState({ username: event.target.value });
        }
    }, {
        key: 'setPassword',
        value: function setPassword(event) {
            this.setState({ password: event.target.value });
        }
    }, {
        key: 'setDisplayName',
        value: function setDisplayName(event) {
            this.setState({ displayName: event.target.value });
        }
    }, {
        key: 'createUser',
        value: function createUser() {
            var history = this.props.history;

            var user = {
                username: this.state.username,
                password: this.state.password,
                displayName: this.state.displayName
            };
            _dbClient2.default.users.createUser(user, function (authenticationStatus) {
                history.push('/admin/users');
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'jumbotron bg-light mt-md-3' },
                _react2.default.createElement(
                    'div',
                    { className: 'card w-50' },
                    _react2.default.createElement(
                        'div',
                        { className: 'card-header' },
                        'Create user:'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'card-body' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4 ' },
                                _react2.default.createElement(
                                    'strong',
                                    { className: 'card-title float-right' },
                                    'username:'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-6' },
                                _react2.default.createElement('input', { type: 'text', placeholder: 'Enter Username', onChange: this.setUsername })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4' },
                                _react2.default.createElement(
                                    'strong',
                                    { className: 'card-title float-right' },
                                    'display name:'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-6' },
                                _react2.default.createElement('input', { type: 'text', placeholder: 'Enter displayName', onChange: this.setDisplayName })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4' },
                                _react2.default.createElement(
                                    'strong',
                                    { className: 'card-title float-right' },
                                    'password:'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-6' },
                                _react2.default.createElement('input', { type: 'password', placeholder: 'Enter password', onChange: this.setPassword })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'card-body' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/admin/users' },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn  btn-success btn-md mr-1' },
                                'Go back to Users'
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-primary btn-md  mr-1', onClick: this.createUser },
                            'Create user'
                        )
                    )
                )
            );
        }
    }]);

    return UserCreate;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(UserCreate);

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserEditForm = function (_React$Component) {
    _inherits(UserEditForm, _React$Component);

    function UserEditForm() {
        _classCallCheck(this, UserEditForm);

        var _this = _possibleConstructorReturn(this, (UserEditForm.__proto__ || Object.getPrototypeOf(UserEditForm)).call(this));

        _this.editUser = _this.editUser.bind(_this);
        _this.setUsername = _this.setUsername.bind(_this);
        _this.setDisplayName = _this.setDisplayName.bind(_this);
        _this.setUser = _this.setUser.bind(_this);
        _this.redirectToUserList = _this.redirectToUserList.bind(_this);
        _this.state = {
            user: null,
            modified: false
        };
        return _this;
    }

    _createClass(UserEditForm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var id = this.props.match.params.id;

            _dbClient2.default.users.fetchUser(id, this.setUser);
        }
    }, {
        key: 'setUsername',
        value: function setUsername(event) {
            this.setState({ user: _extends({}, this.state.user, { username: event.target.value }) });
        }
    }, {
        key: 'setDisplayName',
        value: function setDisplayName(event) {
            this.setState({ user: _extends({}, this.state.user, { displayName: event.target.value }) });
        }
    }, {
        key: 'editUser',
        value: function editUser() {
            _dbClient2.default.users.editUser(this.state.user, this.redirectToUserList);
        }
    }, {
        key: 'setUser',
        value: function setUser(user) {
            this.setState({ user: user });
        }
    }, {
        key: 'redirectToUserList',
        value: function redirectToUserList(user) {
            if (user) this.setState({ modified: true });
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.state.user) return _react2.default.createElement(
                'div',
                null,
                'Loading user...'
            );

            if (this.state.modified) return _react2.default.createElement(Redirect, { to: '/admin/users' });

            return _react2.default.createElement(
                'div',
                { className: 'jumbotron bg-light mt-md-3' },
                _react2.default.createElement(
                    'div',
                    { className: 'card w-50' },
                    _react2.default.createElement(
                        'div',
                        { className: 'card-header' },
                        'Edit user:'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'card-body' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4 ' },
                                _react2.default.createElement(
                                    'strong',
                                    { className: 'card-title float-right' },
                                    'username:'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-6' },
                                _react2.default.createElement('input', { value: this.state.user.username, type: 'text', placeholder: 'Enter Username', onChange: this.setUsername })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4' },
                                _react2.default.createElement(
                                    'strong',
                                    { className: 'card-title float-right' },
                                    'display name:'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-6' },
                                _react2.default.createElement('input', { value: this.state.user.displayName, type: 'text', placeholder: 'Enter display name', onChange: this.setDisplayName })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'card-body' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/admin/users' },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn  btn-success btn-md mr-1' },
                                'Go back to Users'
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-primary btn-md  mr-1', onClick: this.editUser },
                            'Modify user'
                        )
                    )
                )
            );
        }
    }]);

    return UserEditForm;
}(_react2.default.Component);

exports.default = UserEditForm;

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_React$Component) {
    _inherits(User, _React$Component);

    function User() {
        _classCallCheck(this, User);

        var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this));

        _this.state = {
            user: null,
            deleted: false
        };
        _this.setUser = _this.setUser.bind(_this);
        _this.deleteUser = _this.deleteUser.bind(_this);
        _this.redirectToUserList = _this.redirectToUserList.bind(_this);
        return _this;
    }

    _createClass(User, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var id = this.props.match.params.id;

            _dbClient2.default.users.fetchUser(id, this.setUser);
        }
    }, {
        key: 'setUser',
        value: function setUser(user) {
            this.setState({ user: user });
        }
    }, {
        key: 'redirectToUserList',
        value: function redirectToUserList(user) {
            if (user) this.setState({ deleted: true });
        }
    }, {
        key: 'deleteUser',
        value: function deleteUser() {
            _dbClient2.default.users.deleteUser(this.state.user._id, this.redirectToUserList);
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.state.user) return _react2.default.createElement(
                'div',
                null,
                'Loading user...'
            );

            if (this.state.deleted) return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/admin/users' });

            return _react2.default.createElement(
                'div',
                { className: 'jumbotron bg-light mt-md-3' },
                _react2.default.createElement(
                    'div',
                    { className: 'card w-50' },
                    _react2.default.createElement(
                        'div',
                        { className: 'card-header' },
                        'User details:'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'card-body' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4 ' },
                                _react2.default.createElement(
                                    'strong',
                                    { className: 'card-title float-right' },
                                    'username:'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-6' },
                                this.state.user.username
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4' },
                                _react2.default.createElement(
                                    'strong',
                                    { className: 'card-title float-right' },
                                    'display name:'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-6' },
                                this.state.user.displayName
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'card-body' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/admin/users' },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn  btn-success btn-md mr-1' },
                                'Go back to Users'
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-primary btn-md mr-1', onClick: this.deleteUser },
                            'Delete'
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/admin/users/' + this.state.user._id + '/edit' },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-primary btn-md mr-1' },
                                'Edit'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return User;
}(_react2.default.Component);

exports.default = User;

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

var _reactRouterDom = __webpack_require__(6);

var _CustomizedPageListItem = __webpack_require__(458);

var _CustomizedPageListItem2 = _interopRequireDefault(_CustomizedPageListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomizedPageList = function (_React$Component) {
    _inherits(CustomizedPageList, _React$Component);

    function CustomizedPageList() {
        _classCallCheck(this, CustomizedPageList);

        var _this = _possibleConstructorReturn(this, (CustomizedPageList.__proto__ || Object.getPrototypeOf(CustomizedPageList)).call(this));

        _this.setPageList = _this.setPageList.bind(_this);
        _this.state = {
            pages: []
        };
        return _this;
    }

    _createClass(CustomizedPageList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _dbClient2.default.customizedPages.fetchList(this.setPageList);
        }
    }, {
        key: 'setPageList',
        value: function setPageList(pages) {
            this.setState({ pages: pages });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'jumbotron bg-light mt-md-3' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Customized Pages'
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'list-group mb-3 w-50' },
                    this.state.pages.map(function (page) {
                        return _react2.default.createElement(_CustomizedPageListItem2.default, {
                            key: page.name,
                            page: page });
                    })
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/admin/customizedPages/new' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-primary mt-md-2 btn-md' },
                        'Create customized page'
                    )
                )
            );
        }
    }]);

    return CustomizedPageList;
}(_react2.default.Component);

exports.default = CustomizedPageList;

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomizedPageListItem = function (_React$Component) {
    _inherits(CustomizedPageListItem, _React$Component);

    function CustomizedPageListItem() {
        _classCallCheck(this, CustomizedPageListItem);

        var _this = _possibleConstructorReturn(this, (CustomizedPageListItem.__proto__ || Object.getPrototypeOf(CustomizedPageListItem)).call(this));

        _this.state = { deleted: false };
        _this.deleteCustomizedPage = _this.deleteCustomizedPage.bind(_this);
        return _this;
    }

    _createClass(CustomizedPageListItem, [{
        key: 'deleteCustomizedPage',
        value: function deleteCustomizedPage() {
            var _this2 = this;

            var page = this.props.page;

            _dbClient2.default.customizedPages.delete(page._id, function () {
                _this2.setState({ deleted: true });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var page = this.props.page;

            if (this.state.deleted) return null;
            return _react2.default.createElement(
                'li',
                { className: 'list-group-item d-flex justify-content-between lh-condensed' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h6',
                        { className: 'my-0' },
                        page.name
                    )
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'text-muted' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: "/admin/customizedPages/" + page.name },
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-primary mt-md-2 btn-md' },
                            'Show'
                        )
                    )
                )
            );
        }
    }]);

    return CustomizedPageListItem;
}(_react2.default.Component);

exports.default = CustomizedPageListItem;

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _InputText = __webpack_require__(39);

var _InputText2 = _interopRequireDefault(_InputText);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomizedPageCreate = function (_React$Component) {
    _inherits(CustomizedPageCreate, _React$Component);

    function CustomizedPageCreate() {
        _classCallCheck(this, CustomizedPageCreate);

        var _this = _possibleConstructorReturn(this, (CustomizedPageCreate.__proto__ || Object.getPrototypeOf(CustomizedPageCreate)).call(this));

        _this.state = {
            name: "",
            value: ""
        };
        _this.setName = _this.setName.bind(_this);
        _this.setValue = _this.setValue.bind(_this);
        _this.createPage = _this.createPage.bind(_this);
        return _this;
    }

    _createClass(CustomizedPageCreate, [{
        key: 'setName',
        value: function setName(event) {
            this.setState({ name: event.target.value });
        }
    }, {
        key: 'setValue',
        value: function setValue(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'createPage',
        value: function createPage() {
            var history = this.props.history;

            var page = {
                name: this.state.name,
                value: this.state.value
            };
            _dbClient2.default.customizedPages.create(page, function () {
                history.push('/admin/customizedPages/' + page.name);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'jumbotron bg-light mt-md-3' },
                _react2.default.createElement(
                    'div',
                    { className: 'card w-50' },
                    _react2.default.createElement(
                        'div',
                        { className: 'card-header text-white bg-secondary' },
                        _react2.default.createElement(
                            'h5',
                            null,
                            'Create customized page'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'card-body' },
                        _react2.default.createElement(_InputText2.default, { label: 'Name', inputValue: this.state.name, onChange: this.setName }),
                        _react2.default.createElement(_InputText2.default, { label: 'Value', inputValue: this.state.value, onChange: this.setValue }),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/admin/customizedPages' },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn  btn-success btn-md mr-1' },
                                'Go back to Customized Pages'
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-primary btn-md  mr-1', onClick: this.createPage },
                            'Create page'
                        )
                    )
                )
            );
        }
    }]);

    return CustomizedPageCreate;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(CustomizedPageCreate);

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _HeadingList = __webpack_require__(461);

var _HeadingList2 = _interopRequireDefault(_HeadingList);

var _ParagraphList = __webpack_require__(464);

var _ParagraphList2 = _interopRequireDefault(_ParagraphList);

var _ImageList = __webpack_require__(468);

var _ImageList2 = _interopRequireDefault(_ImageList);

var _CustomizedPageMeta = __webpack_require__(471);

var _CustomizedPageMeta2 = _interopRequireDefault(_CustomizedPageMeta);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomizedPage = function (_React$Component) {
    _inherits(CustomizedPage, _React$Component);

    function CustomizedPage() {
        _classCallCheck(this, CustomizedPage);

        var _this = _possibleConstructorReturn(this, (CustomizedPage.__proto__ || Object.getPrototypeOf(CustomizedPage)).call(this));

        _this.state = { page: null };
        _this.setPage = _this.setPage.bind(_this);
        _this.refresh = _this.refresh.bind(_this);
        _this.deleteCustomizedPage = _this.deleteCustomizedPage.bind(_this);
        return _this;
    }

    _createClass(CustomizedPage, [{
        key: 'setPage',
        value: function setPage(page) {
            this.setState({ page: page });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.refresh();
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            var pageName = this.props.match.params.id;
            _dbClient2.default.customizedPages.fetch(pageName, this.setPage);
        }
    }, {
        key: 'deleteCustomizedPage',
        value: function deleteCustomizedPage() {
            var page = this.state.page;
            var history = this.props.history;

            history.push('/admin/customizedPages');
            _dbClient2.default.customizedPages.delete(page._id);
        }
    }, {
        key: 'render',
        value: function render() {
            var page = this.state.page;
            var urlId = this.props.match.params.id;
            if (!page) return null;
            return _react2.default.createElement(
                'div',
                { className: 'jumbotron bg-light mt-md-3' },
                _react2.default.createElement(
                    'div',
                    { className: 'card w-50' },
                    _react2.default.createElement(_CustomizedPageMeta2.default, { refresh: this.refresh, page: page, urlId: urlId }),
                    _react2.default.createElement(_HeadingList2.default, { refresh: this.refresh, headings: page.headings, id: page._id }),
                    _react2.default.createElement(_ParagraphList2.default, { refresh: this.refresh, paragraphs: page.paragraphs, id: page._id }),
                    _react2.default.createElement(_ImageList2.default, { refresh: this.refresh, images: page.images, id: page._id }),
                    _react2.default.createElement(
                        'button',
                        {
                            onClick: this.deleteCustomizedPage,
                            className: 'btn btn-danger mt-md-2 btn-md',
                            type: 'button'
                        },
                        'Delete'
                    )
                )
            );
        }
    }]);

    return CustomizedPage;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(CustomizedPage);

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _HeadingListItem = __webpack_require__(462);

var _HeadingListItem2 = _interopRequireDefault(_HeadingListItem);

var _HeadingCreate = __webpack_require__(463);

var _HeadingCreate2 = _interopRequireDefault(_HeadingCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeadingList = function (_React$Component) {
    _inherits(HeadingList, _React$Component);

    function HeadingList() {
        _classCallCheck(this, HeadingList);

        return _possibleConstructorReturn(this, (HeadingList.__proto__ || Object.getPrototypeOf(HeadingList)).apply(this, arguments));
    }

    _createClass(HeadingList, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                headings = _props.headings,
                id = _props.id,
                refresh = _props.refresh;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'card-header text-white bg-secondary' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Headings'
                    )
                ),
                headings && headings.map(function (heading) {
                    return _react2.default.createElement(_HeadingListItem2.default, { refresh: refresh, key: heading.name, heading: heading, id: id });
                }),
                _react2.default.createElement(_HeadingCreate2.default, { id: id, refresh: refresh })
            );
        }
    }]);

    return HeadingList;
}(_react2.default.Component);

exports.default = HeadingList;

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _InputText = __webpack_require__(39);

var _InputText2 = _interopRequireDefault(_InputText);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeadingListItem = function (_React$Component) {
    _inherits(HeadingListItem, _React$Component);

    function HeadingListItem(props) {
        _classCallCheck(this, HeadingListItem);

        var _this = _possibleConstructorReturn(this, (HeadingListItem.__proto__ || Object.getPrototypeOf(HeadingListItem)).call(this, props));

        _this.state = {
            disabled: true,
            name: props.heading.name,
            value: props.heading.value
        };
        _this.setName = _this.setName.bind(_this);
        _this.setValue = _this.setValue.bind(_this);
        _this.edit = _this.edit.bind(_this);
        _this.cancel = _this.cancel.bind(_this);
        _this.save = _this.save.bind(_this);
        _this.delete = _this.delete.bind(_this);
        return _this;
    }

    _createClass(HeadingListItem, [{
        key: 'edit',
        value: function edit() {
            this.setState({ disabled: false });
        }
    }, {
        key: 'save',
        value: function save() {
            var _state = this.state,
                name = _state.name,
                value = _state.value;
            var _props = this.props,
                id = _props.id,
                refresh = _props.refresh;

            _dbClient2.default.customizedPages.editHeading(id, { name: name, value: value }, refresh);
            this.setState({ disabled: true });
        }
    }, {
        key: 'delete',
        value: function _delete() {
            var name = this.state.name;
            var _props2 = this.props,
                id = _props2.id,
                refresh = _props2.refresh;

            _dbClient2.default.customizedPages.deleteHeading(id, { name: name }, refresh);
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this.setState({ disabled: true });
        }
    }, {
        key: 'setName',
        value: function setName(event) {
            this.setState({ name: event.target.value });
        }
    }, {
        key: 'setValue',
        value: function setValue(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                disabled = _state2.disabled,
                name = _state2.name,
                value = _state2.value;

            return _react2.default.createElement(
                'div',
                { className: disabled ? "card-body" : "card-body text-white bg-info" },
                _react2.default.createElement(_InputText2.default, { disabled: true, label: 'Name', inputValue: name, onChange: this.setName }),
                _react2.default.createElement(_InputText2.default, { disabled: disabled, label: 'Value', inputValue: value, onChange: this.setValue }),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group', role: 'group' },
                    disabled && _react2.default.createElement(
                        'button',
                        { className: 'btn btn-primary', type: 'button', onClick: this.edit },
                        'Edit'
                    ),
                    disabled && _react2.default.createElement(
                        'button',
                        { className: 'btn btn-danger', type: 'button', onClick: this.delete },
                        'Delete'
                    ),
                    !disabled && _react2.default.createElement(
                        'button',
                        { className: 'btn btn-success', type: 'button', onClick: this.save },
                        'Save'
                    ),
                    !disabled && _react2.default.createElement(
                        'button',
                        { className: 'btn btn-secondary', type: 'button', onClick: this.cancel },
                        'Cancel'
                    )
                )
            );
        }
    }]);

    return HeadingListItem;
}(_react2.default.Component);

exports.default = HeadingListItem;

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _InputText = __webpack_require__(39);

var _InputText2 = _interopRequireDefault(_InputText);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeadingCreate = function (_React$Component) {
    _inherits(HeadingCreate, _React$Component);

    function HeadingCreate(props) {
        _classCallCheck(this, HeadingCreate);

        var _this = _possibleConstructorReturn(this, (HeadingCreate.__proto__ || Object.getPrototypeOf(HeadingCreate)).call(this, props));

        _this.state = {
            creation: false,
            name: "",
            value: ""
        };
        _this.setName = _this.setName.bind(_this);
        _this.setValue = _this.setValue.bind(_this);
        _this.create = _this.create.bind(_this);
        _this.cancel = _this.cancel.bind(_this);
        _this.save = _this.save.bind(_this);
        return _this;
    }

    _createClass(HeadingCreate, [{
        key: 'create',
        value: function create() {
            this.setState({ creation: true });
        }
    }, {
        key: 'save',
        value: function save() {
            var _state = this.state,
                name = _state.name,
                value = _state.value;
            var _props = this.props,
                id = _props.id,
                refresh = _props.refresh;

            var newHeading = { name: name, value: value, type: "heading" };
            _dbClient2.default.customizedPages.addHeading(id, newHeading, refresh);
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this.setState({ creation: false });
        }
    }, {
        key: 'setName',
        value: function setName(event) {
            this.setState({ name: event.target.value });
        }
    }, {
        key: 'setValue',
        value: function setValue(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                creation = _state2.creation,
                name = _state2.name,
                value = _state2.value;


            if (!creation) return _react2.default.createElement(
                'div',
                { className: 'card-body' },
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group', role: 'group' },
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-primary', onClick: this.create },
                        'Add new heading'
                    )
                )
            );

            return _react2.default.createElement(
                'div',
                { className: 'card-body text-white bg-info' },
                'Create new heading:',
                _react2.default.createElement(_InputText2.default, { label: 'Name', inputValue: name, onChange: this.setName }),
                _react2.default.createElement(_InputText2.default, { label: 'Value', inputValue: value, onChange: this.setValue }),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group', role: 'group' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-success', type: 'button', onClick: this.save },
                        'Save'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-secondary', type: 'button', onClick: this.cancel },
                        'Cancel'
                    )
                )
            );
        }
    }]);

    return HeadingCreate;
}(_react2.default.Component);

exports.default = HeadingCreate;

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _ParagraphListItem = __webpack_require__(465);

var _ParagraphListItem2 = _interopRequireDefault(_ParagraphListItem);

var _ParagraphCreate = __webpack_require__(466);

var _ParagraphCreate2 = _interopRequireDefault(_ParagraphCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParagraphList = function (_React$Component) {
    _inherits(ParagraphList, _React$Component);

    function ParagraphList() {
        _classCallCheck(this, ParagraphList);

        return _possibleConstructorReturn(this, (ParagraphList.__proto__ || Object.getPrototypeOf(ParagraphList)).apply(this, arguments));
    }

    _createClass(ParagraphList, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                paragraphs = _props.paragraphs,
                id = _props.id,
                refresh = _props.refresh;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'card-header text-white bg-secondary' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Paragraphs'
                    )
                ),
                paragraphs && paragraphs.map(function (paragraph) {
                    return _react2.default.createElement(_ParagraphListItem2.default, { refresh: refresh, key: paragraph.name, paragraph: paragraph, id: id });
                }),
                _react2.default.createElement(_ParagraphCreate2.default, { id: id, refresh: refresh })
            );
        }
    }]);

    return ParagraphList;
}(_react2.default.Component);

exports.default = ParagraphList;

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _InputText = __webpack_require__(39);

var _InputText2 = _interopRequireDefault(_InputText);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParagraphListItem = function (_React$Component) {
    _inherits(ParagraphListItem, _React$Component);

    function ParagraphListItem(props) {
        _classCallCheck(this, ParagraphListItem);

        var _this = _possibleConstructorReturn(this, (ParagraphListItem.__proto__ || Object.getPrototypeOf(ParagraphListItem)).call(this, props));

        _this.state = {
            disabled: true,
            name: props.paragraph.name,
            value: props.paragraph.value
        };
        _this.setName = _this.setName.bind(_this);
        _this.setValue = _this.setValue.bind(_this);
        _this.edit = _this.edit.bind(_this);
        _this.cancel = _this.cancel.bind(_this);
        _this.save = _this.save.bind(_this);
        _this.delete = _this.delete.bind(_this);
        return _this;
    }

    _createClass(ParagraphListItem, [{
        key: 'edit',
        value: function edit() {
            this.setState({ disabled: false });
        }
    }, {
        key: 'save',
        value: function save() {
            var _state = this.state,
                name = _state.name,
                value = _state.value;
            var _props = this.props,
                id = _props.id,
                refresh = _props.refresh;

            _dbClient2.default.customizedPages.editParagraph(id, { name: name, value: value }, refresh);
            this.setState({ disabled: true });
        }
    }, {
        key: 'delete',
        value: function _delete() {
            var name = this.state.name;
            var _props2 = this.props,
                id = _props2.id,
                refresh = _props2.refresh;

            _dbClient2.default.customizedPages.deleteParagraph(id, { name: name }, refresh);
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this.setState({ disabled: true });
        }
    }, {
        key: 'setName',
        value: function setName(event) {
            this.setState({ name: event.target.value });
        }
    }, {
        key: 'setValue',
        value: function setValue(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                disabled = _state2.disabled,
                name = _state2.name,
                value = _state2.value;

            return _react2.default.createElement(
                'div',
                { className: disabled ? "card-body" : "card-body text-white bg-info" },
                _react2.default.createElement(_InputText2.default, { disabled: true, label: 'Name', inputValue: name, onChange: this.setName }),
                _react2.default.createElement(_InputText2.default, { disabled: disabled, label: 'Value', inputValue: value, onChange: this.setValue }),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group', role: 'group' },
                    disabled && _react2.default.createElement(
                        'button',
                        { className: 'btn btn-primary', type: 'button', onClick: this.edit },
                        'Edit'
                    ),
                    disabled && _react2.default.createElement(
                        'button',
                        { className: 'btn btn-danger', type: 'button', onClick: this.delete },
                        'Delete'
                    ),
                    !disabled && _react2.default.createElement(
                        'button',
                        { className: 'btn btn-success', type: 'button', onClick: this.save },
                        'Save'
                    ),
                    !disabled && _react2.default.createElement(
                        'button',
                        { className: 'btn btn-secondary', type: 'button', onClick: this.cancel },
                        'Cancel'
                    )
                )
            );
        }
    }]);

    return ParagraphListItem;
}(_react2.default.Component);

exports.default = ParagraphListItem;

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _InputText = __webpack_require__(39);

var _InputText2 = _interopRequireDefault(_InputText);

var _InputArea = __webpack_require__(467);

var _InputArea2 = _interopRequireDefault(_InputArea);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParagraphCreate = function (_React$Component) {
    _inherits(ParagraphCreate, _React$Component);

    function ParagraphCreate(props) {
        _classCallCheck(this, ParagraphCreate);

        var _this = _possibleConstructorReturn(this, (ParagraphCreate.__proto__ || Object.getPrototypeOf(ParagraphCreate)).call(this, props));

        _this.state = {
            creation: false,
            name: "",
            value: ""
        };
        _this.setName = _this.setName.bind(_this);
        _this.setValue = _this.setValue.bind(_this);
        _this.create = _this.create.bind(_this);
        _this.cancel = _this.cancel.bind(_this);
        _this.save = _this.save.bind(_this);
        return _this;
    }

    _createClass(ParagraphCreate, [{
        key: 'create',
        value: function create() {
            this.setState({ creation: true });
        }
    }, {
        key: 'save',
        value: function save() {
            var _state = this.state,
                name = _state.name,
                value = _state.value;
            var _props = this.props,
                id = _props.id,
                refresh = _props.refresh;

            var newParagraph = { name: name, value: value, type: "paraprah" };
            _dbClient2.default.customizedPages.addParagraph(id, newParagraph, refresh);
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this.setState({ creation: false });
        }
    }, {
        key: 'setName',
        value: function setName(event) {
            this.setState({ name: event.target.value });
        }
    }, {
        key: 'setValue',
        value: function setValue(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                creation = _state2.creation,
                name = _state2.name,
                value = _state2.value;


            if (!creation) return _react2.default.createElement(
                'div',
                { className: 'card-body' },
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group', role: 'group' },
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-primary', onClick: this.create },
                        'Add new paragraph'
                    )
                )
            );

            return _react2.default.createElement(
                'div',
                { className: 'card-body text-white bg-info' },
                'Create new paragraph:',
                _react2.default.createElement(_InputText2.default, { label: 'Name', inputValue: name, onChange: this.setName }),
                _react2.default.createElement(_InputArea2.default, { label: 'Value', inputValue: value, onChange: this.setValue }),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group', role: 'group' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-success', type: 'button', onClick: this.save },
                        'Save'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-secondary', type: 'button', onClick: this.cancel },
                        'Cancel'
                    )
                )
            );
        }
    }]);

    return ParagraphCreate;
}(_react2.default.Component);

exports.default = ParagraphCreate;

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputArea = function (_React$Component) {
    _inherits(InputArea, _React$Component);

    function InputArea() {
        _classCallCheck(this, InputArea);

        return _possibleConstructorReturn(this, (InputArea.__proto__ || Object.getPrototypeOf(InputArea)).apply(this, arguments));
    }

    _createClass(InputArea, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                label = _props.label,
                inputValue = _props.inputValue,
                disabled = _props.disabled,
                onChange = _props.onChange;

            return _react2.default.createElement(
                "div",
                { className: "input-group mb-3" },
                _react2.default.createElement(
                    "div",
                    { className: "input-group-prepend" },
                    _react2.default.createElement(
                        "span",
                        { className: "input-group-text", id: "basic-addon3" },
                        label
                    )
                ),
                _react2.default.createElement("textarea", {
                    rows: "4",
                    disabled: disabled,
                    className: "form-control",
                    placeholder: "Enter text",
                    value: inputValue,
                    onChange: onChange
                })
            );
        }
    }]);

    return InputArea;
}(_react2.default.Component);

exports.default = InputArea;

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _ImageListItem = __webpack_require__(469);

var _ImageListItem2 = _interopRequireDefault(_ImageListItem);

var _ImageCreate = __webpack_require__(470);

var _ImageCreate2 = _interopRequireDefault(_ImageCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageList = function (_React$Component) {
    _inherits(ImageList, _React$Component);

    function ImageList() {
        _classCallCheck(this, ImageList);

        return _possibleConstructorReturn(this, (ImageList.__proto__ || Object.getPrototypeOf(ImageList)).apply(this, arguments));
    }

    _createClass(ImageList, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                images = _props.images,
                id = _props.id,
                refresh = _props.refresh;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'card-header text-white bg-secondary' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Images'
                    )
                ),
                images && images.map(function (image) {
                    return _react2.default.createElement(_ImageListItem2.default, { refresh: refresh, key: image.name, image: image, id: id });
                }),
                _react2.default.createElement(_ImageCreate2.default, { id: id, refresh: refresh })
            );
        }
    }]);

    return ImageList;
}(_react2.default.Component);

exports.default = ImageList;

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _InputText = __webpack_require__(39);

var _InputText2 = _interopRequireDefault(_InputText);

var _InputFile = __webpack_require__(174);

var _InputFile2 = _interopRequireDefault(_InputFile);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageListItem = function (_React$Component) {
    _inherits(ImageListItem, _React$Component);

    function ImageListItem(props) {
        _classCallCheck(this, ImageListItem);

        var _this = _possibleConstructorReturn(this, (ImageListItem.__proto__ || Object.getPrototypeOf(ImageListItem)).call(this, props));

        _this.state = {
            disabled: true,
            value: props.image.value
        };
        _this.setName = _this.setName.bind(_this);
        _this.setValue = _this.setValue.bind(_this);
        _this.edit = _this.edit.bind(_this);
        _this.cancel = _this.cancel.bind(_this);
        _this.save = _this.save.bind(_this);
        _this.delete = _this.delete.bind(_this);
        return _this;
    }

    _createClass(ImageListItem, [{
        key: 'edit',
        value: function edit() {
            this.setState({ disabled: false });
        }
    }, {
        key: 'save',
        value: function save() {
            var value = this.state.value;
            var _props = this.props,
                id = _props.id,
                refresh = _props.refresh,
                name = _props.image.name;

            var formImageData = new FormData();
            formImageData.append("name", name);
            formImageData.append("base64image", value.base64image);
            formImageData.append("fileName", value.fileName);
            formImageData.append("fileType", value.fileType);
            _dbClient2.default.customizedPages.editImage(id, formImageData, refresh);
            this.setState({ disabled: true });
        }
    }, {
        key: 'delete',
        value: function _delete() {
            var _props2 = this.props,
                id = _props2.id,
                refresh = _props2.refresh,
                name = _props2.image.name;

            _dbClient2.default.customizedPages.deleteImage(id, { name: name }, refresh);
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this.setState({ disabled: true });
        }
    }, {
        key: 'setName',
        value: function setName(event) {
            this.setState({ name: event.target.value });
        }
    }, {
        key: 'setValue',
        value: function setValue(file) {
            this.setState({ value: file });
        }
    }, {
        key: 'render',
        value: function render() {
            var name = this.props.image.name;
            var _state = this.state,
                disabled = _state.disabled,
                value = _state.value;

            return _react2.default.createElement(
                'div',
                { className: disabled ? "card-body" : "card-body text-white bg-info" },
                _react2.default.createElement(_InputText2.default, { disabled: true, label: 'Name', inputValue: name, onChange: this.setName }),
                _react2.default.createElement(_InputFile2.default, { disabled: disabled, label: 'Value', inputValue: value, onChange: this.setValue }),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group mt-3', role: 'group' },
                    disabled && _react2.default.createElement(
                        'button',
                        { className: 'btn btn-primary', type: 'button', onClick: this.edit },
                        'Edit'
                    ),
                    disabled && _react2.default.createElement(
                        'button',
                        { className: 'btn btn-danger', type: 'button', onClick: this.delete },
                        'Delete'
                    ),
                    !disabled && _react2.default.createElement(
                        'button',
                        { className: 'btn btn-success', type: 'button', onClick: this.save },
                        'Save'
                    ),
                    !disabled && _react2.default.createElement(
                        'button',
                        { className: 'btn btn-secondary', type: 'button', onClick: this.cancel },
                        'Cancel'
                    )
                )
            );
        }
    }]);

    return ImageListItem;
}(_react2.default.Component);

exports.default = ImageListItem;

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _InputText = __webpack_require__(39);

var _InputText2 = _interopRequireDefault(_InputText);

var _InputFile = __webpack_require__(174);

var _InputFile2 = _interopRequireDefault(_InputFile);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageCreate = function (_React$Component) {
    _inherits(ImageCreate, _React$Component);

    function ImageCreate(props) {
        _classCallCheck(this, ImageCreate);

        var _this = _possibleConstructorReturn(this, (ImageCreate.__proto__ || Object.getPrototypeOf(ImageCreate)).call(this, props));

        _this.state = {
            creation: false,
            name: "",
            value: null
        };
        _this.setName = _this.setName.bind(_this);
        _this.setValue = _this.setValue.bind(_this);
        _this.create = _this.create.bind(_this);
        _this.cancel = _this.cancel.bind(_this);
        _this.save = _this.save.bind(_this);
        return _this;
    }

    _createClass(ImageCreate, [{
        key: 'create',
        value: function create() {
            this.setState({ creation: true });
        }
    }, {
        key: 'save',
        value: function save() {
            var _state = this.state,
                name = _state.name,
                value = _state.value;
            var _props = this.props,
                id = _props.id,
                refresh = _props.refresh;

            var formImageData = new FormData();
            formImageData.append("name", name);
            formImageData.append("base64image", value.base64image);
            formImageData.append("fileName", value.fileName);
            formImageData.append("fileType", value.fileType);
            _dbClient2.default.customizedPages.addImage(id, formImageData, refresh);
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this.setState({ creation: false });
        }
    }, {
        key: 'setName',
        value: function setName(event) {
            this.setState({ name: event.target.value });
        }
    }, {
        key: 'setValue',
        value: function setValue(file) {
            this.setState({ value: file });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                creation = _state2.creation,
                name = _state2.name,
                value = _state2.value;

            if (!creation) return _react2.default.createElement(
                'div',
                { className: 'card-body' },
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group', role: 'group' },
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-primary', onClick: this.create },
                        'Add new image'
                    )
                )
            );

            return _react2.default.createElement(
                'div',
                { className: 'card-body text-white bg-info' },
                'Create new image section:',
                _react2.default.createElement(_InputText2.default, { label: 'Name', inputValue: name, onChange: this.setName }),
                _react2.default.createElement(_InputFile2.default, { label: 'Value', inputValue: value, onChange: this.setValue }),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group mt-3', role: 'group' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-success', type: 'button', onClick: this.save },
                        'Save'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-secondary', type: 'button', onClick: this.cancel },
                        'Cancel'
                    )
                )
            );
        }
    }]);

    return ImageCreate;
}(_react2.default.Component);

exports.default = ImageCreate;

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _InputText = __webpack_require__(39);

var _InputText2 = _interopRequireDefault(_InputText);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomizedPageMeta = function (_React$Component) {
    _inherits(CustomizedPageMeta, _React$Component);

    function CustomizedPageMeta(props) {
        _classCallCheck(this, CustomizedPageMeta);

        var _this = _possibleConstructorReturn(this, (CustomizedPageMeta.__proto__ || Object.getPrototypeOf(CustomizedPageMeta)).call(this, props));

        _this.state = {
            disabled: true,
            name: props.page.name,
            value: props.page.value
        };
        _this.setName = _this.setName.bind(_this);
        _this.setValue = _this.setValue.bind(_this);
        _this.edit = _this.edit.bind(_this);
        _this.cancel = _this.cancel.bind(_this);
        _this.save = _this.save.bind(_this);
        return _this;
    }

    _createClass(CustomizedPageMeta, [{
        key: 'edit',
        value: function edit() {
            this.setState({ disabled: false });
        }
    }, {
        key: 'save',
        value: function save() {
            var _state = this.state,
                name = _state.name,
                value = _state.value;
            var _props = this.props,
                page = _props.page,
                refresh = _props.refresh;

            _dbClient2.default.customizedPages.edit(_extends({}, page, { name: name, value: value }), refresh);
            this.setState({ disabled: true });
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this.setState({ disabled: true });
        }
    }, {
        key: 'setName',
        value: function setName(event) {
            this.setState({ name: event.target.value });
        }
    }, {
        key: 'setValue',
        value: function setValue(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var urlId = this.props.urlId;
            var _state2 = this.state,
                disabled = _state2.disabled,
                name = _state2.name,
                value = _state2.value;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'card-header text-white bg-secondary' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Customized page (',
                        urlId,
                        ')'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: disabled ? "card-body" : "card-body text-white bg-info" },
                    _react2.default.createElement(_InputText2.default, { disabled: true, label: 'Name', inputValue: name, onChange: this.setName }),
                    _react2.default.createElement(_InputText2.default, { disabled: disabled, label: 'Value', inputValue: value, onChange: this.setValue }),
                    _react2.default.createElement(
                        'div',
                        { className: 'btn-group', role: 'group' },
                        disabled && _react2.default.createElement(
                            'button',
                            { className: 'btn btn-primary', type: 'button', onClick: this.edit },
                            'Edit'
                        ),
                        !disabled && _react2.default.createElement(
                            'button',
                            { className: 'btn btn-success', type: 'button', onClick: this.save },
                            'Save'
                        ),
                        !disabled && _react2.default.createElement(
                            'button',
                            { className: 'btn btn-secondary', type: 'button', onClick: this.cancel },
                            'Cancel'
                        )
                    )
                )
            );
        }
    }]);

    return CustomizedPageMeta;
}(_react2.default.Component);

exports.default = CustomizedPageMeta;

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFoundPage = function (_React$Component) {
    _inherits(NotFoundPage, _React$Component);

    function NotFoundPage() {
        _classCallCheck(this, NotFoundPage);

        return _possibleConstructorReturn(this, (NotFoundPage.__proto__ || Object.getPrototypeOf(NotFoundPage)).apply(this, arguments));
    }

    _createClass(NotFoundPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    '404: Page not found'
                )
            );
        }
    }]);

    return NotFoundPage;
}(_react2.default.Component);

exports.default = NotFoundPage;

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForbiddenPage = function (_React$Component) {
    _inherits(ForbiddenPage, _React$Component);

    function ForbiddenPage() {
        _classCallCheck(this, ForbiddenPage);

        return _possibleConstructorReturn(this, (ForbiddenPage.__proto__ || Object.getPrototypeOf(ForbiddenPage)).apply(this, arguments));
    }

    _createClass(ForbiddenPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'Access denied'
                )
            );
        }
    }]);

    return ForbiddenPage;
}(_react2.default.Component);

exports.default = ForbiddenPage;

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(54);

var _LogoutButton = __webpack_require__(475);

var _LogoutButton2 = _interopRequireDefault(_LogoutButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainNavbar = function (_React$Component) {
    _inherits(MainNavbar, _React$Component);

    function MainNavbar() {
        _classCallCheck(this, MainNavbar);

        return _possibleConstructorReturn(this, (MainNavbar.__proto__ || Object.getPrototypeOf(MainNavbar)).apply(this, arguments));
    }

    _createClass(MainNavbar, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                authenticated = _props.authenticated,
                loggedUser = _props.loggedUser;

            return _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-expand-md navbar-dark bg-dark' },
                _react2.default.createElement(
                    'div',
                    { className: 'navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2' },
                    _react2.default.createElement(
                        'span',
                        { className: 'navbar-brand  mr-auto' },
                        'Bongo Admin'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'navbar-collapse collapse w-100 order-3 dual-collapse2' },
                    !authenticated && _react2.default.createElement(
                        'span',
                        { className: 'navbar-nav ml-auto' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/loginPage' },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-sm btn-outline-secondary ml-1', type: 'button' },
                                'Login'
                            )
                        )
                    ),
                    authenticated && _react2.default.createElement(
                        'span',
                        { className: 'navbar-nav ml-auto' },
                        _react2.default.createElement(
                            'span',
                            { className: 'navbar-brand mb-0' },
                            'Logged as ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                loggedUser
                            )
                        ),
                        _react2.default.createElement(_LogoutButton2.default, null),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/admin' },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-sm btn-outline-secondary ml-1', type: 'button' },
                                'Admin'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return MainNavbar;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        loggedUser: state.loggedUser,
        authenticated: state.authenticated
    };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(MainNavbar));

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _dbClient = __webpack_require__(13);

var _dbClient2 = _interopRequireDefault(_dbClient);

var _reactRedux = __webpack_require__(54);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogoutButton = function (_React$Component) {
    _inherits(LogoutButton, _React$Component);

    function LogoutButton() {
        _classCallCheck(this, LogoutButton);

        var _this = _possibleConstructorReturn(this, (LogoutButton.__proto__ || Object.getPrototypeOf(LogoutButton)).call(this));

        _this.logout = _this.logout.bind(_this);
        return _this;
    }

    _createClass(LogoutButton, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "a",
                null,
                _react2.default.createElement(
                    "button",
                    { onClick: this.logout, className: "btn btn-sm btn-outline-secondary ml-1", type: "button" },
                    "Logout"
                )
            );
        }
    }, {
        key: "logout",
        value: function logout() {
            var _props = this.props,
                logout = _props.logout,
                history = _props.history;

            _dbClient2.default.auth.logout(function () {
                logout();
                history.push('/logoutPage');
            });
        }
    }]);

    return LogoutButton;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        logout: function logout() {
            dispatch({ type: "LOG_OUT" });
        }
    };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(null, mapDispatchToProps)(LogoutButton));

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _authenticationHandler = __webpack_require__(117);

var _authenticationHandler2 = _interopRequireDefault(_authenticationHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PrivateRoute = function PrivateRoute(_ref) {
    var Component = _ref.component,
        authenticated = _ref.authenticated,
        rest = _objectWithoutProperties(_ref, ['component', 'authenticated']);

    return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {
            return authenticated ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {
                    pathname: '/loginPage',
                    state: { from: props.location }
                } });
        } }));
};
exports.default = PrivateRoute;

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _authenticationHandler = __webpack_require__(117);

var _authenticationHandler2 = _interopRequireDefault(_authenticationHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProtectedRoute = function (_React$Component) {
    _inherits(ProtectedRoute, _React$Component);

    function ProtectedRoute() {
        _classCallCheck(this, ProtectedRoute);

        return _possibleConstructorReturn(this, (ProtectedRoute.__proto__ || Object.getPrototypeOf(ProtectedRoute)).apply(this, arguments));
    }

    _createClass(ProtectedRoute, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                Component = _props.component,
                authenticated = _props.authenticated,
                rest = _objectWithoutProperties(_props, ['component', 'authenticated']);

            return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {
                    return authenticated ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {
                            pathname: '/loginPage',
                            state: { from: props.location }
                        } });
                } }));
        }
    }]);

    return ProtectedRoute;
}(_react2.default.Component);

exports.default = ProtectedRoute;

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(482);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(176)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!./style.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(175)(false);
// imports


// module
exports.push([module.i, "body, html {\r\n    height: 100%;\r\n}\r\n#app {\r\n    height: 100%;\r\n}\r\n\r\n.login-background {\r\n\tbackground-image: url(https://images.unsplash.com/photo-1515022614687-234cd10406dd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f531c8cc3270bf579707edbd68d084b0&auto=format&fit=crop&w=1601&q=80);\r\n    height: 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}", ""]);

// exports


/***/ })

},[177]);
//# sourceMappingURL=client.js.map