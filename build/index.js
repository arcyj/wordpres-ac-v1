/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@icons/material/CheckIcon.js":
/*!***************************************************!*\
  !*** ./node_modules/@icons/material/CheckIcon.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DEFAULT_SIZE = 24;

exports["default"] = function (_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'currentColor' : _ref$fill,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? DEFAULT_SIZE : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? DEFAULT_SIZE : _ref$height,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      props = _objectWithoutProperties(_ref, ['fill', 'width', 'height', 'style']);

  return _react2.default.createElement(
    'svg',
    _extends({
      viewBox: '0 0 ' + DEFAULT_SIZE + ' ' + DEFAULT_SIZE,
      style: _extends({ fill: fill, width: width, height: height }, style)
    }, props),
    _react2.default.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
  );
};

/***/ }),

/***/ "./node_modules/@icons/material/UnfoldMoreHorizontalIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@icons/material/UnfoldMoreHorizontalIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DEFAULT_SIZE = 24;

exports["default"] = function (_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'currentColor' : _ref$fill,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? DEFAULT_SIZE : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? DEFAULT_SIZE : _ref$height,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      props = _objectWithoutProperties(_ref, ['fill', 'width', 'height', 'style']);

  return _react2.default.createElement(
    'svg',
    _extends({
      viewBox: '0 0 ' + DEFAULT_SIZE + ' ' + DEFAULT_SIZE,
      style: _extends({ fill: fill, width: width, height: height }, style)
    }, props),
    _react2.default.createElement('path', { d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z' })
  );
};

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ (function(module) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ (function(module) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ (function(module) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ (function(module) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/axios/node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/***/ (function(module) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./app/assets/images/icons/svg/brightness.tsx":
/*!****************************************************!*\
  !*** ./app/assets/images/icons/svg/brightness.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const Brightness = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "1",
    y: "1",
    width: "58",
    height: "58",
    rx: "4",
    fill: "white",
    stroke: props.color,
    strokeWidth: "2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M39.2232 33.4661H33.6285L36.5842 40.6383C36.6897 40.8844 36.6897 41.1305 36.5842 41.3766C36.4786 41.6227 36.3027 41.7985 36.0564 41.904L33.4702 43.0642C33.2239 43.1345 32.9776 43.1169 32.7313 43.0115C32.5201 42.9411 32.3618 42.7829 32.2562 42.5368L29.4589 35.7337L24.8671 40.4273C24.5856 40.7438 24.2513 40.8141 23.8643 40.6383C23.4772 40.4625 23.2837 40.1637 23.2837 39.7418V17.0648C23.2837 16.6429 23.4772 16.3617 23.8643 16.221C24.2865 16.0453 24.6208 16.098 24.8671 16.3793L39.9093 31.8312C40.1908 32.1125 40.2436 32.464 40.0676 32.8859C39.9269 33.2727 39.6454 33.4661 39.2232 33.4661Z",
    fill: props.color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Brightness);

/***/ }),

/***/ "./app/assets/images/icons/svg/codeIcon.tsx":
/*!**************************************************!*\
  !*** ./app/assets/images/icons/svg/codeIcon.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const CodeIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "15",
    viewBox: "0 0 20 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M2.9958 6.38882C2.99449 6.50811 2.9673 6.62599 2.91581 6.73564C2.86432 6.8453 2.78954 6.94456 2.6958 7.0277L2.4058 7.30151L2.7058 7.57531C2.89055 7.74531 2.9947 7.97476 2.9958 8.21419V11.8649C2.9958 12.107 3.10116 12.3392 3.2887 12.5103C3.47623 12.6815 3.73059 12.7776 3.99581 12.7776C4.26102 12.7776 4.51538 12.8738 4.70291 13.045C4.89045 13.2161 4.99581 13.4483 4.99581 13.6903C4.99581 13.9324 4.89045 14.1645 4.70291 14.3357C4.51538 14.5069 4.26102 14.603 3.99581 14.603C3.20015 14.603 2.43709 14.3145 1.87448 13.8011C1.31187 13.2876 0.9958 12.5911 0.9958 11.8649V8.5884L0.295799 7.94951C0.20207 7.86467 0.127676 7.76372 0.076907 7.6525C0.0261383 7.54129 0 7.42199 0 7.30151C0 7.18102 0.0261383 7.06173 0.076907 6.95051C0.127676 6.83929 0.20207 6.73834 0.295799 6.6535L0.9958 6.01462V2.73806C0.9958 2.01188 1.31187 1.31545 1.87448 0.801961C2.43709 0.288474 3.20015 0 3.99581 0C4.26102 0 4.51538 0.0961579 4.70291 0.26732C4.89045 0.438482 4.99581 0.670628 4.99581 0.912688C4.99581 1.15475 4.89045 1.38689 4.70291 1.55806C4.51538 1.72922 4.26102 1.82538 3.99581 1.82538C3.73059 1.82538 3.47623 1.92153 3.2887 2.0927C3.10116 2.26386 2.9958 2.496 2.9958 2.73806V6.38882ZM19.6958 6.66262C19.8791 6.83323 19.9817 7.06261 19.9817 7.30151C19.9817 7.5404 19.8791 7.76978 19.6958 7.94039L18.9958 8.5884V11.8649C18.9958 12.5911 18.6798 13.2876 18.1171 13.8011C17.5545 14.3145 16.7915 14.603 15.9958 14.603C15.7306 14.603 15.4763 14.5069 15.2887 14.3357C15.1012 14.1645 14.9958 13.9324 14.9958 13.6903C14.9958 13.4483 15.1012 13.2161 15.2887 13.045C15.4763 12.8738 15.7306 12.7776 15.9958 12.7776C16.261 12.7776 16.5154 12.6815 16.7029 12.5103C16.8905 12.3392 16.9958 12.107 16.9958 11.8649V8.21419C16.9971 8.0949 17.0243 7.97703 17.0758 7.86737C17.1273 7.75772 17.2021 7.65846 17.2958 7.57531L17.5858 7.30151L17.2858 7.0277C17.1011 6.8577 16.9969 6.62825 16.9958 6.38882V2.73806C16.9958 2.496 16.8905 2.26386 16.7029 2.0927C16.5154 1.92153 16.261 1.82538 15.9958 1.82538C15.7306 1.82538 15.4763 1.72922 15.2887 1.55806C15.1012 1.38689 14.9958 1.15475 14.9958 0.912688C14.9958 0.670628 15.1012 0.438482 15.2887 0.26732C15.4763 0.0961579 15.7306 0 15.9958 0C16.7915 0 17.5545 0.288474 18.1171 0.801961C18.6798 1.31545 18.9958 2.01188 18.9958 2.73806V6.01462L19.6958 6.6535V6.66262ZM12.3658 1.88926C12.488 1.93352 12.5995 1.99934 12.6938 2.08295C12.7881 2.16656 12.8634 2.26632 12.9154 2.37652C12.9674 2.48673 12.9951 2.60521 12.9969 2.72519C12.9987 2.84518 12.9745 2.9643 12.9258 3.07576L8.92581 12.2026C8.85171 12.3725 8.72344 12.5181 8.55763 12.6206C8.39181 12.7231 8.19609 12.7778 7.99581 12.7776C7.83244 12.7778 7.67151 12.7414 7.52711 12.6716C7.38271 12.6019 7.25923 12.5009 7.16747 12.3776C7.07571 12.2542 7.01846 12.1122 7.00074 11.9639C6.98302 11.8157 7.00536 11.6658 7.06581 11.5273L11.0658 2.40037C11.1143 2.28884 11.1864 2.18712 11.278 2.10105C11.3696 2.01498 11.4789 1.94625 11.5997 1.89877C11.7204 1.8513 11.8503 1.82603 11.9817 1.82439C12.1132 1.82276 12.2437 1.84481 12.3658 1.88926Z",
    fill: "#9DA9B5"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CodeIcon);

/***/ }),

/***/ "./app/assets/images/icons/svg/contrast.tsx":
/*!**************************************************!*\
  !*** ./app/assets/images/icons/svg/contrast.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const Contrast = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "1",
    y: "1",
    width: "58",
    height: "58",
    rx: "4",
    fill: "white",
    stroke: props.color,
    strokeWidth: "2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20.7118 39.5182C18.1783 36.9517 16.9116 33.8578 16.9116 30.2365C16.9116 26.6152 18.1783 23.5389 20.7118 21.0075C23.2804 18.441 26.3768 17.1577 30.001 17.1577C33.6252 17.1577 36.704 18.441 39.2375 21.0075C41.8061 23.5389 43.0904 26.6152 43.0904 30.2365C43.0904 33.8578 41.8061 36.9517 39.2375 39.5182C36.704 42.0496 33.6252 43.3153 30.001 43.3153C26.3768 43.3153 23.2804 42.0496 20.7118 39.5182ZM30.001 39.9401C32.6752 39.9401 34.9623 38.9908 36.8624 37.0923C38.7624 35.1938 39.7125 32.9085 39.7125 30.2365C39.7125 27.5645 38.7624 25.2792 36.8624 23.3807C34.9623 21.4822 32.6752 20.5329 30.001 20.5329V39.9401Z",
    fill: props.color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Contrast);

/***/ }),

/***/ "./app/assets/images/icons/svg/copyStatement.tsx":
/*!*******************************************************!*\
  !*** ./app/assets/images/icons/svg/copyStatement.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const CopyStatement = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "215",
    height: "181",
    viewBox: "0 0 215 181",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    clipPath: "url(#clip0)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M77.437 23.6199C102.049 35.9287 125.346 31.5932 137.205 37.5243C149.065 43.4554 170.552 62.7503 143.183 117.476C115.814 172.201 78.2908 163.474 65.2464 156.95C4.16114 126.405 33.8491 1.82103 77.437 23.6199Z",
    fill: "#EEEFF4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    filter: "url(#filter0_d)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "50.0002",
    y: "61",
    width: "139",
    height: "79",
    rx: "3",
    fill: "#E6E9F8"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M50.0002 64C50.0002 62.3431 51.3433 61 53.0002 61H186C187.657 61 189 62.3431 189 64V77H50.0002V64Z",
    fill: "#5E6CBE"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "71.0002",
    y: "66",
    width: "115",
    height: "8",
    rx: "1",
    fill: "#E6E9F8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M55.0002 70.5L58.7502 68.3349L58.7502 72.6651L55.0002 70.5Z",
    fill: "#E6E9F8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M67.0002 70.5L63.2502 72.6651L63.2502 68.3349L67.0002 70.5Z",
    fill: "#E6E9F8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "75.0002",
    y: "69",
    width: "46",
    height: "3",
    rx: "1",
    fill: "#A0A6CC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "74.0002",
    y: "92",
    width: "48",
    height: "5",
    rx: "1",
    fill: "#DADEF9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "74.0002",
    y: "96",
    width: "45",
    height: "5",
    rx: "1",
    fill: "#DADEF9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "74.0002",
    y: "100",
    width: "43",
    height: "5",
    rx: "1",
    fill: "#DADEF9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "74.0002",
    y: "104",
    width: "40",
    height: "5",
    rx: "1",
    fill: "#DADEF9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "74.0002",
    y: "108",
    width: "42",
    height: "5",
    rx: "1",
    fill: "#DADEF9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "74.0002",
    y: "112",
    width: "46",
    height: "5",
    rx: "1",
    fill: "#DADEF9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "74.0002",
    y: "116",
    width: "45",
    height: "5",
    rx: "1",
    fill: "#DADEF9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "74.0002",
    y: "120",
    width: "48",
    height: "5",
    rx: "1",
    fill: "#DADEF9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "75.0002",
    y: "93",
    width: "46",
    height: "3",
    rx: "1",
    fill: "#A0A6CC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "75.0002",
    y: "97",
    width: "43",
    height: "3",
    rx: "1",
    fill: "#A0A6CC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "75.0002",
    y: "101",
    width: "41",
    height: "3",
    rx: "1",
    fill: "#A0A6CC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "75.0002",
    y: "105",
    width: "38",
    height: "3",
    rx: "1",
    fill: "#A0A6CC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "75.0002",
    y: "109",
    width: "40",
    height: "3",
    rx: "1",
    fill: "#A0A6CC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "75.0002",
    y: "113",
    width: "44",
    height: "3",
    rx: "1",
    fill: "#A0A6CC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "75.0002",
    y: "117",
    width: "43",
    height: "3",
    rx: "1",
    fill: "#A0A6CC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "75.0002",
    y: "121",
    width: "46",
    height: "3",
    rx: "1",
    fill: "#A0A6CC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    filter: "url(#filter1_d)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "140",
    y: "102",
    width: "61",
    height: "29",
    rx: "5",
    fill: "#5E6CBE"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M160.354 120.141C162.123 120.141 163.477 119.092 163.799 117.475L163.811 117.416H162.744L162.727 117.469C162.358 118.582 161.537 119.168 160.354 119.168C158.672 119.168 157.576 117.826 157.576 115.77V115.764C157.576 113.707 158.666 112.377 160.354 112.377C161.543 112.377 162.375 112.975 162.703 114L162.744 114.129H163.811L163.799 114.07C163.477 112.471 162.112 111.404 160.354 111.404C157.998 111.404 156.492 113.104 156.492 115.764V115.77C156.492 118.43 158.004 120.141 160.354 120.141ZM167.426 120.117C169.108 120.117 170.244 118.898 170.244 116.953V116.941C170.244 114.996 169.102 113.789 167.42 113.789C165.738 113.789 164.602 115.002 164.602 116.941V116.953C164.602 118.893 165.733 120.117 167.426 120.117ZM167.432 119.215C166.354 119.215 165.645 118.389 165.645 116.953V116.941C165.645 115.518 166.36 114.691 167.42 114.691C168.498 114.691 169.201 115.512 169.201 116.941V116.953C169.201 118.383 168.504 119.215 167.432 119.215ZM171.276 122.051H172.295V118.98H172.319C172.699 119.684 173.408 120.117 174.27 120.117C175.799 120.117 176.842 118.881 176.842 116.959V116.953C176.842 115.031 175.811 113.789 174.252 113.789C173.379 113.789 172.699 114.229 172.319 114.938H172.295V113.906H171.276V122.051ZM174.053 119.215C173.028 119.215 172.289 118.318 172.289 116.959V116.953C172.289 115.588 173.022 114.691 174.053 114.691C175.131 114.691 175.799 115.553 175.799 116.953V116.959C175.799 118.348 175.131 119.215 174.053 119.215ZM178.225 122.051C179.326 122.051 179.86 121.547 180.293 120.381L182.672 113.906H181.6L179.912 118.98H179.889L178.207 113.906H177.117L179.379 120.006L179.256 120.352C179.01 121.043 178.653 121.207 178.008 121.207C177.885 121.207 177.768 121.189 177.68 121.172V122.004C177.809 122.027 178.026 122.051 178.225 122.051Z",
    fill: "#E6E9F8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M198.5 138V120.5L199 120L209 130L212 133L206 134L208 137.5L208.5 139L205.5 140.5L204.5 138L203 136H202L200 137.5L198.5 138Z",
    fill: "#D0CDE1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M197 116V141.562L198.656 140.187L202.687 136.812L204.719 140.844L205.156 141.75L206.063 141.281L209.156 139.687L210.031 139.25L209.594 138.343L207.75 134.718L212.813 134.093L214.843 133.843L213.407 132.406L198.72 117.687L197 116ZM199 120.844L210.563 132.374L206.063 132.906L204.656 133.094L205.313 134.374L207.375 138.374L206.062 139.062L203.906 134.75L203.312 133.625L202.344 134.437L199 137.25V120.844Z",
    fill: "#27262B"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "201.362",
    y1: "114.559",
    x2: "203.955",
    y2: "113.051",
    stroke: "#27262B",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "198",
    y1: "112",
    x2: "198",
    y2: "109",
    stroke: "#27262B",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "193.849",
    y1: "113.544",
    x2: "191.727",
    y2: "111.423",
    stroke: "#27262B",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "193.103",
    y1: "117.279",
    x2: "190.28",
    y2: "118.294",
    stroke: "#27262B",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M36.5835 56.1667C34.6079 56.1667 33.0002 54.5589 33.0002 52.5833C33.0002 50.6077 34.6079 49 36.5835 49C38.5591 49 40.1668 50.6077 40.1668 52.5833C40.1668 54.5589 38.5591 56.1667 36.5835 56.1667ZM36.5835 51.3889C35.9265 51.3889 35.389 51.9264 35.389 52.5833C35.389 53.2403 35.9265 53.7778 36.5835 53.7778C37.2404 53.7778 37.7779 53.2403 37.7779 52.5833C37.7779 51.9264 37.2404 51.3889 36.5835 51.3889Z",
    fill: "#DADDE3"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
    id: "filter0_d",
    x: "50.0002",
    y: "61",
    width: "145",
    height: "85",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feOffset", {
    dx: "6",
    dy: "6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.362396 0 0 0 0 0.382075 0 0 0 0 0.591667 0 0 0 0.2 0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
    id: "filter1_d",
    x: "140",
    y: "102",
    width: "64",
    height: "32",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feOffset", {
    dx: "2",
    dy: "2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feGaussianBlur", {
    stdDeviation: "0.5"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.368627 0 0 0 0 0.423529 0 0 0 0 0.745098 0 0 0 0.2 0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "214.843",
    height: "180.232",
    fill: "white"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CopyStatement);

/***/ }),

/***/ "./app/assets/images/icons/svg/copyText.tsx":
/*!**************************************************!*\
  !*** ./app/assets/images/icons/svg/copyText.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const CopyTextIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "16",
    height: "15",
    viewBox: "0 0 16 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 9.12688H14V1.82538H6V9.12688ZM10 12.7776H2V5.47613H4V10.0396C4 10.2816 4.10536 10.5138 4.29289 10.6849C4.48043 10.8561 4.73478 10.9523 5 10.9523H10V12.7776ZM15 0H5C4.73478 0 4.48043 0.0961579 4.29289 0.26732C4.10536 0.438482 4 0.670628 4 0.912688V3.65075H1C0.734784 3.65075 0.48043 3.74691 0.292893 3.91807C0.105357 4.08924 0 4.32138 0 4.56344V13.6903C0 13.9324 0.105357 14.1645 0.292893 14.3357C0.48043 14.5069 0.734784 14.603 1 14.603H11C11.2652 14.603 11.5196 14.5069 11.7071 14.3357C11.8946 14.1645 12 13.9324 12 13.6903V10.9523H15C15.2652 10.9523 15.5196 10.8561 15.7071 10.6849C15.8946 10.5138 16 10.2816 16 10.0396V0.912688C16 0.670628 15.8946 0.438482 15.7071 0.26732C15.5196 0.0961579 15.2652 0 15 0Z",
    fill: "#9DA9B5"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CopyTextIcon);

/***/ }),

/***/ "./app/assets/images/icons/svg/cursor.tsx":
/*!************************************************!*\
  !*** ./app/assets/images/icons/svg/cursor.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const Cursor = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "1",
    y: "1",
    width: "58",
    height: "58",
    rx: "4",
    fill: "white",
    stroke: props.color,
    strokeWidth: "2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M39.2232 33.4661H33.6285L36.5842 40.6383C36.6897 40.8844 36.6897 41.1305 36.5842 41.3766C36.4786 41.6227 36.3027 41.7985 36.0564 41.904L33.4702 43.0642C33.2239 43.1345 32.9776 43.1169 32.7313 43.0115C32.5201 42.9411 32.3618 42.7829 32.2562 42.5368L29.4589 35.7337L24.8671 40.4273C24.5856 40.7438 24.2513 40.8141 23.8643 40.6383C23.4772 40.4625 23.2837 40.1637 23.2837 39.7418V17.0648C23.2837 16.6429 23.4772 16.3617 23.8643 16.221C24.2865 16.0453 24.6208 16.098 24.8671 16.3793L39.9093 31.8312C40.1908 32.1125 40.2436 32.464 40.0676 32.8859C39.9269 33.2727 39.6454 33.4661 39.2232 33.4661Z",
    fill: props.color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Cursor);

/***/ }),

/***/ "./app/assets/images/icons/svg/grayscale.tsx":
/*!***************************************************!*\
  !*** ./app/assets/images/icons/svg/grayscale.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const Grayscale = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Group-3041",
    transform: "translate(1.000000, 1.000000)",
    fillRule: "nonzero"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    id: "Rectangle",
    stroke: props.color,
    strokeWidth: "2",
    fill: "#FFFFFF",
    x: "0",
    y: "0",
    width: "58",
    height: "58",
    rx: "4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "",
    transform: "translate(20.000000, 16.000000)",
    fill: props.color
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.4829704,1.11719075 C11.0284244,2.87761585 11.7613801,4.57032529 12.6818373,6.19533307 C13.6022804,7.78647603 14.4375262,9.0390827 15.1874762,9.95315307 C15.9375671,10.8672095 16.5852127,11.950548 17.130695,13.2031267 C17.7102786,14.4218965 18,15.6745172 18,16.9609886 C18,19.4662299 17.1136442,21.5989722 15.3409327,23.3594952 C13.6022804,25.1198784 11.488653,26 9.00000845,26 C6.51136386,26 4.38068581,25.1198784 2.6079602,23.3594952 C0.869319127,21.5989722 0,19.4662299 0,16.9609886 C0,15.6745172 0.272727017,14.4218965 0.818182459,13.2031267 C1.39772526,11.9844128 2.06250617,10.9010743 2.81249841,9.95315307 C3.59659211,9.00523187 4.43182388,7.73569979 5.31819373,6.14454284 C6.23863684,4.55339988 6.97159246,2.87761585 7.51706059,1.11719075 C7.75568616,0.372396917 8.25000211,0 9.00000845,0 C9.78410215,0 10.2784181,0.372396917 10.4829704,1.11719075 Z M9.00000845,22.7500404 C9.23864812,22.7500404 9.4261497,22.6823387 9.56251321,22.5469354 C9.73296407,22.3776812 9.8181895,22.1745762 9.8181895,21.9376204 C9.8181895,21.7005247 9.73296407,21.5143452 9.56251321,21.3789418 C9.4261497,21.2096877 9.23864812,21.1250606 9.00000845,21.1250606 C7.87501303,21.1250606 6.90341775,20.735776 6.0852367,19.957067 C5.30114301,19.144647 4.90908912,18.1797585 4.90908912,17.0625411 C4.90908912,16.8255853 4.82386368,16.6394057 4.65341282,16.5040024 C4.51704931,16.3347483 4.32954773,16.2499813 4.09090807,16.2499813 C3.8522825,16.2499813 3.64773019,16.3347483 3.47727932,16.5040024 C3.34091582,16.6394057 3.27272702,16.8255853 3.27272702,17.0625411 C3.27272702,18.6198193 3.83523177,19.957067 4.96022719,21.0742843 C6.0852367,22.1915017 7.43182106,22.7500404 9.00000845,22.7500404 Z",
    id: "Shape"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Grayscale);

/***/ }),

/***/ "./app/assets/images/icons/svg/hideImages.tsx":
/*!****************************************************!*\
  !*** ./app/assets/images/icons/svg/hideImages.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const HideImages = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "1",
    y: "1",
    width: "58",
    height: "58",
    rx: "4",
    fill: "white",
    stroke: props.color,
    strokeWidth: "2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M40.5582 38.7432V39.587C40.5582 40.2902 40.3119 40.8879 39.8193 41.3801C39.3266 41.8723 38.7285 42.1184 38.0247 42.1184H17.7573C17.0536 42.1184 16.4554 41.8723 15.9628 41.3801C15.4702 40.8879 15.2239 40.2902 15.2239 39.587V26.0863C15.2239 25.3832 15.4702 24.7855 15.9628 24.2933C16.4554 23.8011 17.0536 23.5549 17.7573 23.5549H18.6018V34.5243C18.6018 35.6845 19.0064 36.6865 19.8157 37.5303C20.6602 38.3389 21.663 38.7432 22.8242 38.7432H40.5582ZM45.625 34.5243C45.625 35.2274 45.3787 35.8251 44.8861 36.3173C44.3935 36.8095 43.7953 37.0556 43.0916 37.0556H22.8242C22.1204 37.0556 21.5223 36.8095 21.0297 36.3173C20.537 35.8251 20.2907 35.2274 20.2907 34.5243V21.0236C20.2907 20.3204 20.537 19.7227 21.0297 19.2305C21.5223 18.7383 22.1204 18.4922 22.8242 18.4922H43.0916C43.7953 18.4922 44.3935 18.7383 44.8861 19.2305C45.3787 19.7227 45.625 20.3204 45.625 21.0236V34.5243ZM27.9966 25.348C28.4892 24.8558 28.7355 24.2581 28.7355 23.5549C28.7355 22.8518 28.4892 22.2541 27.9966 21.7619C27.504 21.2697 26.9058 21.0236 26.2021 21.0236C25.4983 21.0236 24.9002 21.2697 24.4076 21.7619C23.9149 22.2541 23.6686 22.8518 23.6686 23.5549C23.6686 24.2581 23.9149 24.8558 24.4076 25.348C24.9002 25.8402 25.4983 26.0863 26.2021 26.0863C26.9058 26.0863 27.504 25.8402 27.9966 25.348ZM23.6686 31.1491V33.6805H42.2471V27.7739L37.6025 23.133C37.321 22.8518 37.0395 22.8518 36.758 23.133L29.58 30.3053L27.4688 28.1958C27.1873 27.9145 26.9058 27.9145 26.6243 28.1958L23.6686 31.1491Z",
    fill: props.color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HideImages);

/***/ }),

/***/ "./app/assets/images/icons/svg/highlightLinks.tsx":
/*!********************************************************!*\
  !*** ./app/assets/images/icons/svg/highlightLinks.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const HighlightLinks = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "1",
    y: "1",
    width: "58",
    height: "58",
    rx: "4",
    fill: "white",
    stroke: props.color,
    strokeWidth: "2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M33.8007 26.0586C35.3489 27.6407 36.123 29.5392 36.123 31.7542C36.123 33.9691 35.3489 35.8501 33.8007 37.3971L30.2117 40.9832C28.6635 42.5301 26.781 43.3036 24.5643 43.3036C22.3475 43.3036 20.4474 42.5125 18.8641 40.9304C17.3159 39.3835 16.5417 37.5025 16.5417 35.2876C16.5417 33.0726 17.3159 31.1917 18.8641 29.6447L20.8697 27.6407C21.116 27.3946 21.3975 27.3419 21.7142 27.4825C22.066 27.6231 22.2596 27.8692 22.2947 28.2208C22.3299 29.1701 22.5059 30.1018 22.8225 31.0159C22.9281 31.3323 22.8577 31.6136 22.6114 31.8597L21.9253 32.598C21.1864 33.3363 20.7993 34.2328 20.7641 35.2876C20.7641 36.3072 21.1336 37.1861 21.8725 37.9244C22.6114 38.6979 23.5087 39.0846 24.5643 39.0846C25.6199 39.0846 26.5171 38.7155 27.256 37.9772L30.7923 34.4438C31.5312 33.7055 31.9007 32.8089 31.9007 31.7542C31.9007 30.6995 31.5312 29.8029 30.7923 29.0646C30.6163 28.8888 30.4404 28.7306 30.2645 28.59C30.0182 28.4493 29.895 28.2384 29.895 27.9571C29.8598 27.3243 30.0534 26.7969 30.4756 26.375L31.6368 25.2675C31.9534 24.916 32.3053 24.8808 32.6923 25.1621C33.0794 25.4433 33.4489 25.7422 33.8007 26.0586ZM35.5425 16.3022C37.7592 16.3022 39.6417 17.0933 41.1899 18.6754C42.7733 20.2224 43.565 22.1033 43.565 24.3183C43.565 26.5332 42.7909 28.4142 41.2427 29.9611L39.237 31.9651C38.9907 32.2112 38.6916 32.264 38.3398 32.1234C38.0231 31.9827 37.8472 31.7366 37.812 31.385C37.7768 30.4358 37.6009 29.5041 37.2842 28.59C37.1786 28.2736 37.249 27.9923 37.4953 27.7462L38.1814 27.0079C38.9204 26.2695 39.2898 25.3906 39.2898 24.371C39.325 23.3163 38.9731 22.4197 38.2342 21.6814C37.4953 20.9079 36.598 20.5212 35.5425 20.5212C34.4869 20.5212 33.5896 20.8904 32.8507 21.6287L29.3144 25.1621C28.5755 25.9004 28.2061 26.7969 28.2061 27.8517C28.2061 28.9064 28.5755 29.8029 29.3144 30.5412C29.4904 30.717 29.6663 30.8752 29.8422 31.0159C30.0885 31.1565 30.2117 31.3675 30.2117 31.6487C30.2469 32.2816 30.0534 32.8089 29.6311 33.2308L28.47 34.3383C28.1533 34.6899 27.8014 34.725 27.4144 34.4438C27.0273 34.1625 26.6579 33.8637 26.306 33.5473C24.7578 31.9651 23.9837 30.0666 23.9837 27.8517C23.9837 25.6367 24.7578 23.7557 26.306 22.2088L29.895 18.6227C31.4432 17.0757 33.3257 16.3022 35.5425 16.3022Z",
    fill: props.color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HighlightLinks);

/***/ }),

/***/ "./app/assets/images/icons/svg/invertColors.tsx":
/*!******************************************************!*\
  !*** ./app/assets/images/icons/svg/invertColors.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const InvertColors = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "1",
    y: "1",
    width: "58",
    height: "58",
    rx: "4",
    fill: "white",
    stroke: props.color,
    strokeWidth: "2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M39.7388 42.9853H20.2612C19.3651 42.9853 18.6 42.6683 17.9659 42.0342C17.3319 41.4002 17.0149 40.6351 17.0149 39.739V20.2614C17.0149 19.3653 17.3319 18.6002 17.9659 17.9662C18.6 17.3322 19.3651 17.0151 20.2612 17.0151H39.7388C40.6349 17.0151 41.4 17.3322 42.034 17.9662C42.668 18.6002 42.985 19.3653 42.985 20.2614V39.739C42.985 40.6351 42.668 41.4002 42.034 42.0342C41.4 42.6683 40.6349 42.9853 39.7388 42.9853ZM39.7388 23.5077C39.7388 22.6116 39.4175 21.8423 38.775 21.1998L35.7317 24.2685C34.9877 23.5077 34.1212 22.9201 33.1321 22.5059C32.143 22.0917 31.099 21.8845 30 21.8845C28.529 21.8845 27.1722 22.2481 25.9295 22.9751C24.6867 23.7021 23.7019 24.687 22.9748 25.9297C22.2478 27.1724 21.8843 28.5292 21.8843 30.0002C21.8843 31.0992 22.0914 32.1433 22.5057 33.1324C22.9199 34.1215 23.5074 34.988 24.2683 35.7319L21.1995 38.8006C21.842 39.4262 22.6113 39.739 23.5074 39.739H36.4925C37.3886 39.739 38.1537 39.422 38.7877 38.788C39.4218 38.1539 39.7388 37.3889 39.7388 36.4927V23.5077ZM30 38.1159C27.7512 38.1159 25.8407 37.3212 24.2683 35.7319L35.7317 24.2685C36.4925 25.0125 37.08 25.879 37.4943 26.8681C37.9085 27.8572 38.1156 28.9012 38.1156 30.0002C38.1156 31.4712 37.7521 32.828 37.0251 34.0707C36.2981 35.3134 35.3132 36.2983 34.0705 37.0253C32.8278 37.7524 31.4709 38.1159 30 38.1159Z",
    fill: props.color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InvertColors);

/***/ }),

/***/ "./app/assets/images/icons/svg/newPage.tsx":
/*!*************************************************!*\
  !*** ./app/assets/images/icons/svg/newPage.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const NewPage = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "191",
    height: "141",
    viewBox: "0 0 191 141",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    clipPath: "url(#clip0)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M24.4349 15.8595C51.95 15.4328 70.6232 0.843165 83.8815 0.637539C97.1398 0.431914 125.104 7.64509 126.052 68.8253C127.001 130.006 89.6808 139.564 75.0978 139.79C6.80955 140.854 -24.2941 16.6152 24.4349 15.8595Z",
    fill: "#EEEFF4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    filter: "url(#filter0_d)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "22",
    y: "42",
    width: "139",
    height: "79",
    rx: "3",
    fill: "#E6E9F8"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22 45C22 43.3431 23.3431 42 25 42H158C159.657 42 161 43.3431 161 45V58H22V45Z",
    fill: "#5E6CBE"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M27 50.5L30.75 48.3349L30.75 52.6651L27 50.5Z",
    fill: "#E6E9F8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M39 50.5L35.25 52.6651L35.25 48.3349L39 50.5Z",
    fill: "#E6E9F8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "43",
    y: "47",
    width: "115",
    height: "8",
    rx: "1",
    fill: "#E6E9F8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "47",
    y: "50",
    width: "46",
    height: "3",
    rx: "1",
    fill: "#A0A6CC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    filter: "url(#filter1_d)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "97",
    y: "81",
    width: "80",
    height: "29",
    rx: "5",
    fill: "#5E6CBE"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M112.82 99H113.863V92.3262H113.893L118.545 99H119.57V90.5449H118.527V97.2188H118.498L113.846 90.5449H112.82V99ZM123.561 99.1172C124.891 99.1172 125.887 98.3203 126.086 97.3125L126.098 97.2539H125.096L125.078 97.3066C124.902 97.8281 124.357 98.2148 123.584 98.2148C122.5 98.2148 121.809 97.4824 121.785 96.2285H126.174V95.8535C126.174 94.0254 125.16 92.7891 123.496 92.7891C121.832 92.7891 120.754 94.084 120.754 95.9707V95.9766C120.754 97.8926 121.809 99.1172 123.561 99.1172ZM123.49 93.6914C124.381 93.6914 125.037 94.248 125.137 95.4316H121.803C121.914 94.2949 122.605 93.6914 123.49 93.6914ZM128.412 99H129.449L130.82 94.2832H130.844L132.221 99H133.258L134.957 92.9062H133.949L132.73 97.8633H132.707L131.324 92.9062H130.34L128.963 97.8633H128.939L127.721 92.9062H126.707L128.412 99ZM138.256 101.051H139.275V97.9805H139.299C139.68 98.6836 140.389 99.1172 141.25 99.1172C142.779 99.1172 143.822 97.8809 143.822 95.959V95.9531C143.822 94.0312 142.791 92.7891 141.232 92.7891C140.359 92.7891 139.68 93.2285 139.299 93.9375H139.275V92.9062H138.256V101.051ZM141.033 98.2148C140.008 98.2148 139.27 97.3184 139.27 95.959V95.9531C139.27 94.5879 140.002 93.6914 141.033 93.6914C142.111 93.6914 142.779 94.5527 142.779 95.9531V95.959C142.779 97.3477 142.111 98.2148 141.033 98.2148ZM146.635 99.1172C147.449 99.1172 148.182 98.6777 148.539 98.0098H148.562V99H149.582V94.7871C149.582 93.5684 148.68 92.7891 147.238 92.7891C145.803 92.7891 144.93 93.5977 144.842 94.5996L144.836 94.6641H145.82L145.832 94.6113C145.949 94.0664 146.441 93.6914 147.227 93.6914C148.076 93.6914 148.562 94.1426 148.562 94.8867V95.3965L146.816 95.4961C145.416 95.5781 144.607 96.2285 144.607 97.2656V97.2773C144.607 98.3848 145.422 99.1172 146.635 99.1172ZM145.65 97.2773V97.2656C145.65 96.6973 146.119 96.334 146.934 96.2871L148.562 96.1875V96.6855C148.562 97.5703 147.824 98.2324 146.863 98.2324C146.131 98.2324 145.65 97.8633 145.65 97.2773ZM153.455 101.168C155.107 101.168 156.145 100.242 156.145 98.8301V92.9062H155.125V93.9375H155.102C154.727 93.2578 154.047 92.7891 153.186 92.7891C151.639 92.7891 150.578 94.0195 150.578 95.9121V95.918C150.578 97.8223 151.627 99.0586 153.162 99.0586C154.035 99.0586 154.738 98.625 155.102 97.9512H155.125V98.7305C155.125 99.6738 154.516 100.266 153.443 100.266C152.611 100.266 152.031 99.9961 151.838 99.5566L151.814 99.5039H150.789L150.801 99.5566C151 100.459 151.949 101.168 153.455 101.168ZM153.385 98.1562C152.301 98.1562 151.621 97.3008 151.621 95.918V95.9121C151.621 94.5586 152.301 93.6914 153.385 93.6914C154.416 93.6914 155.125 94.5703 155.125 95.9121V95.918C155.125 97.2715 154.422 98.1562 153.385 98.1562ZM159.971 99.1172C161.301 99.1172 162.297 98.3203 162.496 97.3125L162.508 97.2539H161.506L161.488 97.3066C161.312 97.8281 160.768 98.2148 159.994 98.2148C158.91 98.2148 158.219 97.4824 158.195 96.2285H162.584V95.8535C162.584 94.0254 161.57 92.7891 159.906 92.7891C158.242 92.7891 157.164 94.084 157.164 95.9707V95.9766C157.164 97.8926 158.219 99.1172 159.971 99.1172ZM159.9 93.6914C160.791 93.6914 161.447 94.248 161.547 95.4316H158.213C158.324 94.2949 159.016 93.6914 159.9 93.6914Z",
    fill: "#E6E9F8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M174.5 117V99.5L175 99L185 109L188 112L182 113L184 116.5L184.5 118L181.5 119.5L180.5 117L179 115H178L176 116.5L174.5 117Z",
    fill: "#D0CDE1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M173 95V120.562L174.656 119.187L178.687 115.812L180.719 119.844L181.156 120.75L182.063 120.281L185.156 118.687L186.031 118.25L185.594 117.343L183.75 113.718L188.813 113.093L190.843 112.843L189.407 111.406L174.72 96.687L173 95ZM175 99.844L186.563 111.374L182.063 111.906L180.656 112.094L181.313 113.374L183.375 117.374L182.062 118.062L179.906 113.75L179.312 112.625L178.344 113.437L175 116.25V99.844Z",
    fill: "#27262B"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "177.362",
    y1: "93.5591",
    x2: "179.955",
    y2: "92.051",
    stroke: "#27262B",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "174",
    y1: "91",
    x2: "174",
    y2: "88",
    stroke: "#27262B",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "169.848",
    y1: "92.5444",
    x2: "167.727",
    y2: "90.4231",
    stroke: "#27262B",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "169.103",
    y1: "96.2793",
    x2: "166.279",
    y2: "97.2938",
    stroke: "#27262B",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M99.5833 8.16666C97.6077 8.16666 96 6.55894 96 4.58333C96 2.60772 97.6077 1 99.5833 1C101.559 1 103.167 2.60772 103.167 4.58333C103.167 6.55894 101.559 8.16666 99.5833 8.16666ZM99.5833 3.38889C98.9264 3.38889 98.3889 3.92639 98.3889 4.58333C98.3889 5.24028 98.9264 5.77777 99.5833 5.77777C100.24 5.77777 100.778 5.24028 100.778 4.58333C100.778 3.92639 100.24 3.38889 99.5833 3.38889Z",
    fill: "#DADDE3"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
    id: "filter0_d",
    x: "22",
    y: "42",
    width: "145",
    height: "85",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feOffset", {
    dx: "6",
    dy: "6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.362396 0 0 0 0 0.382075 0 0 0 0 0.591667 0 0 0 0.2 0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
    id: "filter1_d",
    x: "97",
    y: "81",
    width: "83",
    height: "32",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feOffset", {
    dx: "2",
    dy: "2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feGaussianBlur", {
    stdDeviation: "0.5"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.368627 0 0 0 0 0.423529 0 0 0 0 0.745098 0 0 0 0.2 0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "190.843",
    height: "140.922",
    fill: "white"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewPage);

/***/ }),

/***/ "./app/assets/images/icons/svg/pasteLink.tsx":
/*!***************************************************!*\
  !*** ./app/assets/images/icons/svg/pasteLink.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const PasteLink = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "174",
    height: "162",
    viewBox: "0 0 174 162",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    clipPath: "url(#clip0)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M26.5695 33.9888C53.542 28.535 69.2307 10.7751 82.2275 8.14721C95.2244 5.51927 124.036 7.49435 136.162 67.4683C148.289 127.442 113.347 143.668 99.052 146.558C32.111 160.098 -21.1987 43.6474 26.5695 33.9888Z",
    fill: "#EEEFF4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M107.118 16.175C105.142 16.175 103.534 14.5672 103.534 12.5916C103.534 10.616 105.142 9.0083 107.118 9.0083C109.093 9.0083 110.701 10.616 110.701 12.5916C110.701 14.5672 109.093 16.175 107.118 16.175ZM107.118 11.3972C106.461 11.3972 105.923 11.9347 105.923 12.5916C105.923 13.2486 106.461 13.7861 107.118 13.7861C107.774 13.7861 108.312 13.2486 108.312 12.5916C108.312 11.9347 107.774 11.3972 107.118 11.3972Z",
    fill: "#DADDE3"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    filter: "url(#filter0_d)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "34.5342",
    y: "48.0083",
    width: "139",
    height: "79",
    rx: "3",
    fill: "#E6E9F8"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M34.5342 51.0083C34.5342 49.3514 35.8773 48.0083 37.5342 48.0083H170.534C172.191 48.0083 173.534 49.3514 173.534 51.0083V64.0083H34.5342V51.0083Z",
    fill: "#5E6CBE"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "55.5342",
    y: "53.0083",
    width: "115",
    height: "8",
    rx: "1",
    fill: "#E6E9F8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M39.5342 57.5083L43.2842 55.3432L43.2842 59.6734L39.5342 57.5083Z",
    fill: "#E6E9F8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M51.5342 57.5083L47.7842 59.6734L47.7842 55.3432L51.5342 57.5083Z",
    fill: "#E6E9F8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "59.5342",
    y: "56.0083",
    width: "46",
    height: "3",
    rx: "1",
    fill: "#A0A6CC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "44.0342",
    y: "83.5083",
    width: "122",
    height: "17",
    rx: "4.5",
    fill: "white",
    stroke: "#5E6CBE"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M53.2178 96.0083H54.0967V93.4937H55.7275C57.0508 93.4937 57.9883 92.561 57.9883 91.2231V91.2134C57.9883 89.8755 57.0508 88.9624 55.7275 88.9624H53.2178V96.0083ZM55.5029 89.7437C56.5088 89.7437 57.0898 90.2954 57.0898 91.2231V91.2329C57.0898 92.1606 56.5088 92.7124 55.5029 92.7124H54.0967V89.7437H55.5029ZM59.9121 96.106C60.5908 96.106 61.2012 95.7397 61.499 95.1831H61.5186V96.0083H62.3682V92.4976C62.3682 91.4819 61.6162 90.8325 60.415 90.8325C59.2188 90.8325 58.4912 91.5063 58.418 92.3413L58.4131 92.395H59.2334L59.2432 92.3511C59.3408 91.897 59.751 91.5845 60.4053 91.5845C61.1133 91.5845 61.5186 91.9604 61.5186 92.5806V93.0054L60.0635 93.0884C58.8965 93.1567 58.2227 93.6987 58.2227 94.563V94.5728C58.2227 95.4956 58.9014 96.106 59.9121 96.106ZM59.0918 94.5728V94.563C59.0918 94.0894 59.4824 93.7866 60.1611 93.7476L61.5186 93.6646V94.0796C61.5186 94.8169 60.9033 95.3687 60.1025 95.3687C59.4922 95.3687 59.0918 95.061 59.0918 94.5728ZM65.249 96.106C66.3818 96.106 67.2217 95.481 67.2217 94.5923V94.5874C67.2217 93.8647 66.8506 93.4595 65.8252 93.2104L65.0195 93.0151C64.458 92.8784 64.2285 92.6392 64.2285 92.2925V92.2876C64.2285 91.8384 64.6094 91.5405 65.2246 91.5405C65.8545 91.5405 66.2305 91.8677 66.2988 92.3608L66.3037 92.395H67.1143L67.1094 92.3315C67.0459 91.4819 66.3379 90.8325 65.2246 90.8325C64.126 90.8325 63.3594 91.4526 63.3594 92.3267V92.3315C63.3594 93.064 63.8232 93.5083 64.7803 93.7378L65.5859 93.9331C66.1621 94.0747 66.3525 94.2798 66.3525 94.646V94.6509C66.3525 95.1099 65.9424 95.3979 65.2539 95.3979C64.5605 95.3979 64.1846 95.1001 64.082 94.5923L64.0723 94.5435H63.2227L63.2275 94.5874C63.3301 95.4956 64.0527 96.106 65.249 96.106ZM69.7559 96.106C69.9219 96.106 70.1025 96.0864 70.21 96.0718V95.3833C70.1367 95.3882 70.0391 95.4028 69.9365 95.4028C69.4824 95.4028 69.2432 95.2515 69.2432 94.7095V91.6333H70.21V90.9302H69.2432V89.5581H68.3643V90.9302H67.6221V91.6333H68.3643V94.7144C68.3643 95.686 68.8232 96.106 69.7559 96.106ZM73.0664 96.106C74.1748 96.106 75.0049 95.4419 75.1709 94.6021L75.1807 94.5532H74.3457L74.3311 94.5972C74.1846 95.0317 73.7305 95.354 73.0859 95.354C72.1826 95.354 71.6064 94.7437 71.5869 93.6987H75.2441V93.3862C75.2441 91.8628 74.3994 90.8325 73.0127 90.8325C71.626 90.8325 70.7275 91.9116 70.7275 93.4839V93.4888C70.7275 95.0854 71.6064 96.106 73.0664 96.106ZM73.0078 91.5845C73.75 91.5845 74.2969 92.0483 74.3799 93.0347H71.6016C71.6943 92.0874 72.2705 91.5845 73.0078 91.5845ZM79.8047 96.106C79.9707 96.106 80.1514 96.0864 80.2588 96.0718V95.3833C80.1855 95.3882 80.0879 95.4028 79.9854 95.4028C79.5312 95.4028 79.292 95.2515 79.292 94.7095V91.6333H80.2588V90.9302H79.292V89.5581H78.4131V90.9302H77.6709V91.6333H78.4131V94.7144C78.4131 95.686 78.8721 96.106 79.8047 96.106ZM81.2158 96.0083H82.0654V93.0444C82.0654 92.1802 82.5879 91.5845 83.374 91.5845C84.165 91.5845 84.6338 92.1265 84.6338 93.0444V96.0083H85.4834V92.8979C85.4834 91.6675 84.7461 90.8325 83.667 90.8325C82.9102 90.8325 82.3584 91.1694 82.085 91.7407H82.0654V88.9624H81.2158V96.0083ZM88.6523 96.106C89.7607 96.106 90.5908 95.4419 90.7568 94.6021L90.7666 94.5532H89.9316L89.917 94.5972C89.7705 95.0317 89.3164 95.354 88.6719 95.354C87.7686 95.354 87.1924 94.7437 87.1729 93.6987H90.8301V93.3862C90.8301 91.8628 89.9854 90.8325 88.5986 90.8325C87.2119 90.8325 86.3135 91.9116 86.3135 93.4839V93.4888C86.3135 95.0854 87.1924 96.106 88.6523 96.106ZM88.5938 91.5845C89.3359 91.5845 89.8828 92.0483 89.9658 93.0347H87.1875C87.2803 92.0874 87.8564 91.5845 88.5938 91.5845ZM93.7842 96.0083H94.6338V88.9624H93.7842V96.0083ZM96.2598 90.0708C96.5576 90.0708 96.792 89.8315 96.792 89.5386C96.792 89.2407 96.5576 89.0063 96.2598 89.0063C95.9668 89.0063 95.7275 89.2407 95.7275 89.5386C95.7275 89.8315 95.9668 90.0708 96.2598 90.0708ZM95.835 96.0083H96.6846V90.9302H95.835V96.0083ZM97.8418 96.0083H98.6914V93.02C98.6914 92.1558 99.2139 91.5845 100.015 91.5845C100.796 91.5845 101.182 92.0386 101.182 92.8638V96.0083H102.031V92.7124C102.031 91.5552 101.387 90.8325 100.273 90.8325C99.502 90.8325 98.9844 91.1792 98.7109 91.6528H98.6914V90.9302H97.8418V96.0083ZM103.184 96.0083H104.033V94.0942L104.507 93.6401L106.392 96.0083H107.378L105.107 93.1226L107.31 90.9302H106.279L104.053 93.1714H104.033V88.9624H103.184V96.0083Z",
    fill: "#5E6CBE"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
    id: "filter0_d",
    x: "34.5342",
    y: "48.0083",
    width: "145",
    height: "85",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feOffset", {
    dx: "6",
    dy: "6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.362396 0 0 0 0 0.382075 0 0 0 0 0.591667 0 0 0 0.2 0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "173.534",
    height: "161.016",
    fill: "white"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PasteLink);

/***/ }),

/***/ "./app/assets/images/icons/svg/readPage.tsx":
/*!**************************************************!*\
  !*** ./app/assets/images/icons/svg/readPage.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const ReadPage = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "1",
    y: "1",
    width: "58",
    height: "58",
    rx: "4",
    fill: "white",
    stroke: props.color,
    strokeWidth: "2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    clipPath: "url(#clip0)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M28.0863 21.0842V38.9534C28.0863 40.0936 26.7064 40.6553 25.9071 39.8561L21.175 35.1249H15.7467C15.0417 35.1249 14.4702 34.5533 14.4702 33.8483V26.1893C14.4702 25.4843 15.0417 24.9128 15.7467 24.9128H21.175L25.9072 20.1815C26.7055 19.3832 28.0863 19.9427 28.0863 21.0842ZM37.7694 16.9422C36.9677 16.4517 35.9199 16.7042 35.4294 17.5062C34.939 18.3081 35.1916 19.3557 35.9935 19.8462C39.4135 21.9376 41.7024 25.7097 41.7024 30.0188C41.7024 33.9245 39.7835 37.5871 36.5694 39.8164C35.797 40.3521 35.6052 41.4125 36.1409 42.185C36.6767 42.9576 37.7373 43.1491 38.5093 42.6135C42.6403 39.7483 45.1064 35.04 45.1064 30.0188C45.1064 24.5275 42.2035 19.6538 37.7694 16.9422ZM40.0003 30.0188C40.0003 26.373 38.0777 23.1163 35.1094 21.3013C34.3076 20.8109 33.2598 21.0635 32.7694 21.8655C32.279 22.6675 32.5316 23.715 33.3336 24.2054C35.3765 25.4547 36.5963 27.628 36.5963 30.0188C36.5963 32.2508 35.4997 34.3441 33.6626 35.6183C32.8903 36.154 32.6985 37.2144 33.2342 37.9868C33.5647 38.4634 34.095 38.719 34.6342 38.719C34.9804 38.7191 35.3185 38.6132 35.6027 38.4153C38.3563 36.5053 40.0003 33.3663 40.0003 30.0188ZM34.8944 30.0188C34.8944 28.2255 33.9802 26.5962 32.4492 25.6604C31.6472 25.1704 30.5995 25.423 30.1093 26.2251C29.6192 27.0271 29.872 28.0746 30.674 28.5649C31.1853 28.8773 31.4903 29.4208 31.4903 30.0188C31.4902 30.2943 31.4233 30.5654 31.2955 30.8094C31.1676 31.0533 30.9826 31.2625 30.7561 31.4194C29.9838 31.9549 29.7917 33.0154 30.3271 33.7879C30.8627 34.5605 31.9233 34.7525 32.6956 34.2169C34.0724 33.2624 34.8944 31.6931 34.8944 30.0188Z",
    fill: props.color
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "31.3433",
    height: "31.3433",
    fill: "white",
    transform: "translate(14.3274 14.3281)"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ReadPage);

/***/ }),

/***/ "./app/assets/images/icons/svg/readableFonts.tsx":
/*!*******************************************************!*\
  !*** ./app/assets/images/icons/svg/readableFonts.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const ReadableFonts = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "1",
    y: "1",
    width: "58",
    height: "58",
    rx: "4",
    fill: "white",
    stroke: props.color,
    strokeWidth: "2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M40.9793 38.6836C41.2257 38.6836 41.4192 38.7715 41.5599 38.9473C41.7359 39.088 41.8238 39.2813 41.8238 39.5274V41.215C41.8238 41.4611 41.7359 41.6545 41.5599 41.7951C41.4192 41.9709 41.2257 42.0588 40.9793 42.0588H34.2235C33.9772 42.0588 33.7661 41.9709 33.5902 41.7951C33.4494 41.6545 33.3791 41.4611 33.3791 41.215V39.5274C33.3791 39.2813 33.4494 39.088 33.5902 38.9473C33.7661 38.7715 33.9772 38.6836 34.2235 38.6836H35.2791L34.0124 35.3085H25.9899L24.7232 38.6836H25.7788C26.0251 38.6836 26.2186 38.7715 26.3593 38.9473C26.5353 39.088 26.6232 39.2813 26.6232 39.5274V41.215C26.6232 41.4611 26.5353 41.6545 26.3593 41.7951C26.2186 41.9709 26.0251 42.0588 25.7788 42.0588H19.0229C18.7766 42.0588 18.5655 41.9709 18.3896 41.7951C18.2488 41.6545 18.1785 41.4611 18.1785 41.215V39.5274C18.1785 39.2813 18.2488 39.088 18.3896 38.9473C18.5655 38.7715 18.7766 38.6836 19.0229 38.6836H20.2369L27.151 19.5928C27.2566 19.2764 27.4677 19.0127 27.7844 18.8018C28.1011 18.5557 28.4178 18.4326 28.7344 18.4326H31.2679C31.5845 18.4326 31.9012 18.5557 32.2179 18.8018C32.5346 19.0127 32.7457 19.2764 32.8513 19.5928L39.7654 38.6836H40.9793ZM27.5205 31.0895H32.4818L30.0011 24.2864L27.5205 31.0895Z",
    fill: props.color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ReadableFonts);

/***/ }),

/***/ "./app/assets/images/icons/svg/readingLine.tsx":
/*!*****************************************************!*\
  !*** ./app/assets/images/icons/svg/readingLine.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const ReadingLine = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "1",
    y: "1",
    width: "58",
    height: "58",
    rx: "4",
    fill: "white",
    stroke: props.color,
    strokeWidth: "2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M31.693 23.9169C31.693 24.2684 31.8162 24.5673 32.0625 24.8134C32.3088 25.0595 32.6079 25.1826 32.9597 25.1826H40.1378V42.4803C40.1378 42.8319 40.0146 43.1307 39.7683 43.3768C39.522 43.6229 39.2229 43.746 38.8711 43.746H21.1371C20.7852 43.746 20.4861 43.6229 20.2398 43.3768C19.9935 43.1307 19.8704 42.8319 19.8704 42.4803V18.0103C19.8704 17.6587 19.9935 17.3599 20.2398 17.1138C20.4861 16.8677 20.7852 16.7446 21.1371 16.7446H31.693V23.9169ZM35.0709 36.3628V35.9409C35.0709 35.519 34.8598 35.3081 34.4376 35.3081H25.5706C25.1483 35.3081 24.9372 35.519 24.9372 35.9409V36.3628C24.9372 36.7847 25.1483 36.9956 25.5706 36.9956H34.4376C34.8598 36.9956 35.0709 36.7847 35.0709 36.3628ZM35.0709 32.9876V32.5657C35.0709 32.1438 34.8598 31.9329 34.4376 31.9329H25.5706C25.1483 31.9329 24.9372 32.1438 24.9372 32.5657V32.9876C24.9372 33.4095 25.1483 33.6205 25.5706 33.6205H34.4376C34.8598 33.6205 35.0709 33.4095 35.0709 32.9876ZM35.0709 29.1906C35.0709 28.7687 34.8598 28.5577 34.4376 28.5577H25.5706C25.1483 28.5577 24.9372 28.7687 24.9372 29.1906V29.6125C24.9372 30.0344 25.1483 30.2453 25.5706 30.2453H34.4376C34.8598 30.2453 35.0709 30.0344 35.0709 29.6125V29.1906ZM40.1378 23.1785V23.495H33.382V16.7446H33.6986C34.0505 16.7446 34.3496 16.8677 34.5959 17.1138L39.7683 22.282C40.0146 22.5281 40.1378 22.827 40.1378 23.1785Z",
    fill: props.color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ReadingLine);

/***/ }),

/***/ "./app/assets/images/icons/svg/tooltipQuestion.tsx":
/*!*********************************************************!*\
  !*** ./app/assets/images/icons/svg/tooltipQuestion.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const TooltipQuestion = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM8 5C7.8243 4.99983 7.65165 5.04595 7.49945 5.13373C7.34724 5.22151 7.22085 5.34784 7.133 5.5C7.06957 5.61788 6.98311 5.72182 6.87876 5.80566C6.77441 5.8895 6.65429 5.95154 6.52552 5.9881C6.39675 6.02466 6.26194 6.03499 6.12911 6.01849C5.99627 6.00198 5.86809 5.95897 5.75218 5.89201C5.63628 5.82505 5.53499 5.7355 5.45433 5.62867C5.37367 5.52184 5.31529 5.3999 5.28263 5.27008C5.24997 5.14027 5.24371 5.00522 5.26421 4.87294C5.28472 4.74065 5.33157 4.61384 5.402 4.5C5.73222 3.92811 6.24191 3.48116 6.85203 3.22846C7.46214 2.97576 8.13859 2.93144 8.77647 3.10236C9.41434 3.27328 9.978 3.64989 10.38 4.1738C10.782 4.6977 11 5.33962 11 6C11.0002 6.62062 10.8079 7.22603 10.4498 7.73285C10.0916 8.23968 9.58508 8.62299 9 8.83V9C9 9.26522 8.89464 9.51957 8.70711 9.70711C8.51957 9.89464 8.26522 10 8 10C7.73478 10 7.48043 9.89464 7.29289 9.70711C7.10536 9.51957 7 9.26522 7 9V8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 6.89464 8.70711 6.70711C8.89464 6.51957 9 6.26522 9 6C9 5.73478 8.89464 5.48043 8.70711 5.29289C8.51957 5.10536 8.26522 5 8 5ZM8 13C8.26522 13 8.51957 12.8946 8.70711 12.7071C8.89464 12.5196 9 12.2652 9 12C9 11.7348 8.89464 11.4804 8.70711 11.2929C8.51957 11.1054 8.26522 11 8 11C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13Z",
    fill: "#9CA3AF"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TooltipQuestion);

/***/ }),

/***/ "./app/assets/images/icons/svg/tooltips.tsx":
/*!**************************************************!*\
  !*** ./app/assets/images/icons/svg/tooltips.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const Tooltips = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "1",
    y: "1",
    width: "58",
    height: "58",
    rx: "4",
    fill: "white",
    stroke: props.color,
    strokeWidth: "2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.1193 18.8062H39.6268C40.2404 18.8062 40.8288 19.0499 41.2626 19.4837C41.6965 19.9176 41.9402 20.506 41.9402 21.1196V35.0002C41.9402 35.6137 41.6965 36.2022 41.2626 36.636C40.8288 37.0699 40.2404 37.3136 39.6268 37.3136H34.9999L30.3731 41.9405L25.7462 37.3136H21.1193C20.5058 37.3136 19.9173 37.0699 19.4835 36.636C19.0496 36.2022 18.8059 35.6137 18.8059 35.0002V21.1196C18.8059 20.506 19.0496 19.9176 19.4835 19.4837C19.9173 19.0499 20.5058 18.8062 21.1193 18.8062ZM22.2761 22.2763V24.5897H38.4701V22.2763H22.2761ZM22.2761 26.9032V29.2166H33.8432V26.9032H22.2761ZM22.2761 31.53V33.8435H36.1567V31.53H22.2761Z",
    fill: props.color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Tooltips);

/***/ }),

/***/ "./app/assets/images/icons/svg/zoom.tsx":
/*!**********************************************!*\
  !*** ./app/assets/images/icons/svg/zoom.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const Zoom = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "1",
    y: "1",
    width: "58",
    height: "58",
    rx: "4",
    fill: "white",
    stroke: props.color,
    strokeWidth: "2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: props.color,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M27.6315 36.513C32.9727 36.513 37.3026 32.1831 37.3026 26.842C37.3026 21.5008 32.9727 17.1709 27.6315 17.1709C22.2903 17.1709 17.9604 21.5008 17.9604 26.842C17.9604 32.1831 22.2903 36.513 27.6315 36.513Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: props.color,
    d: "M32.537 25.959V27.6466C32.537 28.0685 32.3259 28.2794 31.9036 28.2794H28.948V31.2327C28.948 31.6546 28.7368 31.8655 28.3146 31.8655H26.6257C26.2034 31.8655 25.9923 31.6546 25.9923 31.2327V28.2794H23.0366C22.6144 28.2794 22.4033 28.0685 22.4033 27.6466V25.959C22.4033 25.5371 22.6144 25.3262 23.0366 25.3262H25.9923V22.3729C25.9923 21.951 26.2034 21.74 26.6257 21.74H28.3146C28.7368 21.74 28.948 21.951 28.948 22.3729V25.3262H31.9036C32.3259 25.3262 32.537 25.5371 32.537 25.959ZM43.1457 40.9891L41.6679 42.4657C41.4216 42.7118 41.1225 42.8348 40.7706 42.8348C40.4188 42.8348 40.1197 42.7118 39.8734 42.4657L34.5954 37.192C34.3491 36.9459 34.2259 36.647 34.2259 36.2955V35.4517C32.2555 36.9986 30.0036 37.7721 27.4701 37.7721C24.4441 37.7721 21.8579 36.6998 19.7115 34.5551C17.5651 32.4105 16.4919 29.8264 16.4919 26.8028C16.4919 23.7792 17.5651 21.1951 19.7115 19.0505C21.8579 16.9058 24.4441 15.8335 27.4701 15.8335C30.4962 15.8335 33.0824 16.9058 35.2288 19.0505C37.3751 21.1951 38.4483 23.7792 38.4483 26.8028C38.4483 29.3342 37.6742 31.5843 36.126 33.5531H36.9705C37.3223 33.5531 37.6214 33.6762 37.8677 33.9223L43.1457 39.196C43.392 39.4421 43.5152 39.7409 43.5152 40.0925C43.5152 40.4441 43.392 40.7429 43.1457 40.9891ZM32.537 31.8655C33.9444 30.4592 34.6482 28.7716 34.6482 26.8028C34.6482 24.8339 33.9444 23.1464 32.537 21.74C31.1295 20.3337 29.4406 19.6306 27.4701 19.6306C25.4997 19.6306 23.8107 20.3337 22.4033 21.74C20.9958 23.1464 20.2921 24.8339 20.2921 26.8028C20.2921 28.7716 20.9958 30.4592 22.4033 31.8655C23.8107 33.2719 25.4997 33.975 27.4701 33.975C29.4406 33.975 31.1295 33.2719 32.537 31.8655Z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Zoom);

/***/ }),

/***/ "./app/assets/images/websitePreview.jsx":
/*!**********************************************!*\
  !*** ./app/assets/images/websitePreview.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const WebsitePreview = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "400",
    height: "203",
    viewBox: "0 0 400 203",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 35.3945H399.968V197.359C399.968 200.474 397.442 203 394.327 203H5.64103C2.52558 203 0 200.474 0 197.359V35.3945Z",
    fill: "#D0DEE6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 4.23078C0 1.89419 1.89418 0 4.23077 0H395.769C398.106 0 400 1.89418 400 4.23077V35.3592H0V4.23078Z",
    fill: "#8FA8B6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ellipse", {
    cx: "10.2711",
    cy: "9.69554",
    rx: "3.42368",
    ry: "3.42186",
    fill: "#D0DEE6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ellipse", {
    cx: "20.5422",
    cy: "9.69554",
    rx: "3.42368",
    ry: "3.42186",
    fill: "#D0DEE6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ellipse", {
    cx: "30.813",
    cy: "9.69554",
    rx: "3.42368",
    ry: "3.42186",
    fill: "#D0DEE6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "38.8016",
    y: "16.5391",
    width: "354.351",
    height: "13.6874",
    rx: "2.82051",
    fill: "#D0DEE6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.8416 24.2381L15.9771 21.0277L15.9771 27.4484L10.8416 24.2381Z",
    fill: "#D0DEE6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M30.2424 24.2378L25.1069 27.4481L25.1069 21.0274L30.2424 24.2378Z",
    fill: "#D0DEE6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M47.6131 25.365H48.4518L49.6086 21.3449H49.6858L50.8474 25.365H51.691L53.1467 20.1688H52.3128L51.2909 24.3238H51.2138L50.0521 20.1688H49.2568L48.0951 24.3238H48.018L46.9961 20.1688H46.1574L47.6131 25.365ZM55.0407 25.365H55.8795L57.0363 21.3449H57.1134L58.2751 25.365H59.1186L60.5743 20.1688H59.7405L58.7186 24.3238H58.6414L57.4798 20.1688H56.6844L55.5228 24.3238H55.4456L54.4238 20.1688H53.585L55.0407 25.365ZM62.4684 25.365H63.3071L64.464 21.3449H64.5411L65.7028 25.365H66.5463L68.002 20.1688H67.1681L66.1462 24.3238H66.0691L64.9075 20.1688H64.1121L62.9504 24.3238H62.8733L61.8514 20.1688H61.0127L62.4684 25.365ZM68.8549 25.4132C69.202 25.4132 69.4816 25.1288 69.4816 24.7866C69.4816 24.4395 69.202 24.1599 68.8549 24.1599C68.5127 24.1599 68.2283 24.4395 68.2283 24.7866C68.2283 25.1288 68.5127 25.4132 68.8549 25.4132ZM70.6044 27.187C71.5251 27.187 71.9541 26.8496 72.3831 25.6831L74.4124 20.1688H73.5303L72.1083 24.4443H72.0312L70.6044 20.1688H69.7078L71.6311 25.3698L71.5347 25.6783C71.3467 26.276 71.0575 26.4929 70.5803 26.4929C70.4646 26.4929 70.3345 26.4881 70.2332 26.4688V27.1581C70.3489 27.1774 70.4935 27.187 70.6044 27.187ZM77.2464 25.4566C78.7262 25.4566 79.642 24.4347 79.642 22.7717V22.7621C79.642 21.0943 78.7262 20.0772 77.2464 20.0772C75.7666 20.0772 74.8507 21.0943 74.8507 22.7621V22.7717C74.8507 24.4347 75.7666 25.4566 77.2464 25.4566ZM77.2464 24.7143C76.2631 24.7143 75.7087 23.996 75.7087 22.7717V22.7621C75.7087 21.5329 76.2631 20.8195 77.2464 20.8195C78.2297 20.8195 78.784 21.5329 78.784 22.7621V22.7717C78.784 23.996 78.2297 24.7143 77.2464 24.7143ZM82.4664 25.4566C83.228 25.4566 83.7534 25.1433 84.0089 24.5889H84.086V25.365H84.9247V20.1688H84.086V23.2441C84.086 24.1551 83.5992 24.7143 82.6833 24.7143C81.8542 24.7143 81.5168 24.266 81.5168 23.3309V20.1688H80.6781V23.5333C80.6781 24.7625 81.2854 25.4566 82.4664 25.4566ZM86.2741 25.365H87.1128V22.1451C87.1128 21.3835 87.6816 20.8774 88.4818 20.8774C88.6649 20.8774 88.824 20.8967 88.9975 20.9256V20.111C88.9156 20.0965 88.7372 20.0772 88.5782 20.0772C87.8744 20.0772 87.3876 20.3954 87.1899 20.94H87.1128V20.1688H86.2741V25.365ZM91.5905 25.4566C92.3136 25.4566 92.892 25.1143 93.2101 24.5359H93.2872V25.365H94.126V18.1058H93.2872V20.9882H93.2101C92.9257 20.4339 92.3039 20.0772 91.5905 20.0772C90.2698 20.0772 89.4118 21.1328 89.4118 22.7621V22.7717C89.4118 24.3913 90.2746 25.4566 91.5905 25.4566ZM91.7833 24.7143C90.8338 24.7143 90.2698 23.9816 90.2698 22.7717V22.7621C90.2698 21.5522 90.8338 20.8195 91.7833 20.8195C92.7281 20.8195 93.3065 21.5618 93.3065 22.7621V22.7717C93.3065 23.9719 92.7281 24.7143 91.7833 24.7143ZM97.6541 25.4566C99.1339 25.4566 100.05 24.4347 100.05 22.7717V22.7621C100.05 21.0943 99.1339 20.0772 97.6541 20.0772C96.1743 20.0772 95.2584 21.0943 95.2584 22.7621V22.7717C95.2584 24.4347 96.1743 25.4566 97.6541 25.4566ZM97.6541 24.7143C96.6708 24.7143 96.1164 23.996 96.1164 22.7717V22.7621C96.1164 21.5329 96.6708 20.8195 97.6541 20.8195C98.6374 20.8195 99.1917 21.5329 99.1917 22.7621V22.7717C99.1917 23.996 98.6374 24.7143 97.6541 24.7143ZM101.134 25.365H101.973V22.1451C101.973 21.4124 102.488 20.8195 103.168 20.8195C103.824 20.8195 104.248 21.2196 104.248 21.8366V25.365H105.087V22.0246C105.087 21.3642 105.564 20.8195 106.287 20.8195C107.019 20.8195 107.371 21.2003 107.371 21.9667V25.365H108.21V21.7739C108.21 20.6846 107.617 20.0772 106.557 20.0772C105.839 20.0772 105.246 20.4387 104.966 20.9882H104.889C104.648 20.4484 104.156 20.0772 103.453 20.0772C102.773 20.0772 102.281 20.4002 102.05 20.9593H101.973V20.1688H101.134V25.365ZM110.933 25.4566C111.632 25.4566 112.177 25.1529 112.505 24.5986H112.582V25.365H113.42V21.8077C113.42 20.7279 112.712 20.0772 111.444 20.0772C110.336 20.0772 109.545 20.6267 109.41 21.4413L109.405 21.4703H110.244L110.249 21.4558C110.384 21.0509 110.793 20.8195 111.415 20.8195C112.191 20.8195 112.582 21.1666 112.582 21.8077V22.2801L111.092 22.3716C109.882 22.4439 109.198 22.979 109.198 23.9045V23.9141C109.198 24.8589 109.945 25.4566 110.933 25.4566ZM110.056 23.8948V23.8852C110.056 23.3694 110.403 23.0899 111.194 23.0416L112.582 22.9549V23.4273C112.582 24.1696 111.96 24.7287 111.107 24.7287C110.504 24.7287 110.056 24.4202 110.056 23.8948ZM115.18 19.1662C115.498 19.1662 115.758 18.9059 115.758 18.5878C115.758 18.2696 115.498 18.0093 115.18 18.0093C114.861 18.0093 114.601 18.2696 114.601 18.5878C114.601 18.9059 114.861 19.1662 115.18 19.1662ZM114.755 25.365H115.594V20.1688H114.755V25.365ZM116.958 25.365H117.797V22.2897C117.797 21.3787 118.322 20.8195 119.151 20.8195C119.98 20.8195 120.366 21.2678 120.366 22.2029V25.365H121.205V22.0005C121.205 20.7665 120.554 20.0772 119.387 20.0772C118.621 20.0772 118.134 20.4002 117.874 20.9497H117.797V20.1688H116.958V25.365ZM123.19 25.4132C123.537 25.4132 123.817 25.1288 123.817 24.7866C123.817 24.4395 123.537 24.1599 123.19 24.1599C122.848 24.1599 122.564 24.4395 122.564 24.7866C122.564 25.1288 122.848 25.4132 123.19 25.4132ZM127.152 25.4566C128.401 25.4566 129.1 24.7866 129.312 23.8466L129.321 23.7936L128.492 23.7984L128.483 23.8273C128.29 24.4058 127.846 24.7143 127.147 24.7143C126.222 24.7143 125.624 23.9478 125.624 22.7524V22.7428C125.624 21.5715 126.212 20.8195 127.147 20.8195C127.894 20.8195 128.357 21.2341 128.487 21.745L128.492 21.7595H129.326L129.321 21.7306C129.167 20.8051 128.41 20.0772 127.147 20.0772C125.692 20.0772 124.766 21.128 124.766 22.7428V22.7524C124.766 24.4009 125.696 25.4566 127.152 25.4566ZM132.469 25.4566C133.948 25.4566 134.864 24.4347 134.864 22.7717V22.7621C134.864 21.0943 133.948 20.0772 132.469 20.0772C130.989 20.0772 130.073 21.0943 130.073 22.7621V22.7717C130.073 24.4347 130.989 25.4566 132.469 25.4566ZM132.469 24.7143C131.485 24.7143 130.931 23.996 130.931 22.7717V22.7621C130.931 21.5329 131.485 20.8195 132.469 20.8195C133.452 20.8195 134.006 21.5329 134.006 22.7621V22.7717C134.006 23.996 133.452 24.7143 132.469 24.7143ZM135.949 25.365H136.787V22.1451C136.787 21.4124 137.303 20.8195 137.983 20.8195C138.638 20.8195 139.062 21.2196 139.062 21.8366V25.365H139.901V22.0246C139.901 21.3642 140.378 20.8195 141.101 20.8195C141.834 20.8195 142.186 21.2003 142.186 21.9667V25.365H143.025V21.7739C143.025 20.6846 142.432 20.0772 141.371 20.0772C140.653 20.0772 140.06 20.4387 139.781 20.9882H139.703C139.462 20.4484 138.971 20.0772 138.267 20.0772C137.587 20.0772 137.096 20.4002 136.864 20.9593H136.787V20.1688H135.949V25.365Z",
    fill: "#7F939D"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "19.7899",
    y: "53.0928",
    width: "359.346",
    height: "13.5334",
    rx: "4.23077",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "19.7899",
    y: "85.364",
    width: "78.1187",
    height: "47.8873",
    rx: "4.23077",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "207.275",
    y: "85.364",
    width: "77.0771",
    height: "47.8873",
    rx: "4.23077",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "19.7899",
    y: "140.539",
    width: "78.1187",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "207.275",
    y: "140.539",
    width: "77.0771",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "114.574",
    y: "140.539",
    width: "77.0771",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "301.017",
    y: "140.539",
    width: "78.1187",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "19.7899",
    y: "149.908",
    width: "78.1187",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "207.275",
    y: "149.908",
    width: "77.0771",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "114.574",
    y: "149.908",
    width: "77.0771",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "301.017",
    y: "149.908",
    width: "78.1187",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "19.7899",
    y: "159.277",
    width: "78.1187",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "207.275",
    y: "159.277",
    width: "77.0771",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "114.574",
    y: "159.277",
    width: "77.0771",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "301.017",
    y: "159.277",
    width: "78.1187",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "19.7899",
    y: "168.646",
    width: "78.1187",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "207.275",
    y: "168.646",
    width: "77.0771",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "114.574",
    y: "168.646",
    width: "77.0771",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "301.017",
    y: "168.646",
    width: "78.1187",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "19.7899",
    y: "178.015",
    width: "78.1187",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "207.275",
    y: "178.015",
    width: "77.0771",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "114.574",
    y: "178.015",
    width: "77.0771",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "301.017",
    y: "178.015",
    width: "78.1187",
    height: "5.20514",
    rx: "2.60257",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "114.574",
    y: "85.364",
    width: "77.0771",
    height: "47.8873",
    rx: "4.23077",
    fill: "#F6FAFC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "301.017",
    y: "85.364",
    width: "78.1187",
    height: "47.8873",
    rx: "4.23077",
    fill: "#F6FAFC"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WebsitePreview);

/***/ }),

/***/ "./app/components/ToggleSwitch.jsx":
/*!*****************************************!*\
  !*** ./app/components/ToggleSwitch.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tooltips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tooltips */ "./app/components/Tooltips.jsx");
/* harmony import */ var _app_components_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/components/badge */ "./app/components/badge/index.jsx");





function initProps(props) {
  const defaults = {
    title: "Default Title",
    borderTop: false,
    borderBottom: false,
    disabled: false,
    premiumBadge: false,
    onChange: () => {
      alert("There is no function set");
    }
  };
  return { ...defaults,
    ...props
  };
}

const ToggleSwitch = propsSet => {
  const props = initProps(propsSet);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${props.borderTop ? 'border-t ' : ''} ${props.borderBottom ? 'border-b' : ''} flex items-center py-5 bg-transparent justify-between`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex"
  }, props.icon ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `pr-3 ${props.disabled ? "opacity-50 pointer-events-none" : ""}`
  }, props.icon) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: props.text ? "flex justify-center flex-col" : ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: `text-sm text-gray-700 flex items-center font-semibold `
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `${props.disabled ? "opacity-50 pointer-events-none" : ""}`
  }, props.title), props.tooltip ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "pl-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Tooltips__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: props.tooltip
  })) : "", props.disabled && props.premiumBadge ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_badge__WEBPACK_IMPORTED_MODULE_3__["default"], null) : ""), props.text ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: `text-sm text-gray-500 ${props.disabled ? "opacity-50 pointer-events-none" : ""}`
  }, props.text) : "")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    htmlFor: "checked",
    className: `inline-flex items-center cursor-pointer ${!props.icon ? 'input-column' : ''} ${props.disabled ? "opacity-50 pointer-events-none" : ""}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: ` mr-2 ${!props.enabled ? "font-semibold" : ""}`
  }, "Off"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "toggle-switch"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    checked: props.enabled,
    onChange: () => props.onChange()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "switch"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: ` ml-2 ${props.enabled ? "font-semibold" : ""}`
  }, "On")));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleSwitch);

/***/ }),

/***/ "./app/components/Tooltips.jsx":
/*!*************************************!*\
  !*** ./app/components/Tooltips.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_icons_svg_tooltipQuestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/icons/svg/tooltipQuestion */ "./app/assets/images/icons/svg/tooltipQuestion.tsx");




const Tooltip = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "relative"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "tooltip left",
    "data-text": props.text
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_images_icons_svg_tooltipQuestion__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "./app/components/badge/index.jsx":
/*!****************************************!*\
  !*** ./app/components/badge/index.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




const Badge = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "rounded-xl bg-indigo-600 px-2 py-1 text-white text-xs mx-2 font-normal"
  }, "Premium");
};

/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ }),

/***/ "./app/components/button/index.jsx":
/*!*****************************************!*\
  !*** ./app/components/button/index.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const colors = {
  white: 'bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500',
  gray: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200',
  red: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200',
  yellow: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 focus:ring-offset-yellow-200',
  green: 'bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200',
  blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200',
  indigo: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200',
  purple: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200',
  pink: 'bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200'
};

const Button = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: props.onClick,
    type: props.submit ? 'submit' : 'button',
    disabled: props.disabled,
    className: `${props.isFat ? 'py-4 px-6 ' : 'py-2 px-4 '}${props.icon ? 'flex justify-center items-center ' : ''} ${colors[props.color]} text-white   transition ease-in duration-200 text-center text-sm font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${props.disabled ? ' opacity-70 cursor-not-allowed' : ''}${!props.label ? ' w-12 h-12' : ''} ${props.rounded ? 'rounded-full' : 'rounded-lg '} ${props.customClass ? props.customClass : ''}`
  }, props.icon && props.icon, props.label && props.label);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./app/components/colorPicker/index.jsx":
/*!**********************************************!*\
  !*** ./app/components/colorPicker/index.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/es/index.js");
/* harmony import */ var _inputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inputField */ "./app/components/inputField/index.jsx");





function initProps(props) {
  const defaults = {
    disabled: false
  };
  return { ...defaults,
    ...props
  };
}

const ColorPicker = propsSet => {
  const props = initProps(propsSet);
  const [showColorPicker, setShowColorPicker] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.value);

  const handleClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleClose = () => {
    setShowColorPicker(false);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `mb-6 ${props.disabled ? "opacity-50 pointer-events-none" : ""}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inputField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "text",
    label: props.label,
    value: props.value,
    onChange: () => {},
    onClick: () => handleClick()
  }), showColorPicker ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: 'absolute',
      zIndex: '2'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    },
    onClick: () => handleClose()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_color__WEBPACK_IMPORTED_MODULE_2__.ChromePicker, {
    color: props.value,
    onChange: color => props.onChange(color)
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (ColorPicker);

/***/ }),

/***/ "./app/components/dropdown/index.jsx":
/*!*******************************************!*\
  !*** ./app/components/dropdown/index.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function initProps(props) {
  const defaults = {
    inline: false,
    disabled: false
  };
  return { ...defaults,
    ...props
  };
}

const Dropdown = propsSet => {
  const props = initProps(propsSet);
  const optionList = [];
  props.options.forEach(option => {
    optionList.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: option.value,
      value: option.value
    }, option.label));
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `mt-4 ${props.customClass ? props.customClass : ""} ${props.disabled ? "opacity-50 pointer-events-none" : ""}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: props.inline ? "lg:flex justify-between items-center" : ""
  }, props.label ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "mb-2 block text-sm text-gray-700 font-semibold"
  }, props.label) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    value: props.value,
    onChange: props.onChange ? val => props.onChange(val.target.value) : () => alert("Set onChange event"),
    className: "input-column w-full border-2 border-gray-300 rounded outline-none pl-3 pr-3 text-sm py-2"
  }, optionList)));
};

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./app/components/heading/index.jsx":
/*!******************************************!*\
  !*** ./app/components/heading/index.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function initProps(props) {
  const defaults = {
    title: "Default Title",
    borderBottom: false
  };
  return { ...defaults,
    ...props
  };
}

const headingSizes = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl"
};

const Heading = propsSet => {
  const props = initProps(propsSet);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${props.borderBottom ? "border-b" : ""}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: `${headingSizes[props.headingSize]} mb-1 font-semibold`
  }, props.title, " ", props.children), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-gray-500 text-sm"
  }, props.text));
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./app/components/inputField/index.jsx":
/*!*********************************************!*\
  !*** ./app/components/inputField/index.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function initProps(props) {
  const defaults = {
    type: "text",
    fullWidth: false,
    inline: true,
    labelWidth: "w-48",
    disabled: false
  };
  return { ...defaults,
    ...props
  };
}

const InputField = propsSet => {
  const props = initProps(propsSet);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${props.inline ? 'lg:flex justify-between items-center' : ''} ${props.disabled ? "opacity-50 pointer-events-none" : ""}`
  }, props.label ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: `mb-2 block text-sm text-gray-700 font-semibold ${props.labelWidth}`
  }, props.label) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `input-column flex items-stretch ${props.fullWidth ? "w-full pl-5" : "max-w-md"} ${props.prefix ? 'border border-2 border-gray-300 rounded-md' : ''}`
  }, props.prefix ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-neutral-200 px-4 flex items-center border-r-2 border-gray-300"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-sm  text-gray-500 whitespace-nowrap"
  }, props.prefix)) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: props.type,
    value: props.value,
    className: `outline-none border-2 border-gray-300 pl-3 text-sm py-2 w-full ${props.prefix ? 'border-0' : ''}`,
    placeholder: props.placeholder,
    onClick: props.onClick ? () => props.onClick() : null,
    onChange: props.onChange ? val => props.onChange(val.target.value) : null
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./app/components/invoiceTable/index.jsx":
/*!***********************************************!*\
  !*** ./app/components/invoiceTable/index.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../heading */ "./app/components/heading/index.jsx");




let cellHeadingStyles = "px-4 text-left py-2 bg-gray-50 border-y ";
let cellStyles = "px-4 text-left py-3";

const renderTableBody = data => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, data.map(function (item, index) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      key: index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: `${index % 2 == 0 ? "" : "bg-gray-50"} ${cellStyles}`
    }, item.number), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: `${index % 2 == 0 ? "" : "bg-gray-50"} ${cellStyles}`
    }, "$", item.total), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: `${index % 2 == 0 ? "" : "bg-gray-50"} ${cellStyles}`
    }, item.due_date ? item.due_date : "-"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: `${index % 2 == 0 ? "" : "bg-gray-50"} ${cellStyles}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: item.invoice_pdf,
      target: "_blank"
    }, "Download")));
  }));
};

const InvoiceTable = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "px-4 py-6 text-lg"
  }, "Previous Invoices"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "table-fixed w-full"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: `${cellHeadingStyles}`
  }, "Invoice #"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: `${cellHeadingStyles}`
  }, "Amount"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: `${cellHeadingStyles}`
  }, "Due Date"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: `${cellHeadingStyles}`
  }, "Action"))), props.data.length != 0 ? renderTableBody(props.data) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: `${cellStyles}`
  }, "Loading invoices!")));
};

/* harmony default export */ __webpack_exports__["default"] = (InvoiceTable);

/***/ }),

/***/ "./app/components/layout/card.jsx":
/*!****************************************!*\
  !*** ./app/components/layout/card.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function initProps(props) {
  const defaults = {
    bgColor: "bg-transparent",
    premium: false
  };
  return { ...defaults,
    ...props
  };
}

const Card = propSet => {
  const props = initProps(propSet);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${props.bgColor} rounded m-5 p-4 ${props.classes} ${props.premium ? "border pt-0" : ""}`
  }, props.premium ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      top: "-10px"
    },
    className: "font-semibold text-indigo-600 bg-white px-4 relative"
  }, "Premium Plan Features") : "", props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./app/components/notification/index.jsx":
/*!***********************************************!*\
  !*** ./app/components/notification/index.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./app/components/button/index.jsx");





const Notification = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full border-l-4 border-indigo-600 bg-white px-4 py-5 shadow"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mb-2"
  }, "Please Select a Subscription Plan. Subscription Plans May Be Changed or Cancelled at Your Convenience."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    customClass: "mr-2",
    label: "Start Accessibly Premium",
    color: "indigo",
    onClick: () => props.onClick()
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./app/components/positionPreview/index.jsx":
/*!**************************************************!*\
  !*** ./app/components/positionPreview/index.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_websitePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/websitePreview */ "./app/assets/images/websitePreview.jsx");
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../heading */ "./app/components/heading/index.jsx");



 // const websitePreview = require('../../assets/images/');

const PositionPreview = props => {
  const previewPosition = {
    "top-left": {
      left: 0
    },
    "top-right": {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      height: "100%"
    },
    "bottom-left": {
      display: "flex",
      alignItems: "flex-end",
      bottom: 20,
      position: "relative",
      height: "100%"
    },
    "bottom-right": {
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      bottom: 20,
      position: "relative",
      height: "100%"
    },
    "middle-right": {
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
      alignItems: "center",
      height: "100%"
    },
    "middle-left": {
      display: "flex",
      alignItems: "center",
      height: "100%"
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Website preview",
    text: "This is a preview of your Widget positioning.",
    headingSize: "base"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      overflow: "hidden",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      width: "100%",
      height: "20rem",
      borderRadius: 5,
      maxWidth: "540px",
      margin: "auto"
    },
    className: "website-preview"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "accessibility-widget",
    className: "accessibility-menu-closed mt-4",
    style: {
      position: "relative"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_images_websitePreview__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "accesibility-menu",
    className: "accesibility-menu menu-closed",
    style: previewPosition[props.settings.position.type]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "accessibility-menu-btn",
    className: `accessibility-menu-btn make-it-fast navigable ${props.settings.widgetSize === "large" && "accessibly-btn-big"} ${props.settings.widgetSize === "small" && "accessibly-btn-small"} ${props.settings.widgetSize === "extra-small" && "accessibly-btn-xs-small"}`,
    style: props.settings.widgetSize === "custom" ? {
      background: props.settings.theme.branding,
      fontSize: 16,
      width: parseInt(props.settings.iconCustomSize),
      height: parseInt(props.settings.iconCustomSize)
    } : {
      background: props.settings.theme.branding,
      fontSize: 16
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "39",
    height: "40",
    style: {
      width: 39,
      height: 40
    },
    viewBox: "0 0 39 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M30.9844 8.51562C27.8073 5.33854 23.9792 3.75 19.5 3.75C15.0208 3.75 11.1927 5.33854 8.01562 8.51562C4.83854 11.6927 3.25 15.5208 3.25 20C3.25 24.4792 4.83854 28.3073 8.01562 31.4844C11.1927 34.6615 15.0208 36.25 19.5 36.25C23.9792 36.25 27.8073 34.6615 30.9844 31.4844C34.1615 28.3073 35.75 24.4792 35.75 20C35.75 15.5208 34.1615 11.6927 30.9844 8.51562ZM5.75 6.32812C9.55208 2.52604 14.1354 0.625 19.5 0.625C24.8646 0.625 29.4219 2.52604 33.1719 6.32812C36.974 10.0781 38.875 14.6354 38.875 20C38.875 25.3646 36.974 29.9479 33.1719 33.75C29.4219 37.5 24.8646 39.375 19.5 39.375C14.1354 39.375 9.55208 37.5 5.75 33.75C2 29.9479 0.125 25.3646 0.125 20C0.125 14.6354 2 10.0781 5.75 6.32812ZM8.875 9.375C11.7917 6.45833 15.3333 5 19.5 5C23.6667 5 27.2083 6.45833 30.125 9.375C33.0417 12.2917 34.5 15.8333 34.5 20C34.5 24.1667 33.0417 27.7083 30.125 30.625C27.2083 33.5417 23.6667 35 19.5 35C15.3333 35 11.7917 33.5417 8.875 30.625C5.95833 27.7083 4.5 24.1667 4.5 20C4.5 15.8333 5.95833 12.2917 8.875 9.375ZM21.4531 9.29688C20.9323 8.72396 20.2812 8.4375 19.5 8.4375C18.7188 8.4375 18.0417 8.72396 17.4688 9.29688C16.9479 9.81771 16.6875 10.4688 16.6875 11.25C16.6875 12.0312 16.9479 12.7083 17.4688 13.2812C18.0417 13.8021 18.7188 14.0625 19.5 14.0625C20.2812 14.0625 20.9323 13.8021 21.4531 13.2812C22.026 12.7083 22.3125 12.0312 22.3125 11.25C22.3125 10.4688 22.026 9.81771 21.4531 9.29688ZM28.7188 16.0938C29.0312 16.0417 29.2656 15.8594 29.4219 15.5469C29.6302 15.2344 29.6823 14.9219 29.5781 14.6094C29.526 14.2448 29.3438 13.9844 29.0312 13.8281C28.7708 13.6198 28.4583 13.5677 28.0938 13.6719C24.3438 14.5573 21.4792 15 19.5 15C17.5208 15 14.6562 14.5573 10.9062 13.6719C10.5417 13.5677 10.2031 13.6198 9.89062 13.8281C9.63021 13.9844 9.44792 14.2448 9.34375 14.6094C9.29167 14.9219 9.34375 15.2344 9.5 15.5469C9.70833 15.8073 9.96875 15.9896 10.2812 16.0938C13.0417 16.7188 15.1771 17.1354 16.6875 17.3438C16.6875 19.7917 16.5573 21.875 16.2969 23.5938C16.0885 25.2604 15.9062 26.3542 15.75 26.875C15.5938 27.3438 15.2552 28.2031 14.7344 29.4531C14.6302 29.8177 14.6562 30.1823 14.8125 30.5469C14.9688 30.9115 15.2292 31.1719 15.5938 31.3281C15.9583 31.4323 16.2969 31.4062 16.6094 31.25C16.974 31.0938 17.2344 30.8594 17.3906 30.5469C18.3281 28.151 18.901 26.0938 19.1094 24.375H19.8906C20.099 26.0938 20.6719 28.151 21.6094 30.5469C21.7656 30.8594 22 31.0938 22.3125 31.25C22.6771 31.4062 23.0417 31.4323 23.4062 31.3281C23.7708 31.1719 24.0312 30.9115 24.1875 30.5469C24.3438 30.1823 24.3698 29.8177 24.2656 29.4531C23.7448 28.2031 23.4062 27.3438 23.25 26.875C23.0938 26.3542 22.8854 25.2604 22.625 23.5938C22.4167 21.875 22.3125 19.7917 22.3125 17.3438C23.8229 17.1354 25.9583 16.7188 28.7188 16.0938Z",
    fill: "white"
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PositionPreview);

/***/ }),

/***/ "./app/components/preview/index.jsx":
/*!******************************************!*\
  !*** ./app/components/preview/index.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../heading */ "./app/components/heading/index.jsx");




const Preview = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "accessibility-widget",
    style: {
      zIndex: "40"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Preview",
    text: "This is a widget preview that will be visible to your site visitors.",
    headingSize: "base"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      justifyContent: "flex-start",
      alignItems: "center",
      display: "flex",
      marginTop: "15px"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-box",
    style: {
      background: props.shop.settings.theme.branding
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-box-heading"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      width: 240
    }
  }, "Accessibility options"), props.shop.settings.showHideForever && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibly-hide-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Hide forever")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    onClick: () => console.log("alert")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "accessibility-box-close",
    width: "14",
    height: "15",
    viewBox: "0 0 14 15",
    fill: "#fff",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.53125 7.5L13.4375 11.4062C13.6719 11.6406 13.7891 11.9271 13.7891 12.2656C13.7891 12.6042 13.6719 12.9036 13.4375 13.1641L12.5781 14.0234C12.3177 14.2578 12.0182 14.375 11.6797 14.375C11.3411 14.375 11.0547 14.2578 10.8203 14.0234L6.91406 10.1172L3.00781 14.0234C2.77344 14.2578 2.48698 14.375 2.14844 14.375C1.8099 14.375 1.51042 14.2578 1.25 14.0234L0.390625 13.1641C0.15625 12.9036 0.0390625 12.6042 0.0390625 12.2656C0.0390625 11.9271 0.15625 11.6406 0.390625 11.4062L4.29688 7.5L0.390625 3.59375C0.15625 3.35938 0.0390625 3.07292 0.0390625 2.73438C0.0390625 2.39583 0.15625 2.09635 0.390625 1.83594L1.25 0.976562C1.51042 0.742188 1.8099 0.625 2.14844 0.625C2.48698 0.625 2.77344 0.742188 3.00781 0.976562L6.91406 4.88281L10.8203 0.976562C11.0547 0.742188 11.3411 0.625 11.6797 0.625C12.0182 0.625 12.3177 0.742188 12.5781 0.976562L13.4375 1.83594C13.6719 2.09635 13.7891 2.39583 13.7891 2.73438C13.7891 3.07292 13.6719 3.35938 13.4375 3.59375L9.53125 7.5Z",
    fill: "#FFF"
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-options fixed-height"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-row",
    style: {
      maxHeight: "unset",
      height: "unset"
    }
  }, props.shop.features.includes("bigger_text") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "zoomIn",
    style: {
      fontSize: 16
    },
    className: "navigable"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "option-svg",
    width: "30",
    height: "25",
    viewBox: "0 0 30 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.8125 12C17.8125 11.8242 17.6953 11.6484 17.5781 11.5312C17.4609 11.4141 17.2852 11.2969 17.1094 11.2969H13.8281V8.01562C13.8281 7.83984 13.7109 7.66406 13.5938 7.54688C13.4766 7.42969 13.3008 7.3125 13.125 7.3125H11.25C11.0156 7.3125 10.8398 7.42969 10.7227 7.54688C10.6055 7.66406 10.5469 7.83984 10.5469 8.01562V11.2969H7.26562C7.03125 11.2969 6.85547 11.4141 6.73828 11.5312C6.62109 11.6484 6.5625 11.8242 6.5625 12V13.875C6.5625 14.1094 6.62109 14.2852 6.73828 14.4023C6.85547 14.5195 7.03125 14.5781 7.26562 14.5781H10.5469V17.8594C10.5469 18.0938 10.6055 18.2695 10.7227 18.3867C10.8398 18.5039 11.0156 18.5625 11.25 18.5625H13.125C13.3008 18.5625 13.4766 18.5039 13.5938 18.3867C13.7109 18.2695 13.8281 18.0938 13.8281 17.8594V14.5781H17.1094C17.2852 14.5781 17.4609 14.5195 17.5781 14.4023C17.6953 14.2852 17.8125 14.1094 17.8125 13.875V12ZM29.5898 28.6992C29.8242 28.4648 30 28.1133 30 27.7031C30 27.3516 29.8242 27 29.5898 26.707L23.7305 20.8477C23.4375 20.6133 23.0859 20.4375 22.7344 20.4375H21.7969C23.4961 18.2695 24.375 15.75 24.375 12.9375C24.375 10.7109 23.7891 8.71875 22.7344 6.84375C21.6211 4.96875 20.1562 3.50391 18.2812 2.39062C16.4062 1.33594 14.4141 0.75 12.1875 0.75C9.96094 0.75 7.91016 1.33594 6.03516 2.39062C4.16016 3.50391 2.69531 4.96875 1.64062 6.84375C0.527344 8.71875 0 10.7109 0 12.9375C0 15.1641 0.527344 17.2148 1.64062 19.0898C2.69531 20.9648 4.16016 22.4297 6.03516 23.4844C7.91016 24.5977 9.96094 25.125 12.1875 25.125C15 25.125 17.4609 24.3047 19.6875 22.5469V23.4844C19.6875 23.8945 19.8047 24.2461 20.0977 24.4805L25.957 30.3398C26.1914 30.6328 26.543 30.75 26.9531 30.75C27.3047 30.75 27.6562 30.6328 27.9492 30.3398L29.5898 28.6992ZM20.1562 12.9375C20.1562 14.4023 19.7461 15.75 19.043 16.9219C18.3398 18.1523 17.3438 19.1484 16.1719 19.8516C14.9414 20.5547 13.5938 20.9062 12.1875 20.9062C10.7227 20.9062 9.375 20.5547 8.20312 19.8516C6.97266 19.1484 5.97656 18.1523 5.27344 16.9219C4.57031 15.75 4.21875 14.4023 4.21875 12.9375C4.21875 11.5312 4.57031 10.1836 5.27344 8.95312C5.97656 7.78125 6.97266 6.78516 8.20312 6.08203C9.375 5.37891 10.7227 4.96875 12.1875 4.96875C13.5938 4.96875 14.9414 5.37891 16.1719 6.08203C17.3438 6.78516 18.3398 7.78125 19.043 8.95312C19.7461 10.1836 20.1562 11.5312 20.1562 12.9375Z",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-translation": "zoom",
    className: "center-text"
  }, "Bigger Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-box-lines"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "6",
    style: {
      width: 20,
      height: 6
    },
    viewBox: "0 0 20 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    "data-border": "1",
    width: "20",
    height: "6",
    rx: "3",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "6",
    style: {
      width: 20,
      height: 6
    },
    viewBox: "0 0 20 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    "data-border": "2",
    width: "20",
    height: "6",
    rx: "3",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "6",
    style: {
      width: 20,
      height: 6
    },
    viewBox: "0 0 20 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    "data-border": "3",
    width: "20",
    height: "6",
    rx: "3",
    fill: "#D0D0D0"
  })))))), props.shop.features.includes("bigger_cursor") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-col mobile-accessibly-d-none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "cursor",
    style: {
      fontSize: 16
    },
    className: "navigable"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "option-svg",
    width: "20",
    height: "25",
    viewBox: "0 0 20 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M18.3203 20.0273H12.1094L15.3906 27.9961C15.5078 28.2695 15.5078 28.543 15.3906 28.8164C15.2734 29.0898 15.0781 29.2852 14.8047 29.4023L11.9336 30.6914C11.6602 30.7695 11.3867 30.75 11.1133 30.6328C10.8789 30.5547 10.7031 30.3789 10.5859 30.1055L7.48047 22.5469L2.38281 27.7617C2.07031 28.1133 1.69922 28.1914 1.26953 27.9961C0.839844 27.8008 0.625 27.4688 0.625 27V1.80469C0.625 1.33594 0.839844 1.02344 1.26953 0.867188C1.73828 0.671875 2.10938 0.730469 2.38281 1.04297L19.082 18.2109C19.3945 18.5234 19.4531 18.9141 19.2578 19.3828C19.1016 19.8125 18.7891 20.0273 18.3203 20.0273Z",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-translation": "cursor",
    className: "center-text"
  }, "Bigger Cursor")))), props.shop.features.includes("invert_colors") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "invert",
    style: {
      fontSize: 16
    },
    className: "navigable"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "option-svg",
    width: "34",
    height: "23",
    viewBox: "0 0 34 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.625 0.5C25.75 0.5 28.4062 1.59375 30.5938 3.78125C32.7812 5.96875 33.875 8.625 33.875 11.75C33.875 14.875 32.7812 17.5312 30.5938 19.7188C28.4062 21.9062 25.75 23 22.625 23H11.375C8.25 23 5.59375 21.9062 3.40625 19.7188C1.21875 17.5312 0.125 14.875 0.125 11.75C0.125 8.625 1.21875 5.96875 3.40625 3.78125C5.59375 1.59375 8.25 0.5 11.375 0.5H22.625ZM6.04297 6.47656C4.59766 7.92188 3.875 9.67969 3.875 11.75C3.875 13.8203 4.59766 15.5977 6.04297 17.082C7.52734 18.5273 9.30469 19.25 11.375 19.25C13.4453 19.25 15.2031 18.5273 16.6484 17.082C18.1328 15.5977 18.875 13.8203 18.875 11.75C18.875 9.67969 18.1328 7.92188 16.6484 6.47656C15.2031 4.99219 13.4453 4.25 11.375 4.25C9.30469 4.25 7.52734 4.99219 6.04297 6.47656ZM22.625 19.25C24.6953 19.25 26.4531 18.5273 27.8984 17.082C29.3828 15.5977 30.125 13.8203 30.125 11.75C30.125 9.67969 29.3828 7.92188 27.8984 6.47656C26.4531 4.99219 24.6953 4.25 22.625 4.25H19.7539C21.668 6.39844 22.625 8.89844 22.625 11.75C22.625 14.6016 21.668 17.1016 19.7539 19.25H22.625Z",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-translation": "invert",
    className: "center-text"
  }, "Invert Colors")))), props.shop.features.includes("contrast") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "contrast",
    style: {
      fontSize: 16
    },
    className: "navigable"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "option-svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.6875 25.0625C1.875 22.2109 0.46875 18.7734 0.46875 14.75C0.46875 10.7266 1.875 7.30859 4.6875 4.49609C7.53906 1.64453 10.9766 0.21875 15 0.21875C19.0234 0.21875 22.4414 1.64453 25.2539 4.49609C28.1055 7.30859 29.5312 10.7266 29.5312 14.75C29.5312 18.7734 28.1055 22.2109 25.2539 25.0625C22.4414 27.875 19.0234 29.2812 15 29.2812C10.9766 29.2812 7.53906 27.875 4.6875 25.0625ZM15 25.5312C17.9688 25.5312 20.5078 24.4766 22.6172 22.3672C24.7266 20.2578 25.7812 17.7188 25.7812 14.75C25.7812 11.7812 24.7266 9.24219 22.6172 7.13281C20.5078 5.02344 17.9688 3.96875 15 3.96875V25.5312Z",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-translation": "contrast",
    className: "center-text"
  }, "Contrast"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-box-lines"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "6",
    style: {
      width: 20,
      height: 6
    },
    viewBox: "0 0 20 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "20",
    "data-border": "1",
    height: "6",
    rx: "3",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "6",
    style: {
      width: 20,
      height: 6
    },
    viewBox: "0 0 20 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "20",
    "data-border": "2",
    height: "6",
    rx: "3",
    fill: "#D0D0D0"
  })))))), props.shop.features.includes("brightness") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "brightness",
    style: {
      fontSize: 16
    },
    className: "navigable"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "option-svg",
    width: "31",
    height: "25",
    viewBox: "0 0 31 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.0742 11.7656C12.168 10.6719 13.4961 10.125 15.0586 10.125C16.6211 10.125 17.9492 10.6719 19.043 11.7656C20.1367 12.8594 20.6836 14.1875 20.6836 15.75C20.6836 17.3125 20.1367 18.6406 19.043 19.7344C17.9492 20.8281 16.6211 21.375 15.0586 21.375C13.4961 21.375 12.168 20.8281 11.0742 19.7344C9.98047 18.6406 9.43359 17.3125 9.43359 15.75C9.43359 14.1875 9.98047 12.8594 11.0742 11.7656ZM29.4727 14.8125C29.8633 15.0078 30.0586 15.3203 30.0586 15.75C30.0586 16.1797 29.8633 16.4922 29.4727 16.6875L23.9648 19.4414L25.8984 25.3008C26.0156 25.6914 25.918 26.043 25.6055 26.3555C25.332 26.668 25 26.7461 24.6094 26.5898L18.75 24.6562L15.9375 30.1641C15.7812 30.5547 15.4883 30.75 15.0586 30.75C14.6289 30.75 14.3164 30.5547 14.1211 30.1641L11.3672 24.6562L5.50781 26.5898C5.11719 26.7461 4.76562 26.6875 4.45312 26.4141C4.14062 26.1016 4.0625 25.7305 4.21875 25.3008L6.15234 19.4414L0.644531 16.6875C0.253906 16.4922 0.0585938 16.1797 0.0585938 15.75C0.0585938 15.3203 0.253906 15.0078 0.644531 14.8125L6.15234 12.0586L4.21875 6.19922C4.0625 5.80859 4.12109 5.45703 4.39453 5.14453C4.70703 4.83203 5.07812 4.75391 5.50781 4.91016L11.3672 6.84375L14.1211 1.33594C14.3164 0.945312 14.6289 0.75 15.0586 0.75C15.4883 0.75 15.8008 0.945312 15.9961 1.33594L18.75 6.84375L24.6094 4.91016C25 4.75391 25.3516 4.83203 25.6641 5.14453C25.9766 5.45703 26.0547 5.80859 25.8984 6.19922L23.9648 12.0586L29.4727 14.8125ZM15.0586 23.25C17.1289 23.25 18.8867 22.5273 20.332 21.082C21.8164 19.5977 22.5586 17.8203 22.5586 15.75C22.5586 13.6797 21.8164 11.9219 20.332 10.4766C18.8867 8.99219 17.1289 8.25 15.0586 8.25C12.9883 8.25 11.2109 8.99219 9.72656 10.4766C8.28125 11.9219 7.55859 13.6797 7.55859 15.75C7.55859 17.8203 8.28125 19.5977 9.72656 21.082C11.2109 22.5273 12.9883 23.25 15.0586 23.25Z",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-translation": "brightness",
    className: "center-text"
  }, "Brightness"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-box-lines"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "6",
    style: {
      width: 20,
      height: 6
    },
    viewBox: "0 0 20 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "20",
    "data-border": "1",
    height: "6",
    rx: "3",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "6",
    style: {
      width: 20,
      height: 6
    },
    viewBox: "0 0 20 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "20",
    "data-border": "2",
    height: "6",
    rx: "3",
    fill: "#D0D0D0"
  })))))), props.shop.features.includes("grayscale") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "grayscale",
    style: {
      fontSize: 16
    },
    className: "navigable"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "option-svg",
    width: "22",
    height: "25",
    viewBox: "0 0 22 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.6992 2.03906C13.3242 4.07031 14.1641 6.02344 15.2188 7.89844C16.2734 9.73437 17.2305 11.1797 18.0898 12.2344C18.9492 13.2891 19.6914 14.5391 20.3164 15.9844C20.9805 17.3906 21.3125 18.8359 21.3125 20.3203C21.3125 23.2109 20.2969 25.6719 18.2656 27.7031C16.2734 29.7344 13.8516 30.75 11 30.75C8.14844 30.75 5.70703 29.7344 3.67578 27.7031C1.68359 25.6719 0.6875 23.2109 0.6875 20.3203C0.6875 18.8359 1 17.3906 1.625 15.9844C2.28906 14.5781 3.05078 13.3281 3.91016 12.2344C4.80859 11.1406 5.76562 9.67578 6.78125 7.83984C7.83594 6.00391 8.67578 4.07031 9.30078 2.03906C9.57422 1.17969 10.1406 0.75 11 0.75C11.8984 0.75 12.4648 1.17969 12.6992 2.03906ZM11 27C11.2734 27 11.4883 26.9219 11.6445 26.7656C11.8398 26.5703 11.9375 26.3359 11.9375 26.0625C11.9375 25.7891 11.8398 25.5742 11.6445 25.418C11.4883 25.2227 11.2734 25.125 11 25.125C9.71094 25.125 8.59766 24.6758 7.66016 23.7773C6.76172 22.8398 6.3125 21.7266 6.3125 20.4375C6.3125 20.1641 6.21484 19.9492 6.01953 19.793C5.86328 19.5977 5.64844 19.5 5.375 19.5C5.10156 19.5 4.86719 19.5977 4.67188 19.793C4.51562 19.9492 4.4375 20.1641 4.4375 20.4375C4.4375 22.2344 5.08203 23.7773 6.37109 25.0664C7.66016 26.3555 9.20312 27 11 27Z",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-translation": "grayscale",
    className: "center-text"
  }, "Grayscale")))), props.shop.features.includes("reading_line") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-col mobile-accessibly-d-none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "readingLine",
    style: {
      fontSize: 16
    },
    className: "navigable"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "option-svg",
    width: "24",
    height: "25",
    viewBox: "0 0 24 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13.875 8.71875C13.875 9.10938 14.0117 9.44141 14.2852 9.71484C14.5586 9.98828 14.8906 10.125 15.2812 10.125H23.25V29.3438C23.25 29.7344 23.1133 30.0664 22.8398 30.3398C22.5664 30.6133 22.2344 30.75 21.8438 30.75H2.15625C1.76562 30.75 1.43359 30.6133 1.16016 30.3398C0.886719 30.0664 0.75 29.7344 0.75 29.3438V2.15625C0.75 1.76562 0.886719 1.43359 1.16016 1.16016C1.43359 0.886719 1.76562 0.75 2.15625 0.75H13.875V8.71875ZM17.625 22.5469V22.0781C17.625 21.6094 17.3906 21.375 16.9219 21.375H7.07812C6.60938 21.375 6.375 21.6094 6.375 22.0781V22.5469C6.375 23.0156 6.60938 23.25 7.07812 23.25H16.9219C17.3906 23.25 17.625 23.0156 17.625 22.5469ZM17.625 18.7969V18.3281C17.625 17.8594 17.3906 17.625 16.9219 17.625H7.07812C6.60938 17.625 6.375 17.8594 6.375 18.3281V18.7969C6.375 19.2656 6.60938 19.5 7.07812 19.5H16.9219C17.3906 19.5 17.625 19.2656 17.625 18.7969ZM17.625 14.5781C17.625 14.1094 17.3906 13.875 16.9219 13.875H7.07812C6.60938 13.875 6.375 14.1094 6.375 14.5781V15.0469C6.375 15.5156 6.60938 15.75 7.07812 15.75H16.9219C17.3906 15.75 17.625 15.5156 17.625 15.0469V14.5781ZM23.25 7.89844V8.25H15.75V0.75H16.1016C16.4922 0.75 16.8242 0.886719 17.0977 1.16016L22.8398 6.90234C23.1133 7.17578 23.25 7.50781 23.25 7.89844Z",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-translation": "reading-line",
    className: "center-text"
  }, "Reading Line")))), props.shop.features.includes("readable_fonts") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "fonts",
    style: {
      fontSize: 16
    },
    className: "navigable"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "option-svg",
    width: "28",
    height: "25",
    viewBox: "0 0 28 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M26.1875 23.125C26.4609 23.125 26.6758 23.2227 26.832 23.418C27.0273 23.5742 27.125 23.7891 27.125 24.0625V25.9375C27.125 26.2109 27.0273 26.4258 26.832 26.582C26.6758 26.7773 26.4609 26.875 26.1875 26.875H18.6875C18.4141 26.875 18.1797 26.7773 17.9844 26.582C17.8281 26.4258 17.75 26.2109 17.75 25.9375V24.0625C17.75 23.7891 17.8281 23.5742 17.9844 23.418C18.1797 23.2227 18.4141 23.125 18.6875 23.125H19.8594L18.4531 19.375H9.54688L8.14062 23.125H9.3125C9.58594 23.125 9.80078 23.2227 9.95703 23.418C10.1523 23.5742 10.25 23.7891 10.25 24.0625V25.9375C10.25 26.2109 10.1523 26.4258 9.95703 26.582C9.80078 26.7773 9.58594 26.875 9.3125 26.875H1.8125C1.53906 26.875 1.30469 26.7773 1.10938 26.582C0.953125 26.4258 0.875 26.2109 0.875 25.9375V24.0625C0.875 23.7891 0.953125 23.5742 1.10938 23.418C1.30469 23.2227 1.53906 23.125 1.8125 23.125H3.16016L10.8359 1.91406C10.9531 1.5625 11.1875 1.26953 11.5391 1.03516C11.8906 0.761719 12.2422 0.625 12.5938 0.625H15.4062C15.7578 0.625 16.1094 0.761719 16.4609 1.03516C16.8125 1.26953 17.0469 1.5625 17.1641 1.91406L24.8398 23.125H26.1875ZM11.2461 14.6875H16.7539L14 7.12891L11.2461 14.6875Z",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-translation": "fonts",
    className: "center-text"
  }, "Readable fonts")))), props.shop.features.includes("tooltips") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-col mobile-accessibly-d-none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "tooltips",
    style: {
      fontSize: 16
    },
    className: "navigable"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "option-svg",
    width: "31",
    height: "30",
    viewBox: "0 0 31 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.45312 4.19922C7.38281 1.81641 10.918 0.625 15.0586 0.625C19.1992 0.625 22.7344 1.81641 25.6641 4.19922C28.5938 6.58203 30.0586 9.45312 30.0586 12.8125C30.0586 16.1719 28.5938 19.043 25.6641 21.4258C22.7344 23.8086 19.1992 25 15.0586 25C12.8711 25 10.7812 24.6289 8.78906 23.8867C6.25 25.8789 3.49609 26.875 0.527344 26.875C0.449219 26.875 0.371094 26.8359 0.292969 26.7578C0.214844 26.7188 0.15625 26.6602 0.117188 26.582C0.0390625 26.3867 0.0585938 26.2109 0.175781 26.0547C0.332031 25.9375 0.566406 25.6641 0.878906 25.2344C1.23047 24.8438 1.67969 24.1797 2.22656 23.2422C2.77344 22.2656 3.16406 21.3477 3.39844 20.4883C1.17188 18.2617 0.0585938 15.7031 0.0585938 12.8125C0.0585938 9.45312 1.52344 6.58203 4.45312 4.19922Z",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-translation": "tooltips",
    className: "center-text"
  }, "Tooltips")))), props.shop.features.includes("highlight_links") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "links",
    style: {
      fontSize: 16
    },
    className: "navigable"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "option-svg",
    width: "31",
    height: "25",
    viewBox: "0 0 31 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19.2188 11.5898C20.9375 13.3477 21.7969 15.457 21.7969 17.918C21.7969 20.3789 20.9375 22.4688 19.2188 24.1875L15.2344 28.1719C13.5156 29.8906 11.4258 30.75 8.96484 30.75C6.50391 30.75 4.39453 29.8711 2.63672 28.1133C0.917969 26.3945 0.0585938 24.3047 0.0585938 21.8438C0.0585938 19.3828 0.917969 17.293 2.63672 15.5742L4.86328 13.3477C5.13672 13.0742 5.44922 13.0156 5.80078 13.1719C6.19141 13.3281 6.40625 13.6016 6.44531 13.9922C6.48438 15.0469 6.67969 16.082 7.03125 17.0977C7.14844 17.4492 7.07031 17.7617 6.79688 18.0352L6.03516 18.8555C5.21484 19.6758 4.78516 20.6719 4.74609 21.8438C4.74609 22.9766 5.15625 23.9531 5.97656 24.7734C6.79688 25.6328 7.79297 26.0625 8.96484 26.0625C10.1367 26.0625 11.1328 25.6523 11.9531 24.832L15.8789 20.9062C16.6992 20.0859 17.1094 19.0898 17.1094 17.918C17.1094 16.7461 16.6992 15.75 15.8789 14.9297C15.6836 14.7344 15.4883 14.5586 15.293 14.4023C15.0195 14.2461 14.8828 14.0117 14.8828 13.6992C14.8438 12.9961 15.0586 12.4102 15.5273 11.9414L16.8164 10.7109C17.168 10.3203 17.5586 10.2813 17.9883 10.5938C18.418 10.9062 18.8281 11.2383 19.2188 11.5898ZM21.1523 0.75C23.6133 0.75 25.7031 1.62891 27.4219 3.38672C29.1797 5.10547 30.0586 7.19531 30.0586 9.65625C30.0586 12.1172 29.1992 14.207 27.4805 15.9258L25.2539 18.1523C24.9805 18.4258 24.6484 18.4844 24.2578 18.3281C23.9062 18.1719 23.7109 17.8984 23.6719 17.5078C23.6328 16.4531 23.4375 15.418 23.0859 14.4023C22.9688 14.0508 23.0469 13.7383 23.3203 13.4648L24.082 12.6445C24.9023 11.8242 25.3125 10.8477 25.3125 9.71484C25.3516 8.54297 24.9609 7.54688 24.1406 6.72656C23.3203 5.86719 22.3242 5.4375 21.1523 5.4375C19.9805 5.4375 18.9844 5.84766 18.1641 6.66797L14.2383 10.5938C13.418 11.4141 13.0078 12.4102 13.0078 13.582C13.0078 14.7539 13.418 15.75 14.2383 16.5703C14.4336 16.7656 14.6289 16.9414 14.8242 17.0977C15.0977 17.2539 15.2344 17.4883 15.2344 17.8008C15.2734 18.5039 15.0586 19.0898 14.5898 19.5586L13.3008 20.7891C12.9492 21.1797 12.5586 21.2188 12.1289 20.9062C11.6992 20.5938 11.2891 20.2617 10.8984 19.9102C9.17969 18.1523 8.32031 16.043 8.32031 13.582C8.32031 11.1211 9.17969 9.03125 10.8984 7.3125L14.8828 3.32812C16.6016 1.60938 18.6914 0.75 21.1523 0.75Z",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-translation": "links",
    className: "center-text"
  }, "Highlight Links")))), props.shop.features.includes("hide_images") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "hide-images",
    className: "navigable"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "option-svg",
    width: "29",
    height: "25",
    viewBox: "0 0 34 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M28.25 23.125V24.0625C28.25 24.8438 27.9766 25.5078 27.4297 26.0547C26.8828 26.6016 26.2188 26.875 25.4375 26.875H2.9375C2.15625 26.875 1.49219 26.6016 0.945312 26.0547C0.398438 25.5078 0.125 24.8438 0.125 24.0625V9.0625C0.125 8.28125 0.398438 7.61719 0.945312 7.07031C1.49219 6.52344 2.15625 6.25 2.9375 6.25H3.875V18.4375C3.875 19.7266 4.32422 20.8398 5.22266 21.7773C6.16016 22.6758 7.27344 23.125 8.5625 23.125H28.25ZM33.875 18.4375C33.875 19.2188 33.6016 19.8828 33.0547 20.4297C32.5078 20.9766 31.8438 21.25 31.0625 21.25H8.5625C7.78125 21.25 7.11719 20.9766 6.57031 20.4297C6.02344 19.8828 5.75 19.2188 5.75 18.4375V3.4375C5.75 2.65625 6.02344 1.99219 6.57031 1.44531C7.11719 0.898438 7.78125 0.625 8.5625 0.625H31.0625C31.8438 0.625 32.5078 0.898438 33.0547 1.44531C33.6016 1.99219 33.875 2.65625 33.875 3.4375V18.4375ZM14.3047 8.24219C14.8516 7.69531 15.125 7.03125 15.125 6.25C15.125 5.46875 14.8516 4.80469 14.3047 4.25781C13.7578 3.71094 13.0938 3.4375 12.3125 3.4375C11.5312 3.4375 10.8672 3.71094 10.3203 4.25781C9.77344 4.80469 9.5 5.46875 9.5 6.25C9.5 7.03125 9.77344 7.69531 10.3203 8.24219C10.8672 8.78906 11.5312 9.0625 12.3125 9.0625C13.0938 9.0625 13.7578 8.78906 14.3047 8.24219ZM9.5 14.6875V17.5H30.125V10.9375L24.9688 5.78125C24.6562 5.46875 24.3438 5.46875 24.0312 5.78125L16.0625 13.75L13.7188 11.4062C13.4062 11.0938 13.0938 11.0938 12.7812 11.4062L9.5 14.6875Z",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-translation": "hide-images",
    className: "center-text"
  }, "Hide images")))), props.shop.features.includes("read_page") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "voice",
    className: "navigable"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "option-svg",
    width: "34",
    height: "25",
    viewBox: "0 0 34 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.7227 3.91016C13.1523 3.48047 13.6602 3.38281 14.2461 3.61719C14.832 3.85156 15.125 4.28125 15.125 4.90625V24.5938C15.125 25.2188 14.832 25.6484 14.2461 25.8828C13.6602 26.1172 13.1523 26.0195 12.7227 25.5898L7.50781 20.375H1.53125C1.14062 20.375 0.808594 20.2383 0.535156 19.9648C0.261719 19.6914 0.125 19.3594 0.125 18.9688V10.5312C0.125 10.1406 0.261719 9.80859 0.535156 9.53516C0.808594 9.26172 1.14062 9.125 1.53125 9.125H7.50781L12.7227 3.91016ZM26.375 0.921875C28.7188 2.44531 30.5547 4.4375 31.8828 6.89844C33.2109 9.35938 33.875 11.9766 33.875 14.75C33.875 17.5234 33.2109 20.1406 31.8828 22.6016C30.5547 25.0625 28.7188 27.0547 26.375 28.5781C26.0625 28.8125 25.7109 28.8711 25.3203 28.7539C24.9297 28.6758 24.6172 28.4805 24.3828 28.168C24.1875 27.8555 24.1289 27.5039 24.207 27.1133C24.2852 26.7227 24.5 26.4297 24.8516 26.2344C26.1406 25.375 27.2344 24.3594 28.1328 23.1875C29.0703 21.9766 29.793 20.6484 30.3008 19.2031C30.8086 17.7578 31.0625 16.2734 31.0625 14.75C31.0625 12.4453 30.4961 10.2773 29.3633 8.24609C28.2695 6.21484 26.7656 4.55469 24.8516 3.26562C24.5 3.07031 24.2852 2.77734 24.207 2.38672C24.1289 1.99609 24.1875 1.64453 24.3828 1.33203C24.6172 1.01953 24.9297 0.824219 25.3203 0.746094C25.7109 0.628906 26.0625 0.6875 26.375 0.921875ZM26.9023 9.53516C27.8008 11.1367 28.25 12.875 28.25 14.75C28.25 16.625 27.8008 18.3828 26.9023 20.0234C26.043 21.625 24.8125 22.9141 23.2109 23.8906C22.8594 24.125 22.4883 24.2031 22.0977 24.125C21.7461 24.0078 21.4727 23.793 21.2773 23.4805C21.082 23.1289 21.0234 22.7773 21.1016 22.4258C21.1797 22.0352 21.3945 21.7227 21.7461 21.4883C22.4883 21.0195 23.1328 20.4336 23.6797 19.7305C24.2656 19.0273 24.6953 18.2461 24.9688 17.3867C25.2812 16.5273 25.4375 15.6484 25.4375 14.75C25.4375 13.8516 25.2812 12.9727 24.9688 12.1133C24.6953 11.2539 24.2656 10.4727 23.6797 9.76953C23.1328 9.06641 22.4883 8.48047 21.7461 8.01172C21.3945 7.77734 21.1797 7.48438 21.1016 7.13281C21.0234 6.74219 21.082 6.39062 21.2773 6.07812C21.4727 5.72656 21.7656 5.51172 22.1562 5.43359C22.5469 5.31641 22.8984 5.375 23.2109 5.60938C24.8125 6.58594 26.043 7.89453 26.9023 9.53516ZM19.9297 10.2383C20.75 10.707 21.3945 11.3516 21.8633 12.1719C22.3711 12.9531 22.625 13.8125 22.625 14.75C22.625 15.6875 22.3711 16.5664 21.8633 17.3867C21.3945 18.168 20.75 18.793 19.9297 19.2617C19.6172 19.457 19.2656 19.4961 18.875 19.3789C18.4844 19.2617 18.1914 19.0469 17.9961 18.7344C17.8398 18.3828 17.8008 18.0312 17.8789 17.6797C17.9961 17.2891 18.2305 16.9961 18.582 16.8008C19.4023 16.332 19.8125 15.6484 19.8125 14.75C19.8125 13.8516 19.4023 13.168 18.582 12.6992C18.2305 12.5039 17.9961 12.2305 17.8789 11.8789C17.8008 11.4883 17.8398 11.1367 17.9961 10.8242C18.1914 10.4727 18.4844 10.2383 18.875 10.1211C19.2656 10.0039 19.6172 10.043 19.9297 10.2383Z",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-translation": "voice",
    className: "center-text"
  }, "Read page")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-col-mobile accessibly-mobile-visible reset-settings-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "reset-mobile",
    className: "navigable"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "option-svg",
    width: "18",
    height: "25",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.45312 8.125H0.421875C0.304688 8.125 0.199219 8.08984 0.105469 8.01953C0.0351562 7.92578 0 7.82031 0 7.70312V0.671875C0 0.390625 0.140625 0.25 0.421875 0.25H2.10938C2.39062 0.25 2.53125 0.390625 2.53125 0.671875V3.41406C3.35156 2.5 4.32422 1.79688 5.44922 1.30469C6.59766 0.789062 7.80469 0.53125 9.07031 0.53125C11.4844 0.554688 13.5352 1.42187 15.2227 3.13281C16.9102 4.82031 17.7422 6.87109 17.7188 9.28516C17.7188 11.6758 16.8633 13.7266 15.1523 15.4375C13.4648 17.125 11.4141 17.9688 9 17.9688C6.77344 17.9688 4.82812 17.2188 3.16406 15.7188C2.92969 15.5078 2.91797 15.2969 3.12891 15.0859L4.32422 13.8906C4.51172 13.7031 4.71094 13.7031 4.92188 13.8906C6.09375 14.9219 7.45312 15.4375 9 15.4375C10.7109 15.4375 12.1641 14.8398 13.3594 13.6445C14.5781 12.4258 15.1875 10.9609 15.1875 9.25C15.1875 7.53906 14.5781 6.08594 13.3594 4.89062C12.1641 3.67187 10.7109 3.0625 9 3.0625C7.99219 3.0625 7.05469 3.29688 6.1875 3.76562C5.32031 4.21094 4.59375 4.82031 4.00781 5.59375H7.45312C7.57031 5.59375 7.66406 5.64062 7.73438 5.73438C7.82812 5.80469 7.875 5.89844 7.875 6.01562V7.70312C7.875 7.82031 7.82812 7.92578 7.73438 8.01953C7.66406 8.08984 7.57031 8.125 7.45312 8.125Z",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-translation": "reset",
    className: "center-text"
  }, "Reset settings"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "reset",
    className: "accessibility-reset mobile-accessibly-d-none navigable",
    style: {
      fontSize: 13,
      textDecoration: "none"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "option-svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.45312 8.125H0.421875C0.304688 8.125 0.199219 8.08984 0.105469 8.01953C0.0351562 7.92578 0 7.82031 0 7.70312V0.671875C0 0.390625 0.140625 0.25 0.421875 0.25H2.10938C2.39062 0.25 2.53125 0.390625 2.53125 0.671875V3.41406C3.35156 2.5 4.32422 1.79688 5.44922 1.30469C6.59766 0.789062 7.80469 0.53125 9.07031 0.53125C11.4844 0.554688 13.5352 1.42187 15.2227 3.13281C16.9102 4.82031 17.7422 6.87109 17.7188 9.28516C17.7188 11.6758 16.8633 13.7266 15.1523 15.4375C13.4648 17.125 11.4141 17.9688 9 17.9688C6.77344 17.9688 4.82812 17.2188 3.16406 15.7188C2.92969 15.5078 2.91797 15.2969 3.12891 15.0859L4.32422 13.8906C4.51172 13.7031 4.71094 13.7031 4.92188 13.8906C6.09375 14.9219 7.45312 15.4375 9 15.4375C10.7109 15.4375 12.1641 14.8398 13.3594 13.6445C14.5781 12.4258 15.1875 10.9609 15.1875 9.25C15.1875 7.53906 14.5781 6.08594 13.3594 4.89062C12.1641 3.67187 10.7109 3.0625 9 3.0625C7.99219 3.0625 7.05469 3.29688 6.1875 3.76562C5.32031 4.21094 4.59375 4.82031 4.00781 5.59375H7.45312C7.57031 5.59375 7.66406 5.64062 7.73438 5.73438C7.82812 5.80469 7.875 5.89844 7.875 6.01562V7.70312C7.875 7.82031 7.82812 7.92578 7.73438 8.01953C7.66406 8.08984 7.57031 8.125 7.45312 8.125Z",
    fill: "#D0D0D0"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-translation": "reset",
    className: "center-text"
  }, "Reset settings")), props.shop.settings.showAccessiblyLogo && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-app-logo-container mobile-accessibly-d-none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://www.onthemapmarketing.com/accessibly/",
    target: "_blank",
    title: "On the Map Marketing",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16
    },
    className: "navigable"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "accessibility-app-logo"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "accessibly-mobile-logo accessibly-mobile-visible",
    style: {
      fontSize: 15
    }
  }, "Accesibly App by", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://www.onthemapmarketing.com/accessibly/",
    "aria-hidden": "true",
    role: "presentation",
    title: "On the Map Marketing",
    className: "otm-text navigable",
    target: "_blank",
    style: {
      fontSize: 15
    }
  }, "On The Map Marketing"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Preview);

/***/ }),

/***/ "./app/components/saveBar/index.jsx":
/*!******************************************!*\
  !*** ./app/components/saveBar/index.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./app/components/button/index.jsx");





const SaveBar = props => {
  if (!props.showSaveBar) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full z-100 fixed bottom-0 z-[9999]"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "px-4 py-2 bg-black"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "text-white"
  }, "You have made some changes! Save them!"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    customClass: "mr-2",
    label: "Save",
    color: "indigo",
    onClick: () => props.onSave()
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Discard",
    color: "indigo",
    onClick: () => props.onDiscard()
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SaveBar);

/***/ }),

/***/ "./app/components/spacer/index.jsx":
/*!*****************************************!*\
  !*** ./app/components/spacer/index.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



const options = {
  small: 'my-2 py-2',
  medium: 'my-4 py-4',
  large: 'my-8 py-4'
};

function initProps(props) {
  const defaults = {
    space: "medium"
  };
  return { ...defaults,
    ...props
  };
}

const Spacer = propsSet => {
  const props = initProps(propsSet);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${options[props.space]} w-full block`
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Spacer);

/***/ }),

/***/ "./app/components/textStyle/index.jsx":
/*!********************************************!*\
  !*** ./app/components/textStyle/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function initProps(props) {
  const defaults = {
    fontSize: "sm",
    fontWeight: "normal"
  };
  return { ...defaults,
    ...props
  };
}

const FontSizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  xl: "text-xl"
};
const FontWeight = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
};

const TextStyle = propsSet => {
  const props = initProps(propsSet);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: `${FontSizes[props.fontSize]} ${FontWeight[props.fontWeight]}`
  }, propsSet.children);
};

/* harmony default export */ __webpack_exports__["default"] = (TextStyle);

/***/ }),

/***/ "./app/components/toast/index.jsx":
/*!****************************************!*\
  !*** ./app/components/toast/index.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/context */ "./lib/context.jsx");




const Toast = props => {
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_2__.AppContext);

  if (state.app.toasts.length > 0) {
    setTimeout(() => {
      dispatch({
        type: 'remove_toast'
      });
    }, 3000);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-38 z-100 fixed right-20 top-20 z-[9999]"
  }, state.app.toasts.map(function (item, i) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "px-4 py-3 bg-green-300 w-48 mb-4 text-center rounded transition ease-in-out "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "text-black text-base weight-medium"
    }, item.message));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Toast);

/***/ }),

/***/ "./app/helpers/helpers.js":
/*!********************************!*\
  !*** ./app/helpers/helpers.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  upadateFeatureArray(state, feature) {
    let featureArr = state;

    if (featureArr.includes(feature)) {
      for (var i = 0; i < featureArr.length; i++) {
        if (featureArr[i] === feature) {
          featureArr.splice(i, 1);
        }
      }
    } else {
      featureArr.push(feature);
    }

    return featureArr;
  },

  upadateSettings(state, feature) {
    let featureArr = state;

    if (featureArr.includes(feature)) {
      for (var i = 0; i < featureArr.length; i++) {
        if (featureArr[i] === feature) {
          featureArr.splice(i, 1);
        }
      }
    } else {
      featureArr.push(feature);
    }

    return featureArr;
  }

});

/***/ }),

/***/ "./app/services/Request.js":
/*!*********************************!*\
  !*** ./app/services/Request.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* It's a wrapper for the axios library that allows you to set headers and make requests */

let instance = null;
const config = {
  baseURL: `https://ac.onthemapmarketing.com/api`,
  //  baseURL: `http://accessibly-dashboard.test/api`,
  headers: {
    "Content-Type": "application/json"
  }
};

class Request {
  constructor() {
    if (!instance) {
      instance = this;
    }

    this.request = axios__WEBPACK_IMPORTED_MODULE_0___default().create(config);
    return instance;
  }

  setHeader(key, value) {
    this.request.defaults.headers[key] = value;
  }

  request() {
    return this.request;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Request);

/***/ }),

/***/ "./app/services/SettingsService.js":
/*!*****************************************!*\
  !*** ./app/services/SettingsService.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request */ "./app/services/Request.js");

const client = new _Request__WEBPACK_IMPORTED_MODULE_0__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchSettings(token) {
    client.setHeader("Authorization", `Bearer ${token}`);
    return client.request.get(`/fetch-settings`);
  },

  updateSettings(token, settings) {
    client.setHeader("Authorization", `Bearer ${token}`);
    return client.request.post("/update-settings", settings);
  },

  getBillingUrl(token) {
    client.setHeader("Authorization", `Bearer ${token}`);
    return client.request.get("/get-billing-url");
  },

  fetchInvoices(token) {
    client.setHeader("Authorization", `Bearer ${token}`);
    return client.request.get("/get-user-invoices");
  },

  register(userData) {
    return client.request.post("/register", userData);
  }

});

/***/ }),

/***/ "./lib/context.jsx":
/*!*************************!*\
  !*** ./lib/context.jsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContext": function() { return /* binding */ AppContext; },
/* harmony export */   "AppProvider": function() { return /* binding */ AppProvider; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./lib/reducers.jsx");



const intialState = {
  userData: [],
  app: {
    showSaveBar: false,
    token: null,
    prevState: [],
    toasts: []
  }
};
const AppContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  state: intialState,
  dispatch: () => null
});

const mainReducer = (_ref, action) => {
  let {
    settings,
    app
  } = _ref;
  return {
    settings: (0,_reducers__WEBPACK_IMPORTED_MODULE_2__.settingsReducer)(settings, action),
    app: (0,_reducers__WEBPACK_IMPORTED_MODULE_2__.appRecudcer)(app, action)
  };
};

const AppProvider = _ref2 => {
  let {
    children
  } = _ref2;
  const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(mainReducer, intialState);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AppContext.Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
};



/***/ }),

/***/ "./lib/reducers.jsx":
/*!**************************!*\
  !*** ./lib/reducers.jsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appRecudcer": function() { return /* binding */ appRecudcer; },
/* harmony export */   "settingsReducer": function() { return /* binding */ settingsReducer; }
/* harmony export */ });
/* harmony import */ var _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/helpers/helpers */ "./app/helpers/helpers.js");

const appRecudcer = (state, action) => {
  switch (action.type) {
    case "show_savebar":
      return { ...state,
        showSaveBar: action.payload
      };

    case "set_prevstate":
      return { ...state,
        prevState: action.payload
      };

    case "set_token":
      return { ...state,
        token: action.payload
      };

    case "add_toast":
      let toasts = state.toasts;
      toasts.push(action.payload);
      return { ...state,
        toasts: toasts
      };

    case "remove_toast":
      let toastsPop = state.toasts.shift();
      return { ...state,
        toasts: state.toasts
      };

    default:
      {
        return { ...state
        };
      }
  }
};
const settingsReducer = (state, action) => {
  switch (action.type) {
    case "set_userData":
      return { ...state,
        userData: action.payload
      };

    case "set_showToast":
      return { ...state,
        showToast: action.payload
      };

    case "set_enabled":
      return { ...state,
        userData: { ...state.userData,
          settings: { ...state.userData.settings,
            appIsEnabled: !state.userData.settings.appIsEnabled
          }
        }
      };

    case "set_themeColor":
      return { ...state,
        userData: { ...state.userData,
          settings: { ...state.userData.settings,
            theme: { ...state.userData.settings.theme,
              branding: action.payload
            }
          }
        }
      };

    case "set_iconColor":
      return { ...state,
        userData: { ...state.userData,
          settings: { ...state.userData.settings,
            theme: { ...state.userData.settings.theme,
              icons: action.payload
            }
          }
        }
      };

    case "show_logo":
      return { ...state,
        userData: { ...state.userData,
          settings: { ...state.userData.settings,
            showAccessiblyLogo: !state.userData.settings.showAccessiblyLogo
          }
        }
      };

    case "show_hideForever":
      return { ...state,
        userData: { ...state.userData,
          settings: { ...state.userData.settings,
            showHideForever: !state.userData.settings.showHideForever
          }
        }
      };

    case "enable_fetchAltTags":
      return { ...state,
        userData: { ...state.userData,
          settings: { ...state.userData.settings,
            autoGenerateAltTags: !state.userData.settings.autoGenerateAltTags
          }
        }
      };

    case "set_customTrigger":
      return { ...state,
        userData: { ...state.userData,
          advanced_settings: { ...state.userData.advanced_settings,
            custom_desktop_trigger: action.payload
          }
        }
      };

    case "set_mobileCustomTrigger":
      return { ...state,
        userData: { ...state.userData,
          advanced_settings: { ...state.userData.advanced_settings,
            custom_mobile_trigger: action.payload
          }
        }
      };

    case "enable_toggleAcOnTab":
      return { ...state,
        userData: { ...state.userData,
          settings: { ...state.userData.settings,
            widgetActiviationWithTab: !state.userData.settings.widgetActiviationWithTab
          }
        }
      };

    case "enable_initialHide":
      return { ...state,
        userData: { ...state.userData,
          advanced_settings: { ...state.userData.advanced_settings,
            initial_hide: !state.userData.advanced_settings.initial_hide
          }
        }
      };

    case "set_initialLoadTrigger":
      return { ...state,
        userData: { ...state.userData,
          advanced_settings: { ...state.userData.advanced_settings,
            custom_trigger: action.payload
          }
        }
      };

    case "set_welcomeScreen":
      return { ...state,
        shop: { ...state.shop,
          welcomeScreen: action.payload
        }
      };

    case "set_customWrapper":
      return { ...state,
        userData: { ...state.userData,
          advanced_settings: { ...state.userData.advanced_settings,
            wrapper_for_filter_animations: action.payload
          }
        }
      };

    case "isbusy_savebar":
      return { ...state,
        contextualSaveBarIsBusy: !state.contextualSaveBarIsBusy
      };
    //Features

    case "enable_biggerText":
      return { ...state.userData,
        userData: { ...state.userData,
          features: _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].upadateFeatureArray(state.userData.features, "bigger_text")
        }
      };

    case "enable_showCursor":
      return { ...state,
        userData: { ...state.userData,
          features: _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].upadateFeatureArray(state.userData.features, "bigger_cursor")
        }
      };

    case "enable_showInvertColor":
      return { ...state,
        userData: { ...state.userData,
          features: _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].upadateFeatureArray(state.userData.features, "invert_colors")
        }
      };

    case "enable_showContrast":
      return { ...state,
        userData: { ...state.userData,
          features: _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].upadateFeatureArray(state.userData.features, "contrast")
        }
      };

    case "enable_showGrayScale":
      return { ...state,
        userData: { ...state.userData,
          features: _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].upadateFeatureArray(state.userData.features, "grayscale")
        }
      };

    case "enable_showBrightness":
      return { ...state,
        userData: { ...state.userData,
          features: _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].upadateFeatureArray(state.userData.features, "brightness")
        }
      };

    case "enable_showReadingLine":
      return { ...state,
        userData: { ...state.userData,
          features: _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].upadateFeatureArray(state.userData.features, "reading_line")
        }
      };

    case "enable_showReadableFonts":
      return { ...state,
        userData: { ...state.userData,
          features: _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].upadateFeatureArray(state.userData.features, "readable_fonts")
        }
      };

    case "enable_showTooltip":
      return { ...state,
        userData: { ...state.userData,
          features: _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].upadateFeatureArray(state.userData.features, "tooltips")
        }
      };

    case "enable_showHighlightLinks":
      return { ...state,
        userData: { ...state.userData,
          features: _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].upadateFeatureArray(state.userData.features, "highlight_links")
        }
      };

    case "enable_showHideImages":
      return { ...state,
        userData: { ...state.userData,
          features: _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].upadateFeatureArray(state.userData.features, "hide_images")
        }
      };

    case "enable_showVoiceOverText":
      return { ...state,
        userData: { ...state.userData,
          features: _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].upadateFeatureArray(state.userData.features, "read_page")
        }
      };
    // Widget Position

    case "set_topBottomPosition":
      return { ...state,
        userData: { ...state.userData,
          settings: { ...state.userData.settings,
            position: { ...state.userData.settings.position,
              coords: { ...state.userData.settings.position.coords,
                top: action.payload
              }
            }
          }
        }
      };

    case "set_rightLeftPosition":
      return { ...state,
        userData: { ...state.userData,
          settings: { ...state.userData.settings,
            position: { ...state.userData.settings.position,
              coords: { ...state.userData.settings.position.coords,
                offset: action.payload
              }
            }
          }
        }
      };

    case "set_position":
      return { ...state,
        userData: { ...state.userData,
          settings: { ...state.userData.settings,
            position: { ...state.userData.settings.position,
              type: action.payload
            }
          }
        }
      };

    case "set_iconSize":
      return { ...state,
        userData: { ...state.userData,
          settings: { ...state.userData.settings,
            widgetSize: action.payload
          }
        }
      };

    case "set_iconCustomSize":
      return { ...state,
        shop: { ...state.shop,
          iconCustomSize: action.payload
        }
      };
    //Language

    case "set_widgetLang":
      return { ...state,
        userData: { ...state.userData,
          settings: { ...state.userData.settings,
            widgetLanguage: action.payload
          }
        }
      };

    case "set_voiceLanguage":
      return { ...state,
        userData: { ...state.userData,
          settings: { ...state.userData.settings,
            voiceLanguage: action.payload
          }
        }
      };
    // MyPlan

    case "set_couponPrice":
      return { ...state,
        shop: { ...state.shop,
          couponPrice: action.payload
        }
      };

    case "set_coupon":
      return { ...state,
        shop: { ...state.shop,
          coupon: action.payload
        }
      };

    case "set_subscription_active":
      return { ...state,
        shop: { ...state.shop,
          subscription_active: action.payload
        }
      };

    case "set_subscription_basic_active":
      return { ...state,
        shop: { ...state.shop,
          subscription_basic_active: action.payload
        }
      };
    // Statement

    case "set_statementLink":
      return { ...state,
        userData: { ...state.userData,
          accessibility_statement_url: action.payload
        }
      };

    default:
      {
        return { ...state
        };
      }
  }
};

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/context */ "./lib/context.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _components_General__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/General */ "./src/components/General.jsx");
/* harmony import */ var _components_Advanced__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Advanced */ "./src/components/Advanced.jsx");
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Features */ "./src/components/Features.jsx");
/* harmony import */ var _components_Statement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Statement */ "./src/components/Statement.jsx");
/* harmony import */ var _components_MyPlan__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/MyPlan */ "./src/components/MyPlan.jsx");
/* harmony import */ var _app_components_saveBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/components/saveBar */ "./app/components/saveBar/index.jsx");
/* harmony import */ var _app_components_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/components/toast */ "./app/components/toast/index.jsx");
/* harmony import */ var _app_components_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/components/badge */ "./app/components/badge/index.jsx");
/* harmony import */ var _app_components_heading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/components/heading */ "./app/components/heading/index.jsx");
/* harmony import */ var _app_components_layout_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/components/layout/card */ "./app/components/layout/card.jsx");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_preview_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/preview.css */ "./styles/preview.css");
/* harmony import */ var _styles_positionPreview_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/positionPreview.css */ "./styles/positionPreview.css");
/* harmony import */ var _app_services_SettingsService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app/services/SettingsService */ "./app/services/SettingsService.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);




















const AppView = () => {
  const [searchParams, setSearchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__.useSearchParams)();
  const currentPage = searchParams.get("page");
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_2__.AppContext);
  const [loadingSettings, setLoadingSettings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('general');
  const [prevState, setPrevState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [showToast, setShowToast] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  let adminUrl, adminEmail;

  const createUser = async () => {
    try {
      var getUrl = window.location;
      var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
      const {
        data: {
          token
        }
      } = await _app_services_SettingsService__WEBPACK_IMPORTED_MODULE_16__["default"].register({
        email: adminEmail,
        platform: "wordpress",
        url: baseUrl
      });
      saveToken(token);
      fetchSettings(token);
    } catch (err) {
      alert("We are very sorry, there was an error on our side. Please contact the support");
    }
  };

  const saveToken = token => {
    var data = new FormData();
    data.append('token', token);
    data.append('action', 'save_token');
    axios__WEBPACK_IMPORTED_MODULE_17___default().post(adminUrl, data).then(result => {}).catch(error => {
      console.log(error);
      alert("Something went wrong with creating your profile. Please contact the support!");
    });
  };

  const billingUrl = async () => {
    try {
      const billingUrl = await _app_services_SettingsService__WEBPACK_IMPORTED_MODULE_16__["default"].getBillingUrl(token);
      window.open(billingUrl.data, "_blank");
    } catch (err) {
      alert("We are very sorry, there was an error on our side. We could not generate the billing URL. Please contact the support");
    }
  };

  const fetchSettings = async token => {
    setLoadingSettings(true);

    if (!token) {
      return;
    }

    try {
      const {
        data: userData
      } = await _app_services_SettingsService__WEBPACK_IMPORTED_MODULE_16__["default"].fetchSettings(token);
      dispatch({
        type: "set_userData",
        payload: userData
      }); // dispatch({ type: "show_savebar", payload: false });
      // dispatch({ type: "set_prevstate", payload: userData });

      setPrevState(userData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingSettings(false);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    adminUrl = document.getElementById("accessibly").getAttribute("data-admin-url");
    adminEmail = document.getElementById("accessibly").getAttribute("data-email");
    const token = document.getElementById("accessibly").getAttribute("data-token");

    if (token.length != 0) {
      setToken(token); // dispatch({ type: "set_token", token });

      fetchSettings(token);
    } else {
      createUser();
    }
  }, []);
  /**
  * Save Settings
  *
  */

  const saveSettings = async () => {
    try {
      const update = await _app_services_SettingsService__WEBPACK_IMPORTED_MODULE_16__["default"].updateSettings(token, state.settings.userData);
      dispatch({
        type: "show_savebar",
        payload: false
      });
    } catch (err) {
      console.log("err at save settings", err);
    }
  };

  const resetState = async () => {
    dispatch({
      type: "set_userData",
      payload: prevState
    });
    dispatch({
      type: "show_savebar",
      payload: false
    });
  };

  const popupToast = data => {
    dispatch({
      type: "add_toast",
      payload: data
    });
  };

  const handleTabChange = e => {
    setActiveTab(e.target.id.split('-')[0]);
  };

  if (loadingSettings) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Loading data...");
  }

  if (currentPage == "accessibly-plan") {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_MyPlan__WEBPACK_IMPORTED_MODULE_7__["default"], null);
  } else if (currentPage == "accessibly-statement") {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Statement__WEBPACK_IMPORTED_MODULE_6__["default"], {
      addToast: data => popupToast(data)
    }), state.app ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_saveBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      showSaveBar: state.app.showSaveBar,
      onSave: () => saveSettings(),
      onDiscard: () => resetState()
    }) : "", state.app.toasts.length > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_toast__WEBPACK_IMPORTED_MODULE_9__["default"], null) : "");
  } else {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "px-4 py-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_heading__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: "Settings",
      headingSize: "xl"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "tabs",
      class: "settings-tab"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "nav-tab-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      class: `nav-tab ${activeTab == 'general' ? "nav-tab-active" : null}`,
      href: "#general",
      id: "general-tab",
      onClick: e => handleTabChange(e)
    }, "General"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      class: `nav-tab ${activeTab == 'features' ? "nav-tab-active" : null}`,
      href: "#features",
      id: "features-tab",
      onClick: e => handleTabChange(e)
    }, "Features"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      class: `nav-tab ${activeTab == 'advanced' ? "nav-tab-active" : null}`,
      href: "#advanced",
      id: "advanced-tab",
      onClick: e => handleTabChange(e)
    }, "Advanced ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_badge__WEBPACK_IMPORTED_MODULE_10__["default"], null))), activeTab == 'general' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_General__WEBPACK_IMPORTED_MODULE_3__["default"], {
      billingUrl: billingUrl
    }) : null, activeTab == 'features' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Features__WEBPACK_IMPORTED_MODULE_5__["default"], {
      billingUrl: billingUrl
    }) : null, activeTab == 'advanced' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Advanced__WEBPACK_IMPORTED_MODULE_4__["default"], {
      billingUrl: billingUrl
    }) : null), state.app ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_saveBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      showSaveBar: state.app.showSaveBar,
      onSave: () => saveSettings(),
      onDiscard: () => resetState()
    }) : "");
  }
};

const App = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.BrowserRouter, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_lib_context__WEBPACK_IMPORTED_MODULE_2__.AppProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AppView, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Advanced.jsx":
/*!*************************************!*\
  !*** ./src/components/Advanced.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/context */ "./lib/context.jsx");
/* harmony import */ var _app_components_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/components/heading */ "./app/components/heading/index.jsx");
/* harmony import */ var _app_components_inputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/components/inputField */ "./app/components/inputField/index.jsx");
/* harmony import */ var _app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/components/ToggleSwitch */ "./app/components/ToggleSwitch.jsx");
/* harmony import */ var _app_components_spacer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/components/spacer */ "./app/components/spacer/index.jsx");
/* harmony import */ var _app_components_layout_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/components/layout/card */ "./app/components/layout/card.jsx");
/* harmony import */ var _app_components_notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/components/notification */ "./app/components/notification/index.jsx");
/* harmony import */ var _app_components_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/components/badge */ "./app/components/badge/index.jsx");











const Advanced = props => {
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_2__.AppContext);

  const handleCustomTriggerChange = val => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({
      type: "set_customTrigger",
      payload: val
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const handleMobileCustomTriggerChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(val => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({
      type: "set_mobileCustomTrigger",
      payload: val
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  }, []);
  const handleCustomWrapperChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(val => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({
      type: "set_customWrapper",
      payload: val
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  }, []);
  const handleCustomTrigger = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(val => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({
      type: "set_initialLoadTrigger",
      payload: val
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  }, []);

  const toggleInitialHide = () => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({
      type: "enable_initialHide"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-id": "advanced",
    class: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_notification__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: props.billingUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `bg-white shadow rounded`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_layout_card__WEBPACK_IMPORTED_MODULE_7__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Advanced",
    text: "Here you can add more advanced functionality for your widget. Some technical knowledge is required to correctly incorporate the following items. If you don\u2019t have the required knowledge, feel free to reach out to On The Map\u2019s technical support.",
    headingSize: "base"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_badge__WEBPACK_IMPORTED_MODULE_9__["default"], null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `f-full lg:w-8/12 ${!state.settings.userData.spark ? "opacity-50 pointer-events-none" : ""}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_layout_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    classes: "max-w-2xl"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Custom trigger",
    text: "If you want your custom trigger for Accessibly widget please enter element ID which you want to use as a trigger.",
    headingSize: "sm"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_inputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Custom trigger for Desktop",
    type: "text",
    value: state.settings.userData.advanced_settings.custom_desktop_trigger,
    prefix: "ID or Class",
    placeholder: "element",
    onChange: val => handleCustomTriggerChange(val)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_inputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Custom trigger for Mobile",
    type: "text",
    value: state.settings.userData.advanced_settings.custom_mobile_trigger,
    prefix: "ID or Class",
    placeholder: "element",
    onChange: handleMobileCustomTriggerChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_spacer__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_inputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Custom wrapper for filter animations (advanced)",
    type: "text",
    value: state.settings.userData.advanced_settings.wrapper_for_filter_animations,
    onChange: handleCustomWrapperChange,
    placeholder: "Ex. body"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_spacer__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Enable intial hide for the first time user",
    enabled: state.settings.userData.advanced_settings.initial_hide,
    tooltip: "Support our app by showing Accessibly logo on your site!",
    onChange: toggleInitialHide
  }), state.settings.userData.advanced_settings.initial_hide ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_inputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Custom trigger",
    type: "text",
    value: state.settings.userData.advanced_settings.custom_trigger,
    onChange: handleCustomTrigger,
    placeholder: "element"
  }) : ""))));
};

/* harmony default export */ __webpack_exports__["default"] = (Advanced);

/***/ }),

/***/ "./src/components/Features.jsx":
/*!*************************************!*\
  !*** ./src/components/Features.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/context */ "./lib/context.jsx");
/* harmony import */ var _app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/components/ToggleSwitch */ "./app/components/ToggleSwitch.jsx");
/* harmony import */ var _app_components_heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/components/heading */ "./app/components/heading/index.jsx");
/* harmony import */ var _app_components_layout_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/components/layout/card */ "./app/components/layout/card.jsx");
/* harmony import */ var _app_components_preview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/components/preview */ "./app/components/preview/index.jsx");
/* harmony import */ var _app_components_notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/components/notification */ "./app/components/notification/index.jsx");
/* harmony import */ var _app_assets_images_icons_svg_zoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/zoom */ "./app/assets/images/icons/svg/zoom.tsx");
/* harmony import */ var _app_assets_images_icons_svg_brightness__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/brightness */ "./app/assets/images/icons/svg/brightness.tsx");
/* harmony import */ var _app_assets_images_icons_svg_contrast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/contrast */ "./app/assets/images/icons/svg/contrast.tsx");
/* harmony import */ var _app_assets_images_icons_svg_cursor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/cursor */ "./app/assets/images/icons/svg/cursor.tsx");
/* harmony import */ var _app_assets_images_icons_svg_hideImages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/hideImages */ "./app/assets/images/icons/svg/hideImages.tsx");
/* harmony import */ var _app_assets_images_icons_svg_highlightLinks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/highlightLinks */ "./app/assets/images/icons/svg/highlightLinks.tsx");
/* harmony import */ var _app_assets_images_icons_svg_invertColors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/invertColors */ "./app/assets/images/icons/svg/invertColors.tsx");
/* harmony import */ var _app_assets_images_icons_svg_readableFonts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/readableFonts */ "./app/assets/images/icons/svg/readableFonts.tsx");
/* harmony import */ var _app_assets_images_icons_svg_readingLine__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/readingLine */ "./app/assets/images/icons/svg/readingLine.tsx");
/* harmony import */ var _app_assets_images_icons_svg_readPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/readPage */ "./app/assets/images/icons/svg/readPage.tsx");
/* harmony import */ var _app_assets_images_icons_svg_tooltips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/tooltips */ "./app/assets/images/icons/svg/tooltips.tsx");
/* harmony import */ var _app_assets_images_icons_svg_grayscale__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/grayscale */ "./app/assets/images/icons/svg/grayscale.tsx");







 // Icons














const Features = props => {
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_2__.AppContext);
  const {
    settings: {
      userData
    }
  } = state; // Defaults

  const iconDefaultColor = "#D0DEE6";

  const toggleZoom = () => {
    dispatch({
      type: "enable_biggerText"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const toggleCursor = () => {
    dispatch({
      type: "enable_showCursor"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const toggleInvert = () => {
    dispatch({
      type: "enable_showInvertColor"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const toggleContrast = () => {
    dispatch({
      type: "enable_showContrast"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const toggleBrightness = () => {
    dispatch({
      type: "enable_showBrightness"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const toggleGrayscale = () => {
    dispatch({
      type: "enable_showGrayScale"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const toggleReadingLine = () => {
    dispatch({
      type: "enable_showReadingLine"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const toggleReadableFonts = () => {
    dispatch({
      type: "enable_showReadableFonts"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const toggleTooltips = () => {
    dispatch({
      type: "enable_showTooltip"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const toggleHighlightLinks = () => {
    dispatch({
      type: "enable_showHighlightLinks"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const toggleHideImages = () => {
    dispatch({
      type: "enable_showHideImages"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const toggleReadPage = () => {
    dispatch({
      type: "enable_showVoiceOverText"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-id": "features",
    class: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_notification__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: props.billingUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lg:flex"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full lg:w-7/12 "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white shadow rounded"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_layout_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    classes: "max-w-2xl"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Features",
    text: "Customize the features of your Accessibly Widget.",
    headingSize: "base"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Bigger cursor",
    enabled: userData.features.includes("bigger_cursor") ? true : false,
    onChange: () => toggleCursor(),
    text: "Increase the size of the text up to three sizes of original text!",
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_cursor__WEBPACK_IMPORTED_MODULE_11__["default"], {
      color: userData.features.includes("bigger_cursor") ? userData.settings.theme.icons : iconDefaultColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Bigger text",
    enabled: userData.features.includes("bigger_text") ? true : false,
    onChange: () => toggleZoom(),
    text: "Increase the size of the text up to three sizes of original text!",
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_zoom__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: userData.features.includes("bigger_text") ? userData.settings.theme.icons : iconDefaultColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Invert colors",
    enabled: userData.features.includes("invert_colors") ? true : false,
    onChange: () => toggleInvert(),
    text: "Invert the colors of images.",
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_invertColors__WEBPACK_IMPORTED_MODULE_14__["default"], {
      color: userData.features.includes("invert_colors") ? userData.settings.theme.icons : iconDefaultColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Contrast",
    enabled: userData.features.includes("contrast") ? true : false,
    onChange: () => toggleContrast(),
    text: "Increase / decrease the contact of photos.",
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_contrast__WEBPACK_IMPORTED_MODULE_10__["default"], {
      color: userData.features.includes("contrast") ? userData.settings.theme.icons : iconDefaultColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Brightness",
    enabled: userData.features.includes("brightness") ? true : false,
    onChange: () => toggleBrightness(),
    text: "Brighten / darken the images on site.",
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_brightness__WEBPACK_IMPORTED_MODULE_9__["default"], {
      color: userData.features.includes("brightness") ? userData.settings.theme.icons : iconDefaultColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Grayscale",
    enabled: userData.features.includes("grayscale") ? true : false,
    onChange: () => toggleGrayscale(),
    text: "Add grayscale to images.",
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_grayscale__WEBPACK_IMPORTED_MODULE_19__["default"], {
      color: userData.features.includes("grayscale") ? userData.settings.theme.icons : iconDefaultColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Reading line",
    enabled: userData.features.includes("reading_line") ? true : false,
    onChange: () => toggleReadingLine(),
    text: "Add supportive reading line to site.",
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_readingLine__WEBPACK_IMPORTED_MODULE_16__["default"], {
      color: userData.features.includes("reading_line") ? userData.settings.theme.icons : iconDefaultColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Readable fonts",
    enabled: userData.features.includes("readable_fonts") ? true : false,
    onChange: () => toggleReadableFonts(),
    text: "Convert fonts on site for a better reading experience.",
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_readableFonts__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: userData.features.includes("readable_fonts") ? userData.settings.theme.icons : iconDefaultColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Tooltips",
    enabled: userData.features.includes("tooltips") ? true : false,
    onChange: () => toggleTooltips(),
    text: "Ability to read alt text of images.",
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_tooltips__WEBPACK_IMPORTED_MODULE_18__["default"], {
      color: userData.features.includes("tooltips") ? userData.settings.theme.icons : iconDefaultColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Highlight links",
    enabled: userData.features.includes("highlight_links") ? true : false,
    onChange: () => toggleHighlightLinks(),
    text: "Highlight links to make them more prominent.",
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_highlightLinks__WEBPACK_IMPORTED_MODULE_13__["default"], {
      color: userData.features.includes("highlight_links") ? userData.settings.theme.icons : iconDefaultColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Hide images",
    enabled: userData.features.includes("hide_images") ? true : false,
    onChange: () => toggleHideImages(),
    text: "Hide images on site.",
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_hideImages__WEBPACK_IMPORTED_MODULE_12__["default"], {
      color: userData.features.includes("hide_images") ? userData.settings.theme.icons : iconDefaultColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Read page",
    enabled: userData.features.includes("read_page") ? true : false,
    onChange: () => toggleReadPage(),
    disabled: !userData.spark ? true : false,
    premiumBadge: true,
    text: "Feature that allows a voice to read the text on your site out loud to visitors.",
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_readPage__WEBPACK_IMPORTED_MODULE_17__["default"], {
      color: userData.features.includes("read_page") ? userData.settings.theme.icons : iconDefaultColor
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full lg:w-5/12 mt-5 pt-5 px-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_preview__WEBPACK_IMPORTED_MODULE_6__["default"], {
    shop: userData
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ }),

/***/ "./src/components/General.jsx":
/*!************************************!*\
  !*** ./src/components/General.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var speak_tts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! speak-tts */ "./node_modules/speak-tts/lib/speak-tts.js");
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/context */ "./lib/context.jsx");
/* harmony import */ var _app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/components/ToggleSwitch */ "./app/components/ToggleSwitch.jsx");
/* harmony import */ var _app_components_inputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/components/inputField */ "./app/components/inputField/index.jsx");
/* harmony import */ var _app_components_heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/components/heading */ "./app/components/heading/index.jsx");
/* harmony import */ var _app_components_layout_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/components/layout/card */ "./app/components/layout/card.jsx");
/* harmony import */ var _app_components_colorPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/components/colorPicker */ "./app/components/colorPicker/index.jsx");
/* harmony import */ var _app_components_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/components/dropdown */ "./app/components/dropdown/index.jsx");
/* harmony import */ var _app_components_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app/components/button */ "./app/components/button/index.jsx");
/* harmony import */ var _app_components_positionPreview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../app/components/positionPreview */ "./app/components/positionPreview/index.jsx");
/* harmony import */ var _app_components_preview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../app/components/preview */ "./app/components/preview/index.jsx");
/* harmony import */ var _app_components_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../app/components/badge */ "./app/components/badge/index.jsx");
/* harmony import */ var _app_components_notification__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../app/components/notification */ "./app/components/notification/index.jsx");
/* harmony import */ var _app_assets_images_icons_svg_zoom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/zoom */ "./app/assets/images/icons/svg/zoom.tsx");














 // Icons



const General = props => {
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_3__.AppContext);
  const [exampleForVoice, setExampleForVoice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Voice example text");
  const [speechVoices, setVoices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{
    label: "Default",
    value: "Default"
  }]);
  const [speech, setSpeech] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    settings: {
      userData
    }
  } = state;
  const buttonSizeOptions = [{
    label: "Large",
    value: "large"
  }, {
    label: "Small",
    value: "small"
  }, {
    label: "Extra Small",
    value: "extra-small"
  } // { label: "Custom", value: "custom" },
  ];
  const position = [{
    label: "Top Left",
    value: "top-left"
  }, {
    label: "Top Right",
    value: "top-right"
  }, {
    label: "Bottom Left",
    value: "bottom-left"
  }, {
    label: "Bottom Right",
    value: "bottom-right"
  }, {
    label: "Middle Right",
    value: "middle-right"
  }, {
    label: "Middle Left",
    value: "middle-left"
  }];
  const languages = [{
    label: "English",
    value: "en"
  }, {
    label: "Spanish",
    value: "es"
  }, {
    label: "Portuguese",
    value: "pt"
  }, {
    label: "Swedish",
    value: "se"
  }, {
    label: "German",
    value: "de"
  }, {
    label: "French",
    value: "fr"
  }, {
    label: "Japanese",
    value: "jp"
  }, {
    label: "South Korean",
    value: "kr"
  }];

  const CustomSize = props => {
    const handleIconCustomSize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(val => {
      dispatch({
        type: "set_iconCustomSize",
        payload: parseInt(val)
      });
      dispatch({
        type: "show_savebar",
        payload: true
      });
    });

    if (state.shop.iconSize != "custom") {
      return "";
    }

    state.shop.iconCustomSize != null ? state.shop.iconCustomSize : state.shop.iconCustomSize = "64";
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        marginTop: 15
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextField, {
      value: state.shop.iconCustomSize.toString(),
      onChange: handleIconCustomSize,
      label: "Icon custom size in px",
      type: "number",
      prefix: "px",
      maxLength: 3,
      helpText: "",
      min: 0
    }));
  };

  const getAllVoices = () => {
    const speech = new speak_tts__WEBPACK_IMPORTED_MODULE_2__["default"]();
    setSpeech(speech);
    speech.init({
      volume: 0.5,
      lang: "en-GB",
      rate: 1,
      pitch: 1
    }).then(data => {
      const voices = data.voices;
      const values = [];
      voices.forEach(function (item) {
        values.push({
          data: item,
          label: `${item.name} (${item.lang})`,
          value: item.name
        });
      });
      setVoices(values);
    }).catch(e => {
      console.error("An error occured while initializing : ", e);
    });

    if (!speech.hasBrowserSupport) {
      alert("Your browser does NOT support speech synthesis. Try using Chrome of Safari instead !");
    }
  };

  const testVoice = () => {
    let languages = speechVoices.filter(voices => voices.value === userData.settings.voiceLanguage)[0];
    let voice = userData.settings.voiceLanguage;

    if (!languages) {
      languages = speechVoices.filter(voices => voices.value === speechVoices[0].data.name)[0];
      voice = speechVoices[0].data.name;
    }

    const language = languages.data.lang;
    if (language) speech.setLanguage(language);
    if (voice) speech.setVoice(voice);
    speech.speak({
      text: exampleForVoice,
      queue: false,
      listeners: {
        onstart: () => {}
      }
    }).catch(e => {
      console.error("An error occurred :", e);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getAllVoices();
  }, []);

  const toggleEnable = () => {
    dispatch({
      type: "set_enabled"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const toggleShowLogo = () => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({
      type: "show_logo"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const toggleHideForever = () => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({
      type: "show_hideForever"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const toggleEnableFetchAltTags = () => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({
      type: "enable_fetchAltTags"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const toggleAcOnTab = () => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({
      type: "enable_toggleAcOnTab"
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const handleBrandingColor = color => {
    dispatch({
      type: "set_themeColor",
      payload: color.hex
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const handleIconColor = color => {
    dispatch({
      type: "set_iconColor",
      payload: color.hex
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const handleTopBottomPosition = val => {
    dispatch({
      type: "set_topBottomPosition",
      payload: val
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const handleRightLeftPosition = val => {
    dispatch({
      type: "set_rightLeftPosition",
      payload: val
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  const handlePosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(val => {
    dispatch({
      type: "set_position",
      payload: val
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  }, []);
  const handleIconSize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(val => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({
      type: "set_iconSize",
      payload: val
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  }, []);
  const handleLanguage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(val => {
    dispatch({
      type: "set_widgetLang",
      payload: val
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  }, []);
  const handleVoice = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(val => {
    // if (!state.settings.shop.subscription_active) {
    //   return;
    // }
    dispatch({
      type: "set_voiceLanguage",
      payload: val
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-id": "general",
    class: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_notification__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClick: props.billingUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lg:flex"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lg:w-8/12 w-full"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white shadow rounded"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_layout_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    classes: "max-w-3xl"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "General",
    text: "Customize the style of your Accessibility App.",
    headingSize: "base"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Enable widget",
    enabled: userData.settings.appIsEnabled,
    onChange: toggleEnable
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_layout_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    classes: "max-w-3xl"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Widget Position",
    text: "Change the positioning of the Widget.",
    headingSize: "base"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_inputField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Top/bottom position (px)",
    type: "number",
    value: userData.settings.position.coords.top,
    onChange: handleTopBottomPosition,
    prefix: "px"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_inputField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Left/right position (px)",
    type: "number",
    value: userData.settings.position.coords.offset,
    prefix: "px",
    onChange: handleRightLeftPosition
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_dropdown__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Widget button position",
    options: position,
    onChange: handlePosition,
    inline: true,
    value: userData.settings.position.type
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_dropdown__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Widget button size",
    options: buttonSizeOptions,
    onChange: handleIconSize,
    customClass: "",
    inline: true,
    value: userData.settings.widgetSize,
    disabled: !userData.spark ? true : false
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_layout_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    classes: "max-w-3xl",
    premium: !userData.spark ? true : false
  }, !userData.spark ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-2 mb-4"
  }, "These are premium plan features. To access these, please ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "text-indigo-600 cursor-pointer font-medium",
    onClick: props.billingUrl
  }, "Upgrade to Premium Plan Here")) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_colorPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "Color of widget icons",
    value: userData.settings.theme.icons,
    onChange: handleIconColor,
    disabled: !userData.spark ? true : false
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_colorPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "Branding color",
    value: userData.settings.theme.branding,
    onChange: handleBrandingColor,
    disabled: !userData.spark ? true : false
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Show Accessibly App logo",
    enabled: userData.settings.showAccessiblyLogo,
    tooltip: "Support our app by showing Accessibly logo on your site!",
    onChange: toggleShowLogo,
    disabled: !userData.spark ? true : false
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Show Hide Forever Button",
    enabled: userData.settings.showHideForever,
    tooltip: "Add Hide forever button so users who don\u2019t need Accessibly app can remove it on your site for themselves.",
    onChange: toggleHideForever,
    disabled: !userData.spark ? true : false
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Automatically (AI) generate image ALT tags",
    enabled: userData.settings.autoGenerateAltTags,
    tooltip: "Let an AI generate image ALT tags for you based on what is visible in the image. This greatly helps visually impaired visitors who use screen readers or \u201Cread page\u201C feature.",
    onChange: toggleEnableFetchAltTags,
    disabled: !userData.spark ? true : false
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Widget activation with \u201CTab\u201D key on keyboard",
    enabled: userData.settings.widgetActiviationWithTab,
    tooltip: "Able users to open Accessibly widget with \u201CTab\u201C key on their keyboard. This feature is beneficial for users with visual impairment who use keyboard to navigate websites.",
    onChange: toggleAcOnTab,
    disabled: !userData.spark ? true : false
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "indigo",
    onClick: props.billingUrl,
    label: "Upgrade to Premium Plan"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_layout_card__WEBPACK_IMPORTED_MODULE_7__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Language and voice",
    text: "If you have a local business, set-up the Widhet in your language.",
    headingSize: "base"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lg:flex justify-between items-center  max-w-3xl mt-4 "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Default Widget language",
    text: "Don\u2019t see the language you are looking for? Send us over your translation and get 20% off of Premium plan! For more information reach out to us.",
    headingSize: "sm",
    borderBottom: false
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_dropdown__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Language",
    options: languages,
    onChange: handleLanguage
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lg:flex justify-between max-w-3xl mt-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "max-w-sm"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Voice settings",
    headingSize: "sm",
    borderBottom: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_badge__WEBPACK_IMPORTED_MODULE_13__["default"], null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_dropdown__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Voice language",
    options: speechVoices,
    onChange: handleVoice,
    disabled: !userData.spark ? true : false
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_inputField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Voice example text",
    type: "text",
    placeholder: "Enter voice example text",
    onChange: value => setExampleForVoice(value),
    inline: false,
    disabled: !userData.spark ? true : false
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-4 mb-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "indigo",
    onClick: () => testVoice(),
    label: "Test Voice"
  }))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lg:w-4/12 w-full px-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_layout_card__WEBPACK_IMPORTED_MODULE_7__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_positionPreview__WEBPACK_IMPORTED_MODULE_11__["default"], {
    settings: userData.settings
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_preview__WEBPACK_IMPORTED_MODULE_12__["default"], {
    shop: userData
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (General);

/***/ }),

/***/ "./src/components/MyPlan.jsx":
/*!***********************************!*\
  !*** ./src/components/MyPlan.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/context */ "./lib/context.jsx");
/* harmony import */ var _app_services_SettingsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/SettingsService */ "./app/services/SettingsService.js");
/* harmony import */ var _app_components_layout_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/components/layout/card */ "./app/components/layout/card.jsx");
/* harmony import */ var _app_components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/components/button */ "./app/components/button/index.jsx");
/* harmony import */ var _app_components_heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/components/heading */ "./app/components/heading/index.jsx");
/* harmony import */ var _app_components_invoiceTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/components/invoiceTable */ "./app/components/invoiceTable/index.jsx");
/* harmony import */ var _app_components_notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/components/notification */ "./app/components/notification/index.jsx");










const MyPlan = () => {
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_2__.AppContext);
  const [invoices, setInvoices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const spark = state.settings.userData.spark;
  const token = document.getElementById("accessibly").getAttribute("data-token");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchInvoices();
  }, []);

  const billingUrl = async () => {
    try {
      const billingUrl = await _app_services_SettingsService__WEBPACK_IMPORTED_MODULE_3__["default"].getBillingUrl(token);
      window.open(billingUrl.data, "_blank");
    } catch (err) {
      alert("We are very sorry, there was an error on our side. We could not generate the billing URL. Please contact the support");
    }
  };

  const fetchInvoices = async () => {
    try {
      const {
        data
      } = await _app_services_SettingsService__WEBPACK_IMPORTED_MODULE_3__["default"].fetchInvoices(token);
      setInvoices(data);
    } catch (err) {
      alert("We are very sorry, there was an error on our side. We could not generate the billing URL. Please contact the support");
    }
  };

  if (!spark) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "myplan",
      class: "wrap"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_layout_card__WEBPACK_IMPORTED_MODULE_4__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "My Plan",
      headingSize: "lg"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_notification__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: billingUrl
    })));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "myplan",
    class: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_layout_card__WEBPACK_IMPORTED_MODULE_4__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center justify-between w-full"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "My Plan",
    headingSize: "lg"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "indigo",
    onClick: () => billingUrl(),
    label: "Change subscription plan"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_layout_card__WEBPACK_IMPORTED_MODULE_4__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex bg-white rounded shadow"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-6/12 px-4 py-6 border-r"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-base weight-semibold text-gray-900"
  }, "Next payment due on"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-xl weight-semibold text-ac"
  }, state.settings.userData.nextPaymentDate), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-xs text-gray-400"
  }, "(In ", state.settings.userData.daysTillPayment, ")"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-6/12 py-6 px-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-base weight-semibold text-gray-900"
  }, "Payment amount"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-xl weight-semibold text-ac"
  }, "$", state.settings.userData.nextPaymentAmount), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-xs text-gray-400"
  }, "USD"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_layout_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    bgColor: 'bg-white',
    classes: "shadow"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_invoiceTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: invoices
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MyPlan);

/***/ }),

/***/ "./src/components/Statement.jsx":
/*!**************************************!*\
  !*** ./src/components/Statement.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/context */ "./lib/context.jsx");
/* harmony import */ var _app_components_inputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/components/inputField */ "./app/components/inputField/index.jsx");
/* harmony import */ var _app_components_heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/components/heading */ "./app/components/heading/index.jsx");
/* harmony import */ var _app_components_textStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/components/textStyle */ "./app/components/textStyle/index.jsx");
/* harmony import */ var _app_assets_images_icons_svg_newPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/newPage */ "./app/assets/images/icons/svg/newPage.tsx");
/* harmony import */ var _app_assets_images_icons_svg_copyStatement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/copyStatement */ "./app/assets/images/icons/svg/copyStatement.tsx");
/* harmony import */ var _app_assets_images_icons_svg_pasteLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/pasteLink */ "./app/assets/images/icons/svg/pasteLink.tsx");
/* harmony import */ var _app_assets_images_icons_svg_codeIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/codeIcon */ "./app/assets/images/icons/svg/codeIcon.tsx");
/* harmony import */ var _app_assets_images_icons_svg_copyText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app/assets/images/icons/svg/copyText */ "./app/assets/images/icons/svg/copyText.tsx");





 // icons







const Statement = _ref => {
  let {
    addToast
  } = _ref;
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_2__.AppContext);
  const [copiedToast, setCopiedToast] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [codeView, setCodeView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [codeGenerated, setCodeGenerated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const statementH2Style = {
    fontWeight: "700",
    fontSize: "22px",
    marginBottom: "10px"
  };
  const statementH3Style = {
    fontWeight: "600",
    fontSize: "17px",
    marginBottom: "5px",
    marginTop: "15px"
  };
  const statementH4Style = {
    fontWeight: "600",
    fontSize: "17px",
    marginBottom: "5px",
    marginTop: "15px"
  };
  const statementPStyle = {
    fontWeight: "400",
    fontSize: "14px",
    marginBottom: "2px"
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {}, []);

  const convertToCode = () => {
    setCodeView(!codeView);

    if (codeGenerated) {
      return;
    }

    const container = document.getElementById("accessibly-statement");
    const result = document.querySelector(".code-result pre code");
    const textContent = container.innerHTML.replace(/</gi, "&lt;").replace(/>/gi, "&gt;");
    result.innerHTML = textContent; //hljs.highlightBlock(result);

    setCodeGenerated(true);
  };

  const copyText = () => {
    addToast({
      message: "Copied to clipboard"
    });
    let containerId;

    if (!codeView) {
      containerId = "accessibly-statement";
    } else {
      containerId = "accessibly-statement-code";
    }

    if (window.getSelection) {
      if (window.getSelection().empty) {
        // Chrome
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        // Firefox
        window.getSelection().removeAllRanges();
      }
    }

    if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(containerId));
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().empty();
      setCopiedToast(true);
    }
  };

  const onStatementLinkChange = val => {
    dispatch({
      type: "set_statementLink",
      payload: val
    });
    dispatch({
      type: "show_savebar",
      payload: true
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "statement",
    class: "wrap",
    style: {
      maxWidth: "1000px"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white shadow rounded p-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    headingSize: "md",
    title: "Accessibility Statement"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_textStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontSize: "sm"
  }, "Accessibility statement on your site can help with ADA/WCAG compliance. If you already don't have one, make a new page on your website and call it \"Accessibility\". Feel free to use our Accessibility statement below as the copy for this page. Then copy the link to the Accessibility Statement below so we can forward visitors and lawyers to the right page in your website."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lg:flex mt-6 mb-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lg:text-center mr-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_textStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontWeight: "bold",
    fontSize: "sm"
  }, "1. Create a new page"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_newPage__WEBPACK_IMPORTED_MODULE_6__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lg:text-center mr-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_textStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontWeight: "bold",
    fontSize: "sm"
  }, "2. Copy Statement in your new page"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_copyStatement__WEBPACK_IMPORTED_MODULE_7__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lg:text-center mr-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_textStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontWeight: "bold",
    fontSize: "sm"
  }, "3. Paste your Accessibility link"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_pasteLink__WEBPACK_IMPORTED_MODULE_8__["default"], null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_components_inputField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Paste a link to Accessibility Statement in your website",
    type: "text",
    value: state.settings.userData.accessibility_statement_url,
    placeholder: "www.example.com/accessibility",
    fullWidth: true,
    labelWidth: "w-72",
    onChange: value => onStatementLinkChange(value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-end mt-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button-helper mr-2",
    onClick: () => copyText()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_copyText__WEBPACK_IMPORTED_MODULE_10__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Copy text")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button-helper",
    onClick: () => convertToCode()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_app_assets_images_icons_svg_codeIcon__WEBPACK_IMPORTED_MODULE_9__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, codeView ? "Text" : "<code>"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "accessibly-statement",
    className: `pb-12 ${codeView ? "mt-9 hidden" : "mt-9"}`,
    style: {
      maxWidth: "1000px"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    style: statementH2Style
  }, "Accessibly App Accessibility Statement"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "Accessibly App is committed to making sites accessible for all, including people with disabilities. We are continuously improving the service we provide through our app to comply with increased accessibility standards, guidelines, and to make the browsing experience better for everyone."), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    style: statementH3Style
  }, "Conformance status"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "The app uses the Web Content Accessibility Guidelines (WCAG) defined requirements to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Accessibly App is following the best guidelines and is partially conformant with WCAG 2.0 level AA."), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    style: statementH3Style
  }, "Technical information"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "Accessibly App is an app supported in Shopify and Wordpress environments. The app relies on the following technologies:"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "HTML"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "CSS"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "JavaScript"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "NodeJS"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "MongoDB")), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    style: statementH3Style
  }, "Accessibly App features"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "When a site has Accessibly App installed, the website can be adjusted with keyboard navigation using the \u201Ctab\u201D key (WCAG 2.1/2.1.1). Additionally, see the list of all provided Accessibly App features and tools for better website experience:"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: statementH4Style
  }, "Zoom | WCAG 2.1 / 1.4.4"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "This feature enables users to enhance the size of the text to up to three times the original text for better text readability. "), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: statementH4Style
  }, "Bigger cursor"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "Makes the cursor bigger and more prominent. Increases the size for better site browsing. "), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: statementH4Style
  }, "Invert colors"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "Invert the colors of the website content. For those with decreased vision, the high contrast greatly helps to read the site better. "), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: statementH4Style
  }, "Tweak Contrast | WCAG 2.1 / 1.4.6"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "This feature lets users manually select from two options: to enhance the contrast of the website or to decrease the contrast. "), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: statementH4Style
  }, "Tweak Brightness | WCAG 2.1 / 1.4.6"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "This feature lets users update the brightness on the site. The content can either be made brighter or darker. "), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: statementH4Style
  }, "Grayscale | WCAG 2.1 / 1.4.6"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "Users can turn on grayscale, making the website content appear only in shades of gray. This benefits people with visual impairment."), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: statementH4Style
  }, "Reading Line"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "Add a supportive reading line to the site."), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: statementH4Style
  }, "Readable fonts"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "Convert the fonts available on-site to one of the most easily readable fonts: Helvetica."), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: statementH4Style
  }, "Alt Text and Images"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "Ability to read alt text of images. As of now, our tool has added a feature where alt descriptions for images without them are generated using ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://cloud.google.com/vision/"
  }, "Google's Vision AI"), ". In the event that you haven't manually written these image descriptions yourself, this greatly helps people with visual impairment browse your site."), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: statementH4Style
  }, "Tooltips | WCAG 2.1 / 2.5.3"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "Add labels to images that contain a written description of the image."), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: statementH4Style
  }, "Highlight links"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "Highlight links to make them more prominent."), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: statementH4Style
  }, "Hide images"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "Hide images on the site. This provides better site readability for people with visual impairment."), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: statementH4Style
  }, "Read page"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "A feature that allows a voice to read the text on your site out loud to visitors. "), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Notes & Feedback"), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "We always try to update our services and operate in the best possible manner to benefit all of our clients and their site visitors. If you experience any issues with the Accessibly App provided service, however, please email ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "mailto:christiana@onthemapmarketing.com"
  }, "christiana@onthemapmarketing.com"), ". We respond within 3 business days. "), "\n", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: statementPStyle
  }, "We cannot control or correct problems with third-party sites, but please let us know if you encounter difficulty with any sites we link to so we can pass the information along to the site owners. You may also want to address your concerns directly to these third parties.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "accessibly-statement-code",
    className: codeView ? "code-result mt-4" : "code-result mt-4 hidden"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", {
    className: "html",
    style: {
      whiteSpace: "break-spaces"
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Statement);

/***/ }),

/***/ "./node_modules/history/index.js":
/*!***************************************!*\
  !*** ./node_modules/history/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": function() { return /* binding */ Action; },
/* harmony export */   "createBrowserHistory": function() { return /* binding */ createBrowserHistory; },
/* harmony export */   "createHashHistory": function() { return /* binding */ createHashHistory; },
/* harmony export */   "createMemoryHistory": function() { return /* binding */ createMemoryHistory; },
/* harmony export */   "createPath": function() { return /* binding */ createPath; },
/* harmony export */   "parsePath": function() { return /* binding */ parsePath; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


/**
 * Actions represent the type of change to a location value.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
 */
var Action;

(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */

  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */

  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));

var readOnly =  true ? function (obj) {
  return Object.freeze(obj);
} : 0;

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== 'undefined') console.warn(message);

    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

var BeforeUnloadEventType = 'beforeunload';
var HashChangeEventType = 'hashchange';
var PopStateEventType = 'popstate';
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */

function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$window = _options.window,
      window = _options$window === void 0 ? document.defaultView : _options$window;
  var globalHistory = window.history;

  function getIndexAndLocation() {
    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname: pathname,
      search: search,
      hash: hash,
      state: state.usr || null,
      key: state.key || 'default'
    })];
  }

  var blockedPopTx = null;

  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;

      var _getIndexAndLocation = getIndexAndLocation(),
          nextIndex = _getIndexAndLocation[0],
          nextLocation = _getIndexAndLocation[1];

      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index - nextIndex;

          if (delta) {
            // Revert the POP
            blockedPopTx = {
              action: nextAction,
              location: nextLocation,
              retry: function retry() {
                go(delta * -1);
              }
            };
            go(delta);
          }
        } else {
          // Trying to POP to a location with no index. We did not create
          // this location, so we can't effectively block the navigation.
           true ? warning(false, // TODO: Write up a doc that explains our blocking strategy in
          // detail and link to it here so people can understand better what
          // is going on and how to avoid it.
          "You are trying to block a POP navigation to a location that was not " + "created by the history library. The block will fail silently in " + "production, but in general you should do all navigation with the " + "history library (instead of using window.history.pushState directly) " + "to avoid this situation.") : 0;
        }
      } else {
        applyTx(nextAction);
      }
    }
  }

  window.addEventListener(PopStateEventType, handlePop);
  var action = Action.Pop;

  var _getIndexAndLocation2 = getIndexAndLocation(),
      index = _getIndexAndLocation2[0],
      location = _getIndexAndLocation2[1];

  var listeners = createEvents();
  var blockers = createEvents();

  if (index == null) {
    index = 0;
    globalHistory.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, globalHistory.state, {
      idx: index
    }), '');
  }

  function createHref(to) {
    return typeof to === 'string' ? to : createPath(to);
  } // state defaults to `null` because `window.history.state` does


  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }

    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pathname: location.pathname,
      hash: '',
      search: ''
    }, typeof to === 'string' ? parsePath(to) : to, {
      state: state,
      key: createKey()
    }));
  }

  function getHistoryStateAndUrl(nextLocation, index) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index
    }, createHref(nextLocation)];
  }

  function allowTx(action, location, retry) {
    return !blockers.length || (blockers.call({
      action: action,
      location: location,
      retry: retry
    }), false);
  }

  function applyTx(nextAction) {
    action = nextAction;

    var _getIndexAndLocation3 = getIndexAndLocation();

    index = _getIndexAndLocation3[0];
    location = _getIndexAndLocation3[1];
    listeners.call({
      action: action,
      location: location
    });
  }

  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      push(to, state);
    }

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1),
          historyState = _getHistoryStateAndUr[0],
          url = _getHistoryStateAndUr[1]; // TODO: Support forced reloading
      // try...catch because iOS limits us to 100 pushState calls :/


      try {
        globalHistory.pushState(historyState, '', url);
      } catch (error) {
        // They are going to lose state here, but there is no real
        // way to warn them about it since the page will refresh...
        window.location.assign(url);
      }

      applyTx(nextAction);
    }
  }

  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      replace(to, state);
    }

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index),
          historyState = _getHistoryStateAndUr2[0],
          url = _getHistoryStateAndUr2[1]; // TODO: Support forced reloading


      globalHistory.replaceState(historyState, '', url);
      applyTx(nextAction);
    }
  }

  function go(delta) {
    globalHistory.go(delta);
  }

  var history = {
    get action() {
      return action;
    },

    get location() {
      return location;
    },

    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      var unblock = blockers.push(blocker);

      if (blockers.length === 1) {
        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }

      return function () {
        unblock(); // Remove the beforeunload listener so the document may
        // still be salvageable in the pagehide event.
        // See https://html.spec.whatwg.org/#unloading-documents

        if (!blockers.length) {
          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
      };
    }
  };
  return history;
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */

function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }

  var _options2 = options,
      _options2$window = _options2.window,
      window = _options2$window === void 0 ? document.defaultView : _options2$window;
  var globalHistory = window.history;

  function getIndexAndLocation() {
    var _parsePath = parsePath(window.location.hash.substr(1)),
        _parsePath$pathname = _parsePath.pathname,
        pathname = _parsePath$pathname === void 0 ? '/' : _parsePath$pathname,
        _parsePath$search = _parsePath.search,
        search = _parsePath$search === void 0 ? '' : _parsePath$search,
        _parsePath$hash = _parsePath.hash,
        hash = _parsePath$hash === void 0 ? '' : _parsePath$hash;

    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname: pathname,
      search: search,
      hash: hash,
      state: state.usr || null,
      key: state.key || 'default'
    })];
  }

  var blockedPopTx = null;

  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;

      var _getIndexAndLocation4 = getIndexAndLocation(),
          nextIndex = _getIndexAndLocation4[0],
          nextLocation = _getIndexAndLocation4[1];

      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index - nextIndex;

          if (delta) {
            // Revert the POP
            blockedPopTx = {
              action: nextAction,
              location: nextLocation,
              retry: function retry() {
                go(delta * -1);
              }
            };
            go(delta);
          }
        } else {
          // Trying to POP to a location with no index. We did not create
          // this location, so we can't effectively block the navigation.
           true ? warning(false, // TODO: Write up a doc that explains our blocking strategy in
          // detail and link to it here so people can understand better
          // what is going on and how to avoid it.
          "You are trying to block a POP navigation to a location that was not " + "created by the history library. The block will fail silently in " + "production, but in general you should do all navigation with the " + "history library (instead of using window.history.pushState directly) " + "to avoid this situation.") : 0;
        }
      } else {
        applyTx(nextAction);
      }
    }
  }

  window.addEventListener(PopStateEventType, handlePop); // popstate does not fire on hashchange in IE 11 and old (trident) Edge
  // https://developer.mozilla.org/de/docs/Web/API/Window/popstate_event

  window.addEventListener(HashChangeEventType, function () {
    var _getIndexAndLocation5 = getIndexAndLocation(),
        nextLocation = _getIndexAndLocation5[1]; // Ignore extraneous hashchange events.


    if (createPath(nextLocation) !== createPath(location)) {
      handlePop();
    }
  });
  var action = Action.Pop;

  var _getIndexAndLocation6 = getIndexAndLocation(),
      index = _getIndexAndLocation6[0],
      location = _getIndexAndLocation6[1];

  var listeners = createEvents();
  var blockers = createEvents();

  if (index == null) {
    index = 0;
    globalHistory.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, globalHistory.state, {
      idx: index
    }), '');
  }

  function getBaseHref() {
    var base = document.querySelector('base');
    var href = '';

    if (base && base.getAttribute('href')) {
      var url = window.location.href;
      var hashIndex = url.indexOf('#');
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }

    return href;
  }

  function createHref(to) {
    return getBaseHref() + '#' + (typeof to === 'string' ? to : createPath(to));
  }

  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }

    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pathname: location.pathname,
      hash: '',
      search: ''
    }, typeof to === 'string' ? parsePath(to) : to, {
      state: state,
      key: createKey()
    }));
  }

  function getHistoryStateAndUrl(nextLocation, index) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index
    }, createHref(nextLocation)];
  }

  function allowTx(action, location, retry) {
    return !blockers.length || (blockers.call({
      action: action,
      location: location,
      retry: retry
    }), false);
  }

  function applyTx(nextAction) {
    action = nextAction;

    var _getIndexAndLocation7 = getIndexAndLocation();

    index = _getIndexAndLocation7[0];
    location = _getIndexAndLocation7[1];
    listeners.call({
      action: action,
      location: location
    });
  }

  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      push(to, state);
    }

     true ? warning(nextLocation.pathname.charAt(0) === '/', "Relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")") : 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index + 1),
          historyState = _getHistoryStateAndUr3[0],
          url = _getHistoryStateAndUr3[1]; // TODO: Support forced reloading
      // try...catch because iOS limits us to 100 pushState calls :/


      try {
        globalHistory.pushState(historyState, '', url);
      } catch (error) {
        // They are going to lose state here, but there is no real
        // way to warn them about it since the page will refresh...
        window.location.assign(url);
      }

      applyTx(nextAction);
    }
  }

  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      replace(to, state);
    }

     true ? warning(nextLocation.pathname.charAt(0) === '/', "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(to) + ")") : 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index),
          historyState = _getHistoryStateAndUr4[0],
          url = _getHistoryStateAndUr4[1]; // TODO: Support forced reloading


      globalHistory.replaceState(historyState, '', url);
      applyTx(nextAction);
    }
  }

  function go(delta) {
    globalHistory.go(delta);
  }

  var history = {
    get action() {
      return action;
    },

    get location() {
      return location;
    },

    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      var unblock = blockers.push(blocker);

      if (blockers.length === 1) {
        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }

      return function () {
        unblock(); // Remove the beforeunload listener so the document may
        // still be salvageable in the pagehide event.
        // See https://html.spec.whatwg.org/#unloading-documents

        if (!blockers.length) {
          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
      };
    }
  };
  return history;
}
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#creatememoryhistory
 */

function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }

  var _options3 = options,
      _options3$initialEntr = _options3.initialEntries,
      initialEntries = _options3$initialEntr === void 0 ? ['/'] : _options3$initialEntr,
      initialIndex = _options3.initialIndex;
  var entries = initialEntries.map(function (entry) {
    var location = readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: createKey()
    }, typeof entry === 'string' ? parsePath(entry) : entry));
     true ? warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: " + JSON.stringify(entry) + ")") : 0;
    return location;
  });
  var index = clamp(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);
  var action = Action.Pop;
  var location = entries[index];
  var listeners = createEvents();
  var blockers = createEvents();

  function createHref(to) {
    return typeof to === 'string' ? to : createPath(to);
  }

  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }

    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pathname: location.pathname,
      search: '',
      hash: ''
    }, typeof to === 'string' ? parsePath(to) : to, {
      state: state,
      key: createKey()
    }));
  }

  function allowTx(action, location, retry) {
    return !blockers.length || (blockers.call({
      action: action,
      location: location,
      retry: retry
    }), false);
  }

  function applyTx(nextAction, nextLocation) {
    action = nextAction;
    location = nextLocation;
    listeners.call({
      action: action,
      location: location
    });
  }

  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      push(to, state);
    }

     true ? warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in memory history.push(" + JSON.stringify(to) + ")") : 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      applyTx(nextAction, nextLocation);
    }
  }

  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      replace(to, state);
    }

     true ? warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in memory history.replace(" + JSON.stringify(to) + ")") : 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      entries[index] = nextLocation;
      applyTx(nextAction, nextLocation);
    }
  }

  function go(delta) {
    var nextIndex = clamp(index + delta, 0, entries.length - 1);
    var nextAction = Action.Pop;
    var nextLocation = entries[nextIndex];

    function retry() {
      go(delta);
    }

    if (allowTx(nextAction, nextLocation, retry)) {
      index = nextIndex;
      applyTx(nextAction, nextLocation);
    }
  }

  var history = {
    get index() {
      return index;
    },

    get action() {
      return action;
    },

    get location() {
      return location;
    },

    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      return blockers.push(blocker);
    }
  };
  return history;
} ////////////////////////////////////////////////////////////////////////////////
// UTILS
////////////////////////////////////////////////////////////////////////////////

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}

function promptBeforeUnload(event) {
  // Cancel the event.
  event.preventDefault(); // Chrome (and legacy IE) requires returnValue to be set.

  event.returnValue = '';
}

function createEvents() {
  var handlers = [];
  return {
    get length() {
      return handlers.length;
    },

    push: function push(fn) {
      handlers.push(fn);
      return function () {
        handlers = handlers.filter(function (handler) {
          return handler !== fn;
        });
      };
    },
    call: function call(arg) {
      handlers.forEach(function (fn) {
        return fn && fn(arg);
      });
    }
  };
}

function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath
 */


function createPath(_ref) {
  var _ref$pathname = _ref.pathname,
      pathname = _ref$pathname === void 0 ? '/' : _ref$pathname,
      _ref$search = _ref.search,
      search = _ref$search === void 0 ? '' : _ref$search,
      _ref$hash = _ref.hash,
      hash = _ref$hash === void 0 ? '' : _ref$hash;
  if (search && search !== '?') pathname += search.charAt(0) === '?' ? search : '?' + search;
  if (hash && hash !== '#') pathname += hash.charAt(0) === '#' ? hash : '#' + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath
 */

function parsePath(path) {
  var parsedPath = {};

  if (path) {
    var hashIndex = path.indexOf('#');

    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    var searchIndex = path.indexOf('?');

    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/***/ (function(module) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ (function(module) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/***/ (function(module) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/***/ (function(module) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ (function(module) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ (function(module) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ (function(module) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ (function(module) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/***/ (function(module) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/***/ (function(module) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/***/ (function(module) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ (function(module) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/***/ (function(module) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/***/ (function(module) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/***/ (function(module) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/***/ (function(module) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/***/ (function(module) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ (function(module) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ (function(module) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/***/ (function(module) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./forEach */ "./node_modules/lodash/forEach.js");


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ (function(module) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/forEach.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/forEach.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/lodash/_castFunction.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ "./node_modules/lodash/forOwn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/forOwn.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/lodash/_castFunction.js");

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && baseForOwn(object, castFunction(iteratee));
}

module.exports = forOwn;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ (function(module) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ (function(module) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ (function(module) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ (function(module) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ (function(module) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/isUndefined.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isUndefined.js ***!
  \********************************************/
/***/ (function(module) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/material-colors/dist/colors.es2015.js":
/*!************************************************************!*\
  !*** ./node_modules/material-colors/dist/colors.es2015.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amber": function() { return /* binding */ amber; },
/* harmony export */   "black": function() { return /* binding */ black; },
/* harmony export */   "blue": function() { return /* binding */ blue; },
/* harmony export */   "blueGrey": function() { return /* binding */ blueGrey; },
/* harmony export */   "brown": function() { return /* binding */ brown; },
/* harmony export */   "cyan": function() { return /* binding */ cyan; },
/* harmony export */   "darkIcons": function() { return /* binding */ darkIcons; },
/* harmony export */   "darkText": function() { return /* binding */ darkText; },
/* harmony export */   "deepOrange": function() { return /* binding */ deepOrange; },
/* harmony export */   "deepPurple": function() { return /* binding */ deepPurple; },
/* harmony export */   "green": function() { return /* binding */ green; },
/* harmony export */   "grey": function() { return /* binding */ grey; },
/* harmony export */   "indigo": function() { return /* binding */ indigo; },
/* harmony export */   "lightBlue": function() { return /* binding */ lightBlue; },
/* harmony export */   "lightGreen": function() { return /* binding */ lightGreen; },
/* harmony export */   "lightIcons": function() { return /* binding */ lightIcons; },
/* harmony export */   "lightText": function() { return /* binding */ lightText; },
/* harmony export */   "lime": function() { return /* binding */ lime; },
/* harmony export */   "orange": function() { return /* binding */ orange; },
/* harmony export */   "pink": function() { return /* binding */ pink; },
/* harmony export */   "purple": function() { return /* binding */ purple; },
/* harmony export */   "red": function() { return /* binding */ red; },
/* harmony export */   "teal": function() { return /* binding */ teal; },
/* harmony export */   "white": function() { return /* binding */ white; },
/* harmony export */   "yellow": function() { return /* binding */ yellow; }
/* harmony export */ });
var red = {"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80","a200":"#ff5252","a400":"#ff1744","a700":"#d50000"};
var pink = {"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80ab","a200":"#ff4081","a400":"#f50057","a700":"#c51162"};
var purple = {"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fc","a200":"#e040fb","a400":"#d500f9","a700":"#aa00ff"};
var deepPurple = {"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ff","a200":"#7c4dff","a400":"#651fff","a700":"#6200ea"};
var indigo = {"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9eff","a200":"#536dfe","a400":"#3d5afe","a700":"#304ffe"};
var blue = {"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ff","a200":"#448aff","a400":"#2979ff","a700":"#2962ff"};
var lightBlue = {"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ff","a200":"#40c4ff","a400":"#00b0ff","a700":"#0091ea"};
var cyan = {"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffff","a200":"#18ffff","a400":"#00e5ff","a700":"#00b8d4"};
var teal = {"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeb","a200":"#64ffda","a400":"#1de9b6","a700":"#00bfa5"};
var green = {"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6ca","a200":"#69f0ae","a400":"#00e676","a700":"#00c853"};
var lightGreen = {"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90","a200":"#b2ff59","a400":"#76ff03","a700":"#64dd17"};
var lime = {"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81","a200":"#eeff41","a400":"#c6ff00","a700":"#aeea00"};
var yellow = {"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8d","a200":"#ffff00","a400":"#ffea00","a700":"#ffd600"};
var amber = {"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57f","a200":"#ffd740","a400":"#ffc400","a700":"#ffab00"};
var orange = {"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180","a200":"#ffab40","a400":"#ff9100","a700":"#ff6d00"};
var deepOrange = {"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80","a200":"#ff6e40","a400":"#ff3d00","a700":"#dd2c00"};
var brown = {"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"};
var grey = {"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"};
var blueGrey = {"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"};
var darkText = {"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","dividers":"rgba(0, 0, 0, 0.12)"};
var lightText = {"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","dividers":"rgba(255, 255, 255, 0.12)"};
var darkIcons = {"active":"rgba(0, 0, 0, 0.54)","inactive":"rgba(0, 0, 0, 0.38)"};
var lightIcons = {"active":"rgba(255, 255, 255, 1)","inactive":"rgba(255, 255, 255, 0.5)"};
var white = "#ffffff";
var black = "#000000";

/* harmony default export */ __webpack_exports__["default"] = ({
  red: red,
  pink: pink,
  purple: purple,
  deepPurple: deepPurple,
  indigo: indigo,
  blue: blue,
  lightBlue: lightBlue,
  cyan: cyan,
  teal: teal,
  green: green,
  lightGreen: lightGreen,
  lime: lime,
  yellow: yellow,
  amber: amber,
  orange: orange,
  deepOrange: deepOrange,
  brown: brown,
  grey: grey,
  blueGrey: blueGrey,
  darkText: darkText,
  lightText: lightText,
  darkIcons: darkIcons,
  lightIcons: lightIcons,
  white: white,
  black: black
});


/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/positionPreview.css":
/*!************************************!*\
  !*** ./styles/positionPreview.css ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/preview.css":
/*!****************************!*\
  !*** ./styles/preview.css ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-color/es/components/alpha/Alpha.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-color/es/components/alpha/Alpha.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlphaPicker": function() { return /* binding */ AlphaPicker; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");
/* harmony import */ var _AlphaPointer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AlphaPointer */ "./node_modules/react-color/es/components/alpha/AlphaPointer.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







var AlphaPicker = function AlphaPicker(_ref) {
  var rgb = _ref.rgb,
      hsl = _ref.hsl,
      width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      direction = _ref.direction,
      style = _ref.style,
      renderers = _ref.renderers,
      pointer = _ref.pointer,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      alpha: {
        radius: '2px',
        style: style
      }
    }
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.picker, className: 'alpha-picker ' + className },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_2__.Alpha, _extends({}, styles.alpha, {
      rgb: rgb,
      hsl: hsl,
      pointer: pointer,
      renderers: renderers,
      onChange: onChange,
      direction: direction
    }))
  );
};

AlphaPicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
  pointer: _AlphaPointer__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_common__WEBPACK_IMPORTED_MODULE_2__.ColorWrap)(AlphaPicker));

/***/ }),

/***/ "./node_modules/react-color/es/components/alpha/AlphaPointer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-color/es/components/alpha/AlphaPointer.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlphaPointer": function() { return /* binding */ AlphaPointer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");



var AlphaPointer = function AlphaPointer(_ref) {
  var direction = _ref.direction;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      picker: {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    },
    'vertical': {
      picker: {
        transform: 'translate(-3px, -9px)'
      }
    }
  }, { vertical: direction === 'vertical' });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.picker });
};

/* harmony default export */ __webpack_exports__["default"] = (AlphaPointer);

/***/ }),

/***/ "./node_modules/react-color/es/components/block/Block.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-color/es/components/block/Block.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Block": function() { return /* binding */ Block; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/es/helpers/color.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");
/* harmony import */ var _BlockSwatches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BlockSwatches */ "./node_modules/react-color/es/components/block/BlockSwatches.js");









var Block = function Block(_ref) {
  var onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      hex = _ref.hex,
      colors = _ref.colors,
      width = _ref.width,
      triangle = _ref.triangle,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var transparent = hex === 'transparent';
  var handleChange = function handleChange(hexCode, e) {
    _helpers_color__WEBPACK_IMPORTED_MODULE_3__.isValidHex(hexCode) && onChange({
      hex: hexCode,
      source: 'hex'
    }, e);
  };

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default()({
    'default': {
      card: {
        width: width,
        background: '#fff',
        boxShadow: '0 1px rgba(0,0,0,.1)',
        borderRadius: '6px',
        position: 'relative'
      },
      head: {
        height: '110px',
        background: hex,
        borderRadius: '6px 6px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      },
      body: {
        padding: '10px'
      },
      label: {
        fontSize: '18px',
        color: _helpers_color__WEBPACK_IMPORTED_MODULE_3__.getContrastingColor(hex),
        position: 'relative'
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 10px 10px 10px',
        borderColor: 'transparent transparent ' + hex + ' transparent',
        position: 'absolute',
        top: '-10px',
        left: '50%',
        marginLeft: '-10px'
      },
      input: {
        width: '100%',
        fontSize: '12px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '22px',
        boxShadow: 'inset 0 0 0 1px #ddd',
        borderRadius: '4px',
        padding: '0 7px',
        boxSizing: 'border-box'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      }
    }
  }, passedStyles), { 'hide-triangle': triangle === 'hide' });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.card, className: 'block-picker ' + className },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.triangle }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.head },
      transparent && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_4__.Checkboard, { borderRadius: '6px 6px 0 0' }),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.label },
        hex
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.body },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BlockSwatches__WEBPACK_IMPORTED_MODULE_5__["default"], { colors: colors, onClick: handleChange, onSwatchHover: onSwatchHover }),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_4__.EditableInput, {
        style: { input: styles.input },
        value: hex,
        onChange: handleChange
      })
    )
  );
};

Block.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)]),
  colors: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)),
  triangle: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(['top', 'hide']),
  styles: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};

Block.defaultProps = {
  width: 170,
  colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8'],
  triangle: 'top',
  styles: {}
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_common__WEBPACK_IMPORTED_MODULE_4__.ColorWrap)(Block));

/***/ }),

/***/ "./node_modules/react-color/es/components/block/BlockSwatches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-color/es/components/block/BlockSwatches.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockSwatches": function() { return /* binding */ BlockSwatches; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");






var BlockSwatches = function BlockSwatches(_ref) {
  var colors = _ref.colors,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      swatches: {
        marginRight: '-10px'
      },
      swatch: {
        width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.swatches },
    lodash_es_map__WEBPACK_IMPORTED_MODULE_2___default()(colors, function (c) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Swatch, {
        key: c,
        color: c,
        style: styles.swatch,
        onClick: onClick,
        onHover: onSwatchHover,
        focusStyle: {
          boxShadow: '0 0 4px ' + c
        }
      });
    }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.clear })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (BlockSwatches);

/***/ }),

/***/ "./node_modules/react-color/es/components/chrome/Chrome.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-color/es/components/chrome/Chrome.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chrome": function() { return /* binding */ Chrome; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");
/* harmony import */ var _ChromeFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChromeFields */ "./node_modules/react-color/es/components/chrome/ChromeFields.js");
/* harmony import */ var _ChromePointer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChromePointer */ "./node_modules/react-color/es/components/chrome/ChromePointer.js");
/* harmony import */ var _ChromePointerCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChromePointerCircle */ "./node_modules/react-color/es/components/chrome/ChromePointerCircle.js");










var Chrome = function Chrome(_ref) {
  var width = _ref.width,
      onChange = _ref.onChange,
      disableAlpha = _ref.disableAlpha,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hsv = _ref.hsv,
      hex = _ref.hex,
      renderers = _ref.renderers,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      defaultView = _ref.defaultView;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default()({
    'default': {
      picker: {
        width: width,
        background: '#fff',
        borderRadius: '2px',
        boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
        boxSizing: 'initial',
        fontFamily: 'Menlo'
      },
      saturation: {
        width: '100%',
        paddingBottom: '55%',
        position: 'relative',
        borderRadius: '2px 2px 0 0',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '2px 2px 0 0'
      },
      body: {
        padding: '16px 16px 12px'
      },
      controls: {
        display: 'flex'
      },
      color: {
        width: '32px'
      },
      swatch: {
        marginTop: '6px',
        width: '16px',
        height: '16px',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden'
      },
      active: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
        background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + rgb.a + ')',
        zIndex: '2'
      },
      toggles: {
        flex: '1'
      },
      hue: {
        height: '10px',
        position: 'relative',
        marginBottom: '8px'
      },
      Hue: {
        radius: '2px'
      },
      alpha: {
        height: '10px',
        position: 'relative'
      },
      Alpha: {
        radius: '2px'
      }
    },
    'disableAlpha': {
      color: {
        width: '22px'
      },
      alpha: {
        display: 'none'
      },
      hue: {
        marginBottom: '0px'
      },
      swatch: {
        width: '10px',
        height: '10px',
        marginTop: '0px'
      }
    }
  }, passedStyles), { disableAlpha: disableAlpha });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.picker, className: 'chrome-picker ' + className },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.saturation },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Saturation, {
        style: styles.Saturation,
        hsl: hsl,
        hsv: hsv,
        pointer: _ChromePointerCircle__WEBPACK_IMPORTED_MODULE_6__["default"],
        onChange: onChange
      })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.body },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.controls, className: 'flexbox-fix' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.color },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.swatch },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.active }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Checkboard, { renderers: renderers })
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.toggles },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.hue },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Hue, {
              style: styles.Hue,
              hsl: hsl,
              pointer: _ChromePointer__WEBPACK_IMPORTED_MODULE_5__["default"],
              onChange: onChange
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.alpha },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Alpha, {
              style: styles.Alpha,
              rgb: rgb,
              hsl: hsl,
              pointer: _ChromePointer__WEBPACK_IMPORTED_MODULE_5__["default"],
              renderers: renderers,
              onChange: onChange
            })
          )
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ChromeFields__WEBPACK_IMPORTED_MODULE_4__["default"], {
        rgb: rgb,
        hsl: hsl,
        hex: hex,
        view: defaultView,
        onChange: onChange,
        disableAlpha: disableAlpha
      })
    )
  );
};

Chrome.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number)]),
  disableAlpha: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  styles: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  defaultView: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["hex", "rgb", "hsl"])
};

Chrome.defaultProps = {
  width: 225,
  disableAlpha: false,
  styles: {}
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_common__WEBPACK_IMPORTED_MODULE_3__.ColorWrap)(Chrome));

/***/ }),

/***/ "./node_modules/react-color/es/components/chrome/ChromeFields.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-color/es/components/chrome/ChromeFields.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChromeFields": function() { return /* binding */ ChromeFields; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var _helpers_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/es/helpers/color.js");
/* harmony import */ var lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/isUndefined */ "./node_modules/lodash/isUndefined.js");
/* harmony import */ var lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");
/* harmony import */ var _icons_material_UnfoldMoreHorizontalIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @icons/material/UnfoldMoreHorizontalIcon */ "./node_modules/@icons/material/UnfoldMoreHorizontalIcon.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/no-did-mount-set-state, no-param-reassign */









var ChromeFields = function (_React$Component) {
  _inherits(ChromeFields, _React$Component);

  function ChromeFields(props) {
    _classCallCheck(this, ChromeFields);

    var _this = _possibleConstructorReturn(this, (ChromeFields.__proto__ || Object.getPrototypeOf(ChromeFields)).call(this));

    _this.toggleViews = function () {
      if (_this.state.view === 'hex') {
        _this.setState({ view: 'rgb' });
      } else if (_this.state.view === 'rgb') {
        _this.setState({ view: 'hsl' });
      } else if (_this.state.view === 'hsl') {
        if (_this.props.hsl.a === 1) {
          _this.setState({ view: 'hex' });
        } else {
          _this.setState({ view: 'rgb' });
        }
      }
    };

    _this.handleChange = function (data, e) {
      if (data.hex) {
        _helpers_color__WEBPACK_IMPORTED_MODULE_2__.isValidHex(data.hex) && _this.props.onChange({
          hex: data.hex,
          source: 'hex'
        }, e);
      } else if (data.r || data.g || data.b) {
        _this.props.onChange({
          r: data.r || _this.props.rgb.r,
          g: data.g || _this.props.rgb.g,
          b: data.b || _this.props.rgb.b,
          source: 'rgb'
        }, e);
      } else if (data.a) {
        if (data.a < 0) {
          data.a = 0;
        } else if (data.a > 1) {
          data.a = 1;
        }

        _this.props.onChange({
          h: _this.props.hsl.h,
          s: _this.props.hsl.s,
          l: _this.props.hsl.l,
          a: Math.round(data.a * 100) / 100,
          source: 'rgb'
        }, e);
      } else if (data.h || data.s || data.l) {
        // Remove any occurances of '%'.
        if (typeof data.s === 'string' && data.s.includes('%')) {
          data.s = data.s.replace('%', '');
        }
        if (typeof data.l === 'string' && data.l.includes('%')) {
          data.l = data.l.replace('%', '');
        }

        // We store HSL as a unit interval so we need to override the 1 input to 0.01
        if (data.s == 1) {
          data.s = 0.01;
        } else if (data.l == 1) {
          data.l = 0.01;
        }

        _this.props.onChange({
          h: data.h || _this.props.hsl.h,
          s: Number(!lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(data.s) ? data.s : _this.props.hsl.s),
          l: Number(!lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(data.l) ? data.l : _this.props.hsl.l),
          source: 'hsl'
        }, e);
      }
    };

    _this.showHighlight = function (e) {
      e.currentTarget.style.background = '#eee';
    };

    _this.hideHighlight = function (e) {
      e.currentTarget.style.background = 'transparent';
    };

    if (props.hsl.a !== 1 && props.view === "hex") {
      _this.state = {
        view: "rgb"
      };
    } else {
      _this.state = {
        view: props.view
      };
    }
    return _this;
  }

  _createClass(ChromeFields, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
        'default': {
          wrap: {
            paddingTop: '16px',
            display: 'flex'
          },
          fields: {
            flex: '1',
            display: 'flex',
            marginLeft: '-6px'
          },
          field: {
            paddingLeft: '6px',
            width: '100%'
          },
          alpha: {
            paddingLeft: '6px',
            width: '100%'
          },
          toggle: {
            width: '32px',
            textAlign: 'right',
            position: 'relative'
          },
          icon: {
            marginRight: '-4px',
            marginTop: '12px',
            cursor: 'pointer',
            position: 'relative'
          },
          iconHighlight: {
            position: 'absolute',
            width: '24px',
            height: '28px',
            background: '#eee',
            borderRadius: '4px',
            top: '10px',
            left: '12px',
            display: 'none'
          },
          input: {
            fontSize: '11px',
            color: '#333',
            width: '100%',
            borderRadius: '2px',
            border: 'none',
            boxShadow: 'inset 0 0 0 1px #dadada',
            height: '21px',
            textAlign: 'center'
          },
          label: {
            textTransform: 'uppercase',
            fontSize: '11px',
            lineHeight: '11px',
            color: '#969696',
            textAlign: 'center',
            display: 'block',
            marginTop: '12px'
          },
          svg: {
            fill: '#333',
            width: '24px',
            height: '24px',
            border: '1px transparent solid',
            borderRadius: '5px'
          }
        },
        'disableAlpha': {
          alpha: {
            display: 'none'
          }
        }
      }, this.props, this.state);

      var fields = void 0;
      if (this.state.view === 'hex') {
        fields = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.field },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_4__.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'hex', value: this.props.hex,
              onChange: this.handleChange
            })
          )
        );
      } else if (this.state.view === 'rgb') {
        fields = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.field },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_4__.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'r',
              value: this.props.rgb.r,
              onChange: this.handleChange
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.field },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_4__.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'g',
              value: this.props.rgb.g,
              onChange: this.handleChange
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.field },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_4__.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'b',
              value: this.props.rgb.b,
              onChange: this.handleChange
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.alpha },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_4__.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'a',
              value: this.props.rgb.a,
              arrowOffset: 0.01,
              onChange: this.handleChange
            })
          )
        );
      } else if (this.state.view === 'hsl') {
        fields = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.field },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_4__.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'h',
              value: Math.round(this.props.hsl.h),
              onChange: this.handleChange
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.field },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_4__.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 's',
              value: Math.round(this.props.hsl.s * 100) + '%',
              onChange: this.handleChange
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.field },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_4__.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'l',
              value: Math.round(this.props.hsl.l * 100) + '%',
              onChange: this.handleChange
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.alpha },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_4__.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'a',
              value: this.props.hsl.a,
              arrowOffset: 0.01,
              onChange: this.handleChange
            })
          )
        );
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.wrap, className: 'flexbox-fix' },
        fields,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.toggle },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.icon, onClick: this.toggleViews, ref: function ref(icon) {
                return _this2.icon = icon;
              } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_material_UnfoldMoreHorizontalIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
              style: styles.svg,
              onMouseOver: this.showHighlight,
              onMouseEnter: this.showHighlight,
              onMouseOut: this.hideHighlight
            })
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, state) {
      if (nextProps.hsl.a !== 1 && state.view === 'hex') {
        return { view: 'rgb' };
      }
      return null;
    }
  }]);

  return ChromeFields;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

ChromeFields.defaultProps = {
  view: "hex"
};

/* harmony default export */ __webpack_exports__["default"] = (ChromeFields);

/***/ }),

/***/ "./node_modules/react-color/es/components/chrome/ChromePointer.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-color/es/components/chrome/ChromePointer.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChromePointer": function() { return /* binding */ ChromePointer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");



var ChromePointer = function ChromePointer() {
  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        transform: 'translate(-6px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    }
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.picker });
};

/* harmony default export */ __webpack_exports__["default"] = (ChromePointer);

/***/ }),

/***/ "./node_modules/react-color/es/components/chrome/ChromePointerCircle.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-color/es/components/chrome/ChromePointerCircle.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChromePointerCircle": function() { return /* binding */ ChromePointerCircle; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");



var ChromePointerCircle = function ChromePointerCircle() {
  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fff',
        transform: 'translate(-6px, -6px)'
      }
    }
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.picker });
};

/* harmony default export */ __webpack_exports__["default"] = (ChromePointerCircle);

/***/ }),

/***/ "./node_modules/react-color/es/components/circle/Circle.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-color/es/components/circle/Circle.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": function() { return /* binding */ Circle; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-colors */ "./node_modules/material-colors/dist/colors.es2015.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");
/* harmony import */ var _CircleSwatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CircleSwatch */ "./node_modules/react-color/es/components/circle/CircleSwatch.js");










var Circle = function Circle(_ref) {
  var width = _ref.width,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      colors = _ref.colors,
      hex = _ref.hex,
      circleSize = _ref.circleSize,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      circleSpacing = _ref.circleSpacing,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])(lodash_es_merge__WEBPACK_IMPORTED_MODULE_3___default()({
    'default': {
      card: {
        width: width,
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: -circleSpacing,
        marginBottom: -circleSpacing
      }
    }
  }, passedStyles));

  var handleChange = function handleChange(hexCode, e) {
    return onChange({ hex: hexCode, source: 'hex' }, e);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.card, className: 'circle-picker ' + className },
    lodash_es_map__WEBPACK_IMPORTED_MODULE_2___default()(colors, function (c) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CircleSwatch__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: c,
        color: c,
        onClick: handleChange,
        onSwatchHover: onSwatchHover,
        active: hex === c.toLowerCase(),
        circleSize: circleSize,
        circleSpacing: circleSpacing
      });
    })
  );
};

Circle.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number)]),
  circleSize: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),
  circleSpacing: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),
  styles: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)
};

Circle.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [material_colors__WEBPACK_IMPORTED_MODULE_4__.red[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.pink[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.purple[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.deepPurple[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.indigo[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.blue[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.lightBlue[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.cyan[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.teal[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.green[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.lightGreen[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.lime[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.yellow[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.amber[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.orange[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.deepOrange[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.brown[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.blueGrey[500]],
  styles: {}
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_common__WEBPACK_IMPORTED_MODULE_5__.ColorWrap)(Circle));

/***/ }),

/***/ "./node_modules/react-color/es/components/circle/CircleSwatch.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-color/es/components/circle/CircleSwatch.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircleSwatch": function() { return /* binding */ CircleSwatch; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");





var CircleSwatch = function CircleSwatch(_ref) {
  var color = _ref.color,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover,
      hover = _ref.hover,
      active = _ref.active,
      circleSize = _ref.circleSize,
      circleSpacing = _ref.circleSpacing;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      swatch: {
        width: circleSize,
        height: circleSize,
        marginRight: circleSpacing,
        marginBottom: circleSpacing,
        transform: 'scale(1)',
        transition: '100ms transform ease'
      },
      Swatch: {
        borderRadius: '50%',
        background: 'transparent',
        boxShadow: 'inset 0 0 0 ' + (circleSize / 2 + 1) + 'px ' + color,
        transition: '100ms box-shadow ease'
      }
    },
    'hover': {
      swatch: {
        transform: 'scale(1.2)'
      }
    },
    'active': {
      Swatch: {
        boxShadow: 'inset 0 0 0 3px ' + color
      }
    }
  }, { hover: hover, active: active });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.swatch },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_2__.Swatch, {
      style: styles.Swatch,
      color: color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: { boxShadow: styles.Swatch.boxShadow + ', 0 0 5px ' + color }
    })
  );
};

CircleSwatch.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
};

/* harmony default export */ __webpack_exports__["default"] = ((0,reactcss__WEBPACK_IMPORTED_MODULE_1__.handleHover)(CircleSwatch));

/***/ }),

/***/ "./node_modules/react-color/es/components/common/Alpha.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-color/es/components/common/Alpha.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alpha": function() { return /* binding */ Alpha; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var _helpers_alpha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/alpha */ "./node_modules/react-color/es/helpers/alpha.js");
/* harmony import */ var _Checkboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Checkboard */ "./node_modules/react-color/es/components/common/Checkboard.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Alpha = function (_ref) {
  _inherits(Alpha, _ref);

  function Alpha() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Alpha);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Alpha.__proto__ || Object.getPrototypeOf(Alpha)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e) {
      var change = _helpers_alpha__WEBPACK_IMPORTED_MODULE_2__.calculateChange(e, _this.props.hsl, _this.props.direction, _this.props.a, _this.container);
      change && typeof _this.props.onChange === 'function' && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleChange);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alpha, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rgb = this.props.rgb;
      var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
        'default': {
          alpha: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius
          },
          checkboard: {
            absolute: '0px 0px 0px 0px',
            overflow: 'hidden',
            borderRadius: this.props.radius
          },
          gradient: {
            absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to right, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)',
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          container: {
            position: 'relative',
            height: '100%',
            margin: '0 3px'
          },
          pointer: {
            position: 'absolute',
            left: rgb.a * 100 + '%'
          },
          slider: {
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            marginTop: '1px',
            transform: 'translateX(-2px)'
          }
        },
        'vertical': {
          gradient: {
            background: 'linear-gradient(to bottom, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)'
          },
          pointer: {
            left: 0,
            top: rgb.a * 100 + '%'
          }
        },
        'overwrite': _extends({}, this.props.style)
      }, {
        vertical: this.props.direction === 'vertical',
        overwrite: true
      });

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.alpha },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.checkboard },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Checkboard__WEBPACK_IMPORTED_MODULE_3__["default"], { renderers: this.props.renderers })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.gradient }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          {
            style: styles.container,
            ref: function ref(container) {
              return _this2.container = container;
            },
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleChange,
            onTouchStart: this.handleChange
          },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(this.props.pointer, this.props) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.slider })
          )
        )
      );
    }
  }]);

  return Alpha;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent || react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (Alpha);

/***/ }),

/***/ "./node_modules/react-color/es/components/common/Checkboard.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-color/es/components/common/Checkboard.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkboard": function() { return /* binding */ Checkboard; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var _helpers_checkboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/checkboard */ "./node_modules/react-color/es/helpers/checkboard.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Checkboard = function Checkboard(_ref) {
  var white = _ref.white,
      grey = _ref.grey,
      size = _ref.size,
      renderers = _ref.renderers,
      borderRadius = _ref.borderRadius,
      boxShadow = _ref.boxShadow,
      children = _ref.children;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      grid: {
        borderRadius: borderRadius,
        boxShadow: boxShadow,
        absolute: '0px 0px 0px 0px',
        background: 'url(' + _helpers_checkboard__WEBPACK_IMPORTED_MODULE_2__.get(white, grey, size, renderers.canvas) + ') center left'
      }
    }
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children) ? react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(children, _extends({}, children.props, { style: _extends({}, children.props.style, styles.grid) })) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.grid });
};

Checkboard.defaultProps = {
  size: 8,
  white: 'transparent',
  grey: 'rgba(0,0,0,.08)',
  renderers: {}
};

/* harmony default export */ __webpack_exports__["default"] = (Checkboard);

/***/ }),

/***/ "./node_modules/react-color/es/components/common/ColorWrap.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-color/es/components/common/ColorWrap.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorWrap": function() { return /* binding */ ColorWrap; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/es/helpers/color.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ColorWrap = function ColorWrap(Picker) {
  var ColorPicker = function (_ref) {
    _inherits(ColorPicker, _ref);

    function ColorPicker(props) {
      _classCallCheck(this, ColorPicker);

      var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));

      _this.handleChange = function (data, event) {
        var isValidColor = _helpers_color__WEBPACK_IMPORTED_MODULE_2__.simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = _helpers_color__WEBPACK_IMPORTED_MODULE_2__.toState(data, data.h || _this.state.oldHue);
          _this.setState(colors);
          _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors, event);
          _this.props.onChange && _this.props.onChange(colors, event);
        }
      };

      _this.handleSwatchHover = function (data, event) {
        var isValidColor = _helpers_color__WEBPACK_IMPORTED_MODULE_2__.simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = _helpers_color__WEBPACK_IMPORTED_MODULE_2__.toState(data, data.h || _this.state.oldHue);
          _this.props.onSwatchHover && _this.props.onSwatchHover(colors, event);
        }
      };

      _this.state = _extends({}, _helpers_color__WEBPACK_IMPORTED_MODULE_2__.toState(props.color, 0));

      _this.debounce = lodash_es_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function (fn, data, event) {
        fn(data, event);
      }, 100);
      return _this;
    }

    _createClass(ColorPicker, [{
      key: 'render',
      value: function render() {
        var optionalEvents = {};
        if (this.props.onSwatchHover) {
          optionalEvents.onSwatchHover = this.handleSwatchHover;
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Picker, _extends({}, this.props, this.state, {
          onChange: this.handleChange
        }, optionalEvents));
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, state) {
        return _extends({}, _helpers_color__WEBPACK_IMPORTED_MODULE_2__.toState(nextProps.color, state.oldHue));
      }
    }]);

    return ColorPicker;
  }(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent || react__WEBPACK_IMPORTED_MODULE_0__.Component);

  ColorPicker.propTypes = _extends({}, Picker.propTypes);

  ColorPicker.defaultProps = _extends({}, Picker.defaultProps, {
    color: {
      h: 250,
      s: 0.50,
      l: 0.20,
      a: 1
    }
  });

  return ColorPicker;
};

/* harmony default export */ __webpack_exports__["default"] = (ColorWrap);

/***/ }),

/***/ "./node_modules/react-color/es/components/common/EditableInput.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-color/es/components/common/EditableInput.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditableInput": function() { return /* binding */ EditableInput; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var DEFAULT_ARROW_OFFSET = 1;

var UP_KEY_CODE = 38;
var DOWN_KEY_CODE = 40;
var VALID_KEY_CODES = [UP_KEY_CODE, DOWN_KEY_CODE];
var isValidKeyCode = function isValidKeyCode(keyCode) {
  return VALID_KEY_CODES.indexOf(keyCode) > -1;
};
var getNumberValue = function getNumberValue(value) {
  return Number(String(value).replace(/%/g, ''));
};

var idCounter = 1;

var EditableInput = function (_ref) {
  _inherits(EditableInput, _ref);

  function EditableInput(props) {
    _classCallCheck(this, EditableInput);

    var _this = _possibleConstructorReturn(this, (EditableInput.__proto__ || Object.getPrototypeOf(EditableInput)).call(this));

    _this.handleBlur = function () {
      if (_this.state.blurValue) {
        _this.setState({ value: _this.state.blurValue, blurValue: null });
      }
    };

    _this.handleChange = function (e) {
      _this.setUpdatedValue(e.target.value, e);
    };

    _this.handleKeyDown = function (e) {
      // In case `e.target.value` is a percentage remove the `%` character
      // and update accordingly with a percentage
      // https://github.com/casesandberg/react-color/issues/383
      var value = getNumberValue(e.target.value);
      if (!isNaN(value) && isValidKeyCode(e.keyCode)) {
        var offset = _this.getArrowOffset();
        var updatedValue = e.keyCode === UP_KEY_CODE ? value + offset : value - offset;

        _this.setUpdatedValue(updatedValue, e);
      }
    };

    _this.handleDrag = function (e) {
      if (_this.props.dragLabel) {
        var newValue = Math.round(_this.props.value + e.movementX);
        if (newValue >= 0 && newValue <= _this.props.dragMax) {
          _this.props.onChange && _this.props.onChange(_this.getValueObjectWithLabel(newValue), e);
        }
      }
    };

    _this.handleMouseDown = function (e) {
      if (_this.props.dragLabel) {
        e.preventDefault();
        _this.handleDrag(e);
        window.addEventListener('mousemove', _this.handleDrag);
        window.addEventListener('mouseup', _this.handleMouseUp);
      }
    };

    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };

    _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleDrag);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    };

    _this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase()
    };

    _this.inputId = 'rc-editable-input-' + idCounter++;
    return _this;
  }

  _createClass(EditableInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.value !== this.state.value && (prevProps.value !== this.props.value || prevState.value !== this.state.value)) {
        if (this.input === document.activeElement) {
          this.setState({ blurValue: String(this.props.value).toUpperCase() });
        } else {
          this.setState({ value: String(this.props.value).toUpperCase(), blurValue: !this.state.blurValue && String(this.props.value).toUpperCase() });
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'getValueObjectWithLabel',
    value: function getValueObjectWithLabel(value) {
      return _defineProperty({}, this.props.label, value);
    }
  }, {
    key: 'getArrowOffset',
    value: function getArrowOffset() {
      return this.props.arrowOffset || DEFAULT_ARROW_OFFSET;
    }
  }, {
    key: 'setUpdatedValue',
    value: function setUpdatedValue(value, e) {
      var onChangeValue = this.props.label ? this.getValueObjectWithLabel(value) : value;
      this.props.onChange && this.props.onChange(onChangeValue, e);

      this.setState({ value: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
        'default': {
          wrap: {
            position: 'relative'
          }
        },
        'user-override': {
          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
          input: this.props.style && this.props.style.input ? this.props.style.input : {},
          label: this.props.style && this.props.style.label ? this.props.style.label : {}
        },
        'dragLabel-true': {
          label: {
            cursor: 'ew-resize'
          }
        }
      }, {
        'user-override': true
      }, this.props);

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.wrap },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement('input', {
          id: this.inputId,
          style: styles.input,
          ref: function ref(input) {
            return _this2.input = input;
          },
          value: this.state.value,
          onKeyDown: this.handleKeyDown,
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          placeholder: this.props.placeholder,
          spellCheck: 'false'
        }),
        this.props.label && !this.props.hideLabel ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'label',
          {
            htmlFor: this.inputId,
            style: styles.label,
            onMouseDown: this.handleMouseDown
          },
          this.props.label
        ) : null
      );
    }
  }]);

  return EditableInput;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent || react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (EditableInput);

/***/ }),

/***/ "./node_modules/react-color/es/components/common/Hue.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-color/es/components/common/Hue.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hue": function() { return /* binding */ Hue; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var _helpers_hue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/hue */ "./node_modules/react-color/es/helpers/hue.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Hue = function (_ref) {
  _inherits(Hue, _ref);

  function Hue() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Hue);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Hue.__proto__ || Object.getPrototypeOf(Hue)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e) {
      var change = _helpers_hue__WEBPACK_IMPORTED_MODULE_2__.calculateChange(e, _this.props.direction, _this.props.hsl, _this.container);
      change && typeof _this.props.onChange === 'function' && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Hue, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$direction = this.props.direction,
          direction = _props$direction === undefined ? 'horizontal' : _props$direction;


      var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
        'default': {
          hue: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius,
            boxShadow: this.props.shadow
          },
          container: {
            padding: '0 2px',
            position: 'relative',
            height: '100%',
            borderRadius: this.props.radius
          },
          pointer: {
            position: 'absolute',
            left: this.props.hsl.h * 100 / 360 + '%'
          },
          slider: {
            marginTop: '1px',
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            transform: 'translateX(-2px)'
          }
        },
        'vertical': {
          pointer: {
            left: '0px',
            top: -(this.props.hsl.h * 100 / 360) + 100 + '%'
          }
        }
      }, { vertical: direction === 'vertical' });

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.hue },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          {
            className: 'hue-' + direction,
            style: styles.container,
            ref: function ref(container) {
              return _this2.container = container;
            },
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleChange,
            onTouchStart: this.handleChange
          },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'style',
            null,
            '\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          '
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(this.props.pointer, this.props) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.slider })
          )
        )
      );
    }
  }]);

  return Hue;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent || react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hue);

/***/ }),

/***/ "./node_modules/react-color/es/components/common/Raised.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-color/es/components/common/Raised.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Raised": function() { return /* binding */ Raised; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__);





var Raised = function Raised(_ref) {
  var zDepth = _ref.zDepth,
      radius = _ref.radius,
      background = _ref.background,
      children = _ref.children,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default()({
    'default': {
      wrap: {
        position: 'relative',
        display: 'inline-block'
      },
      content: {
        position: 'relative'
      },
      bg: {
        absolute: '0px 0px 0px 0px',
        boxShadow: '0 ' + zDepth + 'px ' + zDepth * 4 + 'px rgba(0,0,0,.24)',
        borderRadius: radius,
        background: background
      }
    },
    'zDepth-0': {
      bg: {
        boxShadow: 'none'
      }
    },

    'zDepth-1': {
      bg: {
        boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)'
      }
    },
    'zDepth-2': {
      bg: {
        boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)'
      }
    },
    'zDepth-3': {
      bg: {
        boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)'
      }
    },
    'zDepth-4': {
      bg: {
        boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)'
      }
    },
    'zDepth-5': {
      bg: {
        boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)'
      }
    },
    'square': {
      bg: {
        borderRadius: '0'
      }
    },
    'circle': {
      bg: {
        borderRadius: '50%'
      }
    }
  }, passedStyles), { 'zDepth-1': zDepth === 1 });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.wrap },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.bg }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.content },
      children
    )
  );
};

Raised.propTypes = {
  background: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  zDepth: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf([0, 1, 2, 3, 4, 5]),
  radius: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  styles: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};

Raised.defaultProps = {
  background: '#fff',
  zDepth: 1,
  radius: 2,
  styles: {}
};

/* harmony default export */ __webpack_exports__["default"] = (Raised);

/***/ }),

/***/ "./node_modules/react-color/es/components/common/Saturation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-color/es/components/common/Saturation.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Saturation": function() { return /* binding */ Saturation; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_es_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_throttle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_saturation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/saturation */ "./node_modules/react-color/es/helpers/saturation.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Saturation = function (_ref) {
  _inherits(Saturation, _ref);

  function Saturation(props) {
    _classCallCheck(this, Saturation);

    var _this = _possibleConstructorReturn(this, (Saturation.__proto__ || Object.getPrototypeOf(Saturation)).call(this, props));

    _this.handleChange = function (e) {
      typeof _this.props.onChange === 'function' && _this.throttle(_this.props.onChange, _helpers_saturation__WEBPACK_IMPORTED_MODULE_3__.calculateChange(e, _this.props.hsl, _this.container), e);
    };

    _this.handleMouseDown = function (e) {
      _this.handleChange(e);
      var renderWindow = _this.getContainerRenderWindow();
      renderWindow.addEventListener('mousemove', _this.handleChange);
      renderWindow.addEventListener('mouseup', _this.handleMouseUp);
    };

    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };

    _this.throttle = lodash_es_throttle__WEBPACK_IMPORTED_MODULE_2___default()(function (fn, data, e) {
      fn(data, e);
    }, 50);
    return _this;
  }

  _createClass(Saturation, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.throttle.cancel();
      this.unbindEventListeners();
    }
  }, {
    key: 'getContainerRenderWindow',
    value: function getContainerRenderWindow() {
      var container = this.container;

      var renderWindow = window;
      while (!renderWindow.document.contains(container) && renderWindow.parent !== renderWindow) {
        renderWindow = renderWindow.parent;
      }
      return renderWindow;
    }
  }, {
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      var renderWindow = this.getContainerRenderWindow();
      renderWindow.removeEventListener('mousemove', this.handleChange);
      renderWindow.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _ref2 = this.props.style || {},
          color = _ref2.color,
          white = _ref2.white,
          black = _ref2.black,
          pointer = _ref2.pointer,
          circle = _ref2.circle;

      var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
        'default': {
          color: {
            absolute: '0px 0px 0px 0px',
            background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
            borderRadius: this.props.radius
          },
          white: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius
          },
          black: {
            absolute: '0px 0px 0px 0px',
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          pointer: {
            position: 'absolute',
            top: -(this.props.hsv.v * 100) + 100 + '%',
            left: this.props.hsv.s * 100 + '%',
            cursor: 'default'
          },
          circle: {
            width: '4px',
            height: '4px',
            boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)',
            borderRadius: '50%',
            cursor: 'hand',
            transform: 'translate(-2px, -2px)'
          }
        },
        'custom': {
          color: color,
          white: white,
          black: black,
          pointer: pointer,
          circle: circle
        }
      }, { 'custom': !!this.props.style });

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        {
          style: styles.color,
          ref: function ref(container) {
            return _this2.container = container;
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange
        },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'style',
          null,
          '\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        '
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.white, className: 'saturation-white' },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.black, className: 'saturation-black' }),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(this.props.pointer, this.props) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.circle })
          )
        )
      );
    }
  }]);

  return Saturation;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent || react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (Saturation);

/***/ }),

/***/ "./node_modules/react-color/es/components/common/Swatch.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-color/es/components/common/Swatch.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Swatch": function() { return /* binding */ Swatch; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var _helpers_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/interaction */ "./node_modules/react-color/es/helpers/interaction.js");
/* harmony import */ var _Checkboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Checkboard */ "./node_modules/react-color/es/components/common/Checkboard.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







var ENTER = 13;

var Swatch = function Swatch(_ref) {
  var color = _ref.color,
      style = _ref.style,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onHover = _ref.onHover,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? color : _ref$title,
      children = _ref.children,
      focus = _ref.focus,
      _ref$focusStyle = _ref.focusStyle,
      focusStyle = _ref$focusStyle === undefined ? {} : _ref$focusStyle;

  var transparent = color === 'transparent';
  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    default: {
      swatch: _extends({
        background: color,
        height: '100%',
        width: '100%',
        cursor: 'pointer',
        position: 'relative',
        outline: 'none'
      }, style, focus ? focusStyle : {})
    }
  });

  var handleClick = function handleClick(e) {
    return onClick(color, e);
  };
  var handleKeyDown = function handleKeyDown(e) {
    return e.keyCode === ENTER && onClick(color, e);
  };
  var handleHover = function handleHover(e) {
    return onHover(color, e);
  };

  var optionalEvents = {};
  if (onHover) {
    optionalEvents.onMouseOver = handleHover;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    _extends({
      style: styles.swatch,
      onClick: handleClick,
      title: title,
      tabIndex: 0,
      onKeyDown: handleKeyDown
    }, optionalEvents),
    children,
    transparent && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Checkboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      borderRadius: styles.swatch.borderRadius,
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_helpers_interaction__WEBPACK_IMPORTED_MODULE_2__.handleFocus)(Swatch));

/***/ }),

/***/ "./node_modules/react-color/es/components/common/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-color/es/components/common/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alpha": function() { return /* reexport safe */ _Alpha__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "Checkboard": function() { return /* reexport safe */ _Checkboard__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "ColorWrap": function() { return /* reexport safe */ _ColorWrap__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "EditableInput": function() { return /* reexport safe */ _EditableInput__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "Hue": function() { return /* reexport safe */ _Hue__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "Raised": function() { return /* reexport safe */ _Raised__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "Saturation": function() { return /* reexport safe */ _Saturation__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "Swatch": function() { return /* reexport safe */ _Swatch__WEBPACK_IMPORTED_MODULE_7__["default"]; }
/* harmony export */ });
/* harmony import */ var _Alpha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alpha */ "./node_modules/react-color/es/components/common/Alpha.js");
/* harmony import */ var _Checkboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkboard */ "./node_modules/react-color/es/components/common/Checkboard.js");
/* harmony import */ var _EditableInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditableInput */ "./node_modules/react-color/es/components/common/EditableInput.js");
/* harmony import */ var _Hue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hue */ "./node_modules/react-color/es/components/common/Hue.js");
/* harmony import */ var _Raised__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Raised */ "./node_modules/react-color/es/components/common/Raised.js");
/* harmony import */ var _Saturation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Saturation */ "./node_modules/react-color/es/components/common/Saturation.js");
/* harmony import */ var _ColorWrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ColorWrap */ "./node_modules/react-color/es/components/common/ColorWrap.js");
/* harmony import */ var _Swatch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Swatch */ "./node_modules/react-color/es/components/common/Swatch.js");









/***/ }),

/***/ "./node_modules/react-color/es/components/compact/Compact.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-color/es/components/compact/Compact.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Compact": function() { return /* binding */ Compact; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/es/helpers/color.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");
/* harmony import */ var _CompactColor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CompactColor */ "./node_modules/react-color/es/components/compact/CompactColor.js");
/* harmony import */ var _CompactFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CompactFields */ "./node_modules/react-color/es/components/compact/CompactFields.js");











var Compact = function Compact(_ref) {
  var onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      colors = _ref.colors,
      hex = _ref.hex,
      rgb = _ref.rgb,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])(lodash_es_merge__WEBPACK_IMPORTED_MODULE_3___default()({
    'default': {
      Compact: {
        background: '#f6f6f6',
        radius: '4px'
      },
      compact: {
        paddingTop: '5px',
        paddingLeft: '5px',
        boxSizing: 'initial',
        width: '240px'
      },
      clear: {
        clear: 'both'
      }
    }
  }, passedStyles));

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      _helpers_color__WEBPACK_IMPORTED_MODULE_4__.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else {
      onChange(data, e);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _common__WEBPACK_IMPORTED_MODULE_5__.Raised,
    { style: styles.Compact, styles: passedStyles },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.compact, className: 'compact-picker ' + className },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        null,
        lodash_es_map__WEBPACK_IMPORTED_MODULE_2___default()(colors, function (c) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompactColor__WEBPACK_IMPORTED_MODULE_6__["default"], {
            key: c,
            color: c,
            active: c.toLowerCase() === hex,
            onClick: handleChange,
            onSwatchHover: onSwatchHover
          });
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.clear })
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompactFields__WEBPACK_IMPORTED_MODULE_7__["default"], { hex: hex, rgb: rgb, onChange: handleChange })
    )
  );
};

Compact.propTypes = {
  colors: prop_types__WEBPACK_IMPORTED_MODULE_8___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)),
  styles: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)
};

Compact.defaultProps = {
  colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'],
  styles: {}
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_common__WEBPACK_IMPORTED_MODULE_5__.ColorWrap)(Compact));

/***/ }),

/***/ "./node_modules/react-color/es/components/compact/CompactColor.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-color/es/components/compact/CompactColor.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompactColor": function() { return /* binding */ CompactColor; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var _helpers_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/es/helpers/color.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");






var CompactColor = function CompactColor(_ref) {
  var color = _ref.color,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onSwatchHover = _ref.onSwatchHover,
      active = _ref.active;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      color: {
        background: color,
        width: '15px',
        height: '15px',
        float: 'left',
        marginRight: '5px',
        marginBottom: '5px',
        position: 'relative',
        cursor: 'pointer'
      },
      dot: {
        absolute: '5px 5px 5px 5px',
        background: _helpers_color__WEBPACK_IMPORTED_MODULE_2__.getContrastingColor(color),
        borderRadius: '50%',
        opacity: '0'
      }
    },
    'active': {
      dot: {
        opacity: '1'
      }
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd'
      },
      dot: {
        background: '#000'
      }
    },
    'transparent': {
      dot: {
        background: '#000'
      }
    }
  }, { active: active, 'color-#FFFFFF': color === '#FFFFFF', 'transparent': color === 'transparent' });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _common__WEBPACK_IMPORTED_MODULE_3__.Swatch,
    {
      style: styles.color,
      color: color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: { boxShadow: '0 0 4px ' + color }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.dot })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (CompactColor);

/***/ }),

/***/ "./node_modules/react-color/es/components/compact/CompactFields.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-color/es/components/compact/CompactFields.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompactFields": function() { return /* binding */ CompactFields; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");





var CompactFields = function CompactFields(_ref) {
  var hex = _ref.hex,
      rgb = _ref.rgb,
      onChange = _ref.onChange;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      fields: {
        display: 'flex',
        paddingBottom: '6px',
        paddingRight: '5px',
        position: 'relative'
      },
      active: {
        position: 'absolute',
        top: '6px',
        left: '5px',
        height: '9px',
        width: '9px',
        background: hex
      },
      HEXwrap: {
        flex: '6',
        position: 'relative'
      },
      HEXinput: {
        width: '80%',
        padding: '0px',
        paddingLeft: '20%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px'
      },
      HEXlabel: {
        display: 'none'
      },
      RGBwrap: {
        flex: '3',
        position: 'relative'
      },
      RGBinput: {
        width: '70%',
        padding: '0px',
        paddingLeft: '30%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px'
      },
      RGBlabel: {
        position: 'absolute',
        top: '3px',
        left: '0px',
        lineHeight: '16px',
        textTransform: 'uppercase',
        fontSize: '12px',
        color: '#999'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    } else {
      onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.fields, className: 'flexbox-fix' },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.active }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_2__.EditableInput, {
      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
      label: 'hex',
      value: hex,
      onChange: handleChange
    }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_2__.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'r',
      value: rgb.r,
      onChange: handleChange
    }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_2__.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'g',
      value: rgb.g,
      onChange: handleChange
    }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_2__.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'b',
      value: rgb.b,
      onChange: handleChange
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (CompactFields);

/***/ }),

/***/ "./node_modules/react-color/es/components/github/Github.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-color/es/components/github/Github.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Github": function() { return /* binding */ Github; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");
/* harmony import */ var _GithubSwatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GithubSwatch */ "./node_modules/react-color/es/components/github/GithubSwatch.js");









var Github = function Github(_ref) {
  var width = _ref.width,
      colors = _ref.colors,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      triangle = _ref.triangle,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])(lodash_es_merge__WEBPACK_IMPORTED_MODULE_3___default()({
    'default': {
      card: {
        width: width,
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.2)',
        boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
        borderRadius: '4px',
        position: 'relative',
        padding: '5px',
        display: 'flex',
        flexWrap: 'wrap'
      },
      triangle: {
        position: 'absolute',
        border: '7px solid transparent',
        borderBottomColor: '#fff'
      },
      triangleShadow: {
        position: 'absolute',
        border: '8px solid transparent',
        borderBottomColor: 'rgba(0,0,0,0.15)'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      },
      triangleShadow: {
        display: 'none'
      }
    },
    'top-left-triangle': {
      triangle: {
        top: '-14px',
        left: '10px'
      },
      triangleShadow: {
        top: '-16px',
        left: '9px'
      }
    },
    'top-right-triangle': {
      triangle: {
        top: '-14px',
        right: '10px'
      },
      triangleShadow: {
        top: '-16px',
        right: '9px'
      }
    },
    'bottom-left-triangle': {
      triangle: {
        top: '35px',
        left: '10px',
        transform: 'rotate(180deg)'
      },
      triangleShadow: {
        top: '37px',
        left: '9px',
        transform: 'rotate(180deg)'
      }
    },
    'bottom-right-triangle': {
      triangle: {
        top: '35px',
        right: '10px',
        transform: 'rotate(180deg)'
      },
      triangleShadow: {
        top: '37px',
        right: '9px',
        transform: 'rotate(180deg)'
      }
    }
  }, passedStyles), {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right',
    'bottom-left-triangle': triangle === 'bottom-left',
    'bottom-right-triangle': triangle === 'bottom-right'
  });

  var handleChange = function handleChange(hex, e) {
    return onChange({ hex: hex, source: 'hex' }, e);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.card, className: 'github-picker ' + className },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.triangleShadow }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.triangle }),
    lodash_es_map__WEBPACK_IMPORTED_MODULE_2___default()(colors, function (c) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GithubSwatch__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: c,
        key: c,
        onClick: handleChange,
        onSwatchHover: onSwatchHover
      });
    })
  );
};

Github.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)]),
  colors: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)),
  triangle: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(['hide', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
  styles: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};

Github.defaultProps = {
  width: 200,
  colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'],
  triangle: 'top-left',
  styles: {}
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_common__WEBPACK_IMPORTED_MODULE_4__.ColorWrap)(Github));

/***/ }),

/***/ "./node_modules/react-color/es/components/github/GithubSwatch.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-color/es/components/github/GithubSwatch.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubSwatch": function() { return /* binding */ GithubSwatch; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");





var GithubSwatch = function GithubSwatch(_ref) {
  var hover = _ref.hover,
      color = _ref.color,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover;

  var hoverSwatch = {
    position: 'relative',
    zIndex: '2',
    outline: '2px solid #fff',
    boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'
  };

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      swatch: {
        width: '25px',
        height: '25px',
        fontSize: '0'
      }
    },
    'hover': {
      swatch: hoverSwatch
    }
  }, { hover: hover });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.swatch },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_2__.Swatch, {
      color: color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: hoverSwatch
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = ((0,reactcss__WEBPACK_IMPORTED_MODULE_1__.handleHover)(GithubSwatch));

/***/ }),

/***/ "./node_modules/react-color/es/components/google/Google.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-color/es/components/google/Google.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Google": function() { return /* binding */ Google; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");
/* harmony import */ var _GooglePointerCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GooglePointerCircle */ "./node_modules/react-color/es/components/google/GooglePointerCircle.js");
/* harmony import */ var _GooglePointer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GooglePointer */ "./node_modules/react-color/es/components/google/GooglePointer.js");
/* harmony import */ var _GoogleFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GoogleFields */ "./node_modules/react-color/es/components/google/GoogleFields.js");










var Google = function Google(_ref) {
  var width = _ref.width,
      onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hsv = _ref.hsv,
      hex = _ref.hex,
      header = _ref.header,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default()({
    'default': {
      picker: {
        width: width,
        background: '#fff',
        border: '1px solid #dfe1e5',
        boxSizing: 'initial',
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: '8px 8px 0px 0px'
      },
      head: {
        height: '57px',
        width: '100%',
        paddingTop: '16px',
        paddingBottom: '16px',
        paddingLeft: '16px',
        fontSize: '20px',
        boxSizing: 'border-box',
        fontFamily: 'Roboto-Regular,HelveticaNeue,Arial,sans-serif'
      },
      saturation: {
        width: '70%',
        padding: '0px',
        position: 'relative',
        overflow: 'hidden'
      },
      swatch: {
        width: '30%',
        height: '228px',
        padding: '0px',
        background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 1)',
        position: 'relative',
        overflow: 'hidden'
      },
      body: {
        margin: 'auto',
        width: '95%'
      },
      controls: {
        display: 'flex',
        boxSizing: 'border-box',
        height: '52px',
        paddingTop: '22px'
      },
      color: {
        width: '32px'
      },
      hue: {
        height: '8px',
        position: 'relative',
        margin: '0px 16px 0px 16px',
        width: '100%'
      },
      Hue: {
        radius: '2px'
      }
    }
  }, passedStyles));
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.picker, className: 'google-picker ' + className },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.head },
      header
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.swatch }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.saturation },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Saturation, {
        hsl: hsl,
        hsv: hsv,
        pointer: _GooglePointerCircle__WEBPACK_IMPORTED_MODULE_4__["default"],
        onChange: onChange
      })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.body },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.controls, className: 'flexbox-fix' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.hue },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Hue, {
            style: styles.Hue,
            hsl: hsl,
            radius: '4px',
            pointer: _GooglePointer__WEBPACK_IMPORTED_MODULE_5__["default"],
            onChange: onChange
          })
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GoogleFields__WEBPACK_IMPORTED_MODULE_6__["default"], {
        rgb: rgb,
        hsl: hsl,
        hex: hex,
        hsv: hsv,
        onChange: onChange
      })
    )
  );
};

Google.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number)]),
  styles: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  header: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)

};

Google.defaultProps = {
  width: 652,
  styles: {},
  header: 'Color picker'
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_common__WEBPACK_IMPORTED_MODULE_3__.ColorWrap)(Google));

/***/ }),

/***/ "./node_modules/react-color/es/components/google/GoogleFields.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-color/es/components/google/GoogleFields.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleFields": function() { return /* binding */ GoogleFields; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var _helpers_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/es/helpers/color.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");





var GoogleFields = function GoogleFields(_ref) {
  var onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hex = _ref.hex,
      hsv = _ref.hsv;


  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      _helpers_color__WEBPACK_IMPORTED_MODULE_2__.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.rgb) {
      var values = data.rgb.split(',');
      _helpers_color__WEBPACK_IMPORTED_MODULE_2__.isvalidColorString(data.rgb, 'rgb') && onChange({
        r: values[0],
        g: values[1],
        b: values[2],
        a: 1,
        source: 'rgb'
      }, e);
    } else if (data.hsv) {
      var _values = data.hsv.split(',');
      if (_helpers_color__WEBPACK_IMPORTED_MODULE_2__.isvalidColorString(data.hsv, 'hsv')) {
        _values[2] = _values[2].replace('%', '');
        _values[1] = _values[1].replace('%', '');
        _values[0] = _values[0].replace('°', '');
        if (_values[1] == 1) {
          _values[1] = 0.01;
        } else if (_values[2] == 1) {
          _values[2] = 0.01;
        }
        onChange({
          h: Number(_values[0]),
          s: Number(_values[1]),
          v: Number(_values[2]),
          source: 'hsv'
        }, e);
      }
    } else if (data.hsl) {
      var _values2 = data.hsl.split(',');
      if (_helpers_color__WEBPACK_IMPORTED_MODULE_2__.isvalidColorString(data.hsl, 'hsl')) {
        _values2[2] = _values2[2].replace('%', '');
        _values2[1] = _values2[1].replace('%', '');
        _values2[0] = _values2[0].replace('°', '');
        if (hsvValue[1] == 1) {
          hsvValue[1] = 0.01;
        } else if (hsvValue[2] == 1) {
          hsvValue[2] = 0.01;
        }
        onChange({
          h: Number(_values2[0]),
          s: Number(_values2[1]),
          v: Number(_values2[2]),
          source: 'hsl'
        }, e);
      }
    }
  };

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      wrap: {
        display: 'flex',
        height: '100px',
        marginTop: '4px'
      },
      fields: {
        width: '100%'
      },
      column: {
        paddingTop: '10px',
        display: 'flex',
        justifyContent: 'space-between'
      },
      double: {
        padding: '0px 4.4px',
        boxSizing: 'border-box'
      },
      input: {
        width: '100%',
        height: '38px',
        boxSizing: 'border-box',
        padding: '4px 10% 3px',
        textAlign: 'center',
        border: '1px solid #dadce0',
        fontSize: '11px',
        textTransform: 'lowercase',
        borderRadius: '5px',
        outline: 'none',
        fontFamily: 'Roboto,Arial,sans-serif'
      },
      input2: {
        height: '38px',
        width: '100%',
        border: '1px solid #dadce0',
        boxSizing: 'border-box',
        fontSize: '11px',
        textTransform: 'lowercase',
        borderRadius: '5px',
        outline: 'none',
        paddingLeft: '10px',
        fontFamily: 'Roboto,Arial,sans-serif'
      },
      label: {
        textAlign: 'center',
        fontSize: '12px',
        background: '#fff',
        position: 'absolute',
        textTransform: 'uppercase',
        color: '#3c4043',
        width: '35px',
        top: '-6px',
        left: '0',
        right: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Roboto,Arial,sans-serif'
      },
      label2: {
        left: '10px',
        textAlign: 'center',
        fontSize: '12px',
        background: '#fff',
        position: 'absolute',
        textTransform: 'uppercase',
        color: '#3c4043',
        width: '32px',
        top: '-6px',
        fontFamily: 'Roboto,Arial,sans-serif'
      },
      single: {
        flexGrow: '1',
        margin: '0px 4.4px'
      }
    }
  });

  var rgbValue = rgb.r + ', ' + rgb.g + ', ' + rgb.b;
  var hslValue = Math.round(hsl.h) + '\xB0, ' + Math.round(hsl.s * 100) + '%, ' + Math.round(hsl.l * 100) + '%';
  var hsvValue = Math.round(hsv.h) + '\xB0, ' + Math.round(hsv.s * 100) + '%, ' + Math.round(hsv.v * 100) + '%';

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.wrap, className: 'flexbox-fix' },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.fields },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.double },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.EditableInput, {
          style: { input: styles.input, label: styles.label },
          label: 'hex',
          value: hex,
          onChange: handleChange
        })
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.column },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.single },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.EditableInput, {
            style: { input: styles.input2, label: styles.label2 },
            label: 'rgb',
            value: rgbValue,
            onChange: handleChange
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.single },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.EditableInput, {
            style: { input: styles.input2, label: styles.label2 },
            label: 'hsv',
            value: hsvValue,
            onChange: handleChange
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.single },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.EditableInput, {
            style: { input: styles.input2, label: styles.label2 },
            label: 'hsl',
            value: hslValue,
            onChange: handleChange
          })
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (GoogleFields);

/***/ }),

/***/ "./node_modules/react-color/es/components/google/GooglePointer.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-color/es/components/google/GooglePointer.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GooglePointer": function() { return /* binding */ GooglePointer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var GooglePointer = function GooglePointer(props) {
  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      picker: {
        width: '20px',
        height: '20px',
        borderRadius: '22px',
        transform: 'translate(-10px, -7px)',
        background: 'hsl(' + Math.round(props.hsl.h) + ', 100%, 50%)',
        border: '2px white solid'
      }
    }
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.picker });
};

GooglePointer.propTypes = {
  hsl: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    h: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    s: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    l: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    a: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
  })
};

GooglePointer.defaultProps = {
  hsl: { a: 1, h: 249.94, l: 0.2, s: 0.50 }
};

/* harmony default export */ __webpack_exports__["default"] = (GooglePointer);

/***/ }),

/***/ "./node_modules/react-color/es/components/google/GooglePointerCircle.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-color/es/components/google/GooglePointerCircle.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GooglePointerCircle": function() { return /* binding */ GooglePointerCircle; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var GooglePointerCircle = function GooglePointerCircle(props) {
  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      picker: {
        width: '20px',
        height: '20px',
        borderRadius: '22px',
        border: '2px #fff solid',
        transform: 'translate(-12px, -13px)',
        background: 'hsl(' + Math.round(props.hsl.h) + ', ' + Math.round(props.hsl.s * 100) + '%, ' + Math.round(props.hsl.l * 100) + '%)'
      }
    }
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.picker });
};

GooglePointerCircle.propTypes = {
  hsl: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    h: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    s: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    l: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    a: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
  })
};

GooglePointerCircle.defaultProps = {
  hsl: { a: 1, h: 249.94, l: 0.2, s: 0.50 }
};

/* harmony default export */ __webpack_exports__["default"] = (GooglePointerCircle);

/***/ }),

/***/ "./node_modules/react-color/es/components/hue/Hue.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-color/es/components/hue/Hue.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HuePicker": function() { return /* binding */ HuePicker; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");
/* harmony import */ var _HuePointer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HuePointer */ "./node_modules/react-color/es/components/hue/HuePointer.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };









var HuePicker = function HuePicker(_ref) {
  var width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      hsl = _ref.hsl,
      direction = _ref.direction,
      pointer = _ref.pointer,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default()({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      hue: {
        radius: '2px'
      }
    }
  }, passedStyles));

  // Overwrite to provide pure hue color
  var handleChange = function handleChange(data) {
    return onChange({ a: 1, h: data.h, l: 0.5, s: 1 });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.picker, className: 'hue-picker ' + className },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Hue, _extends({}, styles.hue, {
      hsl: hsl,
      pointer: pointer,
      onChange: handleChange,
      direction: direction
    }))
  );
};

HuePicker.propTypes = {
  styles: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
HuePicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
  pointer: _HuePointer__WEBPACK_IMPORTED_MODULE_4__["default"],
  styles: {}
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_common__WEBPACK_IMPORTED_MODULE_3__.ColorWrap)(HuePicker));

/***/ }),

/***/ "./node_modules/react-color/es/components/hue/HuePointer.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-color/es/components/hue/HuePointer.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderPointer": function() { return /* binding */ SliderPointer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");



var SliderPointer = function SliderPointer(_ref) {
  var direction = _ref.direction;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      picker: {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    },
    'vertical': {
      picker: {
        transform: 'translate(-3px, -9px)'
      }
    }
  }, { vertical: direction === 'vertical' });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.picker });
};

/* harmony default export */ __webpack_exports__["default"] = (SliderPointer);

/***/ }),

/***/ "./node_modules/react-color/es/components/material/Material.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-color/es/components/material/Material.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Material": function() { return /* binding */ Material; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/es/helpers/color.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");







var Material = function Material(_ref) {
  var onChange = _ref.onChange,
      hex = _ref.hex,
      rgb = _ref.rgb,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default()({
    'default': {
      material: {
        width: '98px',
        height: '98px',
        padding: '16px',
        fontFamily: 'Roboto'
      },
      HEXwrap: {
        position: 'relative'
      },
      HEXinput: {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        borderBottom: '2px solid ' + hex,
        outline: 'none',
        height: '30px'
      },
      HEXlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        textTransform: 'capitalize'
      },
      Hex: {
        style: {}
      },
      RGBwrap: {
        position: 'relative'
      },
      RGBinput: {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        borderBottom: '1px solid #eee',
        outline: 'none',
        height: '30px'
      },
      RGBlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        textTransform: 'capitalize'
      },
      split: {
        display: 'flex',
        marginRight: '-10px',
        paddingTop: '11px'
      },
      third: {
        flex: '1',
        paddingRight: '10px'
      }
    }
  }, passedStyles));

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      _helpers_color__WEBPACK_IMPORTED_MODULE_3__.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _common__WEBPACK_IMPORTED_MODULE_4__.Raised,
    { styles: passedStyles },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.material, className: 'material-picker ' + className },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_4__.EditableInput, {
        style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
        label: 'hex',
        value: hex,
        onChange: handleChange
      }),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.split, className: 'flexbox-fix' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.third },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_4__.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'r', value: rgb.r,
            onChange: handleChange
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.third },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_4__.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'g',
            value: rgb.g,
            onChange: handleChange
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.third },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_4__.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'b',
            value: rgb.b,
            onChange: handleChange
          })
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_common__WEBPACK_IMPORTED_MODULE_4__.ColorWrap)(Material));

/***/ }),

/***/ "./node_modules/react-color/es/components/photoshop/Photoshop.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-color/es/components/photoshop/Photoshop.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Photoshop": function() { return /* binding */ Photoshop; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");
/* harmony import */ var _PhotoshopFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoshopFields */ "./node_modules/react-color/es/components/photoshop/PhotoshopFields.js");
/* harmony import */ var _PhotoshopPointerCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PhotoshopPointerCircle */ "./node_modules/react-color/es/components/photoshop/PhotoshopPointerCircle.js");
/* harmony import */ var _PhotoshopPointer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PhotoshopPointer */ "./node_modules/react-color/es/components/photoshop/PhotoshopPointer.js");
/* harmony import */ var _PhotoshopButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PhotoshopButton */ "./node_modules/react-color/es/components/photoshop/PhotoshopButton.js");
/* harmony import */ var _PhotoshopPreviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PhotoshopPreviews */ "./node_modules/react-color/es/components/photoshop/PhotoshopPreviews.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var Photoshop = function (_React$Component) {
  _inherits(Photoshop, _React$Component);

  function Photoshop(props) {
    _classCallCheck(this, Photoshop);

    var _this = _possibleConstructorReturn(this, (Photoshop.__proto__ || Object.getPrototypeOf(Photoshop)).call(this));

    _this.state = {
      currentColor: props.hex
    };
    return _this;
  }

  _createClass(Photoshop, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$styles = _props.styles,
          passedStyles = _props$styles === undefined ? {} : _props$styles,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className;

      var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default()({
        'default': {
          picker: {
            background: '#DCDCDC',
            borderRadius: '4px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
            boxSizing: 'initial',
            width: '513px'
          },
          head: {
            backgroundImage: 'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
            borderBottom: '1px solid #B1B1B1',
            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
            height: '23px',
            lineHeight: '24px',
            borderRadius: '4px 4px 0 0',
            fontSize: '13px',
            color: '#4D4D4D',
            textAlign: 'center'
          },
          body: {
            padding: '15px 15px 0',
            display: 'flex'
          },
          saturation: {
            width: '256px',
            height: '256px',
            position: 'relative',
            border: '2px solid #B3B3B3',
            borderBottom: '2px solid #F0F0F0',
            overflow: 'hidden'
          },
          hue: {
            position: 'relative',
            height: '256px',
            width: '19px',
            marginLeft: '10px',
            border: '2px solid #B3B3B3',
            borderBottom: '2px solid #F0F0F0'
          },
          controls: {
            width: '180px',
            marginLeft: '10px'
          },
          top: {
            display: 'flex'
          },
          previews: {
            width: '60px'
          },
          actions: {
            flex: '1',
            marginLeft: '20px'
          }
        }
      }, passedStyles));

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.picker, className: 'photoshop-picker ' + className },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.head },
          this.props.header
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.body, className: 'flexbox-fix' },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.saturation },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Saturation, {
              hsl: this.props.hsl,
              hsv: this.props.hsv,
              pointer: _PhotoshopPointerCircle__WEBPACK_IMPORTED_MODULE_5__["default"],
              onChange: this.props.onChange
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.hue },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Hue, {
              direction: 'vertical',
              hsl: this.props.hsl,
              pointer: _PhotoshopPointer__WEBPACK_IMPORTED_MODULE_6__["default"],
              onChange: this.props.onChange
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { style: styles.controls },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'div',
              { style: styles.top, className: 'flexbox-fix' },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                'div',
                { style: styles.previews },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PhotoshopPreviews__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  rgb: this.props.rgb,
                  currentColor: this.state.currentColor
                })
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                'div',
                { style: styles.actions },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PhotoshopButton__WEBPACK_IMPORTED_MODULE_7__["default"], { label: 'OK', onClick: this.props.onAccept, active: true }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PhotoshopButton__WEBPACK_IMPORTED_MODULE_7__["default"], { label: 'Cancel', onClick: this.props.onCancel }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PhotoshopFields__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  onChange: this.props.onChange,
                  rgb: this.props.rgb,
                  hsv: this.props.hsv,
                  hex: this.props.hex
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Photoshop;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

Photoshop.propTypes = {
  header: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
  styles: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)
};

Photoshop.defaultProps = {
  header: 'Color Picker',
  styles: {}
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_common__WEBPACK_IMPORTED_MODULE_3__.ColorWrap)(Photoshop));

/***/ }),

/***/ "./node_modules/react-color/es/components/photoshop/PhotoshopButton.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-color/es/components/photoshop/PhotoshopButton.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoshopButton": function() { return /* binding */ PhotoshopButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");



var PhotoshopButton = function PhotoshopButton(_ref) {
  var onClick = _ref.onClick,
      label = _ref.label,
      children = _ref.children,
      active = _ref.active;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      button: {
        backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
        border: '1px solid #878787',
        borderRadius: '2px',
        height: '20px',
        boxShadow: '0 1px 0 0 #EAEAEA',
        fontSize: '14px',
        color: '#000',
        lineHeight: '20px',
        textAlign: 'center',
        marginBottom: '10px',
        cursor: 'pointer'
      }
    },
    'active': {
      button: {
        boxShadow: '0 0 0 1px #878787'
      }
    }
  }, { active: active });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.button, onClick: onClick },
    label || children
  );
};

/* harmony default export */ __webpack_exports__["default"] = (PhotoshopButton);

/***/ }),

/***/ "./node_modules/react-color/es/components/photoshop/PhotoshopFields.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-color/es/components/photoshop/PhotoshopFields.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoshopPicker": function() { return /* binding */ PhotoshopPicker; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var _helpers_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/es/helpers/color.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");






var PhotoshopPicker = function PhotoshopPicker(_ref) {
  var onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsv = _ref.hsv,
      hex = _ref.hex;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      fields: {
        paddingTop: '5px',
        paddingBottom: '9px',
        width: '80px',
        position: 'relative'
      },
      divider: {
        height: '5px'
      },
      RGBwrap: {
        position: 'relative'
      },
      RGBinput: {
        marginLeft: '40%',
        width: '40%',
        height: '18px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '5px',
        fontSize: '13px',
        paddingLeft: '3px',
        marginRight: '10px'
      },
      RGBlabel: {
        left: '0px',
        top: '0px',
        width: '34px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '18px',
        lineHeight: '22px',
        position: 'absolute'
      },
      HEXwrap: {
        position: 'relative'
      },
      HEXinput: {
        marginLeft: '20%',
        width: '80%',
        height: '18px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '6px',
        fontSize: '13px',
        paddingLeft: '3px'
      },
      HEXlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '14px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '18px',
        lineHeight: '22px'
      },
      fieldSymbols: {
        position: 'absolute',
        top: '5px',
        right: '-7px',
        fontSize: '13px'
      },
      symbol: {
        height: '20px',
        lineHeight: '22px',
        paddingBottom: '7px'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data['#']) {
      _helpers_color__WEBPACK_IMPORTED_MODULE_2__.isValidHex(data['#']) && onChange({
        hex: data['#'],
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    } else if (data.h || data.s || data.v) {
      onChange({
        h: data.h || hsv.h,
        s: data.s || hsv.s,
        v: data.v || hsv.v,
        source: 'hsv'
      }, e);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.fields },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'h',
      value: Math.round(hsv.h),
      onChange: handleChange
    }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 's',
      value: Math.round(hsv.s * 100),
      onChange: handleChange
    }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'v',
      value: Math.round(hsv.v * 100),
      onChange: handleChange
    }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.divider }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'r',
      value: rgb.r,
      onChange: handleChange
    }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'g',
      value: rgb.g,
      onChange: handleChange
    }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'b',
      value: rgb.b,
      onChange: handleChange
    }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.divider }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.EditableInput, {
      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
      label: '#',
      value: hex.replace('#', ''),
      onChange: handleChange
    }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.fieldSymbols },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.symbol },
        '\xB0'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.symbol },
        '%'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.symbol },
        '%'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (PhotoshopPicker);

/***/ }),

/***/ "./node_modules/react-color/es/components/photoshop/PhotoshopPointer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-color/es/components/photoshop/PhotoshopPointer.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoshopPointerCircle": function() { return /* binding */ PhotoshopPointerCircle; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");



var PhotoshopPointerCircle = function PhotoshopPointerCircle() {
  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      triangle: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '4px 0 4px 6px',
        borderColor: 'transparent transparent transparent #fff',
        position: 'absolute',
        top: '1px',
        left: '1px'
      },
      triangleBorder: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '5px 0 5px 8px',
        borderColor: 'transparent transparent transparent #555'
      },

      left: {
        Extend: 'triangleBorder',
        transform: 'translate(-13px, -4px)'
      },
      leftInside: {
        Extend: 'triangle',
        transform: 'translate(-8px, -5px)'
      },

      right: {
        Extend: 'triangleBorder',
        transform: 'translate(20px, -14px) rotate(180deg)'
      },
      rightInside: {
        Extend: 'triangle',
        transform: 'translate(-8px, -5px)'
      }
    }
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.pointer },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.left },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.leftInside })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.right },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.rightInside })
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (PhotoshopPointerCircle);

/***/ }),

/***/ "./node_modules/react-color/es/components/photoshop/PhotoshopPointerCircle.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-color/es/components/photoshop/PhotoshopPointerCircle.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoshopPointerCircle": function() { return /* binding */ PhotoshopPointerCircle; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");



var PhotoshopPointerCircle = function PhotoshopPointerCircle(_ref) {
  var hsl = _ref.hsl;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fff',
        transform: 'translate(-6px, -6px)'
      }
    },
    'black-outline': {
      picker: {
        boxShadow: 'inset 0 0 0 1px #000'
      }
    }
  }, { 'black-outline': hsl.l > 0.5 });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.picker });
};

/* harmony default export */ __webpack_exports__["default"] = (PhotoshopPointerCircle);

/***/ }),

/***/ "./node_modules/react-color/es/components/photoshop/PhotoshopPreviews.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-color/es/components/photoshop/PhotoshopPreviews.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoshopPreviews": function() { return /* binding */ PhotoshopPreviews; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");



var PhotoshopPreviews = function PhotoshopPreviews(_ref) {
  var rgb = _ref.rgb,
      currentColor = _ref.currentColor;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      swatches: {
        border: '1px solid #B3B3B3',
        borderBottom: '1px solid #F0F0F0',
        marginBottom: '2px',
        marginTop: '1px'
      },
      new: {
        height: '34px',
        background: 'rgb(' + rgb.r + ',' + rgb.g + ', ' + rgb.b + ')',
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'
      },
      current: {
        height: '34px',
        background: currentColor,
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
      },
      label: {
        fontSize: '14px',
        color: '#000',
        textAlign: 'center'
      }
    }
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.label },
      'new'
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.swatches },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.new }),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.current })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.label },
      'current'
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (PhotoshopPreviews);

/***/ }),

/***/ "./node_modules/react-color/es/components/sketch/Sketch.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-color/es/components/sketch/Sketch.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sketch": function() { return /* binding */ Sketch; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");
/* harmony import */ var _SketchFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SketchFields */ "./node_modules/react-color/es/components/sketch/SketchFields.js");
/* harmony import */ var _SketchPresetColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SketchPresetColors */ "./node_modules/react-color/es/components/sketch/SketchPresetColors.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };










var Sketch = function Sketch(_ref) {
  var width = _ref.width,
      rgb = _ref.rgb,
      hex = _ref.hex,
      hsv = _ref.hsv,
      hsl = _ref.hsl,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      disableAlpha = _ref.disableAlpha,
      presetColors = _ref.presetColors,
      renderers = _ref.renderers,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default()({
    'default': _extends({
      picker: {
        width: width,
        padding: '10px 10px 0',
        boxSizing: 'initial',
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'
      },
      saturation: {
        width: '100%',
        paddingBottom: '75%',
        position: 'relative',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '3px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      controls: {
        display: 'flex'
      },
      sliders: {
        padding: '4px 0',
        flex: '1'
      },
      color: {
        width: '24px',
        height: '24px',
        position: 'relative',
        marginTop: '4px',
        marginLeft: '4px',
        borderRadius: '3px'
      },
      activeColor: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '2px',
        background: 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      hue: {
        position: 'relative',
        height: '10px',
        overflow: 'hidden'
      },
      Hue: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },

      alpha: {
        position: 'relative',
        height: '10px',
        marginTop: '4px',
        overflow: 'hidden'
      },
      Alpha: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      }
    }, passedStyles),
    'disableAlpha': {
      color: {
        height: '10px'
      },
      hue: {
        height: '10px'
      },
      alpha: {
        display: 'none'
      }
    }
  }, passedStyles), { disableAlpha: disableAlpha });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.picker, className: 'sketch-picker ' + className },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.saturation },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Saturation, {
        style: styles.Saturation,
        hsl: hsl,
        hsv: hsv,
        onChange: onChange
      })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.controls, className: 'flexbox-fix' },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.sliders },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.hue },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Hue, {
            style: styles.Hue,
            hsl: hsl,
            onChange: onChange
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.alpha },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Alpha, {
            style: styles.Alpha,
            rgb: rgb,
            hsl: hsl,
            renderers: renderers,
            onChange: onChange
          })
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.color },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Checkboard, null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.activeColor })
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SketchFields__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rgb: rgb,
      hsl: hsl,
      hex: hex,
      onChange: onChange,
      disableAlpha: disableAlpha
    }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SketchPresetColors__WEBPACK_IMPORTED_MODULE_5__["default"], {
      colors: presetColors,
      onClick: onChange,
      onSwatchHover: onSwatchHover
    })
  );
};

Sketch.propTypes = {
  disableAlpha: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  width: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)]),
  styles: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};

Sketch.defaultProps = {
  disableAlpha: false,
  width: 200,
  styles: {},
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_common__WEBPACK_IMPORTED_MODULE_3__.ColorWrap)(Sketch));

/***/ }),

/***/ "./node_modules/react-color/es/components/sketch/SketchFields.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-color/es/components/sketch/SketchFields.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SketchFields": function() { return /* binding */ SketchFields; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var _helpers_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/es/helpers/color.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");
/* eslint-disable no-param-reassign */







var SketchFields = function SketchFields(_ref) {
  var onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hex = _ref.hex,
      disableAlpha = _ref.disableAlpha;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      fields: {
        display: 'flex',
        paddingTop: '4px'
      },
      single: {
        flex: '1',
        paddingLeft: '6px'
      },
      alpha: {
        flex: '1',
        paddingLeft: '6px'
      },
      double: {
        flex: '2'
      },
      input: {
        width: '80%',
        padding: '4px 10% 3px',
        border: 'none',
        boxShadow: 'inset 0 0 0 1px #ccc',
        fontSize: '11px'
      },
      label: {
        display: 'block',
        textAlign: 'center',
        fontSize: '11px',
        color: '#222',
        paddingTop: '3px',
        paddingBottom: '4px',
        textTransform: 'capitalize'
      }
    },
    'disableAlpha': {
      alpha: {
        display: 'none'
      }
    }
  }, { disableAlpha: disableAlpha });

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      _helpers_color__WEBPACK_IMPORTED_MODULE_2__.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        a: rgb.a,
        source: 'rgb'
      }, e);
    } else if (data.a) {
      if (data.a < 0) {
        data.a = 0;
      } else if (data.a > 100) {
        data.a = 100;
      }

      data.a /= 100;
      onChange({
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: data.a,
        source: 'rgb'
      }, e);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.fields, className: 'flexbox-fix' },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.double },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'hex',
        value: hex.replace('#', ''),
        onChange: handleChange
      })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.single },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'r',
        value: rgb.r,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.single },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'g',
        value: rgb.g,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.single },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'b',
        value: rgb.b,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.alpha },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'a',
        value: Math.round(rgb.a * 100),
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '100'
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (SketchFields);

/***/ }),

/***/ "./node_modules/react-color/es/components/sketch/SketchPresetColors.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-color/es/components/sketch/SketchPresetColors.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SketchPresetColors": function() { return /* binding */ SketchPresetColors; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







var SketchPresetColors = function SketchPresetColors(_ref) {
  var colors = _ref.colors,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onSwatchHover = _ref.onSwatchHover;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      colors: {
        margin: '0 -10px',
        padding: '10px 0 0 10px',
        borderTop: '1px solid #eee',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative'
      },
      swatchWrap: {
        width: '16px',
        height: '16px',
        margin: '0 10px 10px 0'
      },
      swatch: {
        borderRadius: '3px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)'
      }
    },
    'no-presets': {
      colors: {
        display: 'none'
      }
    }
  }, {
    'no-presets': !colors || !colors.length
  });

  var handleClick = function handleClick(hex, e) {
    onClick({
      hex: hex,
      source: 'hex'
    }, e);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.colors, className: 'flexbox-fix' },
    colors.map(function (colorObjOrString) {
      var c = typeof colorObjOrString === 'string' ? { color: colorObjOrString } : colorObjOrString;
      var key = '' + c.color + (c.title || '');
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { key: key, style: styles.swatchWrap },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_2__.Swatch, _extends({}, c, {
          style: styles.swatch,
          onClick: handleClick,
          onHover: onSwatchHover,
          focusStyle: {
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ' + c.color
          }
        }))
      );
    })
  );
};

SketchPresetColors.propTypes = {
  colors: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    color: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  })])).isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (SketchPresetColors);

/***/ }),

/***/ "./node_modules/react-color/es/components/slider/Slider.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-color/es/components/slider/Slider.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slider": function() { return /* binding */ Slider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");
/* harmony import */ var _SliderSwatches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SliderSwatches */ "./node_modules/react-color/es/components/slider/SliderSwatches.js");
/* harmony import */ var _SliderPointer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SliderPointer */ "./node_modules/react-color/es/components/slider/SliderPointer.js");









var Slider = function Slider(_ref) {
  var hsl = _ref.hsl,
      onChange = _ref.onChange,
      pointer = _ref.pointer,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])(lodash_es_merge__WEBPACK_IMPORTED_MODULE_2___default()({
    'default': {
      hue: {
        height: '12px',
        position: 'relative'
      },
      Hue: {
        radius: '2px'
      }
    }
  }, passedStyles));

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.wrap || {}, className: 'slider-picker ' + className },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.hue },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Hue, {
        style: styles.Hue,
        hsl: hsl,
        pointer: pointer,
        onChange: onChange
      })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.swatches },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SliderSwatches__WEBPACK_IMPORTED_MODULE_4__["default"], { hsl: hsl, onClick: onChange })
    )
  );
};

Slider.propTypes = {
  styles: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};
Slider.defaultProps = {
  pointer: _SliderPointer__WEBPACK_IMPORTED_MODULE_5__["default"],
  styles: {}
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_common__WEBPACK_IMPORTED_MODULE_3__.ColorWrap)(Slider));

/***/ }),

/***/ "./node_modules/react-color/es/components/slider/SliderPointer.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-color/es/components/slider/SliderPointer.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderPointer": function() { return /* binding */ SliderPointer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");



var SliderPointer = function SliderPointer() {
  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      picker: {
        width: '14px',
        height: '14px',
        borderRadius: '6px',
        transform: 'translate(-7px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    }
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.picker });
};

/* harmony default export */ __webpack_exports__["default"] = (SliderPointer);

/***/ }),

/***/ "./node_modules/react-color/es/components/slider/SliderSwatch.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-color/es/components/slider/SliderSwatch.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderSwatch": function() { return /* binding */ SliderSwatch; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");



var SliderSwatch = function SliderSwatch(_ref) {
  var hsl = _ref.hsl,
      offset = _ref.offset,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      active = _ref.active,
      first = _ref.first,
      last = _ref.last;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      swatch: {
        height: '12px',
        background: 'hsl(' + hsl.h + ', 50%, ' + offset * 100 + '%)',
        cursor: 'pointer'
      }
    },
    'first': {
      swatch: {
        borderRadius: '2px 0 0 2px'
      }
    },
    'last': {
      swatch: {
        borderRadius: '0 2px 2px 0'
      }
    },
    'active': {
      swatch: {
        transform: 'scaleY(1.8)',
        borderRadius: '3.6px/2px'
      }
    }
  }, { active: active, first: first, last: last });

  var handleClick = function handleClick(e) {
    return onClick({
      h: hsl.h,
      s: 0.5,
      l: offset,
      source: 'hsl'
    }, e);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.swatch, onClick: handleClick });
};

/* harmony default export */ __webpack_exports__["default"] = (SliderSwatch);

/***/ }),

/***/ "./node_modules/react-color/es/components/slider/SliderSwatches.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-color/es/components/slider/SliderSwatches.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderSwatches": function() { return /* binding */ SliderSwatches; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var _SliderSwatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SliderSwatch */ "./node_modules/react-color/es/components/slider/SliderSwatch.js");





var SliderSwatches = function SliderSwatches(_ref) {
  var onClick = _ref.onClick,
      hsl = _ref.hsl;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      swatches: {
        marginTop: '20px'
      },
      swatch: {
        boxSizing: 'border-box',
        width: '20%',
        paddingRight: '1px',
        float: 'left'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  // Acceptible difference in floating point equality
  var epsilon = 0.1;

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.swatches },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.swatch },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SliderSwatch__WEBPACK_IMPORTED_MODULE_2__["default"], {
        hsl: hsl,
        offset: '.80',
        active: Math.abs(hsl.l - 0.80) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
        onClick: onClick,
        first: true
      })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.swatch },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SliderSwatch__WEBPACK_IMPORTED_MODULE_2__["default"], {
        hsl: hsl,
        offset: '.65',
        active: Math.abs(hsl.l - 0.65) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
        onClick: onClick
      })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.swatch },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SliderSwatch__WEBPACK_IMPORTED_MODULE_2__["default"], {
        hsl: hsl,
        offset: '.50',
        active: Math.abs(hsl.l - 0.50) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
        onClick: onClick
      })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.swatch },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SliderSwatch__WEBPACK_IMPORTED_MODULE_2__["default"], {
        hsl: hsl,
        offset: '.35',
        active: Math.abs(hsl.l - 0.35) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
        onClick: onClick
      })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.swatch },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SliderSwatch__WEBPACK_IMPORTED_MODULE_2__["default"], {
        hsl: hsl,
        offset: '.20',
        active: Math.abs(hsl.l - 0.20) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
        onClick: onClick,
        last: true
      })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.clear })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (SliderSwatches);

/***/ }),

/***/ "./node_modules/react-color/es/components/swatches/Swatches.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-color/es/components/swatches/Swatches.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Swatches": function() { return /* binding */ Swatches; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-colors */ "./node_modules/material-colors/dist/colors.es2015.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");
/* harmony import */ var _SwatchesGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SwatchesGroup */ "./node_modules/react-color/es/components/swatches/SwatchesGroup.js");










var Swatches = function Swatches(_ref) {
  var width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      colors = _ref.colors,
      hex = _ref.hex,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])(lodash_es_merge__WEBPACK_IMPORTED_MODULE_3___default()({
    'default': {
      picker: {
        width: width,
        height: height
      },
      overflow: {
        height: height,
        overflowY: 'scroll'
      },
      body: {
        padding: '16px 0 6px 16px'
      },
      clear: {
        clear: 'both'
      }
    }
  }, passedStyles));

  var handleChange = function handleChange(data, e) {
    return onChange({ hex: data, source: 'hex' }, e);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.picker, className: 'swatches-picker ' + className },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _common__WEBPACK_IMPORTED_MODULE_5__.Raised,
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.overflow },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          'div',
          { style: styles.body },
          lodash_es_map__WEBPACK_IMPORTED_MODULE_2___default()(colors, function (group) {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SwatchesGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
              key: group.toString(),
              group: group,
              active: hex,
              onClick: handleChange,
              onSwatchHover: onSwatchHover
            });
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.clear })
        )
      )
    )
  );
};

Swatches.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number)]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number)]),
  colors: prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_7___default().string))),
  styles: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)

  /* eslint-disable max-len */
};Swatches.defaultProps = {
  width: 320,
  height: 240,
  colors: [[material_colors__WEBPACK_IMPORTED_MODULE_4__.red[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.red[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.red[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.red[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.red[100]], [material_colors__WEBPACK_IMPORTED_MODULE_4__.pink[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.pink[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.pink[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.pink[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.pink[100]], [material_colors__WEBPACK_IMPORTED_MODULE_4__.purple[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.purple[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.purple[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.purple[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.purple[100]], [material_colors__WEBPACK_IMPORTED_MODULE_4__.deepPurple[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.deepPurple[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.deepPurple[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.deepPurple[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.deepPurple[100]], [material_colors__WEBPACK_IMPORTED_MODULE_4__.indigo[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.indigo[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.indigo[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.indigo[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.indigo[100]], [material_colors__WEBPACK_IMPORTED_MODULE_4__.blue[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.blue[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.blue[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.blue[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.blue[100]], [material_colors__WEBPACK_IMPORTED_MODULE_4__.lightBlue[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.lightBlue[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.lightBlue[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.lightBlue[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.lightBlue[100]], [material_colors__WEBPACK_IMPORTED_MODULE_4__.cyan[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.cyan[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.cyan[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.cyan[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.cyan[100]], [material_colors__WEBPACK_IMPORTED_MODULE_4__.teal[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.teal[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.teal[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.teal[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.teal[100]], ['#194D33', material_colors__WEBPACK_IMPORTED_MODULE_4__.green[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.green[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.green[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.green[100]], [material_colors__WEBPACK_IMPORTED_MODULE_4__.lightGreen[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.lightGreen[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.lightGreen[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.lightGreen[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.lightGreen[100]], [material_colors__WEBPACK_IMPORTED_MODULE_4__.lime[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.lime[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.lime[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.lime[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.lime[100]], [material_colors__WEBPACK_IMPORTED_MODULE_4__.yellow[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.yellow[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.yellow[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.yellow[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.yellow[100]], [material_colors__WEBPACK_IMPORTED_MODULE_4__.amber[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.amber[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.amber[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.amber[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.amber[100]], [material_colors__WEBPACK_IMPORTED_MODULE_4__.orange[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.orange[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.orange[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.orange[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.orange[100]], [material_colors__WEBPACK_IMPORTED_MODULE_4__.deepOrange[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.deepOrange[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.deepOrange[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.deepOrange[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.deepOrange[100]], [material_colors__WEBPACK_IMPORTED_MODULE_4__.brown[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.brown[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.brown[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.brown[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.brown[100]], [material_colors__WEBPACK_IMPORTED_MODULE_4__.blueGrey[900], material_colors__WEBPACK_IMPORTED_MODULE_4__.blueGrey[700], material_colors__WEBPACK_IMPORTED_MODULE_4__.blueGrey[500], material_colors__WEBPACK_IMPORTED_MODULE_4__.blueGrey[300], material_colors__WEBPACK_IMPORTED_MODULE_4__.blueGrey[100]], ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF']],
  styles: {}
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_common__WEBPACK_IMPORTED_MODULE_5__.ColorWrap)(Swatches));

/***/ }),

/***/ "./node_modules/react-color/es/components/swatches/SwatchesColor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-color/es/components/swatches/SwatchesColor.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwatchesColor": function() { return /* binding */ SwatchesColor; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var _helpers_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/es/helpers/color.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");
/* harmony import */ var _icons_material_CheckIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @icons/material/CheckIcon */ "./node_modules/@icons/material/CheckIcon.js");







var SwatchesColor = function SwatchesColor(_ref) {
  var color = _ref.color,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onSwatchHover = _ref.onSwatchHover,
      first = _ref.first,
      last = _ref.last,
      active = _ref.active;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      color: {
        width: '40px',
        height: '24px',
        cursor: 'pointer',
        background: color,
        marginBottom: '1px'
      },
      check: {
        color: _helpers_color__WEBPACK_IMPORTED_MODULE_2__.getContrastingColor(color),
        marginLeft: '8px',
        display: 'none'
      }
    },
    'first': {
      color: {
        overflow: 'hidden',
        borderRadius: '2px 2px 0 0'
      }
    },
    'last': {
      color: {
        overflow: 'hidden',
        borderRadius: '0 0 2px 2px'
      }
    },
    'active': {
      check: {
        display: 'block'
      }
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd'
      },
      check: {
        color: '#333'
      }
    },
    'transparent': {
      check: {
        color: '#333'
      }
    }
  }, {
    first: first,
    last: last,
    active: active,
    'color-#FFFFFF': color === '#FFFFFF',
    'transparent': color === 'transparent'
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _common__WEBPACK_IMPORTED_MODULE_3__.Swatch,
    {
      color: color,
      style: styles.color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: { boxShadow: '0 0 4px ' + color }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.check },
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_material_CheckIcon__WEBPACK_IMPORTED_MODULE_4__["default"], null)
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (SwatchesColor);

/***/ }),

/***/ "./node_modules/react-color/es/components/swatches/SwatchesGroup.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-color/es/components/swatches/SwatchesGroup.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwatchesGroup": function() { return /* binding */ SwatchesGroup; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SwatchesColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwatchesColor */ "./node_modules/react-color/es/components/swatches/SwatchesColor.js");






var SwatchesGroup = function SwatchesGroup(_ref) {
  var onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover,
      group = _ref.group,
      active = _ref.active;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'default': {
      group: {
        paddingBottom: '10px',
        width: '40px',
        float: 'left',
        marginRight: '10px'
      }
    }
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.group },
    lodash_es_map__WEBPACK_IMPORTED_MODULE_2___default()(group, function (color, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SwatchesColor__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: color,
        color: color,
        active: color.toLowerCase() === active,
        first: i === 0,
        last: i === group.length - 1,
        onClick: onClick,
        onSwatchHover: onSwatchHover
      });
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (SwatchesGroup);

/***/ }),

/***/ "./node_modules/react-color/es/components/twitter/Twitter.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-color/es/components/twitter/Twitter.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Twitter": function() { return /* binding */ Twitter; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_es_merge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/color */ "./node_modules/react-color/es/helpers/color.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/react-color/es/components/common/index.js");









var Twitter = function Twitter(_ref) {
  var onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      hex = _ref.hex,
      colors = _ref.colors,
      width = _ref.width,
      triangle = _ref.triangle,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0,reactcss__WEBPACK_IMPORTED_MODULE_1__["default"])(lodash_es_merge__WEBPACK_IMPORTED_MODULE_3___default()({
    'default': {
      card: {
        width: width,
        background: '#fff',
        border: '0 solid rgba(0,0,0,0.25)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
        borderRadius: '4px',
        position: 'relative'
      },
      body: {
        padding: '15px 9px 9px 15px'
      },
      label: {
        fontSize: '18px',
        color: '#fff'
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent #fff transparent',
        position: 'absolute'
      },
      triangleShadow: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',
        position: 'absolute'
      },
      hash: {
        background: '#F0F0F0',
        height: '30px',
        width: '30px',
        borderRadius: '4px 0 0 4px',
        float: 'left',
        color: '#98A1A4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      input: {
        width: '100px',
        fontSize: '14px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '28px',
        boxShadow: 'inset 0 0 0 1px #F0F0F0',
        boxSizing: 'content-box',
        borderRadius: '0 4px 4px 0',
        float: 'left',
        paddingLeft: '8px'
      },
      swatch: {
        width: '30px',
        height: '30px',
        float: 'left',
        borderRadius: '4px',
        margin: '0 6px 6px 0'
      },
      clear: {
        clear: 'both'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      },
      triangleShadow: {
        display: 'none'
      }
    },
    'top-left-triangle': {
      triangle: {
        top: '-10px',
        left: '12px'
      },
      triangleShadow: {
        top: '-11px',
        left: '12px'
      }
    },
    'top-right-triangle': {
      triangle: {
        top: '-10px',
        right: '12px'
      },
      triangleShadow: {
        top: '-11px',
        right: '12px'
      }
    }
  }, passedStyles), {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right'
  });

  var handleChange = function handleChange(hexcode, e) {
    _helpers_color__WEBPACK_IMPORTED_MODULE_4__.isValidHex(hexcode) && onChange({
      hex: hexcode,
      source: 'hex'
    }, e);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    { style: styles.card, className: 'twitter-picker ' + className },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.triangleShadow }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.triangle }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      'div',
      { style: styles.body },
      lodash_es_map__WEBPACK_IMPORTED_MODULE_2___default()(colors, function (c, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_5__.Swatch, {
          key: i,
          color: c,
          hex: c,
          style: styles.swatch,
          onClick: handleChange,
          onHover: onSwatchHover,
          focusStyle: {
            boxShadow: '0 0 4px ' + c
          }
        });
      }),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        'div',
        { style: styles.hash },
        '#'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_5__.EditableInput, {
        label: null,
        style: { input: styles.input },
        value: hex.replace('#', ''),
        onChange: handleChange
      }),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { style: styles.clear })
    )
  );
};

Twitter.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)]),
  triangle: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(['hide', 'top-left', 'top-right']),
  colors: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)),
  styles: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};

Twitter.defaultProps = {
  width: 276,
  colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],
  triangle: 'top-left',
  styles: {}
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_common__WEBPACK_IMPORTED_MODULE_5__.ColorWrap)(Twitter));

/***/ }),

/***/ "./node_modules/react-color/es/helpers/alpha.js":
/*!******************************************************!*\
  !*** ./node_modules/react-color/es/helpers/alpha.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateChange": function() { return /* binding */ calculateChange; }
/* harmony export */ });
var calculateChange = function calculateChange(e, hsl, direction, initialA, container) {
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (direction === 'vertical') {
    var a = void 0;
    if (top < 0) {
      a = 0;
    } else if (top > containerHeight) {
      a = 1;
    } else {
      a = Math.round(top * 100 / containerHeight) / 100;
    }

    if (hsl.a !== a) {
      return {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: a,
        source: 'rgb'
      };
    }
  } else {
    var _a = void 0;
    if (left < 0) {
      _a = 0;
    } else if (left > containerWidth) {
      _a = 1;
    } else {
      _a = Math.round(left * 100 / containerWidth) / 100;
    }

    if (initialA !== _a) {
      return {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: _a,
        source: 'rgb'
      };
    }
  }
  return null;
};

/***/ }),

/***/ "./node_modules/react-color/es/helpers/checkboard.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-color/es/helpers/checkboard.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
var checkboardCache = {};

var render = function render(c1, c2, size, serverCanvas) {
  if (typeof document === 'undefined' && !serverCanvas) {
    return null;
  }
  var canvas = serverCanvas ? new serverCanvas() : document.createElement('canvas');
  canvas.width = size * 2;
  canvas.height = size * 2;
  var ctx = canvas.getContext('2d');
  if (!ctx) {
    return null;
  } // If no context can be found, return early.
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
};

var get = function get(c1, c2, size, serverCanvas) {
  var key = c1 + '-' + c2 + '-' + size + (serverCanvas ? '-server' : '');

  if (checkboardCache[key]) {
    return checkboardCache[key];
  }

  var checkboard = render(c1, c2, size, serverCanvas);
  checkboardCache[key] = checkboard;
  return checkboard;
};

/***/ }),

/***/ "./node_modules/react-color/es/helpers/color.js":
/*!******************************************************!*\
  !*** ./node_modules/react-color/es/helpers/color.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getContrastingColor": function() { return /* binding */ getContrastingColor; },
/* harmony export */   "isValidHex": function() { return /* binding */ isValidHex; },
/* harmony export */   "isvalidColorString": function() { return /* binding */ isvalidColorString; },
/* harmony export */   "red": function() { return /* binding */ red; },
/* harmony export */   "simpleCheckForValidColor": function() { return /* binding */ simpleCheckForValidColor; },
/* harmony export */   "toState": function() { return /* binding */ toState; }
/* harmony export */ });
/* harmony import */ var lodash_es_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_es_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_1__);



var simpleCheckForValidColor = function simpleCheckForValidColor(data) {
  var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
  var checked = 0;
  var passed = 0;
  lodash_es_each__WEBPACK_IMPORTED_MODULE_0___default()(keysToCheck, function (letter) {
    if (data[letter]) {
      checked += 1;
      if (!isNaN(data[letter])) {
        passed += 1;
      }
      if (letter === 's' || letter === 'l') {
        var percentPatt = /^\d+%$/;
        if (percentPatt.test(data[letter])) {
          passed += 1;
        }
      }
    }
  });
  return checked === passed ? data : false;
};

var toState = function toState(data, oldHue) {
  var color = data.hex ? tinycolor2__WEBPACK_IMPORTED_MODULE_1___default()(data.hex) : tinycolor2__WEBPACK_IMPORTED_MODULE_1___default()(data);
  var hsl = color.toHsl();
  var hsv = color.toHsv();
  var rgb = color.toRgb();
  var hex = color.toHex();
  if (hsl.s === 0) {
    hsl.h = oldHue || 0;
    hsv.h = oldHue || 0;
  }
  var transparent = hex === '000000' && rgb.a === 0;

  return {
    hsl: hsl,
    hex: transparent ? 'transparent' : '#' + hex,
    rgb: rgb,
    hsv: hsv,
    oldHue: data.h || oldHue || hsl.h,
    source: data.source
  };
};

var isValidHex = function isValidHex(hex) {
  if (hex === 'transparent') {
    return true;
  }
  // disable hex4 and hex8
  var lh = String(hex).charAt(0) === '#' ? 1 : 0;
  return hex.length !== 4 + lh && hex.length < 7 + lh && tinycolor2__WEBPACK_IMPORTED_MODULE_1___default()(hex).isValid();
};

var getContrastingColor = function getContrastingColor(data) {
  if (!data) {
    return '#fff';
  }
  var col = toState(data);
  if (col.hex === 'transparent') {
    return 'rgba(0,0,0,0.4)';
  }
  var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
};

var red = {
  hsl: { a: 1, h: 0, l: 0.5, s: 1 },
  hex: '#ff0000',
  rgb: { r: 255, g: 0, b: 0, a: 1 },
  hsv: { h: 0, s: 1, v: 1, a: 1 }
};

var isvalidColorString = function isvalidColorString(string, type) {
  var stringWithoutDegree = string.replace('°', '');
  return tinycolor2__WEBPACK_IMPORTED_MODULE_1___default()(type + ' (' + stringWithoutDegree + ')')._ok;
};

/***/ }),

/***/ "./node_modules/react-color/es/helpers/hue.js":
/*!****************************************************!*\
  !*** ./node_modules/react-color/es/helpers/hue.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateChange": function() { return /* binding */ calculateChange; }
/* harmony export */ });
var calculateChange = function calculateChange(e, direction, hsl, container) {
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (direction === 'vertical') {
    var h = void 0;
    if (top < 0) {
      h = 359;
    } else if (top > containerHeight) {
      h = 0;
    } else {
      var percent = -(top * 100 / containerHeight) + 100;
      h = 360 * percent / 100;
    }

    if (hsl.h !== h) {
      return {
        h: h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        source: 'hsl'
      };
    }
  } else {
    var _h = void 0;
    if (left < 0) {
      _h = 0;
    } else if (left > containerWidth) {
      _h = 359;
    } else {
      var _percent = left * 100 / containerWidth;
      _h = 360 * _percent / 100;
    }

    if (hsl.h !== _h) {
      return {
        h: _h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        source: 'hsl'
      };
    }
  }
  return null;
};

/***/ }),

/***/ "./node_modules/react-color/es/helpers/interaction.js":
/*!************************************************************!*\
  !*** ./node_modules/react-color/es/helpers/interaction.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleFocus": function() { return /* binding */ handleFocus; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-invalid-this */


var handleFocus = function handleFocus(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';
  return function (_React$Component) {
    _inherits(Focus, _React$Component);

    function Focus() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Focus);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Focus.__proto__ || Object.getPrototypeOf(Focus)).call.apply(_ref, [this].concat(args))), _this), _this.state = { focus: false }, _this.handleFocus = function () {
        return _this.setState({ focus: true });
      }, _this.handleBlur = function () {
        return _this.setState({ focus: false });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Focus, [{
      key: 'render',
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          Span,
          { onFocus: this.handleFocus, onBlur: this.handleBlur },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, _extends({}, this.props, this.state))
        );
      }
    }]);

    return Focus;
  }((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
};

/***/ }),

/***/ "./node_modules/react-color/es/helpers/saturation.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-color/es/helpers/saturation.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateChange": function() { return /* binding */ calculateChange; }
/* harmony export */ });
var calculateChange = function calculateChange(e, hsl, container) {
  var _container$getBoundin = container.getBoundingClientRect(),
      containerWidth = _container$getBoundin.width,
      containerHeight = _container$getBoundin.height;

  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (left < 0) {
    left = 0;
  } else if (left > containerWidth) {
    left = containerWidth;
  }

  if (top < 0) {
    top = 0;
  } else if (top > containerHeight) {
    top = containerHeight;
  }

  var saturation = left / containerWidth;
  var bright = 1 - top / containerHeight;

  return {
    h: hsl.h,
    s: saturation,
    v: bright,
    a: hsl.a,
    source: 'hsv'
  };
};

/***/ }),

/***/ "./node_modules/react-color/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-color/es/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlphaPicker": function() { return /* reexport safe */ _components_alpha_Alpha__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "BlockPicker": function() { return /* reexport safe */ _components_block_Block__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "ChromePicker": function() { return /* reexport safe */ _components_chrome_Chrome__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "CirclePicker": function() { return /* reexport safe */ _components_circle_Circle__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "CompactPicker": function() { return /* reexport safe */ _components_compact_Compact__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "CustomPicker": function() { return /* reexport safe */ _components_common_ColorWrap__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   "GithubPicker": function() { return /* reexport safe */ _components_github_Github__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "GooglePicker": function() { return /* reexport safe */ _components_google_Google__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   "HuePicker": function() { return /* reexport safe */ _components_hue_Hue__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "MaterialPicker": function() { return /* reexport safe */ _components_material_Material__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   "PhotoshopPicker": function() { return /* reexport safe */ _components_photoshop_Photoshop__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "SketchPicker": function() { return /* reexport safe */ _components_sketch_Sketch__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   "SliderPicker": function() { return /* reexport safe */ _components_slider_Slider__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   "SwatchesPicker": function() { return /* reexport safe */ _components_swatches_Swatches__WEBPACK_IMPORTED_MODULE_11__["default"]; },
/* harmony export */   "TwitterPicker": function() { return /* reexport safe */ _components_twitter_Twitter__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   "default": function() { return /* reexport safe */ _components_chrome_Chrome__WEBPACK_IMPORTED_MODULE_3__["default"]; }
/* harmony export */ });
/* harmony import */ var _components_alpha_Alpha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/alpha/Alpha */ "./node_modules/react-color/es/components/alpha/Alpha.js");
/* harmony import */ var _components_block_Block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/block/Block */ "./node_modules/react-color/es/components/block/Block.js");
/* harmony import */ var _components_circle_Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/circle/Circle */ "./node_modules/react-color/es/components/circle/Circle.js");
/* harmony import */ var _components_chrome_Chrome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chrome/Chrome */ "./node_modules/react-color/es/components/chrome/Chrome.js");
/* harmony import */ var _components_compact_Compact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/compact/Compact */ "./node_modules/react-color/es/components/compact/Compact.js");
/* harmony import */ var _components_github_Github__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/github/Github */ "./node_modules/react-color/es/components/github/Github.js");
/* harmony import */ var _components_hue_Hue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/hue/Hue */ "./node_modules/react-color/es/components/hue/Hue.js");
/* harmony import */ var _components_material_Material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/material/Material */ "./node_modules/react-color/es/components/material/Material.js");
/* harmony import */ var _components_photoshop_Photoshop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/photoshop/Photoshop */ "./node_modules/react-color/es/components/photoshop/Photoshop.js");
/* harmony import */ var _components_sketch_Sketch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sketch/Sketch */ "./node_modules/react-color/es/components/sketch/Sketch.js");
/* harmony import */ var _components_slider_Slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/slider/Slider */ "./node_modules/react-color/es/components/slider/Slider.js");
/* harmony import */ var _components_swatches_Swatches__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/swatches/Swatches */ "./node_modules/react-color/es/components/swatches/Swatches.js");
/* harmony import */ var _components_twitter_Twitter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/twitter/Twitter */ "./node_modules/react-color/es/components/twitter/Twitter.js");
/* harmony import */ var _components_google_Google__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/google/Google */ "./node_modules/react-color/es/components/google/Google.js");
/* harmony import */ var _components_common_ColorWrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/common/ColorWrap */ "./node_modules/react-color/es/components/common/ColorWrap.js");



















/***/ }),

/***/ "./node_modules/react-router-dom/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-router-dom/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserRouter": function() { return /* binding */ BrowserRouter; },
/* harmony export */   "HashRouter": function() { return /* binding */ HashRouter; },
/* harmony export */   "Link": function() { return /* binding */ Link; },
/* harmony export */   "MemoryRouter": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.MemoryRouter; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "Navigate": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Navigate; },
/* harmony export */   "NavigationType": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Action; },
/* harmony export */   "Outlet": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Outlet; },
/* harmony export */   "Route": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Route; },
/* harmony export */   "Router": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Router; },
/* harmony export */   "Routes": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Routes; },
/* harmony export */   "UNSAFE_LocationContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_LocationContext; },
/* harmony export */   "UNSAFE_NavigationContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_NavigationContext; },
/* harmony export */   "UNSAFE_RouteContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_RouteContext; },
/* harmony export */   "createPath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createPath; },
/* harmony export */   "createRoutesFromChildren": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.createRoutesFromChildren; },
/* harmony export */   "createSearchParams": function() { return /* binding */ createSearchParams; },
/* harmony export */   "generatePath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.generatePath; },
/* harmony export */   "matchPath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchPath; },
/* harmony export */   "matchRoutes": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes; },
/* harmony export */   "parsePath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.parsePath; },
/* harmony export */   "renderMatches": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.renderMatches; },
/* harmony export */   "resolvePath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath; },
/* harmony export */   "unstable_HistoryRouter": function() { return /* binding */ HistoryRouter; },
/* harmony export */   "useHref": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useHref; },
/* harmony export */   "useInRouterContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useInRouterContext; },
/* harmony export */   "useLinkClickHandler": function() { return /* binding */ useLinkClickHandler; },
/* harmony export */   "useLocation": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation; },
/* harmony export */   "useMatch": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useMatch; },
/* harmony export */   "useNavigate": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate; },
/* harmony export */   "useNavigationType": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigationType; },
/* harmony export */   "useOutlet": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useOutlet; },
/* harmony export */   "useOutletContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useOutletContext; },
/* harmony export */   "useParams": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useParams; },
/* harmony export */   "useResolvedPath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath; },
/* harmony export */   "useRoutes": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useRoutes; },
/* harmony export */   "useSearchParams": function() { return /* binding */ useSearchParams; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/history/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
      _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
} ////////////////////////////////////////////////////////////////////////////////
// COMPONENTS
////////////////////////////////////////////////////////////////////////////////

/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createBrowserHistory)({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    action: history.action,
    location: history.location
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */
function HashRouter(_ref2) {
  let {
    basename,
    children,
    window
  } = _ref2;
  let historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createHashHistory)({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    action: history.action,
    location: history.location
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    action: history.action,
    location: history.location
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

if (true) {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * The public API for rendering a history-aware <a>.
 */
const Link = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    reloadDocument,
    replace = false,
    state,
    target,
    to
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  let href = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useHref)(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", _extends({}, rest, {
      href: href,
      onClick: handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (true) {
  Link.displayName = "Link";
}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath)(to);
  let locationPathname = location.pathname;
  let toPathname = path.pathname;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive
  }) : styleProp;
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive
  }) : children);
});

if (true) {
  NavLink.displayName = "NavLink";
} ////////////////////////////////////////////////////////////////////////////////
// HOOKS
////////////////////////////////////////////////////////////////////////////////

/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath)(to);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    if (event.button === 0 && ( // Ignore everything but left clicks
    !target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here.

      let replace = !!replaceProp || (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(location) === (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
   true ? warning(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params\n\n" + "If you're unsure how to load polyfills, we recommend you check out " + "https://polyfill.io/v3/ which provides some recommendations about how " + "to load polyfills only for users that need them, instead of for every " + "user.") : 0;
  let defaultSearchParamsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(createSearchParams(defaultInit));
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  let searchParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let searchParams = createSearchParams(location.search);

    for (let key of defaultSearchParamsRef.current.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParamsRef.current.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    }

    return searchParams;
  }, [location.search]);
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  let setSearchParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextInit, navigateOptions) => {
    navigate("?" + createSearchParams(nextInit), navigateOptions);
  }, [navigate]);
  return [searchParams, setSearchParams];
}

/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }

  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/react-router/index.js":
/*!********************************************!*\
  !*** ./node_modules/react-router/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryRouter": function() { return /* binding */ MemoryRouter; },
/* harmony export */   "Navigate": function() { return /* binding */ Navigate; },
/* harmony export */   "NavigationType": function() { return /* reexport safe */ history__WEBPACK_IMPORTED_MODULE_0__.Action; },
/* harmony export */   "Outlet": function() { return /* binding */ Outlet; },
/* harmony export */   "Route": function() { return /* binding */ Route; },
/* harmony export */   "Router": function() { return /* binding */ Router; },
/* harmony export */   "Routes": function() { return /* binding */ Routes; },
/* harmony export */   "UNSAFE_LocationContext": function() { return /* binding */ LocationContext; },
/* harmony export */   "UNSAFE_NavigationContext": function() { return /* binding */ NavigationContext; },
/* harmony export */   "UNSAFE_RouteContext": function() { return /* binding */ RouteContext; },
/* harmony export */   "createPath": function() { return /* reexport safe */ history__WEBPACK_IMPORTED_MODULE_0__.createPath; },
/* harmony export */   "createRoutesFromChildren": function() { return /* binding */ createRoutesFromChildren; },
/* harmony export */   "generatePath": function() { return /* binding */ generatePath; },
/* harmony export */   "matchPath": function() { return /* binding */ matchPath; },
/* harmony export */   "matchRoutes": function() { return /* binding */ matchRoutes; },
/* harmony export */   "parsePath": function() { return /* reexport safe */ history__WEBPACK_IMPORTED_MODULE_0__.parsePath; },
/* harmony export */   "renderMatches": function() { return /* binding */ renderMatches; },
/* harmony export */   "resolvePath": function() { return /* binding */ resolvePath; },
/* harmony export */   "useHref": function() { return /* binding */ useHref; },
/* harmony export */   "useInRouterContext": function() { return /* binding */ useInRouterContext; },
/* harmony export */   "useLocation": function() { return /* binding */ useLocation; },
/* harmony export */   "useMatch": function() { return /* binding */ useMatch; },
/* harmony export */   "useNavigate": function() { return /* binding */ useNavigate; },
/* harmony export */   "useNavigationType": function() { return /* binding */ useNavigationType; },
/* harmony export */   "useOutlet": function() { return /* binding */ useOutlet; },
/* harmony export */   "useOutletContext": function() { return /* binding */ useOutletContext; },
/* harmony export */   "useParams": function() { return /* binding */ useParams; },
/* harmony export */   "useResolvedPath": function() { return /* binding */ useResolvedPath; },
/* harmony export */   "useRoutes": function() { return /* binding */ useRoutes; }
/* harmony export */ });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




const NavigationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);

if (true) {
  NavigationContext.displayName = "Navigation";
}

const LocationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);

if (true) {
  LocationContext.displayName = "Location";
}

const RouteContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  outlet: null,
  matches: []
});

if (true) {
  RouteContext.displayName = "Route";
}

function invariant(cond, message) {
  if (!cond) throw new Error(message);
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
     true ? warning(false, message) : 0;
  }
}

/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/docs/en/v6/api#generatepath
 */
function generatePath(path, params) {
  if (params === void 0) {
    params = {};
  }

  return path.replace(/:(\w+)/g, (_, key) => {
    !(params[key] != null) ?  true ? invariant(false, "Missing \":" + key + "\" param") : 0 : void 0;
    return params[key];
  }).replace(/\/*\*$/, _ => params["*"] == null ? "" : params["*"].replace(/^\/*/, "/"));
}
/**
 * A RouteMatch contains info about how a route matched a URL.
 */

/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchroutes
 */
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }

  let location = typeof locationArg === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);

  if (pathname == null) {
    return null;
  }

  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;

  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], pathname);
  }

  return matches;
}

function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }

  if (parentsMeta === void 0) {
    parentsMeta = [];
  }

  if (parentPath === void 0) {
    parentPath = "";
  }

  routes.forEach((route, index) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };

    if (meta.relativePath.startsWith("/")) {
      !meta.relativePath.startsWith(parentPath) ?  true ? invariant(false, "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.") : 0 : void 0;
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }

    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children && route.children.length > 0) {
      !(route.index !== true) ?  true ? invariant(false, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\".")) : 0 : void 0;
      flattenRoutes(route.children, branches, routesMeta, path);
    } // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.


    if (route.path == null && !route.index) {
      return;
    }

    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}

function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}

const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;

const isSplat = s => s === "*";

function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  if (index) {
    initialScore += indexRouteValue;
  }

  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}

function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}

function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];

  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });

    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }

  return matches;
}
/**
 * A PathPattern is used to match on some portion of a URL pathname.
 */


/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchpath
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }

  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }

    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}

function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }

  if (end === void 0) {
    end = true;
  }

   true ? warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\".")) : 0;
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });

  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else {
    regexpSource += end ? "\\/*$" // When matching to the end, ignore trailing slashes
    : // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
    // parent routes to matching only their own words and nothing more, e.g. parent
    // route "/home" should not match "/home2".
    // Additionally, allow paths starting with `.`, `-`, `~`, and url-encoded entities,
    // but do not consume the character in the matched path so they can match against
    // nested paths.
    "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
  }

  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
     true ? warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ").")) : 0;
    return value;
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/docs/en/v6/api#resolvepath
 */


function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(toArg) : toArg;
  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname; // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  let from;

  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original to value had one.

  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }

  return path;
}
function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(to).pathname : to.pathname;
}
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }

  let nextChar = pathname.charAt(basename.length);

  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(basename.length) || "/";
}
const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usehref
 */

function useHref(to) {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    basename,
    navigator
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to);
  let joinedPathname = pathname;

  if (basename !== "/") {
    let toPathname = getToPathname(to);
    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
  }

  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useinroutercontext
 */

function useInRouterContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/docs/en/v6/api#uselocation
 */

function useLocation() {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : 0 : void 0;
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigationtype
 */

function useNavigationType() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocationContext).navigationType;
}
/**
 * Returns true if the URL for the given "to" value matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usematch
 */

function useMatch(pattern) {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useMatch() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    pathname
  } = useLocation();
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => matchPath(pattern, pathname), [pathname, pattern]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigate
 */
function useNavigate() {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    basename,
    navigator
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NavigationContext);
  let {
    matches
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
  let activeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    activeRef.current = true;
  });
  let navigate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (to, options) {
    if (options === void 0) {
      options = {};
    }

     true ? warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.") : 0;
    if (!activeRef.current) return;

    if (typeof to === "number") {
      navigator.go(to);
      return;
    }

    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);

    if (basename !== "/") {
      path.pathname = joinPaths([basename, path.pathname]);
    }

    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
const OutletContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/docs/en/v6/api#useoutletcontext
 */

function useOutletContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useoutlet
 */

function useOutlet(context) {
  let outlet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RouteContext).outlet;

  if (outlet) {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(OutletContext.Provider, {
      value: context
    }, outlet);
  }

  return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useparams
 */

function useParams() {
  let {
    matches
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useresolvedpath
 */

function useResolvedPath(to) {
  let {
    matches
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useroutes
 */

function useRoutes(routes, locationArg) {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useRoutes() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    matches: parentMatches
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;

  if (true) {
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
  }

  let locationFromContext = useLocation();
  let location;

  if (locationArg) {
    var _parsedLocationArg$pa;

    let parsedLocationArg = typeof locationArg === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  true ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : 0 : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }

  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });

  if (true) {
     true ? warning(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : 0;
     true ? warning(matches == null || matches[matches.length - 1].route.element !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" does not have an element. " + "This means it will render an <Outlet /> with a null value by default resulting in an \"empty\" page.") : 0;
  }

  return _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
}
function _renderMatches(matches, parentMatches) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }

  if (matches == null) return null;
  return matches.reduceRight((outlet, match, index) => {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(RouteContext.Provider, {
      children: match.route.element !== undefined ? match.route.element : outlet,
      value: {
        outlet,
        matches: parentMatches.concat(matches.slice(0, index + 1))
      }
    });
  }, null);
}

/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/docs/en/v6/api#memoryrouter
 */
function MemoryRouter(_ref) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex
  } = _ref;
  let historyRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  if (historyRef.current == null) {
    historyRef.current = (0,history__WEBPACK_IMPORTED_MODULE_0__.createMemoryHistory)({
      initialEntries,
      initialIndex
    });
  }

  let history = historyRef.current;
  let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    action: history.action,
    location: history.location
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/docs/en/v6/api#navigate
 */
function Navigate(_ref2) {
  let {
    to,
    replace,
    state
  } = _ref2;
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of
  // the router loaded. We can help them understand how to avoid that.
  "<Navigate> may be used only in the context of a <Router> component.") : 0 : void 0;
   true ? warning(!(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : 0;
  let navigate = useNavigate();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    navigate(to, {
      replace,
      state
    });
  });
  return null;
}

/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/docs/en/v6/api#outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}

/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#route
 */
function Route(_props) {
    true ? invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : 0 ;
}

/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/docs/en/v6/api#router
 */
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = history__WEBPACK_IMPORTED_MODULE_0__.Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ?  true ? invariant(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : 0 : void 0;
  let basename = normalizePathname(basenameProp);
  let navigationContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);

  if (typeof locationProp === "string") {
    locationProp = (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(locationProp);
  }

  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    let trailingPathname = stripBasename(pathname, basename);

    if (trailingPathname == null) {
      return null;
    }

    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
   true ? warning(location != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : 0;

  if (location == null) {
    return null;
  }

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(LocationContext.Provider, {
    children: children,
    value: {
      location,
      navigationType
    }
  }));
}

/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#routes
 */
function Routes(_ref4) {
  let {
    children,
    location
  } = _ref4;
  return useRoutes(createRoutesFromChildren(children), location);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/docs/en/v6/api#createroutesfromchildren
 */

function createRoutesFromChildren(children) {
  let routes = [];
  react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(children, element => {
    if (! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }

    if (element.type === react__WEBPACK_IMPORTED_MODULE_1__.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children));
      return;
    }

    !(element.type === Route) ?  true ? invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : 0 : void 0;
    let route = {
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path
    };

    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children);
    }

    routes.push(route);
  });
  return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */

function renderMatches(matches) {
  return _renderMatches(matches);
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/reactcss/lib/autoprefix.js":
/*!*************************************************!*\
  !*** ./node_modules/reactcss/lib/autoprefix.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.autoprefix = undefined;

var _forOwn2 = __webpack_require__(/*! lodash/forOwn */ "./node_modules/lodash/forOwn.js");

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transforms = {
  borderRadius: function borderRadius(value) {
    return {
      msBorderRadius: value,
      MozBorderRadius: value,
      OBorderRadius: value,
      WebkitBorderRadius: value,
      borderRadius: value
    };
  },
  boxShadow: function boxShadow(value) {
    return {
      msBoxShadow: value,
      MozBoxShadow: value,
      OBoxShadow: value,
      WebkitBoxShadow: value,
      boxShadow: value
    };
  },
  userSelect: function userSelect(value) {
    return {
      WebkitTouchCallout: value,
      KhtmlUserSelect: value,
      MozUserSelect: value,
      msUserSelect: value,
      WebkitUserSelect: value,
      userSelect: value
    };
  },

  flex: function flex(value) {
    return {
      WebkitBoxFlex: value,
      MozBoxFlex: value,
      WebkitFlex: value,
      msFlex: value,
      flex: value
    };
  },
  flexBasis: function flexBasis(value) {
    return {
      WebkitFlexBasis: value,
      flexBasis: value
    };
  },
  justifyContent: function justifyContent(value) {
    return {
      WebkitJustifyContent: value,
      justifyContent: value
    };
  },

  transition: function transition(value) {
    return {
      msTransition: value,
      MozTransition: value,
      OTransition: value,
      WebkitTransition: value,
      transition: value
    };
  },

  transform: function transform(value) {
    return {
      msTransform: value,
      MozTransform: value,
      OTransform: value,
      WebkitTransform: value,
      transform: value
    };
  },
  absolute: function absolute(value) {
    var direction = value && value.split(' ');
    return {
      position: 'absolute',
      top: direction && direction[0],
      right: direction && direction[1],
      bottom: direction && direction[2],
      left: direction && direction[3]
    };
  },
  extend: function extend(name, otherElementStyles) {
    var otherStyle = otherElementStyles[name];
    if (otherStyle) {
      return otherStyle;
    }
    return {
      'extend': name
    };
  }
};

var autoprefix = exports.autoprefix = function autoprefix(elements) {
  var prefixed = {};
  (0, _forOwn3.default)(elements, function (styles, element) {
    var expanded = {};
    (0, _forOwn3.default)(styles, function (value, key) {
      var transform = transforms[key];
      if (transform) {
        expanded = _extends({}, expanded, transform(value));
      } else {
        expanded[key] = value;
      }
    });
    prefixed[element] = expanded;
  });
  return prefixed;
};

exports["default"] = autoprefix;

/***/ }),

/***/ "./node_modules/reactcss/lib/components/active.js":
/*!********************************************************!*\
  !*** ./node_modules/reactcss/lib/components/active.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.active = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var active = exports.active = function active(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';

  return function (_React$Component) {
    _inherits(Active, _React$Component);

    function Active() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Active);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Active.__proto__ || Object.getPrototypeOf(Active)).call.apply(_ref, [this].concat(args))), _this), _this.state = { active: false }, _this.handleMouseDown = function () {
        return _this.setState({ active: true });
      }, _this.handleMouseUp = function () {
        return _this.setState({ active: false });
      }, _this.render = function () {
        return _react2.default.createElement(
          Span,
          { onMouseDown: _this.handleMouseDown, onMouseUp: _this.handleMouseUp },
          _react2.default.createElement(Component, _extends({}, _this.props, _this.state))
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Active;
  }(_react2.default.Component);
};

exports["default"] = active;

/***/ }),

/***/ "./node_modules/reactcss/lib/components/hover.js":
/*!*******************************************************!*\
  !*** ./node_modules/reactcss/lib/components/hover.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hover = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hover = exports.hover = function hover(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';

  return function (_React$Component) {
    _inherits(Hover, _React$Component);

    function Hover() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Hover);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hover.__proto__ || Object.getPrototypeOf(Hover)).call.apply(_ref, [this].concat(args))), _this), _this.state = { hover: false }, _this.handleMouseOver = function () {
        return _this.setState({ hover: true });
      }, _this.handleMouseOut = function () {
        return _this.setState({ hover: false });
      }, _this.render = function () {
        return _react2.default.createElement(
          Span,
          { onMouseOver: _this.handleMouseOver, onMouseOut: _this.handleMouseOut },
          _react2.default.createElement(Component, _extends({}, _this.props, _this.state))
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Hover;
  }(_react2.default.Component);
};

exports["default"] = hover;

/***/ }),

/***/ "./node_modules/reactcss/lib/flattenNames.js":
/*!***************************************************!*\
  !*** ./node_modules/reactcss/lib/flattenNames.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.flattenNames = undefined;

var _isString2 = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");

var _isString3 = _interopRequireDefault(_isString2);

var _forOwn2 = __webpack_require__(/*! lodash/forOwn */ "./node_modules/lodash/forOwn.js");

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _isPlainObject2 = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _map2 = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flattenNames = exports.flattenNames = function flattenNames() {
  var things = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var names = [];

  (0, _map3.default)(things, function (thing) {
    if (Array.isArray(thing)) {
      flattenNames(thing).map(function (name) {
        return names.push(name);
      });
    } else if ((0, _isPlainObject3.default)(thing)) {
      (0, _forOwn3.default)(thing, function (value, key) {
        value === true && names.push(key);
        names.push(key + '-' + value);
      });
    } else if ((0, _isString3.default)(thing)) {
      names.push(thing);
    }
  });

  return names;
};

exports["default"] = flattenNames;

/***/ }),

/***/ "./node_modules/reactcss/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/reactcss/lib/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ReactCSS = exports.loop = exports.handleActive = exports.handleHover = exports.hover = undefined;

var _flattenNames = __webpack_require__(/*! ./flattenNames */ "./node_modules/reactcss/lib/flattenNames.js");

var _flattenNames2 = _interopRequireDefault(_flattenNames);

var _mergeClasses = __webpack_require__(/*! ./mergeClasses */ "./node_modules/reactcss/lib/mergeClasses.js");

var _mergeClasses2 = _interopRequireDefault(_mergeClasses);

var _autoprefix = __webpack_require__(/*! ./autoprefix */ "./node_modules/reactcss/lib/autoprefix.js");

var _autoprefix2 = _interopRequireDefault(_autoprefix);

var _hover2 = __webpack_require__(/*! ./components/hover */ "./node_modules/reactcss/lib/components/hover.js");

var _hover3 = _interopRequireDefault(_hover2);

var _active = __webpack_require__(/*! ./components/active */ "./node_modules/reactcss/lib/components/active.js");

var _active2 = _interopRequireDefault(_active);

var _loop2 = __webpack_require__(/*! ./loop */ "./node_modules/reactcss/lib/loop.js");

var _loop3 = _interopRequireDefault(_loop2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.hover = _hover3.default;
exports.handleHover = _hover3.default;
exports.handleActive = _active2.default;
exports.loop = _loop3.default;
var ReactCSS = exports.ReactCSS = function ReactCSS(classes) {
  for (var _len = arguments.length, activations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    activations[_key - 1] = arguments[_key];
  }

  var activeNames = (0, _flattenNames2.default)(activations);
  var merged = (0, _mergeClasses2.default)(classes, activeNames);
  return (0, _autoprefix2.default)(merged);
};

exports["default"] = ReactCSS;

/***/ }),

/***/ "./node_modules/reactcss/lib/loop.js":
/*!*******************************************!*\
  !*** ./node_modules/reactcss/lib/loop.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var loopable = function loopable(i, length) {
  var props = {};
  var setProp = function setProp(name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    props[name] = value;
  };

  i === 0 && setProp('first-child');
  i === length - 1 && setProp('last-child');
  (i === 0 || i % 2 === 0) && setProp('even');
  Math.abs(i % 2) === 1 && setProp('odd');
  setProp('nth-child', i);

  return props;
};

exports["default"] = loopable;

/***/ }),

/***/ "./node_modules/reactcss/lib/mergeClasses.js":
/*!***************************************************!*\
  !*** ./node_modules/reactcss/lib/mergeClasses.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mergeClasses = undefined;

var _forOwn2 = __webpack_require__(/*! lodash/forOwn */ "./node_modules/lodash/forOwn.js");

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _cloneDeep2 = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mergeClasses = exports.mergeClasses = function mergeClasses(classes) {
  var activeNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var styles = classes.default && (0, _cloneDeep3.default)(classes.default) || {};
  activeNames.map(function (name) {
    var toMerge = classes[name];
    if (toMerge) {
      (0, _forOwn3.default)(toMerge, function (value, key) {
        if (!styles[key]) {
          styles[key] = {};
        }

        styles[key] = _extends({}, styles[key], toMerge[key]);
      });
    }

    return name;
  });
  return styles;
};

exports["default"] = mergeClasses;

/***/ }),

/***/ "./node_modules/speak-tts/lib/speak-tts.js":
/*!*************************************************!*\
  !*** ./node_modules/speak-tts/lib/speak-tts.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/speak-tts/lib/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SpeakTTS =
/*#__PURE__*/
function () {
  function SpeakTTS() {
    _classCallCheck(this, SpeakTTS);

    this.browserSupport = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
    this.synthesisVoice = null;
  }

  _createClass(SpeakTTS, [{
    key: "init",
    value: function init() {
      var _this = this;

      var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        if (!_this.browserSupport) {
          reject('Your browser does not support Speech Synthesis');
        }

        var listeners = (0, _utils.isNil)(conf.listeners) ? {} : conf.listeners;
        var splitSentences = (0, _utils.isNil)(conf.splitSentences) ? true : conf.splitSentences;
        var lang = (0, _utils.isNil)(conf.lang) ? undefined : conf.lang;
        var volume = (0, _utils.isNil)(conf.volume) ? 1 : conf.volume;
        var rate = (0, _utils.isNil)(conf.rate) ? 1 : conf.rate;
        var pitch = (0, _utils.isNil)(conf.pitch) ? 1 : conf.pitch;
        var voice = (0, _utils.isNil)(conf.voice) ? undefined : conf.voice; // Attach event listeners

        Object.keys(listeners).forEach(function (listener) {
          var fn = listeners[listener];

          var newListener = function newListener(data) {
            fn && fn(data);
          };

          if (listener !== 'onvoiceschanged') {
            speechSynthesis[listener] = newListener;
          }
        });

        _this._loadVoices().then(function (voices) {
          // Handle callback onvoiceschanged by hand
          listeners['onvoiceschanged'] && listeners['onvoiceschanged'](voices); // Initialize values if necessary

          !(0, _utils.isNil)(lang) && _this.setLanguage(lang);
          !(0, _utils.isNil)(voice) && _this.setVoice(voice);
          !(0, _utils.isNil)(volume) && _this.setVolume(volume);
          !(0, _utils.isNil)(rate) && _this.setRate(rate);
          !(0, _utils.isNil)(pitch) && _this.setPitch(pitch);
          !(0, _utils.isNil)(splitSentences) && _this.setSplitSentences(splitSentences);
          resolve({
            voices: voices,
            lang: _this.lang,
            voice: _this.voice,
            volume: _this.volume,
            rate: _this.rate,
            pitch: _this.pitch,
            splitSentences: _this.splitSentences,
            browserSupport: _this.browserSupport
          });
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: "_fetchVoices",
    value: function _fetchVoices() {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var voices = speechSynthesis.getVoices();

          if ((0, _utils.size)(voices) > 0) {
            return resolve(voices);
          } else {
            return reject("Could not fetch voices");
          }
        }, 100);
      });
    }
  }, {
    key: "_loadVoices",
    value: function _loadVoices() {
      var _this2 = this;

      var remainingAttempts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      return this._fetchVoices().catch(function (error) {
        if (remainingAttempts === 0) throw error;
        return _this2._loadVoices(remainingAttempts - 1);
      });
    }
  }, {
    key: "hasBrowserSupport",
    value: function hasBrowserSupport() {
      return this.browserSupport;
    }
  }, {
    key: "setVoice",
    value: function setVoice(voice) {
      var synthesisVoice;
      var voices = speechSynthesis.getVoices(); // set voice by name

      if ((0, _utils.isString)(voice)) {
        synthesisVoice = voices.find(function (v) {
          return v.name === voice;
        });
      } // Set the voice in conf if found


      if ((0, _utils.isObject)(voice)) {
        synthesisVoice = voice;
      }

      if (synthesisVoice) {
        this.synthesisVoice = synthesisVoice;
      } else {
        throw 'Error setting voice. The voice you passed is not valid or the voices have not been loaded yet.';
      }
    }
  }, {
    key: "setLanguage",
    value: function setLanguage(lang) {
      lang = lang.replace('_', '-'); // some Android versions seem to ignore BCP 47 and use an underscore character in language tag

      if ((0, _utils.validateLocale)(lang)) {
        this.lang = lang;
      } else {
        throw 'Error setting language. Please verify your locale is BCP47 format (http://schneegans.de/lv/?tags=es-FR&format=text)';
      }
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      volume = parseFloat(volume);

      if (!(0, _utils.isNan)(volume) && volume >= 0 && volume <= 1) {
        this.volume = volume;
      } else {
        throw 'Error setting volume. Please verify your volume value is a number between 0 and 1.';
      }
    }
  }, {
    key: "setRate",
    value: function setRate(rate) {
      rate = parseFloat(rate);

      if (!(0, _utils.isNan)(rate) && rate >= 0 && rate <= 10) {
        this.rate = rate;
      } else {
        throw 'Error setting rate. Please verify your volume value is a number between 0 and 10.';
      }
    }
  }, {
    key: "setPitch",
    value: function setPitch(pitch) {
      pitch = parseFloat(pitch);

      if (!(0, _utils.isNan)(pitch) && pitch >= 0 && pitch <= 2) {
        this.pitch = pitch;
      } else {
        throw 'Error setting pitch. Please verify your pitch value is a number between 0 and 2.';
      }
    }
  }, {
    key: "setSplitSentences",
    value: function setSplitSentences(splitSentences) {
      this.splitSentences = splitSentences;
    }
  }, {
    key: "speak",
    value: function speak(data) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var text = data.text,
            _data$listeners = data.listeners,
            listeners = _data$listeners === void 0 ? {} : _data$listeners,
            _data$queue = data.queue,
            queue = _data$queue === void 0 ? true : _data$queue;
        var msg = (0, _utils.trim)(text);
        if ((0, _utils.isNil)(msg)) resolve(); // Stop current speech

        !queue && _this3.cancel(); // Split into sentences (for better result and bug with some versions of chrome)

        var utterances = [];
        var sentences = _this3.splitSentences ? (0, _utils.splitSentences)(msg) : [msg];
        sentences.forEach(function (sentence, index) {
          var isLast = index === (0, _utils.size)(sentences) - 1;
          var utterance = new SpeechSynthesisUtterance();
          if (_this3.synthesisVoice) utterance.voice = _this3.synthesisVoice;
          if (_this3.lang) utterance.lang = _this3.lang;
          if (_this3.volume) utterance.volume = _this3.volume; // 0 to 1

          if (_this3.rate) utterance.rate = _this3.rate; // 0.1 to 10

          if (_this3.pitch) utterance.pitch = _this3.pitch; //0 to 2

          utterance.text = sentence; // Attach event listeners

          Object.keys(listeners).forEach(function (listener) {
            var fn = listeners[listener];

            var newListener = function newListener(data) {
              fn && fn(data);

              if (listener === 'onerror') {
                reject({
                  utterances: utterances,
                  lastUtterance: utterance,
                  error: data
                });
              }

              if (listener === 'onend') {
                if (isLast) resolve({
                  utterances: utterances,
                  lastUtterance: utterance
                });
              }
            };

            utterance[listener] = newListener;
          });
          utterances.push(utterance);
          speechSynthesis.speak(utterance);
        });
      });
    }
  }, {
    key: "pending",
    value: function pending() {
      return speechSynthesis.pending;
    }
  }, {
    key: "paused",
    value: function paused() {
      return speechSynthesis.paused;
    }
  }, {
    key: "speaking",
    value: function speaking() {
      return speechSynthesis.speaking;
    }
  }, {
    key: "pause",
    value: function pause() {
      speechSynthesis.pause();
    }
  }, {
    key: "resume",
    value: function resume() {
      speechSynthesis.resume();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      speechSynthesis.cancel();
    }
  }]);

  return SpeakTTS;
}();

var _default = SpeakTTS;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/speak-tts/lib/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/speak-tts/lib/utils.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.trim = exports.isObject = exports.isNil = exports.isNan = exports.size = exports.isString = exports.validateLocale = exports.splitSentences = void 0;

var splitSentences = function splitSentences() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return text.replace(/\.+/g, '.|').replace(/\?/g, '?|').replace(/\!/g, '!|').split("|").map(function (sentence) {
    return trim(sentence);
  }).filter(Boolean);
};

exports.splitSentences = splitSentences;
var bcp47LocalePattern = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i; // eslint-disable-line max-len

/**
 * Validate a locale string to test if it is bcp47 compliant
 * @param {String} locale The tag locale to parse
 * @return {Boolean} True if tag is bcp47 compliant false otherwise
 */

var validateLocale = function validateLocale(locale) {
  return typeof locale !== 'string' ? false : bcp47LocalePattern.test(locale);
};

exports.validateLocale = validateLocale;

var isString = function isString(value) {
  return typeof value === 'string' || value instanceof String;
};

exports.isString = isString;

var size = function size(value) {
  return value && Array.isArray(value) && value.length ? value.length : 0;
};

exports.size = size;

var isNan = function isNan(value) {
  return typeof value === "number" && isNaN(value);
};

exports.isNan = isNan;

var isNil = function isNil(value) {
  return value === null || value === undefined;
};

exports.isNil = isNil;

var isObject = function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};

exports.isObject = isObject;

var trim = function trim(value) {
  return isString(value) ? value.trim() : '';
};

exports.trim = trim;

/***/ }),

/***/ "./node_modules/tinycolor2/tinycolor.js":
/*!**********************************************!*\
  !*** ./node_modules/tinycolor2/tinycolor.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");



/**
 * Import the stylesheet for the plugin.
 */

 // Render the App component into the DOM

(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById('accessibly'));
}();
/******/ })()
;
//# sourceMappingURL=index.js.map