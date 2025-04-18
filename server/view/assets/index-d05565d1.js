var dw = Object.defineProperty;
var fw = (e, t, n) =>
  t in e
    ? dw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Ti = (e, t, n) => (fw(e, typeof t != "symbol" ? t + "" : t, n), n);
function pw(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function wy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var by = { exports: {} },
  ql = {},
  Cy = { exports: {} },
  we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ws = Symbol.for("react.element"),
  hw = Symbol.for("react.portal"),
  mw = Symbol.for("react.fragment"),
  gw = Symbol.for("react.strict_mode"),
  yw = Symbol.for("react.profiler"),
  vw = Symbol.for("react.provider"),
  Sw = Symbol.for("react.context"),
  ww = Symbol.for("react.forward_ref"),
  bw = Symbol.for("react.suspense"),
  Cw = Symbol.for("react.memo"),
  xw = Symbol.for("react.lazy"),
  mh = Symbol.iterator;
function kw(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mh && e[mh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xy = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ky = Object.assign,
  Ey = {};
function yi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ey),
    (this.updater = n || xy);
}
yi.prototype.isReactComponent = {};
yi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
yi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Py() {}
Py.prototype = yi.prototype;
function xf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ey),
    (this.updater = n || xy);
}
var kf = (xf.prototype = new Py());
kf.constructor = xf;
ky(kf, yi.prototype);
kf.isPureReactComponent = !0;
var gh = Array.isArray,
  Ry = Object.prototype.hasOwnProperty,
  Ef = { current: null },
  Ty = { key: !0, ref: !0, __self: !0, __source: !0 };
function $y(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ry.call(t, r) && !Ty.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Ws,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Ef.current,
  };
}
function Ew(e, t) {
  return {
    $$typeof: Ws,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Pf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ws;
}
function Pw(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var yh = /\/+/g;
function sc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Pw("" + e.key)
    : t.toString(36);
}
function Ma(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ws:
          case hw:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + sc(s, 0) : r),
      gh(o)
        ? ((n = ""),
          e != null && (n = e.replace(yh, "$&/") + "/"),
          Ma(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Pf(o) &&
            (o = Ew(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(yh, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), gh(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + sc(i, a);
      s += Ma(i, t, n, l, o);
    }
  else if (((l = kw(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + sc(i, a++)), (s += Ma(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function aa(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ma(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Rw(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Vt = { current: null },
  Ia = { transition: null },
  Tw = {
    ReactCurrentDispatcher: Vt,
    ReactCurrentBatchConfig: Ia,
    ReactCurrentOwner: Ef,
  };
function Oy() {
  throw Error("act(...) is not supported in production builds of React.");
}
we.Children = {
  map: aa,
  forEach: function (e, t, n) {
    aa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      aa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      aa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Pf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
we.Component = yi;
we.Fragment = mw;
we.Profiler = yw;
we.PureComponent = xf;
we.StrictMode = gw;
we.Suspense = bw;
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tw;
we.act = Oy;
we.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ky({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Ef.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Ry.call(t, l) &&
        !Ty.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ws, type: e.type, key: o, ref: i, props: r, _owner: s };
};
we.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: vw, _context: e }),
    (e.Consumer = e)
  );
};
we.createElement = $y;
we.createFactory = function (e) {
  var t = $y.bind(null, e);
  return (t.type = e), t;
};
we.createRef = function () {
  return { current: null };
};
we.forwardRef = function (e) {
  return { $$typeof: ww, render: e };
};
we.isValidElement = Pf;
we.lazy = function (e) {
  return { $$typeof: xw, _payload: { _status: -1, _result: e }, _init: Rw };
};
we.memo = function (e, t) {
  return { $$typeof: Cw, type: e, compare: t === void 0 ? null : t };
};
we.startTransition = function (e) {
  var t = Ia.transition;
  Ia.transition = {};
  try {
    e();
  } finally {
    Ia.transition = t;
  }
};
we.unstable_act = Oy;
we.useCallback = function (e, t) {
  return Vt.current.useCallback(e, t);
};
we.useContext = function (e) {
  return Vt.current.useContext(e);
};
we.useDebugValue = function () {};
we.useDeferredValue = function (e) {
  return Vt.current.useDeferredValue(e);
};
we.useEffect = function (e, t) {
  return Vt.current.useEffect(e, t);
};
we.useId = function () {
  return Vt.current.useId();
};
we.useImperativeHandle = function (e, t, n) {
  return Vt.current.useImperativeHandle(e, t, n);
};
we.useInsertionEffect = function (e, t) {
  return Vt.current.useInsertionEffect(e, t);
};
we.useLayoutEffect = function (e, t) {
  return Vt.current.useLayoutEffect(e, t);
};
we.useMemo = function (e, t) {
  return Vt.current.useMemo(e, t);
};
we.useReducer = function (e, t, n) {
  return Vt.current.useReducer(e, t, n);
};
we.useRef = function (e) {
  return Vt.current.useRef(e);
};
we.useState = function (e) {
  return Vt.current.useState(e);
};
we.useSyncExternalStore = function (e, t, n) {
  return Vt.current.useSyncExternalStore(e, t, n);
};
we.useTransition = function () {
  return Vt.current.useTransition();
};
we.version = "18.3.1";
Cy.exports = we;
var S = Cy.exports;
const ve = wy(S),
  tl = pw({ __proto__: null, default: ve }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $w = S,
  Ow = Symbol.for("react.element"),
  Mw = Symbol.for("react.fragment"),
  Iw = Object.prototype.hasOwnProperty,
  Aw = $w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Nw = { key: !0, ref: !0, __self: !0, __source: !0 };
function My(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Iw.call(t, r) && !Nw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Ow,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Aw.current,
  };
}
ql.Fragment = Mw;
ql.jsx = My;
ql.jsxs = My;
by.exports = ql;
var Rf = by.exports;
const Zc = Rf.Fragment,
  x = Rf.jsx,
  J = Rf.jsxs;
var ed = {},
  Iy = { exports: {} },
  cn = {},
  Ay = { exports: {} },
  Ny = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(U, z) {
    var G = U.length;
    U.push(z);
    e: for (; 0 < G; ) {
      var Z = (G - 1) >>> 1,
        oe = U[Z];
      if (0 < o(oe, z)) (U[Z] = z), (U[G] = oe), (G = Z);
      else break e;
    }
  }
  function n(U) {
    return U.length === 0 ? null : U[0];
  }
  function r(U) {
    if (U.length === 0) return null;
    var z = U[0],
      G = U.pop();
    if (G !== z) {
      U[0] = G;
      e: for (var Z = 0, oe = U.length, fe = oe >>> 1; Z < fe; ) {
        var ue = 2 * (Z + 1) - 1,
          pe = U[ue],
          ke = ue + 1,
          Ee = U[ke];
        if (0 > o(pe, G))
          ke < oe && 0 > o(Ee, pe)
            ? ((U[Z] = Ee), (U[ke] = G), (Z = ke))
            : ((U[Z] = pe), (U[ue] = G), (Z = ue));
        else if (ke < oe && 0 > o(Ee, G)) (U[Z] = Ee), (U[ke] = G), (Z = ke);
        else break e;
      }
    }
    return z;
  }
  function o(U, z) {
    var G = U.sortIndex - z.sortIndex;
    return G !== 0 ? G : U.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    d = 1,
    c = null,
    f = 3,
    w = !1,
    y = !1,
    v = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(U) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= U)
        r(u), (z.sortIndex = z.expirationTime), t(l, z);
      else break;
      z = n(u);
    }
  }
  function b(U) {
    if (((v = !1), m(U), !y))
      if (n(l) !== null) (y = !0), L(k);
      else {
        var z = n(u);
        z !== null && V(b, z.startTime - U);
      }
  }
  function k(U, z) {
    (y = !1), v && ((v = !1), h(T), (T = -1)), (w = !0);
    var G = f;
    try {
      for (
        m(z), c = n(l);
        c !== null && (!(c.expirationTime > z) || (U && !O()));

      ) {
        var Z = c.callback;
        if (typeof Z == "function") {
          (c.callback = null), (f = c.priorityLevel);
          var oe = Z(c.expirationTime <= z);
          (z = e.unstable_now()),
            typeof oe == "function" ? (c.callback = oe) : c === n(l) && r(l),
            m(z);
        } else r(l);
        c = n(l);
      }
      if (c !== null) var fe = !0;
      else {
        var ue = n(u);
        ue !== null && V(b, ue.startTime - z), (fe = !1);
      }
      return fe;
    } finally {
      (c = null), (f = G), (w = !1);
    }
  }
  var P = !1,
    R = null,
    T = -1,
    M = 5,
    g = -1;
  function O() {
    return !(e.unstable_now() - g < M);
  }
  function I() {
    if (R !== null) {
      var U = e.unstable_now();
      g = U;
      var z = !0;
      try {
        z = R(!0, U);
      } finally {
        z ? _() : ((P = !1), (R = null));
      }
    } else P = !1;
  }
  var _;
  if (typeof p == "function")
    _ = function () {
      p(I);
    };
  else if (typeof MessageChannel < "u") {
    var W = new MessageChannel(),
      A = W.port2;
    (W.port1.onmessage = I),
      (_ = function () {
        A.postMessage(null);
      });
  } else
    _ = function () {
      C(I, 0);
    };
  function L(U) {
    (R = U), P || ((P = !0), _());
  }
  function V(U, z) {
    T = C(function () {
      U(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (U) {
      U.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || w || ((y = !0), L(k));
    }),
    (e.unstable_forceFrameRate = function (U) {
      0 > U || 125 < U
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < U ? Math.floor(1e3 / U) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (U) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = f;
      }
      var G = f;
      f = z;
      try {
        return U();
      } finally {
        f = G;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (U, z) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var G = f;
      f = U;
      try {
        return z();
      } finally {
        f = G;
      }
    }),
    (e.unstable_scheduleCallback = function (U, z, G) {
      var Z = e.unstable_now();
      switch (
        (typeof G == "object" && G !== null
          ? ((G = G.delay), (G = typeof G == "number" && 0 < G ? Z + G : Z))
          : (G = Z),
        U)
      ) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return (
        (oe = G + oe),
        (U = {
          id: d++,
          callback: z,
          priorityLevel: U,
          startTime: G,
          expirationTime: oe,
          sortIndex: -1,
        }),
        G > Z
          ? ((U.sortIndex = G),
            t(u, U),
            n(l) === null &&
              U === n(u) &&
              (v ? (h(T), (T = -1)) : (v = !0), V(b, G - Z)))
          : ((U.sortIndex = oe), t(l, U), y || w || ((y = !0), L(k))),
        U
      );
    }),
    (e.unstable_shouldYield = O),
    (e.unstable_wrapCallback = function (U) {
      var z = f;
      return function () {
        var G = f;
        f = z;
        try {
          return U.apply(this, arguments);
        } finally {
          f = G;
        }
      };
    });
})(Ny);
Ay.exports = Ny;
var _w = Ay.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lw = S,
  un = _w;
function K(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var _y = new Set(),
  ms = {};
function xo(e, t) {
  si(e, t), si(e + "Capture", t);
}
function si(e, t) {
  for (ms[e] = t, e = 0; e < t.length; e++) _y.add(t[e]);
}
var ar = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  td = Object.prototype.hasOwnProperty,
  Fw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  vh = {},
  Sh = {};
function Bw(e) {
  return td.call(Sh, e)
    ? !0
    : td.call(vh, e)
    ? !1
    : Fw.test(e)
    ? (Sh[e] = !0)
    : ((vh[e] = !0), !1);
}
function Dw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function zw(e, t, n, r) {
  if (t === null || typeof t > "u" || Dw(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function jt(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var $t = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    $t[e] = new jt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  $t[t] = new jt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  $t[e] = new jt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  $t[e] = new jt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    $t[e] = new jt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  $t[e] = new jt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  $t[e] = new jt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  $t[e] = new jt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  $t[e] = new jt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Tf = /[\-:]([a-z])/g;
function $f(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Tf, $f);
    $t[t] = new jt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Tf, $f);
    $t[t] = new jt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Tf, $f);
  $t[t] = new jt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  $t[e] = new jt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$t.xlinkHref = new jt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  $t[e] = new jt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Of(e, t, n, r) {
  var o = $t.hasOwnProperty(t) ? $t[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zw(t, n, o, r) && (n = null),
    r || o === null
      ? Bw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var mr = Lw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  la = Symbol.for("react.element"),
  Bo = Symbol.for("react.portal"),
  Do = Symbol.for("react.fragment"),
  Mf = Symbol.for("react.strict_mode"),
  nd = Symbol.for("react.profiler"),
  Ly = Symbol.for("react.provider"),
  Fy = Symbol.for("react.context"),
  If = Symbol.for("react.forward_ref"),
  rd = Symbol.for("react.suspense"),
  od = Symbol.for("react.suspense_list"),
  Af = Symbol.for("react.memo"),
  Cr = Symbol.for("react.lazy"),
  By = Symbol.for("react.offscreen"),
  wh = Symbol.iterator;
function $i(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wh && e[wh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xe = Object.assign,
  ac;
function Gi(e) {
  if (ac === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ac = (t && t[1]) || "";
    }
  return (
    `
` +
    ac +
    e
  );
}
var lc = !1;
function uc(e, t) {
  if (!e || lc) return "";
  lc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (lc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Gi(e) : "";
}
function Uw(e) {
  switch (e.tag) {
    case 5:
      return Gi(e.type);
    case 16:
      return Gi("Lazy");
    case 13:
      return Gi("Suspense");
    case 19:
      return Gi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = uc(e.type, !1)), e;
    case 11:
      return (e = uc(e.type.render, !1)), e;
    case 1:
      return (e = uc(e.type, !0)), e;
    default:
      return "";
  }
}
function id(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Do:
      return "Fragment";
    case Bo:
      return "Portal";
    case nd:
      return "Profiler";
    case Mf:
      return "StrictMode";
    case rd:
      return "Suspense";
    case od:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Fy:
        return (e.displayName || "Context") + ".Consumer";
      case Ly:
        return (e._context.displayName || "Context") + ".Provider";
      case If:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Af:
        return (
          (t = e.displayName || null), t !== null ? t : id(e.type) || "Memo"
        );
      case Cr:
        (t = e._payload), (e = e._init);
        try {
          return id(e(t));
        } catch {}
    }
  return null;
}
function Ww(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return id(t);
    case 8:
      return t === Mf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ur(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Dy(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Vw(e) {
  var t = Dy(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ua(e) {
  e._valueTracker || (e._valueTracker = Vw(e));
}
function zy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Dy(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function nl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function sd(e, t) {
  var n = t.checked;
  return Xe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function bh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ur(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Uy(e, t) {
  (t = t.checked), t != null && Of(e, "checked", t, !1);
}
function ad(e, t) {
  Uy(e, t);
  var n = Ur(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ld(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ld(e, t.type, Ur(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ch(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ld(e, t, n) {
  (t !== "number" || nl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yi = Array.isArray;
function Xo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ur(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ud(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(K(91));
  return Xe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function xh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(K(92));
      if (Yi(n)) {
        if (1 < n.length) throw Error(K(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ur(n) };
}
function Wy(e, t) {
  var n = Ur(t.value),
    r = Ur(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function kh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function cd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ca,
  jy = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ca = ca || document.createElement("div"),
          ca.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ca.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function gs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ts = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  jw = ["Webkit", "ms", "Moz", "O"];
Object.keys(ts).forEach(function (e) {
  jw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ts[t] = ts[e]);
  });
});
function Hy(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ts.hasOwnProperty(e) && ts[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ky(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Hy(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Hw = Xe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function dd(e, t) {
  if (t) {
    if (Hw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(K(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(K(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(K(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(K(62));
  }
}
function fd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var pd = null;
function Nf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var hd = null,
  Jo = null,
  Zo = null;
function Eh(e) {
  if ((e = Hs(e))) {
    if (typeof hd != "function") throw Error(K(280));
    var t = e.stateNode;
    t && ((t = Jl(t)), hd(e.stateNode, e.type, t));
  }
}
function qy(e) {
  Jo ? (Zo ? Zo.push(e) : (Zo = [e])) : (Jo = e);
}
function Gy() {
  if (Jo) {
    var e = Jo,
      t = Zo;
    if (((Zo = Jo = null), Eh(e), t)) for (e = 0; e < t.length; e++) Eh(t[e]);
  }
}
function Yy(e, t) {
  return e(t);
}
function Qy() {}
var cc = !1;
function Xy(e, t, n) {
  if (cc) return e(t, n);
  cc = !0;
  try {
    return Yy(e, t, n);
  } finally {
    (cc = !1), (Jo !== null || Zo !== null) && (Qy(), Gy());
  }
}
function ys(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Jl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(K(231, t, typeof n));
  return n;
}
var md = !1;
if (ar)
  try {
    var Oi = {};
    Object.defineProperty(Oi, "passive", {
      get: function () {
        md = !0;
      },
    }),
      window.addEventListener("test", Oi, Oi),
      window.removeEventListener("test", Oi, Oi);
  } catch {
    md = !1;
  }
function Kw(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var ns = !1,
  rl = null,
  ol = !1,
  gd = null,
  qw = {
    onError: function (e) {
      (ns = !0), (rl = e);
    },
  };
function Gw(e, t, n, r, o, i, s, a, l) {
  (ns = !1), (rl = null), Kw.apply(qw, arguments);
}
function Yw(e, t, n, r, o, i, s, a, l) {
  if ((Gw.apply(this, arguments), ns)) {
    if (ns) {
      var u = rl;
      (ns = !1), (rl = null);
    } else throw Error(K(198));
    ol || ((ol = !0), (gd = u));
  }
}
function ko(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Jy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ph(e) {
  if (ko(e) !== e) throw Error(K(188));
}
function Qw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ko(e)), t === null)) throw Error(K(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Ph(o), e;
        if (i === r) return Ph(o), t;
        i = i.sibling;
      }
      throw Error(K(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(K(189));
      }
    }
    if (n.alternate !== r) throw Error(K(190));
  }
  if (n.tag !== 3) throw Error(K(188));
  return n.stateNode.current === n ? e : t;
}
function Zy(e) {
  return (e = Qw(e)), e !== null ? ev(e) : null;
}
function ev(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ev(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var tv = un.unstable_scheduleCallback,
  Rh = un.unstable_cancelCallback,
  Xw = un.unstable_shouldYield,
  Jw = un.unstable_requestPaint,
  ot = un.unstable_now,
  Zw = un.unstable_getCurrentPriorityLevel,
  _f = un.unstable_ImmediatePriority,
  nv = un.unstable_UserBlockingPriority,
  il = un.unstable_NormalPriority,
  eb = un.unstable_LowPriority,
  rv = un.unstable_IdlePriority,
  Gl = null,
  qn = null;
function tb(e) {
  if (qn && typeof qn.onCommitFiberRoot == "function")
    try {
      qn.onCommitFiberRoot(Gl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var On = Math.clz32 ? Math.clz32 : ob,
  nb = Math.log,
  rb = Math.LN2;
function ob(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((nb(e) / rb) | 0)) | 0;
}
var da = 64,
  fa = 4194304;
function Qi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function sl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = Qi(a)) : ((i &= s), i !== 0 && (r = Qi(i)));
  } else (s = n & ~o), s !== 0 ? (r = Qi(s)) : i !== 0 && (r = Qi(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - On(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function ib(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function sb(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - On(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = ib(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function yd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ov() {
  var e = da;
  return (da <<= 1), !(da & 4194240) && (da = 64), e;
}
function dc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Vs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - On(t)),
    (e[t] = n);
}
function ab(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - On(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Lf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - On(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Ie = 0;
function iv(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var sv,
  Ff,
  av,
  lv,
  uv,
  vd = !1,
  pa = [],
  Mr = null,
  Ir = null,
  Ar = null,
  vs = new Map(),
  Ss = new Map(),
  kr = [],
  lb =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Th(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mr = null;
      break;
    case "dragenter":
    case "dragleave":
      Ir = null;
      break;
    case "mouseover":
    case "mouseout":
      Ar = null;
      break;
    case "pointerover":
    case "pointerout":
      vs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ss.delete(t.pointerId);
  }
}
function Mi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Hs(t)), t !== null && Ff(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function ub(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Mr = Mi(Mr, e, t, n, r, o)), !0;
    case "dragenter":
      return (Ir = Mi(Ir, e, t, n, r, o)), !0;
    case "mouseover":
      return (Ar = Mi(Ar, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return vs.set(i, Mi(vs.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Ss.set(i, Mi(Ss.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function cv(e) {
  var t = io(e.target);
  if (t !== null) {
    var n = ko(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Jy(n)), t !== null)) {
          (e.blockedOn = t),
            uv(e.priority, function () {
              av(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Aa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Sd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (pd = r), n.target.dispatchEvent(r), (pd = null);
    } else return (t = Hs(n)), t !== null && Ff(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $h(e, t, n) {
  Aa(e) && n.delete(t);
}
function cb() {
  (vd = !1),
    Mr !== null && Aa(Mr) && (Mr = null),
    Ir !== null && Aa(Ir) && (Ir = null),
    Ar !== null && Aa(Ar) && (Ar = null),
    vs.forEach($h),
    Ss.forEach($h);
}
function Ii(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    vd ||
      ((vd = !0),
      un.unstable_scheduleCallback(un.unstable_NormalPriority, cb)));
}
function ws(e) {
  function t(o) {
    return Ii(o, e);
  }
  if (0 < pa.length) {
    Ii(pa[0], e);
    for (var n = 1; n < pa.length; n++) {
      var r = pa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Mr !== null && Ii(Mr, e),
      Ir !== null && Ii(Ir, e),
      Ar !== null && Ii(Ar, e),
      vs.forEach(t),
      Ss.forEach(t),
      n = 0;
    n < kr.length;
    n++
  )
    (r = kr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kr.length && ((n = kr[0]), n.blockedOn === null); )
    cv(n), n.blockedOn === null && kr.shift();
}
var ei = mr.ReactCurrentBatchConfig,
  al = !0;
function db(e, t, n, r) {
  var o = Ie,
    i = ei.transition;
  ei.transition = null;
  try {
    (Ie = 1), Bf(e, t, n, r);
  } finally {
    (Ie = o), (ei.transition = i);
  }
}
function fb(e, t, n, r) {
  var o = Ie,
    i = ei.transition;
  ei.transition = null;
  try {
    (Ie = 4), Bf(e, t, n, r);
  } finally {
    (Ie = o), (ei.transition = i);
  }
}
function Bf(e, t, n, r) {
  if (al) {
    var o = Sd(e, t, n, r);
    if (o === null) bc(e, t, r, ll, n), Th(e, r);
    else if (ub(o, e, t, n, r)) r.stopPropagation();
    else if ((Th(e, r), t & 4 && -1 < lb.indexOf(e))) {
      for (; o !== null; ) {
        var i = Hs(o);
        if (
          (i !== null && sv(i),
          (i = Sd(e, t, n, r)),
          i === null && bc(e, t, r, ll, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else bc(e, t, r, null, n);
  }
}
var ll = null;
function Sd(e, t, n, r) {
  if (((ll = null), (e = Nf(r)), (e = io(e)), e !== null))
    if (((t = ko(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Jy(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ll = e), null;
}
function dv(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Zw()) {
        case _f:
          return 1;
        case nv:
          return 4;
        case il:
        case eb:
          return 16;
        case rv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Rr = null,
  Df = null,
  Na = null;
function fv() {
  if (Na) return Na;
  var e,
    t = Df,
    n = t.length,
    r,
    o = "value" in Rr ? Rr.value : Rr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Na = o.slice(e, 1 < r ? 1 - r : void 0));
}
function _a(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ha() {
  return !0;
}
function Oh() {
  return !1;
}
function dn(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ha
        : Oh),
      (this.isPropagationStopped = Oh),
      this
    );
  }
  return (
    Xe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ha));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ha));
      },
      persist: function () {},
      isPersistent: ha,
    }),
    t
  );
}
var vi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zf = dn(vi),
  js = Xe({}, vi, { view: 0, detail: 0 }),
  pb = dn(js),
  fc,
  pc,
  Ai,
  Yl = Xe({}, js, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Uf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ai &&
            (Ai && e.type === "mousemove"
              ? ((fc = e.screenX - Ai.screenX), (pc = e.screenY - Ai.screenY))
              : (pc = fc = 0),
            (Ai = e)),
          fc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : pc;
    },
  }),
  Mh = dn(Yl),
  hb = Xe({}, Yl, { dataTransfer: 0 }),
  mb = dn(hb),
  gb = Xe({}, js, { relatedTarget: 0 }),
  hc = dn(gb),
  yb = Xe({}, vi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vb = dn(yb),
  Sb = Xe({}, vi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  wb = dn(Sb),
  bb = Xe({}, vi, { data: 0 }),
  Ih = dn(bb),
  Cb = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  xb = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  kb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Eb(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = kb[e]) ? !!t[e] : !1;
}
function Uf() {
  return Eb;
}
var Pb = Xe({}, js, {
    key: function (e) {
      if (e.key) {
        var t = Cb[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _a(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? xb[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Uf,
    charCode: function (e) {
      return e.type === "keypress" ? _a(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _a(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Rb = dn(Pb),
  Tb = Xe({}, Yl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ah = dn(Tb),
  $b = Xe({}, js, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Uf,
  }),
  Ob = dn($b),
  Mb = Xe({}, vi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ib = dn(Mb),
  Ab = Xe({}, Yl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Nb = dn(Ab),
  _b = [9, 13, 27, 32],
  Wf = ar && "CompositionEvent" in window,
  rs = null;
ar && "documentMode" in document && (rs = document.documentMode);
var Lb = ar && "TextEvent" in window && !rs,
  pv = ar && (!Wf || (rs && 8 < rs && 11 >= rs)),
  Nh = String.fromCharCode(32),
  _h = !1;
function hv(e, t) {
  switch (e) {
    case "keyup":
      return _b.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function mv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var zo = !1;
function Fb(e, t) {
  switch (e) {
    case "compositionend":
      return mv(t);
    case "keypress":
      return t.which !== 32 ? null : ((_h = !0), Nh);
    case "textInput":
      return (e = t.data), e === Nh && _h ? null : e;
    default:
      return null;
  }
}
function Bb(e, t) {
  if (zo)
    return e === "compositionend" || (!Wf && hv(e, t))
      ? ((e = fv()), (Na = Df = Rr = null), (zo = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return pv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Db = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Lh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Db[e.type] : t === "textarea";
}
function gv(e, t, n, r) {
  qy(r),
    (t = ul(t, "onChange")),
    0 < t.length &&
      ((n = new zf("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var os = null,
  bs = null;
function zb(e) {
  Rv(e, 0);
}
function Ql(e) {
  var t = Vo(e);
  if (zy(t)) return e;
}
function Ub(e, t) {
  if (e === "change") return t;
}
var yv = !1;
if (ar) {
  var mc;
  if (ar) {
    var gc = "oninput" in document;
    if (!gc) {
      var Fh = document.createElement("div");
      Fh.setAttribute("oninput", "return;"),
        (gc = typeof Fh.oninput == "function");
    }
    mc = gc;
  } else mc = !1;
  yv = mc && (!document.documentMode || 9 < document.documentMode);
}
function Bh() {
  os && (os.detachEvent("onpropertychange", vv), (bs = os = null));
}
function vv(e) {
  if (e.propertyName === "value" && Ql(bs)) {
    var t = [];
    gv(t, bs, e, Nf(e)), Xy(zb, t);
  }
}
function Wb(e, t, n) {
  e === "focusin"
    ? (Bh(), (os = t), (bs = n), os.attachEvent("onpropertychange", vv))
    : e === "focusout" && Bh();
}
function Vb(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ql(bs);
}
function jb(e, t) {
  if (e === "click") return Ql(t);
}
function Hb(e, t) {
  if (e === "input" || e === "change") return Ql(t);
}
function Kb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var An = typeof Object.is == "function" ? Object.is : Kb;
function Cs(e, t) {
  if (An(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!td.call(t, o) || !An(e[o], t[o])) return !1;
  }
  return !0;
}
function Dh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zh(e, t) {
  var n = Dh(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Dh(n);
  }
}
function Sv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Sv(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function wv() {
  for (var e = window, t = nl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = nl(e.document);
  }
  return t;
}
function Vf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function qb(e) {
  var t = wv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Sv(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Vf(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = zh(n, i));
        var s = zh(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Gb = ar && "documentMode" in document && 11 >= document.documentMode,
  Uo = null,
  wd = null,
  is = null,
  bd = !1;
function Uh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bd ||
    Uo == null ||
    Uo !== nl(r) ||
    ((r = Uo),
    "selectionStart" in r && Vf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (is && Cs(is, r)) ||
      ((is = r),
      (r = ul(wd, "onSelect")),
      0 < r.length &&
        ((t = new zf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Uo))));
}
function ma(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Wo = {
    animationend: ma("Animation", "AnimationEnd"),
    animationiteration: ma("Animation", "AnimationIteration"),
    animationstart: ma("Animation", "AnimationStart"),
    transitionend: ma("Transition", "TransitionEnd"),
  },
  yc = {},
  bv = {};
ar &&
  ((bv = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wo.animationend.animation,
    delete Wo.animationiteration.animation,
    delete Wo.animationstart.animation),
  "TransitionEvent" in window || delete Wo.transitionend.transition);
function Xl(e) {
  if (yc[e]) return yc[e];
  if (!Wo[e]) return e;
  var t = Wo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in bv) return (yc[e] = t[n]);
  return e;
}
var Cv = Xl("animationend"),
  xv = Xl("animationiteration"),
  kv = Xl("animationstart"),
  Ev = Xl("transitionend"),
  Pv = new Map(),
  Wh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function jr(e, t) {
  Pv.set(e, t), xo(t, [e]);
}
for (var vc = 0; vc < Wh.length; vc++) {
  var Sc = Wh[vc],
    Yb = Sc.toLowerCase(),
    Qb = Sc[0].toUpperCase() + Sc.slice(1);
  jr(Yb, "on" + Qb);
}
jr(Cv, "onAnimationEnd");
jr(xv, "onAnimationIteration");
jr(kv, "onAnimationStart");
jr("dblclick", "onDoubleClick");
jr("focusin", "onFocus");
jr("focusout", "onBlur");
jr(Ev, "onTransitionEnd");
si("onMouseEnter", ["mouseout", "mouseover"]);
si("onMouseLeave", ["mouseout", "mouseover"]);
si("onPointerEnter", ["pointerout", "pointerover"]);
si("onPointerLeave", ["pointerout", "pointerover"]);
xo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
xo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
xo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
xo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
xo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Xi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Xb = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));
function Vh(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Yw(r, t, void 0, e), (e.currentTarget = null);
}
function Rv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Vh(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Vh(o, a, u), (i = l);
        }
    }
  }
  if (ol) throw ((e = gd), (ol = !1), (gd = null), e);
}
function je(e, t) {
  var n = t[Pd];
  n === void 0 && (n = t[Pd] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Tv(t, e, 2, !1), n.add(r));
}
function wc(e, t, n) {
  var r = 0;
  t && (r |= 4), Tv(n, e, r, t);
}
var ga = "_reactListening" + Math.random().toString(36).slice(2);
function xs(e) {
  if (!e[ga]) {
    (e[ga] = !0),
      _y.forEach(function (n) {
        n !== "selectionchange" && (Xb.has(n) || wc(n, !1, e), wc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ga] || ((t[ga] = !0), wc("selectionchange", !1, t));
  }
}
function Tv(e, t, n, r) {
  switch (dv(t)) {
    case 1:
      var o = db;
      break;
    case 4:
      o = fb;
      break;
    default:
      o = Bf;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !md ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function bc(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = io(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Xy(function () {
    var u = i,
      d = Nf(n),
      c = [];
    e: {
      var f = Pv.get(e);
      if (f !== void 0) {
        var w = zf,
          y = e;
        switch (e) {
          case "keypress":
            if (_a(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Rb;
            break;
          case "focusin":
            (y = "focus"), (w = hc);
            break;
          case "focusout":
            (y = "blur"), (w = hc);
            break;
          case "beforeblur":
          case "afterblur":
            w = hc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Mh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = mb;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Ob;
            break;
          case Cv:
          case xv:
          case kv:
            w = vb;
            break;
          case Ev:
            w = Ib;
            break;
          case "scroll":
            w = pb;
            break;
          case "wheel":
            w = Nb;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = wb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Ah;
        }
        var v = (t & 4) !== 0,
          C = !v && e === "scroll",
          h = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var b = m.stateNode;
          if (
            (m.tag === 5 &&
              b !== null &&
              ((m = b),
              h !== null && ((b = ys(p, h)), b != null && v.push(ks(p, b, m)))),
            C)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((f = new w(f, y, null, n, d)), c.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          f &&
            n !== pd &&
            (y = n.relatedTarget || n.fromElement) &&
            (io(y) || y[lr]))
        )
          break e;
        if (
          (w || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          w
            ? ((y = n.relatedTarget || n.toElement),
              (w = u),
              (y = y ? io(y) : null),
              y !== null &&
                ((C = ko(y)), y !== C || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((w = null), (y = u)),
          w !== y)
        ) {
          if (
            ((v = Mh),
            (b = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Ah),
              (b = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (C = w == null ? f : Vo(w)),
            (m = y == null ? f : Vo(y)),
            (f = new v(b, p + "leave", w, n, d)),
            (f.target = C),
            (f.relatedTarget = m),
            (b = null),
            io(d) === u &&
              ((v = new v(h, p + "enter", y, n, d)),
              (v.target = m),
              (v.relatedTarget = C),
              (b = v)),
            (C = b),
            w && y)
          )
            t: {
              for (v = w, h = y, p = 0, m = v; m; m = Ro(m)) p++;
              for (m = 0, b = h; b; b = Ro(b)) m++;
              for (; 0 < p - m; ) (v = Ro(v)), p--;
              for (; 0 < m - p; ) (h = Ro(h)), m--;
              for (; p--; ) {
                if (v === h || (h !== null && v === h.alternate)) break t;
                (v = Ro(v)), (h = Ro(h));
              }
              v = null;
            }
          else v = null;
          w !== null && jh(c, f, w, v, !1),
            y !== null && C !== null && jh(c, C, y, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? Vo(u) : window),
          (w = f.nodeName && f.nodeName.toLowerCase()),
          w === "select" || (w === "input" && f.type === "file"))
        )
          var k = Ub;
        else if (Lh(f))
          if (yv) k = Hb;
          else {
            k = Vb;
            var P = Wb;
          }
        else
          (w = f.nodeName) &&
            w.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (k = jb);
        if (k && (k = k(e, u))) {
          gv(c, k, n, d);
          break e;
        }
        P && P(e, f, u),
          e === "focusout" &&
            (P = f._wrapperState) &&
            P.controlled &&
            f.type === "number" &&
            ld(f, "number", f.value);
      }
      switch (((P = u ? Vo(u) : window), e)) {
        case "focusin":
          (Lh(P) || P.contentEditable === "true") &&
            ((Uo = P), (wd = u), (is = null));
          break;
        case "focusout":
          is = wd = Uo = null;
          break;
        case "mousedown":
          bd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (bd = !1), Uh(c, n, d);
          break;
        case "selectionchange":
          if (Gb) break;
        case "keydown":
        case "keyup":
          Uh(c, n, d);
      }
      var R;
      if (Wf)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        zo
          ? hv(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (pv &&
          n.locale !== "ko" &&
          (zo || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && zo && (R = fv())
            : ((Rr = d),
              (Df = "value" in Rr ? Rr.value : Rr.textContent),
              (zo = !0))),
        (P = ul(u, T)),
        0 < P.length &&
          ((T = new Ih(T, e, null, n, d)),
          c.push({ event: T, listeners: P }),
          R ? (T.data = R) : ((R = mv(n)), R !== null && (T.data = R)))),
        (R = Lb ? Fb(e, n) : Bb(e, n)) &&
          ((u = ul(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Ih("onBeforeInput", "beforeinput", null, n, d)),
            c.push({ event: d, listeners: u }),
            (d.data = R)));
    }
    Rv(c, t);
  });
}
function ks(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ul(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ys(e, n)),
      i != null && r.unshift(ks(e, i, o)),
      (i = ys(e, t)),
      i != null && r.push(ks(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Ro(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function jh(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = ys(n, i)), l != null && s.unshift(ks(n, l, a)))
        : o || ((l = ys(n, i)), l != null && s.push(ks(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Jb = /\r\n?/g,
  Zb = /\u0000|\uFFFD/g;
function Hh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Jb,
      `
`
    )
    .replace(Zb, "");
}
function ya(e, t, n) {
  if (((t = Hh(t)), Hh(e) !== t && n)) throw Error(K(425));
}
function cl() {}
var Cd = null,
  xd = null;
function kd(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ed = typeof setTimeout == "function" ? setTimeout : void 0,
  eC = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Kh = typeof Promise == "function" ? Promise : void 0,
  tC =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Kh < "u"
      ? function (e) {
          return Kh.resolve(null).then(e).catch(nC);
        }
      : Ed;
function nC(e) {
  setTimeout(function () {
    throw e;
  });
}
function Cc(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ws(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ws(t);
}
function Nr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Si = Math.random().toString(36).slice(2),
  Vn = "__reactFiber$" + Si,
  Es = "__reactProps$" + Si,
  lr = "__reactContainer$" + Si,
  Pd = "__reactEvents$" + Si,
  rC = "__reactListeners$" + Si,
  oC = "__reactHandles$" + Si;
function io(e) {
  var t = e[Vn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[lr] || n[Vn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qh(e); e !== null; ) {
          if ((n = e[Vn])) return n;
          e = qh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Hs(e) {
  return (
    (e = e[Vn] || e[lr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(K(33));
}
function Jl(e) {
  return e[Es] || null;
}
var Rd = [],
  jo = -1;
function Hr(e) {
  return { current: e };
}
function He(e) {
  0 > jo || ((e.current = Rd[jo]), (Rd[jo] = null), jo--);
}
function We(e, t) {
  jo++, (Rd[jo] = e.current), (e.current = t);
}
var Wr = {},
  Ft = Hr(Wr),
  Qt = Hr(!1),
  mo = Wr;
function ai(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Wr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Xt(e) {
  return (e = e.childContextTypes), e != null;
}
function dl() {
  He(Qt), He(Ft);
}
function Gh(e, t, n) {
  if (Ft.current !== Wr) throw Error(K(168));
  We(Ft, t), We(Qt, n);
}
function $v(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(K(108, Ww(e) || "Unknown", o));
  return Xe({}, n, r);
}
function fl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Wr),
    (mo = Ft.current),
    We(Ft, e),
    We(Qt, Qt.current),
    !0
  );
}
function Yh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(K(169));
  n
    ? ((e = $v(e, t, mo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      He(Qt),
      He(Ft),
      We(Ft, e))
    : He(Qt),
    We(Qt, n);
}
var nr = null,
  Zl = !1,
  xc = !1;
function Ov(e) {
  nr === null ? (nr = [e]) : nr.push(e);
}
function iC(e) {
  (Zl = !0), Ov(e);
}
function Kr() {
  if (!xc && nr !== null) {
    xc = !0;
    var e = 0,
      t = Ie;
    try {
      var n = nr;
      for (Ie = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (nr = null), (Zl = !1);
    } catch (o) {
      throw (nr !== null && (nr = nr.slice(e + 1)), tv(_f, Kr), o);
    } finally {
      (Ie = t), (xc = !1);
    }
  }
  return null;
}
var Ho = [],
  Ko = 0,
  pl = null,
  hl = 0,
  mn = [],
  gn = 0,
  go = null,
  or = 1,
  ir = "";
function Zr(e, t) {
  (Ho[Ko++] = hl), (Ho[Ko++] = pl), (pl = e), (hl = t);
}
function Mv(e, t, n) {
  (mn[gn++] = or), (mn[gn++] = ir), (mn[gn++] = go), (go = e);
  var r = or;
  e = ir;
  var o = 32 - On(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - On(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (or = (1 << (32 - On(t) + o)) | (n << o) | r),
      (ir = i + e);
  } else (or = (1 << i) | (n << o) | r), (ir = e);
}
function jf(e) {
  e.return !== null && (Zr(e, 1), Mv(e, 1, 0));
}
function Hf(e) {
  for (; e === pl; )
    (pl = Ho[--Ko]), (Ho[Ko] = null), (hl = Ho[--Ko]), (Ho[Ko] = null);
  for (; e === go; )
    (go = mn[--gn]),
      (mn[gn] = null),
      (ir = mn[--gn]),
      (mn[gn] = null),
      (or = mn[--gn]),
      (mn[gn] = null);
}
var sn = null,
  on = null,
  qe = !1,
  Tn = null;
function Iv(e, t) {
  var n = vn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (sn = e), (on = Nr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (sn = e), (on = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = go !== null ? { id: or, overflow: ir } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = vn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (sn = e),
            (on = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Td(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $d(e) {
  if (qe) {
    var t = on;
    if (t) {
      var n = t;
      if (!Qh(e, t)) {
        if (Td(e)) throw Error(K(418));
        t = Nr(n.nextSibling);
        var r = sn;
        t && Qh(e, t)
          ? Iv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (qe = !1), (sn = e));
      }
    } else {
      if (Td(e)) throw Error(K(418));
      (e.flags = (e.flags & -4097) | 2), (qe = !1), (sn = e);
    }
  }
}
function Xh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  sn = e;
}
function va(e) {
  if (e !== sn) return !1;
  if (!qe) return Xh(e), (qe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !kd(e.type, e.memoizedProps))),
    t && (t = on))
  ) {
    if (Td(e)) throw (Av(), Error(K(418)));
    for (; t; ) Iv(e, t), (t = Nr(t.nextSibling));
  }
  if ((Xh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(K(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              on = Nr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      on = null;
    }
  } else on = sn ? Nr(e.stateNode.nextSibling) : null;
  return !0;
}
function Av() {
  for (var e = on; e; ) e = Nr(e.nextSibling);
}
function li() {
  (on = sn = null), (qe = !1);
}
function Kf(e) {
  Tn === null ? (Tn = [e]) : Tn.push(e);
}
var sC = mr.ReactCurrentBatchConfig;
function Ni(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(K(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(K(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(K(284));
    if (!n._owner) throw Error(K(290, e));
  }
  return e;
}
function Sa(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      K(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Jh(e) {
  var t = e._init;
  return t(e._payload);
}
function Nv(e) {
  function t(h, p) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function o(h, p) {
    return (h = Br(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, p, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((h.flags |= 2), p) : m)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, p, m, b) {
    return p === null || p.tag !== 6
      ? ((p = Oc(m, h.mode, b)), (p.return = h), p)
      : ((p = o(p, m)), (p.return = h), p);
  }
  function l(h, p, m, b) {
    var k = m.type;
    return k === Do
      ? d(h, p, m.props.children, b, m.key)
      : p !== null &&
        (p.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Cr &&
            Jh(k) === p.type))
      ? ((b = o(p, m.props)), (b.ref = Ni(h, p, m)), (b.return = h), b)
      : ((b = Wa(m.type, m.key, m.props, null, h.mode, b)),
        (b.ref = Ni(h, p, m)),
        (b.return = h),
        b);
  }
  function u(h, p, m, b) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = Mc(m, h.mode, b)), (p.return = h), p)
      : ((p = o(p, m.children || [])), (p.return = h), p);
  }
  function d(h, p, m, b, k) {
    return p === null || p.tag !== 7
      ? ((p = po(m, h.mode, b, k)), (p.return = h), p)
      : ((p = o(p, m)), (p.return = h), p);
  }
  function c(h, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Oc("" + p, h.mode, m)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case la:
          return (
            (m = Wa(p.type, p.key, p.props, null, h.mode, m)),
            (m.ref = Ni(h, null, p)),
            (m.return = h),
            m
          );
        case Bo:
          return (p = Mc(p, h.mode, m)), (p.return = h), p;
        case Cr:
          var b = p._init;
          return c(h, b(p._payload), m);
      }
      if (Yi(p) || $i(p))
        return (p = po(p, h.mode, m, null)), (p.return = h), p;
      Sa(h, p);
    }
    return null;
  }
  function f(h, p, m, b) {
    var k = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return k !== null ? null : a(h, p, "" + m, b);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case la:
          return m.key === k ? l(h, p, m, b) : null;
        case Bo:
          return m.key === k ? u(h, p, m, b) : null;
        case Cr:
          return (k = m._init), f(h, p, k(m._payload), b);
      }
      if (Yi(m) || $i(m)) return k !== null ? null : d(h, p, m, b, null);
      Sa(h, m);
    }
    return null;
  }
  function w(h, p, m, b, k) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (h = h.get(m) || null), a(p, h, "" + b, k);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case la:
          return (h = h.get(b.key === null ? m : b.key) || null), l(p, h, b, k);
        case Bo:
          return (h = h.get(b.key === null ? m : b.key) || null), u(p, h, b, k);
        case Cr:
          var P = b._init;
          return w(h, p, m, P(b._payload), k);
      }
      if (Yi(b) || $i(b)) return (h = h.get(m) || null), d(p, h, b, k, null);
      Sa(p, b);
    }
    return null;
  }
  function y(h, p, m, b) {
    for (
      var k = null, P = null, R = p, T = (p = 0), M = null;
      R !== null && T < m.length;
      T++
    ) {
      R.index > T ? ((M = R), (R = null)) : (M = R.sibling);
      var g = f(h, R, m[T], b);
      if (g === null) {
        R === null && (R = M);
        break;
      }
      e && R && g.alternate === null && t(h, R),
        (p = i(g, p, T)),
        P === null ? (k = g) : (P.sibling = g),
        (P = g),
        (R = M);
    }
    if (T === m.length) return n(h, R), qe && Zr(h, T), k;
    if (R === null) {
      for (; T < m.length; T++)
        (R = c(h, m[T], b)),
          R !== null &&
            ((p = i(R, p, T)), P === null ? (k = R) : (P.sibling = R), (P = R));
      return qe && Zr(h, T), k;
    }
    for (R = r(h, R); T < m.length; T++)
      (M = w(R, h, T, m[T], b)),
        M !== null &&
          (e && M.alternate !== null && R.delete(M.key === null ? T : M.key),
          (p = i(M, p, T)),
          P === null ? (k = M) : (P.sibling = M),
          (P = M));
    return (
      e &&
        R.forEach(function (O) {
          return t(h, O);
        }),
      qe && Zr(h, T),
      k
    );
  }
  function v(h, p, m, b) {
    var k = $i(m);
    if (typeof k != "function") throw Error(K(150));
    if (((m = k.call(m)), m == null)) throw Error(K(151));
    for (
      var P = (k = null), R = p, T = (p = 0), M = null, g = m.next();
      R !== null && !g.done;
      T++, g = m.next()
    ) {
      R.index > T ? ((M = R), (R = null)) : (M = R.sibling);
      var O = f(h, R, g.value, b);
      if (O === null) {
        R === null && (R = M);
        break;
      }
      e && R && O.alternate === null && t(h, R),
        (p = i(O, p, T)),
        P === null ? (k = O) : (P.sibling = O),
        (P = O),
        (R = M);
    }
    if (g.done) return n(h, R), qe && Zr(h, T), k;
    if (R === null) {
      for (; !g.done; T++, g = m.next())
        (g = c(h, g.value, b)),
          g !== null &&
            ((p = i(g, p, T)), P === null ? (k = g) : (P.sibling = g), (P = g));
      return qe && Zr(h, T), k;
    }
    for (R = r(h, R); !g.done; T++, g = m.next())
      (g = w(R, h, T, g.value, b)),
        g !== null &&
          (e && g.alternate !== null && R.delete(g.key === null ? T : g.key),
          (p = i(g, p, T)),
          P === null ? (k = g) : (P.sibling = g),
          (P = g));
    return (
      e &&
        R.forEach(function (I) {
          return t(h, I);
        }),
      qe && Zr(h, T),
      k
    );
  }
  function C(h, p, m, b) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Do &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case la:
          e: {
            for (var k = m.key, P = p; P !== null; ) {
              if (P.key === k) {
                if (((k = m.type), k === Do)) {
                  if (P.tag === 7) {
                    n(h, P.sibling),
                      (p = o(P, m.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  P.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Cr &&
                    Jh(k) === P.type)
                ) {
                  n(h, P.sibling),
                    (p = o(P, m.props)),
                    (p.ref = Ni(h, P, m)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, P);
                break;
              } else t(h, P);
              P = P.sibling;
            }
            m.type === Do
              ? ((p = po(m.props.children, h.mode, b, m.key)),
                (p.return = h),
                (h = p))
              : ((b = Wa(m.type, m.key, m.props, null, h.mode, b)),
                (b.ref = Ni(h, p, m)),
                (b.return = h),
                (h = b));
          }
          return s(h);
        case Bo:
          e: {
            for (P = m.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(h, p.sibling),
                    (p = o(p, m.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = Mc(m, h.mode, b)), (p.return = h), (h = p);
          }
          return s(h);
        case Cr:
          return (P = m._init), C(h, p, P(m._payload), b);
      }
      if (Yi(m)) return y(h, p, m, b);
      if ($i(m)) return v(h, p, m, b);
      Sa(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, m)), (p.return = h), (h = p))
          : (n(h, p), (p = Oc(m, h.mode, b)), (p.return = h), (h = p)),
        s(h))
      : n(h, p);
  }
  return C;
}
var ui = Nv(!0),
  _v = Nv(!1),
  ml = Hr(null),
  gl = null,
  qo = null,
  qf = null;
function Gf() {
  qf = qo = gl = null;
}
function Yf(e) {
  var t = ml.current;
  He(ml), (e._currentValue = t);
}
function Od(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ti(e, t) {
  (gl = e),
    (qf = qo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Yt = !0), (e.firstContext = null));
}
function bn(e) {
  var t = e._currentValue;
  if (qf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), qo === null)) {
      if (gl === null) throw Error(K(308));
      (qo = e), (gl.dependencies = { lanes: 0, firstContext: e });
    } else qo = qo.next = e;
  return t;
}
var so = null;
function Qf(e) {
  so === null ? (so = [e]) : so.push(e);
}
function Lv(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Qf(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    ur(e, r)
  );
}
function ur(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var xr = !1;
function Xf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Fv(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function sr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function _r(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), xe & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      ur(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Qf(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    ur(e, n)
  );
}
function La(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Lf(e, n);
  }
}
function Zh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function yl(e, t, n, r) {
  var o = e.updateQueue;
  xr = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== s &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var c = o.baseState;
    (s = 0), (d = u = l = null), (a = i);
    do {
      var f = a.lane,
        w = a.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: w,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            v = a;
          switch (((f = t), (w = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                c = y.call(w, c, f);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (f = typeof y == "function" ? y.call(w, c, f) : y),
                f == null)
              )
                break e;
              c = Xe({}, c, f);
              break e;
            case 2:
              xr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (w = {
          eventTime: w,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = w), (l = c)) : (d = d.next = w),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (l = c),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (vo |= s), (e.lanes = s), (e.memoizedState = c);
  }
}
function em(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(K(191, o));
        o.call(r);
      }
    }
}
var Ks = {},
  Gn = Hr(Ks),
  Ps = Hr(Ks),
  Rs = Hr(Ks);
function ao(e) {
  if (e === Ks) throw Error(K(174));
  return e;
}
function Jf(e, t) {
  switch ((We(Rs, t), We(Ps, e), We(Gn, Ks), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cd(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = cd(t, e));
  }
  He(Gn), We(Gn, t);
}
function ci() {
  He(Gn), He(Ps), He(Rs);
}
function Bv(e) {
  ao(Rs.current);
  var t = ao(Gn.current),
    n = cd(t, e.type);
  t !== n && (We(Ps, e), We(Gn, n));
}
function Zf(e) {
  Ps.current === e && (He(Gn), He(Ps));
}
var Ye = Hr(0);
function vl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var kc = [];
function ep() {
  for (var e = 0; e < kc.length; e++)
    kc[e]._workInProgressVersionPrimary = null;
  kc.length = 0;
}
var Fa = mr.ReactCurrentDispatcher,
  Ec = mr.ReactCurrentBatchConfig,
  yo = 0,
  Qe = null,
  ht = null,
  vt = null,
  Sl = !1,
  ss = !1,
  Ts = 0,
  aC = 0;
function Ot() {
  throw Error(K(321));
}
function tp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!An(e[n], t[n])) return !1;
  return !0;
}
function np(e, t, n, r, o, i) {
  if (
    ((yo = i),
    (Qe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fa.current = e === null || e.memoizedState === null ? dC : fC),
    (e = n(r, o)),
    ss)
  ) {
    i = 0;
    do {
      if (((ss = !1), (Ts = 0), 25 <= i)) throw Error(K(301));
      (i += 1),
        (vt = ht = null),
        (t.updateQueue = null),
        (Fa.current = pC),
        (e = n(r, o));
    } while (ss);
  }
  if (
    ((Fa.current = wl),
    (t = ht !== null && ht.next !== null),
    (yo = 0),
    (vt = ht = Qe = null),
    (Sl = !1),
    t)
  )
    throw Error(K(300));
  return e;
}
function rp() {
  var e = Ts !== 0;
  return (Ts = 0), e;
}
function zn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return vt === null ? (Qe.memoizedState = vt = e) : (vt = vt.next = e), vt;
}
function Cn() {
  if (ht === null) {
    var e = Qe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ht.next;
  var t = vt === null ? Qe.memoizedState : vt.next;
  if (t !== null) (vt = t), (ht = e);
  else {
    if (e === null) throw Error(K(310));
    (ht = e),
      (e = {
        memoizedState: ht.memoizedState,
        baseState: ht.baseState,
        baseQueue: ht.baseQueue,
        queue: ht.queue,
        next: null,
      }),
      vt === null ? (Qe.memoizedState = vt = e) : (vt = vt.next = e);
  }
  return vt;
}
function $s(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Pc(e) {
  var t = Cn(),
    n = t.queue;
  if (n === null) throw Error(K(311));
  n.lastRenderedReducer = e;
  var r = ht,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var d = u.lane;
      if ((yo & d) === d)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = c), (s = r)) : (l = l.next = c),
          (Qe.lanes |= d),
          (vo |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      An(r, t.memoizedState) || (Yt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Qe.lanes |= i), (vo |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Rc(e) {
  var t = Cn(),
    n = t.queue;
  if (n === null) throw Error(K(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    An(i, t.memoizedState) || (Yt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Dv() {}
function zv(e, t) {
  var n = Qe,
    r = Cn(),
    o = t(),
    i = !An(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Yt = !0)),
    (r = r.queue),
    op(Vv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (vt !== null && vt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Os(9, Wv.bind(null, n, r, o, t), void 0, null),
      St === null)
    )
      throw Error(K(349));
    yo & 30 || Uv(n, t, o);
  }
  return o;
}
function Uv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Qe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Qe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Wv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), jv(t) && Hv(e);
}
function Vv(e, t, n) {
  return n(function () {
    jv(t) && Hv(e);
  });
}
function jv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !An(e, n);
  } catch {
    return !0;
  }
}
function Hv(e) {
  var t = ur(e, 1);
  t !== null && Mn(t, e, 1, -1);
}
function tm(e) {
  var t = zn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $s,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = cC.bind(null, Qe, e)),
    [t.memoizedState, e]
  );
}
function Os(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Qe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Qe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Kv() {
  return Cn().memoizedState;
}
function Ba(e, t, n, r) {
  var o = zn();
  (Qe.flags |= e),
    (o.memoizedState = Os(1 | t, n, void 0, r === void 0 ? null : r));
}
function eu(e, t, n, r) {
  var o = Cn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ht !== null) {
    var s = ht.memoizedState;
    if (((i = s.destroy), r !== null && tp(r, s.deps))) {
      o.memoizedState = Os(t, n, i, r);
      return;
    }
  }
  (Qe.flags |= e), (o.memoizedState = Os(1 | t, n, i, r));
}
function nm(e, t) {
  return Ba(8390656, 8, e, t);
}
function op(e, t) {
  return eu(2048, 8, e, t);
}
function qv(e, t) {
  return eu(4, 2, e, t);
}
function Gv(e, t) {
  return eu(4, 4, e, t);
}
function Yv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), eu(4, 4, Yv.bind(null, t, e), n)
  );
}
function ip() {}
function Xv(e, t) {
  var n = Cn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tp(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Jv(e, t) {
  var n = Cn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tp(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Zv(e, t, n) {
  return yo & 21
    ? (An(n, t) || ((n = ov()), (Qe.lanes |= n), (vo |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Yt = !0)), (e.memoizedState = n));
}
function lC(e, t) {
  var n = Ie;
  (Ie = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ec.transition;
  Ec.transition = {};
  try {
    e(!1), t();
  } finally {
    (Ie = n), (Ec.transition = r);
  }
}
function e0() {
  return Cn().memoizedState;
}
function uC(e, t, n) {
  var r = Fr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    t0(e))
  )
    n0(t, n);
  else if (((n = Lv(e, t, n, r)), n !== null)) {
    var o = Wt();
    Mn(n, e, r, o), r0(n, t, r);
  }
}
function cC(e, t, n) {
  var r = Fr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (t0(e)) n0(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), An(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Qf(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Lv(e, t, o, r)),
      n !== null && ((o = Wt()), Mn(n, e, r, o), r0(n, t, r));
  }
}
function t0(e) {
  var t = e.alternate;
  return e === Qe || (t !== null && t === Qe);
}
function n0(e, t) {
  ss = Sl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function r0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Lf(e, n);
  }
}
var wl = {
    readContext: bn,
    useCallback: Ot,
    useContext: Ot,
    useEffect: Ot,
    useImperativeHandle: Ot,
    useInsertionEffect: Ot,
    useLayoutEffect: Ot,
    useMemo: Ot,
    useReducer: Ot,
    useRef: Ot,
    useState: Ot,
    useDebugValue: Ot,
    useDeferredValue: Ot,
    useTransition: Ot,
    useMutableSource: Ot,
    useSyncExternalStore: Ot,
    useId: Ot,
    unstable_isNewReconciler: !1,
  },
  dC = {
    readContext: bn,
    useCallback: function (e, t) {
      return (zn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: bn,
    useEffect: nm,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ba(4194308, 4, Yv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ba(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ba(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = zn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = zn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = uC.bind(null, Qe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = zn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: tm,
    useDebugValue: ip,
    useDeferredValue: function (e) {
      return (zn().memoizedState = e);
    },
    useTransition: function () {
      var e = tm(!1),
        t = e[0];
      return (e = lC.bind(null, e[1])), (zn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Qe,
        o = zn();
      if (qe) {
        if (n === void 0) throw Error(K(407));
        n = n();
      } else {
        if (((n = t()), St === null)) throw Error(K(349));
        yo & 30 || Uv(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        nm(Vv.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Os(9, Wv.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = zn(),
        t = St.identifierPrefix;
      if (qe) {
        var n = ir,
          r = or;
        (n = (r & ~(1 << (32 - On(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ts++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = aC++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  fC = {
    readContext: bn,
    useCallback: Xv,
    useContext: bn,
    useEffect: op,
    useImperativeHandle: Qv,
    useInsertionEffect: qv,
    useLayoutEffect: Gv,
    useMemo: Jv,
    useReducer: Pc,
    useRef: Kv,
    useState: function () {
      return Pc($s);
    },
    useDebugValue: ip,
    useDeferredValue: function (e) {
      var t = Cn();
      return Zv(t, ht.memoizedState, e);
    },
    useTransition: function () {
      var e = Pc($s)[0],
        t = Cn().memoizedState;
      return [e, t];
    },
    useMutableSource: Dv,
    useSyncExternalStore: zv,
    useId: e0,
    unstable_isNewReconciler: !1,
  },
  pC = {
    readContext: bn,
    useCallback: Xv,
    useContext: bn,
    useEffect: op,
    useImperativeHandle: Qv,
    useInsertionEffect: qv,
    useLayoutEffect: Gv,
    useMemo: Jv,
    useReducer: Rc,
    useRef: Kv,
    useState: function () {
      return Rc($s);
    },
    useDebugValue: ip,
    useDeferredValue: function (e) {
      var t = Cn();
      return ht === null ? (t.memoizedState = e) : Zv(t, ht.memoizedState, e);
    },
    useTransition: function () {
      var e = Rc($s)[0],
        t = Cn().memoizedState;
      return [e, t];
    },
    useMutableSource: Dv,
    useSyncExternalStore: zv,
    useId: e0,
    unstable_isNewReconciler: !1,
  };
function Pn(e, t) {
  if (e && e.defaultProps) {
    (t = Xe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Md(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Xe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var tu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ko(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Wt(),
      o = Fr(e),
      i = sr(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = _r(e, i, o)),
      t !== null && (Mn(t, e, o, r), La(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Wt(),
      o = Fr(e),
      i = sr(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = _r(e, i, o)),
      t !== null && (Mn(t, e, o, r), La(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Wt(),
      r = Fr(e),
      o = sr(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = _r(e, o, r)),
      t !== null && (Mn(t, e, r, n), La(t, e, r));
  },
};
function rm(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Cs(n, r) || !Cs(o, i)
      : !0
  );
}
function o0(e, t, n) {
  var r = !1,
    o = Wr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = bn(i))
      : ((o = Xt(t) ? mo : Ft.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? ai(e, o) : Wr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = tu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function om(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && tu.enqueueReplaceState(t, t.state, null);
}
function Id(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Xf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = bn(i))
    : ((i = Xt(t) ? mo : Ft.current), (o.context = ai(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Md(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && tu.enqueueReplaceState(o, o.state, null),
      yl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function di(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Uw(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Tc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ad(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var hC = typeof WeakMap == "function" ? WeakMap : Map;
function i0(e, t, n) {
  (n = sr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Cl || ((Cl = !0), (Vd = r)), Ad(e, t);
    }),
    n
  );
}
function s0(e, t, n) {
  (n = sr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ad(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ad(e, t),
          typeof r != "function" &&
            (Lr === null ? (Lr = new Set([this])) : Lr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function im(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new hC();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = TC.bind(null, e, t, n)), t.then(e, e));
}
function sm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function am(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = sr(-1, 1)), (t.tag = 2), _r(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var mC = mr.ReactCurrentOwner,
  Yt = !1;
function zt(e, t, n, r) {
  t.child = e === null ? _v(t, null, n, r) : ui(t, e.child, n, r);
}
function lm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    ti(t, o),
    (r = np(e, t, n, r, i, o)),
    (n = rp()),
    e !== null && !Yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        cr(e, t, o))
      : (qe && n && jf(t), (t.flags |= 1), zt(e, t, r, o), t.child)
  );
}
function um(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !pp(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), a0(e, t, i, r, o))
      : ((e = Wa(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Cs), n(s, r) && e.ref === t.ref)
    )
      return cr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Br(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function a0(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Cs(i, r) && e.ref === t.ref)
      if (((Yt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Yt = !0);
      else return (t.lanes = e.lanes), cr(e, t, o);
  }
  return Nd(e, t, n, r, o);
}
function l0(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        We(Yo, tn),
        (tn |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          We(Yo, tn),
          (tn |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        We(Yo, tn),
        (tn |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      We(Yo, tn),
      (tn |= r);
  return zt(e, t, o, n), t.child;
}
function u0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Nd(e, t, n, r, o) {
  var i = Xt(n) ? mo : Ft.current;
  return (
    (i = ai(t, i)),
    ti(t, o),
    (n = np(e, t, n, r, i, o)),
    (r = rp()),
    e !== null && !Yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        cr(e, t, o))
      : (qe && r && jf(t), (t.flags |= 1), zt(e, t, n, o), t.child)
  );
}
function cm(e, t, n, r, o) {
  if (Xt(n)) {
    var i = !0;
    fl(t);
  } else i = !1;
  if ((ti(t, o), t.stateNode === null))
    Da(e, t), o0(t, n, r), Id(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = bn(u))
      : ((u = Xt(n) ? mo : Ft.current), (u = ai(t, u)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && om(t, s, r, u)),
      (xr = !1);
    var f = t.memoizedState;
    (s.state = f),
      yl(t, r, s, o),
      (l = t.memoizedState),
      a !== r || f !== l || Qt.current || xr
        ? (typeof d == "function" && (Md(t, n, d, r), (l = t.memoizedState)),
          (a = xr || rm(t, n, a, r, f, l, u))
            ? (c ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Fv(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Pn(t.type, a)),
      (s.props = u),
      (c = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = bn(l))
        : ((l = Xt(n) ? mo : Ft.current), (l = ai(t, l)));
    var w = n.getDerivedStateFromProps;
    (d =
      typeof w == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== c || f !== l) && om(t, s, r, l)),
      (xr = !1),
      (f = t.memoizedState),
      (s.state = f),
      yl(t, r, s, o);
    var y = t.memoizedState;
    a !== c || f !== y || Qt.current || xr
      ? (typeof w == "function" && (Md(t, n, w, r), (y = t.memoizedState)),
        (u = xr || rm(t, n, u, r, f, y, l) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return _d(e, t, n, r, i, o);
}
function _d(e, t, n, r, o, i) {
  u0(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Yh(t, n, !1), cr(e, t, i);
  (r = t.stateNode), (mC.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = ui(t, e.child, null, i)), (t.child = ui(t, null, a, i)))
      : zt(e, t, a, i),
    (t.memoizedState = r.state),
    o && Yh(t, n, !0),
    t.child
  );
}
function c0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Gh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Gh(e, t.context, !1),
    Jf(e, t.containerInfo);
}
function dm(e, t, n, r, o) {
  return li(), Kf(o), (t.flags |= 256), zt(e, t, n, r), t.child;
}
var Ld = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function d0(e, t, n) {
  var r = t.pendingProps,
    o = Ye.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    We(Ye, o & 1),
    e === null)
  )
    return (
      $d(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = ou(s, r, 0, null)),
              (e = po(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Fd(n)),
              (t.memoizedState = Ld),
              e)
            : sp(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return gC(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Br(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Br(a, i)) : ((i = po(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Fd(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ld),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Br(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function sp(e, t) {
  return (
    (t = ou({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function wa(e, t, n, r) {
  return (
    r !== null && Kf(r),
    ui(t, e.child, null, n),
    (e = sp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gC(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Tc(Error(K(422)))), wa(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = ou({ mode: "visible", children: r.children }, o, 0, null)),
        (i = po(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && ui(t, e.child, null, s),
        (t.child.memoizedState = Fd(s)),
        (t.memoizedState = Ld),
        i);
  if (!(t.mode & 1)) return wa(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(K(419))), (r = Tc(i, r, void 0)), wa(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Yt || a)) {
    if (((r = St), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), ur(e, o), Mn(r, e, o, -1));
    }
    return fp(), (r = Tc(Error(K(421)))), wa(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $C.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (on = Nr(o.nextSibling)),
      (sn = t),
      (qe = !0),
      (Tn = null),
      e !== null &&
        ((mn[gn++] = or),
        (mn[gn++] = ir),
        (mn[gn++] = go),
        (or = e.id),
        (ir = e.overflow),
        (go = t)),
      (t = sp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function fm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Od(e.return, t, n);
}
function $c(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function f0(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((zt(e, t, r.children, n), (r = Ye.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && fm(e, n, t);
        else if (e.tag === 19) fm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((We(Ye, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && vl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          $c(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && vl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        $c(t, !0, n, null, i);
        break;
      case "together":
        $c(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Da(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function cr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (vo |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(K(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Br(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Br(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function yC(e, t, n) {
  switch (t.tag) {
    case 3:
      c0(t), li();
      break;
    case 5:
      Bv(t);
      break;
    case 1:
      Xt(t.type) && fl(t);
      break;
    case 4:
      Jf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      We(ml, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (We(Ye, Ye.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? d0(e, t, n)
          : (We(Ye, Ye.current & 1),
            (e = cr(e, t, n)),
            e !== null ? e.sibling : null);
      We(Ye, Ye.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return f0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        We(Ye, Ye.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), l0(e, t, n);
  }
  return cr(e, t, n);
}
var p0, Bd, h0, m0;
p0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Bd = function () {};
h0 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), ao(Gn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = sd(e, o)), (r = sd(e, r)), (i = []);
        break;
      case "select":
        (o = Xe({}, o, { value: void 0 })),
          (r = Xe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ud(e, o)), (r = ud(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = cl);
    }
    dd(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ms.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ms.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && je("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
m0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _i(e, t) {
  if (!qe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Mt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function vC(e, t, n) {
  var r = t.pendingProps;
  switch ((Hf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Mt(t), null;
    case 1:
      return Xt(t.type) && dl(), Mt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ci(),
        He(Qt),
        He(Ft),
        ep(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (va(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Tn !== null && (Kd(Tn), (Tn = null)))),
        Bd(e, t),
        Mt(t),
        null
      );
    case 5:
      Zf(t);
      var o = ao(Rs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        h0(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(K(166));
          return Mt(t), null;
        }
        if (((e = ao(Gn.current)), va(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Vn] = t), (r[Es] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              je("cancel", r), je("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              je("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Xi.length; o++) je(Xi[o], r);
              break;
            case "source":
              je("error", r);
              break;
            case "img":
            case "image":
            case "link":
              je("error", r), je("load", r);
              break;
            case "details":
              je("toggle", r);
              break;
            case "input":
              bh(r, i), je("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                je("invalid", r);
              break;
            case "textarea":
              xh(r, i), je("invalid", r);
          }
          dd(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ya(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ya(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : ms.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  je("scroll", r);
            }
          switch (n) {
            case "input":
              ua(r), Ch(r, i, !0);
              break;
            case "textarea":
              ua(r), kh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = cl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vy(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Vn] = t),
            (e[Es] = r),
            p0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = fd(n, r)), n)) {
              case "dialog":
                je("cancel", e), je("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                je("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Xi.length; o++) je(Xi[o], e);
                o = r;
                break;
              case "source":
                je("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                je("error", e), je("load", e), (o = r);
                break;
              case "details":
                je("toggle", e), (o = r);
                break;
              case "input":
                bh(e, r), (o = sd(e, r)), je("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Xe({}, r, { value: void 0 })),
                  je("invalid", e);
                break;
              case "textarea":
                xh(e, r), (o = ud(e, r)), je("invalid", e);
                break;
              default:
                o = r;
            }
            dd(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Ky(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && jy(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && gs(e, l)
                    : typeof l == "number" && gs(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ms.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && je("scroll", e)
                      : l != null && Of(e, i, l, s));
              }
            switch (n) {
              case "input":
                ua(e), Ch(e, r, !1);
                break;
              case "textarea":
                ua(e), kh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ur(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Xo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Xo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = cl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Mt(t), null;
    case 6:
      if (e && t.stateNode != null) m0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(K(166));
        if (((n = ao(Rs.current)), ao(Gn.current), va(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Vn] = t),
            (i = r.nodeValue !== n) && ((e = sn), e !== null))
          )
            switch (e.tag) {
              case 3:
                ya(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ya(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Vn] = t),
            (t.stateNode = r);
      }
      return Mt(t), null;
    case 13:
      if (
        (He(Ye),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (qe && on !== null && t.mode & 1 && !(t.flags & 128))
          Av(), li(), (t.flags |= 98560), (i = !1);
        else if (((i = va(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(K(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(K(317));
            i[Vn] = t;
          } else
            li(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Mt(t), (i = !1);
        } else Tn !== null && (Kd(Tn), (Tn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ye.current & 1 ? gt === 0 && (gt = 3) : fp())),
          t.updateQueue !== null && (t.flags |= 4),
          Mt(t),
          null);
    case 4:
      return (
        ci(), Bd(e, t), e === null && xs(t.stateNode.containerInfo), Mt(t), null
      );
    case 10:
      return Yf(t.type._context), Mt(t), null;
    case 17:
      return Xt(t.type) && dl(), Mt(t), null;
    case 19:
      if ((He(Ye), (i = t.memoizedState), i === null)) return Mt(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) _i(i, !1);
        else {
          if (gt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = vl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    _i(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return We(Ye, (Ye.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ot() > fi &&
            ((t.flags |= 128), (r = !0), _i(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _i(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !qe)
            )
              return Mt(t), null;
          } else
            2 * ot() - i.renderingStartTime > fi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), _i(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ot()),
          (t.sibling = null),
          (n = Ye.current),
          We(Ye, r ? (n & 1) | 2 : n & 1),
          t)
        : (Mt(t), null);
    case 22:
    case 23:
      return (
        dp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? tn & 1073741824 && (Mt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Mt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(K(156, t.tag));
}
function SC(e, t) {
  switch ((Hf(t), t.tag)) {
    case 1:
      return (
        Xt(t.type) && dl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ci(),
        He(Qt),
        He(Ft),
        ep(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Zf(t), null;
    case 13:
      if (
        (He(Ye), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(K(340));
        li();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return He(Ye), null;
    case 4:
      return ci(), null;
    case 10:
      return Yf(t.type._context), null;
    case 22:
    case 23:
      return dp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ba = !1,
  At = !1,
  wC = typeof WeakSet == "function" ? WeakSet : Set,
  ee = null;
function Go(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        nt(e, t, r);
      }
    else n.current = null;
}
function Dd(e, t, n) {
  try {
    n();
  } catch (r) {
    nt(e, t, r);
  }
}
var pm = !1;
function bC(e, t) {
  if (((Cd = al), (e = wv()), Vf(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            d = 0,
            c = e,
            f = null;
          t: for (;;) {
            for (
              var w;
              c !== n || (o !== 0 && c.nodeType !== 3) || (a = s + o),
                c !== i || (r !== 0 && c.nodeType !== 3) || (l = s + r),
                c.nodeType === 3 && (s += c.nodeValue.length),
                (w = c.firstChild) !== null;

            )
              (f = c), (c = w);
            for (;;) {
              if (c === e) break t;
              if (
                (f === n && ++u === o && (a = s),
                f === i && ++d === r && (l = s),
                (w = c.nextSibling) !== null)
              )
                break;
              (c = f), (f = c.parentNode);
            }
            c = w;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    xd = { focusedElem: e, selectionRange: n }, al = !1, ee = t;
    ee !== null;

  )
    if (((t = ee), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (ee = e);
    else
      for (; ee !== null; ) {
        t = ee;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    C = y.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Pn(t.type, v),
                      C
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(K(163));
            }
        } catch (b) {
          nt(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (ee = e);
          break;
        }
        ee = t.return;
      }
  return (y = pm), (pm = !1), y;
}
function as(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Dd(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function nu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function zd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function g0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), g0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Vn], delete t[Es], delete t[Pd], delete t[rC], delete t[oC])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function y0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || y0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ud(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = cl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ud(e, t, n), e = e.sibling; e !== null; ) Ud(e, t, n), (e = e.sibling);
}
function Wd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wd(e, t, n), e = e.sibling; e !== null; ) Wd(e, t, n), (e = e.sibling);
}
var Et = null,
  Rn = !1;
function vr(e, t, n) {
  for (n = n.child; n !== null; ) v0(e, t, n), (n = n.sibling);
}
function v0(e, t, n) {
  if (qn && typeof qn.onCommitFiberUnmount == "function")
    try {
      qn.onCommitFiberUnmount(Gl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      At || Go(n, t);
    case 6:
      var r = Et,
        o = Rn;
      (Et = null),
        vr(e, t, n),
        (Et = r),
        (Rn = o),
        Et !== null &&
          (Rn
            ? ((e = Et),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Et.removeChild(n.stateNode));
      break;
    case 18:
      Et !== null &&
        (Rn
          ? ((e = Et),
            (n = n.stateNode),
            e.nodeType === 8
              ? Cc(e.parentNode, n)
              : e.nodeType === 1 && Cc(e, n),
            ws(e))
          : Cc(Et, n.stateNode));
      break;
    case 4:
      (r = Et),
        (o = Rn),
        (Et = n.stateNode.containerInfo),
        (Rn = !0),
        vr(e, t, n),
        (Et = r),
        (Rn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !At &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Dd(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      vr(e, t, n);
      break;
    case 1:
      if (
        !At &&
        (Go(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          nt(n, t, a);
        }
      vr(e, t, n);
      break;
    case 21:
      vr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((At = (r = At) || n.memoizedState !== null), vr(e, t, n), (At = r))
        : vr(e, t, n);
      break;
    default:
      vr(e, t, n);
  }
}
function mm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new wC()),
      t.forEach(function (r) {
        var o = OC.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function En(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Et = a.stateNode), (Rn = !1);
              break e;
            case 3:
              (Et = a.stateNode.containerInfo), (Rn = !0);
              break e;
            case 4:
              (Et = a.stateNode.containerInfo), (Rn = !0);
              break e;
          }
          a = a.return;
        }
        if (Et === null) throw Error(K(160));
        v0(i, s, o), (Et = null), (Rn = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        nt(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) S0(t, e), (t = t.sibling);
}
function S0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((En(t, e), Ln(e), r & 4)) {
        try {
          as(3, e, e.return), nu(3, e);
        } catch (v) {
          nt(e, e.return, v);
        }
        try {
          as(5, e, e.return);
        } catch (v) {
          nt(e, e.return, v);
        }
      }
      break;
    case 1:
      En(t, e), Ln(e), r & 512 && n !== null && Go(n, n.return);
      break;
    case 5:
      if (
        (En(t, e),
        Ln(e),
        r & 512 && n !== null && Go(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          gs(o, "");
        } catch (v) {
          nt(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Uy(o, i),
              fd(a, s);
            var u = fd(a, i);
            for (s = 0; s < l.length; s += 2) {
              var d = l[s],
                c = l[s + 1];
              d === "style"
                ? Ky(o, c)
                : d === "dangerouslySetInnerHTML"
                ? jy(o, c)
                : d === "children"
                ? gs(o, c)
                : Of(o, d, c, u);
            }
            switch (a) {
              case "input":
                ad(o, i);
                break;
              case "textarea":
                Wy(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Xo(o, !!i.multiple, w, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Xo(o, !!i.multiple, i.defaultValue, !0)
                      : Xo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Es] = i;
          } catch (v) {
            nt(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((En(t, e), Ln(e), r & 4)) {
        if (e.stateNode === null) throw Error(K(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          nt(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (En(t, e), Ln(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ws(t.containerInfo);
        } catch (v) {
          nt(e, e.return, v);
        }
      break;
    case 4:
      En(t, e), Ln(e);
      break;
    case 13:
      En(t, e),
        Ln(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (up = ot())),
        r & 4 && mm(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((At = (u = At) || d), En(t, e), (At = u)) : En(t, e),
        Ln(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (ee = e, d = e.child; d !== null; ) {
            for (c = ee = d; ee !== null; ) {
              switch (((f = ee), (w = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  as(4, f, f.return);
                  break;
                case 1:
                  Go(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      nt(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Go(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    ym(c);
                    continue;
                  }
              }
              w !== null ? ((w.return = f), (ee = w)) : ym(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (o = c.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = c.stateNode),
                      (l = c.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Hy("display", s)));
              } catch (v) {
                nt(e, e.return, v);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (v) {
                nt(e, e.return, v);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      En(t, e), Ln(e), r & 4 && mm(e);
      break;
    case 21:
      break;
    default:
      En(t, e), Ln(e);
  }
}
function Ln(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (y0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(K(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (gs(o, ""), (r.flags &= -33));
          var i = hm(e);
          Wd(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = hm(e);
          Ud(e, a, s);
          break;
        default:
          throw Error(K(161));
      }
    } catch (l) {
      nt(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function CC(e, t, n) {
  (ee = e), w0(e);
}
function w0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; ee !== null; ) {
    var o = ee,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ba;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || At;
        a = ba;
        var u = At;
        if (((ba = s), (At = l) && !u))
          for (ee = o; ee !== null; )
            (s = ee),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? vm(o)
                : l !== null
                ? ((l.return = s), (ee = l))
                : vm(o);
        for (; i !== null; ) (ee = i), w0(i), (i = i.sibling);
        (ee = o), (ba = a), (At = u);
      }
      gm(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (ee = i)) : gm(e);
  }
}
function gm(e) {
  for (; ee !== null; ) {
    var t = ee;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              At || nu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !At)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Pn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && em(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                em(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && ws(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(K(163));
          }
        At || (t.flags & 512 && zd(t));
      } catch (f) {
        nt(t, t.return, f);
      }
    }
    if (t === e) {
      ee = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (ee = n);
      break;
    }
    ee = t.return;
  }
}
function ym(e) {
  for (; ee !== null; ) {
    var t = ee;
    if (t === e) {
      ee = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (ee = n);
      break;
    }
    ee = t.return;
  }
}
function vm(e) {
  for (; ee !== null; ) {
    var t = ee;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            nu(4, t);
          } catch (l) {
            nt(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              nt(t, o, l);
            }
          }
          var i = t.return;
          try {
            zd(t);
          } catch (l) {
            nt(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            zd(t);
          } catch (l) {
            nt(t, s, l);
          }
      }
    } catch (l) {
      nt(t, t.return, l);
    }
    if (t === e) {
      ee = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (ee = a);
      break;
    }
    ee = t.return;
  }
}
var xC = Math.ceil,
  bl = mr.ReactCurrentDispatcher,
  ap = mr.ReactCurrentOwner,
  wn = mr.ReactCurrentBatchConfig,
  xe = 0,
  St = null,
  dt = null,
  Rt = 0,
  tn = 0,
  Yo = Hr(0),
  gt = 0,
  Ms = null,
  vo = 0,
  ru = 0,
  lp = 0,
  ls = null,
  Gt = null,
  up = 0,
  fi = 1 / 0,
  tr = null,
  Cl = !1,
  Vd = null,
  Lr = null,
  Ca = !1,
  Tr = null,
  xl = 0,
  us = 0,
  jd = null,
  za = -1,
  Ua = 0;
function Wt() {
  return xe & 6 ? ot() : za !== -1 ? za : (za = ot());
}
function Fr(e) {
  return e.mode & 1
    ? xe & 2 && Rt !== 0
      ? Rt & -Rt
      : sC.transition !== null
      ? (Ua === 0 && (Ua = ov()), Ua)
      : ((e = Ie),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : dv(e.type))),
        e)
    : 1;
}
function Mn(e, t, n, r) {
  if (50 < us) throw ((us = 0), (jd = null), Error(K(185)));
  Vs(e, n, r),
    (!(xe & 2) || e !== St) &&
      (e === St && (!(xe & 2) && (ru |= n), gt === 4 && Er(e, Rt)),
      Jt(e, r),
      n === 1 && xe === 0 && !(t.mode & 1) && ((fi = ot() + 500), Zl && Kr()));
}
function Jt(e, t) {
  var n = e.callbackNode;
  sb(e, t);
  var r = sl(e, e === St ? Rt : 0);
  if (r === 0)
    n !== null && Rh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Rh(n), t === 1))
      e.tag === 0 ? iC(Sm.bind(null, e)) : Ov(Sm.bind(null, e)),
        tC(function () {
          !(xe & 6) && Kr();
        }),
        (n = null);
    else {
      switch (iv(r)) {
        case 1:
          n = _f;
          break;
        case 4:
          n = nv;
          break;
        case 16:
          n = il;
          break;
        case 536870912:
          n = rv;
          break;
        default:
          n = il;
      }
      n = T0(n, b0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function b0(e, t) {
  if (((za = -1), (Ua = 0), xe & 6)) throw Error(K(327));
  var n = e.callbackNode;
  if (ni() && e.callbackNode !== n) return null;
  var r = sl(e, e === St ? Rt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = kl(e, r);
  else {
    t = r;
    var o = xe;
    xe |= 2;
    var i = x0();
    (St !== e || Rt !== t) && ((tr = null), (fi = ot() + 500), fo(e, t));
    do
      try {
        PC();
        break;
      } catch (a) {
        C0(e, a);
      }
    while (1);
    Gf(),
      (bl.current = i),
      (xe = o),
      dt !== null ? (t = 0) : ((St = null), (Rt = 0), (t = gt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = yd(e)), o !== 0 && ((r = o), (t = Hd(e, o)))), t === 1)
    )
      throw ((n = Ms), fo(e, 0), Er(e, r), Jt(e, ot()), n);
    if (t === 6) Er(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !kC(o) &&
          ((t = kl(e, r)),
          t === 2 && ((i = yd(e)), i !== 0 && ((r = i), (t = Hd(e, i)))),
          t === 1))
      )
        throw ((n = Ms), fo(e, 0), Er(e, r), Jt(e, ot()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(K(345));
        case 2:
          eo(e, Gt, tr);
          break;
        case 3:
          if (
            (Er(e, r), (r & 130023424) === r && ((t = up + 500 - ot()), 10 < t))
          ) {
            if (sl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Wt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Ed(eo.bind(null, e, Gt, tr), t);
            break;
          }
          eo(e, Gt, tr);
          break;
        case 4:
          if ((Er(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - On(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ot() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * xC(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ed(eo.bind(null, e, Gt, tr), r);
            break;
          }
          eo(e, Gt, tr);
          break;
        case 5:
          eo(e, Gt, tr);
          break;
        default:
          throw Error(K(329));
      }
    }
  }
  return Jt(e, ot()), e.callbackNode === n ? b0.bind(null, e) : null;
}
function Hd(e, t) {
  var n = ls;
  return (
    e.current.memoizedState.isDehydrated && (fo(e, t).flags |= 256),
    (e = kl(e, t)),
    e !== 2 && ((t = Gt), (Gt = n), t !== null && Kd(t)),
    e
  );
}
function Kd(e) {
  Gt === null ? (Gt = e) : Gt.push.apply(Gt, e);
}
function kC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!An(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Er(e, t) {
  for (
    t &= ~lp,
      t &= ~ru,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - On(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Sm(e) {
  if (xe & 6) throw Error(K(327));
  ni();
  var t = sl(e, 0);
  if (!(t & 1)) return Jt(e, ot()), null;
  var n = kl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = yd(e);
    r !== 0 && ((t = r), (n = Hd(e, r)));
  }
  if (n === 1) throw ((n = Ms), fo(e, 0), Er(e, t), Jt(e, ot()), n);
  if (n === 6) throw Error(K(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    eo(e, Gt, tr),
    Jt(e, ot()),
    null
  );
}
function cp(e, t) {
  var n = xe;
  xe |= 1;
  try {
    return e(t);
  } finally {
    (xe = n), xe === 0 && ((fi = ot() + 500), Zl && Kr());
  }
}
function So(e) {
  Tr !== null && Tr.tag === 0 && !(xe & 6) && ni();
  var t = xe;
  xe |= 1;
  var n = wn.transition,
    r = Ie;
  try {
    if (((wn.transition = null), (Ie = 1), e)) return e();
  } finally {
    (Ie = r), (wn.transition = n), (xe = t), !(xe & 6) && Kr();
  }
}
function dp() {
  (tn = Yo.current), He(Yo);
}
function fo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), eC(n)), dt !== null))
    for (n = dt.return; n !== null; ) {
      var r = n;
      switch ((Hf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && dl();
          break;
        case 3:
          ci(), He(Qt), He(Ft), ep();
          break;
        case 5:
          Zf(r);
          break;
        case 4:
          ci();
          break;
        case 13:
          He(Ye);
          break;
        case 19:
          He(Ye);
          break;
        case 10:
          Yf(r.type._context);
          break;
        case 22:
        case 23:
          dp();
      }
      n = n.return;
    }
  if (
    ((St = e),
    (dt = e = Br(e.current, null)),
    (Rt = tn = t),
    (gt = 0),
    (Ms = null),
    (lp = ru = vo = 0),
    (Gt = ls = null),
    so !== null)
  ) {
    for (t = 0; t < so.length; t++)
      if (((n = so[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    so = null;
  }
  return e;
}
function C0(e, t) {
  do {
    var n = dt;
    try {
      if ((Gf(), (Fa.current = wl), Sl)) {
        for (var r = Qe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Sl = !1;
      }
      if (
        ((yo = 0),
        (vt = ht = Qe = null),
        (ss = !1),
        (Ts = 0),
        (ap.current = null),
        n === null || n.return === null)
      ) {
        (gt = 1), (Ms = t), (dt = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Rt),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            d = a,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var w = sm(s);
          if (w !== null) {
            (w.flags &= -257),
              am(w, s, a, i, t),
              w.mode & 1 && im(i, u, t),
              (t = w),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              im(i, u, t), fp();
              break e;
            }
            l = Error(K(426));
          }
        } else if (qe && a.mode & 1) {
          var C = sm(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              am(C, s, a, i, t),
              Kf(di(l, a));
            break e;
          }
        }
        (i = l = di(l, a)),
          gt !== 4 && (gt = 2),
          ls === null ? (ls = [i]) : ls.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = i0(i, l, t);
              Zh(i, h);
              break e;
            case 1:
              a = l;
              var p = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Lr === null || !Lr.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var b = s0(i, a, t);
                Zh(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      E0(n);
    } catch (k) {
      (t = k), dt === n && n !== null && (dt = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function x0() {
  var e = bl.current;
  return (bl.current = wl), e === null ? wl : e;
}
function fp() {
  (gt === 0 || gt === 3 || gt === 2) && (gt = 4),
    St === null || (!(vo & 268435455) && !(ru & 268435455)) || Er(St, Rt);
}
function kl(e, t) {
  var n = xe;
  xe |= 2;
  var r = x0();
  (St !== e || Rt !== t) && ((tr = null), fo(e, t));
  do
    try {
      EC();
      break;
    } catch (o) {
      C0(e, o);
    }
  while (1);
  if ((Gf(), (xe = n), (bl.current = r), dt !== null)) throw Error(K(261));
  return (St = null), (Rt = 0), gt;
}
function EC() {
  for (; dt !== null; ) k0(dt);
}
function PC() {
  for (; dt !== null && !Xw(); ) k0(dt);
}
function k0(e) {
  var t = R0(e.alternate, e, tn);
  (e.memoizedProps = e.pendingProps),
    t === null ? E0(e) : (dt = t),
    (ap.current = null);
}
function E0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = SC(n, t)), n !== null)) {
        (n.flags &= 32767), (dt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (gt = 6), (dt = null);
        return;
      }
    } else if (((n = vC(n, t, tn)), n !== null)) {
      dt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      dt = t;
      return;
    }
    dt = t = e;
  } while (t !== null);
  gt === 0 && (gt = 5);
}
function eo(e, t, n) {
  var r = Ie,
    o = wn.transition;
  try {
    (wn.transition = null), (Ie = 1), RC(e, t, n, r);
  } finally {
    (wn.transition = o), (Ie = r);
  }
  return null;
}
function RC(e, t, n, r) {
  do ni();
  while (Tr !== null);
  if (xe & 6) throw Error(K(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(K(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (ab(e, i),
    e === St && ((dt = St = null), (Rt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ca ||
      ((Ca = !0),
      T0(il, function () {
        return ni(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = wn.transition), (wn.transition = null);
    var s = Ie;
    Ie = 1;
    var a = xe;
    (xe |= 4),
      (ap.current = null),
      bC(e, n),
      S0(n, e),
      qb(xd),
      (al = !!Cd),
      (xd = Cd = null),
      (e.current = n),
      CC(n),
      Jw(),
      (xe = a),
      (Ie = s),
      (wn.transition = i);
  } else e.current = n;
  if (
    (Ca && ((Ca = !1), (Tr = e), (xl = o)),
    (i = e.pendingLanes),
    i === 0 && (Lr = null),
    tb(n.stateNode),
    Jt(e, ot()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Cl) throw ((Cl = !1), (e = Vd), (Vd = null), e);
  return (
    xl & 1 && e.tag !== 0 && ni(),
    (i = e.pendingLanes),
    i & 1 ? (e === jd ? us++ : ((us = 0), (jd = e))) : (us = 0),
    Kr(),
    null
  );
}
function ni() {
  if (Tr !== null) {
    var e = iv(xl),
      t = wn.transition,
      n = Ie;
    try {
      if (((wn.transition = null), (Ie = 16 > e ? 16 : e), Tr === null))
        var r = !1;
      else {
        if (((e = Tr), (Tr = null), (xl = 0), xe & 6)) throw Error(K(331));
        var o = xe;
        for (xe |= 4, ee = e.current; ee !== null; ) {
          var i = ee,
            s = i.child;
          if (ee.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (ee = u; ee !== null; ) {
                  var d = ee;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      as(8, d, i);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (ee = c);
                  else
                    for (; ee !== null; ) {
                      d = ee;
                      var f = d.sibling,
                        w = d.return;
                      if ((g0(d), d === u)) {
                        ee = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = w), (ee = f);
                        break;
                      }
                      ee = w;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var C = v.sibling;
                    (v.sibling = null), (v = C);
                  } while (v !== null);
                }
              }
              ee = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (ee = s);
          else
            e: for (; ee !== null; ) {
              if (((i = ee), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    as(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (ee = h);
                break e;
              }
              ee = i.return;
            }
        }
        var p = e.current;
        for (ee = p; ee !== null; ) {
          s = ee;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (ee = m);
          else
            e: for (s = p; ee !== null; ) {
              if (((a = ee), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nu(9, a);
                  }
                } catch (k) {
                  nt(a, a.return, k);
                }
              if (a === s) {
                ee = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                (b.return = a.return), (ee = b);
                break e;
              }
              ee = a.return;
            }
        }
        if (
          ((xe = o), Kr(), qn && typeof qn.onPostCommitFiberRoot == "function")
        )
          try {
            qn.onPostCommitFiberRoot(Gl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Ie = n), (wn.transition = t);
    }
  }
  return !1;
}
function wm(e, t, n) {
  (t = di(n, t)),
    (t = i0(e, t, 1)),
    (e = _r(e, t, 1)),
    (t = Wt()),
    e !== null && (Vs(e, 1, t), Jt(e, t));
}
function nt(e, t, n) {
  if (e.tag === 3) wm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        wm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Lr === null || !Lr.has(r)))
        ) {
          (e = di(n, e)),
            (e = s0(t, e, 1)),
            (t = _r(t, e, 1)),
            (e = Wt()),
            t !== null && (Vs(t, 1, e), Jt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function TC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Wt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    St === e &&
      (Rt & n) === n &&
      (gt === 4 || (gt === 3 && (Rt & 130023424) === Rt && 500 > ot() - up)
        ? fo(e, 0)
        : (lp |= n)),
    Jt(e, t);
}
function P0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = fa), (fa <<= 1), !(fa & 130023424) && (fa = 4194304))
      : (t = 1));
  var n = Wt();
  (e = ur(e, t)), e !== null && (Vs(e, t, n), Jt(e, n));
}
function $C(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), P0(e, n);
}
function OC(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(K(314));
  }
  r !== null && r.delete(t), P0(e, n);
}
var R0;
R0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qt.current) Yt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Yt = !1), yC(e, t, n);
      Yt = !!(e.flags & 131072);
    }
  else (Yt = !1), qe && t.flags & 1048576 && Mv(t, hl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Da(e, t), (e = t.pendingProps);
      var o = ai(t, Ft.current);
      ti(t, n), (o = np(null, t, r, e, o, n));
      var i = rp();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Xt(r) ? ((i = !0), fl(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Xf(t),
            (o.updater = tu),
            (t.stateNode = o),
            (o._reactInternals = t),
            Id(t, r, e, n),
            (t = _d(null, t, r, !0, i, n)))
          : ((t.tag = 0), qe && i && jf(t), zt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Da(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = IC(r)),
          (e = Pn(r, e)),
          o)
        ) {
          case 0:
            t = Nd(null, t, r, e, n);
            break e;
          case 1:
            t = cm(null, t, r, e, n);
            break e;
          case 11:
            t = lm(null, t, r, e, n);
            break e;
          case 14:
            t = um(null, t, r, Pn(r.type, e), n);
            break e;
        }
        throw Error(K(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Pn(r, o)),
        Nd(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Pn(r, o)),
        cm(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((c0(t), e === null)) throw Error(K(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Fv(e, t),
          yl(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = di(Error(K(423)), t)), (t = dm(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = di(Error(K(424)), t)), (t = dm(e, t, r, n, o));
            break e;
          } else
            for (
              on = Nr(t.stateNode.containerInfo.firstChild),
                sn = t,
                qe = !0,
                Tn = null,
                n = _v(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((li(), r === o)) {
            t = cr(e, t, n);
            break e;
          }
          zt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Bv(t),
        e === null && $d(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        kd(r, o) ? (s = null) : i !== null && kd(r, i) && (t.flags |= 32),
        u0(e, t),
        zt(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && $d(t), null;
    case 13:
      return d0(e, t, n);
    case 4:
      return (
        Jf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ui(t, null, r, n)) : zt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Pn(r, o)),
        lm(e, t, r, o, n)
      );
    case 7:
      return zt(e, t, t.pendingProps, n), t.child;
    case 8:
      return zt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return zt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          We(ml, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (An(i.value, s)) {
            if (i.children === o.children && !Qt.current) {
              t = cr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = sr(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Od(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(K(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Od(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        zt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ti(t, n),
        (o = bn(o)),
        (r = r(o)),
        (t.flags |= 1),
        zt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Pn(r, t.pendingProps)),
        (o = Pn(r.type, o)),
        um(e, t, r, o, n)
      );
    case 15:
      return a0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Pn(r, o)),
        Da(e, t),
        (t.tag = 1),
        Xt(r) ? ((e = !0), fl(t)) : (e = !1),
        ti(t, n),
        o0(t, r, o),
        Id(t, r, o, n),
        _d(null, t, r, !0, e, n)
      );
    case 19:
      return f0(e, t, n);
    case 22:
      return l0(e, t, n);
  }
  throw Error(K(156, t.tag));
};
function T0(e, t) {
  return tv(e, t);
}
function MC(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function vn(e, t, n, r) {
  return new MC(e, t, n, r);
}
function pp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function IC(e) {
  if (typeof e == "function") return pp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === If)) return 11;
    if (e === Af) return 14;
  }
  return 2;
}
function Br(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = vn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Wa(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) pp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Do:
        return po(n.children, o, i, t);
      case Mf:
        (s = 8), (o |= 8);
        break;
      case nd:
        return (
          (e = vn(12, n, t, o | 2)), (e.elementType = nd), (e.lanes = i), e
        );
      case rd:
        return (e = vn(13, n, t, o)), (e.elementType = rd), (e.lanes = i), e;
      case od:
        return (e = vn(19, n, t, o)), (e.elementType = od), (e.lanes = i), e;
      case By:
        return ou(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ly:
              s = 10;
              break e;
            case Fy:
              s = 9;
              break e;
            case If:
              s = 11;
              break e;
            case Af:
              s = 14;
              break e;
            case Cr:
              (s = 16), (r = null);
              break e;
          }
        throw Error(K(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = vn(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function po(e, t, n, r) {
  return (e = vn(7, e, r, t)), (e.lanes = n), e;
}
function ou(e, t, n, r) {
  return (
    (e = vn(22, e, r, t)),
    (e.elementType = By),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Oc(e, t, n) {
  return (e = vn(6, e, null, t)), (e.lanes = n), e;
}
function Mc(e, t, n) {
  return (
    (t = vn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function AC(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = dc(0)),
    (this.expirationTimes = dc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = dc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function hp(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new AC(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = vn(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Xf(i),
    e
  );
}
function NC(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Bo,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function $0(e) {
  if (!e) return Wr;
  e = e._reactInternals;
  e: {
    if (ko(e) !== e || e.tag !== 1) throw Error(K(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(K(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xt(n)) return $v(e, n, t);
  }
  return t;
}
function O0(e, t, n, r, o, i, s, a, l) {
  return (
    (e = hp(n, r, !0, e, o, i, s, a, l)),
    (e.context = $0(null)),
    (n = e.current),
    (r = Wt()),
    (o = Fr(n)),
    (i = sr(r, o)),
    (i.callback = t ?? null),
    _r(n, i, o),
    (e.current.lanes = o),
    Vs(e, o, r),
    Jt(e, r),
    e
  );
}
function iu(e, t, n, r) {
  var o = t.current,
    i = Wt(),
    s = Fr(o);
  return (
    (n = $0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = sr(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = _r(o, t, s)),
    e !== null && (Mn(e, o, s, i), La(e, o, s)),
    s
  );
}
function El(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function mp(e, t) {
  bm(e, t), (e = e.alternate) && bm(e, t);
}
function _C() {
  return null;
}
var M0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function gp(e) {
  this._internalRoot = e;
}
su.prototype.render = gp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(K(409));
  iu(e, t, null, null);
};
su.prototype.unmount = gp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    So(function () {
      iu(null, e, null, null);
    }),
      (t[lr] = null);
  }
};
function su(e) {
  this._internalRoot = e;
}
su.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = lv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kr.length && t !== 0 && t < kr[n].priority; n++);
    kr.splice(n, 0, e), n === 0 && cv(e);
  }
};
function yp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function au(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Cm() {}
function LC(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = El(s);
        i.call(u);
      };
    }
    var s = O0(t, r, e, 0, null, !1, !1, "", Cm);
    return (
      (e._reactRootContainer = s),
      (e[lr] = s.current),
      xs(e.nodeType === 8 ? e.parentNode : e),
      So(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = El(l);
      a.call(u);
    };
  }
  var l = hp(e, 0, !1, null, null, !1, !1, "", Cm);
  return (
    (e._reactRootContainer = l),
    (e[lr] = l.current),
    xs(e.nodeType === 8 ? e.parentNode : e),
    So(function () {
      iu(t, l, n, r);
    }),
    l
  );
}
function lu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = El(s);
        a.call(l);
      };
    }
    iu(t, s, e, o);
  } else s = LC(n, t, e, o, r);
  return El(s);
}
sv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qi(t.pendingLanes);
        n !== 0 &&
          (Lf(t, n | 1), Jt(t, ot()), !(xe & 6) && ((fi = ot() + 500), Kr()));
      }
      break;
    case 13:
      So(function () {
        var r = ur(e, 1);
        if (r !== null) {
          var o = Wt();
          Mn(r, e, 1, o);
        }
      }),
        mp(e, 1);
  }
};
Ff = function (e) {
  if (e.tag === 13) {
    var t = ur(e, 134217728);
    if (t !== null) {
      var n = Wt();
      Mn(t, e, 134217728, n);
    }
    mp(e, 134217728);
  }
};
av = function (e) {
  if (e.tag === 13) {
    var t = Fr(e),
      n = ur(e, t);
    if (n !== null) {
      var r = Wt();
      Mn(n, e, t, r);
    }
    mp(e, t);
  }
};
lv = function () {
  return Ie;
};
uv = function (e, t) {
  var n = Ie;
  try {
    return (Ie = e), t();
  } finally {
    Ie = n;
  }
};
hd = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ad(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Jl(r);
            if (!o) throw Error(K(90));
            zy(r), ad(r, o);
          }
        }
      }
      break;
    case "textarea":
      Wy(e, n);
      break;
    case "select":
      (t = n.value), t != null && Xo(e, !!n.multiple, t, !1);
  }
};
Yy = cp;
Qy = So;
var FC = { usingClientEntryPoint: !1, Events: [Hs, Vo, Jl, qy, Gy, cp] },
  Li = {
    findFiberByHostInstance: io,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  BC = {
    bundleType: Li.bundleType,
    version: Li.version,
    rendererPackageName: Li.rendererPackageName,
    rendererConfig: Li.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Zy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Li.findFiberByHostInstance || _C,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xa.isDisabled && xa.supportsFiber)
    try {
      (Gl = xa.inject(BC)), (qn = xa);
    } catch {}
}
cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = FC;
cn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!yp(t)) throw Error(K(200));
  return NC(e, t, null, n);
};
cn.createRoot = function (e, t) {
  if (!yp(e)) throw Error(K(299));
  var n = !1,
    r = "",
    o = M0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = hp(e, 1, !1, null, null, n, !1, r, o)),
    (e[lr] = t.current),
    xs(e.nodeType === 8 ? e.parentNode : e),
    new gp(t)
  );
};
cn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(K(188))
      : ((e = Object.keys(e).join(",")), Error(K(268, e)));
  return (e = Zy(t)), (e = e === null ? null : e.stateNode), e;
};
cn.flushSync = function (e) {
  return So(e);
};
cn.hydrate = function (e, t, n) {
  if (!au(t)) throw Error(K(200));
  return lu(null, e, t, !0, n);
};
cn.hydrateRoot = function (e, t, n) {
  if (!yp(e)) throw Error(K(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = M0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = O0(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[lr] = t.current),
    xs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new su(t);
};
cn.render = function (e, t, n) {
  if (!au(t)) throw Error(K(200));
  return lu(null, e, t, !1, n);
};
cn.unmountComponentAtNode = function (e) {
  if (!au(e)) throw Error(K(40));
  return e._reactRootContainer
    ? (So(function () {
        lu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[lr] = null);
        });
      }),
      !0)
    : !1;
};
cn.unstable_batchedUpdates = cp;
cn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!au(n)) throw Error(K(200));
  if (e == null || e._reactInternals === void 0) throw Error(K(38));
  return lu(e, t, n, !1, r);
};
cn.version = "18.3.1-next-f1338f8080-20240426";
function I0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I0);
    } catch (e) {
      console.error(e);
    }
}
I0(), (Iy.exports = cn);
var vp = Iy.exports;
const ka = wy(vp);
var xm = vp;
(ed.createRoot = xm.createRoot), (ed.hydrateRoot = xm.hydrateRoot);
/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Is() {
  return (
    (Is = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Is.apply(this, arguments)
  );
}
var $r;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})($r || ($r = {}));
const km = "popstate";
function DC(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return qd(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Pl(o);
  }
  return UC(t, n, null, e);
}
function st(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function A0(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function zC() {
  return Math.random().toString(36).substr(2, 8);
}
function Em(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function qd(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Is(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? wi(t) : t,
      { state: n, key: (t && t.key) || r || zC() }
    )
  );
}
function Pl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function wi(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function UC(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = $r.Pop,
    l = null,
    u = d();
  u == null && ((u = 0), s.replaceState(Is({}, s.state, { idx: u }), ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function c() {
    a = $r.Pop;
    let C = d(),
      h = C == null ? null : C - u;
    (u = C), l && l({ action: a, location: v.location, delta: h });
  }
  function f(C, h) {
    a = $r.Push;
    let p = qd(v.location, C, h);
    n && n(p, C), (u = d() + 1);
    let m = Em(p, u),
      b = v.createHref(p);
    try {
      s.pushState(m, "", b);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      o.location.assign(b);
    }
    i && l && l({ action: a, location: v.location, delta: 1 });
  }
  function w(C, h) {
    a = $r.Replace;
    let p = qd(v.location, C, h);
    n && n(p, C), (u = d());
    let m = Em(p, u),
      b = v.createHref(p);
    s.replaceState(m, "", b),
      i && l && l({ action: a, location: v.location, delta: 0 });
  }
  function y(C) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof C == "string" ? C : Pl(C);
    return (
      (p = p.replace(/ $/, "%20")),
      st(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, h)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(C) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(km, c),
        (l = C),
        () => {
          o.removeEventListener(km, c), (l = null);
        }
      );
    },
    createHref(C) {
      return t(o, C);
    },
    createURL: y,
    encodeLocation(C) {
      let h = y(C);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: f,
    replace: w,
    go(C) {
      return s.go(C);
    },
  };
  return v;
}
var Pm;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Pm || (Pm = {}));
function WC(e, t, n) {
  return n === void 0 && (n = "/"), VC(e, t, n, !1);
}
function VC(e, t, n, r) {
  let o = typeof t == "string" ? wi(t) : t,
    i = Sp(o.pathname || "/", n);
  if (i == null) return null;
  let s = N0(e);
  jC(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = tx(i);
    a = ZC(s[l], u, r);
  }
  return a;
}
function N0(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (st(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Dr([r, l.relativePath]),
      d = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (st(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      N0(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: XC(u, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of _0(i.path)) o(i, s, l);
    }),
    t
  );
}
function _0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = _0(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function jC(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : JC(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const HC = /^:[\w-]+$/,
  KC = 3,
  qC = 2,
  GC = 1,
  YC = 10,
  QC = -2,
  Rm = (e) => e === "*";
function XC(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Rm) && (r += QC),
    t && (r += qC),
    n
      .filter((o) => !Rm(o))
      .reduce((o, i) => o + (HC.test(i) ? KC : i === "" ? GC : YC), r)
  );
}
function JC(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function ZC(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      c = Tm(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        d
      ),
      f = l.route;
    if (
      (!c &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (c = Tm(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          d
        )),
      !c)
    )
      return null;
    Object.assign(o, c.params),
      s.push({
        params: o,
        pathname: Dr([i, c.pathname]),
        pathnameBase: ix(Dr([i, c.pathnameBase])),
        route: f,
      }),
      c.pathnameBase !== "/" && (i = Dr([i, c.pathnameBase]));
  }
  return s;
}
function Tm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ex(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, d, c) => {
      let { paramName: f, isOptional: w } = d;
      if (f === "*") {
        let v = a[c] || "";
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[c];
      return (
        w && !y ? (u[f] = void 0) : (u[f] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function ex(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    A0(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function tx(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      A0(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Sp(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function nx(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? wi(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : rx(n, t)) : t,
    search: sx(r),
    hash: ax(o),
  };
}
function rx(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ic(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ox(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function wp(e, t) {
  let n = ox(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function bp(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = wi(e))
    : ((o = Is({}, e)),
      st(
        !o.pathname || !o.pathname.includes("?"),
        Ic("?", "pathname", "search", o)
      ),
      st(
        !o.pathname || !o.pathname.includes("#"),
        Ic("#", "pathname", "hash", o)
      ),
      st(!o.search || !o.search.includes("#"), Ic("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    a;
  if (s == null) a = n;
  else {
    let c = t.length - 1;
    if (!r && s.startsWith("..")) {
      let f = s.split("/");
      for (; f[0] === ".."; ) f.shift(), (c -= 1);
      o.pathname = f.join("/");
    }
    a = c >= 0 ? t[c] : "/";
  }
  let l = nx(o, a),
    u = s && s !== "/" && s.endsWith("/"),
    d = (i || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"), l;
}
const Dr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  ix = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  sx = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  ax = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function lx(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const L0 = ["post", "put", "patch", "delete"];
new Set(L0);
const ux = ["get", ...L0];
new Set(ux);
/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function As() {
  return (
    (As = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    As.apply(this, arguments)
  );
}
const Cp = S.createContext(null),
  cx = S.createContext(null),
  qr = S.createContext(null),
  uu = S.createContext(null),
  Gr = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  F0 = S.createContext(null);
function dx(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  bi() || st(!1);
  let { basename: r, navigator: o } = S.useContext(qr),
    { hash: i, pathname: s, search: a } = D0(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : Dr([r, s])),
    o.createHref({ pathname: l, search: a, hash: i })
  );
}
function bi() {
  return S.useContext(uu) != null;
}
function qs() {
  return bi() || st(!1), S.useContext(uu).location;
}
function B0(e) {
  S.useContext(qr).static || S.useLayoutEffect(e);
}
function xp() {
  let { isDataRoute: e } = S.useContext(Gr);
  return e ? kx() : fx();
}
function fx() {
  bi() || st(!1);
  let e = S.useContext(Cp),
    { basename: t, future: n, navigator: r } = S.useContext(qr),
    { matches: o } = S.useContext(Gr),
    { pathname: i } = qs(),
    s = JSON.stringify(wp(o, n.v7_relativeSplatPath)),
    a = S.useRef(!1);
  return (
    B0(() => {
      a.current = !0;
    }),
    S.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let c = bp(u, JSON.parse(s), i, d.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : Dr([t, c.pathname])),
          (d.replace ? r.replace : r.push)(c, d.state, d);
      },
      [t, r, s, i, e]
    )
  );
}
function D0(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = S.useContext(qr),
    { matches: o } = S.useContext(Gr),
    { pathname: i } = qs(),
    s = JSON.stringify(wp(o, r.v7_relativeSplatPath));
  return S.useMemo(() => bp(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function px(e, t) {
  return hx(e, t);
}
function hx(e, t, n, r) {
  bi() || st(!1);
  let { navigator: o, static: i } = S.useContext(qr),
    { matches: s } = S.useContext(Gr),
    a = s[s.length - 1],
    l = a ? a.params : {};
  a && a.pathname;
  let u = a ? a.pathnameBase : "/";
  a && a.route;
  let d = qs(),
    c;
  if (t) {
    var f;
    let h = typeof t == "string" ? wi(t) : t;
    u === "/" || ((f = h.pathname) != null && f.startsWith(u)) || st(!1),
      (c = h);
  } else c = d;
  let w = c.pathname || "/",
    y = w;
  if (u !== "/") {
    let h = u.replace(/^\//, "").split("/");
    y = "/" + w.replace(/^\//, "").split("/").slice(h.length).join("/");
  }
  let v =
      !i && n && n.matches && n.matches.length > 0
        ? n.matches
        : WC(e, { pathname: y }),
    C = Sx(
      v &&
        v.map((h) =>
          Object.assign({}, h, {
            params: Object.assign({}, l, h.params),
            pathname: Dr([
              u,
              o.encodeLocation
                ? o.encodeLocation(h.pathname).pathname
                : h.pathname,
            ]),
            pathnameBase:
              h.pathnameBase === "/"
                ? u
                : Dr([
                    u,
                    o.encodeLocation
                      ? o.encodeLocation(h.pathnameBase).pathname
                      : h.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && C
    ? S.createElement(
        uu.Provider,
        {
          value: {
            location: As(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: $r.Pop,
          },
        },
        C
      )
    : C;
}
function mx() {
  let e = xx(),
    t = lx(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: o }, n) : null,
    i
  );
}
const gx = S.createElement(mx, null);
class yx extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          Gr.Provider,
          { value: this.props.routeContext },
          S.createElement(F0.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function vx(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = S.useContext(Cp);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Gr.Provider, { value: t }, r)
  );
}
function Sx(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let d = s.findIndex(
      (c) => c.route.id && (a == null ? void 0 : a[c.route.id]) !== void 0
    );
    d >= 0 || st(!1), (s = s.slice(0, Math.min(s.length, d + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
      let c = s[d];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = d),
        c.route.id)
      ) {
        let { loaderData: f, errors: w } = n,
          y =
            c.route.loader &&
            f[c.route.id] === void 0 &&
            (!w || w[c.route.id] === void 0);
        if (c.route.lazy || y) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((d, c, f) => {
    let w,
      y = !1,
      v = null,
      C = null;
    n &&
      ((w = a && c.route.id ? a[c.route.id] : void 0),
      (v = c.route.errorElement || gx),
      l &&
        (u < 0 && f === 0
          ? (Ex("route-fallback", !1), (y = !0), (C = null))
          : u === f &&
            ((y = !0), (C = c.route.hydrateFallbackElement || null))));
    let h = t.concat(s.slice(0, f + 1)),
      p = () => {
        let m;
        return (
          w
            ? (m = v)
            : y
            ? (m = C)
            : c.route.Component
            ? (m = S.createElement(c.route.Component, null))
            : c.route.element
            ? (m = c.route.element)
            : (m = d),
          S.createElement(vx, {
            match: c,
            routeContext: { outlet: d, matches: h, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || f === 0)
      ? S.createElement(yx, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: w,
          children: p(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var z0 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(z0 || {}),
  Rl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Rl || {});
function wx(e) {
  let t = S.useContext(Cp);
  return t || st(!1), t;
}
function bx(e) {
  let t = S.useContext(cx);
  return t || st(!1), t;
}
function Cx(e) {
  let t = S.useContext(Gr);
  return t || st(!1), t;
}
function U0(e) {
  let t = Cx(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || st(!1), n.route.id;
}
function xx() {
  var e;
  let t = S.useContext(F0),
    n = bx(Rl.UseRouteError),
    r = U0(Rl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function kx() {
  let { router: e } = wx(z0.UseNavigateStable),
    t = U0(Rl.UseNavigateStable),
    n = S.useRef(!1);
  return (
    B0(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, As({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const $m = {};
function Ex(e, t, n) {
  !t && !$m[e] && ($m[e] = !0);
}
function Px(e, t) {
  e == null || e.v7_startTransition,
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 &&
      (!t || t.v7_relativeSplatPath),
    t &&
      (t.v7_fetcherPersist,
      t.v7_normalizeFormMethod,
      t.v7_partialHydration,
      t.v7_skipActionErrorRevalidation);
}
function Rx(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  bi() || st(!1);
  let { future: i, static: s } = S.useContext(qr),
    { matches: a } = S.useContext(Gr),
    { pathname: l } = qs(),
    u = xp(),
    d = bp(t, wp(a, i.v7_relativeSplatPath), l, o === "path"),
    c = JSON.stringify(d);
  return (
    S.useEffect(
      () => u(JSON.parse(c), { replace: n, state: r, relative: o }),
      [u, c, o, n, r]
    ),
    null
  );
}
function rr(e) {
  st(!1);
}
function Tx(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = $r.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  bi() && st(!1);
  let l = t.replace(/^\/*/, "/"),
    u = S.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: As({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, s]
    );
  typeof r == "string" && (r = wi(r));
  let {
      pathname: d = "/",
      search: c = "",
      hash: f = "",
      state: w = null,
      key: y = "default",
    } = r,
    v = S.useMemo(() => {
      let C = Sp(d, l);
      return C == null
        ? null
        : {
            location: { pathname: C, search: c, hash: f, state: w, key: y },
            navigationType: o,
          };
    }, [l, d, c, f, w, y, o]);
  return v == null
    ? null
    : S.createElement(
        qr.Provider,
        { value: u },
        S.createElement(uu.Provider, { children: n, value: v })
      );
}
function W0(e) {
  let { children: t, location: n } = e;
  return px(Gd(t), n);
}
new Promise(() => {});
function Gd(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, o) => {
      if (!S.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === S.Fragment) {
        n.push.apply(n, Gd(r.props.children, i));
        return;
      }
      r.type !== rr && st(!1), !r.props.index || !r.props.children || st(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Gd(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yd() {
  return (
    (Yd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yd.apply(this, arguments)
  );
}
function $x(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Ox(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Mx(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Ox(e);
}
const Ix = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Ax = "6";
try {
  window.__reactRouterVersion = Ax;
} catch {}
const Nx = "startTransition",
  Om = tl[Nx];
function _x(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = S.useRef();
  i.current == null && (i.current = DC({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = S.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    d = S.useCallback(
      (c) => {
        u && Om ? Om(() => l(c)) : l(c);
      },
      [l, u]
    );
  return (
    S.useLayoutEffect(() => s.listen(d), [s, d]),
    S.useEffect(() => Px(r), [r]),
    S.createElement(Tx, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
const Lx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Fx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  kp = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: d,
        viewTransition: c,
      } = t,
      f = $x(t, Ix),
      { basename: w } = S.useContext(qr),
      y,
      v = !1;
    if (typeof u == "string" && Fx.test(u) && ((y = u), Lx))
      try {
        let m = new URL(window.location.href),
          b = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
          k = Sp(b.pathname, w);
        b.origin === m.origin && k != null
          ? (u = k + b.search + b.hash)
          : (v = !0);
      } catch {}
    let C = dx(u, { relative: o }),
      h = Bx(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: d,
        relative: o,
        viewTransition: c,
      });
    function p(m) {
      r && r(m), m.defaultPrevented || h(m);
    }
    return S.createElement(
      "a",
      Yd({}, f, { href: y || C, onClick: v || i ? r : p, ref: n, target: l })
    );
  });
var Mm;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Mm || (Mm = {}));
var Im;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Im || (Im = {}));
function Bx(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = xp(),
    u = qs(),
    d = D0(e, { relative: s });
  return S.useCallback(
    (c) => {
      if (Mx(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : Pl(u) === Pl(d);
        l(e, {
          replace: f,
          state: o,
          preventScrollReset: i,
          relative: s,
          viewTransition: a,
        });
      }
    },
    [u, l, d, r, o, n, e, i, s, a]
  );
}
function Tl(e) {
  "@babel/helpers - typeof";
  return (
    (Tl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Tl(e)
  );
}
function wo(e) {
  if (e === null || e === !0 || e === !1) return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Ht(e, t) {
  if (t.length < e)
    throw new TypeError(
      e +
        " argument" +
        (e > 1 ? "s" : "") +
        " required, but only " +
        t.length +
        " present"
    );
}
function Xn(e) {
  Ht(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || (Tl(e) === "object" && t === "[object Date]")
    ? new Date(e.getTime())
    : typeof e == "number" || t === "[object Number]"
    ? new Date(e)
    : ((typeof e == "string" || t === "[object String]") &&
        typeof console < "u" &&
        (console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
        ),
        console.warn(new Error().stack)),
      new Date(NaN));
}
function Dx(e, t) {
  Ht(2, arguments);
  var n = Xn(e).getTime(),
    r = wo(t);
  return new Date(n + r);
}
var zx = {};
function cu() {
  return zx;
}
function Ux(e) {
  var t = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Wx(e) {
  return (
    Ht(1, arguments),
    e instanceof Date ||
      (Tl(e) === "object" &&
        Object.prototype.toString.call(e) === "[object Date]")
  );
}
function Vx(e) {
  if ((Ht(1, arguments), !Wx(e) && typeof e != "number")) return !1;
  var t = Xn(e);
  return !isNaN(Number(t));
}
function jx(e, t) {
  Ht(2, arguments);
  var n = wo(t);
  return Dx(e, -n);
}
var Hx = 864e5;
function Kx(e) {
  Ht(1, arguments);
  var t = Xn(e),
    n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(),
    o = n - r;
  return Math.floor(o / Hx) + 1;
}
function $l(e) {
  Ht(1, arguments);
  var t = 1,
    n = Xn(e),
    r = n.getUTCDay(),
    o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function V0(e) {
  Ht(1, arguments);
  var t = Xn(e),
    n = t.getUTCFullYear(),
    r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = $l(r),
    i = new Date(0);
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var s = $l(i);
  return t.getTime() >= o.getTime()
    ? n + 1
    : t.getTime() >= s.getTime()
    ? n
    : n - 1;
}
function qx(e) {
  Ht(1, arguments);
  var t = V0(e),
    n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = $l(n);
  return r;
}
var Gx = 6048e5;
function Yx(e) {
  Ht(1, arguments);
  var t = Xn(e),
    n = $l(t).getTime() - qx(t).getTime();
  return Math.round(n / Gx) + 1;
}
function Ol(e, t) {
  var n, r, o, i, s, a, l, u;
  Ht(1, arguments);
  var d = cu(),
    c = wo(
      (n =
        (r =
          (o =
            (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0
              ? i
              : t == null ||
                (s = t.locale) === null ||
                s === void 0 ||
                (a = s.options) === null ||
                a === void 0
              ? void 0
              : a.weekStartsOn) !== null && o !== void 0
            ? o
            : d.weekStartsOn) !== null && r !== void 0
          ? r
          : (l = d.locale) === null ||
            l === void 0 ||
            (u = l.options) === null ||
            u === void 0
          ? void 0
          : u.weekStartsOn) !== null && n !== void 0
        ? n
        : 0
    );
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = Xn(e),
    w = f.getUTCDay(),
    y = (w < c ? 7 : 0) + w - c;
  return f.setUTCDate(f.getUTCDate() - y), f.setUTCHours(0, 0, 0, 0), f;
}
function j0(e, t) {
  var n, r, o, i, s, a, l, u;
  Ht(1, arguments);
  var d = Xn(e),
    c = d.getUTCFullYear(),
    f = cu(),
    w = wo(
      (n =
        (r =
          (o =
            (i = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
            i !== void 0
              ? i
              : t == null ||
                (s = t.locale) === null ||
                s === void 0 ||
                (a = s.options) === null ||
                a === void 0
              ? void 0
              : a.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : f.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : (l = f.locale) === null ||
            l === void 0 ||
            (u = l.options) === null ||
            u === void 0
          ? void 0
          : u.firstWeekContainsDate) !== null && n !== void 0
        ? n
        : 1
    );
  if (!(w >= 1 && w <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var y = new Date(0);
  y.setUTCFullYear(c + 1, 0, w), y.setUTCHours(0, 0, 0, 0);
  var v = Ol(y, t),
    C = new Date(0);
  C.setUTCFullYear(c, 0, w), C.setUTCHours(0, 0, 0, 0);
  var h = Ol(C, t);
  return d.getTime() >= v.getTime()
    ? c + 1
    : d.getTime() >= h.getTime()
    ? c
    : c - 1;
}
function Qx(e, t) {
  var n, r, o, i, s, a, l, u;
  Ht(1, arguments);
  var d = cu(),
    c = wo(
      (n =
        (r =
          (o =
            (i = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
            i !== void 0
              ? i
              : t == null ||
                (s = t.locale) === null ||
                s === void 0 ||
                (a = s.options) === null ||
                a === void 0
              ? void 0
              : a.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : d.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : (l = d.locale) === null ||
            l === void 0 ||
            (u = l.options) === null ||
            u === void 0
          ? void 0
          : u.firstWeekContainsDate) !== null && n !== void 0
        ? n
        : 1
    ),
    f = j0(e, t),
    w = new Date(0);
  w.setUTCFullYear(f, 0, c), w.setUTCHours(0, 0, 0, 0);
  var y = Ol(w, t);
  return y;
}
var Xx = 6048e5;
function Jx(e, t) {
  Ht(1, arguments);
  var n = Xn(e),
    r = Ol(n, t).getTime() - Qx(n, t).getTime();
  return Math.round(r / Xx) + 1;
}
function Me(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var Zx = {
  y: function (t, n) {
    var r = t.getUTCFullYear(),
      o = r > 0 ? r : 1 - r;
    return Me(n === "yy" ? o % 100 : o, n.length);
  },
  M: function (t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : Me(r + 1, 2);
  },
  d: function (t, n) {
    return Me(t.getUTCDate(), n.length);
  },
  a: function (t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  h: function (t, n) {
    return Me(t.getUTCHours() % 12 || 12, n.length);
  },
  H: function (t, n) {
    return Me(t.getUTCHours(), n.length);
  },
  m: function (t, n) {
    return Me(t.getUTCMinutes(), n.length);
  },
  s: function (t, n) {
    return Me(t.getUTCSeconds(), n.length);
  },
  S: function (t, n) {
    var r = n.length,
      o = t.getUTCMilliseconds(),
      i = Math.floor(o * Math.pow(10, r - 3));
    return Me(i, n.length);
  },
};
const Sr = Zx;
var To = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  ek = {
    G: function (t, n, r) {
      var o = t.getUTCFullYear() > 0 ? 1 : 0;
      switch (n) {
        case "G":
        case "GG":
        case "GGG":
          return r.era(o, { width: "abbreviated" });
        case "GGGGG":
          return r.era(o, { width: "narrow" });
        case "GGGG":
        default:
          return r.era(o, { width: "wide" });
      }
    },
    y: function (t, n, r) {
      if (n === "yo") {
        var o = t.getUTCFullYear(),
          i = o > 0 ? o : 1 - o;
        return r.ordinalNumber(i, { unit: "year" });
      }
      return Sr.y(t, n);
    },
    Y: function (t, n, r, o) {
      var i = j0(t, o),
        s = i > 0 ? i : 1 - i;
      if (n === "YY") {
        var a = s % 100;
        return Me(a, 2);
      }
      return n === "Yo"
        ? r.ordinalNumber(s, { unit: "year" })
        : Me(s, n.length);
    },
    R: function (t, n) {
      var r = V0(t);
      return Me(r, n.length);
    },
    u: function (t, n) {
      var r = t.getUTCFullYear();
      return Me(r, n.length);
    },
    Q: function (t, n, r) {
      var o = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (n) {
        case "Q":
          return String(o);
        case "QQ":
          return Me(o, 2);
        case "Qo":
          return r.ordinalNumber(o, { unit: "quarter" });
        case "QQQ":
          return r.quarter(o, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return r.quarter(o, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return r.quarter(o, { width: "wide", context: "formatting" });
      }
    },
    q: function (t, n, r) {
      var o = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (n) {
        case "q":
          return String(o);
        case "qq":
          return Me(o, 2);
        case "qo":
          return r.ordinalNumber(o, { unit: "quarter" });
        case "qqq":
          return r.quarter(o, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return r.quarter(o, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return r.quarter(o, { width: "wide", context: "standalone" });
      }
    },
    M: function (t, n, r) {
      var o = t.getUTCMonth();
      switch (n) {
        case "M":
        case "MM":
          return Sr.M(t, n);
        case "Mo":
          return r.ordinalNumber(o + 1, { unit: "month" });
        case "MMM":
          return r.month(o, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return r.month(o, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return r.month(o, { width: "wide", context: "formatting" });
      }
    },
    L: function (t, n, r) {
      var o = t.getUTCMonth();
      switch (n) {
        case "L":
          return String(o + 1);
        case "LL":
          return Me(o + 1, 2);
        case "Lo":
          return r.ordinalNumber(o + 1, { unit: "month" });
        case "LLL":
          return r.month(o, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return r.month(o, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return r.month(o, { width: "wide", context: "standalone" });
      }
    },
    w: function (t, n, r, o) {
      var i = Jx(t, o);
      return n === "wo"
        ? r.ordinalNumber(i, { unit: "week" })
        : Me(i, n.length);
    },
    I: function (t, n, r) {
      var o = Yx(t);
      return n === "Io"
        ? r.ordinalNumber(o, { unit: "week" })
        : Me(o, n.length);
    },
    d: function (t, n, r) {
      return n === "do"
        ? r.ordinalNumber(t.getUTCDate(), { unit: "date" })
        : Sr.d(t, n);
    },
    D: function (t, n, r) {
      var o = Kx(t);
      return n === "Do"
        ? r.ordinalNumber(o, { unit: "dayOfYear" })
        : Me(o, n.length);
    },
    E: function (t, n, r) {
      var o = t.getUTCDay();
      switch (n) {
        case "E":
        case "EE":
        case "EEE":
          return r.day(o, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return r.day(o, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return r.day(o, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return r.day(o, { width: "wide", context: "formatting" });
      }
    },
    e: function (t, n, r, o) {
      var i = t.getUTCDay(),
        s = (i - o.weekStartsOn + 8) % 7 || 7;
      switch (n) {
        case "e":
          return String(s);
        case "ee":
          return Me(s, 2);
        case "eo":
          return r.ordinalNumber(s, { unit: "day" });
        case "eee":
          return r.day(i, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return r.day(i, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return r.day(i, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return r.day(i, { width: "wide", context: "formatting" });
      }
    },
    c: function (t, n, r, o) {
      var i = t.getUTCDay(),
        s = (i - o.weekStartsOn + 8) % 7 || 7;
      switch (n) {
        case "c":
          return String(s);
        case "cc":
          return Me(s, n.length);
        case "co":
          return r.ordinalNumber(s, { unit: "day" });
        case "ccc":
          return r.day(i, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return r.day(i, { width: "narrow", context: "standalone" });
        case "cccccc":
          return r.day(i, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return r.day(i, { width: "wide", context: "standalone" });
      }
    },
    i: function (t, n, r) {
      var o = t.getUTCDay(),
        i = o === 0 ? 7 : o;
      switch (n) {
        case "i":
          return String(i);
        case "ii":
          return Me(i, n.length);
        case "io":
          return r.ordinalNumber(i, { unit: "day" });
        case "iii":
          return r.day(o, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return r.day(o, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return r.day(o, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return r.day(o, { width: "wide", context: "formatting" });
      }
    },
    a: function (t, n, r) {
      var o = t.getUTCHours(),
        i = o / 12 >= 1 ? "pm" : "am";
      switch (n) {
        case "a":
        case "aa":
          return r.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return r
            .dayPeriod(i, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return r.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return r.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    b: function (t, n, r) {
      var o = t.getUTCHours(),
        i;
      switch (
        (o === 12
          ? (i = To.noon)
          : o === 0
          ? (i = To.midnight)
          : (i = o / 12 >= 1 ? "pm" : "am"),
        n)
      ) {
        case "b":
        case "bb":
          return r.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return r
            .dayPeriod(i, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return r.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return r.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    B: function (t, n, r) {
      var o = t.getUTCHours(),
        i;
      switch (
        (o >= 17
          ? (i = To.evening)
          : o >= 12
          ? (i = To.afternoon)
          : o >= 4
          ? (i = To.morning)
          : (i = To.night),
        n)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return r.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return r.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return r.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    h: function (t, n, r) {
      if (n === "ho") {
        var o = t.getUTCHours() % 12;
        return o === 0 && (o = 12), r.ordinalNumber(o, { unit: "hour" });
      }
      return Sr.h(t, n);
    },
    H: function (t, n, r) {
      return n === "Ho"
        ? r.ordinalNumber(t.getUTCHours(), { unit: "hour" })
        : Sr.H(t, n);
    },
    K: function (t, n, r) {
      var o = t.getUTCHours() % 12;
      return n === "Ko"
        ? r.ordinalNumber(o, { unit: "hour" })
        : Me(o, n.length);
    },
    k: function (t, n, r) {
      var o = t.getUTCHours();
      return (
        o === 0 && (o = 24),
        n === "ko" ? r.ordinalNumber(o, { unit: "hour" }) : Me(o, n.length)
      );
    },
    m: function (t, n, r) {
      return n === "mo"
        ? r.ordinalNumber(t.getUTCMinutes(), { unit: "minute" })
        : Sr.m(t, n);
    },
    s: function (t, n, r) {
      return n === "so"
        ? r.ordinalNumber(t.getUTCSeconds(), { unit: "second" })
        : Sr.s(t, n);
    },
    S: function (t, n) {
      return Sr.S(t, n);
    },
    X: function (t, n, r, o) {
      var i = o._originalDate || t,
        s = i.getTimezoneOffset();
      if (s === 0) return "Z";
      switch (n) {
        case "X":
          return Nm(s);
        case "XXXX":
        case "XX":
          return to(s);
        case "XXXXX":
        case "XXX":
        default:
          return to(s, ":");
      }
    },
    x: function (t, n, r, o) {
      var i = o._originalDate || t,
        s = i.getTimezoneOffset();
      switch (n) {
        case "x":
          return Nm(s);
        case "xxxx":
        case "xx":
          return to(s);
        case "xxxxx":
        case "xxx":
        default:
          return to(s, ":");
      }
    },
    O: function (t, n, r, o) {
      var i = o._originalDate || t,
        s = i.getTimezoneOffset();
      switch (n) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Am(s, ":");
        case "OOOO":
        default:
          return "GMT" + to(s, ":");
      }
    },
    z: function (t, n, r, o) {
      var i = o._originalDate || t,
        s = i.getTimezoneOffset();
      switch (n) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Am(s, ":");
        case "zzzz":
        default:
          return "GMT" + to(s, ":");
      }
    },
    t: function (t, n, r, o) {
      var i = o._originalDate || t,
        s = Math.floor(i.getTime() / 1e3);
      return Me(s, n.length);
    },
    T: function (t, n, r, o) {
      var i = o._originalDate || t,
        s = i.getTime();
      return Me(s, n.length);
    },
  };
function Am(e, t) {
  var n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = Math.floor(r / 60),
    i = r % 60;
  if (i === 0) return n + String(o);
  var s = t || "";
  return n + String(o) + s + Me(i, 2);
}
function Nm(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Me(Math.abs(e) / 60, 2);
  }
  return to(e, t);
}
function to(e, t) {
  var n = t || "",
    r = e > 0 ? "-" : "+",
    o = Math.abs(e),
    i = Me(Math.floor(o / 60), 2),
    s = Me(o % 60, 2);
  return r + i + n + s;
}
const tk = ek;
var _m = function (t, n) {
    switch (t) {
      case "P":
        return n.date({ width: "short" });
      case "PP":
        return n.date({ width: "medium" });
      case "PPP":
        return n.date({ width: "long" });
      case "PPPP":
      default:
        return n.date({ width: "full" });
    }
  },
  H0 = function (t, n) {
    switch (t) {
      case "p":
        return n.time({ width: "short" });
      case "pp":
        return n.time({ width: "medium" });
      case "ppp":
        return n.time({ width: "long" });
      case "pppp":
      default:
        return n.time({ width: "full" });
    }
  },
  nk = function (t, n) {
    var r = t.match(/(P+)(p+)?/) || [],
      o = r[1],
      i = r[2];
    if (!i) return _m(t, n);
    var s;
    switch (o) {
      case "P":
        s = n.dateTime({ width: "short" });
        break;
      case "PP":
        s = n.dateTime({ width: "medium" });
        break;
      case "PPP":
        s = n.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        s = n.dateTime({ width: "full" });
        break;
    }
    return s.replace("{{date}}", _m(o, n)).replace("{{time}}", H0(i, n));
  },
  rk = { p: H0, P: nk };
const ok = rk;
var ik = ["D", "DD"],
  sk = ["YY", "YYYY"];
function ak(e) {
  return ik.indexOf(e) !== -1;
}
function lk(e) {
  return sk.indexOf(e) !== -1;
}
function Lm(e, t, n) {
  if (e === "YYYY")
    throw new RangeError(
      "Use `yyyy` instead of `YYYY` (in `"
        .concat(t, "`) for formatting years to the input `")
        .concat(
          n,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "YY")
    throw new RangeError(
      "Use `yy` instead of `YY` (in `"
        .concat(t, "`) for formatting years to the input `")
        .concat(
          n,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "D")
    throw new RangeError(
      "Use `d` instead of `D` (in `"
        .concat(t, "`) for formatting days of the month to the input `")
        .concat(
          n,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "DD")
    throw new RangeError(
      "Use `dd` instead of `DD` (in `"
        .concat(t, "`) for formatting days of the month to the input `")
        .concat(
          n,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
}
var uk = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  ck = function (t, n, r) {
    var o,
      i = uk[t];
    return (
      typeof i == "string"
        ? (o = i)
        : n === 1
        ? (o = i.one)
        : (o = i.other.replace("{{count}}", n.toString())),
      r != null && r.addSuffix
        ? r.comparison && r.comparison > 0
          ? "in " + o
          : o + " ago"
        : o
    );
  };
const dk = ck;
function Ac(e) {
  return function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.width ? String(t.width) : e.defaultWidth,
      r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var fk = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  pk = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  hk = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  mk = {
    date: Ac({ formats: fk, defaultWidth: "full" }),
    time: Ac({ formats: pk, defaultWidth: "full" }),
    dateTime: Ac({ formats: hk, defaultWidth: "full" }),
  };
const gk = mk;
var yk = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  vk = function (t, n, r, o) {
    return yk[t];
  };
const Sk = vk;
function Fi(e) {
  return function (t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone",
      o;
    if (r === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth,
        s = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      var a = e.defaultWidth,
        l = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[l] || e.values[a];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[u];
  };
}
var wk = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  bk = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  Ck = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  xk = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  kk = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  Ek = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  Pk = function (t, n) {
    var r = Number(t),
      o = r % 100;
    if (o > 20 || o < 10)
      switch (o % 10) {
        case 1:
          return r + "st";
        case 2:
          return r + "nd";
        case 3:
          return r + "rd";
      }
    return r + "th";
  },
  Rk = {
    ordinalNumber: Pk,
    era: Fi({ values: wk, defaultWidth: "wide" }),
    quarter: Fi({
      values: bk,
      defaultWidth: "wide",
      argumentCallback: function (t) {
        return t - 1;
      },
    }),
    month: Fi({ values: Ck, defaultWidth: "wide" }),
    day: Fi({ values: xk, defaultWidth: "wide" }),
    dayPeriod: Fi({
      values: kk,
      defaultWidth: "wide",
      formattingValues: Ek,
      defaultFormattingWidth: "wide",
    }),
  };
const Tk = Rk;
function Bi(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.width,
      o = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      i = t.match(o);
    if (!i) return null;
    var s = i[0],
      a = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      l = Array.isArray(a)
        ? Ok(a, function (c) {
            return c.test(s);
          })
        : $k(a, function (c) {
            return c.test(s);
          }),
      u;
    (u = e.valueCallback ? e.valueCallback(l) : l),
      (u = n.valueCallback ? n.valueCallback(u) : u);
    var d = t.slice(s.length);
    return { value: u, rest: d };
  };
}
function $k(e, t) {
  for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
}
function Ok(e, t) {
  for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function Mk(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = t.match(e.matchPattern);
    if (!r) return null;
    var o = r[0],
      i = t.match(e.parsePattern);
    if (!i) return null;
    var s = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    var a = t.slice(o.length);
    return { value: s, rest: a };
  };
}
var Ik = /^(\d+)(th|st|nd|rd)?/i,
  Ak = /\d+/i,
  Nk = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  _k = { any: [/^b/i, /^(a|c)/i] },
  Lk = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  Fk = { any: [/1/i, /2/i, /3/i, /4/i] },
  Bk = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Dk = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  zk = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Uk = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  Wk = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  Vk = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  jk = {
    ordinalNumber: Mk({
      matchPattern: Ik,
      parsePattern: Ak,
      valueCallback: function (t) {
        return parseInt(t, 10);
      },
    }),
    era: Bi({
      matchPatterns: Nk,
      defaultMatchWidth: "wide",
      parsePatterns: _k,
      defaultParseWidth: "any",
    }),
    quarter: Bi({
      matchPatterns: Lk,
      defaultMatchWidth: "wide",
      parsePatterns: Fk,
      defaultParseWidth: "any",
      valueCallback: function (t) {
        return t + 1;
      },
    }),
    month: Bi({
      matchPatterns: Bk,
      defaultMatchWidth: "wide",
      parsePatterns: Dk,
      defaultParseWidth: "any",
    }),
    day: Bi({
      matchPatterns: zk,
      defaultMatchWidth: "wide",
      parsePatterns: Uk,
      defaultParseWidth: "any",
    }),
    dayPeriod: Bi({
      matchPatterns: Wk,
      defaultMatchWidth: "any",
      parsePatterns: Vk,
      defaultParseWidth: "any",
    }),
  };
const Hk = jk;
var Kk = {
  code: "en-US",
  formatDistance: dk,
  formatLong: gk,
  formatRelative: Sk,
  localize: Tk,
  match: Hk,
  options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
const qk = Kk;
var Gk = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Yk = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Qk = /^'([^]*?)'?$/,
  Xk = /''/g,
  Jk = /[a-zA-Z]/;
function zr(e, t, n) {
  var r, o, i, s, a, l, u, d, c, f, w, y, v, C, h, p, m, b;
  Ht(2, arguments);
  var k = String(t),
    P = cu(),
    R =
      (r =
        (o = n == null ? void 0 : n.locale) !== null && o !== void 0
          ? o
          : P.locale) !== null && r !== void 0
        ? r
        : qk,
    T = wo(
      (i =
        (s =
          (a =
            (l = n == null ? void 0 : n.firstWeekContainsDate) !== null &&
            l !== void 0
              ? l
              : n == null ||
                (u = n.locale) === null ||
                u === void 0 ||
                (d = u.options) === null ||
                d === void 0
              ? void 0
              : d.firstWeekContainsDate) !== null && a !== void 0
            ? a
            : P.firstWeekContainsDate) !== null && s !== void 0
          ? s
          : (c = P.locale) === null ||
            c === void 0 ||
            (f = c.options) === null ||
            f === void 0
          ? void 0
          : f.firstWeekContainsDate) !== null && i !== void 0
        ? i
        : 1
    );
  if (!(T >= 1 && T <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var M = wo(
    (w =
      (y =
        (v =
          (C = n == null ? void 0 : n.weekStartsOn) !== null && C !== void 0
            ? C
            : n == null ||
              (h = n.locale) === null ||
              h === void 0 ||
              (p = h.options) === null ||
              p === void 0
            ? void 0
            : p.weekStartsOn) !== null && v !== void 0
          ? v
          : P.weekStartsOn) !== null && y !== void 0
        ? y
        : (m = P.locale) === null ||
          m === void 0 ||
          (b = m.options) === null ||
          b === void 0
        ? void 0
        : b.weekStartsOn) !== null && w !== void 0
      ? w
      : 0
  );
  if (!(M >= 0 && M <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!R.localize)
    throw new RangeError("locale must contain localize property");
  if (!R.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var g = Xn(e);
  if (!Vx(g)) throw new RangeError("Invalid time value");
  var O = Ux(g),
    I = jx(g, O),
    _ = {
      firstWeekContainsDate: T,
      weekStartsOn: M,
      locale: R,
      _originalDate: g,
    },
    W = k
      .match(Yk)
      .map(function (A) {
        var L = A[0];
        if (L === "p" || L === "P") {
          var V = ok[L];
          return V(A, R.formatLong);
        }
        return A;
      })
      .join("")
      .match(Gk)
      .map(function (A) {
        if (A === "''") return "'";
        var L = A[0];
        if (L === "'") return Zk(A);
        var V = tk[L];
        if (V)
          return (
            !(n != null && n.useAdditionalWeekYearTokens) &&
              lk(A) &&
              Lm(A, t, String(e)),
            !(n != null && n.useAdditionalDayOfYearTokens) &&
              ak(A) &&
              Lm(A, t, String(e)),
            V(I, A, R.localize, _)
          );
        if (L.match(Jk))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              L +
              "`"
          );
        return A;
      })
      .join("");
  return W;
}
function Zk(e) {
  var t = e.match(Qk);
  return t ? t[1].replace(Xk, "'") : e;
}
function eE(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Qd(e, t) {
  return (
    (Qd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Qd(e, t)
  );
}
function K0(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: tE } = Object.prototype,
  { getPrototypeOf: Ep } = Object,
  du = ((e) => (t) => {
    const n = tE.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  _n = (e) => ((e = e.toLowerCase()), (t) => du(t) === e),
  fu = (e) => (t) => typeof t === e,
  { isArray: Ci } = Array,
  Ns = fu("undefined");
function nE(e) {
  return (
    e !== null &&
    !Ns(e) &&
    e.constructor !== null &&
    !Ns(e.constructor) &&
    an(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const q0 = _n("ArrayBuffer");
function rE(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && q0(e.buffer)),
    t
  );
}
const oE = fu("string"),
  an = fu("function"),
  G0 = fu("number"),
  pu = (e) => e !== null && typeof e == "object",
  iE = (e) => e === !0 || e === !1,
  Va = (e) => {
    if (du(e) !== "object") return !1;
    const t = Ep(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  sE = _n("Date"),
  aE = _n("File"),
  lE = _n("Blob"),
  uE = _n("FileList"),
  cE = (e) => pu(e) && an(e.pipe),
  dE = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (an(e.append) &&
          ((t = du(e)) === "formdata" ||
            (t === "object" &&
              an(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  fE = _n("URLSearchParams"),
  [pE, hE, mE, gE] = ["ReadableStream", "Request", "Response", "Headers"].map(
    _n
  ),
  yE = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Gs(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Ci(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let a;
    for (r = 0; r < s; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function Y0(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const lo = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Q0 = (e) => !Ns(e) && e !== lo;
function Xd() {
  const { caseless: e } = (Q0(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Y0(t, o)) || o;
      Va(t[i]) && Va(r)
        ? (t[i] = Xd(t[i], r))
        : Va(r)
        ? (t[i] = Xd({}, r))
        : Ci(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Gs(arguments[r], n);
  return t;
}
const vE = (e, t, n, { allOwnKeys: r } = {}) => (
    Gs(
      t,
      (o, i) => {
        n && an(o) ? (e[i] = K0(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  SE = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  wE = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  bE = (e, t, n, r) => {
    let o, i, s;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
      e = n !== !1 && Ep(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  CE = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  xE = (e) => {
    if (!e) return null;
    if (Ci(e)) return e;
    let t = e.length;
    if (!G0(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  kE = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Ep(Uint8Array)),
  EE = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  PE = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  RE = _n("HTMLFormElement"),
  TE = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Fm = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  $E = _n("RegExp"),
  X0 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Gs(n, (o, i) => {
      let s;
      (s = t(o, i, e)) !== !1 && (r[i] = s || o);
    }),
      Object.defineProperties(e, r);
  },
  OE = (e) => {
    X0(e, (t, n) => {
      if (an(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (an(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  ME = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return Ci(e) ? r(e) : r(String(e).split(t)), n;
  },
  IE = () => {},
  AE = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Nc = "abcdefghijklmnopqrstuvwxyz",
  Bm = "0123456789",
  J0 = { DIGIT: Bm, ALPHA: Nc, ALPHA_DIGIT: Nc + Nc.toUpperCase() + Bm },
  NE = (e = 16, t = J0.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function _E(e) {
  return !!(
    e &&
    an(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const LE = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (pu(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = Ci(r) ? [] : {};
            return (
              Gs(r, (s, a) => {
                const l = n(s, o + 1);
                !Ns(l) && (i[a] = l);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  FE = _n("AsyncFunction"),
  BE = (e) => e && (pu(e) || an(e)) && an(e.then) && an(e.catch),
  Z0 = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          lo.addEventListener(
            "message",
            ({ source: o, data: i }) => {
              o === lo && i === n && r.length && r.shift()();
            },
            !1
          ),
          (o) => {
            r.push(o), lo.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    an(lo.postMessage)
  ),
  DE =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(lo)
      : (typeof process < "u" && process.nextTick) || Z0,
  F = {
    isArray: Ci,
    isArrayBuffer: q0,
    isBuffer: nE,
    isFormData: dE,
    isArrayBufferView: rE,
    isString: oE,
    isNumber: G0,
    isBoolean: iE,
    isObject: pu,
    isPlainObject: Va,
    isReadableStream: pE,
    isRequest: hE,
    isResponse: mE,
    isHeaders: gE,
    isUndefined: Ns,
    isDate: sE,
    isFile: aE,
    isBlob: lE,
    isRegExp: $E,
    isFunction: an,
    isStream: cE,
    isURLSearchParams: fE,
    isTypedArray: kE,
    isFileList: uE,
    forEach: Gs,
    merge: Xd,
    extend: vE,
    trim: yE,
    stripBOM: SE,
    inherits: wE,
    toFlatObject: bE,
    kindOf: du,
    kindOfTest: _n,
    endsWith: CE,
    toArray: xE,
    forEachEntry: EE,
    matchAll: PE,
    isHTMLForm: RE,
    hasOwnProperty: Fm,
    hasOwnProp: Fm,
    reduceDescriptors: X0,
    freezeMethods: OE,
    toObjectSet: ME,
    toCamelCase: TE,
    noop: IE,
    toFiniteNumber: AE,
    findKey: Y0,
    global: lo,
    isContextDefined: Q0,
    ALPHABET: J0,
    generateString: NE,
    isSpecCompliantForm: _E,
    toJSONObject: LE,
    isAsyncFn: FE,
    isThenable: BE,
    setImmediate: Z0,
    asap: DE,
  };
function he(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
F.inherits(he, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: F.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const e1 = he.prototype,
  t1 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  t1[e] = { value: e };
});
Object.defineProperties(he, t1);
Object.defineProperty(e1, "isAxiosError", { value: !0 });
he.from = (e, t, n, r, o, i) => {
  const s = Object.create(e1);
  return (
    F.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    he.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const zE = null;
function Jd(e) {
  return F.isPlainObject(e) || F.isArray(e);
}
function n1(e) {
  return F.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Dm(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = n1(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function UE(e) {
  return F.isArray(e) && !e.some(Jd);
}
const WE = F.toFlatObject(F, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function hu(e, t, n) {
  if (!F.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = F.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, C) {
        return !F.isUndefined(C[v]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || d,
    i = n.dots,
    s = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && F.isSpecCompliantForm(t);
  if (!F.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(y) {
    if (y === null) return "";
    if (F.isDate(y)) return y.toISOString();
    if (!l && F.isBlob(y))
      throw new he("Blob is not supported. Use a Buffer instead.");
    return F.isArrayBuffer(y) || F.isTypedArray(y)
      ? l && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function d(y, v, C) {
    let h = y;
    if (y && !C && typeof y == "object") {
      if (F.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (F.isArray(y) && UE(y)) ||
        ((F.isFileList(y) || F.endsWith(v, "[]")) && (h = F.toArray(y)))
      )
        return (
          (v = n1(v)),
          h.forEach(function (m, b) {
            !(F.isUndefined(m) || m === null) &&
              t.append(
                s === !0 ? Dm([v], b, i) : s === null ? v : v + "[]",
                u(m)
              );
          }),
          !1
        );
    }
    return Jd(y) ? !0 : (t.append(Dm(C, v, i), u(y)), !1);
  }
  const c = [],
    f = Object.assign(WE, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: Jd,
    });
  function w(y, v) {
    if (!F.isUndefined(y)) {
      if (c.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      c.push(y),
        F.forEach(y, function (h, p) {
          (!(F.isUndefined(h) || h === null) &&
            o.call(t, h, F.isString(p) ? p.trim() : p, v, f)) === !0 &&
            w(h, v ? v.concat(p) : [p]);
        }),
        c.pop();
    }
  }
  if (!F.isObject(e)) throw new TypeError("data must be an object");
  return w(e), t;
}
function zm(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Pp(e, t) {
  (this._pairs = []), e && hu(e, this, t);
}
const r1 = Pp.prototype;
r1.append = function (t, n) {
  this._pairs.push([t, n]);
};
r1.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, zm);
      }
    : zm;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function VE(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function o1(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || VE;
  F.isFunction(n) && (n = { serialize: n });
  const o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = F.isURLSearchParams(t) ? t.toString() : new Pp(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class jE {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    F.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Um = jE,
  i1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  HE = typeof URLSearchParams < "u" ? URLSearchParams : Pp,
  KE = typeof FormData < "u" ? FormData : null,
  qE = typeof Blob < "u" ? Blob : null,
  GE = {
    isBrowser: !0,
    classes: { URLSearchParams: HE, FormData: KE, Blob: qE },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Rp = typeof window < "u" && typeof document < "u",
  Zd = (typeof navigator == "object" && navigator) || void 0,
  YE =
    Rp &&
    (!Zd || ["ReactNative", "NativeScript", "NS"].indexOf(Zd.product) < 0),
  QE = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  XE = (Rp && window.location.href) || "http://localhost",
  JE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Rp,
        hasStandardBrowserEnv: YE,
        hasStandardBrowserWebWorkerEnv: QE,
        navigator: Zd,
        origin: XE,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  _t = { ...JE, ...GE };
function ZE(e, t) {
  return hu(
    e,
    new _t.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return _t.isNode && F.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function e2(e) {
  return F.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function t2(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function s1(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s),
      l = i >= n.length;
    return (
      (s = !s && F.isArray(o) ? o.length : s),
      l
        ? (F.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !a)
        : ((!o[s] || !F.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && F.isArray(o[s]) && (o[s] = t2(o[s])),
          !a)
    );
  }
  if (F.isFormData(e) && F.isFunction(e.entries)) {
    const n = {};
    return (
      F.forEachEntry(e, (r, o) => {
        t(e2(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function n2(e, t, n) {
  if (F.isString(e))
    try {
      return (t || JSON.parse)(e), F.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Tp = {
  transitional: i1,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = F.isObject(t);
      if ((i && F.isHTMLForm(t) && (t = new FormData(t)), F.isFormData(t)))
        return o ? JSON.stringify(s1(t)) : t;
      if (
        F.isArrayBuffer(t) ||
        F.isBuffer(t) ||
        F.isStream(t) ||
        F.isFile(t) ||
        F.isBlob(t) ||
        F.isReadableStream(t)
      )
        return t;
      if (F.isArrayBufferView(t)) return t.buffer;
      if (F.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return ZE(t, this.formSerializer).toString();
        if ((a = F.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return hu(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), n2(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Tp.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (F.isResponse(t) || F.isReadableStream(t)) return t;
      if (t && F.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (s)
            throw a.name === "SyntaxError"
              ? he.from(a, he.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: _t.classes.FormData, Blob: _t.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
F.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Tp.headers[e] = {};
});
const $p = Tp,
  r2 = F.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  o2 = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && r2[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Wm = Symbol("internals");
function Di(e) {
  return e && String(e).trim().toLowerCase();
}
function ja(e) {
  return e === !1 || e == null ? e : F.isArray(e) ? e.map(ja) : String(e);
}
function i2(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const s2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function _c(e, t, n, r, o) {
  if (F.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!F.isString(t))) {
    if (F.isString(r)) return t.indexOf(r) !== -1;
    if (F.isRegExp(r)) return r.test(t);
  }
}
function a2(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function l2(e, t) {
  const n = F.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
class mu {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, l, u) {
      const d = Di(l);
      if (!d) throw new Error("header name must be a non-empty string");
      const c = F.findKey(o, d);
      (!c || o[c] === void 0 || u === !0 || (u === void 0 && o[c] !== !1)) &&
        (o[c || l] = ja(a));
    }
    const s = (a, l) => F.forEach(a, (u, d) => i(u, d, l));
    if (F.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (F.isString(t) && (t = t.trim()) && !s2(t)) s(o2(t), n);
    else if (F.isHeaders(t)) for (const [a, l] of t.entries()) i(l, a, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Di(t)), t)) {
      const r = F.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return i2(o);
        if (F.isFunction(n)) return n.call(this, o, r);
        if (F.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Di(t)), t)) {
      const r = F.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || _c(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = Di(s)), s)) {
        const a = F.findKey(r, s);
        a && (!n || _c(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return F.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || _c(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      F.forEach(this, (o, i) => {
        const s = F.findKey(r, i);
        if (s) {
          (n[s] = ja(o)), delete n[i];
          return;
        }
        const a = t ? a2(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = ja(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      F.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && F.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Wm] = this[Wm] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const a = Di(s);
      r[a] || (l2(o, s), (r[a] = !0));
    }
    return F.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
mu.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
F.reduceDescriptors(mu.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
F.freezeMethods(mu);
const In = mu;
function Lc(e, t) {
  const n = this || $p,
    r = t || n,
    o = In.from(r.headers);
  let i = r.data;
  return (
    F.forEach(e, function (a) {
      i = a.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function a1(e) {
  return !!(e && e.__CANCEL__);
}
function xi(e, t, n) {
  he.call(this, e ?? "canceled", he.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
F.inherits(xi, he, { __CANCEL__: !0 });
function l1(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new he(
          "Request failed with status code " + n.status,
          [he.ERR_BAD_REQUEST, he.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function u2(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function c2(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        d = r[i];
      s || (s = u), (n[o] = l), (r[o] = u);
      let c = i,
        f = 0;
      for (; c !== o; ) (f += n[c++]), (c = c % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return;
      const w = d && u - d;
      return w ? Math.round((f * 1e3) / w) : void 0;
    }
  );
}
function d2(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    i;
  const s = (u, d = Date.now()) => {
    (n = d), (o = null), i && (clearTimeout(i), (i = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const d = Date.now(),
        c = d - n;
      c >= r
        ? s(u, d)
        : ((o = u),
          i ||
            (i = setTimeout(() => {
              (i = null), s(o);
            }, r - c)));
    },
    () => o && s(o),
  ];
}
const Ml = (e, t, n = 3) => {
    let r = 0;
    const o = c2(50, 250);
    return d2((i) => {
      const s = i.loaded,
        a = i.lengthComputable ? i.total : void 0,
        l = s - r,
        u = o(l),
        d = s <= a;
      r = s;
      const c = {
        loaded: s,
        total: a,
        progress: a ? s / a : void 0,
        bytes: l,
        rate: u || void 0,
        estimated: u && a && d ? (a - s) / u : void 0,
        event: i,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(c);
    }, n);
  },
  Vm = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  jm =
    (e) =>
    (...t) =>
      F.asap(() => e(...t)),
  f2 = _t.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, _t.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(_t.origin),
        _t.navigator && /(msie|trident)/i.test(_t.navigator.userAgent)
      )
    : () => !0,
  p2 = _t.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, i) {
          const s = [e + "=" + encodeURIComponent(t)];
          F.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
            F.isString(r) && s.push("path=" + r),
            F.isString(o) && s.push("domain=" + o),
            i === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function h2(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function m2(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function u1(e, t) {
  return e && !h2(t) ? m2(e, t) : t;
}
const Hm = (e) => (e instanceof In ? { ...e } : e);
function bo(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, c, f) {
    return F.isPlainObject(u) && F.isPlainObject(d)
      ? F.merge.call({ caseless: f }, u, d)
      : F.isPlainObject(d)
      ? F.merge({}, d)
      : F.isArray(d)
      ? d.slice()
      : d;
  }
  function o(u, d, c, f) {
    if (F.isUndefined(d)) {
      if (!F.isUndefined(u)) return r(void 0, u, c, f);
    } else return r(u, d, c, f);
  }
  function i(u, d) {
    if (!F.isUndefined(d)) return r(void 0, d);
  }
  function s(u, d) {
    if (F.isUndefined(d)) {
      if (!F.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function a(u, d, c) {
    if (c in t) return r(u, d);
    if (c in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, d, c) => o(Hm(u), Hm(d), c, !0),
  };
  return (
    F.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const c = l[d] || o,
        f = c(e[d], t[d], d);
      (F.isUndefined(f) && c !== a) || (n[d] = f);
    }),
    n
  );
}
const c1 = (e) => {
    const t = bo({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: i,
      headers: s,
      auth: a,
    } = t;
    (t.headers = s = In.from(s)),
      (t.url = o1(u1(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        s.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let l;
    if (F.isFormData(n)) {
      if (_t.hasStandardBrowserEnv || _t.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((l = s.getContentType()) !== !1) {
        const [u, ...d] = l
          ? l
              .split(";")
              .map((c) => c.trim())
              .filter(Boolean)
          : [];
        s.setContentType([u || "multipart/form-data", ...d].join("; "));
      }
    }
    if (
      _t.hasStandardBrowserEnv &&
      (r && F.isFunction(r) && (r = r(t)), r || (r !== !1 && f2(t.url)))
    ) {
      const u = o && i && p2.read(i);
      u && s.set(o, u);
    }
    return t;
  },
  g2 = typeof XMLHttpRequest < "u",
  y2 =
    g2 &&
    function (e) {
      return new Promise(function (n, r) {
        const o = c1(e);
        let i = o.data;
        const s = In.from(o.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = o,
          d,
          c,
          f,
          w,
          y;
        function v() {
          w && w(),
            y && y(),
            o.cancelToken && o.cancelToken.unsubscribe(d),
            o.signal && o.signal.removeEventListener("abort", d);
        }
        let C = new XMLHttpRequest();
        C.open(o.method.toUpperCase(), o.url, !0), (C.timeout = o.timeout);
        function h() {
          if (!C) return;
          const m = In.from(
              "getAllResponseHeaders" in C && C.getAllResponseHeaders()
            ),
            k = {
              data:
                !a || a === "text" || a === "json"
                  ? C.responseText
                  : C.response,
              status: C.status,
              statusText: C.statusText,
              headers: m,
              config: e,
              request: C,
            };
          l1(
            function (R) {
              n(R), v();
            },
            function (R) {
              r(R), v();
            },
            k
          ),
            (C = null);
        }
        "onloadend" in C
          ? (C.onloadend = h)
          : (C.onreadystatechange = function () {
              !C ||
                C.readyState !== 4 ||
                (C.status === 0 &&
                  !(C.responseURL && C.responseURL.indexOf("file:") === 0)) ||
                setTimeout(h);
            }),
          (C.onabort = function () {
            C &&
              (r(new he("Request aborted", he.ECONNABORTED, e, C)), (C = null));
          }),
          (C.onerror = function () {
            r(new he("Network Error", he.ERR_NETWORK, e, C)), (C = null);
          }),
          (C.ontimeout = function () {
            let b = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const k = o.transitional || i1;
            o.timeoutErrorMessage && (b = o.timeoutErrorMessage),
              r(
                new he(
                  b,
                  k.clarifyTimeoutError ? he.ETIMEDOUT : he.ECONNABORTED,
                  e,
                  C
                )
              ),
              (C = null);
          }),
          i === void 0 && s.setContentType(null),
          "setRequestHeader" in C &&
            F.forEach(s.toJSON(), function (b, k) {
              C.setRequestHeader(k, b);
            }),
          F.isUndefined(o.withCredentials) ||
            (C.withCredentials = !!o.withCredentials),
          a && a !== "json" && (C.responseType = o.responseType),
          u && (([f, y] = Ml(u, !0)), C.addEventListener("progress", f)),
          l &&
            C.upload &&
            (([c, w] = Ml(l)),
            C.upload.addEventListener("progress", c),
            C.upload.addEventListener("loadend", w)),
          (o.cancelToken || o.signal) &&
            ((d = (m) => {
              C &&
                (r(!m || m.type ? new xi(null, e, C) : m),
                C.abort(),
                (C = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(d),
            o.signal &&
              (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
        const p = u2(o.url);
        if (p && _t.protocols.indexOf(p) === -1) {
          r(new he("Unsupported protocol " + p + ":", he.ERR_BAD_REQUEST, e));
          return;
        }
        C.send(i || null);
      });
    },
  v2 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        o;
      const i = function (u) {
        if (!o) {
          (o = !0), a();
          const d = u instanceof Error ? u : this.reason;
          r.abort(
            d instanceof he ? d : new xi(d instanceof Error ? d.message : d)
          );
        }
      };
      let s =
        t &&
        setTimeout(() => {
          (s = null), i(new he(`timeout ${t} of ms exceeded`, he.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (s && clearTimeout(s),
          (s = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(i)
              : u.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", i));
      const { signal: l } = r;
      return (l.unsubscribe = () => F.asap(a)), l;
    }
  },
  S2 = v2,
  w2 = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  b2 = async function* (e, t) {
    for await (const n of C2(e)) yield* w2(n, t);
  },
  C2 = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Km = (e, t, n, r) => {
    const o = b2(e, t);
    let i = 0,
      s,
      a = (l) => {
        s || ((s = !0), r && r(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: u, value: d } = await o.next();
            if (u) {
              a(), l.close();
              return;
            }
            let c = d.byteLength;
            if (n) {
              let f = (i += c);
              n(f);
            }
            l.enqueue(new Uint8Array(d));
          } catch (u) {
            throw (a(u), u);
          }
        },
        cancel(l) {
          return a(l), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  gu =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  d1 = gu && typeof ReadableStream == "function",
  x2 =
    gu &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  f1 = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  k2 =
    d1 &&
    f1(() => {
      let e = !1;
      const t = new Request(_t.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  qm = 64 * 1024,
  ef = d1 && f1(() => F.isReadableStream(new Response("").body)),
  Il = { stream: ef && ((e) => e.body) };
gu &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Il[t] &&
        (Il[t] = F.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new he(
                `Response type '${t}' is not supported`,
                he.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const E2 = async (e) => {
    if (e == null) return 0;
    if (F.isBlob(e)) return e.size;
    if (F.isSpecCompliantForm(e))
      return (
        await new Request(_t.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (F.isArrayBufferView(e) || F.isArrayBuffer(e)) return e.byteLength;
    if ((F.isURLSearchParams(e) && (e = e + ""), F.isString(e)))
      return (await x2(e)).byteLength;
  },
  P2 = async (e, t) => {
    const n = F.toFiniteNumber(e.getContentLength());
    return n ?? E2(t);
  },
  R2 =
    gu &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: i,
        timeout: s,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: u,
        headers: d,
        withCredentials: c = "same-origin",
        fetchOptions: f,
      } = c1(e);
      u = u ? (u + "").toLowerCase() : "text";
      let w = S2([o, i && i.toAbortSignal()], s),
        y;
      const v =
        w &&
        w.unsubscribe &&
        (() => {
          w.unsubscribe();
        });
      let C;
      try {
        if (
          l &&
          k2 &&
          n !== "get" &&
          n !== "head" &&
          (C = await P2(d, r)) !== 0
        ) {
          let k = new Request(t, { method: "POST", body: r, duplex: "half" }),
            P;
          if (
            (F.isFormData(r) &&
              (P = k.headers.get("content-type")) &&
              d.setContentType(P),
            k.body)
          ) {
            const [R, T] = Vm(C, Ml(jm(l)));
            r = Km(k.body, qm, R, T);
          }
        }
        F.isString(c) || (c = c ? "include" : "omit");
        const h = "credentials" in Request.prototype;
        y = new Request(t, {
          ...f,
          signal: w,
          method: n.toUpperCase(),
          headers: d.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: h ? c : void 0,
        });
        let p = await fetch(y);
        const m = ef && (u === "stream" || u === "response");
        if (ef && (a || (m && v))) {
          const k = {};
          ["status", "statusText", "headers"].forEach((M) => {
            k[M] = p[M];
          });
          const P = F.toFiniteNumber(p.headers.get("content-length")),
            [R, T] = (a && Vm(P, Ml(jm(a), !0))) || [];
          p = new Response(
            Km(p.body, qm, R, () => {
              T && T(), v && v();
            }),
            k
          );
        }
        u = u || "text";
        let b = await Il[F.findKey(Il, u) || "text"](p, e);
        return (
          !m && v && v(),
          await new Promise((k, P) => {
            l1(k, P, {
              data: b,
              headers: In.from(p.headers),
              status: p.status,
              statusText: p.statusText,
              config: e,
              request: y,
            });
          })
        );
      } catch (h) {
        throw (
          (v && v(),
          h && h.name === "TypeError" && /fetch/i.test(h.message)
            ? Object.assign(new he("Network Error", he.ERR_NETWORK, e, y), {
                cause: h.cause || h,
              })
            : he.from(h, h && h.code, e, y))
        );
      }
    }),
  tf = { http: zE, xhr: y2, fetch: R2 };
F.forEach(tf, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Gm = (e) => `- ${e}`,
  T2 = (e) => F.isFunction(e) || e === null || e === !1,
  p1 = {
    getAdapter: (e) => {
      e = F.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let s;
        if (
          ((r = n),
          !T2(n) && ((r = tf[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new he(`Unknown adapter '${s}'`);
        if (r) break;
        o[s || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let s = t
          ? i.length > 1
            ? `since :
` +
              i.map(Gm).join(`
`)
            : " " + Gm(i[0])
          : "as no adapter specified";
        throw new he(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: tf,
  };
function Fc(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new xi(null, e);
}
function Ym(e) {
  return (
    Fc(e),
    (e.headers = In.from(e.headers)),
    (e.data = Lc.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    p1
      .getAdapter(e.adapter || $p.adapter)(e)
      .then(
        function (r) {
          return (
            Fc(e),
            (r.data = Lc.call(e, e.transformResponse, r)),
            (r.headers = In.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            a1(r) ||
              (Fc(e),
              r &&
                r.response &&
                ((r.response.data = Lc.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = In.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const h1 = "1.7.9",
  yu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    yu[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Qm = {};
yu.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      h1 +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (i, s, a) => {
    if (t === !1)
      throw new he(
        o(s, " has been removed" + (n ? " in " + n : "")),
        he.ERR_DEPRECATED
      );
    return (
      n &&
        !Qm[s] &&
        ((Qm[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, s, a) : !0
    );
  };
};
yu.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function $2(e, t, n) {
  if (typeof e != "object")
    throw new he("options must be an object", he.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const a = e[i],
        l = a === void 0 || s(a, i, e);
      if (l !== !0)
        throw new he("option " + i + " must be " + l, he.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new he("Unknown option " + i, he.ERR_BAD_OPTION);
  }
}
const Ha = { assertOptions: $2, validators: yu },
  Fn = Ha.validators;
class Al {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Um(), response: new Um() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = bo(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Ha.assertOptions(
        r,
        {
          silentJSONParsing: Fn.transitional(Fn.boolean),
          forcedJSONParsing: Fn.transitional(Fn.boolean),
          clarifyTimeoutError: Fn.transitional(Fn.boolean),
        },
        !1
      ),
      o != null &&
        (F.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Ha.assertOptions(
              o,
              { encode: Fn.function, serialize: Fn.function },
              !0
            )),
      Ha.assertOptions(
        n,
        {
          baseUrl: Fn.spelling("baseURL"),
          withXsrfToken: Fn.spelling("withXSRFToken"),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = i && F.merge(i.common, i[n.method]);
    i &&
      F.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete i[y];
        }
      ),
      (n.headers = In.concat(s, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((l = l && v.synchronous), a.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let d,
      c = 0,
      f;
    if (!l) {
      const y = [Ym.bind(this), void 0];
      for (
        y.unshift.apply(y, a),
          y.push.apply(y, u),
          f = y.length,
          d = Promise.resolve(n);
        c < f;

      )
        d = d.then(y[c++], y[c++]);
      return d;
    }
    f = a.length;
    let w = n;
    for (c = 0; c < f; ) {
      const y = a[c++],
        v = a[c++];
      try {
        w = y(w);
      } catch (C) {
        v.call(this, C);
        break;
      }
    }
    try {
      d = Ym.call(this, w);
    } catch (y) {
      return Promise.reject(y);
    }
    for (c = 0, f = u.length; c < f; ) d = d.then(u[c++], u[c++]);
    return d;
  }
  getUri(t) {
    t = bo(this.defaults, t);
    const n = u1(t.baseURL, t.url);
    return o1(n, t.params, t.paramsSerializer);
  }
}
F.forEach(["delete", "get", "head", "options"], function (t) {
  Al.prototype[t] = function (n, r) {
    return this.request(
      bo(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
F.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, s, a) {
      return this.request(
        bo(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: s,
        })
      );
    };
  }
  (Al.prototype[t] = n()), (Al.prototype[t + "Form"] = n(!0));
});
const Ka = Al;
class Op {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, a) {
        r.reason || ((r.reason = new xi(i, s, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Op(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const O2 = Op;
function M2(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function I2(e) {
  return F.isObject(e) && e.isAxiosError === !0;
}
const nf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(nf).forEach(([e, t]) => {
  nf[t] = e;
});
const A2 = nf;
function m1(e) {
  const t = new Ka(e),
    n = K0(Ka.prototype.request, t);
  return (
    F.extend(n, Ka.prototype, t, { allOwnKeys: !0 }),
    F.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return m1(bo(e, o));
    }),
    n
  );
}
const ft = m1($p);
ft.Axios = Ka;
ft.CanceledError = xi;
ft.CancelToken = O2;
ft.isCancel = a1;
ft.VERSION = h1;
ft.toFormData = hu;
ft.AxiosError = he;
ft.Cancel = ft.CanceledError;
ft.all = function (t) {
  return Promise.all(t);
};
ft.spread = M2;
ft.isAxiosError = I2;
ft.mergeConfig = bo;
ft.AxiosHeaders = In;
ft.formToJSON = (e) => s1(F.isHTMLForm(e) ? new FormData(e) : e);
ft.getAdapter = p1.getAdapter;
ft.HttpStatusCode = A2;
ft.default = ft;
const Bt = ft;
Bt.interceptors.response.use(
  (e) => e,
  (e) => (e.response && e.response.status, Promise.reject(e))
);
const Tt = { baseURL: "/api/v1" },
  N2 = async (e) => {
    try {
      return (
        await Bt.post(`${Tt.baseURL}/student/attendance/date`, { date: e })
      ).data;
    } catch (t) {
      throw t;
    }
  },
  _2 = async (e, t) => {
    try {
      return await Bt.post(`${Tt.baseURL}/student/attendance`, {
        date: e,
        Ids: t,
      });
    } catch (n) {
      throw n;
    }
  },
  L2 = async (e) => {
    try {
      return await Bt.post(`${Tt.baseURL}/student`, e);
    } catch (t) {
      throw t;
    }
  },
  F2 = async (e, t) => {
    try {
      return (await Bt.put(`${Tt.baseURL}/student/${e}`, t)).data;
    } catch (n) {
      throw n;
    }
  },
  B2 = async (e) => {
    try {
      await Bt.delete(`${Tt.baseURL}/student/${e}`);
    } catch (t) {
      throw t;
    }
  },
  D2 = async (e, t) => {
    try {
      return (await Bt.delete(`${Tt.baseURL}/student/attendance/${e}/${t}`))
        .data;
    } catch (n) {
      throw n;
    }
  },
  Or = {
    getStudents: N2,
    markAttendance: _2,
    addStudent: L2,
    updateStudentDetails: F2,
    deleteStudent: B2,
    removeAttendance: D2,
  },
  z2 = { black: "#000", white: "#fff" },
  _s = z2,
  U2 = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  $o = U2,
  W2 = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Oo = W2,
  V2 = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Mo = V2,
  j2 = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Io = j2,
  H2 = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Ao = H2,
  K2 = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  zi = K2,
  q2 = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  G2 = q2;
function dr(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return (
    t.forEach((r) => n.searchParams.append("args[]", r)),
    `Minified MUI error #${e}; visit ${n} for the full message.`
  );
}
const Yn = "$$material";
function Nl() {
  return (
    (Nl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nl.apply(null, arguments)
  );
}
var Y2 = !1;
function Q2(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function X2(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var J2 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !Y2 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(X2(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Q2(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var o;
          return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  It = "-ms-",
  _l = "-moz-",
  Pe = "-webkit-",
  g1 = "comm",
  Mp = "rule",
  Ip = "decl",
  Z2 = "@import",
  y1 = "@keyframes",
  eP = "@layer",
  tP = Math.abs,
  vu = String.fromCharCode,
  nP = Object.assign;
function rP(e, t) {
  return Pt(e, 0) ^ 45
    ? (((((((t << 2) ^ Pt(e, 0)) << 2) ^ Pt(e, 1)) << 2) ^ Pt(e, 2)) << 2) ^
        Pt(e, 3)
    : 0;
}
function v1(e) {
  return e.trim();
}
function oP(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Re(e, t, n) {
  return e.replace(t, n);
}
function rf(e, t) {
  return e.indexOf(t);
}
function Pt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ls(e, t, n) {
  return e.slice(t, n);
}
function Un(e) {
  return e.length;
}
function Ap(e) {
  return e.length;
}
function Ea(e, t) {
  return t.push(e), e;
}
function iP(e, t) {
  return e.map(t).join("");
}
var Su = 1,
  pi = 1,
  S1 = 0,
  Zt = 0,
  ct = 0,
  ki = "";
function wu(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Su,
    column: pi,
    length: s,
    return: "",
  };
}
function Ui(e, t) {
  return nP(wu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function sP() {
  return ct;
}
function aP() {
  return (
    (ct = Zt > 0 ? Pt(ki, --Zt) : 0), pi--, ct === 10 && ((pi = 1), Su--), ct
  );
}
function ln() {
  return (
    (ct = Zt < S1 ? Pt(ki, Zt++) : 0), pi++, ct === 10 && ((pi = 1), Su++), ct
  );
}
function Qn() {
  return Pt(ki, Zt);
}
function qa() {
  return Zt;
}
function Ys(e, t) {
  return Ls(ki, e, t);
}
function Fs(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function w1(e) {
  return (Su = pi = 1), (S1 = Un((ki = e))), (Zt = 0), [];
}
function b1(e) {
  return (ki = ""), e;
}
function Ga(e) {
  return v1(Ys(Zt - 1, of(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function lP(e) {
  for (; (ct = Qn()) && ct < 33; ) ln();
  return Fs(e) > 2 || Fs(ct) > 3 ? "" : " ";
}
function uP(e, t) {
  for (
    ;
    --t &&
    ln() &&
    !(ct < 48 || ct > 102 || (ct > 57 && ct < 65) || (ct > 70 && ct < 97));

  );
  return Ys(e, qa() + (t < 6 && Qn() == 32 && ln() == 32));
}
function of(e) {
  for (; ln(); )
    switch (ct) {
      case e:
        return Zt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && of(ct);
        break;
      case 40:
        e === 41 && of(e);
        break;
      case 92:
        ln();
        break;
    }
  return Zt;
}
function cP(e, t) {
  for (; ln() && e + ct !== 47 + 10; )
    if (e + ct === 42 + 42 && Qn() === 47) break;
  return "/*" + Ys(t, Zt - 1) + "*" + vu(e === 47 ? e : ln());
}
function dP(e) {
  for (; !Fs(Qn()); ) ln();
  return Ys(e, Zt);
}
function fP(e) {
  return b1(Ya("", null, null, null, [""], (e = w1(e)), 0, [0], e));
}
function Ya(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      d = 0,
      c = s,
      f = 0,
      w = 0,
      y = 0,
      v = 1,
      C = 1,
      h = 1,
      p = 0,
      m = "",
      b = o,
      k = i,
      P = r,
      R = m;
    C;

  )
    switch (((y = p), (p = ln()))) {
      case 40:
        if (y != 108 && Pt(R, c - 1) == 58) {
          rf((R += Re(Ga(p), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += Ga(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += lP(y);
        break;
      case 92:
        R += uP(qa() - 1, 7);
        continue;
      case 47:
        switch (Qn()) {
          case 42:
          case 47:
            Ea(pP(cP(ln(), qa()), t, n), l);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * v:
        a[u++] = Un(R) * h;
      case 125 * v:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            C = 0;
          case 59 + d:
            h == -1 && (R = Re(R, /\f/g, "")),
              w > 0 &&
                Un(R) - c &&
                Ea(
                  w > 32
                    ? Jm(R + ";", r, n, c - 1)
                    : Jm(Re(R, " ", "") + ";", r, n, c - 2),
                  l
                );
            break;
          case 59:
            R += ";";
          default:
            if (
              (Ea((P = Xm(R, t, n, u, d, o, a, m, (b = []), (k = []), c)), i),
              p === 123)
            )
              if (d === 0) Ya(R, t, P, P, b, i, c, a, k);
              else
                switch (f === 99 && Pt(R, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ya(
                      e,
                      P,
                      P,
                      r && Ea(Xm(e, P, P, 0, 0, o, a, m, o, (b = []), c), k),
                      o,
                      k,
                      c,
                      a,
                      r ? b : k
                    );
                    break;
                  default:
                    Ya(R, P, P, P, [""], k, 0, a, k);
                }
        }
        (u = d = w = 0), (v = h = 1), (m = R = ""), (c = s);
        break;
      case 58:
        (c = 1 + Un(R)), (w = y);
      default:
        if (v < 1) {
          if (p == 123) --v;
          else if (p == 125 && v++ == 0 && aP() == 125) continue;
        }
        switch (((R += vu(p)), p * v)) {
          case 38:
            h = d > 0 ? 1 : ((R += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Un(R) - 1) * h), (h = 1);
            break;
          case 64:
            Qn() === 45 && (R += Ga(ln())),
              (f = Qn()),
              (d = c = Un((m = R += dP(qa())))),
              p++;
            break;
          case 45:
            y === 45 && Un(R) == 2 && (v = 0);
        }
    }
  return i;
}
function Xm(e, t, n, r, o, i, s, a, l, u, d) {
  for (
    var c = o - 1, f = o === 0 ? i : [""], w = Ap(f), y = 0, v = 0, C = 0;
    y < r;
    ++y
  )
    for (var h = 0, p = Ls(e, c + 1, (c = tP((v = s[y])))), m = e; h < w; ++h)
      (m = v1(v > 0 ? f[h] + " " + p : Re(p, /&\f/g, f[h]))) && (l[C++] = m);
  return wu(e, t, n, o === 0 ? Mp : a, l, u, d);
}
function pP(e, t, n) {
  return wu(e, t, n, g1, vu(sP()), Ls(e, 2, -2), 0);
}
function Jm(e, t, n, r) {
  return wu(e, t, n, Ip, Ls(e, 0, r), Ls(e, r + 1, -1), r);
}
function ri(e, t) {
  for (var n = "", r = Ap(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function hP(e, t, n, r) {
  switch (e.type) {
    case eP:
      if (e.children.length) break;
    case Z2:
    case Ip:
      return (e.return = e.return || e.value);
    case g1:
      return "";
    case y1:
      return (e.return = e.value + "{" + ri(e.children, r) + "}");
    case Mp:
      e.value = e.props.join(",");
  }
  return Un((n = ri(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function mP(e) {
  var t = Ap(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function gP(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function C1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var yP = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Qn()), o === 38 && i === 12 && (n[r] = 1), !Fs(i);

    )
      ln();
    return Ys(t, Zt);
  },
  vP = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Fs(o)) {
        case 0:
          o === 38 && Qn() === 12 && (n[r] = 1), (t[r] += yP(Zt - 1, n, r));
          break;
        case 2:
          t[r] += Ga(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Qn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += vu(o);
      }
    while ((o = ln()));
    return t;
  },
  SP = function (t, n) {
    return b1(vP(w1(t), n));
  },
  Zm = new WeakMap(),
  wP = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Zm.get(r)) &&
        !o
      ) {
        Zm.set(t, !0);
        for (
          var i = [], s = SP(n, i), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var d = 0; d < a.length; d++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[d]) : a[d] + " " + s[l];
      }
    }
  },
  bP = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function x1(e, t) {
  switch (rP(e, t)) {
    case 5103:
      return Pe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Pe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Pe + e + _l + e + It + e + e;
    case 6828:
    case 4268:
      return Pe + e + It + e + e;
    case 6165:
      return Pe + e + It + "flex-" + e + e;
    case 5187:
      return (
        Pe + e + Re(e, /(\w+).+(:[^]+)/, Pe + "box-$1$2" + It + "flex-$1$2") + e
      );
    case 5443:
      return Pe + e + It + "flex-item-" + Re(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Pe +
        e +
        It +
        "flex-line-pack" +
        Re(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Pe + e + It + Re(e, "shrink", "negative") + e;
    case 5292:
      return Pe + e + It + Re(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Pe +
        "box-" +
        Re(e, "-grow", "") +
        Pe +
        e +
        It +
        Re(e, "grow", "positive") +
        e
      );
    case 4554:
      return Pe + Re(e, /([^-])(transform)/g, "$1" + Pe + "$2") + e;
    case 6187:
      return (
        Re(
          Re(Re(e, /(zoom-|grab)/, Pe + "$1"), /(image-set)/, Pe + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return Re(e, /(image-set\([^]*)/, Pe + "$1$`$1");
    case 4968:
      return (
        Re(
          Re(e, /(.+:)(flex-)?(.*)/, Pe + "box-pack:$3" + It + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Pe +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Re(e, /(.+)-inline(.+)/, Pe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Un(e) - 1 - t > 6)
        switch (Pt(e, t + 1)) {
          case 109:
            if (Pt(e, t + 4) !== 45) break;
          case 102:
            return (
              Re(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Pe +
                  "$2-$3$1" +
                  _l +
                  (Pt(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~rf(e, "stretch")
              ? x1(Re(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Pt(e, t + 1) !== 115) break;
    case 6444:
      switch (Pt(e, Un(e) - 3 - (~rf(e, "!important") && 10))) {
        case 107:
          return Re(e, ":", ":" + Pe) + e;
        case 101:
          return (
            Re(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Pe +
                (Pt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Pe +
                "$2$3$1" +
                It +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Pt(e, t + 11)) {
        case 114:
          return Pe + e + It + Re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Pe + e + It + Re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Pe + e + It + Re(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Pe + e + It + e + e;
  }
  return e;
}
var CP = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Ip:
          t.return = x1(t.value, t.length);
          break;
        case y1:
          return ri([Ui(t, { value: Re(t.value, "@", "@" + Pe) })], o);
        case Mp:
          if (t.length)
            return iP(t.props, function (i) {
              switch (oP(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return ri(
                    [Ui(t, { props: [Re(i, /:(read-\w+)/, ":" + _l + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return ri(
                    [
                      Ui(t, {
                        props: [Re(i, /:(plac\w+)/, ":" + Pe + "input-$1")],
                      }),
                      Ui(t, { props: [Re(i, /:(plac\w+)/, ":" + _l + "$1")] }),
                      Ui(t, { props: [Re(i, /:(plac\w+)/, It + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  xP = [CP],
  kP = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (v) {
        var C = v.getAttribute("data-emotion");
        C.indexOf(" ") !== -1 &&
          (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || xP,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (v) {
          for (
            var C = v.getAttribute("data-emotion").split(" "), h = 1;
            h < C.length;
            h++
          )
            i[C[h]] = !0;
          a.push(v);
        }
      );
    var l,
      u = [wP, bP];
    {
      var d,
        c = [
          hP,
          gP(function (v) {
            d.insert(v);
          }),
        ],
        f = mP(u.concat(o, c)),
        w = function (C) {
          return ri(fP(C), f);
        };
      l = function (C, h, p, m) {
        (d = p),
          w(C ? C + "{" + h.styles + "}" : h.styles),
          m && (y.inserted[h.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new J2({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return y.sheet.hydrate(a), y;
  },
  k1 = { exports: {} },
  Ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ct = typeof Symbol == "function" && Symbol.for,
  Np = Ct ? Symbol.for("react.element") : 60103,
  _p = Ct ? Symbol.for("react.portal") : 60106,
  bu = Ct ? Symbol.for("react.fragment") : 60107,
  Cu = Ct ? Symbol.for("react.strict_mode") : 60108,
  xu = Ct ? Symbol.for("react.profiler") : 60114,
  ku = Ct ? Symbol.for("react.provider") : 60109,
  Eu = Ct ? Symbol.for("react.context") : 60110,
  Lp = Ct ? Symbol.for("react.async_mode") : 60111,
  Pu = Ct ? Symbol.for("react.concurrent_mode") : 60111,
  Ru = Ct ? Symbol.for("react.forward_ref") : 60112,
  Tu = Ct ? Symbol.for("react.suspense") : 60113,
  EP = Ct ? Symbol.for("react.suspense_list") : 60120,
  $u = Ct ? Symbol.for("react.memo") : 60115,
  Ou = Ct ? Symbol.for("react.lazy") : 60116,
  PP = Ct ? Symbol.for("react.block") : 60121,
  RP = Ct ? Symbol.for("react.fundamental") : 60117,
  TP = Ct ? Symbol.for("react.responder") : 60118,
  $P = Ct ? Symbol.for("react.scope") : 60119;
function fn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Np:
        switch (((e = e.type), e)) {
          case Lp:
          case Pu:
          case bu:
          case xu:
          case Cu:
          case Tu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Eu:
              case Ru:
              case Ou:
              case $u:
              case ku:
                return e;
              default:
                return t;
            }
        }
      case _p:
        return t;
    }
  }
}
function E1(e) {
  return fn(e) === Pu;
}
Ae.AsyncMode = Lp;
Ae.ConcurrentMode = Pu;
Ae.ContextConsumer = Eu;
Ae.ContextProvider = ku;
Ae.Element = Np;
Ae.ForwardRef = Ru;
Ae.Fragment = bu;
Ae.Lazy = Ou;
Ae.Memo = $u;
Ae.Portal = _p;
Ae.Profiler = xu;
Ae.StrictMode = Cu;
Ae.Suspense = Tu;
Ae.isAsyncMode = function (e) {
  return E1(e) || fn(e) === Lp;
};
Ae.isConcurrentMode = E1;
Ae.isContextConsumer = function (e) {
  return fn(e) === Eu;
};
Ae.isContextProvider = function (e) {
  return fn(e) === ku;
};
Ae.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Np;
};
Ae.isForwardRef = function (e) {
  return fn(e) === Ru;
};
Ae.isFragment = function (e) {
  return fn(e) === bu;
};
Ae.isLazy = function (e) {
  return fn(e) === Ou;
};
Ae.isMemo = function (e) {
  return fn(e) === $u;
};
Ae.isPortal = function (e) {
  return fn(e) === _p;
};
Ae.isProfiler = function (e) {
  return fn(e) === xu;
};
Ae.isStrictMode = function (e) {
  return fn(e) === Cu;
};
Ae.isSuspense = function (e) {
  return fn(e) === Tu;
};
Ae.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === bu ||
    e === Pu ||
    e === xu ||
    e === Cu ||
    e === Tu ||
    e === EP ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ou ||
        e.$$typeof === $u ||
        e.$$typeof === ku ||
        e.$$typeof === Eu ||
        e.$$typeof === Ru ||
        e.$$typeof === RP ||
        e.$$typeof === TP ||
        e.$$typeof === $P ||
        e.$$typeof === PP))
  );
};
Ae.typeOf = fn;
k1.exports = Ae;
var OP = k1.exports,
  P1 = OP,
  MP = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  IP = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  R1 = {};
R1[P1.ForwardRef] = MP;
R1[P1.Memo] = IP;
var AP = !0;
function T1(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
    }),
    r
  );
}
var Fp = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || AP === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  Bp = function (t, n, r) {
    Fp(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function NP(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var _P = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  LP = !1,
  FP = /[A-Z]|^ms/g,
  BP = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  $1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  eg = function (t) {
    return t != null && typeof t != "boolean";
  },
  Bc = C1(function (e) {
    return $1(e) ? e : e.replace(FP, "-$&").toLowerCase();
  }),
  tg = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(BP, function (r, o, i) {
            return (Wn = { name: o, styles: i, next: Wn }), o;
          });
    }
    return _P[t] !== 1 && !$1(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  },
  DP =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Bs(e, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return (Wn = { name: o.name, styles: o.styles, next: Wn }), o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            (Wn = { name: s.name, styles: s.styles, next: Wn }), (s = s.next);
        var a = i.styles + ";";
        return a;
      }
      return zP(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = Wn,
          u = n(e);
        return (Wn = l), Bs(e, t, u);
      }
      break;
    }
  }
  var d = n;
  if (t == null) return d;
  var c = t[d];
  return c !== void 0 ? c : d;
}
function zP(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Bs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0
          ? (r += i + "{" + t[a] + "}")
          : eg(a) && (r += Bc(i) + ":" + tg(i, a) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && LP) throw new Error(DP);
        if (
          Array.isArray(s) &&
          typeof s[0] == "string" &&
          (t == null || t[s[0]] === void 0)
        )
          for (var l = 0; l < s.length; l++)
            eg(s[l]) && (r += Bc(i) + ":" + tg(i, s[l]) + ";");
        else {
          var u = Bs(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += Bc(i) + ":" + u + ";";
              break;
            }
            default:
              r += i + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var ng = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Wn;
function Qs(e, t, n) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var r = !0,
    o = "";
  Wn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) (r = !1), (o += Bs(n, t, i));
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (((o += Bs(n, t, e[a])), r)) {
      var l = i;
      o += l[a];
    }
  ng.lastIndex = 0;
  for (var u = "", d; (d = ng.exec(o)) !== null; ) u += "-" + d[1];
  var c = NP(o) + u;
  return { name: c, styles: o, next: Wn };
}
var UP = function (t) {
    return t();
  },
  O1 = tl["useInsertionEffect"] ? tl["useInsertionEffect"] : !1,
  M1 = O1 || UP,
  rg = O1 || S.useLayoutEffect,
  WP = !1,
  I1 = S.createContext(typeof HTMLElement < "u" ? kP({ key: "css" }) : null);
I1.Provider;
var Dp = function (t) {
    return S.forwardRef(function (n, r) {
      var o = S.useContext(I1);
      return t(n, o, r);
    });
  },
  Xs = S.createContext({}),
  zp = {}.hasOwnProperty,
  sf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  VP = function (t, n) {
    var r = {};
    for (var o in n) zp.call(n, o) && (r[o] = n[o]);
    return (r[sf] = t), r;
  },
  jP = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Fp(n, r, o),
      M1(function () {
        return Bp(n, r, o);
      }),
      null
    );
  },
  HP = Dp(function (e, t, n) {
    var r = e.css;
    typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
    var o = e[sf],
      i = [r],
      s = "";
    typeof e.className == "string"
      ? (s = T1(t.registered, i, e.className))
      : e.className != null && (s = e.className + " ");
    var a = Qs(i, void 0, S.useContext(Xs));
    s += t.key + "-" + a.name;
    var l = {};
    for (var u in e)
      zp.call(e, u) && u !== "css" && u !== sf && !WP && (l[u] = e[u]);
    return (
      (l.className = s),
      n && (l.ref = n),
      S.createElement(
        S.Fragment,
        null,
        S.createElement(jP, {
          cache: t,
          serialized: a,
          isStringTag: typeof o == "string",
        }),
        S.createElement(o, l)
      )
    );
  }),
  KP = HP,
  og = function (t, n) {
    var r = arguments;
    if (n == null || !zp.call(n, "css"))
      return S.createElement.apply(void 0, r);
    var o = r.length,
      i = new Array(o);
    (i[0] = KP), (i[1] = VP(t, n));
    for (var s = 2; s < o; s++) i[s] = r[s];
    return S.createElement.apply(null, i);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(og || (og = {}));
var qP = Dp(function (e, t) {
  var n = e.styles,
    r = Qs([n], void 0, S.useContext(Xs)),
    o = S.useRef();
  return (
    rg(
      function () {
        var i = t.key + "-global",
          s = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          a = !1,
          l = document.querySelector(
            'style[data-emotion="' + i + " " + r.name + '"]'
          );
        return (
          t.sheet.tags.length && (s.before = t.sheet.tags[0]),
          l !== null &&
            ((a = !0), l.setAttribute("data-emotion", i), s.hydrate([l])),
          (o.current = [s, a]),
          function () {
            s.flush();
          }
        );
      },
      [t]
    ),
    rg(
      function () {
        var i = o.current,
          s = i[0],
          a = i[1];
        if (a) {
          i[1] = !1;
          return;
        }
        if ((r.next !== void 0 && Bp(t, r.next, !0), s.tags.length)) {
          var l = s.tags[s.tags.length - 1].nextElementSibling;
          (s.before = l), s.flush();
        }
        t.insert("", r, s, !1);
      },
      [t, r.name]
    ),
    null
  );
});
function Up() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Qs(t);
}
function Js() {
  var e = Up.apply(void 0, arguments),
    t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
}
var GP =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  YP = C1(function (e) {
    return (
      GP.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  QP = !1,
  XP = YP,
  JP = function (t) {
    return t !== "theme";
  },
  ig = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? XP : JP;
  },
  sg = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  ZP = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Fp(n, r, o),
      M1(function () {
        return Bp(n, r, o);
      }),
      null
    );
  },
  eR = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = sg(t, n, r),
      l = a || ig(o),
      u = !l("as");
    return function () {
      var d = arguments,
        c =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && c.push("label:" + i + ";"),
        d[0] == null || d[0].raw === void 0)
      )
        c.push.apply(c, d);
      else {
        var f = d[0];
        c.push(f[0]);
        for (var w = d.length, y = 1; y < w; y++) c.push(d[y], f[y]);
      }
      var v = Dp(function (C, h, p) {
        var m = (u && C.as) || o,
          b = "",
          k = [],
          P = C;
        if (C.theme == null) {
          P = {};
          for (var R in C) P[R] = C[R];
          P.theme = S.useContext(Xs);
        }
        typeof C.className == "string"
          ? (b = T1(h.registered, k, C.className))
          : C.className != null && (b = C.className + " ");
        var T = Qs(c.concat(k), h.registered, P);
        (b += h.key + "-" + T.name), s !== void 0 && (b += " " + s);
        var M = u && a === void 0 ? ig(m) : l,
          g = {};
        for (var O in C) (u && O === "as") || (M(O) && (g[O] = C[O]));
        return (
          (g.className = b),
          p && (g.ref = p),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(ZP, {
              cache: h,
              serialized: T,
              isStringTag: typeof m == "string",
            }),
            S.createElement(m, g)
          )
        );
      });
      return (
        (v.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (v.defaultProps = t.defaultProps),
        (v.__emotion_real = v),
        (v.__emotion_base = o),
        (v.__emotion_styles = c),
        (v.__emotion_forwardProp = a),
        Object.defineProperty(v, "toString", {
          value: function () {
            return s === void 0 && QP ? "NO_COMPONENT_SELECTOR" : "." + s;
          },
        }),
        (v.withComponent = function (C, h) {
          var p = e(C, Nl({}, n, h, { shouldForwardProp: sg(v, h, !0) }));
          return p.apply(void 0, c);
        }),
        v
      );
    };
  },
  tR = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  af = eR.bind(null);
tR.forEach(function (e) {
  af[e] = af(e);
});
function nR(e) {
  return e == null || Object.keys(e).length === 0;
}
function A1(e) {
  const { styles: t, defaultTheme: n = {} } = e;
  return x(qP, {
    styles: typeof t == "function" ? (o) => t(nR(o) ? n : o) : t,
  });
}
/**
 * @mui/styled-engine v6.4.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function N1(e, t) {
  return af(e, t);
}
function rR(e, t) {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
}
const ag = [];
function lg(e) {
  return (ag[0] = e), Qs(ag);
}
var _1 = { exports: {} },
  ze = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wp = Symbol.for("react.transitional.element"),
  Vp = Symbol.for("react.portal"),
  Mu = Symbol.for("react.fragment"),
  Iu = Symbol.for("react.strict_mode"),
  Au = Symbol.for("react.profiler"),
  Nu = Symbol.for("react.consumer"),
  _u = Symbol.for("react.context"),
  Lu = Symbol.for("react.forward_ref"),
  Fu = Symbol.for("react.suspense"),
  Bu = Symbol.for("react.suspense_list"),
  Du = Symbol.for("react.memo"),
  zu = Symbol.for("react.lazy"),
  oR = Symbol.for("react.offscreen"),
  iR = Symbol.for("react.client.reference");
function xn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Wp:
        switch (((e = e.type), e)) {
          case Mu:
          case Au:
          case Iu:
          case Fu:
          case Bu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case _u:
              case Lu:
              case zu:
              case Du:
                return e;
              case Nu:
                return e;
              default:
                return t;
            }
        }
      case Vp:
        return t;
    }
  }
}
ze.ContextConsumer = Nu;
ze.ContextProvider = _u;
ze.Element = Wp;
ze.ForwardRef = Lu;
ze.Fragment = Mu;
ze.Lazy = zu;
ze.Memo = Du;
ze.Portal = Vp;
ze.Profiler = Au;
ze.StrictMode = Iu;
ze.Suspense = Fu;
ze.SuspenseList = Bu;
ze.isContextConsumer = function (e) {
  return xn(e) === Nu;
};
ze.isContextProvider = function (e) {
  return xn(e) === _u;
};
ze.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wp;
};
ze.isForwardRef = function (e) {
  return xn(e) === Lu;
};
ze.isFragment = function (e) {
  return xn(e) === Mu;
};
ze.isLazy = function (e) {
  return xn(e) === zu;
};
ze.isMemo = function (e) {
  return xn(e) === Du;
};
ze.isPortal = function (e) {
  return xn(e) === Vp;
};
ze.isProfiler = function (e) {
  return xn(e) === Au;
};
ze.isStrictMode = function (e) {
  return xn(e) === Iu;
};
ze.isSuspense = function (e) {
  return xn(e) === Fu;
};
ze.isSuspenseList = function (e) {
  return xn(e) === Bu;
};
ze.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Mu ||
    e === Au ||
    e === Iu ||
    e === Fu ||
    e === Bu ||
    e === oR ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === zu ||
        e.$$typeof === Du ||
        e.$$typeof === _u ||
        e.$$typeof === Nu ||
        e.$$typeof === Lu ||
        e.$$typeof === iR ||
        e.getModuleId !== void 0))
  );
};
ze.typeOf = xn;
_1.exports = ze;
var L1 = _1.exports;
function jn(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function F1(e) {
  if (S.isValidElement(e) || L1.isValidElementType(e) || !jn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = F1(e[n]);
    }),
    t
  );
}
function Lt(e, t, n = { clone: !0 }) {
  const r = n.clone ? { ...e } : e;
  return (
    jn(e) &&
      jn(t) &&
      Object.keys(t).forEach((o) => {
        S.isValidElement(t[o]) || L1.isValidElementType(t[o])
          ? (r[o] = t[o])
          : jn(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && jn(e[o])
          ? (r[o] = Lt(e[o], t[o], n))
          : n.clone
          ? (r[o] = jn(t[o]) ? F1(t[o]) : t[o])
          : (r[o] = t[o]);
      }),
    r
  );
}
const sR = (e) => {
  const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
  return (
    t.sort((n, r) => n.val - r.val),
    t.reduce((n, r) => ({ ...n, [r.key]: r.val }), {})
  );
};
function aR(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
      ...o
    } = e,
    i = sR(t),
    s = Object.keys(i);
  function a(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${
      (typeof t[f] == "number" ? t[f] : f) - r / 100
    }${n})`;
  }
  function u(f, w) {
    const y = s.indexOf(w);
    return `@media (min-width:${
      typeof t[f] == "number" ? t[f] : f
    }${n}) and (max-width:${
      (y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : w) - r / 100
    }${n})`;
  }
  function d(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : a(f);
  }
  function c(f) {
    const w = s.indexOf(f);
    return w === 0
      ? a(s[1])
      : w === s.length - 1
      ? l(s[w])
      : u(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: a,
    down: l,
    between: u,
    only: d,
    not: c,
    unit: n,
    ...o,
  };
}
function lR(e, t) {
  if (!e.containerQueries) return t;
  const n = Object.keys(t)
    .filter((r) => r.startsWith("@container"))
    .sort((r, o) => {
      var s, a;
      const i = /min-width:\s*([0-9.]+)/;
      return (
        +(((s = r.match(i)) == null ? void 0 : s[1]) || 0) -
        +(((a = o.match(i)) == null ? void 0 : a[1]) || 0)
      );
    });
  return n.length
    ? n.reduce(
        (r, o) => {
          const i = t[o];
          return delete r[o], (r[o] = i), r;
        },
        { ...t }
      )
    : t;
}
function uR(e, t) {
  return (
    t === "@" ||
    (t.startsWith("@") &&
      (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/)))
  );
}
function cR(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) return null;
  const [, r, o] = n,
    i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function dR(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function n(i, s) {
    (i.up = (...a) => t(e.breakpoints.up(...a), s)),
      (i.down = (...a) => t(e.breakpoints.down(...a), s)),
      (i.between = (...a) => t(e.breakpoints.between(...a), s)),
      (i.only = (...a) => t(e.breakpoints.only(...a), s)),
      (i.not = (...a) => {
        const l = t(e.breakpoints.not(...a), s);
        return l.includes("not all and")
          ? l
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : l;
      });
  }
  const r = {},
    o = (i) => (n(r, i), r);
  return n(o), { ...e, containerQueries: o };
}
const fR = { borderRadius: 4 },
  pR = fR;
function cs(e, t) {
  return t ? Lt(e, t, { clone: !1 }) : e;
}
const Uu = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  ug = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Uu[e]}px)`,
  },
  hR = {
    containerQueries: (e) => ({
      up: (t) => {
        let n = typeof t == "number" ? t : Uu[t] || t;
        return (
          typeof n == "number" && (n = `${n}px`),
          e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`
        );
      },
    }),
  };
function fr(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || ug;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || ug;
    return Object.keys(t).reduce((s, a) => {
      if (uR(i.keys, a)) {
        const l = cR(r.containerQueries ? r : hR, a);
        l && (s[l] = n(t[a], a));
      } else if (Object.keys(i.values || Uu).includes(a)) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function mR(e = {}) {
  var n;
  return (
    ((n = e.keys) == null
      ? void 0
      : n.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function gR(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Y(e) {
  if (typeof e != "string") throw new Error(dr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Wu(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Ll(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = Wu(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function lt(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = Wu(l, r) || {};
      return fr(s, a, (c) => {
        let f = Ll(u, o, c);
        return (
          c === f &&
            typeof c == "string" &&
            (f = Ll(u, o, `${t}${c === "default" ? "" : Y(c)}`, c)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function yR(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const vR = { m: "margin", p: "padding" },
  SR = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  cg = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  wR = yR((e) => {
    if (e.length > 2)
      if (cg[e]) e = cg[e];
      else return [e];
    const [t, n] = e.split(""),
      r = vR[t],
      o = SR[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  jp = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Hp = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...jp, ...Hp];
function Zs(e, t, n, r) {
  const o = Wu(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string"
    ? (i) =>
        typeof i == "string"
          ? i
          : typeof o == "string"
          ? `calc(${i} * ${o})`
          : o * i
    : Array.isArray(o)
    ? (i) => {
        if (typeof i == "string") return i;
        const s = Math.abs(i),
          a = o[s];
        return i >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
      }
    : typeof o == "function"
    ? o
    : () => {};
}
function Kp(e) {
  return Zs(e, "spacing", 8);
}
function ea(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function bR(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = ea(t, n)), r), {});
}
function CR(e, t, n, r) {
  if (!t.includes(n)) return null;
  const o = wR(n),
    i = bR(o, r),
    s = e[n];
  return fr(e, s, i);
}
function B1(e, t) {
  const n = Kp(e.theme);
  return Object.keys(e)
    .map((r) => CR(e, t, r, n))
    .reduce(cs, {});
}
function et(e) {
  return B1(e, jp);
}
et.propTypes = {};
et.filterProps = jp;
function tt(e) {
  return B1(e, Hp);
}
tt.propTypes = {};
tt.filterProps = Hp;
function D1(e = 8, t = Kp({ spacing: e })) {
  if (e.mui) return e;
  const n = (...r) =>
    (r.length === 0 ? [1] : r)
      .map((i) => {
        const s = t(i);
        return typeof s == "number" ? `${s}px` : s;
      })
      .join(" ");
  return (n.mui = !0), n;
}
function Vu(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? cs(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function yn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function kn(e, t) {
  return lt({ prop: e, themeKey: "borders", transform: t });
}
const xR = kn("border", yn),
  kR = kn("borderTop", yn),
  ER = kn("borderRight", yn),
  PR = kn("borderBottom", yn),
  RR = kn("borderLeft", yn),
  TR = kn("borderColor"),
  $R = kn("borderTopColor"),
  OR = kn("borderRightColor"),
  MR = kn("borderBottomColor"),
  IR = kn("borderLeftColor"),
  AR = kn("outline", yn),
  NR = kn("outlineColor"),
  ju = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Zs(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: ea(t, r) });
      return fr(e, e.borderRadius, n);
    }
    return null;
  };
ju.propTypes = {};
ju.filterProps = ["borderRadius"];
Vu(xR, kR, ER, PR, RR, TR, $R, OR, MR, IR, ju, AR, NR);
const Hu = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Zs(e.theme, "spacing", 8),
      n = (r) => ({ gap: ea(t, r) });
    return fr(e, e.gap, n);
  }
  return null;
};
Hu.propTypes = {};
Hu.filterProps = ["gap"];
const Ku = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Zs(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: ea(t, r) });
    return fr(e, e.columnGap, n);
  }
  return null;
};
Ku.propTypes = {};
Ku.filterProps = ["columnGap"];
const qu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Zs(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: ea(t, r) });
    return fr(e, e.rowGap, n);
  }
  return null;
};
qu.propTypes = {};
qu.filterProps = ["rowGap"];
const _R = lt({ prop: "gridColumn" }),
  LR = lt({ prop: "gridRow" }),
  FR = lt({ prop: "gridAutoFlow" }),
  BR = lt({ prop: "gridAutoColumns" }),
  DR = lt({ prop: "gridAutoRows" }),
  zR = lt({ prop: "gridTemplateColumns" }),
  UR = lt({ prop: "gridTemplateRows" }),
  WR = lt({ prop: "gridTemplateAreas" }),
  VR = lt({ prop: "gridArea" });
Vu(Hu, Ku, qu, _R, LR, FR, BR, DR, zR, UR, WR, VR);
function oi(e, t) {
  return t === "grey" ? t : e;
}
const jR = lt({ prop: "color", themeKey: "palette", transform: oi }),
  HR = lt({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: oi,
  }),
  KR = lt({ prop: "backgroundColor", themeKey: "palette", transform: oi });
Vu(jR, HR, KR);
function rn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const qR = lt({ prop: "width", transform: rn }),
  qp = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var o, i, s, a, l;
        const r =
          ((s =
            (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null
              ? void 0
              : i.values) == null
            ? void 0
            : s[n]) || Uu[n];
        return r
          ? ((l = (a = e.theme) == null ? void 0 : a.breakpoints) == null
              ? void 0
              : l.unit) !== "px"
            ? { maxWidth: `${r}${e.theme.breakpoints.unit}` }
            : { maxWidth: r }
          : { maxWidth: rn(n) };
      };
      return fr(e, e.maxWidth, t);
    }
    return null;
  };
qp.filterProps = ["maxWidth"];
const GR = lt({ prop: "minWidth", transform: rn }),
  YR = lt({ prop: "height", transform: rn }),
  QR = lt({ prop: "maxHeight", transform: rn }),
  XR = lt({ prop: "minHeight", transform: rn });
lt({ prop: "size", cssProperty: "width", transform: rn });
lt({ prop: "size", cssProperty: "height", transform: rn });
const JR = lt({ prop: "boxSizing" });
Vu(qR, qp, GR, YR, QR, XR, JR);
const ZR = {
    border: { themeKey: "borders", transform: yn },
    borderTop: { themeKey: "borders", transform: yn },
    borderRight: { themeKey: "borders", transform: yn },
    borderBottom: { themeKey: "borders", transform: yn },
    borderLeft: { themeKey: "borders", transform: yn },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: yn },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: ju },
    color: { themeKey: "palette", transform: oi },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: oi,
    },
    backgroundColor: { themeKey: "palette", transform: oi },
    p: { style: tt },
    pt: { style: tt },
    pr: { style: tt },
    pb: { style: tt },
    pl: { style: tt },
    px: { style: tt },
    py: { style: tt },
    padding: { style: tt },
    paddingTop: { style: tt },
    paddingRight: { style: tt },
    paddingBottom: { style: tt },
    paddingLeft: { style: tt },
    paddingX: { style: tt },
    paddingY: { style: tt },
    paddingInline: { style: tt },
    paddingInlineStart: { style: tt },
    paddingInlineEnd: { style: tt },
    paddingBlock: { style: tt },
    paddingBlockStart: { style: tt },
    paddingBlockEnd: { style: tt },
    m: { style: et },
    mt: { style: et },
    mr: { style: et },
    mb: { style: et },
    ml: { style: et },
    mx: { style: et },
    my: { style: et },
    margin: { style: et },
    marginTop: { style: et },
    marginRight: { style: et },
    marginBottom: { style: et },
    marginLeft: { style: et },
    marginX: { style: et },
    marginY: { style: et },
    marginInline: { style: et },
    marginInlineStart: { style: et },
    marginInlineEnd: { style: et },
    marginBlock: { style: et },
    marginBlockStart: { style: et },
    marginBlockEnd: { style: et },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Hu },
    rowGap: { style: qu },
    columnGap: { style: Ku },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: rn },
    maxWidth: { style: qp },
    minWidth: { transform: rn },
    height: { transform: rn },
    maxHeight: { transform: rn },
    minHeight: { transform: rn },
    boxSizing: {},
    font: { themeKey: "font" },
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  ta = ZR;
function eT(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function tT(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function nT() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: d, style: c } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const f = Wu(o, u) || {};
    return c
      ? c(s)
      : fr(s, r, (y) => {
          let v = Ll(f, d, y);
          return (
            y === v &&
              typeof y == "string" &&
              (v = Ll(f, d, `${n}${y === "default" ? "" : Y(y)}`, y)),
            l === !1 ? v : { [l]: v }
          );
        });
  }
  function t(n) {
    const { sx: r, theme: o = {} } = n || {};
    if (!r) return null;
    const i = o.unstable_sxConfig ?? ta;
    function s(a) {
      let l = a;
      if (typeof a == "function") l = a(o);
      else if (typeof a != "object") return a;
      if (!l) return null;
      const u = mR(o.breakpoints),
        d = Object.keys(u);
      let c = u;
      return (
        Object.keys(l).forEach((f) => {
          const w = tT(l[f], o);
          if (w != null)
            if (typeof w == "object")
              if (i[f]) c = cs(c, e(f, w, o, i));
              else {
                const y = fr({ theme: o }, w, (v) => ({ [f]: v }));
                eT(y, w) ? (c[f] = t({ sx: w, theme: o })) : (c = cs(c, y));
              }
            else c = cs(c, e(f, w, o, i));
        }),
        lR(o, gR(d, c))
      );
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const z1 = nT();
z1.filterProps = ["sx"];
const Co = z1;
function rT(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (
      !((r = n.colorSchemes) != null && r[e]) ||
      typeof n.getColorSchemeSelector != "function"
    )
      return {};
    let o = n.getColorSchemeSelector(e);
    return o === "&"
      ? t
      : ((o.includes("data-") || o.includes(".")) &&
          (o = `*:where(${o.replace(/\s*&$/, "")}) &`),
        { [o]: t });
  }
  return n.palette.mode === e ? t : {};
}
function Gu(e = {}, ...t) {
  const {
      breakpoints: n = {},
      palette: r = {},
      spacing: o,
      shape: i = {},
      ...s
    } = e,
    a = aR(n),
    l = D1(o);
  let u = Lt(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...r },
      spacing: l,
      shape: { ...pR, ...i },
    },
    s
  );
  return (
    (u = dR(u)),
    (u.applyStyles = rT),
    (u = t.reduce((d, c) => Lt(d, c), u)),
    (u.unstable_sxConfig = {
      ...ta,
      ...(s == null ? void 0 : s.unstable_sxConfig),
    }),
    (u.unstable_sx = function (c) {
      return Co({ sx: c, theme: this });
    }),
    u
  );
}
function oT(e) {
  return Object.keys(e).length === 0;
}
function U1(e = null) {
  const t = S.useContext(Xs);
  return !t || oT(t) ? e : t;
}
const iT = Gu();
function Yu(e = iT) {
  return U1(e);
}
function sT({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = Yu(n),
    o = typeof e == "function" ? e((t && r[t]) || r) : e;
  return x(A1, { styles: o });
}
const aT = (e) => {
  var r;
  const t = { systemProps: {}, otherProps: {} },
    n =
      ((r = e == null ? void 0 : e.theme) == null
        ? void 0
        : r.unstable_sxConfig) ?? ta;
  return (
    Object.keys(e).forEach((o) => {
      n[o] ? (t.systemProps[o] = e[o]) : (t.otherProps[o] = e[o]);
    }),
    t
  );
};
function W1(e) {
  const { sx: t, ...n } = e,
    { systemProps: r, otherProps: o } = aT(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...s) => {
          const a = t(...s);
          return jn(a) ? { ...r, ...a } : r;
        })
      : (i = { ...r, ...t }),
    { ...o, sx: i }
  );
}
const dg = (e) => e,
  lT = () => {
    let e = dg;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = dg;
      },
    };
  },
  uT = lT(),
  V1 = uT;
function j1(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = j1(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function te() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = j1(e)) && (r && (r += " "), (r += t));
  return r;
}
function cT(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: o,
    } = e,
    i = N1("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as",
    })(Co);
  return S.forwardRef(function (l, u) {
    const d = Yu(n),
      { className: c, component: f = "div", ...w } = W1(l);
    return x(i, {
      as: f,
      ref: u,
      className: te(c, o ? o(r) : r),
      theme: (t && d[t]) || d,
      ...w,
    });
  });
}
const dT = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function se(e, t, n = "Mui") {
  const r = dT[t];
  return r ? `${n}-${r}` : `${V1.generate(e)}-${t}`;
}
function re(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = se(e, o, n);
    }),
    r
  );
}
function H1(e) {
  const { variants: t, ...n } = e,
    r = { variants: t, style: lg(n), isProcessed: !0 };
  return (
    r.style === n ||
      (t &&
        t.forEach((o) => {
          typeof o.style != "function" && (o.style = lg(o.style));
        })),
    r
  );
}
const fT = Gu();
function Dc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function pT(e) {
  return e ? (t, n) => n[e] : null;
}
function hT(e, t, n) {
  e.theme = gT(e.theme) ? n : e.theme[t] || e.theme;
}
function Qa(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n)) return n.flatMap((r) => Qa(e, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let r;
    if (n.isProcessed) r = n.style;
    else {
      const { variants: o, ...i } = n;
      r = i;
    }
    return K1(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function K1(e, t, n = []) {
  var o;
  let r;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (typeof s.props == "function") {
      if (
        (r ?? (r = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        !s.props(r))
      )
        continue;
    } else
      for (const a in s.props)
        if (
          e[a] !== s.props[a] &&
          ((o = e.ownerState) == null ? void 0 : o[a]) !== s.props[a]
        )
          continue e;
    typeof s.style == "function"
      ? (r ?? (r = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        n.push(s.style(r)))
      : n.push(s.style);
  }
  return n;
}
function q1(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = fT,
    rootShouldForwardProp: r = Dc,
    slotShouldForwardProp: o = Dc,
  } = e;
  function i(a) {
    hT(a, t, n);
  }
  return (a, l = {}) => {
    rR(a, (k) => k.filter((P) => P !== Co));
    const {
        name: u,
        slot: d,
        skipVariantsResolver: c,
        skipSx: f,
        overridesResolver: w = pT(vT(d)),
        ...y
      } = l,
      v = c !== void 0 ? c : (d && d !== "Root" && d !== "root") || !1,
      C = f || !1;
    let h = Dc;
    d === "Root" || d === "root"
      ? (h = r)
      : d
      ? (h = o)
      : yT(a) && (h = void 0);
    const p = N1(a, { shouldForwardProp: h, label: mT(), ...y }),
      m = (k) => {
        if (typeof k == "function" && k.__emotion_real !== k)
          return function (R) {
            return Qa(R, k);
          };
        if (jn(k)) {
          const P = H1(k);
          return P.variants
            ? function (T) {
                return Qa(T, P);
              }
            : P.style;
        }
        return k;
      },
      b = (...k) => {
        const P = [],
          R = k.map(m),
          T = [];
        if (
          (P.push(i),
          u &&
            w &&
            T.push(function (I) {
              var L, V;
              const W =
                (V = (L = I.theme.components) == null ? void 0 : L[u]) == null
                  ? void 0
                  : V.styleOverrides;
              if (!W) return null;
              const A = {};
              for (const U in W) A[U] = Qa(I, W[U]);
              return w(I, A);
            }),
          u &&
            !v &&
            T.push(function (I) {
              var A, L;
              const _ = I.theme,
                W =
                  (L =
                    (A = _ == null ? void 0 : _.components) == null
                      ? void 0
                      : A[u]) == null
                    ? void 0
                    : L.variants;
              return W ? K1(I, W) : null;
            }),
          C || T.push(Co),
          Array.isArray(R[0]))
        ) {
          const O = R.shift(),
            I = new Array(P.length).fill(""),
            _ = new Array(T.length).fill("");
          let W;
          (W = [...I, ...O, ..._]),
            (W.raw = [...I, ...O.raw, ..._]),
            P.unshift(W);
        }
        const M = [...P, ...R, ...T],
          g = p(...M);
        return a.muiName && (g.muiName = a.muiName), g;
      };
    return p.withConfig && (b.withConfig = p.withConfig), b;
  };
}
function mT(e, t) {
  let n;
  return n;
}
function gT(e) {
  for (const t in e) return !1;
  return !0;
}
function yT(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function vT(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const ST = q1(),
  wT = ST;
function Ds(e, t) {
  const n = { ...t };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const o = r;
      if (o === "components" || o === "slots") n[o] = { ...e[o], ...n[o] };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o],
          s = t[o];
        if (!s) n[o] = i || {};
        else if (!i) n[o] = s;
        else {
          n[o] = { ...s };
          for (const a in i)
            if (Object.prototype.hasOwnProperty.call(i, a)) {
              const l = a;
              n[o][l] = Ds(i[l], s[l]);
            }
        }
      } else n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
function bT(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : Ds(t.components[n].defaultProps, r);
}
function CT({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = Yu(n);
  return r && (o = o[r] || o), bT({ theme: o, name: t, props: e });
}
const xT = typeof window < "u" ? S.useLayoutEffect : S.useEffect,
  pr = xT;
function kT(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Gp(e, t = 0, n = 1) {
  return kT(e, t, n);
}
function ET(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Vr(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Vr(ET(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(dr(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        o
      ))
    )
      throw new Error(dr(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
const PT = (e) => {
    const t = Vr(e);
    return t.values
      .slice(0, 3)
      .map((n, r) => (t.type.includes("hsl") && r !== 0 ? `${n}%` : n))
      .join(" ");
  },
  Ji = (e, t) => {
    try {
      return PT(e);
    } catch {
      return e;
    }
  };
function Qu(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.includes("rgb")
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.includes("hsl") && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.includes("color") ? (r = `${n} ${r.join(" ")}`) : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function G1(e) {
  e = Vr(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, d = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), Qu({ type: a, values: l })
  );
}
function lf(e) {
  e = Vr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Vr(G1(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function RT(e, t) {
  const n = lf(e),
    r = lf(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ue(e, t) {
  return (
    (e = Vr(e)),
    (t = Gp(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Qu(e)
  );
}
function Pa(e, t, n) {
  try {
    return Ue(e, t);
  } catch {
    return e;
  }
}
function hi(e, t) {
  if (((e = Vr(e)), (t = Gp(t)), e.type.includes("hsl"))) e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Qu(e);
}
function Fe(e, t, n) {
  try {
    return hi(e, t);
  } catch {
    return e;
  }
}
function mi(e, t) {
  if (((e = Vr(e)), (t = Gp(t)), e.type.includes("hsl")))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Qu(e);
}
function Be(e, t, n) {
  try {
    return mi(e, t);
  } catch {
    return e;
  }
}
function uf(e, t = 0.15) {
  return lf(e) > 0.5 ? hi(e, t) : mi(e, t);
}
function Ra(e, t, n) {
  try {
    return uf(e, t);
  } catch {
    return e;
  }
}
function fg(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function Y1(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function Xa(e, t) {
  var n, r, o;
  return (
    S.isValidElement(e) &&
    t.indexOf(
      e.type.muiName ??
        ((o =
          (r = (n = e.type) == null ? void 0 : n._payload) == null
            ? void 0
            : r.value) == null
          ? void 0
          : o.muiName)
    ) !== -1
  );
}
function Nn(e) {
  return (e && e.ownerDocument) || document;
}
function hr(e) {
  return Nn(e).defaultView || window;
}
function cf(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let pg = 0;
function TT(e) {
  const [t, n] = S.useState(e),
    r = e || t;
  return (
    S.useEffect(() => {
      t == null && ((pg += 1), n(`mui-${pg}`));
    }, [t]),
    r
  );
}
const $T = { ...tl },
  hg = $T.useId;
function Xu(e) {
  if (hg !== void 0) {
    const t = hg();
    return e ?? t;
  }
  return TT(e);
}
function Fl({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = S.useRef(e !== void 0),
    [i, s] = S.useState(t),
    a = o ? e : i,
    l = S.useCallback((u) => {
      o || s(u);
    }, []);
  return [a, l];
}
function ii(e) {
  const t = S.useRef(e);
  return (
    pr(() => {
      t.current = e;
    }),
    S.useRef((...n) => (0, t.current)(...n)).current
  );
}
function bt(...e) {
  return S.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              cf(n, t);
            });
          },
    e
  );
}
const mg = {};
function Q1(e, t) {
  const n = S.useRef(mg);
  return n.current === mg && (n.current = e(t)), n;
}
const OT = [];
function MT(e) {
  S.useEffect(e, OT);
}
class Yp {
  constructor() {
    Ti(this, "currentId", null);
    Ti(this, "clear", () => {
      this.currentId !== null &&
        (clearTimeout(this.currentId), (this.currentId = null));
    });
    Ti(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Yp();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), n();
      }, t));
  }
}
function X1() {
  const e = Q1(Yp.create).current;
  return MT(e.disposeEffect), e;
}
function gg(e) {
  try {
    return e.matches(":focus-visible");
  } catch {}
  return !1;
}
function J1(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
const IT = (e) => {
    const t = S.useRef({});
    return (
      S.useEffect(() => {
        t.current = e;
      }),
      t.current
    );
  },
  Z1 = IT;
function ae(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const i = e[o];
    let s = "",
      a = !0;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l];
      u &&
        ((s += (a === !0 ? "" : " ") + t(u)),
        (a = !1),
        n && n[u] && (s += " " + n[u]));
    }
    r[o] = s;
  }
  return r;
}
function AT(e) {
  return typeof e == "string";
}
function eS(e, t, n) {
  return e === void 0 || AT(e)
    ? t
    : { ...t, ownerState: { ...t.ownerState, ...n } };
}
function tS(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function yg(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function nS(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const w = te(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      y = {
        ...(n == null ? void 0 : n.style),
        ...(o == null ? void 0 : o.style),
        ...(r == null ? void 0 : r.style),
      },
      v = { ...n, ...o, ...r };
    return (
      w.length > 0 && (v.className = w),
      Object.keys(y).length > 0 && (v.style = y),
      { props: v, internalRef: void 0 }
    );
  }
  const s = tS({ ...o, ...r }),
    a = yg(r),
    l = yg(o),
    u = t(s),
    d = te(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    c = {
      ...(u == null ? void 0 : u.style),
      ...(n == null ? void 0 : n.style),
      ...(o == null ? void 0 : o.style),
      ...(r == null ? void 0 : r.style),
    },
    f = { ...u, ...n, ...l, ...a };
  return (
    d.length > 0 && (f.className = d),
    Object.keys(c).length > 0 && (f.style = c),
    { props: f, internalRef: u.ref }
  );
}
function rS(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function zs(e) {
  var c;
  const {
      elementType: t,
      externalSlotProps: n,
      ownerState: r,
      skipResolvingSlotProps: o = !1,
      ...i
    } = e,
    s = o ? {} : rS(n, r),
    { props: a, internalRef: l } = nS({ ...i, externalSlotProps: s }),
    u = bt(
      l,
      s == null ? void 0 : s.ref,
      (c = e.additionalProps) == null ? void 0 : c.ref
    );
  return eS(t, { ...a, ref: u }, r);
}
function na(e) {
  var t;
  return parseInt(S.version, 10) >= 19
    ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null
    : (e == null ? void 0 : e.ref) || null;
}
const NT = S.createContext(null),
  oS = NT;
function Qp() {
  return S.useContext(oS);
}
const _T = typeof Symbol == "function" && Symbol.for,
  LT = _T ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function FT(e, t) {
  return typeof t == "function" ? t(e) : { ...e, ...t };
}
function BT(e) {
  const { children: t, theme: n } = e,
    r = Qp(),
    o = S.useMemo(() => {
      const i = r === null ? { ...n } : FT(r, n);
      return i != null && (i[LT] = r !== null), i;
    }, [n, r]);
  return x(oS.Provider, { value: o, children: t });
}
const iS = S.createContext();
function DT({ value: e, ...t }) {
  return x(iS.Provider, { value: e ?? !0, ...t });
}
const sS = () => S.useContext(iS) ?? !1,
  aS = S.createContext(void 0);
function zT({ value: e, children: t }) {
  return x(aS.Provider, { value: e, children: t });
}
function UT(e) {
  const { theme: t, name: n, props: r } = e;
  if (!t || !t.components || !t.components[n]) return r;
  const o = t.components[n];
  return o.defaultProps
    ? Ds(o.defaultProps, r)
    : !o.styleOverrides && !o.variants
    ? Ds(o, r)
    : r;
}
function WT({ props: e, name: t }) {
  const n = S.useContext(aS);
  return UT({ props: e, name: t, theme: { components: n } });
}
const vg = {};
function Sg(e, t, n, r = !1) {
  return S.useMemo(() => {
    const o = (e && t[e]) || t;
    if (typeof n == "function") {
      const i = n(o),
        s = e ? { ...t, [e]: i } : i;
      return r ? () => s : s;
    }
    return e ? { ...t, [e]: n } : { ...t, ...n };
  }, [e, t, n, r]);
}
function lS(e) {
  const { children: t, theme: n, themeId: r } = e,
    o = U1(vg),
    i = Qp() || vg,
    s = Sg(r, o, n),
    a = Sg(r, i, n, !0),
    l = (r ? s[r] : s).direction === "rtl";
  return x(BT, {
    theme: a,
    children: x(Xs.Provider, {
      value: s,
      children: x(DT, {
        value: l,
        children: x(zT, {
          value: r ? s[r].components : s.components,
          children: t,
        }),
      }),
    }),
  });
}
const wg = { theme: void 0 };
function VT(e) {
  let t, n;
  return function (o) {
    let i = t;
    return (
      (i === void 0 || o.theme !== n) &&
        ((wg.theme = o.theme), (i = H1(e(wg))), (t = i), (n = o.theme)),
      i
    );
  };
}
const Xp = "mode",
  Jp = "color-scheme",
  jT = "data-color-scheme";
function HT(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = Xp,
    colorSchemeStorageKey: i = Jp,
    attribute: s = jT,
    colorSchemeNode: a = "document.documentElement",
    nonce: l,
  } = e || {};
  let u = "",
    d = s;
  if (
    (s === "class" && (d = ".%s"),
    s === "data" && (d = "[data-%s]"),
    d.startsWith("."))
  ) {
    const f = d.substring(1);
    u += `${a}.classList.remove('${f}'.replace('%s', light), '${f}'.replace('%s', dark));
      ${a}.classList.add('${f}'.replace('%s', colorScheme));`;
  }
  const c = d.match(/\[([^\]]+)\]/);
  if (c) {
    const [f, w] = c[1].split("=");
    w ||
      (u += `${a}.removeAttribute('${f}'.replace('%s', light));
      ${a}.removeAttribute('${f}'.replace('%s', dark));`),
      (u += `
      ${a}.setAttribute('${f}'.replace('%s', colorScheme), ${
        w ? `${w}.replace('%s', colorScheme)` : '""'
      });`);
  } else u += `${a}.setAttribute('${d}', colorScheme);`;
  return x(
    "script",
    {
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? l : "",
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${r}';
  const light = localStorage.getItem('${i}-light') || '${n}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${u}
  }
} catch(e){}})();`,
      },
    },
    "mui-color-scheme-init"
  );
}
function bg(e) {
  if (
    typeof window < "u" &&
    typeof window.matchMedia == "function" &&
    e === "system"
  )
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
}
function uS(e, t) {
  if (e.mode === "light" || (e.mode === "system" && e.systemMode === "light"))
    return t("light");
  if (e.mode === "dark" || (e.mode === "system" && e.systemMode === "dark"))
    return t("dark");
}
function KT(e) {
  return uS(e, (t) => {
    if (t === "light") return e.lightColorScheme;
    if (t === "dark") return e.darkColorScheme;
  });
}
function zc(e, t) {
  if (typeof window > "u") return;
  let n;
  try {
    (n = localStorage.getItem(e) || void 0), n || localStorage.setItem(e, t);
  } catch {}
  return n || t;
}
function qT(e) {
  const {
      defaultMode: t = "light",
      defaultLightColorScheme: n,
      defaultDarkColorScheme: r,
      supportedColorSchemes: o = [],
      modeStorageKey: i = Xp,
      colorSchemeStorageKey: s = Jp,
      storageWindow: a = typeof window > "u" ? void 0 : window,
      noSsr: l = !1,
    } = e,
    u = o.join(","),
    d = o.length > 1,
    [c, f] = S.useState(() => {
      const b = zc(i, t),
        k = zc(`${s}-light`, n),
        P = zc(`${s}-dark`, r);
      return {
        mode: b,
        systemMode: bg(b),
        lightColorScheme: k,
        darkColorScheme: P,
      };
    }),
    [w, y] = S.useState(l || !d);
  S.useEffect(() => {
    y(!0);
  }, []);
  const v = KT(c),
    C = S.useCallback(
      (b) => {
        f((k) => {
          if (b === k.mode) return k;
          const P = b ?? t;
          try {
            localStorage.setItem(i, P);
          } catch {}
          return { ...k, mode: P, systemMode: bg(P) };
        });
      },
      [i, t]
    ),
    h = S.useCallback(
      (b) => {
        b
          ? typeof b == "string"
            ? b && !u.includes(b)
              ? console.error(
                  `\`${b}\` does not exist in \`theme.colorSchemes\`.`
                )
              : f((k) => {
                  const P = { ...k };
                  return (
                    uS(k, (R) => {
                      try {
                        localStorage.setItem(`${s}-${R}`, b);
                      } catch {}
                      R === "light" && (P.lightColorScheme = b),
                        R === "dark" && (P.darkColorScheme = b);
                    }),
                    P
                  );
                })
            : f((k) => {
                const P = { ...k },
                  R = b.light === null ? n : b.light,
                  T = b.dark === null ? r : b.dark;
                if (R)
                  if (!u.includes(R))
                    console.error(
                      `\`${R}\` does not exist in \`theme.colorSchemes\`.`
                    );
                  else {
                    P.lightColorScheme = R;
                    try {
                      localStorage.setItem(`${s}-light`, R);
                    } catch {}
                  }
                if (T)
                  if (!u.includes(T))
                    console.error(
                      `\`${T}\` does not exist in \`theme.colorSchemes\`.`
                    );
                  else {
                    P.darkColorScheme = T;
                    try {
                      localStorage.setItem(`${s}-dark`, T);
                    } catch {}
                  }
                return P;
              })
          : f((k) => {
              try {
                localStorage.setItem(`${s}-light`, n),
                  localStorage.setItem(`${s}-dark`, r);
              } catch {}
              return { ...k, lightColorScheme: n, darkColorScheme: r };
            });
      },
      [u, s, n, r]
    ),
    p = S.useCallback(
      (b) => {
        c.mode === "system" &&
          f((k) => {
            const P = b != null && b.matches ? "dark" : "light";
            return k.systemMode === P ? k : { ...k, systemMode: P };
          });
      },
      [c.mode]
    ),
    m = S.useRef(p);
  return (
    (m.current = p),
    S.useEffect(() => {
      if (typeof window.matchMedia != "function" || !d) return;
      const b = (...P) => m.current(...P),
        k = window.matchMedia("(prefers-color-scheme: dark)");
      return (
        k.addListener(b),
        b(k),
        () => {
          k.removeListener(b);
        }
      );
    }, [d]),
    S.useEffect(() => {
      if (a && d) {
        const b = (k) => {
          const P = k.newValue;
          typeof k.key == "string" &&
            k.key.startsWith(s) &&
            (!P || u.match(P)) &&
            (k.key.endsWith("light") && h({ light: P }),
            k.key.endsWith("dark") && h({ dark: P })),
            k.key === i &&
              (!P || ["light", "dark", "system"].includes(P)) &&
              C(P || t);
        };
        return (
          a.addEventListener("storage", b),
          () => {
            a.removeEventListener("storage", b);
          }
        );
      }
    }, [h, C, i, s, u, t, a, d]),
    {
      ...c,
      mode: w ? c.mode : void 0,
      systemMode: w ? c.systemMode : void 0,
      colorScheme: w ? v : void 0,
      setMode: C,
      setColorScheme: h,
    }
  );
}
const GT =
  "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function YT(e) {
  const {
      themeId: t,
      theme: n = {},
      modeStorageKey: r = Xp,
      colorSchemeStorageKey: o = Jp,
      disableTransitionOnChange: i = !1,
      defaultColorScheme: s,
      resolveTheme: a,
    } = e,
    l = {
      allColorSchemes: [],
      colorScheme: void 0,
      darkColorScheme: void 0,
      lightColorScheme: void 0,
      mode: void 0,
      setColorScheme: () => {},
      setMode: () => {},
      systemMode: void 0,
    },
    u = S.createContext(void 0),
    d = () => S.useContext(u) || l,
    c = {},
    f = {};
  function w(h) {
    var j, X, ie, Le;
    const {
        children: p,
        theme: m,
        modeStorageKey: b = r,
        colorSchemeStorageKey: k = o,
        disableTransitionOnChange: P = i,
        storageWindow: R = typeof window > "u" ? void 0 : window,
        documentNode: T = typeof document > "u" ? void 0 : document,
        colorSchemeNode: M = typeof document > "u"
          ? void 0
          : document.documentElement,
        disableNestedContext: g = !1,
        disableStyleSheetGeneration: O = !1,
        defaultMode: I = "system",
        noSsr: _,
      } = h,
      W = S.useRef(!1),
      A = Qp(),
      L = S.useContext(u),
      V = !!L && !g,
      U = S.useMemo(() => m || (typeof n == "function" ? n() : n), [m]),
      z = U[t],
      G = z || U,
      { colorSchemes: Z = c, components: oe = f, cssVarPrefix: fe } = G,
      ue = Object.keys(Z)
        .filter((ge) => !!Z[ge])
        .join(","),
      pe = S.useMemo(() => ue.split(","), [ue]),
      ke = typeof s == "string" ? s : s.light,
      Ee = typeof s == "string" ? s : s.dark,
      Ge =
        Z[ke] && Z[Ee]
          ? I
          : ((X = (j = Z[G.defaultColorScheme]) == null ? void 0 : j.palette) ==
            null
              ? void 0
              : X.mode) || ((ie = G.palette) == null ? void 0 : ie.mode),
      {
        mode: Oe,
        setMode: de,
        systemMode: be,
        lightColorScheme: ce,
        darkColorScheme: Ne,
        colorScheme: me,
        setColorScheme: Te,
      } = qT({
        supportedColorSchemes: pe,
        defaultLightColorScheme: ke,
        defaultDarkColorScheme: Ee,
        modeStorageKey: b,
        colorSchemeStorageKey: k,
        defaultMode: Ge,
        storageWindow: R,
        noSsr: _,
      });
    let ut = Oe,
      Ce = me;
    V && ((ut = L.mode), (Ce = L.colorScheme));
    const E = S.useMemo(() => {
        var xt;
        const ge = Ce || G.defaultColorScheme,
          $e =
            ((xt = G.generateThemeVars) == null ? void 0 : xt.call(G)) ||
            G.vars,
          Ze = {
            ...G,
            components: oe,
            colorSchemes: Z,
            cssVarPrefix: fe,
            vars: $e,
          };
        if (
          (typeof Ze.generateSpacing == "function" &&
            (Ze.spacing = Ze.generateSpacing()),
          ge)
        ) {
          const ye = Z[ge];
          ye &&
            typeof ye == "object" &&
            Object.keys(ye).forEach((yt) => {
              ye[yt] && typeof ye[yt] == "object"
                ? (Ze[yt] = { ...Ze[yt], ...ye[yt] })
                : (Ze[yt] = ye[yt]);
            });
        }
        return a ? a(Ze) : Ze;
      }, [G, Ce, oe, Z, fe]),
      $ = G.colorSchemeSelector;
    pr(() => {
      if (Ce && M && $ && $ !== "media") {
        const ge = $;
        let $e = $;
        if (
          (ge === "class" && ($e = ".%s"),
          ge === "data" && ($e = "[data-%s]"),
          ge != null &&
            ge.startsWith("data-") &&
            !ge.includes("%s") &&
            ($e = `[${ge}="%s"]`),
          $e.startsWith("."))
        )
          M.classList.remove(
            ...pe.map((Ze) => $e.substring(1).replace("%s", Ze))
          ),
            M.classList.add($e.substring(1).replace("%s", Ce));
        else {
          const Ze = $e.replace("%s", Ce).match(/\[([^\]]+)\]/);
          if (Ze) {
            const [xt, ye] = Ze[1].split("=");
            ye ||
              pe.forEach((yt) => {
                M.removeAttribute(xt.replace(Ce, yt));
              }),
              M.setAttribute(xt, ye ? ye.replace(/"|'/g, "") : "");
          } else M.setAttribute($e, Ce);
        }
      }
    }, [Ce, $, M, pe]),
      S.useEffect(() => {
        let ge;
        if (P && W.current && T) {
          const $e = T.createElement("style");
          $e.appendChild(T.createTextNode(GT)),
            T.head.appendChild($e),
            window.getComputedStyle(T.body),
            (ge = setTimeout(() => {
              T.head.removeChild($e);
            }, 1));
        }
        return () => {
          clearTimeout(ge);
        };
      }, [Ce, P, T]),
      S.useEffect(
        () => (
          (W.current = !0),
          () => {
            W.current = !1;
          }
        ),
        []
      );
    const N = S.useMemo(
      () => ({
        allColorSchemes: pe,
        colorScheme: Ce,
        darkColorScheme: Ne,
        lightColorScheme: ce,
        mode: ut,
        setColorScheme: Te,
        setMode: de,
        systemMode: be,
      }),
      [pe, Ce, Ne, ce, ut, Te, de, be, E.colorSchemeSelector]
    );
    let H = !0;
    (O ||
      G.cssVariables === !1 ||
      (V && (A == null ? void 0 : A.cssVarPrefix) === fe)) &&
      (H = !1);
    const B = J(S.Fragment, {
      children: [
        x(lS, { themeId: z ? t : void 0, theme: E, children: p }),
        H &&
          x(A1, {
            styles:
              ((Le = E.generateStyleSheets) == null ? void 0 : Le.call(E)) ||
              [],
          }),
      ],
    });
    return V ? B : x(u.Provider, { value: N, children: B });
  }
  const y = typeof s == "string" ? s : s.light,
    v = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: w,
    useColorScheme: d,
    getInitColorSchemeScript: (h) =>
      HT({
        colorSchemeStorageKey: o,
        defaultLightColorScheme: y,
        defaultDarkColorScheme: v,
        modeStorageKey: r,
        ...h,
      }),
  };
}
function QT(e = "") {
  function t(...r) {
    if (!r.length) return "";
    const o = r[0];
    return typeof o == "string" &&
      !o.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})`
      : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const Cg = (e, t, n, r = []) => {
    let o = e;
    t.forEach((i, s) => {
      s === t.length - 1
        ? Array.isArray(o)
          ? (o[Number(i)] = n)
          : o && typeof o == "object" && (o[i] = n)
        : o &&
          typeof o == "object" &&
          (o[i] || (o[i] = r.includes(i) ? [] : {}), (o = o[i]));
    });
  },
  XT = (e, t, n) => {
    function r(o, i = [], s = []) {
      Object.entries(o).forEach(([a, l]) => {
        (!n || (n && !n([...i, a]))) &&
          l != null &&
          (typeof l == "object" && Object.keys(l).length > 0
            ? r(l, [...i, a], Array.isArray(l) ? [...s, a] : s)
            : t([...i, a], l, s));
      });
    }
    r(e);
  },
  JT = (e, t) =>
    typeof t == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) =>
          e.includes(r)
        ) || e[e.length - 1].toLowerCase().includes("opacity")
        ? t
        : `${t}px`
      : t;
function Uc(e, t) {
  const { prefix: n, shouldSkipGeneratingVar: r } = t || {},
    o = {},
    i = {},
    s = {};
  return (
    XT(
      e,
      (a, l, u) => {
        if (
          (typeof l == "string" || typeof l == "number") &&
          (!r || !r(a, l))
        ) {
          const d = `--${n ? `${n}-` : ""}${a.join("-")}`,
            c = JT(a, l);
          Object.assign(o, { [d]: c }),
            Cg(i, a, `var(${d})`, u),
            Cg(s, a, `var(${d}, ${c})`, u);
        }
      },
      (a) => a[0] === "vars"
    ),
    { css: o, vars: i, varsWithDefaults: s }
  );
}
function ZT(e, t = {}) {
  const {
      getSelector: n = C,
      disableCssColorScheme: r,
      colorSchemeSelector: o,
    } = t,
    {
      colorSchemes: i = {},
      components: s,
      defaultColorScheme: a = "light",
      ...l
    } = e,
    { vars: u, css: d, varsWithDefaults: c } = Uc(l, t);
  let f = c;
  const w = {},
    { [a]: y, ...v } = i;
  if (
    (Object.entries(v || {}).forEach(([m, b]) => {
      const { vars: k, css: P, varsWithDefaults: R } = Uc(b, t);
      (f = Lt(f, R)), (w[m] = { css: P, vars: k });
    }),
    y)
  ) {
    const { css: m, vars: b, varsWithDefaults: k } = Uc(y, t);
    (f = Lt(f, k)), (w[a] = { css: m, vars: b });
  }
  function C(m, b) {
    var P, R;
    let k = o;
    if (
      (o === "class" && (k = ".%s"),
      o === "data" && (k = "[data-%s]"),
      o != null &&
        o.startsWith("data-") &&
        !o.includes("%s") &&
        (k = `[${o}="%s"]`),
      m)
    ) {
      if (k === "media")
        return e.defaultColorScheme === m
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${
                ((R = (P = i[m]) == null ? void 0 : P.palette) == null
                  ? void 0
                  : R.mode) || m
              })`]: { ":root": b },
            };
      if (k)
        return e.defaultColorScheme === m
          ? `:root, ${k.replace("%s", String(m))}`
          : k.replace("%s", String(m));
    }
    return ":root";
  }
  return {
    vars: f,
    generateThemeVars: () => {
      let m = { ...u };
      return (
        Object.entries(w).forEach(([, { vars: b }]) => {
          m = Lt(m, b);
        }),
        m
      );
    },
    generateStyleSheets: () => {
      var T, M;
      const m = [],
        b = e.defaultColorScheme || "light";
      function k(g, O) {
        Object.keys(O).length &&
          m.push(typeof g == "string" ? { [g]: { ...O } } : g);
      }
      k(n(void 0, { ...d }), d);
      const { [b]: P, ...R } = w;
      if (P) {
        const { css: g } = P,
          O =
            (M = (T = i[b]) == null ? void 0 : T.palette) == null
              ? void 0
              : M.mode,
          I = !r && O ? { colorScheme: O, ...g } : { ...g };
        k(n(b, { ...I }), I);
      }
      return (
        Object.entries(R).forEach(([g, { css: O }]) => {
          var W, A;
          const I =
              (A = (W = i[g]) == null ? void 0 : W.palette) == null
                ? void 0
                : A.mode,
            _ = !r && I ? { colorScheme: I, ...O } : { ...O };
          k(n(g, { ..._ }), _);
        }),
        m
      );
    },
  };
}
function e$(e) {
  return function (n) {
    return e === "media"
      ? `@media (prefers-color-scheme: ${n})`
      : e
      ? e.startsWith("data-") && !e.includes("%s")
        ? `[${e}="${n}"] &`
        : e === "class"
        ? `.${n} &`
        : e === "data"
        ? `[data-${n}] &`
        : `${e.replace("%s", n)} &`
      : "&";
  };
}
const t$ = Gu(),
  n$ = wT("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`maxWidth${Y(String(n.maxWidth))}`],
        n.fixed && t.fixed,
        n.disableGutters && t.disableGutters,
      ];
    },
  }),
  r$ = (e) => CT({ props: e, name: "MuiContainer", defaultTheme: t$ }),
  o$ = (e, t) => {
    const n = (l) => se(t, l),
      { classes: r, fixed: o, disableGutters: i, maxWidth: s } = e,
      a = {
        root: [
          "root",
          s && `maxWidth${Y(String(s))}`,
          o && "fixed",
          i && "disableGutters",
        ],
      };
    return ae(a, n, r);
  };
function i$(e = {}) {
  const {
      createStyledComponent: t = n$,
      useThemeProps: n = r$,
      componentName: r = "MuiContainer",
    } = e,
    o = t(
      ({ theme: s, ownerState: a }) => ({
        width: "100%",
        marginLeft: "auto",
        boxSizing: "border-box",
        marginRight: "auto",
        ...(!a.disableGutters && {
          paddingLeft: s.spacing(2),
          paddingRight: s.spacing(2),
          [s.breakpoints.up("sm")]: {
            paddingLeft: s.spacing(3),
            paddingRight: s.spacing(3),
          },
        }),
      }),
      ({ theme: s, ownerState: a }) =>
        a.fixed &&
        Object.keys(s.breakpoints.values).reduce((l, u) => {
          const d = u,
            c = s.breakpoints.values[d];
          return (
            c !== 0 &&
              (l[s.breakpoints.up(d)] = {
                maxWidth: `${c}${s.breakpoints.unit}`,
              }),
            l
          );
        }, {}),
      ({ theme: s, ownerState: a }) => ({
        ...(a.maxWidth === "xs" && {
          [s.breakpoints.up("xs")]: {
            maxWidth: Math.max(s.breakpoints.values.xs, 444),
          },
        }),
        ...(a.maxWidth &&
          a.maxWidth !== "xs" && {
            [s.breakpoints.up(a.maxWidth)]: {
              maxWidth: `${s.breakpoints.values[a.maxWidth]}${
                s.breakpoints.unit
              }`,
            },
          }),
      })
    );
  return S.forwardRef(function (a, l) {
    const u = n(a),
      {
        className: d,
        component: c = "div",
        disableGutters: f = !1,
        fixed: w = !1,
        maxWidth: y = "lg",
        classes: v,
        ...C
      } = u,
      h = { ...u, component: c, disableGutters: f, fixed: w, maxWidth: y },
      p = o$(h, r);
    return x(o, {
      as: c,
      ownerState: h,
      className: te(p.root, d),
      ref: l,
      ...C,
    });
  });
}
function cS() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: _s.white, default: _s.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const s$ = cS();
function dS() {
  return {
    text: {
      primary: _s.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: _s.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const xg = dS();
function kg(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = mi(e.main, o))
      : t === "dark" && (e.dark = hi(e.main, i)));
}
function a$(e = "light") {
  return e === "dark"
    ? { main: Mo[200], light: Mo[50], dark: Mo[400] }
    : { main: Mo[700], light: Mo[400], dark: Mo[800] };
}
function l$(e = "light") {
  return e === "dark"
    ? { main: Oo[200], light: Oo[50], dark: Oo[400] }
    : { main: Oo[500], light: Oo[300], dark: Oo[700] };
}
function u$(e = "light") {
  return e === "dark"
    ? { main: $o[500], light: $o[300], dark: $o[700] }
    : { main: $o[700], light: $o[400], dark: $o[800] };
}
function c$(e = "light") {
  return e === "dark"
    ? { main: Io[400], light: Io[300], dark: Io[700] }
    : { main: Io[700], light: Io[500], dark: Io[900] };
}
function d$(e = "light") {
  return e === "dark"
    ? { main: Ao[400], light: Ao[300], dark: Ao[700] }
    : { main: Ao[800], light: Ao[500], dark: Ao[900] };
}
function f$(e = "light") {
  return e === "dark"
    ? { main: zi[400], light: zi[300], dark: zi[700] }
    : { main: "#ed6c02", light: zi[500], dark: zi[900] };
}
function Zp(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
      ...o
    } = e,
    i = e.primary || a$(t),
    s = e.secondary || l$(t),
    a = e.error || u$(t),
    l = e.info || c$(t),
    u = e.success || d$(t),
    d = e.warning || f$(t);
  function c(v) {
    return RT(v, xg.text.primary) >= n ? xg.text.primary : s$.text.primary;
  }
  const f = ({
    color: v,
    name: C,
    mainShade: h = 500,
    lightShade: p = 300,
    darkShade: m = 700,
  }) => {
    if (
      ((v = { ...v }),
      !v.main && v[h] && (v.main = v[h]),
      !v.hasOwnProperty("main"))
    )
      throw new Error(dr(11, C ? ` (${C})` : "", h));
    if (typeof v.main != "string")
      throw new Error(dr(12, C ? ` (${C})` : "", JSON.stringify(v.main)));
    return (
      kg(v, "light", p, r),
      kg(v, "dark", m, r),
      v.contrastText || (v.contrastText = c(v.main)),
      v
    );
  };
  let w;
  return (
    t === "light" ? (w = cS()) : t === "dark" && (w = dS()),
    Lt(
      {
        common: { ..._s },
        mode: t,
        primary: f({ color: i, name: "primary" }),
        secondary: f({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: f({ color: a, name: "error" }),
        warning: f({ color: d, name: "warning" }),
        info: f({ color: l, name: "info" }),
        success: f({ color: u, name: "success" }),
        grey: G2,
        contrastThreshold: n,
        getContrastText: c,
        augmentColor: f,
        tonalOffset: r,
        ...w,
      },
      o
    )
  );
}
function p$(e) {
  const t = {};
  return (
    Object.entries(e).forEach((r) => {
      const [o, i] = r;
      typeof i == "object" &&
        (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${
          i.fontVariant ? `${i.fontVariant} ` : ""
        }${i.fontWeight ? `${i.fontWeight} ` : ""}${
          i.fontStretch ? `${i.fontStretch} ` : ""
        }${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${
          i.fontFamily || ""
        }`);
    }),
    t
  );
}
function h$(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [e.up("sm")]: { minHeight: 64 },
    },
    ...t,
  };
}
function m$(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Eg = { textTransform: "uppercase" },
  Pg = '"Roboto", "Helvetica", "Arial", sans-serif';
function fS(e, t) {
  const {
      fontFamily: n = Pg,
      fontSize: r = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: i = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: a = 700,
      htmlFontSize: l = 16,
      allVariants: u,
      pxToRem: d,
      ...c
    } = typeof t == "function" ? t(e) : t,
    f = r / 14,
    w = d || ((C) => `${(C / l) * f}rem`),
    y = (C, h, p, m, b) => ({
      fontFamily: n,
      fontWeight: C,
      fontSize: w(h),
      lineHeight: p,
      ...(n === Pg ? { letterSpacing: `${m$(m / h)}em` } : {}),
      ...b,
      ...u,
    }),
    v = {
      h1: y(o, 96, 1.167, -1.5),
      h2: y(o, 60, 1.2, -0.5),
      h3: y(i, 48, 1.167, 0),
      h4: y(i, 34, 1.235, 0.25),
      h5: y(i, 24, 1.334, 0),
      h6: y(s, 20, 1.6, 0.15),
      subtitle1: y(i, 16, 1.75, 0.15),
      subtitle2: y(s, 14, 1.57, 0.1),
      body1: y(i, 16, 1.5, 0.15),
      body2: y(i, 14, 1.43, 0.15),
      button: y(s, 14, 1.75, 0.4, Eg),
      caption: y(i, 12, 1.66, 0.4),
      overline: y(i, 12, 2.66, 1, Eg),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Lt(
    {
      htmlFontSize: l,
      pxToRem: w,
      fontFamily: n,
      fontSize: r,
      fontWeightLight: o,
      fontWeightRegular: i,
      fontWeightMedium: s,
      fontWeightBold: a,
      ...v,
    },
    c,
    { clone: !1 }
  );
}
const g$ = 0.2,
  y$ = 0.14,
  v$ = 0.12;
function Ke(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${g$})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${y$})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${v$})`,
  ].join(",");
}
const S$ = [
    "none",
    Ke(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Ke(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Ke(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Ke(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Ke(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Ke(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Ke(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Ke(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Ke(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Ke(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Ke(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Ke(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Ke(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Ke(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Ke(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Ke(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Ke(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Ke(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Ke(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Ke(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Ke(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Ke(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Ke(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Ke(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  w$ = S$,
  b$ = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  C$ = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Rg(e) {
  return `${Math.round(e)}ms`;
}
function x$(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function k$(e) {
  const t = { ...b$, ...e.easing },
    n = { ...C$, ...e.duration };
  return {
    getAutoHeightDuration: x$,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: l = 0,
        ...u
      } = i;
      return (Array.isArray(o) ? o : [o])
        .map(
          (d) =>
            `${d} ${typeof s == "string" ? s : Rg(s)} ${a} ${
              typeof l == "string" ? l : Rg(l)
            }`
        )
        .join(",");
    },
    ...e,
    easing: t,
    duration: n,
  };
}
const E$ = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  P$ = E$;
function R$(e) {
  return (
    jn(e) ||
    typeof e > "u" ||
    typeof e == "string" ||
    typeof e == "boolean" ||
    typeof e == "number" ||
    Array.isArray(e)
  );
}
function pS(e = {}) {
  const t = { ...e };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !R$(a) || s.startsWith("unstable_")
        ? delete r[s]
        : jn(a) && ((r[s] = { ...a }), n(r[s]));
    }
  }
  return (
    n(t),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function df(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: a = {},
    shape: l,
    ...u
  } = e;
  if (e.vars) throw new Error(dr(20));
  const d = Zp(i),
    c = Gu(e);
  let f = Lt(c, {
    mixins: h$(c.breakpoints, r),
    palette: d,
    shadows: w$.slice(),
    typography: fS(d, a),
    transitions: k$(s),
    zIndex: { ...P$ },
  });
  return (
    (f = Lt(f, u)),
    (f = t.reduce((w, y) => Lt(w, y), f)),
    (f.unstable_sxConfig = {
      ...ta,
      ...(u == null ? void 0 : u.unstable_sxConfig),
    }),
    (f.unstable_sx = function (y) {
      return Co({ sx: y, theme: this });
    }),
    (f.toRuntimeSource = pS),
    f
  );
}
function ff(e) {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    Math.round(t * 10) / 1e3
  );
}
const T$ = [...Array(25)].map((e, t) => {
  if (t === 0) return "none";
  const n = ff(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function hS(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38,
  };
}
function mS(e) {
  return e === "dark" ? T$ : [];
}
function $$(e) {
  const { palette: t = { mode: "light" }, opacity: n, overlays: r, ...o } = e,
    i = Zp(t);
  return {
    palette: i,
    opacity: { ...hS(i.mode), ...n },
    overlays: r || mS(i.mode),
    ...o,
  };
}
function O$(e) {
  var t;
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === "palette" &&
      !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const M$ = (e) => [
    ...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`),
    `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
  ],
  I$ = M$,
  A$ = (e) => (t, n) => {
    const r = e.rootSelector || ":root",
      o = e.colorSchemeSelector;
    let i = o;
    if (
      (o === "class" && (i = ".%s"),
      o === "data" && (i = "[data-%s]"),
      o != null &&
        o.startsWith("data-") &&
        !o.includes("%s") &&
        (i = `[${o}="%s"]`),
      e.defaultColorScheme === t)
    ) {
      if (t === "dark") {
        const s = {};
        return (
          I$(e.cssVarPrefix).forEach((a) => {
            (s[a] = n[a]), delete n[a];
          }),
          i === "media"
            ? { [r]: n, "@media (prefers-color-scheme: dark)": { [r]: s } }
            : i
            ? { [i.replace("%s", t)]: s, [`${r}, ${i.replace("%s", t)}`]: n }
            : { [r]: { ...n, ...s } }
        );
      }
      if (i && i !== "media") return `${r}, ${i.replace("%s", String(t))}`;
    } else if (t) {
      if (i === "media")
        return { [`@media (prefers-color-scheme: ${String(t)})`]: { [r]: n } };
      if (i) return i.replace("%s", String(t));
    }
    return r;
  };
function N$(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function D(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Zi(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : G1(e);
}
function Jn(e, t) {
  `${t}Channel` in e ||
    (e[`${t}Channel`] = Ji(
      Zi(e[t]),
      `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`
    ));
}
function _$(e) {
  return typeof e == "number"
    ? `${e}px`
    : typeof e == "string" || typeof e == "function" || Array.isArray(e)
    ? e
    : "8px";
}
const Bn = (e) => {
    try {
      return e();
    } catch {}
  },
  L$ = (e = "mui") => QT(e);
function Wc(e, t, n, r) {
  if (!t) return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = $$({
      ...t,
      palette: { mode: o, ...(t == null ? void 0 : t.palette) },
    });
    return;
  }
  const { palette: i, ...s } = df({
    ...n,
    palette: { mode: o, ...(t == null ? void 0 : t.palette) },
  });
  return (
    (e[r] = {
      ...t,
      palette: i,
      opacity: { ...hS(o), ...(t == null ? void 0 : t.opacity) },
      overlays: (t == null ? void 0 : t.overlays) || mS(o),
    }),
    s
  );
}
function F$(e = {}, ...t) {
  const {
      colorSchemes: n = { light: !0 },
      defaultColorScheme: r,
      disableCssColorScheme: o = !1,
      cssVarPrefix: i = "mui",
      shouldSkipGeneratingVar: s = O$,
      colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
      rootSelector: l = ":root",
      ...u
    } = e,
    d = Object.keys(n)[0],
    c = r || (n.light && d !== "light" ? "light" : d),
    f = L$(i),
    { [c]: w, light: y, dark: v, ...C } = n,
    h = { ...C };
  let p = w;
  if (
    (((c === "dark" && !("dark" in n)) || (c === "light" && !("light" in n))) &&
      (p = !0),
    !p)
  )
    throw new Error(dr(21, c));
  const m = Wc(h, p, u, c);
  y && !h.light && Wc(h, y, void 0, "light"),
    v && !h.dark && Wc(h, v, void 0, "dark");
  let b = {
    defaultColorScheme: c,
    ...m,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: l,
    getCssVar: f,
    colorSchemes: h,
    font: { ...p$(m.typography), ...m.font },
    spacing: _$(u.spacing),
  };
  Object.keys(b.colorSchemes).forEach((M) => {
    const g = b.colorSchemes[M].palette,
      O = (I) => {
        const _ = I.split("-"),
          W = _[1],
          A = _[2];
        return f(I, g[W][A]);
      };
    if (
      (g.mode === "light" &&
        (D(g.common, "background", "#fff"),
        D(g.common, "onBackground", "#000")),
      g.mode === "dark" &&
        (D(g.common, "background", "#000"),
        D(g.common, "onBackground", "#fff")),
      N$(g, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      g.mode === "light")
    ) {
      D(g.Alert, "errorColor", Fe(g.error.light, 0.6)),
        D(g.Alert, "infoColor", Fe(g.info.light, 0.6)),
        D(g.Alert, "successColor", Fe(g.success.light, 0.6)),
        D(g.Alert, "warningColor", Fe(g.warning.light, 0.6)),
        D(g.Alert, "errorFilledBg", O("palette-error-main")),
        D(g.Alert, "infoFilledBg", O("palette-info-main")),
        D(g.Alert, "successFilledBg", O("palette-success-main")),
        D(g.Alert, "warningFilledBg", O("palette-warning-main")),
        D(
          g.Alert,
          "errorFilledColor",
          Bn(() => g.getContrastText(g.error.main))
        ),
        D(
          g.Alert,
          "infoFilledColor",
          Bn(() => g.getContrastText(g.info.main))
        ),
        D(
          g.Alert,
          "successFilledColor",
          Bn(() => g.getContrastText(g.success.main))
        ),
        D(
          g.Alert,
          "warningFilledColor",
          Bn(() => g.getContrastText(g.warning.main))
        ),
        D(g.Alert, "errorStandardBg", Be(g.error.light, 0.9)),
        D(g.Alert, "infoStandardBg", Be(g.info.light, 0.9)),
        D(g.Alert, "successStandardBg", Be(g.success.light, 0.9)),
        D(g.Alert, "warningStandardBg", Be(g.warning.light, 0.9)),
        D(g.Alert, "errorIconColor", O("palette-error-main")),
        D(g.Alert, "infoIconColor", O("palette-info-main")),
        D(g.Alert, "successIconColor", O("palette-success-main")),
        D(g.Alert, "warningIconColor", O("palette-warning-main")),
        D(g.AppBar, "defaultBg", O("palette-grey-100")),
        D(g.Avatar, "defaultBg", O("palette-grey-400")),
        D(g.Button, "inheritContainedBg", O("palette-grey-300")),
        D(g.Button, "inheritContainedHoverBg", O("palette-grey-A100")),
        D(g.Chip, "defaultBorder", O("palette-grey-400")),
        D(g.Chip, "defaultAvatarColor", O("palette-grey-700")),
        D(g.Chip, "defaultIconColor", O("palette-grey-700")),
        D(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        D(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        D(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        D(g.LinearProgress, "primaryBg", Be(g.primary.main, 0.62)),
        D(g.LinearProgress, "secondaryBg", Be(g.secondary.main, 0.62)),
        D(g.LinearProgress, "errorBg", Be(g.error.main, 0.62)),
        D(g.LinearProgress, "infoBg", Be(g.info.main, 0.62)),
        D(g.LinearProgress, "successBg", Be(g.success.main, 0.62)),
        D(g.LinearProgress, "warningBg", Be(g.warning.main, 0.62)),
        D(g.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.11)`),
        D(g.Slider, "primaryTrack", Be(g.primary.main, 0.62)),
        D(g.Slider, "secondaryTrack", Be(g.secondary.main, 0.62)),
        D(g.Slider, "errorTrack", Be(g.error.main, 0.62)),
        D(g.Slider, "infoTrack", Be(g.info.main, 0.62)),
        D(g.Slider, "successTrack", Be(g.success.main, 0.62)),
        D(g.Slider, "warningTrack", Be(g.warning.main, 0.62));
      const I = Ra(g.background.default, 0.8);
      D(g.SnackbarContent, "bg", I),
        D(
          g.SnackbarContent,
          "color",
          Bn(() => g.getContrastText(I))
        ),
        D(g.SpeedDialAction, "fabHoverBg", Ra(g.background.paper, 0.15)),
        D(g.StepConnector, "border", O("palette-grey-400")),
        D(g.StepContent, "border", O("palette-grey-400")),
        D(g.Switch, "defaultColor", O("palette-common-white")),
        D(g.Switch, "defaultDisabledColor", O("palette-grey-100")),
        D(g.Switch, "primaryDisabledColor", Be(g.primary.main, 0.62)),
        D(g.Switch, "secondaryDisabledColor", Be(g.secondary.main, 0.62)),
        D(g.Switch, "errorDisabledColor", Be(g.error.main, 0.62)),
        D(g.Switch, "infoDisabledColor", Be(g.info.main, 0.62)),
        D(g.Switch, "successDisabledColor", Be(g.success.main, 0.62)),
        D(g.Switch, "warningDisabledColor", Be(g.warning.main, 0.62)),
        D(g.TableCell, "border", Be(Pa(g.divider, 1), 0.88)),
        D(g.Tooltip, "bg", Pa(g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      D(g.Alert, "errorColor", Be(g.error.light, 0.6)),
        D(g.Alert, "infoColor", Be(g.info.light, 0.6)),
        D(g.Alert, "successColor", Be(g.success.light, 0.6)),
        D(g.Alert, "warningColor", Be(g.warning.light, 0.6)),
        D(g.Alert, "errorFilledBg", O("palette-error-dark")),
        D(g.Alert, "infoFilledBg", O("palette-info-dark")),
        D(g.Alert, "successFilledBg", O("palette-success-dark")),
        D(g.Alert, "warningFilledBg", O("palette-warning-dark")),
        D(
          g.Alert,
          "errorFilledColor",
          Bn(() => g.getContrastText(g.error.dark))
        ),
        D(
          g.Alert,
          "infoFilledColor",
          Bn(() => g.getContrastText(g.info.dark))
        ),
        D(
          g.Alert,
          "successFilledColor",
          Bn(() => g.getContrastText(g.success.dark))
        ),
        D(
          g.Alert,
          "warningFilledColor",
          Bn(() => g.getContrastText(g.warning.dark))
        ),
        D(g.Alert, "errorStandardBg", Fe(g.error.light, 0.9)),
        D(g.Alert, "infoStandardBg", Fe(g.info.light, 0.9)),
        D(g.Alert, "successStandardBg", Fe(g.success.light, 0.9)),
        D(g.Alert, "warningStandardBg", Fe(g.warning.light, 0.9)),
        D(g.Alert, "errorIconColor", O("palette-error-main")),
        D(g.Alert, "infoIconColor", O("palette-info-main")),
        D(g.Alert, "successIconColor", O("palette-success-main")),
        D(g.Alert, "warningIconColor", O("palette-warning-main")),
        D(g.AppBar, "defaultBg", O("palette-grey-900")),
        D(g.AppBar, "darkBg", O("palette-background-paper")),
        D(g.AppBar, "darkColor", O("palette-text-primary")),
        D(g.Avatar, "defaultBg", O("palette-grey-600")),
        D(g.Button, "inheritContainedBg", O("palette-grey-800")),
        D(g.Button, "inheritContainedHoverBg", O("palette-grey-700")),
        D(g.Chip, "defaultBorder", O("palette-grey-700")),
        D(g.Chip, "defaultAvatarColor", O("palette-grey-300")),
        D(g.Chip, "defaultIconColor", O("palette-grey-300")),
        D(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        D(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        D(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        D(g.LinearProgress, "primaryBg", Fe(g.primary.main, 0.5)),
        D(g.LinearProgress, "secondaryBg", Fe(g.secondary.main, 0.5)),
        D(g.LinearProgress, "errorBg", Fe(g.error.main, 0.5)),
        D(g.LinearProgress, "infoBg", Fe(g.info.main, 0.5)),
        D(g.LinearProgress, "successBg", Fe(g.success.main, 0.5)),
        D(g.LinearProgress, "warningBg", Fe(g.warning.main, 0.5)),
        D(g.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.13)`),
        D(g.Slider, "primaryTrack", Fe(g.primary.main, 0.5)),
        D(g.Slider, "secondaryTrack", Fe(g.secondary.main, 0.5)),
        D(g.Slider, "errorTrack", Fe(g.error.main, 0.5)),
        D(g.Slider, "infoTrack", Fe(g.info.main, 0.5)),
        D(g.Slider, "successTrack", Fe(g.success.main, 0.5)),
        D(g.Slider, "warningTrack", Fe(g.warning.main, 0.5));
      const I = Ra(g.background.default, 0.98);
      D(g.SnackbarContent, "bg", I),
        D(
          g.SnackbarContent,
          "color",
          Bn(() => g.getContrastText(I))
        ),
        D(g.SpeedDialAction, "fabHoverBg", Ra(g.background.paper, 0.15)),
        D(g.StepConnector, "border", O("palette-grey-600")),
        D(g.StepContent, "border", O("palette-grey-600")),
        D(g.Switch, "defaultColor", O("palette-grey-300")),
        D(g.Switch, "defaultDisabledColor", O("palette-grey-600")),
        D(g.Switch, "primaryDisabledColor", Fe(g.primary.main, 0.55)),
        D(g.Switch, "secondaryDisabledColor", Fe(g.secondary.main, 0.55)),
        D(g.Switch, "errorDisabledColor", Fe(g.error.main, 0.55)),
        D(g.Switch, "infoDisabledColor", Fe(g.info.main, 0.55)),
        D(g.Switch, "successDisabledColor", Fe(g.success.main, 0.55)),
        D(g.Switch, "warningDisabledColor", Fe(g.warning.main, 0.55)),
        D(g.TableCell, "border", Fe(Pa(g.divider, 1), 0.68)),
        D(g.Tooltip, "bg", Pa(g.grey[700], 0.92));
    }
    Jn(g.background, "default"),
      Jn(g.background, "paper"),
      Jn(g.common, "background"),
      Jn(g.common, "onBackground"),
      Jn(g, "divider"),
      Object.keys(g).forEach((I) => {
        const _ = g[I];
        I !== "tonalOffset" &&
          _ &&
          typeof _ == "object" &&
          (_.main && D(g[I], "mainChannel", Ji(Zi(_.main))),
          _.light && D(g[I], "lightChannel", Ji(Zi(_.light))),
          _.dark && D(g[I], "darkChannel", Ji(Zi(_.dark))),
          _.contrastText &&
            D(g[I], "contrastTextChannel", Ji(Zi(_.contrastText))),
          I === "text" && (Jn(g[I], "primary"), Jn(g[I], "secondary")),
          I === "action" &&
            (_.active && Jn(g[I], "active"),
            _.selected && Jn(g[I], "selected")));
      });
  }),
    (b = t.reduce((M, g) => Lt(M, g), b));
  const k = {
      prefix: i,
      disableCssColorScheme: o,
      shouldSkipGeneratingVar: s,
      getSelector: A$(b),
    },
    { vars: P, generateThemeVars: R, generateStyleSheets: T } = ZT(b, k);
  return (
    (b.vars = P),
    Object.entries(b.colorSchemes[b.defaultColorScheme]).forEach(([M, g]) => {
      b[M] = g;
    }),
    (b.generateThemeVars = R),
    (b.generateStyleSheets = T),
    (b.generateSpacing = function () {
      return D1(u.spacing, Kp(this));
    }),
    (b.getColorSchemeSelector = e$(a)),
    (b.spacing = b.generateSpacing()),
    (b.shouldSkipGeneratingVar = s),
    (b.unstable_sxConfig = {
      ...ta,
      ...(u == null ? void 0 : u.unstable_sxConfig),
    }),
    (b.unstable_sx = function (g) {
      return Co({ sx: g, theme: this });
    }),
    (b.toRuntimeSource = pS),
    b
  );
}
function Tg(e, t, n) {
  e.colorSchemes &&
    n &&
    (e.colorSchemes[t] = {
      ...(n !== !0 && n),
      palette: Zp({ ...(n === !0 ? {} : n.palette), mode: t }),
    });
}
function ra(e = {}, ...t) {
  const {
      palette: n,
      cssVariables: r = !1,
      colorSchemes: o = n ? void 0 : { light: !0 },
      defaultColorScheme: i = n == null ? void 0 : n.mode,
      ...s
    } = e,
    a = i || "light",
    l = o == null ? void 0 : o[a],
    u = {
      ...o,
      ...(n
        ? { [a]: { ...(typeof l != "boolean" && l), palette: n } }
        : void 0),
    };
  if (r === !1) {
    if (!("colorSchemes" in e)) return df(e, ...t);
    let d = n;
    "palette" in e ||
      (u[a] &&
        (u[a] !== !0
          ? (d = u[a].palette)
          : a === "dark" && (d = { mode: "dark" })));
    const c = df({ ...e, palette: d }, ...t);
    return (
      (c.defaultColorScheme = a),
      (c.colorSchemes = u),
      c.palette.mode === "light" &&
        ((c.colorSchemes.light = {
          ...(u.light !== !0 && u.light),
          palette: c.palette,
        }),
        Tg(c, "dark", u.dark)),
      c.palette.mode === "dark" &&
        ((c.colorSchemes.dark = {
          ...(u.dark !== !0 && u.dark),
          palette: c.palette,
        }),
        Tg(c, "light", u.light)),
      c
    );
  }
  return (
    !n && !("light" in u) && a === "light" && (u.light = !0),
    F$(
      {
        ...s,
        colorSchemes: u,
        defaultColorScheme: a,
        ...(typeof r != "boolean" && r),
      },
      ...t
    )
  );
}
const B$ = ra(),
  eh = B$;
function th() {
  const e = Yu(eh);
  return e[Yn] || e;
}
function gS(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const D$ = (e) => gS(e) && e !== "classes",
  en = D$,
  z$ = q1({ themeId: Yn, defaultTheme: eh, rootShouldForwardProp: en }),
  q = z$;
function $g({ theme: e, ...t }) {
  const n = Yn in e ? e[Yn] : void 0;
  return x(lS, { ...t, themeId: n ? Yn : void 0, theme: n || e });
}
const Ta = {
    attribute: "data-mui-color-scheme",
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode",
  },
  {
    CssVarsProvider: U$,
    useColorScheme: EL,
    getInitColorSchemeScript: PL,
  } = YT({
    themeId: Yn,
    theme: () => ra({ cssVariables: !0 }),
    colorSchemeStorageKey: Ta.colorSchemeStorageKey,
    modeStorageKey: Ta.modeStorageKey,
    defaultColorScheme: {
      light: Ta.defaultLightColorScheme,
      dark: Ta.defaultDarkColorScheme,
    },
    resolveTheme: (e) => {
      const t = { ...e, typography: fS(e.palette, e.typography) };
      return (
        (t.unstable_sx = function (r) {
          return Co({ sx: r, theme: this });
        }),
        t
      );
    },
  }),
  W$ = U$;
function yS({ theme: e, ...t }) {
  return typeof e == "function"
    ? x($g, { theme: e, ...t })
    : "colorSchemes" in (Yn in e ? e[Yn] : e)
    ? x(W$, { theme: e, ...t })
    : x($g, { theme: e, ...t });
}
function V$(e) {
  return x(sT, { ...e, defaultTheme: eh, themeId: Yn });
}
function j$(e) {
  return function (n) {
    return x(V$, {
      styles: typeof e == "function" ? (r) => e({ theme: r, ...n }) : e,
    });
  };
}
function H$() {
  return W1;
}
const K$ = VT,
  Se = K$;
function le(e) {
  return WT(e);
}
function q$(e) {
  return se("MuiSvgIcon", e);
}
re("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const G$ = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${Y(t)}`, `fontSize${Y(n)}`],
      };
    return ae(o, q$, r);
  },
  Y$ = q("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${Y(n.color)}`],
        t[`fontSize${Y(n.fontSize)}`],
      ];
    },
  })(
    Se(({ theme: e }) => {
      var t, n, r, o, i, s, a, l, u, d, c, f, w, y;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition:
          (o = (t = e.transitions) == null ? void 0 : t.create) == null
            ? void 0
            : o.call(t, "fill", {
                duration:
                  (r =
                    (n = (e.vars ?? e).transitions) == null
                      ? void 0
                      : n.duration) == null
                    ? void 0
                    : r.shorter,
              }),
        variants: [
          { props: (v) => !v.hasSvgAsChild, style: { fill: "currentColor" } },
          { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
          {
            props: { fontSize: "small" },
            style: {
              fontSize:
                ((s = (i = e.typography) == null ? void 0 : i.pxToRem) == null
                  ? void 0
                  : s.call(i, 20)) || "1.25rem",
            },
          },
          {
            props: { fontSize: "medium" },
            style: {
              fontSize:
                ((l = (a = e.typography) == null ? void 0 : a.pxToRem) == null
                  ? void 0
                  : l.call(a, 24)) || "1.5rem",
            },
          },
          {
            props: { fontSize: "large" },
            style: {
              fontSize:
                ((d = (u = e.typography) == null ? void 0 : u.pxToRem) == null
                  ? void 0
                  : d.call(u, 35)) || "2.1875rem",
            },
          },
          ...Object.entries((e.vars ?? e).palette)
            .filter(([, v]) => v && v.main)
            .map(([v]) => {
              var C, h;
              return {
                props: { color: v },
                style: {
                  color:
                    (h = (C = (e.vars ?? e).palette) == null ? void 0 : C[v]) ==
                    null
                      ? void 0
                      : h.main,
                },
              };
            }),
          {
            props: { color: "action" },
            style: {
              color:
                (f = (c = (e.vars ?? e).palette) == null ? void 0 : c.action) ==
                null
                  ? void 0
                  : f.active,
            },
          },
          {
            props: { color: "disabled" },
            style: {
              color:
                (y = (w = (e.vars ?? e).palette) == null ? void 0 : w.action) ==
                null
                  ? void 0
                  : y.disabled,
            },
          },
          { props: { color: "inherit" }, style: { color: void 0 } },
        ],
      };
    })
  ),
  vS = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: s = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: d = !1,
        titleAccess: c,
        viewBox: f = "0 0 24 24",
        ...w
      } = r,
      y = S.isValidElement(o) && o.type === "svg",
      v = {
        ...r,
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: d,
        viewBox: f,
        hasSvgAsChild: y,
      },
      C = {};
    d || (C.viewBox = f);
    const h = G$(v);
    return J(Y$, {
      as: a,
      className: te(h.root, i),
      focusable: "false",
      color: u,
      "aria-hidden": c ? void 0 : !0,
      role: c ? "img" : void 0,
      ref: n,
      ...C,
      ...w,
      ...(y && o.props),
      ownerState: v,
      children: [
        y ? o.props.children : o,
        c ? x("title", { children: c }) : null,
      ],
    });
  });
vS.muiName = "SvgIcon";
const Og = vS;
function Je(e, t) {
  function n(r, o) {
    return x(Og, { "data-testid": `${t}Icon`, ref: o, ...r, children: e });
  }
  return (n.muiName = Og.muiName), S.memo(S.forwardRef(n));
}
function SS(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function wS(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Qd(e, t);
}
const Mg = { disabled: !1 },
  Bl = ve.createContext(null);
var Q$ = function (t) {
    return t.scrollTop;
  },
  es = "unmounted",
  no = "exited",
  ro = "entering",
  Fo = "entered",
  pf = "exiting",
  gr = (function (e) {
    wS(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (i.appearStatus = null),
        r.in
          ? a
            ? ((l = no), (i.appearStatus = ro))
            : (l = Fo)
          : r.unmountOnExit || r.mountOnEnter
          ? (l = es)
          : (l = no),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === es ? { status: no } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== ro && s !== Fo && (i = ro)
            : (s === ro || s === Fo) && (i = pf);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          a;
        return (
          (i = s = a = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (s = o.enter),
            (a = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === ro)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : ka.findDOMNode(this);
              s && Q$(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === no &&
            this.setState({ status: es });
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [a] : [ka.findDOMNode(this), a],
          u = l[0],
          d = l[1],
          c = this.getTimeouts(),
          f = a ? c.appear : c.enter;
        if ((!o && !s) || Mg.disabled) {
          this.safeSetState({ status: Fo }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, d),
          this.safeSetState({ status: ro }, function () {
            i.props.onEntering(u, d),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: Fo }, function () {
                  i.props.onEntered(u, d);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : ka.findDOMNode(this);
        if (!i || Mg.disabled) {
          this.safeSetState({ status: no }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: pf }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: no }, function () {
                  o.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (i.nextCallback = null), o(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : ka.findDOMNode(this),
          a = o == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = l[0],
            d = l[1];
          this.props.addEndListener(u, d);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === es) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var a = SS(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return ve.createElement(
          Bl.Provider,
          { value: null },
          typeof s == "function"
            ? s(o, a)
            : ve.cloneElement(ve.Children.only(s), a)
        );
      }),
      t
    );
  })(ve.Component);
gr.contextType = Bl;
gr.propTypes = {};
function No() {}
gr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: No,
  onEntering: No,
  onEntered: No,
  onExit: No,
  onExiting: No,
  onExited: No,
};
gr.UNMOUNTED = es;
gr.EXITED = no;
gr.ENTERING = ro;
gr.ENTERED = Fo;
gr.EXITING = pf;
const bS = gr;
function nh(e, t) {
  var n = function (i) {
      return t && S.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      S.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function X$(e, t) {
  (e = e || {}), (t = t || {});
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var s,
    a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        a[r[l][s]] = n(u);
      }
    a[l] = n(l);
  }
  for (s = 0; s < o.length; s++) a[o[s]] = n(o[s]);
  return a;
}
function uo(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function J$(e, t) {
  return nh(e.children, function (n) {
    return S.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: uo(n, "appear", e),
      enter: uo(n, "enter", e),
      exit: uo(n, "exit", e),
    });
  });
}
function Z$(e, t, n) {
  var r = nh(e.children),
    o = X$(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i];
      if (S.isValidElement(s)) {
        var a = i in t,
          l = i in r,
          u = t[i],
          d = S.isValidElement(u) && !u.props.in;
        l && (!a || d)
          ? (o[i] = S.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: uo(s, "exit", e),
              enter: uo(s, "enter", e),
            }))
          : !l && a && !d
          ? (o[i] = S.cloneElement(s, { in: !1 }))
          : l &&
            a &&
            S.isValidElement(u) &&
            (o[i] = S.cloneElement(s, {
              onExited: n.bind(null, s),
              in: u.props.in,
              exit: uo(s, "exit", e),
              enter: uo(s, "enter", e),
            }));
      }
    }),
    o
  );
}
var eO =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  tO = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  rh = (function (e) {
    wS(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = i.handleExited.bind(eE(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          a = i.handleExited,
          l = i.firstRender;
        return { children: l ? J$(o, a) : Z$(o, s, a), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var s = nh(this.props.children);
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var l = Nl({}, a.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          a = SS(o, ["component", "childFactory"]),
          l = this.state.contextValue,
          u = eO(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? ve.createElement(Bl.Provider, { value: l }, u)
            : ve.createElement(
                Bl.Provider,
                { value: l },
                ve.createElement(i, a, u)
              )
        );
      }),
      t
    );
  })(ve.Component);
rh.propTypes = {};
rh.defaultProps = tO;
const nO = rh,
  CS = (e) => e.scrollTop;
function Dl(e, t) {
  const { timeout: n, easing: r, style: o = {} } = e;
  return {
    duration:
      o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing:
      o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay,
  };
}
function rO(e) {
  return se("MuiPaper", e);
}
re("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const oO = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return ae(i, rO, o);
  },
  iO = q("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(
    Se(({ theme: e }) => ({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create("box-shadow"),
      variants: [
        {
          props: ({ ownerState: t }) => !t.square,
          style: { borderRadius: e.shape.borderRadius },
        },
        {
          props: { variant: "outlined" },
          style: { border: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: { variant: "elevation" },
          style: {
            boxShadow: "var(--Paper-shadow)",
            backgroundImage: "var(--Paper-overlay)",
          },
        },
      ],
    }))
  ),
  sO = S.forwardRef(function (t, n) {
    var w;
    const r = le({ props: t, name: "MuiPaper" }),
      o = th(),
      {
        className: i,
        component: s = "div",
        elevation: a = 1,
        square: l = !1,
        variant: u = "elevation",
        ...d
      } = r,
      c = { ...r, component: s, elevation: a, square: l, variant: u },
      f = oO(c);
    return x(iO, {
      as: s,
      ownerState: c,
      className: te(f.root, i),
      ref: n,
      ...d,
      style: {
        ...(u === "elevation" && {
          "--Paper-shadow": (o.vars || o).shadows[a],
          ...(o.vars && {
            "--Paper-overlay": (w = o.vars.overlays) == null ? void 0 : w[a],
          }),
          ...(!o.vars &&
            o.palette.mode === "dark" && {
              "--Paper-overlay": `linear-gradient(${Ue("#fff", ff(a))}, ${Ue(
                "#fff",
                ff(a)
              )})`,
            }),
        }),
        ...d.style,
      },
    });
  }),
  Ei = sO;
function it(e, t) {
  const {
      className: n,
      elementType: r,
      ownerState: o,
      externalForwardedProps: i,
      internalForwardedProps: s,
      shouldForwardComponentProp: a = !1,
      ...l
    } = t,
    {
      component: u,
      slots: d = { [e]: void 0 },
      slotProps: c = { [e]: void 0 },
      ...f
    } = i,
    w = d[e] || r,
    y = rS(c[e], o),
    {
      props: { component: v, ...C },
      internalRef: h,
    } = nS({
      className: n,
      ...l,
      externalForwardedProps: e === "root" ? f : void 0,
      externalSlotProps: y,
    }),
    p = bt(h, y == null ? void 0 : y.ref, t.ref),
    m = e === "root" ? v || u : v,
    b = eS(
      w,
      {
        ...(e === "root" && !u && !d[e] && s),
        ...(e !== "root" && !d[e] && s),
        ...C,
        ...(m && !a && { as: m }),
        ...(m && a && { component: m }),
        ref: p,
      },
      o
    );
  return [w, b];
}
class zl {
  constructor() {
    Ti(this, "mountEffect", () => {
      this.shouldMount &&
        !this.didMount &&
        this.ref.current !== null &&
        ((this.didMount = !0), this.mounted.resolve());
    });
    (this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null);
  }
  static create() {
    return new zl();
  }
  static use() {
    const t = Q1(zl.create).current,
      [n, r] = S.useState(!1);
    return (
      (t.shouldMount = n),
      (t.setShouldMount = r),
      S.useEffect(t.mountEffect, [n]),
      t
    );
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = lO()),
        (this.shouldMount = !0),
        this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  start(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
    });
  }
}
function aO() {
  return zl.use();
}
function lO() {
  let e, t;
  const n = new Promise((r, o) => {
    (e = r), (t = o);
  });
  return (n.resolve = e), (n.reject = t), n;
}
function uO(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: a,
      onExited: l,
      timeout: u,
    } = e,
    [d, c] = S.useState(!1),
    f = te(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    w = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    y = te(n.child, d && n.childLeaving, r && n.childPulsate);
  return (
    !a && !d && c(!0),
    S.useEffect(() => {
      if (!a && l != null) {
        const v = setTimeout(l, u);
        return () => {
          clearTimeout(v);
        };
      }
    }, [l, a, u]),
    x("span", { className: f, style: w, children: x("span", { className: y }) })
  );
}
const cO = re("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  pn = cO,
  hf = 550,
  dO = 80,
  fO = Js`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  pO = Js`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  hO = Js`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  mO = q("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  gO = q(uO, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${pn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${fO};
    animation-duration: ${hf}ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
  }

  &.${pn.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${pn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${pn.childLeaving} {
    opacity: 0;
    animation-name: ${pO};
    animation-duration: ${hf}ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
  }

  & .${pn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${hO};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  yO = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: s, ...a } = r,
      [l, u] = S.useState([]),
      d = S.useRef(0),
      c = S.useRef(null);
    S.useEffect(() => {
      c.current && (c.current(), (c.current = null));
    }, [l]);
    const f = S.useRef(!1),
      w = X1(),
      y = S.useRef(null),
      v = S.useRef(null),
      C = S.useCallback(
        (b) => {
          const {
            pulsate: k,
            rippleX: P,
            rippleY: R,
            rippleSize: T,
            cb: M,
          } = b;
          u((g) => [
            ...g,
            x(
              gO,
              {
                classes: {
                  ripple: te(i.ripple, pn.ripple),
                  rippleVisible: te(i.rippleVisible, pn.rippleVisible),
                  ripplePulsate: te(i.ripplePulsate, pn.ripplePulsate),
                  child: te(i.child, pn.child),
                  childLeaving: te(i.childLeaving, pn.childLeaving),
                  childPulsate: te(i.childPulsate, pn.childPulsate),
                },
                timeout: hf,
                pulsate: k,
                rippleX: P,
                rippleY: R,
                rippleSize: T,
              },
              d.current
            ),
          ]),
            (d.current += 1),
            (c.current = M);
        },
        [i]
      ),
      h = S.useCallback(
        (b = {}, k = {}, P = () => {}) => {
          const {
            pulsate: R = !1,
            center: T = o || k.pulsate,
            fakeElement: M = !1,
          } = k;
          if ((b == null ? void 0 : b.type) === "mousedown" && f.current) {
            f.current = !1;
            return;
          }
          (b == null ? void 0 : b.type) === "touchstart" && (f.current = !0);
          const g = M ? null : v.current,
            O = g
              ? g.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let I, _, W;
          if (
            T ||
            b === void 0 ||
            (b.clientX === 0 && b.clientY === 0) ||
            (!b.clientX && !b.touches)
          )
            (I = Math.round(O.width / 2)), (_ = Math.round(O.height / 2));
          else {
            const { clientX: A, clientY: L } =
              b.touches && b.touches.length > 0 ? b.touches[0] : b;
            (I = Math.round(A - O.left)), (_ = Math.round(L - O.top));
          }
          if (T)
            (W = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3)),
              W % 2 === 0 && (W += 1);
          else {
            const A =
                Math.max(Math.abs((g ? g.clientWidth : 0) - I), I) * 2 + 2,
              L = Math.max(Math.abs((g ? g.clientHeight : 0) - _), _) * 2 + 2;
            W = Math.sqrt(A ** 2 + L ** 2);
          }
          b != null && b.touches
            ? y.current === null &&
              ((y.current = () => {
                C({ pulsate: R, rippleX: I, rippleY: _, rippleSize: W, cb: P });
              }),
              w.start(dO, () => {
                y.current && (y.current(), (y.current = null));
              }))
            : C({ pulsate: R, rippleX: I, rippleY: _, rippleSize: W, cb: P });
        },
        [o, C, w]
      ),
      p = S.useCallback(() => {
        h({}, { pulsate: !0 });
      }, [h]),
      m = S.useCallback(
        (b, k) => {
          if (
            (w.clear(),
            (b == null ? void 0 : b.type) === "touchend" && y.current)
          ) {
            y.current(),
              (y.current = null),
              w.start(0, () => {
                m(b, k);
              });
            return;
          }
          (y.current = null),
            u((P) => (P.length > 0 ? P.slice(1) : P)),
            (c.current = k);
        },
        [w]
      );
    return (
      S.useImperativeHandle(n, () => ({ pulsate: p, start: h, stop: m }), [
        p,
        h,
        m,
      ]),
      x(mO, {
        className: te(pn.root, i.root, s),
        ref: v,
        ...a,
        children: x(nO, { component: null, exit: !0, children: l }),
      })
    );
  }),
  vO = yO;
function SO(e) {
  return se("MuiButtonBase", e);
}
const wO = re("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  bO = wO,
  CO = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      s = ae({ root: ["root", t && "disabled", n && "focusVisible"] }, SO, o);
    return n && r && (s.root += ` ${r}`), s;
  },
  xO = q("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${bO.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  kO = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: a,
        component: l = "button",
        disabled: u = !1,
        disableRipple: d = !1,
        disableTouchRipple: c = !1,
        focusRipple: f = !1,
        focusVisibleClassName: w,
        LinkComponent: y = "a",
        onBlur: v,
        onClick: C,
        onContextMenu: h,
        onDragLeave: p,
        onFocus: m,
        onFocusVisible: b,
        onKeyDown: k,
        onKeyUp: P,
        onMouseDown: R,
        onMouseLeave: T,
        onMouseUp: M,
        onTouchEnd: g,
        onTouchMove: O,
        onTouchStart: I,
        tabIndex: _ = 0,
        TouchRippleProps: W,
        touchRippleRef: A,
        type: L,
        ...V
      } = r,
      U = S.useRef(null),
      z = aO(),
      G = bt(z.ref, A),
      [Z, oe] = S.useState(!1);
    u && Z && oe(!1),
      S.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            oe(!0), U.current.focus();
          },
        }),
        []
      );
    const fe = z.shouldMount && !d && !u;
    S.useEffect(() => {
      Z && f && !d && z.pulsate();
    }, [d, f, Z, z]);
    const ue = Zn(z, "start", R, c),
      pe = Zn(z, "stop", h, c),
      ke = Zn(z, "stop", p, c),
      Ee = Zn(z, "stop", M, c),
      Ge = Zn(
        z,
        "stop",
        (B) => {
          Z && B.preventDefault(), T && T(B);
        },
        c
      ),
      Oe = Zn(z, "start", I, c),
      de = Zn(z, "stop", g, c),
      be = Zn(z, "stop", O, c),
      ce = Zn(
        z,
        "stop",
        (B) => {
          gg(B.target) || oe(!1), v && v(B);
        },
        !1
      ),
      Ne = ii((B) => {
        U.current || (U.current = B.currentTarget),
          gg(B.target) && (oe(!0), b && b(B)),
          m && m(B);
      }),
      me = () => {
        const B = U.current;
        return l && l !== "button" && !(B.tagName === "A" && B.href);
      },
      Te = ii((B) => {
        f &&
          !B.repeat &&
          Z &&
          B.key === " " &&
          z.stop(B, () => {
            z.start(B);
          }),
          B.target === B.currentTarget &&
            me() &&
            B.key === " " &&
            B.preventDefault(),
          k && k(B),
          B.target === B.currentTarget &&
            me() &&
            B.key === "Enter" &&
            !u &&
            (B.preventDefault(), C && C(B));
      }),
      ut = ii((B) => {
        f &&
          B.key === " " &&
          Z &&
          !B.defaultPrevented &&
          z.stop(B, () => {
            z.pulsate(B);
          }),
          P && P(B),
          C &&
            B.target === B.currentTarget &&
            me() &&
            B.key === " " &&
            !B.defaultPrevented &&
            C(B);
      });
    let Ce = l;
    Ce === "button" && (V.href || V.to) && (Ce = y);
    const E = {};
    Ce === "button"
      ? ((E.type = L === void 0 ? "button" : L), (E.disabled = u))
      : (!V.href && !V.to && (E.role = "button"),
        u && (E["aria-disabled"] = u));
    const $ = bt(n, U),
      N = {
        ...r,
        centerRipple: i,
        component: l,
        disabled: u,
        disableRipple: d,
        disableTouchRipple: c,
        focusRipple: f,
        tabIndex: _,
        focusVisible: Z,
      },
      H = CO(N);
    return J(xO, {
      as: Ce,
      className: te(H.root, a),
      ownerState: N,
      onBlur: ce,
      onClick: C,
      onContextMenu: pe,
      onFocus: Ne,
      onKeyDown: Te,
      onKeyUp: ut,
      onMouseDown: ue,
      onMouseLeave: Ge,
      onMouseUp: Ee,
      onDragLeave: ke,
      onTouchEnd: de,
      onTouchMove: be,
      onTouchStart: Oe,
      ref: $,
      tabIndex: u ? -1 : _,
      type: L,
      ...E,
      ...V,
      children: [s, fe ? x(vO, { ref: G, center: i, ...W }) : null],
    });
  });
function Zn(e, t, n, r = !1) {
  return ii((o) => (n && n(o), r || e[t](o), !0));
}
const Pi = kO;
function EO(e) {
  return typeof e.main == "string";
}
function PO(e, t = []) {
  if (!EO(e)) return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string") return !1;
  return !0;
}
function wt(e = []) {
  return ([, t]) => t && PO(t, e);
}
function RO(e) {
  return se("MuiAlert", e);
}
const TO = re("MuiAlert", [
    "root",
    "action",
    "icon",
    "message",
    "filled",
    "colorSuccess",
    "colorInfo",
    "colorWarning",
    "colorError",
    "filledSuccess",
    "filledInfo",
    "filledWarning",
    "filledError",
    "outlined",
    "outlinedSuccess",
    "outlinedInfo",
    "outlinedWarning",
    "outlinedError",
    "standard",
    "standardSuccess",
    "standardInfo",
    "standardWarning",
    "standardError",
  ]),
  Ig = TO;
function $O(e) {
  return se("MuiCircularProgress", e);
}
re("MuiCircularProgress", [
  "root",
  "determinate",
  "indeterminate",
  "colorPrimary",
  "colorSecondary",
  "svg",
  "circle",
  "circleDeterminate",
  "circleIndeterminate",
  "circleDisableShrink",
]);
const wr = 44,
  mf = Js`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  gf = Js`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,
  OO =
    typeof mf != "string"
      ? Up`
        animation: ${mf} 1.4s linear infinite;
      `
      : null,
  MO =
    typeof gf != "string"
      ? Up`
        animation: ${gf} 1.4s ease-in-out infinite;
      `
      : null,
  IO = (e) => {
    const { classes: t, variant: n, color: r, disableShrink: o } = e,
      i = {
        root: ["root", n, `color${Y(r)}`],
        svg: ["svg"],
        circle: ["circle", `circle${Y(n)}`, o && "circleDisableShrink"],
      };
    return ae(i, $O, t);
  },
  AO = q("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant], t[`color${Y(n.color)}`]];
    },
  })(
    Se(({ theme: e }) => ({
      display: "inline-block",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: e.transitions.create("transform") },
        },
        {
          props: { variant: "indeterminate" },
          style: OO || { animation: `${mf} 1.4s linear infinite` },
        },
        ...Object.entries(e.palette)
          .filter(wt())
          .map(([t]) => ({
            props: { color: t },
            style: { color: (e.vars || e).palette[t].main },
          })),
      ],
    }))
  ),
  NO = q("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (e, t) => t.svg,
  })({ display: "block" }),
  _O = q("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.circle,
        t[`circle${Y(n.variant)}`],
        n.disableShrink && t.circleDisableShrink,
      ];
    },
  })(
    Se(({ theme: e }) => ({
      stroke: "currentColor",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: e.transitions.create("stroke-dashoffset") },
        },
        {
          props: { variant: "indeterminate" },
          style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 },
        },
        {
          props: ({ ownerState: t }) =>
            t.variant === "indeterminate" && !t.disableShrink,
          style: MO || { animation: `${gf} 1.4s ease-in-out infinite` },
        },
      ],
    }))
  ),
  LO = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiCircularProgress" }),
      {
        className: o,
        color: i = "primary",
        disableShrink: s = !1,
        size: a = 40,
        style: l,
        thickness: u = 3.6,
        value: d = 0,
        variant: c = "indeterminate",
        ...f
      } = r,
      w = {
        ...r,
        color: i,
        disableShrink: s,
        size: a,
        thickness: u,
        value: d,
        variant: c,
      },
      y = IO(w),
      v = {},
      C = {},
      h = {};
    if (c === "determinate") {
      const p = 2 * Math.PI * ((wr - u) / 2);
      (v.strokeDasharray = p.toFixed(3)),
        (h["aria-valuenow"] = Math.round(d)),
        (v.strokeDashoffset = `${(((100 - d) / 100) * p).toFixed(3)}px`),
        (C.transform = "rotate(-90deg)");
    }
    return x(AO, {
      className: te(y.root, o),
      style: { width: a, height: a, ...C, ...l },
      ownerState: w,
      ref: n,
      role: "progressbar",
      ...h,
      ...f,
      children: x(NO, {
        className: y.svg,
        ownerState: w,
        viewBox: `${wr / 2} ${wr / 2} ${wr} ${wr}`,
        children: x(_O, {
          className: y.circle,
          style: v,
          ownerState: w,
          cx: wr,
          cy: wr,
          r: (wr - u) / 2,
          fill: "none",
          strokeWidth: u,
        }),
      }),
    });
  }),
  Eo = LO;
function FO(e) {
  return se("MuiIconButton", e);
}
const BO = re("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
    "loading",
    "loadingIndicator",
    "loadingWrapper",
  ]),
  Ag = BO,
  DO = (e) => {
    const {
        classes: t,
        disabled: n,
        color: r,
        edge: o,
        size: i,
        loading: s,
      } = e,
      a = {
        root: [
          "root",
          s && "loading",
          n && "disabled",
          r !== "default" && `color${Y(r)}`,
          o && `edge${Y(o)}`,
          `size${Y(i)}`,
        ],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"],
      };
    return ae(a, FO, t);
  },
  zO = q(Pi, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.loading && t.loading,
        n.color !== "default" && t[`color${Y(n.color)}`],
        n.edge && t[`edge${Y(n.edge)}`],
        t[`size${Y(n.size)}`],
      ];
    },
  })(
    Se(({ theme: e }) => ({
      textAlign: "center",
      flex: "0 0 auto",
      fontSize: e.typography.pxToRem(24),
      padding: 8,
      borderRadius: "50%",
      color: (e.vars || e).palette.action.active,
      transition: e.transitions.create("background-color", {
        duration: e.transitions.duration.shortest,
      }),
      variants: [
        {
          props: (t) => !t.disableRipple,
          style: {
            "--IconButton-hoverBg": e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : Ue(e.palette.action.active, e.palette.action.hoverOpacity),
            "&:hover": {
              backgroundColor: "var(--IconButton-hoverBg)",
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
        },
        { props: { edge: "start" }, style: { marginLeft: -12 } },
        { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } },
        { props: { edge: "end" }, style: { marginRight: -12 } },
        { props: { edge: "end", size: "small" }, style: { marginRight: -3 } },
      ],
    })),
    Se(({ theme: e }) => ({
      variants: [
        { props: { color: "inherit" }, style: { color: "inherit" } },
        ...Object.entries(e.palette)
          .filter(wt())
          .map(([t]) => ({
            props: { color: t },
            style: { color: (e.vars || e).palette[t].main },
          })),
        ...Object.entries(e.palette)
          .filter(wt())
          .map(([t]) => ({
            props: { color: t },
            style: {
              "--IconButton-hoverBg": e.vars
                ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${
                    e.vars.palette.action.hoverOpacity
                  })`
                : Ue(
                    (e.vars || e).palette[t].main,
                    e.palette.action.hoverOpacity
                  ),
            },
          })),
        {
          props: { size: "small" },
          style: { padding: 5, fontSize: e.typography.pxToRem(18) },
        },
        {
          props: { size: "large" },
          style: { padding: 12, fontSize: e.typography.pxToRem(28) },
        },
      ],
      [`&.${Ag.disabled}`]: {
        backgroundColor: "transparent",
        color: (e.vars || e).palette.action.disabled,
      },
      [`&.${Ag.loading}`]: { color: "transparent" },
    }))
  ),
  UO = q("span", {
    name: "MuiIconButton",
    slot: "LoadingIndicator",
    overridesResolver: (e, t) => t.loadingIndicator,
  })(({ theme: e }) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: (e.vars || e).palette.action.disabled,
    variants: [{ props: { loading: !0 }, style: { display: "flex" } }],
  })),
  WO = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiIconButton" }),
      {
        edge: o = !1,
        children: i,
        className: s,
        color: a = "default",
        disabled: l = !1,
        disableFocusRipple: u = !1,
        size: d = "medium",
        id: c,
        loading: f = null,
        loadingIndicator: w,
        ...y
      } = r,
      v = Xu(c),
      C = w ?? x(Eo, { "aria-labelledby": v, color: "inherit", size: 16 }),
      h = {
        ...r,
        edge: o,
        color: a,
        disabled: l,
        disableFocusRipple: u,
        loading: f,
        loadingIndicator: C,
        size: d,
      },
      p = DO(h);
    return J(zO, {
      id: f ? v : c,
      className: te(p.root, s),
      centerRipple: !0,
      focusRipple: !u,
      disabled: l || f,
      ref: n,
      ...y,
      ownerState: h,
      children: [
        typeof f == "boolean" &&
          x("span", {
            className: p.loadingWrapper,
            style: { display: "contents" },
            children: x(UO, {
              className: p.loadingIndicator,
              ownerState: h,
              children: f && C,
            }),
          }),
        i,
      ],
    });
  }),
  Ju = WO,
  VO = Je(
    x("path", {
      d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
    }),
    "SuccessOutlined"
  ),
  jO = Je(
    x("path", {
      d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
    }),
    "ReportProblemOutlined"
  ),
  HO = Je(
    x("path", {
      d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    }),
    "ErrorOutline"
  ),
  KO = Je(
    x("path", {
      d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
    }),
    "InfoOutlined"
  ),
  qO = Je(
    x("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
    "Close"
  ),
  GO = (e) => {
    const { variant: t, color: n, severity: r, classes: o } = e,
      i = {
        root: ["root", `color${Y(n || r)}`, `${t}${Y(n || r)}`, `${t}`],
        icon: ["icon"],
        message: ["message"],
        action: ["action"],
      };
    return ae(i, RO, o);
  },
  YO = q(Ei, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${Y(n.color || n.severity)}`],
      ];
    },
  })(
    Se(({ theme: e }) => {
      const t = e.palette.mode === "light" ? hi : mi,
        n = e.palette.mode === "light" ? mi : hi;
      return {
        ...e.typography.body2,
        backgroundColor: "transparent",
        display: "flex",
        padding: "6px 16px",
        variants: [
          ...Object.entries(e.palette)
            .filter(wt(["light"]))
            .map(([r]) => ({
              props: { colorSeverity: r, variant: "standard" },
              style: {
                color: e.vars
                  ? e.vars.palette.Alert[`${r}Color`]
                  : t(e.palette[r].light, 0.6),
                backgroundColor: e.vars
                  ? e.vars.palette.Alert[`${r}StandardBg`]
                  : n(e.palette[r].light, 0.9),
                [`& .${Ig.icon}`]: e.vars
                  ? { color: e.vars.palette.Alert[`${r}IconColor`] }
                  : { color: e.palette[r].main },
              },
            })),
          ...Object.entries(e.palette)
            .filter(wt(["light"]))
            .map(([r]) => ({
              props: { colorSeverity: r, variant: "outlined" },
              style: {
                color: e.vars
                  ? e.vars.palette.Alert[`${r}Color`]
                  : t(e.palette[r].light, 0.6),
                border: `1px solid ${(e.vars || e).palette[r].light}`,
                [`& .${Ig.icon}`]: e.vars
                  ? { color: e.vars.palette.Alert[`${r}IconColor`] }
                  : { color: e.palette[r].main },
              },
            })),
          ...Object.entries(e.palette)
            .filter(wt(["dark"]))
            .map(([r]) => ({
              props: { colorSeverity: r, variant: "filled" },
              style: {
                fontWeight: e.typography.fontWeightMedium,
                ...(e.vars
                  ? {
                      color: e.vars.palette.Alert[`${r}FilledColor`],
                      backgroundColor: e.vars.palette.Alert[`${r}FilledBg`],
                    }
                  : {
                      backgroundColor:
                        e.palette.mode === "dark"
                          ? e.palette[r].dark
                          : e.palette[r].main,
                      color: e.palette.getContrastText(e.palette[r].main),
                    }),
              },
            })),
        ],
      };
    })
  ),
  QO = q("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon,
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9,
  }),
  XO = q("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message,
  })({ padding: "8px 0", minWidth: 0, overflow: "auto" }),
  JO = q("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action,
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8,
  }),
  Ng = {
    success: x(VO, { fontSize: "inherit" }),
    warning: x(jO, { fontSize: "inherit" }),
    error: x(HO, { fontSize: "inherit" }),
    info: x(KO, { fontSize: "inherit" }),
  },
  ZO = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiAlert" }),
      {
        action: o,
        children: i,
        className: s,
        closeText: a = "Close",
        color: l,
        components: u = {},
        componentsProps: d = {},
        icon: c,
        iconMapping: f = Ng,
        onClose: w,
        role: y = "alert",
        severity: v = "success",
        slotProps: C = {},
        slots: h = {},
        variant: p = "standard",
        ...m
      } = r,
      b = { ...r, color: l, severity: v, variant: p, colorSeverity: l || v },
      k = GO(b),
      P = {
        slots: { closeButton: u.CloseButton, closeIcon: u.CloseIcon, ...h },
        slotProps: { ...d, ...C },
      },
      [R, T] = it("root", {
        ref: n,
        shouldForwardComponentProp: !0,
        className: te(k.root, s),
        elementType: YO,
        externalForwardedProps: { ...P, ...m },
        ownerState: b,
        additionalProps: { role: y, elevation: 0 },
      }),
      [M, g] = it("icon", {
        className: k.icon,
        elementType: QO,
        externalForwardedProps: P,
        ownerState: b,
      }),
      [O, I] = it("message", {
        className: k.message,
        elementType: XO,
        externalForwardedProps: P,
        ownerState: b,
      }),
      [_, W] = it("action", {
        className: k.action,
        elementType: JO,
        externalForwardedProps: P,
        ownerState: b,
      }),
      [A, L] = it("closeButton", {
        elementType: Ju,
        externalForwardedProps: P,
        ownerState: b,
      }),
      [V, U] = it("closeIcon", {
        elementType: qO,
        externalForwardedProps: P,
        ownerState: b,
      });
    return J(R, {
      ...T,
      children: [
        c !== !1 ? x(M, { ...g, children: c || f[v] || Ng[v] }) : null,
        x(O, { ...I, children: i }),
        o != null ? x(_, { ...W, children: o }) : null,
        o == null && w
          ? x(_, {
              ...W,
              children: x(A, {
                size: "small",
                "aria-label": a,
                title: a,
                color: "inherit",
                onClick: w,
                ...L,
                children: x(V, { fontSize: "small", ...U }),
              }),
            })
          : null,
      ],
    });
  }),
  eM = ZO;
function tM(e) {
  return se("MuiTypography", e);
}
re("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const nM = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  rM = H$(),
  oM = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${Y(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return ae(a, tM, s);
  },
  iM = q("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${Y(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(
    Se(({ theme: e }) => {
      var t;
      return {
        margin: 0,
        variants: [
          {
            props: { variant: "inherit" },
            style: {
              font: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit",
            },
          },
          ...Object.entries(e.typography)
            .filter(([n, r]) => n !== "inherit" && r && typeof r == "object")
            .map(([n, r]) => ({ props: { variant: n }, style: r })),
          ...Object.entries(e.palette)
            .filter(wt())
            .map(([n]) => ({
              props: { color: n },
              style: { color: (e.vars || e).palette[n].main },
            })),
          ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {})
            .filter(([, n]) => typeof n == "string")
            .map(([n]) => ({
              props: { color: `text${Y(n)}` },
              style: { color: (e.vars || e).palette.text[n] },
            })),
          {
            props: ({ ownerState: n }) => n.align !== "inherit",
            style: { textAlign: "var(--Typography-textAlign)" },
          },
          {
            props: ({ ownerState: n }) => n.noWrap,
            style: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          },
          {
            props: ({ ownerState: n }) => n.gutterBottom,
            style: { marginBottom: "0.35em" },
          },
          {
            props: ({ ownerState: n }) => n.paragraph,
            style: { marginBottom: 16 },
          },
        ],
      };
    })
  ),
  _g = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  sM = S.forwardRef(function (t, n) {
    const { color: r, ...o } = le({ props: t, name: "MuiTypography" }),
      i = !nM[r],
      s = rM({ ...o, ...(i && { color: r }) }),
      {
        align: a = "inherit",
        className: l,
        component: u,
        gutterBottom: d = !1,
        noWrap: c = !1,
        paragraph: f = !1,
        variant: w = "body1",
        variantMapping: y = _g,
        ...v
      } = s,
      C = {
        ...s,
        align: a,
        color: r,
        className: l,
        component: u,
        gutterBottom: d,
        noWrap: c,
        paragraph: f,
        variant: w,
        variantMapping: y,
      },
      h = u || (f ? "p" : y[w] || _g[w]) || "span",
      p = oM(C);
    return x(iM, {
      as: h,
      ref: n,
      className: te(p.root, l),
      ...v,
      ownerState: C,
      style: {
        ...(a !== "inherit" && { "--Typography-textAlign": a }),
        ...v.style,
      },
    });
  }),
  Sn = sM;
function aM(e) {
  return se("MuiAppBar", e);
}
re("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
]);
const lM = (e) => {
    const { color: t, position: n, classes: r } = e,
      o = { root: ["root", `color${Y(t)}`, `position${Y(n)}`] };
    return ae(o, aM, r);
  },
  Lg = (e, t) => (e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t),
  uM = q(Ei, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`position${Y(n.position)}`], t[`color${Y(n.color)}`]];
    },
  })(
    Se(({ theme: e }) => ({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
      flexShrink: 0,
      variants: [
        {
          props: { position: "fixed" },
          style: {
            position: "fixed",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
            "@media print": { position: "absolute" },
          },
        },
        {
          props: { position: "absolute" },
          style: {
            position: "absolute",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        {
          props: { position: "sticky" },
          style: {
            position: "sticky",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        { props: { position: "static" }, style: { position: "static" } },
        { props: { position: "relative" }, style: { position: "relative" } },
        { props: { color: "inherit" }, style: { "--AppBar-color": "inherit" } },
        {
          props: { color: "default" },
          style: {
            "--AppBar-background": e.vars
              ? e.vars.palette.AppBar.defaultBg
              : e.palette.grey[100],
            "--AppBar-color": e.vars
              ? e.vars.palette.text.primary
              : e.palette.getContrastText(e.palette.grey[100]),
            ...e.applyStyles("dark", {
              "--AppBar-background": e.vars
                ? e.vars.palette.AppBar.defaultBg
                : e.palette.grey[900],
              "--AppBar-color": e.vars
                ? e.vars.palette.text.primary
                : e.palette.getContrastText(e.palette.grey[900]),
            }),
          },
        },
        ...Object.entries(e.palette)
          .filter(wt(["contrastText"]))
          .map(([t]) => ({
            props: { color: t },
            style: {
              "--AppBar-background": (e.vars ?? e).palette[t].main,
              "--AppBar-color": (e.vars ?? e).palette[t].contrastText,
            },
          })),
        {
          props: (t) =>
            t.enableColorOnDark === !0 &&
            !["inherit", "transparent"].includes(t.color),
          style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
          },
        },
        {
          props: (t) =>
            t.enableColorOnDark === !1 &&
            !["inherit", "transparent"].includes(t.color),
          style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...e.applyStyles("dark", {
              backgroundColor: e.vars
                ? Lg(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)")
                : null,
              color: e.vars
                ? Lg(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)")
                : null,
            }),
          },
        },
        {
          props: { color: "transparent" },
          style: {
            "--AppBar-background": "transparent",
            "--AppBar-color": "inherit",
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...e.applyStyles("dark", { backgroundImage: "none" }),
          },
        },
      ],
    }))
  ),
  cM = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiAppBar" }),
      {
        className: o,
        color: i = "primary",
        enableColorOnDark: s = !1,
        position: a = "fixed",
        ...l
      } = r,
      u = { ...r, color: i, position: a, enableColorOnDark: s },
      d = lM(u);
    return x(uM, {
      square: !0,
      component: "header",
      ownerState: u,
      elevation: 4,
      className: te(d.root, o, a === "fixed" && "mui-fixed"),
      ref: n,
      ...l,
    });
  }),
  dM = cM;
function fM(e) {
  return typeof e == "function" ? e() : e;
}
const pM = S.forwardRef(function (t, n) {
    const { children: r, container: o, disablePortal: i = !1 } = t,
      [s, a] = S.useState(null),
      l = bt(S.isValidElement(r) ? na(r) : null, n);
    if (
      (pr(() => {
        i || a(fM(o) || document.body);
      }, [o, i]),
      pr(() => {
        if (s && !i)
          return (
            cf(n, s),
            () => {
              cf(n, null);
            }
          );
      }, [n, s, i]),
      i)
    ) {
      if (S.isValidElement(r)) {
        const u = { ref: l };
        return S.cloneElement(r, u);
      }
      return r;
    }
    return s && vp.createPortal(r, s);
  }),
  hM = pM;
function $a(e) {
  return parseInt(e, 10) || 0;
}
const mM = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function gM(e) {
  for (const t in e) return !1;
  return !0;
}
function yM(e) {
  return gM(e) || (e.outerHeightStyle === 0 && !e.overflowing);
}
const vM = S.forwardRef(function (t, n) {
    const {
        onChange: r,
        maxRows: o,
        minRows: i = 1,
        style: s,
        value: a,
        ...l
      } = t,
      { current: u } = S.useRef(a != null),
      d = S.useRef(null),
      c = bt(n, d),
      f = S.useRef(null),
      w = S.useRef(null),
      y = S.useCallback(() => {
        const p = d.current,
          m = w.current;
        if (!p || !m) return;
        const k = hr(p).getComputedStyle(p);
        if (k.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
        (m.style.width = k.width),
          (m.value = p.value || t.placeholder || "x"),
          m.value.slice(-1) ===
            `
` && (m.value += " ");
        const P = k.boxSizing,
          R = $a(k.paddingBottom) + $a(k.paddingTop),
          T = $a(k.borderBottomWidth) + $a(k.borderTopWidth),
          M = m.scrollHeight;
        m.value = "x";
        const g = m.scrollHeight;
        let O = M;
        i && (O = Math.max(Number(i) * g, O)),
          o && (O = Math.min(Number(o) * g, O)),
          (O = Math.max(O, g));
        const I = O + (P === "border-box" ? R + T : 0),
          _ = Math.abs(O - M) <= 1;
        return { outerHeightStyle: I, overflowing: _ };
      }, [o, i, t.placeholder]),
      v = S.useCallback(() => {
        const p = d.current,
          m = y();
        if (!p || !m || yM(m)) return;
        const b = m.outerHeightStyle;
        f.current !== b && ((f.current = b), (p.style.height = `${b}px`)),
          (p.style.overflow = m.overflowing ? "hidden" : "");
      }, [y]),
      C = S.useRef(-1);
    pr(() => {
      const p = Y1(() => v()),
        m = d == null ? void 0 : d.current;
      if (!m) return;
      const b = hr(m);
      b.addEventListener("resize", p);
      let k;
      return (
        typeof ResizeObserver < "u" &&
          ((k = new ResizeObserver(() => {
            k.unobserve(m),
              cancelAnimationFrame(C.current),
              v(),
              (C.current = requestAnimationFrame(() => {
                k.observe(m);
              }));
          })),
          k.observe(m)),
        () => {
          p.clear(),
            cancelAnimationFrame(C.current),
            b.removeEventListener("resize", p),
            k && k.disconnect();
        }
      );
    }, [y, v]),
      pr(() => {
        v();
      });
    const h = (p) => {
      u || v(), r && r(p);
    };
    return J(S.Fragment, {
      children: [
        x("textarea", {
          value: a,
          onChange: h,
          ref: c,
          rows: i,
          style: s,
          ...l,
        }),
        x("textarea", {
          "aria-hidden": !0,
          className: t.className,
          readOnly: !0,
          ref: w,
          tabIndex: -1,
          style: { ...mM.shadow, ...s, paddingTop: 0, paddingBottom: 0 },
        }),
      ],
    });
  }),
  SM = vM;
function Us(e) {
  return typeof e == "string";
}
function Ri({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
    {}
  );
}
const wM = S.createContext(void 0),
  Zu = wM;
function Yr() {
  return S.useContext(Zu);
}
function Fg(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Ul(e, t = !1) {
  return (
    e &&
    ((Fg(e.value) && e.value !== "") ||
      (t && Fg(e.defaultValue) && e.defaultValue !== ""))
  );
}
function bM(e) {
  return e.startAdornment;
}
function CM(e) {
  return se("MuiInputBase", e);
}
const xM = re("MuiInputBase", [
    "root",
    "formControl",
    "focused",
    "disabled",
    "adornedStart",
    "adornedEnd",
    "error",
    "sizeSmall",
    "multiline",
    "colorSecondary",
    "fullWidth",
    "hiddenLabel",
    "readOnly",
    "input",
    "inputSizeSmall",
    "inputMultiline",
    "inputTypeSearch",
    "inputAdornedStart",
    "inputAdornedEnd",
    "inputHiddenLabel",
  ]),
  gi = xM;
var Bg;
const ec = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === "small" && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${Y(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ];
  },
  tc = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === "small" && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === "search" && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  kM = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: s,
        formControl: a,
        fullWidth: l,
        hiddenLabel: u,
        multiline: d,
        readOnly: c,
        size: f,
        startAdornment: w,
        type: y,
      } = e,
      v = {
        root: [
          "root",
          `color${Y(n)}`,
          r && "disabled",
          o && "error",
          l && "fullWidth",
          s && "focused",
          a && "formControl",
          f && f !== "medium" && `size${Y(f)}`,
          d && "multiline",
          w && "adornedStart",
          i && "adornedEnd",
          u && "hiddenLabel",
          c && "readOnly",
        ],
        input: [
          "input",
          r && "disabled",
          y === "search" && "inputTypeSearch",
          d && "inputMultiline",
          f === "small" && "inputSizeSmall",
          u && "inputHiddenLabel",
          w && "inputAdornedStart",
          i && "inputAdornedEnd",
          c && "readOnly",
        ],
      };
    return ae(v, CM, t);
  },
  nc = q("div", { name: "MuiInputBase", slot: "Root", overridesResolver: ec })(
    Se(({ theme: e }) => ({
      ...e.typography.body1,
      color: (e.vars || e).palette.text.primary,
      lineHeight: "1.4375em",
      boxSizing: "border-box",
      position: "relative",
      cursor: "text",
      display: "inline-flex",
      alignItems: "center",
      [`&.${gi.disabled}`]: {
        color: (e.vars || e).palette.text.disabled,
        cursor: "default",
      },
      variants: [
        {
          props: ({ ownerState: t }) => t.multiline,
          style: { padding: "4px 0 5px" },
        },
        {
          props: ({ ownerState: t, size: n }) => t.multiline && n === "small",
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: t }) => t.fullWidth, style: { width: "100%" } },
      ],
    }))
  ),
  rc = q("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: tc,
  })(
    Se(({ theme: e }) => {
      const t = e.palette.mode === "light",
        n = {
          color: "currentColor",
          ...(e.vars
            ? { opacity: e.vars.opacity.inputPlaceholder }
            : { opacity: t ? 0.42 : 0.5 }),
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        },
        r = { opacity: "0 !important" },
        o = e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: t ? 0.42 : 0.5 };
      return {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        "&::-webkit-input-placeholder": n,
        "&::-moz-placeholder": n,
        "&::-ms-input-placeholder": n,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${gi.formControl} &`]: {
          "&::-webkit-input-placeholder": r,
          "&::-moz-placeholder": r,
          "&::-ms-input-placeholder": r,
          "&:focus::-webkit-input-placeholder": o,
          "&:focus::-moz-placeholder": o,
          "&:focus::-ms-input-placeholder": o,
        },
        [`&.${gi.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: i }) => !i.disableInjectingGlobalStyles,
            style: {
              animationName: "mui-auto-fill-cancel",
              animationDuration: "10ms",
              "&:-webkit-autofill": {
                animationDuration: "5000s",
                animationName: "mui-auto-fill",
              },
            },
          },
          { props: { size: "small" }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: i }) => i.multiline,
            style: {
              height: "auto",
              resize: "none",
              padding: 0,
              paddingTop: 0,
            },
          },
          { props: { type: "search" }, style: { MozAppearance: "textfield" } },
        ],
      };
    })
  ),
  Dg = j$({
    "@keyframes mui-auto-fill": { from: { display: "block" } },
    "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
  }),
  EM = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": o,
        autoComplete: i,
        autoFocus: s,
        className: a,
        color: l,
        components: u = {},
        componentsProps: d = {},
        defaultValue: c,
        disabled: f,
        disableInjectingGlobalStyles: w,
        endAdornment: y,
        error: v,
        fullWidth: C = !1,
        id: h,
        inputComponent: p = "input",
        inputProps: m = {},
        inputRef: b,
        margin: k,
        maxRows: P,
        minRows: R,
        multiline: T = !1,
        name: M,
        onBlur: g,
        onChange: O,
        onClick: I,
        onFocus: _,
        onKeyDown: W,
        onKeyUp: A,
        placeholder: L,
        readOnly: V,
        renderSuffix: U,
        rows: z,
        size: G,
        slotProps: Z = {},
        slots: oe = {},
        startAdornment: fe,
        type: ue = "text",
        value: pe,
        ...ke
      } = r,
      Ee = m.value != null ? m.value : pe,
      { current: Ge } = S.useRef(Ee != null),
      Oe = S.useRef(),
      de = S.useCallback((ye) => {}, []),
      be = bt(Oe, b, m.ref, de),
      [ce, Ne] = S.useState(!1),
      me = Yr(),
      Te = Ri({
        props: r,
        muiFormControl: me,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (Te.focused = me ? me.focused : ce),
      S.useEffect(() => {
        !me && f && ce && (Ne(!1), g && g());
      }, [me, f, ce, g]);
    const ut = me && me.onFilled,
      Ce = me && me.onEmpty,
      E = S.useCallback(
        (ye) => {
          Ul(ye) ? ut && ut() : Ce && Ce();
        },
        [ut, Ce]
      );
    pr(() => {
      Ge && E({ value: Ee });
    }, [Ee, E, Ge]);
    const $ = (ye) => {
        _ && _(ye),
          m.onFocus && m.onFocus(ye),
          me && me.onFocus ? me.onFocus(ye) : Ne(!0);
      },
      N = (ye) => {
        g && g(ye),
          m.onBlur && m.onBlur(ye),
          me && me.onBlur ? me.onBlur(ye) : Ne(!1);
      },
      H = (ye, ...yt) => {
        if (!Ge) {
          const yr = ye.target || Oe.current;
          if (yr == null) throw new Error(dr(1));
          E({ value: yr.value });
        }
        m.onChange && m.onChange(ye, ...yt), O && O(ye, ...yt);
      };
    S.useEffect(() => {
      E(Oe.current);
    }, []);
    const B = (ye) => {
      Oe.current && ye.currentTarget === ye.target && Oe.current.focus(),
        I && I(ye);
    };
    let j = p,
      X = m;
    T &&
      j === "input" &&
      (z
        ? (X = { type: void 0, minRows: z, maxRows: z, ...X })
        : (X = { type: void 0, maxRows: P, minRows: R, ...X }),
      (j = SM));
    const ie = (ye) => {
      E(
        ye.animationName === "mui-auto-fill-cancel"
          ? Oe.current
          : { value: "x" }
      );
    };
    S.useEffect(() => {
      me && me.setAdornedStart(!!fe);
    }, [me, fe]);
    const Le = {
        ...r,
        color: Te.color || "primary",
        disabled: Te.disabled,
        endAdornment: y,
        error: Te.error,
        focused: Te.focused,
        formControl: me,
        fullWidth: C,
        hiddenLabel: Te.hiddenLabel,
        multiline: T,
        size: Te.size,
        startAdornment: fe,
        type: ue,
      },
      ge = kM(Le),
      $e = oe.root || u.Root || nc,
      Ze = Z.root || d.root || {},
      xt = oe.input || u.Input || rc;
    return (
      (X = { ...X, ...(Z.input ?? d.input) }),
      J(S.Fragment, {
        children: [
          !w && typeof Dg == "function" && (Bg || (Bg = x(Dg, {}))),
          J($e, {
            ...Ze,
            ref: n,
            onClick: B,
            ...ke,
            ...(!Us($e) && { ownerState: { ...Le, ...Ze.ownerState } }),
            className: te(
              ge.root,
              Ze.className,
              a,
              V && "MuiInputBase-readOnly"
            ),
            children: [
              fe,
              x(Zu.Provider, {
                value: null,
                children: x(xt, {
                  "aria-invalid": Te.error,
                  "aria-describedby": o,
                  autoComplete: i,
                  autoFocus: s,
                  defaultValue: c,
                  disabled: Te.disabled,
                  id: h,
                  onAnimationStart: ie,
                  name: M,
                  placeholder: L,
                  readOnly: V,
                  required: Te.required,
                  rows: z,
                  value: Ee,
                  onKeyDown: W,
                  onKeyUp: A,
                  type: ue,
                  ...X,
                  ...(!Us(xt) && {
                    as: j,
                    ownerState: { ...Le, ...X.ownerState },
                  }),
                  ref: be,
                  className: te(
                    ge.input,
                    X.className,
                    V && "MuiInputBase-readOnly"
                  ),
                  onBlur: N,
                  onChange: H,
                  onFocus: $,
                }),
              }),
              y,
              U ? U({ ...Te, startAdornment: fe }) : null,
            ],
          }),
        ],
      })
    );
  }),
  oh = EM;
function PM(e) {
  return se("MuiInput", e);
}
const RM = { ...gi, ...re("MuiInput", ["root", "underline", "input"]) },
  Wi = RM;
function TM(e) {
  return se("MuiOutlinedInput", e);
}
const $M = {
    ...gi,
    ...re("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
  },
  Dn = $M;
function OM(e) {
  return se("MuiFilledInput", e);
}
const MM = {
    ...gi,
    ...re("MuiFilledInput", [
      "root",
      "underline",
      "input",
      "adornedStart",
      "adornedEnd",
      "sizeSmall",
      "multiline",
      "hiddenLabel",
    ]),
  },
  Xr = MM,
  IM = Je(x("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  AM = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  NM = S.forwardRef(function (t, n) {
    const r = th(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: a,
        easing: l,
        in: u,
        onEnter: d,
        onEntered: c,
        onEntering: f,
        onExit: w,
        onExited: y,
        onExiting: v,
        style: C,
        timeout: h = o,
        TransitionComponent: p = bS,
        ...m
      } = t,
      b = S.useRef(null),
      k = bt(b, na(a), n),
      P = (W) => (A) => {
        if (W) {
          const L = b.current;
          A === void 0 ? W(L) : W(L, A);
        }
      },
      R = P(f),
      T = P((W, A) => {
        CS(W);
        const L = Dl({ style: C, timeout: h, easing: l }, { mode: "enter" });
        (W.style.webkitTransition = r.transitions.create("opacity", L)),
          (W.style.transition = r.transitions.create("opacity", L)),
          d && d(W, A);
      }),
      M = P(c),
      g = P(v),
      O = P((W) => {
        const A = Dl({ style: C, timeout: h, easing: l }, { mode: "exit" });
        (W.style.webkitTransition = r.transitions.create("opacity", A)),
          (W.style.transition = r.transitions.create("opacity", A)),
          w && w(W);
      }),
      I = P(y);
    return x(p, {
      appear: s,
      in: u,
      nodeRef: b,
      onEnter: T,
      onEntered: M,
      onEntering: R,
      onExit: O,
      onExited: I,
      onExiting: g,
      addEndListener: (W) => {
        i && i(b.current, W);
      },
      timeout: h,
      ...m,
      children: (W, { ownerState: A, ...L }) =>
        S.cloneElement(a, {
          style: {
            opacity: 0,
            visibility: W === "exited" && !u ? "hidden" : void 0,
            ...AM[W],
            ...C,
            ...a.props.style,
          },
          ref: k,
          ...L,
        }),
    });
  }),
  xS = NM;
function _M(e) {
  return se("MuiBackdrop", e);
}
re("MuiBackdrop", ["root", "invisible"]);
const LM = (e) => {
    const { classes: t, invisible: n } = e;
    return ae({ root: ["root", n && "invisible"] }, _M, t);
  },
  FM = q("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent",
    variants: [
      { props: { invisible: !0 }, style: { backgroundColor: "transparent" } },
    ],
  }),
  BM = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiBackdrop" }),
      {
        children: o,
        className: i,
        component: s = "div",
        invisible: a = !1,
        open: l,
        components: u = {},
        componentsProps: d = {},
        slotProps: c = {},
        slots: f = {},
        TransitionComponent: w,
        transitionDuration: y,
        ...v
      } = r,
      C = { ...r, component: s, invisible: a },
      h = LM(C),
      p = { transition: w, root: u.Root, ...f },
      m = { ...d, ...c },
      b = { slots: p, slotProps: m },
      [k, P] = it("root", {
        elementType: FM,
        externalForwardedProps: b,
        className: te(h.root, i),
        ownerState: C,
      }),
      [R, T] = it("transition", {
        elementType: xS,
        externalForwardedProps: b,
        ownerState: C,
      });
    return x(R, {
      in: l,
      timeout: y,
      ...v,
      ...T,
      children: x(k, {
        "aria-hidden": !0,
        ...P,
        classes: h,
        ref: n,
        children: o,
      }),
    });
  }),
  kS = BM;
function DM(e) {
  const {
      badgeContent: t,
      invisible: n = !1,
      max: r = 99,
      showZero: o = !1,
    } = e,
    i = Z1({ badgeContent: t, max: r });
  let s = n;
  n === !1 && t === 0 && !o && (s = !0);
  const { badgeContent: a, max: l = r } = s ? i : e,
    u = a && Number(a) > l ? `${l}+` : a;
  return { badgeContent: a, invisible: s, max: l, displayValue: u };
}
function zM(e) {
  return se("MuiBadge", e);
}
const UM = re("MuiBadge", [
    "root",
    "badge",
    "dot",
    "standard",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft",
    "invisible",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "overlapRectangular",
    "overlapCircular",
    "anchorOriginTopLeftCircular",
    "anchorOriginTopLeftRectangular",
    "anchorOriginTopRightCircular",
    "anchorOriginTopRightRectangular",
    "anchorOriginBottomLeftCircular",
    "anchorOriginBottomLeftRectangular",
    "anchorOriginBottomRightCircular",
    "anchorOriginBottomRightRectangular",
  ]),
  br = UM,
  Vc = 10,
  jc = 4,
  WM = (e) => {
    const {
        color: t,
        anchorOrigin: n,
        invisible: r,
        overlap: o,
        variant: i,
        classes: s = {},
      } = e,
      a = {
        root: ["root"],
        badge: [
          "badge",
          i,
          r && "invisible",
          `anchorOrigin${Y(n.vertical)}${Y(n.horizontal)}`,
          `anchorOrigin${Y(n.vertical)}${Y(n.horizontal)}${Y(o)}`,
          `overlap${Y(o)}`,
          t !== "default" && `color${Y(t)}`,
        ],
      };
    return ae(a, zM, s);
  },
  VM = q("span", {
    name: "MuiBadge",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    position: "relative",
    display: "inline-flex",
    verticalAlign: "middle",
    flexShrink: 0,
  }),
  jM = q("span", {
    name: "MuiBadge",
    slot: "Badge",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.badge,
        t[n.variant],
        t[
          `anchorOrigin${Y(n.anchorOrigin.vertical)}${Y(
            n.anchorOrigin.horizontal
          )}${Y(n.overlap)}`
        ],
        n.color !== "default" && t[`color${Y(n.color)}`],
        n.invisible && t.invisible,
      ];
    },
  })(
    Se(({ theme: e }) => ({
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      position: "absolute",
      boxSizing: "border-box",
      fontFamily: e.typography.fontFamily,
      fontWeight: e.typography.fontWeightMedium,
      fontSize: e.typography.pxToRem(12),
      minWidth: Vc * 2,
      lineHeight: 1,
      padding: "0 6px",
      height: Vc * 2,
      borderRadius: Vc,
      zIndex: 1,
      transition: e.transitions.create("transform", {
        easing: e.transitions.easing.easeInOut,
        duration: e.transitions.duration.enteringScreen,
      }),
      variants: [
        ...Object.entries(e.palette)
          .filter(wt(["contrastText"]))
          .map(([t]) => ({
            props: { color: t },
            style: {
              backgroundColor: (e.vars || e).palette[t].main,
              color: (e.vars || e).palette[t].contrastText,
            },
          })),
        {
          props: { variant: "dot" },
          style: {
            borderRadius: jc,
            height: jc * 2,
            minWidth: jc * 2,
            padding: 0,
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchorOrigin.vertical === "top" &&
            t.anchorOrigin.horizontal === "right" &&
            t.overlap === "rectangular",
          style: {
            top: 0,
            right: 0,
            transform: "scale(1) translate(50%, -50%)",
            transformOrigin: "100% 0%",
            [`&.${br.invisible}`]: {
              transform: "scale(0) translate(50%, -50%)",
            },
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchorOrigin.vertical === "bottom" &&
            t.anchorOrigin.horizontal === "right" &&
            t.overlap === "rectangular",
          style: {
            bottom: 0,
            right: 0,
            transform: "scale(1) translate(50%, 50%)",
            transformOrigin: "100% 100%",
            [`&.${br.invisible}`]: {
              transform: "scale(0) translate(50%, 50%)",
            },
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchorOrigin.vertical === "top" &&
            t.anchorOrigin.horizontal === "left" &&
            t.overlap === "rectangular",
          style: {
            top: 0,
            left: 0,
            transform: "scale(1) translate(-50%, -50%)",
            transformOrigin: "0% 0%",
            [`&.${br.invisible}`]: {
              transform: "scale(0) translate(-50%, -50%)",
            },
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchorOrigin.vertical === "bottom" &&
            t.anchorOrigin.horizontal === "left" &&
            t.overlap === "rectangular",
          style: {
            bottom: 0,
            left: 0,
            transform: "scale(1) translate(-50%, 50%)",
            transformOrigin: "0% 100%",
            [`&.${br.invisible}`]: {
              transform: "scale(0) translate(-50%, 50%)",
            },
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchorOrigin.vertical === "top" &&
            t.anchorOrigin.horizontal === "right" &&
            t.overlap === "circular",
          style: {
            top: "14%",
            right: "14%",
            transform: "scale(1) translate(50%, -50%)",
            transformOrigin: "100% 0%",
            [`&.${br.invisible}`]: {
              transform: "scale(0) translate(50%, -50%)",
            },
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchorOrigin.vertical === "bottom" &&
            t.anchorOrigin.horizontal === "right" &&
            t.overlap === "circular",
          style: {
            bottom: "14%",
            right: "14%",
            transform: "scale(1) translate(50%, 50%)",
            transformOrigin: "100% 100%",
            [`&.${br.invisible}`]: {
              transform: "scale(0) translate(50%, 50%)",
            },
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchorOrigin.vertical === "top" &&
            t.anchorOrigin.horizontal === "left" &&
            t.overlap === "circular",
          style: {
            top: "14%",
            left: "14%",
            transform: "scale(1) translate(-50%, -50%)",
            transformOrigin: "0% 0%",
            [`&.${br.invisible}`]: {
              transform: "scale(0) translate(-50%, -50%)",
            },
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchorOrigin.vertical === "bottom" &&
            t.anchorOrigin.horizontal === "left" &&
            t.overlap === "circular",
          style: {
            bottom: "14%",
            left: "14%",
            transform: "scale(1) translate(-50%, 50%)",
            transformOrigin: "0% 100%",
            [`&.${br.invisible}`]: {
              transform: "scale(0) translate(-50%, 50%)",
            },
          },
        },
        {
          props: { invisible: !0 },
          style: {
            transition: e.transitions.create("transform", {
              easing: e.transitions.easing.easeInOut,
              duration: e.transitions.duration.leavingScreen,
            }),
          },
        },
      ],
    }))
  );
function zg(e) {
  return {
    vertical: (e == null ? void 0 : e.vertical) ?? "top",
    horizontal: (e == null ? void 0 : e.horizontal) ?? "right",
  };
}
const HM = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiBadge" }),
      {
        anchorOrigin: o,
        className: i,
        classes: s,
        component: a,
        components: l = {},
        componentsProps: u = {},
        children: d,
        overlap: c = "rectangular",
        color: f = "default",
        invisible: w = !1,
        max: y = 99,
        badgeContent: v,
        slots: C,
        slotProps: h,
        showZero: p = !1,
        variant: m = "standard",
        ...b
      } = r,
      {
        badgeContent: k,
        invisible: P,
        max: R,
        displayValue: T,
      } = DM({ max: y, invisible: w, badgeContent: v, showZero: p }),
      M = Z1({
        anchorOrigin: zg(o),
        color: f,
        overlap: c,
        variant: m,
        badgeContent: v,
      }),
      g = P || (k == null && m !== "dot"),
      {
        color: O = f,
        overlap: I = c,
        anchorOrigin: _,
        variant: W = m,
      } = g ? M : r,
      A = zg(_),
      L = W !== "dot" ? T : void 0,
      V = {
        ...r,
        badgeContent: k,
        invisible: g,
        max: R,
        displayValue: L,
        showZero: p,
        anchorOrigin: A,
        color: O,
        overlap: I,
        variant: W,
      },
      U = WM(V),
      z = (C == null ? void 0 : C.root) ?? l.Root ?? VM,
      G = (C == null ? void 0 : C.badge) ?? l.Badge ?? jM,
      Z = (h == null ? void 0 : h.root) ?? u.root,
      oe = (h == null ? void 0 : h.badge) ?? u.badge,
      fe = zs({
        elementType: z,
        externalSlotProps: Z,
        externalForwardedProps: b,
        additionalProps: { ref: n, as: a },
        ownerState: V,
        className: te(Z == null ? void 0 : Z.className, U.root, i),
      }),
      ue = zs({
        elementType: G,
        externalSlotProps: oe,
        ownerState: V,
        className: te(U.badge, oe == null ? void 0 : oe.className),
      });
    return J(z, { ...fe, children: [d, x(G, { ...ue, children: L })] });
  }),
  KM = HM,
  qM = re("MuiBox", ["root"]),
  GM = qM,
  YM = ra(),
  QM = cT({
    themeId: Yn,
    defaultTheme: YM,
    defaultClassName: GM.root,
    generateClassName: V1.generate,
  }),
  mt = QM,
  XM = Je(
    x("path", {
      d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
    }),
    "MoreHoriz"
  ),
  JM = q(Pi)(
    Se(({ theme: e }) => ({
      display: "flex",
      marginLeft: `calc(${e.spacing(1)} * 0.5)`,
      marginRight: `calc(${e.spacing(1)} * 0.5)`,
      ...(e.palette.mode === "light"
        ? { backgroundColor: e.palette.grey[100], color: e.palette.grey[700] }
        : { backgroundColor: e.palette.grey[700], color: e.palette.grey[100] }),
      borderRadius: 2,
      "&:hover, &:focus": {
        ...(e.palette.mode === "light"
          ? { backgroundColor: e.palette.grey[200] }
          : { backgroundColor: e.palette.grey[600] }),
      },
      "&:active": {
        boxShadow: e.shadows[0],
        ...(e.palette.mode === "light"
          ? { backgroundColor: uf(e.palette.grey[200], 0.12) }
          : { backgroundColor: uf(e.palette.grey[600], 0.12) }),
      },
    }))
  ),
  ZM = q(XM)({ width: 24, height: 16 });
function eI(e) {
  const { slots: t = {}, slotProps: n = {}, ...r } = e,
    o = e;
  return x("li", {
    children: x(JM, {
      focusRipple: !0,
      ...r,
      ownerState: o,
      children: x(ZM, {
        as: t.CollapsedIcon,
        ownerState: o,
        ...n.collapsedIcon,
      }),
    }),
  });
}
function tI(e) {
  return se("MuiBreadcrumbs", e);
}
const nI = re("MuiBreadcrumbs", ["root", "ol", "li", "separator"]),
  rI = nI,
  oI = (e) => {
    const { classes: t } = e;
    return ae(
      { root: ["root"], li: ["li"], ol: ["ol"], separator: ["separator"] },
      tI,
      t
    );
  },
  iI = q(Sn, {
    name: "MuiBreadcrumbs",
    slot: "Root",
    overridesResolver: (e, t) => [{ [`& .${rI.li}`]: t.li }, t.root],
  })({}),
  sI = q("ol", {
    name: "MuiBreadcrumbs",
    slot: "Ol",
    overridesResolver: (e, t) => t.ol,
  })({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    padding: 0,
    margin: 0,
    listStyle: "none",
  }),
  aI = q("li", {
    name: "MuiBreadcrumbs",
    slot: "Separator",
    overridesResolver: (e, t) => t.separator,
  })({ display: "flex", userSelect: "none", marginLeft: 8, marginRight: 8 });
function lI(e, t, n, r) {
  return e.reduce(
    (o, i, s) => (
      s < e.length - 1
        ? (o = o.concat(
            i,
            x(
              aI,
              { "aria-hidden": !0, className: t, ownerState: r, children: n },
              `separator-${s}`
            )
          ))
        : o.push(i),
      o
    ),
    []
  );
}
const uI = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiBreadcrumbs" }),
      {
        children: o,
        className: i,
        component: s = "nav",
        slots: a = {},
        slotProps: l = {},
        expandText: u = "Show path",
        itemsAfterCollapse: d = 1,
        itemsBeforeCollapse: c = 1,
        maxItems: f = 8,
        separator: w = "/",
        ...y
      } = r,
      [v, C] = S.useState(!1),
      h = {
        ...r,
        component: s,
        expanded: v,
        expandText: u,
        itemsAfterCollapse: d,
        itemsBeforeCollapse: c,
        maxItems: f,
        separator: w,
      },
      p = oI(h),
      m = zs({
        elementType: a.CollapsedIcon,
        externalSlotProps: l.collapsedIcon,
        ownerState: h,
      }),
      b = S.useRef(null),
      k = (R) => {
        const T = () => {
          C(!0);
          const M = b.current.querySelector("a[href],button,[tabindex]");
          M && M.focus();
        };
        return c + d >= R.length
          ? R
          : [
              ...R.slice(0, c),
              x(
                eI,
                {
                  "aria-label": u,
                  slots: { CollapsedIcon: a.CollapsedIcon },
                  slotProps: { collapsedIcon: m },
                  onClick: T,
                },
                "ellipsis"
              ),
              ...R.slice(R.length - d, R.length),
            ];
      },
      P = S.Children.toArray(o)
        .filter((R) => S.isValidElement(R))
        .map((R, T) => x("li", { className: p.li, children: R }, `child-${T}`));
    return x(iI, {
      ref: n,
      component: s,
      color: "textSecondary",
      className: te(p.root, i),
      ownerState: h,
      ...y,
      children: x(sI, {
        className: p.ol,
        ref: b,
        ownerState: h,
        children: lI(v || (f && P.length <= f) ? P : k(P), p.separator, w, h),
      }),
    });
  }),
  cI = uI;
function dI(e) {
  return se("MuiButton", e);
}
const fI = re("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
    "loading",
    "loadingWrapper",
    "loadingIconPlaceholder",
    "loadingIndicator",
    "loadingPositionCenter",
    "loadingPositionStart",
    "loadingPositionEnd",
  ]),
  Jr = fI,
  pI = S.createContext({}),
  hI = pI,
  mI = S.createContext(void 0),
  gI = mI,
  yI = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        loading: s,
        loadingPosition: a,
        classes: l,
      } = e,
      u = {
        root: [
          "root",
          s && "loading",
          i,
          `${i}${Y(t)}`,
          `size${Y(o)}`,
          `${i}Size${Y(o)}`,
          `color${Y(t)}`,
          n && "disableElevation",
          r && "fullWidth",
          s && `loadingPosition${Y(a)}`,
        ],
        startIcon: ["icon", "startIcon", `iconSize${Y(o)}`],
        endIcon: ["icon", "endIcon", `iconSize${Y(o)}`],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"],
      },
      d = ae(u, dI, l);
    return { ...l, ...d };
  },
  ES = [
    {
      props: { size: "small" },
      style: { "& > *:nth-of-type(1)": { fontSize: 18 } },
    },
    {
      props: { size: "medium" },
      style: { "& > *:nth-of-type(1)": { fontSize: 20 } },
    },
    {
      props: { size: "large" },
      style: { "& > *:nth-of-type(1)": { fontSize: 22 } },
    },
  ],
  vI = q(Pi, {
    shouldForwardProp: (e) => en(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${Y(n.color)}`],
        t[`size${Y(n.size)}`],
        t[`${n.variant}Size${Y(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
        n.loading && t.loading,
      ];
    },
  })(
    Se(({ theme: e }) => {
      const t =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        n =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return {
        ...e.typography.button,
        minWidth: 64,
        padding: "6px 16px",
        border: 0,
        borderRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create(
          ["background-color", "box-shadow", "border-color", "color"],
          { duration: e.transitions.duration.short }
        ),
        "&:hover": { textDecoration: "none" },
        [`&.${Jr.disabled}`]: { color: (e.vars || e).palette.action.disabled },
        variants: [
          {
            props: { variant: "contained" },
            style: {
              color: "var(--variant-containedColor)",
              backgroundColor: "var(--variant-containedBg)",
              boxShadow: (e.vars || e).shadows[2],
              "&:hover": {
                boxShadow: (e.vars || e).shadows[4],
                "@media (hover: none)": { boxShadow: (e.vars || e).shadows[2] },
              },
              "&:active": { boxShadow: (e.vars || e).shadows[8] },
              [`&.${Jr.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] },
              [`&.${Jr.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
                boxShadow: (e.vars || e).shadows[0],
                backgroundColor: (e.vars || e).palette.action
                  .disabledBackground,
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              padding: "5px 15px",
              border: "1px solid currentColor",
              borderColor: "var(--variant-outlinedBorder, currentColor)",
              backgroundColor: "var(--variant-outlinedBg)",
              color: "var(--variant-outlinedColor)",
              [`&.${Jr.disabled}`]: {
                border: `1px solid ${
                  (e.vars || e).palette.action.disabledBackground
                }`,
              },
            },
          },
          {
            props: { variant: "text" },
            style: {
              padding: "6px 8px",
              color: "var(--variant-textColor)",
              backgroundColor: "var(--variant-textBg)",
            },
          },
          ...Object.entries(e.palette)
            .filter(wt())
            .map(([r]) => ({
              props: { color: r },
              style: {
                "--variant-textColor": (e.vars || e).palette[r].main,
                "--variant-outlinedColor": (e.vars || e).palette[r].main,
                "--variant-outlinedBorder": e.vars
                  ? `rgba(${e.vars.palette[r].mainChannel} / 0.5)`
                  : Ue(e.palette[r].main, 0.5),
                "--variant-containedColor": (e.vars || e).palette[r]
                  .contrastText,
                "--variant-containedBg": (e.vars || e).palette[r].main,
                "@media (hover: hover)": {
                  "&:hover": {
                    "--variant-containedBg": (e.vars || e).palette[r].dark,
                    "--variant-textBg": e.vars
                      ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : Ue(e.palette[r].main, e.palette.action.hoverOpacity),
                    "--variant-outlinedBorder": (e.vars || e).palette[r].main,
                    "--variant-outlinedBg": e.vars
                      ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : Ue(e.palette[r].main, e.palette.action.hoverOpacity),
                  },
                },
              },
            })),
          {
            props: { color: "inherit" },
            style: {
              color: "inherit",
              borderColor: "currentColor",
              "--variant-containedBg": e.vars
                ? e.vars.palette.Button.inheritContainedBg
                : t,
              "@media (hover: hover)": {
                "&:hover": {
                  "--variant-containedBg": e.vars
                    ? e.vars.palette.Button.inheritContainedHoverBg
                    : n,
                  "--variant-textBg": e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : Ue(e.palette.text.primary, e.palette.action.hoverOpacity),
                  "--variant-outlinedBg": e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : Ue(e.palette.text.primary, e.palette.action.hoverOpacity),
                },
              },
            },
          },
          {
            props: { size: "small", variant: "text" },
            style: { padding: "4px 5px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "text" },
            style: { padding: "8px 11px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "outlined" },
            style: { padding: "3px 9px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "outlined" },
            style: { padding: "7px 21px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "contained" },
            style: { padding: "4px 10px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "contained" },
            style: { padding: "8px 22px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
              [`&.${Jr.focusVisible}`]: { boxShadow: "none" },
              "&:active": { boxShadow: "none" },
              [`&.${Jr.disabled}`]: { boxShadow: "none" },
            },
          },
          { props: { fullWidth: !0 }, style: { width: "100%" } },
          {
            props: { loadingPosition: "center" },
            style: {
              transition: e.transitions.create(
                ["background-color", "box-shadow", "border-color"],
                { duration: e.transitions.duration.short }
              ),
              [`&.${Jr.loading}`]: { color: "transparent" },
            },
          },
        ],
      };
    })
  ),
  SI = q("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.startIcon,
        n.loading && t.startIconLoadingStart,
        t[`iconSize${Y(n.size)}`],
      ];
    },
  })(({ theme: e }) => ({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4,
    variants: [
      { props: { size: "small" }, style: { marginLeft: -2 } },
      {
        props: { loadingPosition: "start", loading: !0 },
        style: {
          transition: e.transitions.create(["opacity"], {
            duration: e.transitions.duration.short,
          }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: "start", loading: !0, fullWidth: !0 },
        style: { marginRight: -8 },
      },
      ...ES,
    ],
  })),
  wI = q("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.endIcon,
        n.loading && t.endIconLoadingEnd,
        t[`iconSize${Y(n.size)}`],
      ];
    },
  })(({ theme: e }) => ({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8,
    variants: [
      { props: { size: "small" }, style: { marginRight: -2 } },
      {
        props: { loadingPosition: "end", loading: !0 },
        style: {
          transition: e.transitions.create(["opacity"], {
            duration: e.transitions.duration.short,
          }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: "end", loading: !0, fullWidth: !0 },
        style: { marginLeft: -8 },
      },
      ...ES,
    ],
  })),
  bI = q("span", {
    name: "MuiButton",
    slot: "LoadingIndicator",
    overridesResolver: (e, t) => t.loadingIndicator,
  })(({ theme: e }) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    variants: [
      { props: { loading: !0 }, style: { display: "flex" } },
      { props: { loadingPosition: "start" }, style: { left: 14 } },
      {
        props: { loadingPosition: "start", size: "small" },
        style: { left: 10 },
      },
      {
        props: { variant: "text", loadingPosition: "start" },
        style: { left: 6 },
      },
      {
        props: { loadingPosition: "center" },
        style: {
          left: "50%",
          transform: "translate(-50%)",
          color: (e.vars || e).palette.action.disabled,
        },
      },
      { props: { loadingPosition: "end" }, style: { right: 14 } },
      {
        props: { loadingPosition: "end", size: "small" },
        style: { right: 10 },
      },
      {
        props: { variant: "text", loadingPosition: "end" },
        style: { right: 6 },
      },
      {
        props: { loadingPosition: "start", fullWidth: !0 },
        style: { position: "relative", left: -10 },
      },
      {
        props: { loadingPosition: "end", fullWidth: !0 },
        style: { position: "relative", right: -10 },
      },
    ],
  })),
  Ug = q("span", {
    name: "MuiButton",
    slot: "LoadingIconPlaceholder",
    overridesResolver: (e, t) => t.loadingIconPlaceholder,
  })({ display: "inline-block", width: "1em", height: "1em" }),
  CI = S.forwardRef(function (t, n) {
    const r = S.useContext(hI),
      o = S.useContext(gI),
      i = Ds(r, t),
      s = le({ props: i, name: "MuiButton" }),
      {
        children: a,
        color: l = "primary",
        component: u = "button",
        className: d,
        disabled: c = !1,
        disableElevation: f = !1,
        disableFocusRipple: w = !1,
        endIcon: y,
        focusVisibleClassName: v,
        fullWidth: C = !1,
        id: h,
        loading: p = null,
        loadingIndicator: m,
        loadingPosition: b = "center",
        size: k = "medium",
        startIcon: P,
        type: R,
        variant: T = "text",
        ...M
      } = s,
      g = Xu(h),
      O = m ?? x(Eo, { "aria-labelledby": g, color: "inherit", size: 16 }),
      I = {
        ...s,
        color: l,
        component: u,
        disabled: c,
        disableElevation: f,
        disableFocusRipple: w,
        fullWidth: C,
        loading: p,
        loadingIndicator: O,
        loadingPosition: b,
        size: k,
        type: R,
        variant: T,
      },
      _ = yI(I),
      W =
        (P || (p && b === "start")) &&
        x(SI, {
          className: _.startIcon,
          ownerState: I,
          children:
            P || x(Ug, { className: _.loadingIconPlaceholder, ownerState: I }),
        }),
      A =
        (y || (p && b === "end")) &&
        x(wI, {
          className: _.endIcon,
          ownerState: I,
          children:
            y || x(Ug, { className: _.loadingIconPlaceholder, ownerState: I }),
        }),
      L = o || "",
      V =
        typeof p == "boolean"
          ? x("span", {
              className: _.loadingWrapper,
              style: { display: "contents" },
              children:
                p &&
                x(bI, {
                  className: _.loadingIndicator,
                  ownerState: I,
                  children: O,
                }),
            })
          : null;
    return J(vI, {
      ownerState: I,
      className: te(r.className, _.root, d, L),
      component: u,
      disabled: c || p,
      focusRipple: !w,
      focusVisibleClassName: te(_.focusVisible, v),
      ref: n,
      type: R,
      id: p ? g : h,
      ...M,
      classes: _,
      children: [W, b !== "end" && V, a, b === "end" && V, A],
    });
  }),
  nn = CI;
function xI(e) {
  return se("MuiCard", e);
}
re("MuiCard", ["root"]);
const kI = (e) => {
    const { classes: t } = e;
    return ae({ root: ["root"] }, xI, t);
  },
  EI = q(Ei, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ overflow: "hidden" }),
  PI = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiCard" }),
      { className: o, raised: i = !1, ...s } = r,
      a = { ...r, raised: i },
      l = kI(a);
    return x(EI, {
      className: te(l.root, o),
      elevation: i ? 8 : void 0,
      ref: n,
      ownerState: a,
      ...s,
    });
  }),
  Ja = PI;
function RI(e) {
  return se("MuiCardActions", e);
}
re("MuiCardActions", ["root", "spacing"]);
const TI = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return ae({ root: ["root", !n && "spacing"] }, RI, t);
  },
  $I = q("div", {
    name: "MuiCardActions",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableSpacing && t.spacing];
    },
  })({
    display: "flex",
    alignItems: "center",
    padding: 8,
    variants: [
      {
        props: { disableSpacing: !1 },
        style: { "& > :not(style) ~ :not(style)": { marginLeft: 8 } },
      },
    ],
  }),
  OI = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiCardActions" }),
      { disableSpacing: o = !1, className: i, ...s } = r,
      a = { ...r, disableSpacing: o },
      l = TI(a);
    return x($I, { className: te(l.root, i), ownerState: a, ref: n, ...s });
  }),
  yf = OI;
function MI(e) {
  return se("MuiCardContent", e);
}
re("MuiCardContent", ["root"]);
const II = (e) => {
    const { classes: t } = e;
    return ae({ root: ["root"] }, MI, t);
  },
  AI = q("div", {
    name: "MuiCardContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ padding: 16, "&:last-child": { paddingBottom: 24 } }),
  NI = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiCardContent" }),
      { className: o, component: i = "div", ...s } = r,
      a = { ...r, component: i },
      l = II(a);
    return x(AI, {
      as: i,
      className: te(l.root, o),
      ownerState: a,
      ref: n,
      ...s,
    });
  }),
  Za = NI;
function _I(e) {
  return se("PrivateSwitchBase", e);
}
re("PrivateSwitchBase", [
  "root",
  "checked",
  "disabled",
  "input",
  "edgeStart",
  "edgeEnd",
]);
const LI = (e) => {
    const { classes: t, checked: n, disabled: r, edge: o } = e,
      i = {
        root: ["root", n && "checked", r && "disabled", o && `edge${Y(o)}`],
        input: ["input"],
      };
    return ae(i, _I, t);
  },
  FI = q(Pi)({
    padding: 9,
    borderRadius: "50%",
    variants: [
      { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } },
      {
        props: ({ edge: e, ownerState: t }) =>
          e === "start" && t.size !== "small",
        style: { marginLeft: -12 },
      },
      { props: { edge: "end", size: "small" }, style: { marginRight: -3 } },
      {
        props: ({ edge: e, ownerState: t }) =>
          e === "end" && t.size !== "small",
        style: { marginRight: -12 },
      },
    ],
  }),
  BI = q("input", { shouldForwardProp: en })({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  DI = S.forwardRef(function (t, n) {
    const {
        autoFocus: r,
        checked: o,
        checkedIcon: i,
        className: s,
        defaultChecked: a,
        disabled: l,
        disableFocusRipple: u = !1,
        edge: d = !1,
        icon: c,
        id: f,
        inputProps: w,
        inputRef: y,
        name: v,
        onBlur: C,
        onChange: h,
        onFocus: p,
        readOnly: m,
        required: b = !1,
        tabIndex: k,
        type: P,
        value: R,
        ...T
      } = t,
      [M, g] = Fl({
        controlled: o,
        default: !!a,
        name: "SwitchBase",
        state: "checked",
      }),
      O = Yr(),
      I = (z) => {
        p && p(z), O && O.onFocus && O.onFocus(z);
      },
      _ = (z) => {
        C && C(z), O && O.onBlur && O.onBlur(z);
      },
      W = (z) => {
        if (z.nativeEvent.defaultPrevented) return;
        const G = z.target.checked;
        g(G), h && h(z, G);
      };
    let A = l;
    O && typeof A > "u" && (A = O.disabled);
    const L = P === "checkbox" || P === "radio",
      V = { ...t, checked: M, disabled: A, disableFocusRipple: u, edge: d },
      U = LI(V);
    return J(FI, {
      component: "span",
      className: te(U.root, s),
      centerRipple: !0,
      focusRipple: !u,
      disabled: A,
      tabIndex: null,
      role: void 0,
      onFocus: I,
      onBlur: _,
      ownerState: V,
      ref: n,
      ...T,
      children: [
        x(BI, {
          autoFocus: r,
          checked: o,
          defaultChecked: a,
          className: U.input,
          disabled: A,
          id: L ? f : void 0,
          name: v,
          onChange: W,
          readOnly: m,
          ref: y,
          required: b,
          ownerState: V,
          tabIndex: k,
          type: P,
          ...(P === "checkbox" && R === void 0 ? {} : { value: R }),
          ...w,
        }),
        M ? i : c,
      ],
    });
  }),
  zI = DI,
  UI = Je(
    x("path", {
      d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
    }),
    "CheckBoxOutlineBlank"
  ),
  WI = Je(
    x("path", {
      d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    }),
    "CheckBox"
  ),
  VI = Je(
    x("path", {
      d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z",
    }),
    "IndeterminateCheckBox"
  );
function jI(e) {
  return se("MuiCheckbox", e);
}
const HI = re("MuiCheckbox", [
    "root",
    "checked",
    "disabled",
    "indeterminate",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium",
  ]),
  Hc = HI,
  KI = (e) => {
    const { classes: t, indeterminate: n, color: r, size: o } = e,
      i = {
        root: ["root", n && "indeterminate", `color${Y(r)}`, `size${Y(o)}`],
      },
      s = ae(i, jI, t);
    return { ...t, ...s };
  },
  qI = q(zI, {
    shouldForwardProp: (e) => en(e) || e === "classes",
    name: "MuiCheckbox",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.indeterminate && t.indeterminate,
        t[`size${Y(n.size)}`],
        n.color !== "default" && t[`color${Y(n.color)}`],
      ];
    },
  })(
    Se(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      variants: [
        {
          props: { color: "default", disableRipple: !1 },
          style: {
            "&:hover": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
                : Ue(e.palette.action.active, e.palette.action.hoverOpacity),
            },
          },
        },
        ...Object.entries(e.palette)
          .filter(wt())
          .map(([t]) => ({
            props: { color: t, disableRipple: !1 },
            style: {
              "&:hover": {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : Ue(e.palette[t].main, e.palette.action.hoverOpacity),
              },
            },
          })),
        ...Object.entries(e.palette)
          .filter(wt())
          .map(([t]) => ({
            props: { color: t },
            style: {
              [`&.${Hc.checked}, &.${Hc.indeterminate}`]: {
                color: (e.vars || e).palette[t].main,
              },
              [`&.${Hc.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
              },
            },
          })),
        {
          props: { disableRipple: !1 },
          style: {
            "&:hover": {
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
        },
      ],
    }))
  ),
  GI = x(WI, {}),
  YI = x(UI, {}),
  QI = x(VI, {}),
  XI = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiCheckbox" }),
      {
        checkedIcon: o = GI,
        color: i = "primary",
        icon: s = YI,
        indeterminate: a = !1,
        indeterminateIcon: l = QI,
        inputProps: u,
        size: d = "medium",
        disableRipple: c = !1,
        className: f,
        ...w
      } = r,
      y = a ? l : s,
      v = a ? l : o,
      C = { ...r, disableRipple: c, color: i, indeterminate: a, size: d },
      h = KI(C);
    return x(qI, {
      type: "checkbox",
      inputProps: { "data-indeterminate": a, ...u },
      icon: S.cloneElement(y, { fontSize: y.props.fontSize ?? d }),
      checkedIcon: S.cloneElement(v, { fontSize: v.props.fontSize ?? d }),
      ownerState: C,
      ref: n,
      className: te(h.root, f),
      disableRipple: c,
      ...w,
      classes: h,
    });
  }),
  JI = XI,
  ZI = i$({
    createStyledComponent: q("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${Y(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => le({ props: e, name: "MuiContainer" }),
  }),
  PS = ZI;
function eA(e) {
  const t = Nn(e);
  return t.body === e
    ? hr(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function ds(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Wg(e) {
  return parseInt(hr(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function tA(e) {
  const n = [
      "TEMPLATE",
      "SCRIPT",
      "STYLE",
      "LINK",
      "MAP",
      "META",
      "NOSCRIPT",
      "PICTURE",
      "COL",
      "COLGROUP",
      "PARAM",
      "SLOT",
      "SOURCE",
      "TRACK",
    ].includes(e.tagName),
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Vg(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s),
      l = !tA(s);
    a && l && ds(s, o);
  });
}
function Kc(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function nA(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (eA(r)) {
      const s = J1(hr(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${Wg(r) + s}px`);
      const a = Nn(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l,
        }),
          (l.style.paddingRight = `${Wg(l) + s}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = Nn(r).body;
    else {
      const s = r.parentElement,
        a = hr(r);
      i =
        (s == null ? void 0 : s.nodeName) === "HTML" &&
        a.getComputedStyle(s).overflowY === "scroll"
          ? s
          : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i }
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: s, property: a }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function rA(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class oA {
  constructor() {
    (this.modals = []), (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && ds(t.modalRef, !1);
    const o = rA(n);
    Vg(n, t.mount, t.modalRef, o, !0);
    const i = Kc(this.containers, (s) => s.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = Kc(this.containers, (i) => i.modals.includes(t)),
      o = this.containers[r];
    o.restore || (o.restore = nA(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = Kc(this.containers, (s) => s.modals.includes(t)),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && ds(t.modalRef, n),
        Vg(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && ds(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const iA = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function sA(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function aA(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function lA(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    aA(e)
  );
}
function uA(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(iA)).forEach((r, o) => {
      const i = sA(r);
      i === -1 ||
        !lA(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function cA() {
  return !0;
}
function dA(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = uA,
      isEnabled: s = cA,
      open: a,
    } = e,
    l = S.useRef(!1),
    u = S.useRef(null),
    d = S.useRef(null),
    c = S.useRef(null),
    f = S.useRef(null),
    w = S.useRef(!1),
    y = S.useRef(null),
    v = bt(na(t), y),
    C = S.useRef(null);
  S.useEffect(() => {
    !a || !y.current || (w.current = !n);
  }, [n, a]),
    S.useEffect(() => {
      if (!a || !y.current) return;
      const m = Nn(y.current);
      return (
        y.current.contains(m.activeElement) ||
          (y.current.hasAttribute("tabIndex") ||
            y.current.setAttribute("tabIndex", "-1"),
          w.current && y.current.focus()),
        () => {
          o ||
            (c.current &&
              c.current.focus &&
              ((l.current = !0), c.current.focus()),
            (c.current = null));
        }
      );
    }, [a]),
    S.useEffect(() => {
      if (!a || !y.current) return;
      const m = Nn(y.current),
        b = (R) => {
          (C.current = R),
            !(r || !s() || R.key !== "Tab") &&
              m.activeElement === y.current &&
              R.shiftKey &&
              ((l.current = !0), d.current && d.current.focus());
        },
        k = () => {
          var M, g;
          const R = y.current;
          if (R === null) return;
          if (!m.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (
            R.contains(m.activeElement) ||
            (r &&
              m.activeElement !== u.current &&
              m.activeElement !== d.current)
          )
            return;
          if (m.activeElement !== f.current) f.current = null;
          else if (f.current !== null) return;
          if (!w.current) return;
          let T = [];
          if (
            ((m.activeElement === u.current || m.activeElement === d.current) &&
              (T = i(y.current)),
            T.length > 0)
          ) {
            const O = !!(
                (M = C.current) != null &&
                M.shiftKey &&
                ((g = C.current) == null ? void 0 : g.key) === "Tab"
              ),
              I = T[0],
              _ = T[T.length - 1];
            typeof I != "string" &&
              typeof _ != "string" &&
              (O ? _.focus() : I.focus());
          } else R.focus();
        };
      m.addEventListener("focusin", k), m.addEventListener("keydown", b, !0);
      const P = setInterval(() => {
        m.activeElement && m.activeElement.tagName === "BODY" && k();
      }, 50);
      return () => {
        clearInterval(P),
          m.removeEventListener("focusin", k),
          m.removeEventListener("keydown", b, !0);
      };
    }, [n, r, o, s, a, i]);
  const h = (m) => {
      c.current === null && (c.current = m.relatedTarget),
        (w.current = !0),
        (f.current = m.target);
      const b = t.props.onFocus;
      b && b(m);
    },
    p = (m) => {
      c.current === null && (c.current = m.relatedTarget), (w.current = !0);
    };
  return J(S.Fragment, {
    children: [
      x("div", {
        tabIndex: a ? 0 : -1,
        onFocus: p,
        ref: u,
        "data-testid": "sentinelStart",
      }),
      S.cloneElement(t, { ref: v, onFocus: h }),
      x("div", {
        tabIndex: a ? 0 : -1,
        onFocus: p,
        ref: d,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function fA(e) {
  return typeof e == "function" ? e() : e;
}
function pA(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const jg = () => {},
  Oa = new oA();
function hA(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      closeAfterTransition: o = !1,
      onTransitionEnter: i,
      onTransitionExited: s,
      children: a,
      onClose: l,
      open: u,
      rootRef: d,
    } = e,
    c = S.useRef({}),
    f = S.useRef(null),
    w = S.useRef(null),
    y = bt(w, d),
    [v, C] = S.useState(!u),
    h = pA(a);
  let p = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (p = !1);
  const m = () => Nn(f.current),
    b = () => (
      (c.current.modalRef = w.current), (c.current.mount = f.current), c.current
    ),
    k = () => {
      Oa.mount(b(), { disableScrollLock: r }),
        w.current && (w.current.scrollTop = 0);
    },
    P = ii(() => {
      const A = fA(t) || m().body;
      Oa.add(b(), A), w.current && k();
    }),
    R = () => Oa.isTopModal(b()),
    T = ii((A) => {
      (f.current = A), A && (u && R() ? k() : w.current && ds(w.current, p));
    }),
    M = S.useCallback(() => {
      Oa.remove(b(), p);
    }, [p]);
  S.useEffect(
    () => () => {
      M();
    },
    [M]
  ),
    S.useEffect(() => {
      u ? P() : (!h || !o) && M();
    }, [u, M, h, o, P]);
  const g = (A) => (L) => {
      var V;
      (V = A.onKeyDown) == null || V.call(A, L),
        !(L.key !== "Escape" || L.which === 229 || !R()) &&
          (n || (L.stopPropagation(), l && l(L, "escapeKeyDown")));
    },
    O = (A) => (L) => {
      var V;
      (V = A.onClick) == null || V.call(A, L),
        L.target === L.currentTarget && l && l(L, "backdropClick");
    };
  return {
    getRootProps: (A = {}) => {
      const L = tS(e);
      delete L.onTransitionEnter, delete L.onTransitionExited;
      const V = { ...L, ...A };
      return { role: "presentation", ...V, onKeyDown: g(V), ref: y };
    },
    getBackdropProps: (A = {}) => {
      const L = A;
      return { "aria-hidden": !0, ...L, onClick: O(L), open: u };
    },
    getTransitionProps: () => {
      const A = () => {
          C(!1), i && i();
        },
        L = () => {
          C(!0), s && s(), o && M();
        };
      return {
        onEnter: fg(A, (a == null ? void 0 : a.props.onEnter) ?? jg),
        onExited: fg(L, (a == null ? void 0 : a.props.onExited) ?? jg),
      };
    },
    rootRef: y,
    portalRef: T,
    isTopModal: R,
    exited: v,
    hasTransition: h,
  };
}
function mA(e) {
  return se("MuiModal", e);
}
re("MuiModal", ["root", "hidden", "backdrop"]);
const gA = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return ae(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      mA,
      r
    );
  },
  yA = q("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(
    Se(({ theme: e }) => ({
      position: "fixed",
      zIndex: (e.vars || e).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        {
          props: ({ ownerState: t }) => !t.open && t.exited,
          style: { visibility: "hidden" },
        },
      ],
    }))
  ),
  vA = q(kS, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  SA = S.forwardRef(function (t, n) {
    const r = le({ name: "MuiModal", props: t }),
      {
        BackdropComponent: o = vA,
        BackdropProps: i,
        classes: s,
        className: a,
        closeAfterTransition: l = !1,
        children: u,
        container: d,
        component: c,
        components: f = {},
        componentsProps: w = {},
        disableAutoFocus: y = !1,
        disableEnforceFocus: v = !1,
        disableEscapeKeyDown: C = !1,
        disablePortal: h = !1,
        disableRestoreFocus: p = !1,
        disableScrollLock: m = !1,
        hideBackdrop: b = !1,
        keepMounted: k = !1,
        onBackdropClick: P,
        onClose: R,
        onTransitionEnter: T,
        onTransitionExited: M,
        open: g,
        slotProps: O = {},
        slots: I = {},
        theme: _,
        ...W
      } = r,
      A = {
        ...r,
        closeAfterTransition: l,
        disableAutoFocus: y,
        disableEnforceFocus: v,
        disableEscapeKeyDown: C,
        disablePortal: h,
        disableRestoreFocus: p,
        disableScrollLock: m,
        hideBackdrop: b,
        keepMounted: k,
      },
      {
        getRootProps: L,
        getBackdropProps: V,
        getTransitionProps: U,
        portalRef: z,
        isTopModal: G,
        exited: Z,
        hasTransition: oe,
      } = hA({ ...A, rootRef: n }),
      fe = { ...A, exited: Z },
      ue = gA(fe),
      pe = {};
    if ((u.props.tabIndex === void 0 && (pe.tabIndex = "-1"), oe)) {
      const { onEnter: ce, onExited: Ne } = U();
      (pe.onEnter = ce), (pe.onExited = Ne);
    }
    const ke = {
        ...W,
        slots: { root: f.Root, backdrop: f.Backdrop, ...I },
        slotProps: { ...w, ...O },
      },
      [Ee, Ge] = it("root", {
        elementType: yA,
        externalForwardedProps: ke,
        getSlotProps: L,
        additionalProps: { ref: n, as: c },
        ownerState: fe,
        className: te(
          a,
          ue == null ? void 0 : ue.root,
          !fe.open && fe.exited && (ue == null ? void 0 : ue.hidden)
        ),
      }),
      [Oe, de] = it("backdrop", {
        elementType: o,
        externalForwardedProps: ke,
        additionalProps: i,
        getSlotProps: (ce) =>
          V({
            ...ce,
            onClick: (Ne) => {
              P && P(Ne), ce != null && ce.onClick && ce.onClick(Ne);
            },
          }),
        className: te(
          i == null ? void 0 : i.className,
          ue == null ? void 0 : ue.backdrop
        ),
        ownerState: fe,
      }),
      be = bt(i == null ? void 0 : i.ref, de.ref);
    return !k && !g && (!oe || Z)
      ? null
      : x(hM, {
          ref: z,
          container: d,
          disablePortal: h,
          children: J(Ee, {
            ...Ge,
            children: [
              !b && o ? x(Oe, { ...de, ref: be }) : null,
              x(dA, {
                disableEnforceFocus: v,
                disableAutoFocus: y,
                disableRestoreFocus: p,
                isEnabled: G,
                open: g,
                children: S.cloneElement(u, pe),
              }),
            ],
          }),
        });
  }),
  RS = SA,
  wA = re("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
  ]),
  Hg = wA,
  bA = (e) => {
    const {
        classes: t,
        disableUnderline: n,
        startAdornment: r,
        endAdornment: o,
        size: i,
        hiddenLabel: s,
        multiline: a,
      } = e,
      l = {
        root: [
          "root",
          !n && "underline",
          r && "adornedStart",
          o && "adornedEnd",
          i === "small" && `size${Y(i)}`,
          s && "hiddenLabel",
          a && "multiline",
        ],
        input: ["input"],
      },
      u = ae(l, OM, t);
    return { ...t, ...u };
  },
  CA = q(nc, {
    shouldForwardProp: (e) => en(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...ec(e, t), !n.disableUnderline && t.underline];
    },
  })(
    Se(({ theme: e }) => {
      const t = e.palette.mode === "light",
        n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
        r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
        o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
        i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
      return {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : o,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
          },
        },
        [`&.${Xr.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
        },
        [`&.${Xr.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : i,
        },
        variants: [
          {
            props: ({ ownerState: s }) => !s.disableUnderline,
            style: {
              "&::after": {
                left: 0,
                bottom: 0,
                content: '""',
                position: "absolute",
                right: 0,
                transform: "scaleX(0)",
                transition: e.transitions.create("transform", {
                  duration: e.transitions.duration.shorter,
                  easing: e.transitions.easing.easeOut,
                }),
                pointerEvents: "none",
              },
              [`&.${Xr.focused}:after`]: {
                transform: "scaleX(1) translateX(0)",
              },
              [`&.${Xr.error}`]: {
                "&::before, &::after": {
                  borderBottomColor: (e.vars || e).palette.error.main,
                },
              },
              "&::before": {
                borderBottom: `1px solid ${
                  e.vars
                    ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
                    : n
                }`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: "absolute",
                right: 0,
                transition: e.transitions.create("border-bottom-color", {
                  duration: e.transitions.duration.shorter,
                }),
                pointerEvents: "none",
              },
              [`&:hover:not(.${Xr.disabled}, .${Xr.error}):before`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
              },
              [`&.${Xr.disabled}:before`]: { borderBottomStyle: "dotted" },
            },
          },
          ...Object.entries(e.palette)
            .filter(wt())
            .map(([s]) => {
              var a;
              return {
                props: { disableUnderline: !1, color: s },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${
                      (a = (e.vars || e).palette[s]) == null ? void 0 : a.main
                    }`,
                  },
                },
              };
            }),
          {
            props: ({ ownerState: s }) => s.startAdornment,
            style: { paddingLeft: 12 },
          },
          {
            props: ({ ownerState: s }) => s.endAdornment,
            style: { paddingRight: 12 },
          },
          {
            props: ({ ownerState: s }) => s.multiline,
            style: { padding: "25px 12px 8px" },
          },
          {
            props: ({ ownerState: s, size: a }) => s.multiline && a === "small",
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: s }) => s.multiline && s.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: s }) =>
              s.multiline && s.hiddenLabel && s.size === "small",
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      };
    })
  ),
  xA = q(rc, { name: "MuiFilledInput", slot: "Input", overridesResolver: tc })(
    Se(({ theme: e }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
      }),
      ...(e.vars && {
        "&:-webkit-autofill": {
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        {
          props: { size: "small" },
          style: { paddingTop: 21, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: t }) => t.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        {
          props: ({ ownerState: t }) => t.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: t }) => t.endAdornment,
          style: { paddingRight: 0 },
        },
        {
          props: ({ ownerState: t }) => t.hiddenLabel && t.size === "small",
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: t }) => t.multiline,
          style: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      ],
    }))
  ),
  TS = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiFilledInput" }),
      {
        disableUnderline: o = !1,
        components: i = {},
        componentsProps: s,
        fullWidth: a = !1,
        hiddenLabel: l,
        inputComponent: u = "input",
        multiline: d = !1,
        slotProps: c,
        slots: f = {},
        type: w = "text",
        ...y
      } = r,
      v = {
        ...r,
        disableUnderline: o,
        fullWidth: a,
        inputComponent: u,
        multiline: d,
        type: w,
      },
      C = bA(r),
      h = { root: { ownerState: v }, input: { ownerState: v } },
      p = c ?? s ? Lt(h, c ?? s) : h,
      m = f.root ?? i.Root ?? CA,
      b = f.input ?? i.Input ?? xA;
    return x(oh, {
      slots: { root: m, input: b },
      slotProps: p,
      fullWidth: a,
      inputComponent: u,
      multiline: d,
      ref: n,
      type: w,
      ...y,
      classes: C,
    });
  });
TS.muiName = "Input";
const $S = TS;
function kA(e) {
  return se("MuiFormControl", e);
}
re("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const EA = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = { root: ["root", n !== "none" && `margin${Y(n)}`, r && "fullWidth"] };
    return ae(o, kA, t);
  },
  PA = q("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`margin${Y(n.margin)}`], n.fullWidth && t.fullWidth];
    },
  })({
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top",
    variants: [
      {
        props: { margin: "normal" },
        style: { marginTop: 16, marginBottom: 8 },
      },
      { props: { margin: "dense" }, style: { marginTop: 8, marginBottom: 4 } },
      { props: { fullWidth: !0 }, style: { width: "100%" } },
    ],
  }),
  RA = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiFormControl" }),
      {
        children: o,
        className: i,
        color: s = "primary",
        component: a = "div",
        disabled: l = !1,
        error: u = !1,
        focused: d,
        fullWidth: c = !1,
        hiddenLabel: f = !1,
        margin: w = "none",
        required: y = !1,
        size: v = "medium",
        variant: C = "outlined",
        ...h
      } = r,
      p = {
        ...r,
        color: s,
        component: a,
        disabled: l,
        error: u,
        fullWidth: c,
        hiddenLabel: f,
        margin: w,
        required: y,
        size: v,
        variant: C,
      },
      m = EA(p),
      [b, k] = S.useState(() => {
        let A = !1;
        return (
          o &&
            S.Children.forEach(o, (L) => {
              if (!Xa(L, ["Input", "Select"])) return;
              const V = Xa(L, ["Select"]) ? L.props.input : L;
              V && bM(V.props) && (A = !0);
            }),
          A
        );
      }),
      [P, R] = S.useState(() => {
        let A = !1;
        return (
          o &&
            S.Children.forEach(o, (L) => {
              Xa(L, ["Input", "Select"]) &&
                (Ul(L.props, !0) || Ul(L.props.inputProps, !0)) &&
                (A = !0);
            }),
          A
        );
      }),
      [T, M] = S.useState(!1);
    l && T && M(!1);
    const g = d !== void 0 && !l ? d : T;
    let O;
    S.useRef(!1);
    const I = S.useCallback(() => {
        R(!0);
      }, []),
      _ = S.useCallback(() => {
        R(!1);
      }, []),
      W = S.useMemo(
        () => ({
          adornedStart: b,
          setAdornedStart: k,
          color: s,
          disabled: l,
          error: u,
          filled: P,
          focused: g,
          fullWidth: c,
          hiddenLabel: f,
          size: v,
          onBlur: () => {
            M(!1);
          },
          onFocus: () => {
            M(!0);
          },
          onEmpty: _,
          onFilled: I,
          registerEffect: O,
          required: y,
          variant: C,
        }),
        [b, s, l, u, P, g, c, f, O, _, I, y, v, C]
      );
    return x(Zu.Provider, {
      value: W,
      children: x(PA, {
        as: a,
        ownerState: p,
        className: te(m.root, i),
        ref: n,
        ...h,
        children: o,
      }),
    });
  }),
  TA = RA;
function $A(e) {
  return se("MuiFormHelperText", e);
}
const OA = re("MuiFormHelperText", [
    "root",
    "error",
    "disabled",
    "sizeSmall",
    "sizeMedium",
    "contained",
    "focused",
    "filled",
    "required",
  ]),
  Kg = OA;
var qg;
const MA = (e) => {
    const {
        classes: t,
        contained: n,
        size: r,
        disabled: o,
        error: i,
        filled: s,
        focused: a,
        required: l,
      } = e,
      u = {
        root: [
          "root",
          o && "disabled",
          i && "error",
          r && `size${Y(r)}`,
          n && "contained",
          a && "focused",
          s && "filled",
          l && "required",
        ],
      };
    return ae(u, $A, t);
  },
  IA = q("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.size && t[`size${Y(n.size)}`],
        n.contained && t.contained,
        n.filled && t.filled,
      ];
    },
  })(
    Se(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.caption,
      textAlign: "left",
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${Kg.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${Kg.error}`]: { color: (e.vars || e).palette.error.main },
      variants: [
        { props: { size: "small" }, style: { marginTop: 4 } },
        {
          props: ({ ownerState: t }) => t.contained,
          style: { marginLeft: 14, marginRight: 14 },
        },
      ],
    }))
  ),
  AA = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiFormHelperText" }),
      {
        children: o,
        className: i,
        component: s = "p",
        disabled: a,
        error: l,
        filled: u,
        focused: d,
        margin: c,
        required: f,
        variant: w,
        ...y
      } = r,
      v = Yr(),
      C = Ri({
        props: r,
        muiFormControl: v,
        states: [
          "variant",
          "size",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
      }),
      h = {
        ...r,
        component: s,
        contained: C.variant === "filled" || C.variant === "outlined",
        variant: C.variant,
        size: C.size,
        disabled: C.disabled,
        error: C.error,
        filled: C.filled,
        focused: C.focused,
        required: C.required,
      };
    delete h.ownerState;
    const p = MA(h);
    return x(IA, {
      as: s,
      className: te(p.root, i),
      ref: n,
      ...y,
      ownerState: h,
      children:
        o === " "
          ? qg ||
            (qg = x("span", {
              className: "notranslate",
              "aria-hidden": !0,
              children: "​",
            }))
          : o,
    });
  }),
  NA = AA;
function _A(e) {
  return se("MuiFormLabel", e);
}
const LA = re("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  fs = LA,
  FA = (e) => {
    const {
        classes: t,
        color: n,
        focused: r,
        disabled: o,
        error: i,
        filled: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          `color${Y(n)}`,
          o && "disabled",
          i && "error",
          s && "filled",
          r && "focused",
          a && "required",
        ],
        asterisk: ["asterisk", i && "error"],
      };
    return ae(l, _A, t);
  },
  BA = q("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color === "secondary" && t.colorSecondary,
        n.filled && t.filled,
      ];
    },
  })(
    Se(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.body1,
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      variants: [
        ...Object.entries(e.palette)
          .filter(wt())
          .map(([t]) => ({
            props: { color: t },
            style: {
              [`&.${fs.focused}`]: { color: (e.vars || e).palette[t].main },
            },
          })),
        {
          props: {},
          style: {
            [`&.${fs.disabled}`]: {
              color: (e.vars || e).palette.text.disabled,
            },
            [`&.${fs.error}`]: { color: (e.vars || e).palette.error.main },
          },
        },
      ],
    }))
  ),
  DA = q("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(
    Se(({ theme: e }) => ({
      [`&.${fs.error}`]: { color: (e.vars || e).palette.error.main },
    }))
  ),
  zA = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiFormLabel" }),
      {
        children: o,
        className: i,
        color: s,
        component: a = "label",
        disabled: l,
        error: u,
        filled: d,
        focused: c,
        required: f,
        ...w
      } = r,
      y = Yr(),
      v = Ri({
        props: r,
        muiFormControl: y,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      C = {
        ...r,
        color: v.color || "primary",
        component: a,
        disabled: v.disabled,
        error: v.error,
        filled: v.filled,
        focused: v.focused,
        required: v.required,
      },
      h = FA(C);
    return J(BA, {
      as: a,
      ownerState: C,
      className: te(h.root, i),
      ref: n,
      ...w,
      children: [
        o,
        v.required &&
          J(DA, {
            ownerState: C,
            "aria-hidden": !0,
            className: h.asterisk,
            children: [" ", "*"],
          }),
      ],
    });
  }),
  UA = zA;
function vf(e) {
  return `scale(${e}, ${e ** 2})`;
}
const WA = {
    entering: { opacity: 1, transform: vf(1) },
    entered: { opacity: 1, transform: "none" },
  },
  qc =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  Sf = S.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: s,
        in: a,
        onEnter: l,
        onEntered: u,
        onEntering: d,
        onExit: c,
        onExited: f,
        onExiting: w,
        style: y,
        timeout: v = "auto",
        TransitionComponent: C = bS,
        ...h
      } = t,
      p = X1(),
      m = S.useRef(),
      b = th(),
      k = S.useRef(null),
      P = bt(k, na(i), n),
      R = (A) => (L) => {
        if (A) {
          const V = k.current;
          L === void 0 ? A(V) : A(V, L);
        }
      },
      T = R(d),
      M = R((A, L) => {
        CS(A);
        const {
          duration: V,
          delay: U,
          easing: z,
        } = Dl({ style: y, timeout: v, easing: s }, { mode: "enter" });
        let G;
        v === "auto"
          ? ((G = b.transitions.getAutoHeightDuration(A.clientHeight)),
            (m.current = G))
          : (G = V),
          (A.style.transition = [
            b.transitions.create("opacity", { duration: G, delay: U }),
            b.transitions.create("transform", {
              duration: qc ? G : G * 0.666,
              delay: U,
              easing: z,
            }),
          ].join(",")),
          l && l(A, L);
      }),
      g = R(u),
      O = R(w),
      I = R((A) => {
        const {
          duration: L,
          delay: V,
          easing: U,
        } = Dl({ style: y, timeout: v, easing: s }, { mode: "exit" });
        let z;
        v === "auto"
          ? ((z = b.transitions.getAutoHeightDuration(A.clientHeight)),
            (m.current = z))
          : (z = L),
          (A.style.transition = [
            b.transitions.create("opacity", { duration: z, delay: V }),
            b.transitions.create("transform", {
              duration: qc ? z : z * 0.666,
              delay: qc ? V : V || z * 0.333,
              easing: U,
            }),
          ].join(",")),
          (A.style.opacity = 0),
          (A.style.transform = vf(0.75)),
          c && c(A);
      }),
      _ = R(f);
    return x(C, {
      appear: o,
      in: a,
      nodeRef: k,
      onEnter: M,
      onEntered: g,
      onEntering: T,
      onExit: I,
      onExited: _,
      onExiting: O,
      addEndListener: (A) => {
        v === "auto" && p.start(m.current || 0, A), r && r(k.current, A);
      },
      timeout: v === "auto" ? null : v,
      ...h,
      children: (A, { ownerState: L, ...V }) =>
        S.cloneElement(i, {
          style: {
            opacity: 0,
            transform: vf(0.75),
            visibility: A === "exited" && !a ? "hidden" : void 0,
            ...WA[A],
            ...y,
            ...i.props.style,
          },
          ref: P,
          ...V,
        }),
    });
  });
Sf && (Sf.muiSupportAuto = !0);
const VA = Sf,
  jA = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = ae({ root: ["root", !n && "underline"], input: ["input"] }, PM, t);
    return { ...t, ...o };
  },
  HA = q(nc, {
    shouldForwardProp: (e) => en(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...ec(e, t), !n.disableUnderline && t.underline];
    },
  })(
    Se(({ theme: e }) => {
      let n =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.42)"
          : "rgba(255, 255, 255, 0.7)";
      return (
        e.vars &&
          (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
        {
          position: "relative",
          variants: [
            {
              props: ({ ownerState: r }) => r.formControl,
              style: { "label + &": { marginTop: 16 } },
            },
            {
              props: ({ ownerState: r }) => !r.disableUnderline,
              style: {
                "&::after": {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: "absolute",
                  right: 0,
                  transform: "scaleX(0)",
                  transition: e.transitions.create("transform", {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut,
                  }),
                  pointerEvents: "none",
                },
                [`&.${Wi.focused}:after`]: {
                  transform: "scaleX(1) translateX(0)",
                },
                [`&.${Wi.error}`]: {
                  "&::before, &::after": {
                    borderBottomColor: (e.vars || e).palette.error.main,
                  },
                },
                "&::before": {
                  borderBottom: `1px solid ${n}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: "absolute",
                  right: 0,
                  transition: e.transitions.create("border-bottom-color", {
                    duration: e.transitions.duration.shorter,
                  }),
                  pointerEvents: "none",
                },
                [`&:hover:not(.${Wi.disabled}, .${Wi.error}):before`]: {
                  borderBottom: `2px solid ${
                    (e.vars || e).palette.text.primary
                  }`,
                  "@media (hover: none)": { borderBottom: `1px solid ${n}` },
                },
                [`&.${Wi.disabled}:before`]: { borderBottomStyle: "dotted" },
              },
            },
            ...Object.entries(e.palette)
              .filter(wt())
              .map(([r]) => ({
                props: { color: r, disableUnderline: !1 },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${(e.vars || e).palette[r].main}`,
                  },
                },
              })),
          ],
        }
      );
    })
  ),
  KA = q(rc, { name: "MuiInput", slot: "Input", overridesResolver: tc })({}),
  OS = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiInput" }),
      {
        disableUnderline: o = !1,
        components: i = {},
        componentsProps: s,
        fullWidth: a = !1,
        inputComponent: l = "input",
        multiline: u = !1,
        slotProps: d,
        slots: c = {},
        type: f = "text",
        ...w
      } = r,
      y = jA(r),
      C = { root: { ownerState: { disableUnderline: o } } },
      h = d ?? s ? Lt(d ?? s, C) : C,
      p = c.root ?? i.Root ?? HA,
      m = c.input ?? i.Input ?? KA;
    return x(oh, {
      slots: { root: p, input: m },
      slotProps: h,
      fullWidth: a,
      inputComponent: l,
      multiline: u,
      ref: n,
      type: f,
      ...w,
      classes: y,
    });
  });
OS.muiName = "Input";
const MS = OS;
function qA(e) {
  return se("MuiInputAdornment", e);
}
const GA = re("MuiInputAdornment", [
    "root",
    "filled",
    "standard",
    "outlined",
    "positionStart",
    "positionEnd",
    "disablePointerEvents",
    "hiddenLabel",
    "sizeSmall",
  ]),
  Gg = GA;
var Yg;
const YA = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${Y(n.position)}`],
      n.disablePointerEvents === !0 && t.disablePointerEvents,
      t[n.variant],
    ];
  },
  QA = (e) => {
    const {
        classes: t,
        disablePointerEvents: n,
        hiddenLabel: r,
        position: o,
        size: i,
        variant: s,
      } = e,
      a = {
        root: [
          "root",
          n && "disablePointerEvents",
          o && `position${Y(o)}`,
          s,
          r && "hiddenLabel",
          i && `size${Y(i)}`,
        ],
      };
    return ae(a, qA, t);
  },
  XA = q("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: YA,
  })(
    Se(({ theme: e }) => ({
      display: "flex",
      maxHeight: "2em",
      alignItems: "center",
      whiteSpace: "nowrap",
      color: (e.vars || e).palette.action.active,
      variants: [
        {
          props: { variant: "filled" },
          style: {
            [`&.${Gg.positionStart}&:not(.${Gg.hiddenLabel})`]: {
              marginTop: 16,
            },
          },
        },
        { props: { position: "start" }, style: { marginRight: 8 } },
        { props: { position: "end" }, style: { marginLeft: 8 } },
        {
          props: { disablePointerEvents: !0 },
          style: { pointerEvents: "none" },
        },
      ],
    }))
  ),
  JA = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiInputAdornment" }),
      {
        children: o,
        className: i,
        component: s = "div",
        disablePointerEvents: a = !1,
        disableTypography: l = !1,
        position: u,
        variant: d,
        ...c
      } = r,
      f = Yr() || {};
    let w = d;
    d && f.variant, f && !w && (w = f.variant);
    const y = {
        ...r,
        hiddenLabel: f.hiddenLabel,
        size: f.size,
        disablePointerEvents: a,
        position: u,
        variant: w,
      },
      v = QA(y);
    return x(Zu.Provider, {
      value: null,
      children: x(XA, {
        as: s,
        ownerState: y,
        className: te(v.root, i),
        ref: n,
        ...c,
        children:
          typeof o == "string" && !l
            ? x(Sn, { color: "textSecondary", children: o })
            : J(S.Fragment, {
                children: [
                  u === "start"
                    ? Yg ||
                      (Yg = x("span", {
                        className: "notranslate",
                        "aria-hidden": !0,
                        children: "​",
                      }))
                    : null,
                  o,
                ],
              }),
      }),
    });
  }),
  ZA = JA;
function e5(e) {
  return se("MuiInputLabel", e);
}
re("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const t5 = (e) => {
    const {
        classes: t,
        formControl: n,
        size: r,
        shrink: o,
        disableAnimation: i,
        variant: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          n && "formControl",
          !i && "animated",
          o && "shrink",
          r && r !== "normal" && `size${Y(r)}`,
          s,
        ],
        asterisk: [a && "asterisk"],
      },
      u = ae(l, e5, t);
    return { ...t, ...u };
  },
  n5 = q(UA, {
    shouldForwardProp: (e) => en(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${fs.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === "small" && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        n.focused && t.focused,
        t[n.variant],
      ];
    },
  })(
    Se(({ theme: e }) => ({
      display: "block",
      transformOrigin: "top left",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "100%",
      variants: [
        {
          props: ({ ownerState: t }) => t.formControl,
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            transform: "translate(0, 20px) scale(1)",
          },
        },
        {
          props: { size: "small" },
          style: { transform: "translate(0, 17px) scale(1)" },
        },
        {
          props: ({ ownerState: t }) => t.shrink,
          style: {
            transform: "translate(0, -1.5px) scale(0.75)",
            transformOrigin: "top left",
            maxWidth: "133%",
          },
        },
        {
          props: ({ ownerState: t }) => !t.disableAnimation,
          style: {
            transition: e.transitions.create(
              ["color", "transform", "max-width"],
              {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut,
              }
            ),
          },
        },
        {
          props: { variant: "filled" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "filled", size: "small" },
          style: { transform: "translate(12px, 13px) scale(1)" },
        },
        {
          props: ({ variant: t, ownerState: n }) => t === "filled" && n.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            transform: "translate(12px, 7px) scale(0.75)",
            maxWidth: "calc(133% - 24px)",
          },
        },
        {
          props: ({ variant: t, ownerState: n, size: r }) =>
            t === "filled" && n.shrink && r === "small",
          style: { transform: "translate(12px, 4px) scale(0.75)" },
        },
        {
          props: { variant: "outlined" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "outlined", size: "small" },
          style: { transform: "translate(14px, 9px) scale(1)" },
        },
        {
          props: ({ variant: t, ownerState: n }) =>
            t === "outlined" && n.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          },
        },
      ],
    }))
  ),
  r5 = S.forwardRef(function (t, n) {
    const r = le({ name: "MuiInputLabel", props: t }),
      {
        disableAnimation: o = !1,
        margin: i,
        shrink: s,
        variant: a,
        className: l,
        ...u
      } = r,
      d = Yr();
    let c = s;
    typeof c > "u" && d && (c = d.filled || d.focused || d.adornedStart);
    const f = Ri({
        props: r,
        muiFormControl: d,
        states: ["size", "variant", "required", "focused"],
      }),
      w = {
        ...r,
        disableAnimation: o,
        formControl: d,
        shrink: c,
        size: f.size,
        variant: f.variant,
        required: f.required,
        focused: f.focused,
      },
      y = t5(w);
    return x(n5, {
      "data-shrink": c,
      ref: n,
      className: te(y.root, l),
      ...u,
      ownerState: w,
      classes: y,
    });
  }),
  o5 = r5,
  i5 = S.createContext({}),
  ho = i5;
function s5(e) {
  return se("MuiList", e);
}
re("MuiList", ["root", "padding", "dense", "subheader"]);
const a5 = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return ae(
      { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
      s5,
      t
    );
  },
  l5 = q("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    variants: [
      {
        props: ({ ownerState: e }) => !e.disablePadding,
        style: { paddingTop: 8, paddingBottom: 8 },
      },
      { props: ({ ownerState: e }) => e.subheader, style: { paddingTop: 0 } },
    ],
  }),
  u5 = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiList" }),
      {
        children: o,
        className: i,
        component: s = "ul",
        dense: a = !1,
        disablePadding: l = !1,
        subheader: u,
        ...d
      } = r,
      c = S.useMemo(() => ({ dense: a }), [a]),
      f = { ...r, component: s, dense: a, disablePadding: l },
      w = a5(f);
    return x(ho.Provider, {
      value: c,
      children: J(l5, {
        as: s,
        className: te(w.root, i),
        ref: n,
        ownerState: f,
        ...d,
        children: [u, o],
      }),
    });
  }),
  ih = u5;
function c5(e) {
  return se("MuiListItem", e);
}
re("MuiListItem", [
  "root",
  "container",
  "dense",
  "alignItemsFlexStart",
  "divider",
  "gutters",
  "padding",
  "secondaryAction",
]);
const d5 = re("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  f5 = d5;
function p5(e) {
  return se("MuiListItemSecondaryAction", e);
}
re("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const h5 = (e) => {
    const { disableGutters: t, classes: n } = e;
    return ae({ root: ["root", t && "disableGutters"] }, p5, n);
  },
  m5 = q("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.disableGutters && t.disableGutters];
    },
  })({
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)",
    variants: [
      { props: ({ ownerState: e }) => e.disableGutters, style: { right: 0 } },
    ],
  }),
  IS = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiListItemSecondaryAction" }),
      { className: o, ...i } = r,
      s = S.useContext(ho),
      a = { ...r, disableGutters: s.disableGutters },
      l = h5(a);
    return x(m5, { className: te(l.root, o), ownerState: a, ref: n, ...i });
  });
IS.muiName = "ListItemSecondaryAction";
const g5 = IS,
  y5 = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === "flex-start" && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
      !n.disablePadding && t.padding,
      n.hasSecondaryAction && t.secondaryAction,
    ];
  },
  v5 = (e) => {
    const {
      alignItems: t,
      classes: n,
      dense: r,
      disableGutters: o,
      disablePadding: i,
      divider: s,
      hasSecondaryAction: a,
    } = e;
    return ae(
      {
        root: [
          "root",
          r && "dense",
          !o && "gutters",
          !i && "padding",
          s && "divider",
          t === "flex-start" && "alignItemsFlexStart",
          a && "secondaryAction",
        ],
        container: ["container"],
      },
      c5,
      n
    );
  },
  S5 = q("div", { name: "MuiListItem", slot: "Root", overridesResolver: y5 })(
    Se(({ theme: e }) => ({
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      width: "100%",
      boxSizing: "border-box",
      textAlign: "left",
      variants: [
        {
          props: ({ ownerState: t }) => !t.disablePadding,
          style: { paddingTop: 8, paddingBottom: 8 },
        },
        {
          props: ({ ownerState: t }) => !t.disablePadding && t.dense,
          style: { paddingTop: 4, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: t }) => !t.disablePadding && !t.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: t }) =>
            !t.disablePadding && !!t.secondaryAction,
          style: { paddingRight: 48 },
        },
        {
          props: ({ ownerState: t }) => !!t.secondaryAction,
          style: { [`& > .${f5.root}`]: { paddingRight: 48 } },
        },
        {
          props: { alignItems: "flex-start" },
          style: { alignItems: "flex-start" },
        },
        {
          props: ({ ownerState: t }) => t.divider,
          style: {
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
            backgroundClip: "padding-box",
          },
        },
        {
          props: ({ ownerState: t }) => t.button,
          style: {
            transition: e.transitions.create("background-color", {
              duration: e.transitions.duration.shortest,
            }),
            "&:hover": {
              textDecoration: "none",
              backgroundColor: (e.vars || e).palette.action.hover,
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.hasSecondaryAction,
          style: { paddingRight: 48 },
        },
      ],
    }))
  ),
  w5 = q("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (e, t) => t.container,
  })({ position: "relative" }),
  b5 = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiListItem" }),
      {
        alignItems: o = "center",
        children: i,
        className: s,
        component: a,
        components: l = {},
        componentsProps: u = {},
        ContainerComponent: d = "li",
        ContainerProps: { className: c, ...f } = {},
        dense: w = !1,
        disableGutters: y = !1,
        disablePadding: v = !1,
        divider: C = !1,
        secondaryAction: h,
        slotProps: p = {},
        slots: m = {},
        ...b
      } = r,
      k = S.useContext(ho),
      P = S.useMemo(
        () => ({ dense: w || k.dense || !1, alignItems: o, disableGutters: y }),
        [o, k.dense, w, y]
      ),
      R = S.useRef(null),
      T = S.Children.toArray(i),
      M = T.length && Xa(T[T.length - 1], ["ListItemSecondaryAction"]),
      g = {
        ...r,
        alignItems: o,
        dense: P.dense,
        disableGutters: y,
        disablePadding: v,
        divider: C,
        hasSecondaryAction: M,
      },
      O = v5(g),
      I = bt(R, n),
      _ = m.root || l.Root || S5,
      W = p.root || u.root || {},
      A = { className: te(O.root, W.className, s), ...b };
    let L = a || "li";
    return M
      ? ((L = !A.component && !a ? "div" : L),
        d === "li" &&
          (L === "li"
            ? (L = "div")
            : A.component === "li" && (A.component = "div")),
        x(ho.Provider, {
          value: P,
          children: J(w5, {
            as: d,
            className: te(O.container, c),
            ref: I,
            ownerState: g,
            ...f,
            children: [
              x(_, {
                ...W,
                ...(!Us(_) && { as: L, ownerState: { ...g, ...W.ownerState } }),
                ...A,
                children: T,
              }),
              T.pop(),
            ],
          }),
        }))
      : x(ho.Provider, {
          value: P,
          children: J(_, {
            ...W,
            as: L,
            ref: I,
            ...(!Us(_) && { ownerState: { ...g, ...W.ownerState } }),
            ...A,
            children: [T, h && x(g5, { children: h })],
          }),
        });
  }),
  AS = b5,
  C5 = re("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
  Qg = C5,
  x5 = re("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]),
  Xg = x5;
function Gc(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
    ? t.nextElementSibling
    : n
    ? null
    : e.firstChild;
}
function Jg(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
    ? t.previousElementSibling
    : n
    ? null
    : e.lastChild;
}
function NS(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
      ? n[0] === t.keys[0]
      : n.startsWith(t.keys.join(""))
  );
}
function Vi(e, t, n, r, o, i) {
  let s = !1,
    a = o(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s) return !1;
      s = !0;
    }
    const l = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !NS(a, i) || l) a = o(e, a, n);
    else return a.focus(), !0;
  }
  return !1;
}
const k5 = S.forwardRef(function (t, n) {
    const {
        actions: r,
        autoFocus: o = !1,
        autoFocusItem: i = !1,
        children: s,
        className: a,
        disabledItemsFocusable: l = !1,
        disableListWrap: u = !1,
        onKeyDown: d,
        variant: c = "selectedMenu",
        ...f
      } = t,
      w = S.useRef(null),
      y = S.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null,
      });
    pr(() => {
      o && w.current.focus();
    }, [o]),
      S.useImperativeHandle(
        r,
        () => ({
          adjustStyleForScrollbar: (m, { direction: b }) => {
            const k = !w.current.style.width;
            if (m.clientHeight < w.current.clientHeight && k) {
              const P = `${J1(hr(m))}px`;
              (w.current.style[b === "rtl" ? "paddingLeft" : "paddingRight"] =
                P),
                (w.current.style.width = `calc(100% + ${P})`);
            }
            return w.current;
          },
        }),
        []
      );
    const v = (m) => {
        const b = w.current,
          k = m.key;
        if (m.ctrlKey || m.metaKey || m.altKey) {
          d && d(m);
          return;
        }
        const R = Nn(b).activeElement;
        if (k === "ArrowDown") m.preventDefault(), Vi(b, R, u, l, Gc);
        else if (k === "ArrowUp") m.preventDefault(), Vi(b, R, u, l, Jg);
        else if (k === "Home") m.preventDefault(), Vi(b, null, u, l, Gc);
        else if (k === "End") m.preventDefault(), Vi(b, null, u, l, Jg);
        else if (k.length === 1) {
          const T = y.current,
            M = k.toLowerCase(),
            g = performance.now();
          T.keys.length > 0 &&
            (g - T.lastTime > 500
              ? ((T.keys = []), (T.repeating = !0), (T.previousKeyMatched = !0))
              : T.repeating && M !== T.keys[0] && (T.repeating = !1)),
            (T.lastTime = g),
            T.keys.push(M);
          const O = R && !T.repeating && NS(R, T);
          T.previousKeyMatched && (O || Vi(b, R, !1, l, Gc, T))
            ? m.preventDefault()
            : (T.previousKeyMatched = !1);
        }
        d && d(m);
      },
      C = bt(w, n);
    let h = -1;
    S.Children.forEach(s, (m, b) => {
      if (!S.isValidElement(m)) {
        h === b && ((h += 1), h >= s.length && (h = -1));
        return;
      }
      m.props.disabled ||
        (((c === "selectedMenu" && m.props.selected) || h === -1) && (h = b)),
        h === b &&
          (m.props.disabled ||
            m.props.muiSkipListHighlight ||
            m.type.muiSkipListHighlight) &&
          ((h += 1), h >= s.length && (h = -1));
    });
    const p = S.Children.map(s, (m, b) => {
      if (b === h) {
        const k = {};
        return (
          i && (k.autoFocus = !0),
          m.props.tabIndex === void 0 &&
            c === "selectedMenu" &&
            (k.tabIndex = 0),
          S.cloneElement(m, k)
        );
      }
      return m;
    });
    return x(ih, {
      role: "menu",
      ref: C,
      className: a,
      onKeyDown: v,
      tabIndex: o ? 0 : -1,
      ...f,
      children: p,
    });
  }),
  E5 = k5;
function P5(e) {
  return se("MuiPopover", e);
}
re("MuiPopover", ["root", "paper"]);
function Zg(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.height / 2)
      : t === "bottom" && (n = e.height),
    n
  );
}
function ey(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.width / 2)
      : t === "right" && (n = e.width),
    n
  );
}
function ty(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function Yc(e) {
  return typeof e == "function" ? e() : e;
}
const R5 = (e) => {
    const { classes: t } = e;
    return ae({ root: ["root"], paper: ["paper"] }, P5, t);
  },
  T5 = q(RS, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  _S = q(Ei, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  $5 = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiPopover" }),
      {
        action: o,
        anchorEl: i,
        anchorOrigin: s = { vertical: "top", horizontal: "left" },
        anchorPosition: a,
        anchorReference: l = "anchorEl",
        children: u,
        className: d,
        container: c,
        elevation: f = 8,
        marginThreshold: w = 16,
        open: y,
        PaperProps: v = {},
        slots: C = {},
        slotProps: h = {},
        transformOrigin: p = { vertical: "top", horizontal: "left" },
        TransitionComponent: m = VA,
        transitionDuration: b = "auto",
        TransitionProps: { onEntering: k, ...P } = {},
        disableScrollLock: R = !1,
        ...T
      } = r,
      M = (h == null ? void 0 : h.paper) ?? v,
      g = S.useRef(),
      O = {
        ...r,
        anchorOrigin: s,
        anchorReference: l,
        elevation: f,
        marginThreshold: w,
        externalPaperSlotProps: M,
        transformOrigin: p,
        TransitionComponent: m,
        transitionDuration: b,
        TransitionProps: P,
      },
      I = R5(O),
      _ = S.useCallback(() => {
        if (l === "anchorPosition") return a;
        const de = Yc(i),
          ce = (
            de && de.nodeType === 1 ? de : Nn(g.current).body
          ).getBoundingClientRect();
        return {
          top: ce.top + Zg(ce, s.vertical),
          left: ce.left + ey(ce, s.horizontal),
        };
      }, [i, s.horizontal, s.vertical, a, l]),
      W = S.useCallback(
        (de) => ({
          vertical: Zg(de, p.vertical),
          horizontal: ey(de, p.horizontal),
        }),
        [p.horizontal, p.vertical]
      ),
      A = S.useCallback(
        (de) => {
          const be = { width: de.offsetWidth, height: de.offsetHeight },
            ce = W(be);
          if (l === "none")
            return { top: null, left: null, transformOrigin: ty(ce) };
          const Ne = _();
          let me = Ne.top - ce.vertical,
            Te = Ne.left - ce.horizontal;
          const ut = me + be.height,
            Ce = Te + be.width,
            E = hr(Yc(i)),
            $ = E.innerHeight - w,
            N = E.innerWidth - w;
          if (w !== null && me < w) {
            const H = me - w;
            (me -= H), (ce.vertical += H);
          } else if (w !== null && ut > $) {
            const H = ut - $;
            (me -= H), (ce.vertical += H);
          }
          if (w !== null && Te < w) {
            const H = Te - w;
            (Te -= H), (ce.horizontal += H);
          } else if (Ce > N) {
            const H = Ce - N;
            (Te -= H), (ce.horizontal += H);
          }
          return {
            top: `${Math.round(me)}px`,
            left: `${Math.round(Te)}px`,
            transformOrigin: ty(ce),
          };
        },
        [i, l, _, W, w]
      ),
      [L, V] = S.useState(y),
      U = S.useCallback(() => {
        const de = g.current;
        if (!de) return;
        const be = A(de);
        be.top !== null && de.style.setProperty("top", be.top),
          be.left !== null && (de.style.left = be.left),
          (de.style.transformOrigin = be.transformOrigin),
          V(!0);
      }, [A]);
    S.useEffect(
      () => (
        R && window.addEventListener("scroll", U),
        () => window.removeEventListener("scroll", U)
      ),
      [i, R, U]
    );
    const z = (de, be) => {
        k && k(de, be), U();
      },
      G = () => {
        V(!1);
      };
    S.useEffect(() => {
      y && U();
    }),
      S.useImperativeHandle(
        o,
        () =>
          y
            ? {
                updatePosition: () => {
                  U();
                },
              }
            : null,
        [y, U]
      ),
      S.useEffect(() => {
        if (!y) return;
        const de = Y1(() => {
            U();
          }),
          be = hr(i);
        return (
          be.addEventListener("resize", de),
          () => {
            de.clear(), be.removeEventListener("resize", de);
          }
        );
      }, [i, y, U]);
    let Z = b;
    b === "auto" && !m.muiSupportAuto && (Z = void 0);
    const oe = c || (i ? Nn(Yc(i)).body : void 0),
      fe = { slots: C, slotProps: { ...h, paper: M } },
      [ue, pe] = it("paper", {
        elementType: _S,
        externalForwardedProps: fe,
        additionalProps: {
          elevation: f,
          className: te(I.paper, M == null ? void 0 : M.className),
          style: L ? M.style : { ...M.style, opacity: 0 },
        },
        ownerState: O,
      }),
      [ke, { slotProps: Ee, ...Ge }] = it("root", {
        elementType: T5,
        externalForwardedProps: fe,
        additionalProps: {
          slotProps: { backdrop: { invisible: !0 } },
          container: oe,
          open: y,
        },
        ownerState: O,
        className: te(I.root, d),
      }),
      Oe = bt(g, pe.ref);
    return x(ke, {
      ...Ge,
      ...(!Us(ke) && { slotProps: Ee, disableScrollLock: R }),
      ...T,
      ref: n,
      children: x(m, {
        appear: !0,
        in: y,
        onEntering: z,
        onExited: G,
        timeout: Z,
        ...P,
        children: x(ue, { ...pe, ref: Oe, children: u }),
      }),
    });
  }),
  O5 = $5;
function M5(e) {
  return se("MuiMenu", e);
}
re("MuiMenu", ["root", "paper", "list"]);
const I5 = { vertical: "top", horizontal: "right" },
  A5 = { vertical: "top", horizontal: "left" },
  N5 = (e) => {
    const { classes: t } = e;
    return ae({ root: ["root"], paper: ["paper"], list: ["list"] }, M5, t);
  },
  _5 = q(O5, {
    shouldForwardProp: (e) => en(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  L5 = q(_S, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  F5 = q(E5, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  B5 = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiMenu" }),
      {
        autoFocus: o = !0,
        children: i,
        className: s,
        disableAutoFocusItem: a = !1,
        MenuListProps: l = {},
        onClose: u,
        open: d,
        PaperProps: c = {},
        PopoverClasses: f,
        transitionDuration: w = "auto",
        TransitionProps: { onEntering: y, ...v } = {},
        variant: C = "selectedMenu",
        slots: h = {},
        slotProps: p = {},
        ...m
      } = r,
      b = sS(),
      k = {
        ...r,
        autoFocus: o,
        disableAutoFocusItem: a,
        MenuListProps: l,
        onEntering: y,
        PaperProps: c,
        transitionDuration: w,
        TransitionProps: v,
        variant: C,
      },
      P = N5(k),
      R = o && !a && d,
      T = S.useRef(null),
      M = (L, V) => {
        T.current &&
          T.current.adjustStyleForScrollbar(L, {
            direction: b ? "rtl" : "ltr",
          }),
          y && y(L, V);
      },
      g = (L) => {
        L.key === "Tab" && (L.preventDefault(), u && u(L, "tabKeyDown"));
      };
    let O = -1;
    S.Children.map(i, (L, V) => {
      S.isValidElement(L) &&
        (L.props.disabled ||
          (((C === "selectedMenu" && L.props.selected) || O === -1) &&
            (O = V)));
    });
    const I = h.paper ?? L5,
      _ = p.paper ?? c,
      W = zs({
        elementType: h.root,
        externalSlotProps: p.root,
        ownerState: k,
        className: [P.root, s],
      }),
      A = zs({
        elementType: I,
        externalSlotProps: _,
        ownerState: k,
        className: P.paper,
      });
    return x(_5, {
      onClose: u,
      anchorOrigin: { vertical: "bottom", horizontal: b ? "right" : "left" },
      transformOrigin: b ? I5 : A5,
      slots: { paper: I, root: h.root },
      slotProps: { root: W, paper: A },
      open: d,
      ref: n,
      transitionDuration: w,
      TransitionProps: { onEntering: M, ...v },
      ownerState: k,
      ...m,
      classes: f,
      children: x(F5, {
        onKeyDown: g,
        actions: T,
        autoFocus: o && (O === -1 || a),
        autoFocusItem: R,
        variant: C,
        ...l,
        className: te(P.list, l.className),
        children: i,
      }),
    });
  }),
  LS = B5;
function D5(e) {
  return se("MuiMenuItem", e);
}
const z5 = re("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  ji = z5,
  U5 = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ];
  },
  W5 = (e) => {
    const {
        disabled: t,
        dense: n,
        divider: r,
        disableGutters: o,
        selected: i,
        classes: s,
      } = e,
      l = ae(
        {
          root: [
            "root",
            n && "dense",
            t && "disabled",
            !o && "gutters",
            r && "divider",
            i && "selected",
          ],
        },
        D5,
        s
      );
    return { ...s, ...l };
  },
  V5 = q(Pi, {
    shouldForwardProp: (e) => en(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: U5,
  })(
    Se(({ theme: e }) => ({
      ...e.typography.body1,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: "border-box",
      whiteSpace: "nowrap",
      "&:hover": {
        textDecoration: "none",
        backgroundColor: (e.vars || e).palette.action.hover,
        "@media (hover: none)": { backgroundColor: "transparent" },
      },
      [`&.${ji.selected}`]: {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
          : Ue(e.palette.primary.main, e.palette.action.selectedOpacity),
        [`&.${ji.focusVisible}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
            : Ue(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.focusOpacity
              ),
        },
      },
      [`&.${ji.selected}:hover`]: {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
          : Ue(
              e.palette.primary.main,
              e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
            ),
        "@media (hover: none)": {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : Ue(e.palette.primary.main, e.palette.action.selectedOpacity),
        },
      },
      [`&.${ji.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus,
      },
      [`&.${ji.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
      },
      [`& + .${Hg.root}`]: {
        marginTop: e.spacing(1),
        marginBottom: e.spacing(1),
      },
      [`& + .${Hg.inset}`]: { marginLeft: 52 },
      [`& .${Xg.root}`]: { marginTop: 0, marginBottom: 0 },
      [`& .${Xg.inset}`]: { paddingLeft: 36 },
      [`& .${Qg.root}`]: { minWidth: 36 },
      variants: [
        {
          props: ({ ownerState: t }) => !t.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: t }) => t.divider,
          style: {
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
            backgroundClip: "padding-box",
          },
        },
        {
          props: ({ ownerState: t }) => !t.dense,
          style: { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
        },
        {
          props: ({ ownerState: t }) => t.dense,
          style: {
            minHeight: 32,
            paddingTop: 4,
            paddingBottom: 4,
            ...e.typography.body2,
            [`& .${Qg.root} svg`]: { fontSize: "1.25rem" },
          },
        },
      ],
    }))
  ),
  j5 = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiMenuItem" }),
      {
        autoFocus: o = !1,
        component: i = "li",
        dense: s = !1,
        divider: a = !1,
        disableGutters: l = !1,
        focusVisibleClassName: u,
        role: d = "menuitem",
        tabIndex: c,
        className: f,
        ...w
      } = r,
      y = S.useContext(ho),
      v = S.useMemo(
        () => ({ dense: s || y.dense || !1, disableGutters: l }),
        [y.dense, s, l]
      ),
      C = S.useRef(null);
    pr(() => {
      o && C.current && C.current.focus();
    }, [o]);
    const h = { ...r, dense: v.dense, divider: a, disableGutters: l },
      p = W5(r),
      m = bt(C, n);
    let b;
    return (
      r.disabled || (b = c !== void 0 ? c : -1),
      x(ho.Provider, {
        value: v,
        children: x(V5, {
          ref: m,
          role: d,
          tabIndex: b,
          component: i,
          focusVisibleClassName: te(p.focusVisible, u),
          className: te(p.root, f),
          ...w,
          ownerState: h,
          classes: p,
        }),
      })
    );
  }),
  wf = j5;
function H5(e) {
  return se("MuiNativeSelect", e);
}
const K5 = re("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  sh = K5,
  q5 = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      a = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${Y(n)}`, i && "iconOpen", r && "disabled"],
      };
    return ae(a, H5, t);
  },
  FS = q("select")(({ theme: e }) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": { borderRadius: 0 },
    [`&.${sh.disabled}`]: { cursor: "default" },
    "&[multiple]": { height: "auto" },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
      backgroundColor: (e.vars || e).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: t }) =>
          t.variant !== "filled" && t.variant !== "outlined",
        style: { "&&&": { paddingRight: 24, minWidth: 16 } },
      },
      { props: { variant: "filled" }, style: { "&&&": { paddingRight: 32 } } },
      {
        props: { variant: "outlined" },
        style: {
          borderRadius: (e.vars || e).shape.borderRadius,
          "&:focus": { borderRadius: (e.vars || e).shape.borderRadius },
          "&&&": { paddingRight: 32 },
        },
      },
    ],
  })),
  G5 = q(FS, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: en,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.select,
        t[n.variant],
        n.error && t.error,
        { [`&.${sh.multiple}`]: t.multiple },
      ];
    },
  })({}),
  BS = q("svg")(({ theme: e }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (e.vars || e).palette.action.active,
    [`&.${sh.disabled}`]: { color: (e.vars || e).palette.action.disabled },
    variants: [
      {
        props: ({ ownerState: t }) => t.open,
        style: { transform: "rotate(180deg)" },
      },
      { props: { variant: "filled" }, style: { right: 7 } },
      { props: { variant: "outlined" }, style: { right: 7 } },
    ],
  })),
  Y5 = q(BS, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${Y(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })({}),
  Q5 = S.forwardRef(function (t, n) {
    const {
        className: r,
        disabled: o,
        error: i,
        IconComponent: s,
        inputRef: a,
        variant: l = "standard",
        ...u
      } = t,
      d = { ...t, disabled: o, variant: l, error: i },
      c = q5(d);
    return J(S.Fragment, {
      children: [
        x(G5, {
          ownerState: d,
          className: te(c.select, r),
          disabled: o,
          ref: a || n,
          ...u,
        }),
        t.multiple ? null : x(Y5, { as: s, ownerState: d, className: c.icon }),
      ],
    });
  }),
  X5 = Q5;
var ny;
const J5 = q("fieldset", { shouldForwardProp: en })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  Z5 = q("legend", { shouldForwardProp: en })(
    Se(({ theme: e }) => ({
      float: "unset",
      width: "auto",
      overflow: "hidden",
      variants: [
        {
          props: ({ ownerState: t }) => !t.withLabel,
          style: {
            padding: 0,
            lineHeight: "11px",
            transition: e.transitions.create("width", {
              duration: 150,
              easing: e.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: ({ ownerState: t }) => t.withLabel,
          style: {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: e.transitions.create("max-width", {
              duration: 50,
              easing: e.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.withLabel && t.notched,
          style: {
            maxWidth: "100%",
            transition: e.transitions.create("max-width", {
              duration: 100,
              easing: e.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        },
      ],
    }))
  );
function eN(e) {
  const {
      children: t,
      classes: n,
      className: r,
      label: o,
      notched: i,
      ...s
    } = e,
    a = o != null && o !== "",
    l = { ...e, notched: i, withLabel: a };
  return x(J5, {
    "aria-hidden": !0,
    className: r,
    ownerState: l,
    ...s,
    children: x(Z5, {
      ownerState: l,
      children: a
        ? x("span", { children: o })
        : ny ||
          (ny = x("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​",
          })),
    }),
  });
}
const tN = (e) => {
    const { classes: t } = e,
      r = ae(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        TM,
        t
      );
    return { ...t, ...r };
  },
  nN = q(nc, {
    shouldForwardProp: (e) => en(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: ec,
  })(
    Se(({ theme: e }) => {
      const t =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${Dn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${Dn.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : t,
          },
        },
        [`&.${Dn.focused} .${Dn.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(e.palette)
            .filter(wt())
            .map(([n]) => ({
              props: { color: n },
              style: {
                [`&.${Dn.focused} .${Dn.notchedOutline}`]: {
                  borderColor: (e.vars || e).palette[n].main,
                },
              },
            })),
          {
            props: {},
            style: {
              [`&.${Dn.error} .${Dn.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.error.main,
              },
              [`&.${Dn.disabled} .${Dn.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.action.disabled,
              },
            },
          },
          {
            props: ({ ownerState: n }) => n.startAdornment,
            style: { paddingLeft: 14 },
          },
          {
            props: ({ ownerState: n }) => n.endAdornment,
            style: { paddingRight: 14 },
          },
          {
            props: ({ ownerState: n }) => n.multiline,
            style: { padding: "16.5px 14px" },
          },
          {
            props: ({ ownerState: n, size: r }) => n.multiline && r === "small",
            style: { padding: "8.5px 14px" },
          },
        ],
      };
    })
  ),
  rN = q(eN, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline,
  })(
    Se(({ theme: e }) => {
      const t =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        borderColor: e.vars
          ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
          : t,
      };
    })
  ),
  oN = q(rc, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: tc,
  })(
    Se(({ theme: e }) => ({
      padding: "16.5px 14px",
      ...(!e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      }),
      ...(e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        { props: { size: "small" }, style: { padding: "8.5px 14px" } },
        { props: ({ ownerState: t }) => t.multiline, style: { padding: 0 } },
        {
          props: ({ ownerState: t }) => t.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: t }) => t.endAdornment,
          style: { paddingRight: 0 },
        },
      ],
    }))
  ),
  DS = S.forwardRef(function (t, n) {
    var r;
    const o = le({ props: t, name: "MuiOutlinedInput" }),
      {
        components: i = {},
        fullWidth: s = !1,
        inputComponent: a = "input",
        label: l,
        multiline: u = !1,
        notched: d,
        slots: c = {},
        type: f = "text",
        ...w
      } = o,
      y = tN(o),
      v = Yr(),
      C = Ri({
        props: o,
        muiFormControl: v,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      h = {
        ...o,
        color: C.color || "primary",
        disabled: C.disabled,
        error: C.error,
        focused: C.focused,
        formControl: v,
        fullWidth: s,
        hiddenLabel: C.hiddenLabel,
        multiline: u,
        size: C.size,
        type: f,
      },
      p = c.root ?? i.Root ?? nN,
      m = c.input ?? i.Input ?? oN;
    return x(oh, {
      slots: { root: p, input: m },
      renderSuffix: (b) =>
        x(rN, {
          ownerState: h,
          className: y.notchedOutline,
          label:
            l != null && l !== "" && C.required
              ? r || (r = J(S.Fragment, { children: [l, " ", "*"] }))
              : l,
          notched:
            typeof d < "u" ? d : !!(b.startAdornment || b.filled || b.focused),
        }),
      fullWidth: s,
      inputComponent: a,
      multiline: u,
      ref: n,
      type: f,
      ...w,
      classes: { ...y, notchedOutline: null },
    });
  });
DS.muiName = "Input";
const zS = DS;
function iN(e) {
  return se("MuiPagination", e);
}
re("MuiPagination", ["root", "ul", "outlined", "text"]);
function sN(e = {}) {
  const {
      boundaryCount: t = 1,
      componentName: n = "usePagination",
      count: r = 1,
      defaultPage: o = 1,
      disabled: i = !1,
      hideNextButton: s = !1,
      hidePrevButton: a = !1,
      onChange: l,
      page: u,
      showFirstButton: d = !1,
      showLastButton: c = !1,
      siblingCount: f = 1,
      ...w
    } = e,
    [y, v] = Fl({ controlled: u, default: o, name: n, state: "page" }),
    C = (M, g) => {
      u || v(g), l && l(M, g);
    },
    h = (M, g) => {
      const O = g - M + 1;
      return Array.from({ length: O }, (I, _) => M + _);
    },
    p = h(1, Math.min(t, r)),
    m = h(Math.max(r - t + 1, t + 1), r),
    b = Math.max(Math.min(y - f, r - t - f * 2 - 1), t + 2),
    k = Math.min(Math.max(y + f, t + f * 2 + 2), r - t - 1),
    P = [
      ...(d ? ["first"] : []),
      ...(a ? [] : ["previous"]),
      ...p,
      ...(b > t + 2 ? ["start-ellipsis"] : t + 1 < r - t ? [t + 1] : []),
      ...h(b, k),
      ...(k < r - t - 1 ? ["end-ellipsis"] : r - t > t ? [r - t] : []),
      ...m,
      ...(s ? [] : ["next"]),
      ...(c ? ["last"] : []),
    ],
    R = (M) => {
      switch (M) {
        case "first":
          return 1;
        case "previous":
          return y - 1;
        case "next":
          return y + 1;
        case "last":
          return r;
        default:
          return null;
      }
    };
  return {
    items: P.map((M) =>
      typeof M == "number"
        ? {
            onClick: (g) => {
              C(g, M);
            },
            type: "page",
            page: M,
            selected: M === y,
            disabled: i,
            "aria-current": M === y ? "page" : void 0,
          }
        : {
            onClick: (g) => {
              C(g, R(M));
            },
            type: M,
            page: R(M),
            selected: !1,
            disabled:
              i ||
              (!M.includes("ellipsis") &&
                (M === "next" || M === "last" ? y >= r : y <= 1)),
          }
    ),
    ...w,
  };
}
function aN(e) {
  return se("MuiPaginationItem", e);
}
const lN = re("MuiPaginationItem", [
    "root",
    "page",
    "sizeSmall",
    "sizeLarge",
    "text",
    "textPrimary",
    "textSecondary",
    "outlined",
    "outlinedPrimary",
    "outlinedSecondary",
    "rounded",
    "ellipsis",
    "firstLast",
    "previousNext",
    "focusVisible",
    "disabled",
    "selected",
    "icon",
    "colorPrimary",
    "colorSecondary",
  ]),
  Dt = lN,
  uN = Je(
    x("path", {
      d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z",
    }),
    "FirstPage"
  ),
  cN = Je(
    x("path", {
      d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z",
    }),
    "LastPage"
  ),
  dN = Je(
    x("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }),
    "NavigateBefore"
  ),
  fN = Je(
    x("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }),
    "NavigateNext"
  ),
  US = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[n.variant],
      t[`size${Y(n.size)}`],
      n.variant === "text" && t[`text${Y(n.color)}`],
      n.variant === "outlined" && t[`outlined${Y(n.color)}`],
      n.shape === "rounded" && t.rounded,
      n.type === "page" && t.page,
      (n.type === "start-ellipsis" || n.type === "end-ellipsis") && t.ellipsis,
      (n.type === "previous" || n.type === "next") && t.previousNext,
      (n.type === "first" || n.type === "last") && t.firstLast,
    ];
  },
  pN = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        selected: o,
        size: i,
        shape: s,
        type: a,
        variant: l,
      } = e,
      u = {
        root: [
          "root",
          `size${Y(i)}`,
          l,
          s,
          n !== "standard" && `color${Y(n)}`,
          n !== "standard" && `${l}${Y(n)}`,
          r && "disabled",
          o && "selected",
          {
            page: "page",
            first: "firstLast",
            last: "firstLast",
            "start-ellipsis": "ellipsis",
            "end-ellipsis": "ellipsis",
            previous: "previousNext",
            next: "previousNext",
          }[a],
        ],
        icon: ["icon"],
      };
    return ae(u, aN, t);
  },
  hN = q("div", {
    name: "MuiPaginationItem",
    slot: "Root",
    overridesResolver: US,
  })(
    Se(({ theme: e }) => ({
      ...e.typography.body2,
      borderRadius: 32 / 2,
      textAlign: "center",
      boxSizing: "border-box",
      minWidth: 32,
      padding: "0 6px",
      margin: "0 3px",
      color: (e.vars || e).palette.text.primary,
      height: "auto",
      [`&.${Dt.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
      },
      variants: [
        {
          props: { size: "small" },
          style: {
            minWidth: 26,
            borderRadius: 26 / 2,
            margin: "0 1px",
            padding: "0 4px",
          },
        },
        {
          props: { size: "large" },
          style: {
            minWidth: 40,
            borderRadius: 40 / 2,
            padding: "0 10px",
            fontSize: e.typography.pxToRem(15),
          },
        },
      ],
    }))
  ),
  mN = q(Pi, {
    name: "MuiPaginationItem",
    slot: "Root",
    overridesResolver: US,
  })(
    Se(({ theme: e }) => ({
      ...e.typography.body2,
      borderRadius: 32 / 2,
      textAlign: "center",
      boxSizing: "border-box",
      minWidth: 32,
      height: 32,
      padding: "0 6px",
      margin: "0 3px",
      color: (e.vars || e).palette.text.primary,
      [`&.${Dt.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus,
      },
      [`&.${Dt.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
      },
      transition: e.transitions.create(["color", "background-color"], {
        duration: e.transitions.duration.short,
      }),
      "&:hover": {
        backgroundColor: (e.vars || e).palette.action.hover,
        "@media (hover: none)": { backgroundColor: "transparent" },
      },
      [`&.${Dt.selected}`]: {
        backgroundColor: (e.vars || e).palette.action.selected,
        "&:hover": {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : Ue(
                e.palette.action.selected,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": {
            backgroundColor: (e.vars || e).palette.action.selected,
          },
        },
        [`&.${Dt.focusVisible}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
            : Ue(
                e.palette.action.selected,
                e.palette.action.selectedOpacity + e.palette.action.focusOpacity
              ),
        },
        [`&.${Dt.disabled}`]: {
          opacity: 1,
          color: (e.vars || e).palette.action.disabled,
          backgroundColor: (e.vars || e).palette.action.selected,
        },
      },
      variants: [
        {
          props: { size: "small" },
          style: {
            minWidth: 26,
            height: 26,
            borderRadius: 26 / 2,
            margin: "0 1px",
            padding: "0 4px",
          },
        },
        {
          props: { size: "large" },
          style: {
            minWidth: 40,
            height: 40,
            borderRadius: 40 / 2,
            padding: "0 10px",
            fontSize: e.typography.pxToRem(15),
          },
        },
        {
          props: { shape: "rounded" },
          style: { borderRadius: (e.vars || e).shape.borderRadius },
        },
        {
          props: { variant: "outlined" },
          style: {
            border: e.vars
              ? `1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : `1px solid ${
                  e.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.23)"
                    : "rgba(255, 255, 255, 0.23)"
                }`,
            [`&.${Dt.selected}`]: {
              [`&.${Dt.disabled}`]: {
                borderColor: (e.vars || e).palette.action.disabledBackground,
                color: (e.vars || e).palette.action.disabled,
              },
            },
          },
        },
        {
          props: { variant: "text" },
          style: {
            [`&.${Dt.selected}`]: {
              [`&.${Dt.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
              },
            },
          },
        },
        ...Object.entries(e.palette)
          .filter(wt(["dark", "contrastText"]))
          .map(([t]) => ({
            props: { variant: "text", color: t },
            style: {
              [`&.${Dt.selected}`]: {
                color: (e.vars || e).palette[t].contrastText,
                backgroundColor: (e.vars || e).palette[t].main,
                "&:hover": {
                  backgroundColor: (e.vars || e).palette[t].dark,
                  "@media (hover: none)": {
                    backgroundColor: (e.vars || e).palette[t].main,
                  },
                },
                [`&.${Dt.focusVisible}`]: {
                  backgroundColor: (e.vars || e).palette[t].dark,
                },
                [`&.${Dt.disabled}`]: {
                  color: (e.vars || e).palette.action.disabled,
                },
              },
            },
          })),
        ...Object.entries(e.palette)
          .filter(wt(["light"]))
          .map(([t]) => ({
            props: { variant: "outlined", color: t },
            style: {
              [`&.${Dt.selected}`]: {
                color: (e.vars || e).palette[t].main,
                border: `1px solid ${
                  e.vars
                    ? `rgba(${e.vars.palette[t].mainChannel} / 0.5)`
                    : Ue(e.palette[t].main, 0.5)
                }`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.activatedOpacity})`
                  : Ue(e.palette[t].main, e.palette.action.activatedOpacity),
                "&:hover": {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[t].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                    : Ue(
                        e.palette[t].main,
                        e.palette.action.activatedOpacity +
                          e.palette.action.focusOpacity
                      ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
                [`&.${Dt.focusVisible}`]: {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[t].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                    : Ue(
                        e.palette[t].main,
                        e.palette.action.activatedOpacity +
                          e.palette.action.focusOpacity
                      ),
                },
              },
            },
          })),
      ],
    }))
  ),
  gN = q("div", {
    name: "MuiPaginationItem",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon,
  })(
    Se(({ theme: e }) => ({
      fontSize: e.typography.pxToRem(20),
      margin: "0 -8px",
      variants: [
        {
          props: { size: "small" },
          style: { fontSize: e.typography.pxToRem(18) },
        },
        {
          props: { size: "large" },
          style: { fontSize: e.typography.pxToRem(22) },
        },
      ],
    }))
  ),
  yN = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiPaginationItem" }),
      {
        className: o,
        color: i = "standard",
        component: s,
        components: a = {},
        disabled: l = !1,
        page: u,
        selected: d = !1,
        shape: c = "circular",
        size: f = "medium",
        slots: w = {},
        slotProps: y = {},
        type: v = "page",
        variant: C = "text",
        ...h
      } = r,
      p = {
        ...r,
        color: i,
        disabled: l,
        selected: d,
        shape: c,
        size: f,
        type: v,
        variant: C,
      },
      m = sS(),
      b = pN(p),
      k = {
        slots: {
          previous: w.previous ?? a.previous,
          next: w.next ?? a.next,
          first: w.first ?? a.first,
          last: w.last ?? a.last,
        },
        slotProps: y,
      },
      [P, R] = it("previous", {
        elementType: dN,
        externalForwardedProps: k,
        ownerState: p,
      }),
      [T, M] = it("next", {
        elementType: fN,
        externalForwardedProps: k,
        ownerState: p,
      }),
      [g, O] = it("first", {
        elementType: uN,
        externalForwardedProps: k,
        ownerState: p,
      }),
      [I, _] = it("last", {
        elementType: cN,
        externalForwardedProps: k,
        ownerState: p,
      }),
      W = m
        ? { previous: "next", next: "previous", first: "last", last: "first" }[
            v
          ]
        : v,
      A = { previous: P, next: T, first: g, last: I }[W],
      L = { previous: R, next: M, first: O, last: _ }[W];
    return v === "start-ellipsis" || v === "end-ellipsis"
      ? x(hN, {
          ref: n,
          ownerState: p,
          className: te(b.root, o),
          children: "…",
        })
      : J(mN, {
          ref: n,
          ownerState: p,
          component: s,
          disabled: l,
          className: te(b.root, o),
          ...h,
          children: [
            v === "page" && u,
            A ? x(gN, { ...L, className: b.icon, as: A }) : null,
          ],
        });
  }),
  vN = yN,
  SN = (e) => {
    const { classes: t, variant: n } = e;
    return ae({ root: ["root", n], ul: ["ul"] }, iN, t);
  },
  wN = q("nav", {
    name: "MuiPagination",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant]];
    },
  })({}),
  bN = q("ul", {
    name: "MuiPagination",
    slot: "Ul",
    overridesResolver: (e, t) => t.ul,
  })({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    padding: 0,
    margin: 0,
    listStyle: "none",
  });
function CN(e, t, n) {
  return e === "page" ? `${n ? "" : "Go to "}page ${t}` : `Go to ${e} page`;
}
const xN = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiPagination" }),
      {
        boundaryCount: o = 1,
        className: i,
        color: s = "standard",
        count: a = 1,
        defaultPage: l = 1,
        disabled: u = !1,
        getItemAriaLabel: d = CN,
        hideNextButton: c = !1,
        hidePrevButton: f = !1,
        onChange: w,
        page: y,
        renderItem: v = (g) => x(vN, { ...g }),
        shape: C = "circular",
        showFirstButton: h = !1,
        showLastButton: p = !1,
        siblingCount: m = 1,
        size: b = "medium",
        variant: k = "text",
        ...P
      } = r,
      { items: R } = sN({ ...r, componentName: "Pagination" }),
      T = {
        ...r,
        boundaryCount: o,
        color: s,
        count: a,
        defaultPage: l,
        disabled: u,
        getItemAriaLabel: d,
        hideNextButton: c,
        hidePrevButton: f,
        renderItem: v,
        shape: C,
        showFirstButton: h,
        showLastButton: p,
        siblingCount: m,
        size: b,
        variant: k,
      },
      M = SN(T);
    return x(wN, {
      "aria-label": "pagination navigation",
      className: te(M.root, i),
      ownerState: T,
      ref: n,
      ...P,
      children: x(bN, {
        className: M.ul,
        ownerState: T,
        children: R.map((g, O) =>
          x(
            "li",
            {
              children: v({
                ...g,
                color: s,
                "aria-label": d(g.type, g.page, g.selected),
                shape: C,
                size: b,
                variant: k,
              }),
            },
            O
          )
        ),
      }),
    });
  }),
  WS = xN;
function VS(e) {
  return se("MuiSelect", e);
}
const Hi = re("MuiSelect", [
  "root",
  "select",
  "multiple",
  "filled",
  "outlined",
  "standard",
  "disabled",
  "focused",
  "icon",
  "iconOpen",
  "iconFilled",
  "iconOutlined",
  "iconStandard",
  "nativeInput",
  "error",
]);
var ry;
const kN = q(FS, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`&.${Hi.select}`]: t.select },
        { [`&.${Hi.select}`]: t[n.variant] },
        { [`&.${Hi.error}`]: t.error },
        { [`&.${Hi.multiple}`]: t.multiple },
      ];
    },
  })({
    [`&.${Hi.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  EN = q(BS, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${Y(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })({}),
  PN = q("input", {
    shouldForwardProp: (e) => gS(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function oy(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function RN(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const TN = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      a = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${Y(n)}`, i && "iconOpen", r && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return ae(a, VS, t);
  },
  $N = S.forwardRef(function (t, n) {
    var sa;
    const {
        "aria-describedby": r,
        "aria-label": o,
        autoFocus: i,
        autoWidth: s,
        children: a,
        className: l,
        defaultOpen: u,
        defaultValue: d,
        disabled: c,
        displayEmpty: f,
        error: w = !1,
        IconComponent: y,
        inputRef: v,
        labelId: C,
        MenuProps: h = {},
        multiple: p,
        name: m,
        onBlur: b,
        onChange: k,
        onClose: P,
        onFocus: R,
        onOpen: T,
        open: M,
        readOnly: g,
        renderValue: O,
        required: I,
        SelectDisplayProps: _ = {},
        tabIndex: W,
        type: A,
        value: L,
        variant: V = "standard",
        ...U
      } = t,
      [z, G] = Fl({ controlled: L, default: d, name: "Select" }),
      [Z, oe] = Fl({ controlled: M, default: u, name: "Select" }),
      fe = S.useRef(null),
      ue = S.useRef(null),
      [pe, ke] = S.useState(null),
      { current: Ee } = S.useRef(M != null),
      [Ge, Oe] = S.useState(),
      de = bt(n, v),
      be = S.useCallback((ne) => {
        (ue.current = ne), ne && ke(ne);
      }, []),
      ce = pe == null ? void 0 : pe.parentNode;
    S.useImperativeHandle(
      de,
      () => ({
        focus: () => {
          ue.current.focus();
        },
        node: fe.current,
        value: z,
      }),
      [z]
    ),
      S.useEffect(() => {
        u &&
          Z &&
          pe &&
          !Ee &&
          (Oe(s ? null : ce.clientWidth), ue.current.focus());
      }, [pe, s]),
      S.useEffect(() => {
        i && ue.current.focus();
      }, [i]),
      S.useEffect(() => {
        if (!C) return;
        const ne = Nn(ue.current).getElementById(C);
        if (ne) {
          const Ve = () => {
            getSelection().isCollapsed && ue.current.focus();
          };
          return (
            ne.addEventListener("click", Ve),
            () => {
              ne.removeEventListener("click", Ve);
            }
          );
        }
      }, [C]);
    const Ne = (ne, Ve) => {
        ne ? T && T(Ve) : P && P(Ve),
          Ee || (Oe(s ? null : ce.clientWidth), oe(ne));
      },
      me = (ne) => {
        ne.button === 0 &&
          (ne.preventDefault(), ue.current.focus(), Ne(!0, ne));
      },
      Te = (ne) => {
        Ne(!1, ne);
      },
      ut = S.Children.toArray(a),
      Ce = (ne) => {
        const Ve = ut.find((kt) => kt.props.value === ne.target.value);
        Ve !== void 0 && (G(Ve.props.value), k && k(ne, Ve));
      },
      E = (ne) => (Ve) => {
        let kt;
        if (Ve.currentTarget.hasAttribute("tabindex")) {
          if (p) {
            kt = Array.isArray(z) ? z.slice() : [];
            const Po = z.indexOf(ne.props.value);
            Po === -1 ? kt.push(ne.props.value) : kt.splice(Po, 1);
          } else kt = ne.props.value;
          if (
            (ne.props.onClick && ne.props.onClick(Ve), z !== kt && (G(kt), k))
          ) {
            const Po = Ve.nativeEvent || Ve,
              hh = new Po.constructor(Po.type, Po);
            Object.defineProperty(hh, "target", {
              writable: !0,
              value: { value: kt, name: m },
            }),
              k(hh, ne);
          }
          p || Ne(!1, Ve);
        }
      },
      $ = (ne) => {
        g ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].includes(ne.key) &&
            (ne.preventDefault(), Ne(!0, ne)));
      },
      N = pe !== null && Z,
      H = (ne) => {
        !N &&
          b &&
          (Object.defineProperty(ne, "target", {
            writable: !0,
            value: { value: z, name: m },
          }),
          b(ne));
      };
    delete U["aria-invalid"];
    let B, j;
    const X = [];
    let ie = !1;
    (Ul({ value: z }) || f) && (O ? (B = O(z)) : (ie = !0));
    const Le = ut.map((ne) => {
      if (!S.isValidElement(ne)) return null;
      let Ve;
      if (p) {
        if (!Array.isArray(z)) throw new Error(dr(2));
        (Ve = z.some((kt) => oy(kt, ne.props.value))),
          Ve && ie && X.push(ne.props.children);
      } else (Ve = oy(z, ne.props.value)), Ve && ie && (j = ne.props.children);
      return S.cloneElement(ne, {
        "aria-selected": Ve ? "true" : "false",
        onClick: E(ne),
        onKeyUp: (kt) => {
          kt.key === " " && kt.preventDefault(),
            ne.props.onKeyUp && ne.props.onKeyUp(kt);
        },
        role: "option",
        selected: Ve,
        value: void 0,
        "data-value": ne.props.value,
      });
    });
    ie &&
      (p
        ? X.length === 0
          ? (B = null)
          : (B = X.reduce(
              (ne, Ve, kt) => (
                ne.push(Ve), kt < X.length - 1 && ne.push(", "), ne
              ),
              []
            ))
        : (B = j));
    let ge = Ge;
    !s && Ee && pe && (ge = ce.clientWidth);
    let $e;
    typeof W < "u" ? ($e = W) : ($e = c ? null : 0);
    const Ze = _.id || (m ? `mui-component-select-${m}` : void 0),
      xt = { ...t, variant: V, value: z, open: N, error: w },
      ye = TN(xt),
      yt = {
        ...h.PaperProps,
        ...((sa = h.slotProps) == null ? void 0 : sa.paper),
      },
      yr = Xu();
    return J(S.Fragment, {
      children: [
        x(kN, {
          as: "div",
          ref: be,
          tabIndex: $e,
          role: "combobox",
          "aria-controls": N ? yr : void 0,
          "aria-disabled": c ? "true" : void 0,
          "aria-expanded": N ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": o,
          "aria-labelledby": [C, Ze].filter(Boolean).join(" ") || void 0,
          "aria-describedby": r,
          "aria-required": I ? "true" : void 0,
          "aria-invalid": w ? "true" : void 0,
          onKeyDown: $,
          onMouseDown: c || g ? null : me,
          onBlur: H,
          onFocus: R,
          ..._,
          ownerState: xt,
          className: te(_.className, ye.select, l),
          id: Ze,
          children: RN(B)
            ? ry ||
              (ry = x("span", {
                className: "notranslate",
                "aria-hidden": !0,
                children: "​",
              }))
            : B,
        }),
        x(PN, {
          "aria-invalid": w,
          value: Array.isArray(z) ? z.join(",") : z,
          name: m,
          ref: fe,
          "aria-hidden": !0,
          onChange: Ce,
          tabIndex: -1,
          disabled: c,
          className: ye.nativeInput,
          autoFocus: i,
          required: I,
          ...U,
          ownerState: xt,
        }),
        x(EN, { as: y, className: ye.icon, ownerState: xt }),
        x(LS, {
          id: `menu-${m || ""}`,
          anchorEl: ce,
          open: N,
          onClose: Te,
          anchorOrigin: { vertical: "bottom", horizontal: "center" },
          transformOrigin: { vertical: "top", horizontal: "center" },
          ...h,
          MenuListProps: {
            "aria-labelledby": C,
            role: "listbox",
            "aria-multiselectable": p ? "true" : void 0,
            disableListWrap: !0,
            id: yr,
            ...h.MenuListProps,
          },
          slotProps: {
            ...h.slotProps,
            paper: {
              ...yt,
              style: { minWidth: ge, ...(yt != null ? yt.style : null) },
            },
          },
          children: Le,
        }),
      ],
    });
  }),
  ON = $N,
  MN = (e) => {
    const { classes: t } = e,
      r = ae({ root: ["root"] }, VS, t);
    return { ...t, ...r };
  },
  ah = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => en(e) && e !== "variant",
    slot: "Root",
  },
  IN = q(MS, ah)(""),
  AN = q(zS, ah)(""),
  NN = q($S, ah)(""),
  jS = S.forwardRef(function (t, n) {
    const r = le({ name: "MuiSelect", props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: s = {},
        className: a,
        defaultOpen: l = !1,
        displayEmpty: u = !1,
        IconComponent: d = IM,
        id: c,
        input: f,
        inputProps: w,
        label: y,
        labelId: v,
        MenuProps: C,
        multiple: h = !1,
        native: p = !1,
        onClose: m,
        onOpen: b,
        open: k,
        renderValue: P,
        SelectDisplayProps: R,
        variant: T = "outlined",
        ...M
      } = r,
      g = p ? X5 : ON,
      O = Yr(),
      I = Ri({ props: r, muiFormControl: O, states: ["variant", "error"] }),
      _ = I.variant || T,
      W = { ...r, variant: _, classes: s },
      A = MN(W),
      { root: L, ...V } = A,
      U =
        f ||
        {
          standard: x(IN, { ownerState: W }),
          outlined: x(AN, { label: y, ownerState: W }),
          filled: x(NN, { ownerState: W }),
        }[_],
      z = bt(n, na(U));
    return x(S.Fragment, {
      children: S.cloneElement(U, {
        inputComponent: g,
        inputProps: {
          children: i,
          error: I.error,
          IconComponent: d,
          variant: _,
          type: void 0,
          multiple: h,
          ...(p
            ? { id: c }
            : {
                autoWidth: o,
                defaultOpen: l,
                displayEmpty: u,
                labelId: v,
                MenuProps: C,
                onClose: m,
                onOpen: b,
                open: k,
                renderValue: P,
                SelectDisplayProps: { id: c, ...R },
              }),
          ...w,
          classes: w ? Lt(V, w.classes) : V,
          ...(f ? f.props.inputProps : {}),
        },
        ...(((h && p) || u) && _ === "outlined" ? { notched: !0 } : {}),
        ref: z,
        className: te(U.props.className, a, A.root),
        ...(!f && { variant: _ }),
        ...M,
      }),
    });
  });
jS.muiName = "Select";
const _N = jS,
  LN = S.createContext(),
  HS = LN;
function FN(e) {
  return se("MuiTable", e);
}
re("MuiTable", ["root", "stickyHeader"]);
const BN = (e) => {
    const { classes: t, stickyHeader: n } = e;
    return ae({ root: ["root", n && "stickyHeader"] }, FN, t);
  },
  DN = q("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.stickyHeader && t.stickyHeader];
    },
  })(
    Se(({ theme: e }) => ({
      display: "table",
      width: "100%",
      borderCollapse: "collapse",
      borderSpacing: 0,
      "& caption": {
        ...e.typography.body2,
        padding: e.spacing(2),
        color: (e.vars || e).palette.text.secondary,
        textAlign: "left",
        captionSide: "bottom",
      },
      variants: [
        {
          props: ({ ownerState: t }) => t.stickyHeader,
          style: { borderCollapse: "separate" },
        },
      ],
    }))
  ),
  iy = "table",
  zN = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiTable" }),
      {
        className: o,
        component: i = iy,
        padding: s = "normal",
        size: a = "medium",
        stickyHeader: l = !1,
        ...u
      } = r,
      d = { ...r, component: i, padding: s, size: a, stickyHeader: l },
      c = BN(d),
      f = S.useMemo(
        () => ({ padding: s, size: a, stickyHeader: l }),
        [s, a, l]
      );
    return x(HS.Provider, {
      value: f,
      children: x(DN, {
        as: i,
        role: i === iy ? null : "table",
        ref: n,
        className: te(c.root, o),
        ownerState: d,
        ...u,
      }),
    });
  }),
  KS = zN,
  UN = S.createContext(),
  oc = UN;
function WN(e) {
  return se("MuiTableBody", e);
}
re("MuiTableBody", ["root"]);
const VN = (e) => {
    const { classes: t } = e;
    return ae({ root: ["root"] }, WN, t);
  },
  jN = q("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ display: "table-row-group" }),
  HN = { variant: "body" },
  sy = "tbody",
  KN = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiTableBody" }),
      { className: o, component: i = sy, ...s } = r,
      a = { ...r, component: i },
      l = VN(a);
    return x(oc.Provider, {
      value: HN,
      children: x(jN, {
        className: te(l.root, o),
        as: i,
        ref: n,
        role: i === sy ? null : "rowgroup",
        ownerState: a,
        ...s,
      }),
    });
  }),
  qS = KN;
function qN(e) {
  return se("MuiTableCell", e);
}
const GN = re("MuiTableCell", [
    "root",
    "head",
    "body",
    "footer",
    "sizeSmall",
    "sizeMedium",
    "paddingCheckbox",
    "paddingNone",
    "alignLeft",
    "alignCenter",
    "alignRight",
    "alignJustify",
    "stickyHeader",
  ]),
  YN = GN,
  QN = (e) => {
    const {
        classes: t,
        variant: n,
        align: r,
        padding: o,
        size: i,
        stickyHeader: s,
      } = e,
      a = {
        root: [
          "root",
          n,
          s && "stickyHeader",
          r !== "inherit" && `align${Y(r)}`,
          o !== "normal" && `padding${Y(o)}`,
          `size${Y(i)}`,
        ],
      };
    return ae(a, qN, t);
  },
  XN = q("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`size${Y(n.size)}`],
        n.padding !== "normal" && t[`padding${Y(n.padding)}`],
        n.align !== "inherit" && t[`align${Y(n.align)}`],
        n.stickyHeader && t.stickyHeader,
      ];
    },
  })(
    Se(({ theme: e }) => ({
      ...e.typography.body2,
      display: "table-cell",
      verticalAlign: "inherit",
      borderBottom: e.vars
        ? `1px solid ${e.vars.palette.TableCell.border}`
        : `1px solid
    ${
      e.palette.mode === "light"
        ? mi(Ue(e.palette.divider, 1), 0.88)
        : hi(Ue(e.palette.divider, 1), 0.68)
    }`,
      textAlign: "left",
      padding: 16,
      variants: [
        {
          props: { variant: "head" },
          style: {
            color: (e.vars || e).palette.text.primary,
            lineHeight: e.typography.pxToRem(24),
            fontWeight: e.typography.fontWeightMedium,
          },
        },
        {
          props: { variant: "body" },
          style: { color: (e.vars || e).palette.text.primary },
        },
        {
          props: { variant: "footer" },
          style: {
            color: (e.vars || e).palette.text.secondary,
            lineHeight: e.typography.pxToRem(21),
            fontSize: e.typography.pxToRem(12),
          },
        },
        {
          props: { size: "small" },
          style: {
            padding: "6px 16px",
            [`&.${YN.paddingCheckbox}`]: {
              width: 24,
              padding: "0 12px 0 16px",
              "& > *": { padding: 0 },
            },
          },
        },
        {
          props: { padding: "checkbox" },
          style: { width: 48, padding: "0 0 0 4px" },
        },
        { props: { padding: "none" }, style: { padding: 0 } },
        { props: { align: "left" }, style: { textAlign: "left" } },
        { props: { align: "center" }, style: { textAlign: "center" } },
        {
          props: { align: "right" },
          style: { textAlign: "right", flexDirection: "row-reverse" },
        },
        { props: { align: "justify" }, style: { textAlign: "justify" } },
        {
          props: ({ ownerState: t }) => t.stickyHeader,
          style: {
            position: "sticky",
            top: 0,
            zIndex: 2,
            backgroundColor: (e.vars || e).palette.background.default,
          },
        },
      ],
    }))
  ),
  JN = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiTableCell" }),
      {
        align: o = "inherit",
        className: i,
        component: s,
        padding: a,
        scope: l,
        size: u,
        sortDirection: d,
        variant: c,
        ...f
      } = r,
      w = S.useContext(HS),
      y = S.useContext(oc),
      v = y && y.variant === "head";
    let C;
    s ? (C = s) : (C = v ? "th" : "td");
    let h = l;
    C === "td" ? (h = void 0) : !h && v && (h = "col");
    const p = c || (y && y.variant),
      m = {
        ...r,
        align: o,
        component: C,
        padding: a || (w && w.padding ? w.padding : "normal"),
        size: u || (w && w.size ? w.size : "medium"),
        sortDirection: d,
        stickyHeader: p === "head" && w && w.stickyHeader,
        variant: p,
      },
      b = QN(m);
    let k = null;
    return (
      d && (k = d === "asc" ? "ascending" : "descending"),
      x(XN, {
        as: C,
        ref: n,
        className: te(b.root, i),
        "aria-sort": k,
        scope: h,
        ownerState: m,
        ...f,
      })
    );
  }),
  _e = JN;
function ZN(e) {
  return se("MuiTableContainer", e);
}
re("MuiTableContainer", ["root"]);
const e_ = (e) => {
    const { classes: t } = e;
    return ae({ root: ["root"] }, ZN, t);
  },
  t_ = q("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ width: "100%", overflowX: "auto" }),
  n_ = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiTableContainer" }),
      { className: o, component: i = "div", ...s } = r,
      a = { ...r, component: i },
      l = e_(a);
    return x(t_, {
      ref: n,
      as: i,
      className: te(l.root, o),
      ownerState: a,
      ...s,
    });
  }),
  GS = n_;
function r_(e) {
  return se("MuiTableHead", e);
}
re("MuiTableHead", ["root"]);
const o_ = (e) => {
    const { classes: t } = e;
    return ae({ root: ["root"] }, r_, t);
  },
  i_ = q("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ display: "table-header-group" }),
  s_ = { variant: "head" },
  ay = "thead",
  a_ = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiTableHead" }),
      { className: o, component: i = ay, ...s } = r,
      a = { ...r, component: i },
      l = o_(a);
    return x(oc.Provider, {
      value: s_,
      children: x(i_, {
        as: i,
        className: te(l.root, o),
        ref: n,
        role: i === ay ? null : "rowgroup",
        ownerState: a,
        ...s,
      }),
    });
  }),
  YS = a_;
function l_(e) {
  return se("MuiToolbar", e);
}
re("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const u_ = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return ae({ root: ["root", !n && "gutters", r] }, l_, t);
  },
  c_ = q("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
    },
  })(
    Se(({ theme: e }) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      variants: [
        {
          props: ({ ownerState: t }) => !t.disableGutters,
          style: {
            paddingLeft: e.spacing(2),
            paddingRight: e.spacing(2),
            [e.breakpoints.up("sm")]: {
              paddingLeft: e.spacing(3),
              paddingRight: e.spacing(3),
            },
          },
        },
        { props: { variant: "dense" }, style: { minHeight: 48 } },
        { props: { variant: "regular" }, style: e.mixins.toolbar },
      ],
    }))
  ),
  d_ = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiToolbar" }),
      {
        className: o,
        component: i = "div",
        disableGutters: s = !1,
        variant: a = "regular",
        ...l
      } = r,
      u = { ...r, component: i, disableGutters: s, variant: a },
      d = u_(u);
    return x(c_, {
      as: i,
      className: te(d.root, o),
      ref: n,
      ownerState: u,
      ...l,
    });
  }),
  f_ = d_;
function p_(e) {
  return se("MuiTableRow", e);
}
const h_ = re("MuiTableRow", ["root", "selected", "hover", "head", "footer"]),
  ly = h_,
  m_ = (e) => {
    const { classes: t, selected: n, hover: r, head: o, footer: i } = e;
    return ae(
      {
        root: [
          "root",
          n && "selected",
          r && "hover",
          o && "head",
          i && "footer",
        ],
      },
      p_,
      t
    );
  },
  g_ = q("tr", {
    name: "MuiTableRow",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.head && t.head, n.footer && t.footer];
    },
  })(
    Se(({ theme: e }) => ({
      color: "inherit",
      display: "table-row",
      verticalAlign: "middle",
      outline: 0,
      [`&.${ly.hover}:hover`]: {
        backgroundColor: (e.vars || e).palette.action.hover,
      },
      [`&.${ly.selected}`]: {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
          : Ue(e.palette.primary.main, e.palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : Ue(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
        },
      },
    }))
  ),
  uy = "tr",
  y_ = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiTableRow" }),
      {
        className: o,
        component: i = uy,
        hover: s = !1,
        selected: a = !1,
        ...l
      } = r,
      u = S.useContext(oc),
      d = {
        ...r,
        component: i,
        hover: s,
        selected: a,
        head: u && u.variant === "head",
        footer: u && u.variant === "footer",
      },
      c = m_(d);
    return x(g_, {
      as: i,
      ref: n,
      className: te(c.root, o),
      role: i === uy ? null : "row",
      ownerState: d,
      ...l,
    });
  }),
  Wl = y_;
function v_(e) {
  return se("MuiTextField", e);
}
re("MuiTextField", ["root"]);
const S_ = { standard: MS, filled: $S, outlined: zS },
  w_ = (e) => {
    const { classes: t } = e;
    return ae({ root: ["root"] }, v_, t);
  },
  b_ = q(TA, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  C_ = S.forwardRef(function (t, n) {
    const r = le({ props: t, name: "MuiTextField" }),
      {
        autoComplete: o,
        autoFocus: i = !1,
        children: s,
        className: a,
        color: l = "primary",
        defaultValue: u,
        disabled: d = !1,
        error: c = !1,
        FormHelperTextProps: f,
        fullWidth: w = !1,
        helperText: y,
        id: v,
        InputLabelProps: C,
        inputProps: h,
        InputProps: p,
        inputRef: m,
        label: b,
        maxRows: k,
        minRows: P,
        multiline: R = !1,
        name: T,
        onBlur: M,
        onChange: g,
        onFocus: O,
        placeholder: I,
        required: _ = !1,
        rows: W,
        select: A = !1,
        SelectProps: L,
        slots: V = {},
        slotProps: U = {},
        type: z,
        value: G,
        variant: Z = "outlined",
        ...oe
      } = r,
      fe = {
        ...r,
        autoFocus: i,
        color: l,
        disabled: d,
        error: c,
        fullWidth: w,
        multiline: R,
        required: _,
        select: A,
        variant: Z,
      },
      ue = w_(fe),
      pe = Xu(v),
      ke = y && pe ? `${pe}-helper-text` : void 0,
      Ee = b && pe ? `${pe}-label` : void 0,
      Ge = S_[Z],
      Oe = {
        slots: V,
        slotProps: {
          input: p,
          inputLabel: C,
          htmlInput: h,
          formHelperText: f,
          select: L,
          ...U,
        },
      },
      de = {},
      be = Oe.slotProps.inputLabel;
    Z === "outlined" &&
      (be && typeof be.shrink < "u" && (de.notched = be.shrink),
      (de.label = b)),
      A &&
        ((!L || !L.native) && (de.id = void 0),
        (de["aria-describedby"] = void 0));
    const [ce, Ne] = it("input", {
        elementType: Ge,
        externalForwardedProps: Oe,
        additionalProps: de,
        ownerState: fe,
      }),
      [me, Te] = it("inputLabel", {
        elementType: o5,
        externalForwardedProps: Oe,
        ownerState: fe,
      }),
      [ut, Ce] = it("htmlInput", {
        elementType: "input",
        externalForwardedProps: Oe,
        ownerState: fe,
      }),
      [E, $] = it("formHelperText", {
        elementType: NA,
        externalForwardedProps: Oe,
        ownerState: fe,
      }),
      [N, H] = it("select", {
        elementType: _N,
        externalForwardedProps: Oe,
        ownerState: fe,
      }),
      B = x(ce, {
        "aria-describedby": ke,
        autoComplete: o,
        autoFocus: i,
        defaultValue: u,
        fullWidth: w,
        multiline: R,
        name: T,
        rows: W,
        maxRows: k,
        minRows: P,
        type: z,
        value: G,
        id: pe,
        inputRef: m,
        onBlur: M,
        onChange: g,
        onFocus: O,
        placeholder: I,
        inputProps: Ce,
        slots: { input: V.htmlInput ? ut : void 0 },
        ...Ne,
      });
    return J(b_, {
      className: te(ue.root, a),
      disabled: d,
      error: c,
      fullWidth: w,
      ref: n,
      required: _,
      color: l,
      variant: Z,
      ownerState: fe,
      ...oe,
      children: [
        b != null &&
          b !== "" &&
          x(me, { htmlFor: pe, id: Ee, ...Te, children: b }),
        A
          ? x(N, {
              "aria-describedby": ke,
              id: pe,
              labelId: Ee,
              value: G,
              input: B,
              ...H,
              children: s,
            })
          : B,
        y && x(E, { id: ke, ...$, children: y }),
      ],
    });
  }),
  Nt = C_,
  Qr = S.createContext({}),
  x_ = ({ children: e }) => {
    const [t, n] = S.useState(!1),
      [r, o] = S.useState("success"),
      [i, s] = S.useState(""),
      [a, l] = S.useState([]),
      [u, d] = S.useState(0),
      c = (y, v = "success") => {
        s(y), o(v), n(!0);
      },
      f = (y) => {
        l((v) => [y, ...v]), d((v) => v + 1), console.log(JSON.stringify(y));
      },
      w = () => {
        l([]), d(0);
      };
    return x(Qr.Provider, {
      value: {
        open: t,
        setOpen: n,
        severity: r,
        notification: i,
        showNotification: c,
        notifications: a,
        notificationCount: u,
        addNotification: f,
        clearNotifications: w,
      },
      children: e,
    });
  },
  oa = () => {
    const { showNotification: e } = S.useContext(Qr);
    return {
      handleError: (n) => {
        console.error("Error:", n);
        let r = "Error";
        n.response && n.response.data
          ? (r = n.response.data.error || n.response.data.message || r)
          : (r += ` ${n.message}`),
          e(r, "error");
      },
    };
  },
  k_ = Je(
    x("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14",
    }),
    "Search"
  );
function E_() {
  const { showNotification: e } = S.useContext(Qr),
    { handleError: t } = oa(),
    [n, r] = S.useState(!1),
    [o, i] = S.useState(zr(new Date(), "yyyy-MM-dd")),
    [s, a] = S.useState([]),
    l = (g) => {
      i(g.target.value);
    },
    [u, d] = S.useState(""),
    [c, f] = S.useState(1),
    [w, y] = S.useState([]),
    v = 5,
    C = async () => {
      r(!0);
      try {
        const g = await Or.getStudents();
        a(g);
      } catch (g) {
        t(g);
      } finally {
        r(!1);
      }
    };
  S.useEffect(() => {
    C();
  }, []);
  const h = (g) => {
      d(g.target.value), f(1);
    },
    p = s.filter((g) => g.student_name.toLowerCase().includes(u.toLowerCase())),
    m = c * v,
    b = m - v,
    k = p.slice(b, m),
    P = Math.ceil(p.length / v),
    R = (g, O) => {
      f(O);
    },
    T = (g, O) => {
      g.target.checked ? y([...w, O]) : y(w.filter((I) => I !== O));
    };
  return J("div", {
    className: "home-container",
    children: [
      J(PS, {
        className: "home-container-inner",
        sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        children: [
          x("h1", { children: "Add Attendance" }),
          x("input", { type: "date", id: "date", value: o, onChange: l }),
          x(nn, {
            variant: "contained",
            color: "primary",
            onClick: async () => {
              if (w.length === 0) {
                e("Please select at least one student.", "warning");
                return;
              }
              const g = o;
              try {
                const O = await Or.markAttendance(g, w);
              } catch (O) {
                t(O);
              }
              response.status === 201 &&
                e("Attendance for selected students marked successfully!"),
                y([]),
                C();
            },
            disabled: w.length === 0,
            size: "medium",
            children: "Mark Attendance",
          }),
        ],
      }),
      n &&
        x(mt, {
          sx: { display: "flex", justifyContent: "center", my: 2 },
          children: x(Eo, {}),
        }),
      x(Nt, {
        label: "Search students...",
        variant: "outlined",
        value: u,
        onChange: h,
        sx: { mb: 2, width: "100%" },
        InputProps: {
          startAdornment: x(ZA, { position: "start", children: x(k_, {}) }),
        },
      }),
      x(GS, {
        component: Ei,
        children: J(KS, {
          children: [
            x(YS, {
              children: J(Wl, {
                children: [
                  x(_e, { children: "Select" }),
                  x(_e, { children: "Student Name" }),
                  x(_e, { children: "Student ID" }),
                  x(_e, { children: "Class" }),
                  x(_e, { children: "Total Attendance" }),
                  x(_e, { children: "Consecutive classes" }),
                  x(_e, { children: "Streak Of 4" }),
                  x(_e, { children: "Last 5 Classes" }),
                ],
              }),
            }),
            x(qS, {
              children: k.map((g) =>
                J(
                  Wl,
                  {
                    children: [
                      x(_e, {
                        padding: "checkbox",
                        children: x(JI, {
                          edge: "end",
                          onChange: (O) => T(O, g.id),
                          checked: w.includes(g.id),
                        }),
                      }),
                      x(_e, { children: g.student_name }),
                      x(_e, { children: g.id }),
                      x(_e, { children: g.class_name }),
                      x(_e, { children: g.total }),
                      x(_e, { children: g.consecutive_classes }),
                      x(_e, { children: g.streak_of_four }),
                      x(_e, {
                        children: x("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                          },
                          children: g.last4Dates.map((O, I) =>
                            x(
                              "div",
                              {
                                style: { display: "block" },
                                children: zr(new Date(O), "dd/MM/yyyy"),
                              },
                              I
                            )
                          ),
                        }),
                      }),
                    ],
                  },
                  g.id
                )
              ),
            }),
          ],
        }),
      }),
      x(mt, {
        sx: { display: "flex", justifyContent: "center", my: 2 },
        children: x(WS, { count: P, page: c, onChange: R, color: "primary" }),
      }),
    ],
  });
}
const P_ = zr(new Date(), "yyyy-MM-dd");
function R_() {
  const { showNotification: e } = S.useContext(Qr),
    { handleError: t } = oa(),
    [n, r] = S.useState(!1),
    [o, i] = S.useState(new Date()),
    [s, a] = S.useState([]),
    l = (c) => {
      i(new Date(c.target.value));
    },
    u = async (c, f) => {
      r(!0);
      try {
        const w = await Or.removeAttendance(c, zr(f, "yyyy-MM-dd"));
        w && w.student
          ? (e("Attendance removed successfully"), d())
          : e("Error removing attendance");
      } catch (w) {
        t(w);
      } finally {
        r(!1);
      }
    },
    d = async () => {
      r(!0);
      try {
        const c = await Or.getStudents(zr(o, "yyyy-MM-dd"));
        a(c);
      } catch (c) {
        t(c);
      } finally {
        r(!1);
      }
    };
  return (
    S.useEffect(() => {
      d();
    }, [o]),
    J("div", {
      className: "view-container",
      children: [
        x("h1", { children: "View Attendance" }),
        n &&
          x(mt, {
            sx: { display: "flex", justifyContent: "center", my: 2 },
            children: x(Eo, {}),
          }),
        x(Nt, {
          type: "date",
          value: zr(o, "yyyy-MM-dd"),
          onChange: l,
          variant: "outlined",
          sx: { mb: 2, width: "100%" },
          slotProps: {
            input: { onClick: (c) => c.target.showPicker(), max: P_ },
          },
        }),
        s.length > 0
          ? x(GS, {
              component: Ei,
              children: J(KS, {
                children: [
                  x(YS, {
                    children: J(Wl, {
                      children: [
                        x(_e, { children: "Student Name" }),
                        x(_e, { children: "Student ID" }),
                        x(_e, { children: "Total Attendance" }),
                        x(_e, { children: "Consecutive Classes" }),
                        x(_e, { children: "Streak Of 4" }),
                        x(_e, { children: "Actions" }),
                      ],
                    }),
                  }),
                  x(qS, {
                    children: s.map((c) =>
                      J(
                        Wl,
                        {
                          children: [
                            x(_e, { children: c.name }),
                            x(_e, { children: c._id }),
                            x(_e, { children: c.total }),
                            x(_e, { children: c.consecutiveCount }),
                            x(_e, { children: c.streakOfFour }),
                            x(_e, {
                              children: x(nn, {
                                variant: "contained",
                                color: "error",
                                size: "small",
                                onClick: () => u(c._id, o),
                                children: "Undo",
                              }),
                            }),
                          ],
                        },
                        c._id
                      )
                    ),
                  }),
                ],
              }),
            })
          : x("h4", { children: "No Attendance taken for this date" }),
      ],
    })
  );
}
const T_ = Je(
    x("path", {
      d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z",
    }),
    "Edit"
  ),
  bf = Je(
    x("path", {
      d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z",
    }),
    "Delete"
  );
const $_ = async () => {
    try {
      return (await Bt.get(`${Tt.baseURL}/settings/dropdown-options`)).data;
    } catch (e) {
      throw e;
    }
  },
  O_ = async (e) => {
    try {
      return (
        await Bt.post(`${Tt.baseURL}/settings/dropdown-options`, { options: e })
      ).data;
    } catch (t) {
      throw t;
    }
  },
  M_ = async (e) => {
    try {
      return (
        await Bt.post(`${Tt.baseURL}/settings/dropdown-options`, { option: e })
      ).data;
    } catch (t) {
      throw t;
    }
  },
  I_ = async (e) => {
    try {
      return (
        await Bt.post(`${Tt.baseURL}/settings/dropdown-options/delete`, {
          option: e,
        })
      ).data;
    } catch (t) {
      throw t;
    }
  },
  A_ = async () => {
    try {
      return await Bt.get(`${Tt.baseURL}/student/attendance/backup`, {
        responseType: "blob",
      });
    } catch (e) {
      throw e;
    }
  },
  N_ = async (e) => {
    try {
      return await Bt.post(`${Tt.baseURL}/student/attendance/backup`, e, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (t) {
      throw t;
    }
  },
  oo = {
    getCourses: $_,
    updateDropdownOptions: O_,
    addCourse: M_,
    deleteCourse: I_,
    downloadBackup: A_,
    uploadBackup: N_,
  };
function __() {
  const { showNotification: e } = S.useContext(Qr),
    { handleError: t } = oa(),
    [n, r] = S.useState(""),
    [o, i] = S.useState(""),
    [s, a] = S.useState(""),
    [l, u] = S.useState(""),
    [d, c] = S.useState(""),
    [f, w] = S.useState(!1),
    [y, v] = S.useState(""),
    [C, h] = S.useState([]),
    [p, m] = S.useState(""),
    [b, k] = S.useState(1),
    [P, R] = S.useState(""),
    [T, M] = S.useState(!1),
    [g, O] = S.useState(!1),
    [I, _] = S.useState(null),
    [W, A] = S.useState([]),
    L = 5,
    V = S.useRef(null),
    U = new Date();
  S.useEffect(() => {
    z(), ce();
  }, []),
    S.useEffect(() => {
      !o && !s && !l && !P && (w(!1), v(""));
    }, [o, s, l, P]);
  const z = async () => {
    try {
      const E = await oo.getCourses();
      A(E);
    } catch (E) {
      t(E);
    }
  };
  S.useEffect(() => {
    y && Ee(y);
  }, [y]);
  const G = S.useMemo(
      () => C.filter((E) => E.name.toLowerCase().includes(p.toLowerCase())),
      [C, p]
    ),
    Z = b * L,
    oe = Z - L,
    fe = G.slice(oe, Z),
    ue = Math.ceil(G.length / L),
    pe = S.useCallback((E) => {
      m(E.target.value), k(1);
    }, []),
    ke = S.useCallback((E, $) => {
      k($);
    }, []),
    Ee = (E) => {
      const $ = C.find((N) => N._id === E);
      $ &&
        (r($._id),
        i($.name),
        a($.email),
        u($.phone),
        R($.lastPaidDate ? zr(new Date($.lastPaidDate), "yyyy-MM-dd") : ""),
        c($.selectedClass));
    },
    Ge = S.useCallback(() => {
      r(""), v(""), i(""), a(""), u(""), R(""), c(""), w(!1);
    }, []),
    Oe = S.useCallback(
      (E) => {
        w(!0),
          v(E),
          Ee(E),
          V.current && V.current.scrollIntoView({ behavior: "smooth" });
      },
      [C]
    ),
    de = async (E) => {
      E.preventDefault(), f ? await me(y) : await Te();
    },
    be = (E) => {
      R(E.target.value);
    },
    ce = async () => {
      M(!0);
      try {
        const E = await Or.getStudents();
        h(E);
      } catch (E) {
        t(E);
      } finally {
        M(!1);
      }
    },
    Ne = async (E) => {
      M(!0);
      try {
        await Or.deleteStudent(E),
          e("Student deleted successfully", "success"),
          ce();
      } catch ($) {
        t($);
      } finally {
        M(!1);
      }
    },
    me = async (E) => {
      M(!0);
      try {
        await Or.updateStudentDetails(E, {
          name: o,
          email: s,
          phone: l,
          selectedClass: d,
          lastPaidDate: P,
        }),
          e("Student updated successfully", "success"),
          Ge(),
          ce(),
          w(!1),
          v("");
      } catch ($) {
        t($);
      } finally {
        M(!1);
      }
    },
    Te = async () => {
      M(!0);
      try {
        const E = await Or.addStudent({
          name: o,
          email: s,
          phone: l,
          selectedClass: d,
        });
        if (E.status !== 201) {
          e(E.data.error || "Error adding student", "error");
          return;
        }
        e("Student added successfully", "success"), Ge(), ce();
      } catch (E) {
        t(E);
      } finally {
        M(!1);
      }
    },
    ut = S.useCallback((E) => {
      _(E), O(!0);
    }, []),
    Ce = S.useCallback(() => {
      _(null), O(!1);
    }, []);
  return J("div", {
    className: "manage-container",
    children: [
      x("h1", { children: "Manage Students" }),
      T &&
        x(mt, {
          sx: { display: "flex", justifyContent: "center", my: 2 },
          children: x(Eo, {}),
        }),
      J(mt, {
        ref: V,
        component: "form",
        onSubmit: de,
        className: "form-container",
        children: [
          f && J("h3", { children: ["Student Id: ", n] }),
          x(Nt, {
            label: "Name",
            variant: "outlined",
            value: o,
            onChange: (E) => i(E.target.value),
            required: !0,
          }),
          x(Nt, {
            label: "Email",
            variant: "outlined",
            type: "email",
            value: s,
            onChange: (E) => a(E.target.value),
          }),
          x(Nt, {
            label: "Phone",
            variant: "outlined",
            value: l,
            onChange: (E) => u(E.target.value),
            required: !0,
          }),
          x(Nt, {
            select: !0,
            label: "Class",
            value: d,
            onChange: (E) => c(E.target.value),
            variant: "outlined",
            required: !0,
            children: W.map((E, $) => x(wf, { value: E, children: E }, $)),
          }),
          f &&
            J(Zc, {
              children: [
                x(Sn, { sx: { margin: 0 }, children: "Update Paid Date" }),
                x(Nt, {
                  type: "date",
                  value: P,
                  onChange: be,
                  variant: "outlined",
                  sx: { mb: 2, width: "100%" },
                  inputProps: { max: zr(U, "yyyy-MM-dd") },
                }),
              ],
            }),
          x(mt, {
            className: "form-actions",
            children: J("div", {
              className: "form-actions-inner",
              children: [
                x(nn, {
                  type: "button",
                  variant: "contained",
                  size: "medium",
                  color: "primary",
                  onClick: Ge,
                  children: "Clear",
                }),
                x(nn, {
                  type: "submit",
                  variant: "contained",
                  size: "medium",
                  color: "primary",
                  sx: { width: "20%", marginRight: 0 },
                  children: f ? "Update Student" : "Add Student",
                }),
              ],
            }),
          }),
        ],
      }),
      x(Nt, {
        label: "Search students...",
        variant: "outlined",
        value: p,
        onChange: pe,
        sx: { mb: 2, width: "100%" },
      }),
      x(ih, {
        children: fe.map((E) =>
          x(
            AS,
            {
              sx: { display: "flex", justifyContent: "center", padding: 0 },
              children: J(Ja, {
                sx: {
                  marginBottom: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: 2,
                  width: "80%",
                },
                children: [
                  J(Za, {
                    children: [
                      J(Sn, {
                        variant: "body2",
                        color: "text.secondary",
                        sx: { marginBottom: 2 },
                        children: ["Student Id: ", E._id],
                      }),
                      x(Sn, { variant: "h5", children: E.name }),
                    ],
                  }),
                  J(yf, {
                    sx: { marginRight: 2 },
                    children: [
                      x(nn, {
                        variant: "contained",
                        startIcon: x(T_, {}),
                        size: "medium",
                        onClick: () => Oe(E._id),
                        children: "Edit",
                      }),
                      x(nn, {
                        variant: "outlined",
                        startIcon: x(bf, {}),
                        size: "medium",
                        onClick: () => ut(E),
                        color: "error",
                        children: "Delete",
                      }),
                    ],
                  }),
                ],
              }),
            },
            E._id
          )
        ),
      }),
      x(mt, {
        sx: { display: "flex", justifyContent: "center", my: 2 },
        children: x(WS, { count: ue, page: b, onChange: ke, color: "primary" }),
      }),
      x(RS, {
        "aria-labelledby": "transition-modal-title",
        "aria-describedby": "transition-modal-description",
        open: g,
        onClose: Ce,
        closeAfterTransition: !0,
        slots: { backdrop: kS },
        slotProps: { backdrop: { timeout: 500 } },
        children: x(xS, {
          in: g,
          children: x(mt, {
            className: "modal-style",
            children:
              I &&
              J(Zc, {
                children: [
                  J(Sn, {
                    id: "transition-modal-description",
                    color: "error",
                    sx: { mt: 0.5 },
                    children: [
                      "Are you sure you want to delete the student",
                      " ",
                      I.name,
                      "?",
                    ],
                  }),
                  J(mt, {
                    sx: { mt: 4, display: "flex", gap: 2 },
                    children: [
                      x(nn, {
                        variant: "contained",
                        size: "medium",
                        onClick: Ce,
                        children: "Cancel",
                      }),
                      x(nn, {
                        variant: "outlined",
                        startIcon: x(bf, {}),
                        size: "medium",
                        onClick: () => {
                          Ne(I._id), Ce();
                        },
                        color: "error",
                        children: "Delete",
                      }),
                    ],
                  }),
                ],
              }),
          }),
        }),
      }),
    ],
  });
}
const L_ = Je(
    x("path", {
      d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z",
    }),
    "Save"
  ),
  F_ = Je(x("path", { d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z" }), "Download"),
  B_ = Je(x("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" }), "Add");
function D_() {
  const { showNotification: e } = S.useContext(Qr),
    { handleError: t } = oa(),
    [n, r] = S.useState(!1),
    [o, i] = S.useState(""),
    [s, a] = S.useState(""),
    [l, u] = S.useState([]);
  S.useEffect(() => {
    d();
  }, []);
  const d = async () => {
      r(!0);
      try {
        const v = await oo.getCourses();
        u(v);
      } catch (v) {
        t(v);
      } finally {
        r(!1);
      }
    },
    c = async () => {
      try {
        const v = await oo.downloadBackup(),
          C = URL.createObjectURL(v.data),
          h = document.createElement("a");
        (h.href = C),
          (h.download = "backup.json"),
          document.body.appendChild(h),
          h.click(),
          document.body.removeChild(h),
          URL.revokeObjectURL(C);
      } catch (v) {
        t(v);
      }
    },
    f = async () => {
      if (s.trim() !== "")
        try {
          await oo.addCourse(s.trim());
          const v = await oo.getCourses();
          u(v), a(""), e("Dropdown option added successfully", "success");
        } catch (v) {
          console.error("Error adding dropdown option:", v), t(v);
        }
    },
    w = async (v) => {
      try {
        await oo.deleteCourse(v);
        const C = await oo.getCourses();
        u(C), e("Dropdown option deleted successfully", "success");
      } catch (C) {
        t(C);
      }
    };
  return J("div", {
    className: "settings-container",
    children: [
      x("h1", { children: "Settings" }),
      n &&
        x(mt, {
          sx: { display: "flex", justifyContent: "center", my: 2 },
          children: x(Eo, {}),
        }),
      J(Ja, {
        sx: { mb: 4 },
        children: [
          J(Za, {
            children: [
              x(Sn, {
                variant: "h6",
                gutterBottom: !0,
                children: "Save Access Token",
              }),
              x(mt, {
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  maxWidth: 400,
                },
                children: x(Nt, {
                  label: "Token",
                  variant: "outlined",
                  value: o,
                  onChange: (v) => i(v.target.value),
                }),
              }),
            ],
          }),
          x(yf, {
            children: x(nn, {
              variant: "contained",
              color: "primary",
              onClick: () => {
                localStorage.setItem("access-token", o),
                  e("Access token saved!", "success"),
                  window.location.reload();
              },
              startIcon: x(L_, {}),
              children: "Save Token",
            }),
          }),
        ],
      }),
      J(Ja, {
        children: [
          J(Za, {
            children: [
              x(Sn, { variant: "h6", gutterBottom: !0, children: "Backup" }),
              x(mt, {
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  maxWidth: 400,
                },
              }),
            ],
          }),
          x(yf, {
            sx: { justifyContent: "flex-start" },
            children: x(nn, {
              variant: "contained",
              color: "primary",
              onClick: c,
              startIcon: x(F_, {}),
              children: "Download Backup",
            }),
          }),
        ],
      }),
      x(Ja, {
        sx: { mt: 4 },
        children: J(Za, {
          children: [
            x(Sn, {
              variant: "h6",
              gutterBottom: !0,
              children: "Manage Dropdown class",
            }),
            J(mt, {
              sx: {
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 400,
              },
              children: [
                x(Nt, {
                  label: "New Option",
                  variant: "outlined",
                  value: s,
                  onChange: (v) => a(v.target.value),
                }),
                x(nn, {
                  variant: "contained",
                  color: "primary",
                  onClick: f,
                  startIcon: x(B_, {}),
                  children: "Add Option",
                }),
                x(ih, {
                  children: l.map((v, C) =>
                    x(
                      AS,
                      {
                        secondaryAction: x(Ju, {
                          edge: "end",
                          "aria-label": "delete",
                          onClick: () => w(v),
                          children: x(bf, {}),
                        }),
                        children: v,
                      },
                      C
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
var ia = (e) => e.type === "checkbox",
  co = (e) => e instanceof Date,
  Ut = (e) => e == null;
const QS = (e) => typeof e == "object";
var at = (e) => !Ut(e) && !Array.isArray(e) && QS(e) && !co(e),
  XS = (e) =>
    at(e) && e.target ? (ia(e.target) ? e.target.checked : e.target.value) : e,
  z_ = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  JS = (e, t) => e.has(z_(t)),
  U_ = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return at(t) && t.hasOwnProperty("isPrototypeOf");
  },
  lh =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Kt(e) {
  let t;
  const n = Array.isArray(e),
    r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (!(lh && (e instanceof Blob || r)) && (n || at(e)))
    if (((t = n ? [] : {}), !n && !U_(e))) t = e;
    else for (const o in e) e.hasOwnProperty(o) && (t[o] = Kt(e[o]));
  else return e;
  return t;
}
var ic = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  rt = (e) => e === void 0,
  Q = (e, t, n) => {
    if (!t || !at(e)) return n;
    const r = ic(t.split(/[,[\].]+?/)).reduce((o, i) => (Ut(o) ? o : o[i]), e);
    return rt(r) || r === e ? (rt(e[t]) ? n : e[t]) : r;
  },
  hn = (e) => typeof e == "boolean",
  uh = (e) => /^\w*$/.test(e),
  ZS = (e) => ic(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  De = (e, t, n) => {
    let r = -1;
    const o = uh(t) ? [t] : ZS(t),
      i = o.length,
      s = i - 1;
    for (; ++r < i; ) {
      const a = o[r];
      let l = n;
      if (r !== s) {
        const u = e[a];
        l = at(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
      }
      if (a === "__proto__" || a === "constructor" || a === "prototype") return;
      (e[a] = l), (e = e[a]);
    }
    return e;
  };
const Vl = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  $n = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  er = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  W_ = ve.createContext(null),
  ch = () => ve.useContext(W_);
var ew = (e, t, n, r = !0) => {
    const o = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(o, i, {
        get: () => {
          const s = i;
          return (
            t._proxyFormState[s] !== $n.all &&
              (t._proxyFormState[s] = !r || $n.all),
            n && (n[s] = !0),
            e[s]
          );
        },
      });
    return o;
  },
  qt = (e) => at(e) && !Object.keys(e).length,
  tw = (e, t, n, r) => {
    n(e);
    const { name: o, ...i } = e;
    return (
      qt(i) ||
      Object.keys(i).length >= Object.keys(t).length ||
      Object.keys(i).find((s) => t[s] === (!r || $n.all))
    );
  },
  ps = (e) => (Array.isArray(e) ? e : [e]),
  nw = (e, t, n) =>
    !e ||
    !t ||
    e === t ||
    ps(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function dh(e) {
  const t = ve.useRef(e);
  (t.current = e),
    ve.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
function V_(e) {
  const t = ch(),
    { control: n = t.control, disabled: r, name: o, exact: i } = e || {},
    [s, a] = ve.useState(n._formState),
    l = ve.useRef(!0),
    u = ve.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    d = ve.useRef(o);
  return (
    (d.current = o),
    dh({
      disabled: r,
      next: (c) =>
        l.current &&
        nw(d.current, c.name, i) &&
        tw(c, u.current, n._updateFormState) &&
        a({ ...n._formState, ...c }),
      subject: n._subjects.state,
    }),
    ve.useEffect(
      () => (
        (l.current = !0),
        u.current.isValid && n._updateValid(!0),
        () => {
          l.current = !1;
        }
      ),
      [n]
    ),
    ve.useMemo(() => ew(s, n, u.current, !1), [s, n])
  );
}
var Kn = (e) => typeof e == "string",
  rw = (e, t, n, r, o) =>
    Kn(e)
      ? (r && t.watch.add(e), Q(n, e, o))
      : Array.isArray(e)
      ? e.map((i) => (r && t.watch.add(i), Q(n, i)))
      : (r && (t.watchAll = !0), n);
function j_(e) {
  const t = ch(),
    {
      control: n = t.control,
      name: r,
      defaultValue: o,
      disabled: i,
      exact: s,
    } = e || {},
    a = ve.useRef(r);
  (a.current = r),
    dh({
      disabled: i,
      subject: n._subjects.values,
      next: (d) => {
        nw(a.current, d.name, s) &&
          u(Kt(rw(a.current, n._names, d.values || n._formValues, !1, o)));
      },
    });
  const [l, u] = ve.useState(n._getWatch(r, o));
  return ve.useEffect(() => n._removeUnmounted()), l;
}
function H_(e) {
  const t = ch(),
    { name: n, disabled: r, control: o = t.control, shouldUnregister: i } = e,
    s = JS(o._names.array, n),
    a = j_({
      control: o,
      name: n,
      defaultValue: Q(o._formValues, n, Q(o._defaultValues, n, e.defaultValue)),
      exact: !0,
    }),
    l = V_({ control: o, name: n, exact: !0 }),
    u = ve.useRef(
      o.register(n, {
        ...e.rules,
        value: a,
        ...(hn(e.disabled) ? { disabled: e.disabled } : {}),
      })
    ),
    d = ve.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!Q(l.errors, n) },
            isDirty: { enumerable: !0, get: () => !!Q(l.dirtyFields, n) },
            isTouched: { enumerable: !0, get: () => !!Q(l.touchedFields, n) },
            isValidating: {
              enumerable: !0,
              get: () => !!Q(l.validatingFields, n),
            },
            error: { enumerable: !0, get: () => Q(l.errors, n) },
          }
        ),
      [l, n]
    ),
    c = ve.useMemo(
      () => ({
        name: n,
        value: a,
        ...(hn(r) || l.disabled ? { disabled: l.disabled || r } : {}),
        onChange: (f) =>
          u.current.onChange({
            target: { value: XS(f), name: n },
            type: Vl.CHANGE,
          }),
        onBlur: () =>
          u.current.onBlur({
            target: { value: Q(o._formValues, n), name: n },
            type: Vl.BLUR,
          }),
        ref: (f) => {
          const w = Q(o._fields, n);
          w &&
            f &&
            (w._f.ref = {
              focus: () => f.focus(),
              select: () => f.select(),
              setCustomValidity: (y) => f.setCustomValidity(y),
              reportValidity: () => f.reportValidity(),
            });
        },
      }),
      [n, o._formValues, r, l.disabled, a, o._fields]
    );
  return (
    ve.useEffect(() => {
      const f = o._options.shouldUnregister || i,
        w = (y, v) => {
          const C = Q(o._fields, y);
          C && C._f && (C._f.mount = v);
        };
      if ((w(n, !0), f)) {
        const y = Kt(Q(o._options.defaultValues, n));
        De(o._defaultValues, n, y),
          rt(Q(o._formValues, n)) && De(o._formValues, n, y);
      }
      return (
        !s && o.register(n),
        () => {
          (s ? f && !o._state.action : f) ? o.unregister(n) : w(n, !1);
        }
      );
    }, [n, o, s, i]),
    ve.useEffect(() => {
      o._updateDisabledField({ disabled: r, fields: o._fields, name: n });
    }, [r, n, o]),
    ve.useMemo(() => ({ field: c, formState: l, fieldState: d }), [c, l, d])
  );
}
const Qo = (e) => e.render(H_(e));
var K_ = (e, t, n, r, o) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: o || !0 },
        }
      : {},
  cy = (e) => ({
    isOnSubmit: !e || e === $n.onSubmit,
    isOnBlur: e === $n.onBlur,
    isOnChange: e === $n.onChange,
    isOnAll: e === $n.all,
    isOnTouch: e === $n.onTouched,
  }),
  dy = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      ));
const hs = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const i = Q(e, o);
    if (i) {
      const { _f: s, ...a } = i;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], o) && !r) return !0;
        if (s.ref && t(s.ref, s.name) && !r) return !0;
        if (hs(a, t)) break;
      } else if (at(a) && hs(a, t)) break;
    }
  }
};
var q_ = (e, t, n) => {
    const r = ps(Q(e, n));
    return De(r, "root", t[n]), De(e, n, r), e;
  },
  fh = (e) => e.type === "file",
  Hn = (e) => typeof e == "function",
  jl = (e) => {
    if (!lh) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  el = (e) => Kn(e),
  ph = (e) => e.type === "radio",
  Hl = (e) => e instanceof RegExp;
const fy = { value: !1, isValid: !1 },
  py = { value: !0, isValid: !0 };
var ow = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !rt(e[0].attributes.value)
        ? rt(e[0].value) || e[0].value === ""
          ? py
          : { value: e[0].value, isValid: !0 }
        : py
      : fy;
  }
  return fy;
};
const hy = { isValid: !1, value: null };
var iw = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        hy
      )
    : hy;
function my(e, t, n = "validate") {
  if (el(e) || (Array.isArray(e) && e.every(el)) || (hn(e) && !e))
    return { type: n, message: el(e) ? e : "", ref: t };
}
var _o = (e) => (at(e) && !Hl(e) ? e : { value: e, message: "" }),
  gy = async (e, t, n, r, o, i) => {
    const {
        ref: s,
        refs: a,
        required: l,
        maxLength: u,
        minLength: d,
        min: c,
        max: f,
        pattern: w,
        validate: y,
        name: v,
        valueAsNumber: C,
        mount: h,
      } = e._f,
      p = Q(n, v);
    if (!h || t.has(v)) return {};
    const m = a ? a[0] : s,
      b = (I) => {
        o &&
          m.reportValidity &&
          (m.setCustomValidity(hn(I) ? "" : I || ""), m.reportValidity());
      },
      k = {},
      P = ph(s),
      R = ia(s),
      T = P || R,
      M =
        ((C || fh(s)) && rt(s.value) && rt(p)) ||
        (jl(s) && s.value === "") ||
        p === "" ||
        (Array.isArray(p) && !p.length),
      g = K_.bind(null, v, r, k),
      O = (I, _, W, A = er.maxLength, L = er.minLength) => {
        const V = I ? _ : W;
        k[v] = { type: I ? A : L, message: V, ref: s, ...g(I ? A : L, V) };
      };
    if (
      i
        ? !Array.isArray(p) || !p.length
        : l &&
          ((!T && (M || Ut(p))) ||
            (hn(p) && !p) ||
            (R && !ow(a).isValid) ||
            (P && !iw(a).isValid))
    ) {
      const { value: I, message: _ } = el(l)
        ? { value: !!l, message: l }
        : _o(l);
      if (
        I &&
        ((k[v] = {
          type: er.required,
          message: _,
          ref: m,
          ...g(er.required, _),
        }),
        !r)
      )
        return b(_), k;
    }
    if (!M && (!Ut(c) || !Ut(f))) {
      let I, _;
      const W = _o(f),
        A = _o(c);
      if (!Ut(p) && !isNaN(p)) {
        const L = s.valueAsNumber || (p && +p);
        Ut(W.value) || (I = L > W.value), Ut(A.value) || (_ = L < A.value);
      } else {
        const L = s.valueAsDate || new Date(p),
          V = (G) => new Date(new Date().toDateString() + " " + G),
          U = s.type == "time",
          z = s.type == "week";
        Kn(W.value) &&
          p &&
          (I = U ? V(p) > V(W.value) : z ? p > W.value : L > new Date(W.value)),
          Kn(A.value) &&
            p &&
            (_ = U
              ? V(p) < V(A.value)
              : z
              ? p < A.value
              : L < new Date(A.value));
      }
      if ((I || _) && (O(!!I, W.message, A.message, er.max, er.min), !r))
        return b(k[v].message), k;
    }
    if ((u || d) && !M && (Kn(p) || (i && Array.isArray(p)))) {
      const I = _o(u),
        _ = _o(d),
        W = !Ut(I.value) && p.length > +I.value,
        A = !Ut(_.value) && p.length < +_.value;
      if ((W || A) && (O(W, I.message, _.message), !r))
        return b(k[v].message), k;
    }
    if (w && !M && Kn(p)) {
      const { value: I, message: _ } = _o(w);
      if (
        Hl(I) &&
        !p.match(I) &&
        ((k[v] = { type: er.pattern, message: _, ref: s, ...g(er.pattern, _) }),
        !r)
      )
        return b(_), k;
    }
    if (y) {
      if (Hn(y)) {
        const I = await y(p, n),
          _ = my(I, m);
        if (_ && ((k[v] = { ..._, ...g(er.validate, _.message) }), !r))
          return b(_.message), k;
      } else if (at(y)) {
        let I = {};
        for (const _ in y) {
          if (!qt(I) && !r) break;
          const W = my(await y[_](p, n), m, _);
          W &&
            ((I = { ...W, ...g(_, W.message) }), b(W.message), r && (k[v] = I));
        }
        if (!qt(I) && ((k[v] = { ref: m, ...I }), !r)) return k;
      }
    }
    return b(!0), k;
  };
function G_(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = rt(e) ? r++ : e[t[r++]];
  return e;
}
function Y_(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !rt(e[t])) return !1;
  return !0;
}
function pt(e, t) {
  const n = Array.isArray(t) ? t : uh(t) ? [t] : ZS(t),
    r = n.length === 1 ? e : G_(e, n),
    o = n.length - 1,
    i = n[o];
  return (
    r && delete r[i],
    o !== 0 &&
      ((at(r) && qt(r)) || (Array.isArray(r) && Y_(r))) &&
      pt(e, n.slice(0, -1)),
    e
  );
}
var Qc = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (o) => {
        for (const i of e) i.next && i.next(o);
      },
      subscribe: (o) => (
        e.push(o),
        {
          unsubscribe: () => {
            e = e.filter((i) => i !== o);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  Cf = (e) => Ut(e) || !QS(e);
function Pr(e, t) {
  if (Cf(e) || Cf(t)) return e === t;
  if (co(e) && co(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n) {
    const i = e[o];
    if (!r.includes(o)) return !1;
    if (o !== "ref") {
      const s = t[o];
      if (
        (co(i) && co(s)) ||
        (at(i) && at(s)) ||
        (Array.isArray(i) && Array.isArray(s))
          ? !Pr(i, s)
          : i !== s
      )
        return !1;
    }
  }
  return !0;
}
var sw = (e) => e.type === "select-multiple",
  Q_ = (e) => ph(e) || ia(e),
  Xc = (e) => jl(e) && e.isConnected,
  aw = (e) => {
    for (const t in e) if (Hn(e[t])) return !0;
    return !1;
  };
function Kl(e, t = {}) {
  const n = Array.isArray(e);
  if (at(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (at(e[r]) && !aw(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), Kl(e[r], t[r]))
        : Ut(e[r]) || (t[r] = !0);
  return t;
}
function lw(e, t, n) {
  const r = Array.isArray(e);
  if (at(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || (at(e[o]) && !aw(e[o]))
        ? rt(t) || Cf(n[o])
          ? (n[o] = Array.isArray(e[o]) ? Kl(e[o], []) : { ...Kl(e[o]) })
          : lw(e[o], Ut(t) ? {} : t[o], n[o])
        : (n[o] = !Pr(e[o], t[o]));
  return n;
}
var Ki = (e, t) => lw(e, t, Kl(t)),
  uw = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    rt(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && Kn(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function Jc(e) {
  const t = e.ref;
  return fh(t)
    ? t.files
    : ph(t)
    ? iw(e.refs).value
    : sw(t)
    ? [...t.selectedOptions].map(({ value: n }) => n)
    : ia(t)
    ? ow(e.refs).value
    : uw(rt(t.value) ? e.ref.value : t.value, e);
}
var X_ = (e, t, n, r) => {
    const o = {};
    for (const i of e) {
      const s = Q(t, i);
      s && De(o, i, s._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: o,
      shouldUseNativeValidation: r,
    };
  },
  qi = (e) =>
    rt(e)
      ? e
      : Hl(e)
      ? e.source
      : at(e)
      ? Hl(e.value)
        ? e.value.source
        : e.value
      : e;
const yy = "AsyncFunction";
var J_ = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (Hn(e.validate) && e.validate.constructor.name === yy) ||
      (at(e.validate) &&
        Object.values(e.validate).find((t) => t.constructor.name === yy))
    ),
  Z_ = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function vy(e, t, n) {
  const r = Q(e, n);
  if (r || uh(n)) return { error: r, name: n };
  const o = n.split(".");
  for (; o.length; ) {
    const i = o.join("."),
      s = Q(t, i),
      a = Q(e, i);
    if (s && !Array.isArray(s) && n !== i) return { name: n };
    if (a && a.type) return { name: i, error: a };
    o.pop();
  }
  return { name: n };
}
var eL = (e, t, n, r, o) =>
    o.isOnAll
      ? !1
      : !n && o.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : o.isOnBlur)
      ? !e
      : (n ? r.isOnChange : o.isOnChange)
      ? e
      : !0,
  tL = (e, t) => !ic(Q(e, t)).length && pt(e, t);
const nL = {
  mode: $n.onSubmit,
  reValidateMode: $n.onChange,
  shouldFocusError: !0,
};
function rL(e = {}) {
  let t = { ...nL, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Hn(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    o =
      at(t.defaultValues) || at(t.values)
        ? Kt(t.defaultValues || t.values) || {}
        : {},
    i = t.shouldUnregister ? {} : Kt(o),
    s = { action: !1, mount: !1, watch: !1 },
    a = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    l,
    u = 0;
  const d = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    c = { values: Qc(), array: Qc(), state: Qc() },
    f = cy(t.mode),
    w = cy(t.reValidateMode),
    y = t.criteriaMode === $n.all,
    v = (E) => ($) => {
      clearTimeout(u), (u = setTimeout(E, $));
    },
    C = async (E) => {
      if (!t.disabled && (d.isValid || E)) {
        const $ = t.resolver ? qt((await T()).errors) : await g(r, !0);
        $ !== n.isValid && c.state.next({ isValid: $ });
      }
    },
    h = (E, $) => {
      !t.disabled &&
        (d.isValidating || d.validatingFields) &&
        ((E || Array.from(a.mount)).forEach((N) => {
          N && ($ ? De(n.validatingFields, N, $) : pt(n.validatingFields, N));
        }),
        c.state.next({
          validatingFields: n.validatingFields,
          isValidating: !qt(n.validatingFields),
        }));
    },
    p = (E, $ = [], N, H, B = !0, j = !0) => {
      if (H && N && !t.disabled) {
        if (((s.action = !0), j && Array.isArray(Q(r, E)))) {
          const X = N(Q(r, E), H.argA, H.argB);
          B && De(r, E, X);
        }
        if (j && Array.isArray(Q(n.errors, E))) {
          const X = N(Q(n.errors, E), H.argA, H.argB);
          B && De(n.errors, E, X), tL(n.errors, E);
        }
        if (d.touchedFields && j && Array.isArray(Q(n.touchedFields, E))) {
          const X = N(Q(n.touchedFields, E), H.argA, H.argB);
          B && De(n.touchedFields, E, X);
        }
        d.dirtyFields && (n.dirtyFields = Ki(o, i)),
          c.state.next({
            name: E,
            isDirty: I(E, $),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else De(i, E, $);
    },
    m = (E, $) => {
      De(n.errors, E, $), c.state.next({ errors: n.errors });
    },
    b = (E) => {
      (n.errors = E), c.state.next({ errors: n.errors, isValid: !1 });
    },
    k = (E, $, N, H) => {
      const B = Q(r, E);
      if (B) {
        const j = Q(i, E, rt(N) ? Q(o, E) : N);
        rt(j) || (H && H.defaultChecked) || $
          ? De(i, E, $ ? j : Jc(B._f))
          : A(E, j),
          s.mount && C();
      }
    },
    P = (E, $, N, H, B) => {
      let j = !1,
        X = !1;
      const ie = { name: E };
      if (!t.disabled) {
        const Le = !!(Q(r, E) && Q(r, E)._f && Q(r, E)._f.disabled);
        if (!N || H) {
          d.isDirty &&
            ((X = n.isDirty),
            (n.isDirty = ie.isDirty = I()),
            (j = X !== ie.isDirty));
          const ge = Le || Pr(Q(o, E), $);
          (X = !!(!Le && Q(n.dirtyFields, E))),
            ge || Le ? pt(n.dirtyFields, E) : De(n.dirtyFields, E, !0),
            (ie.dirtyFields = n.dirtyFields),
            (j = j || (d.dirtyFields && X !== !ge));
        }
        if (N) {
          const ge = Q(n.touchedFields, E);
          ge ||
            (De(n.touchedFields, E, N),
            (ie.touchedFields = n.touchedFields),
            (j = j || (d.touchedFields && ge !== N)));
        }
        j && B && c.state.next(ie);
      }
      return j ? ie : {};
    },
    R = (E, $, N, H) => {
      const B = Q(n.errors, E),
        j = d.isValid && hn($) && n.isValid !== $;
      if (
        (t.delayError && N
          ? ((l = v(() => m(E, N))), l(t.delayError))
          : (clearTimeout(u),
            (l = null),
            N ? De(n.errors, E, N) : pt(n.errors, E)),
        (N ? !Pr(B, N) : B) || !qt(H) || j)
      ) {
        const X = {
          ...H,
          ...(j && hn($) ? { isValid: $ } : {}),
          errors: n.errors,
          name: E,
        };
        (n = { ...n, ...X }), c.state.next(X);
      }
    },
    T = async (E) => {
      h(E, !0);
      const $ = await t.resolver(
        i,
        t.context,
        X_(E || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return h(E), $;
    },
    M = async (E) => {
      const { errors: $ } = await T(E);
      if (E)
        for (const N of E) {
          const H = Q($, N);
          H ? De(n.errors, N, H) : pt(n.errors, N);
        }
      else n.errors = $;
      return $;
    },
    g = async (E, $, N = { valid: !0 }) => {
      for (const H in E) {
        const B = E[H];
        if (B) {
          const { _f: j, ...X } = B;
          if (j) {
            const ie = a.array.has(j.name),
              Le = B._f && J_(B._f);
            Le && d.validatingFields && h([H], !0);
            const ge = await gy(
              B,
              a.disabled,
              i,
              y,
              t.shouldUseNativeValidation && !$,
              ie
            );
            if (
              (Le && d.validatingFields && h([H]),
              ge[j.name] && ((N.valid = !1), $))
            )
              break;
            !$ &&
              (Q(ge, j.name)
                ? ie
                  ? q_(n.errors, ge, j.name)
                  : De(n.errors, j.name, ge[j.name])
                : pt(n.errors, j.name));
          }
          !qt(X) && (await g(X, $, N));
        }
      }
      return N.valid;
    },
    O = () => {
      for (const E of a.unMount) {
        const $ = Q(r, E);
        $ &&
          ($._f.refs ? $._f.refs.every((N) => !Xc(N)) : !Xc($._f.ref)) &&
          ke(E);
      }
      a.unMount = new Set();
    },
    I = (E, $) => !t.disabled && (E && $ && De(i, E, $), !Pr(Z(), o)),
    _ = (E, $, N) =>
      rw(E, a, { ...(s.mount ? i : rt($) ? o : Kn(E) ? { [E]: $ } : $) }, N, $),
    W = (E) => ic(Q(s.mount ? i : o, E, t.shouldUnregister ? Q(o, E, []) : [])),
    A = (E, $, N = {}) => {
      const H = Q(r, E);
      let B = $;
      if (H) {
        const j = H._f;
        j &&
          (!j.disabled && De(i, E, uw($, j)),
          (B = jl(j.ref) && Ut($) ? "" : $),
          sw(j.ref)
            ? [...j.ref.options].forEach(
                (X) => (X.selected = B.includes(X.value))
              )
            : j.refs
            ? ia(j.ref)
              ? j.refs.length > 1
                ? j.refs.forEach(
                    (X) =>
                      (!X.defaultChecked || !X.disabled) &&
                      (X.checked = Array.isArray(B)
                        ? !!B.find((ie) => ie === X.value)
                        : B === X.value)
                  )
                : j.refs[0] && (j.refs[0].checked = !!B)
              : j.refs.forEach((X) => (X.checked = X.value === B))
            : fh(j.ref)
            ? (j.ref.value = "")
            : ((j.ref.value = B),
              j.ref.type || c.values.next({ name: E, values: { ...i } })));
      }
      (N.shouldDirty || N.shouldTouch) &&
        P(E, B, N.shouldTouch, N.shouldDirty, !0),
        N.shouldValidate && G(E);
    },
    L = (E, $, N) => {
      for (const H in $) {
        const B = $[H],
          j = `${E}.${H}`,
          X = Q(r, j);
        (a.array.has(E) || at(B) || (X && !X._f)) && !co(B)
          ? L(j, B, N)
          : A(j, B, N);
      }
    },
    V = (E, $, N = {}) => {
      const H = Q(r, E),
        B = a.array.has(E),
        j = Kt($);
      De(i, E, j),
        B
          ? (c.array.next({ name: E, values: { ...i } }),
            (d.isDirty || d.dirtyFields) &&
              N.shouldDirty &&
              c.state.next({
                name: E,
                dirtyFields: Ki(o, i),
                isDirty: I(E, j),
              }))
          : H && !H._f && !Ut(j)
          ? L(E, j, N)
          : A(E, j, N),
        dy(E, a) && c.state.next({ ...n }),
        c.values.next({ name: s.mount ? E : void 0, values: { ...i } });
    },
    U = async (E) => {
      s.mount = !0;
      const $ = E.target;
      let N = $.name,
        H = !0;
      const B = Q(r, N),
        j = () => ($.type ? Jc(B._f) : XS(E)),
        X = (ie) => {
          H =
            Number.isNaN(ie) ||
            (co(ie) && isNaN(ie.getTime())) ||
            Pr(ie, Q(i, N, ie));
        };
      if (B) {
        let ie, Le;
        const ge = j(),
          $e = E.type === Vl.BLUR || E.type === Vl.FOCUS_OUT,
          Ze =
            (!Z_(B._f) && !t.resolver && !Q(n.errors, N) && !B._f.deps) ||
            eL($e, Q(n.touchedFields, N), n.isSubmitted, w, f),
          xt = dy(N, a, $e);
        De(i, N, ge),
          $e
            ? (B._f.onBlur && B._f.onBlur(E), l && l(0))
            : B._f.onChange && B._f.onChange(E);
        const ye = P(N, ge, $e, !1),
          yt = !qt(ye) || xt;
        if (
          (!$e && c.values.next({ name: N, type: E.type, values: { ...i } }),
          Ze)
        )
          return (
            d.isValid && (t.mode === "onBlur" && $e ? C() : $e || C()),
            yt && c.state.next({ name: N, ...(xt ? {} : ye) })
          );
        if ((!$e && xt && c.state.next({ ...n }), t.resolver)) {
          const { errors: yr } = await T([N]);
          if ((X(ge), H)) {
            const sa = vy(n.errors, r, N),
              ne = vy(yr, r, sa.name || N);
            (ie = ne.error), (N = ne.name), (Le = qt(yr));
          }
        } else
          h([N], !0),
            (ie = (await gy(B, a.disabled, i, y, t.shouldUseNativeValidation))[
              N
            ]),
            h([N]),
            X(ge),
            H && (ie ? (Le = !1) : d.isValid && (Le = await g(r, !0)));
        H && (B._f.deps && G(B._f.deps), R(N, Le, ie, ye));
      }
    },
    z = (E, $) => {
      if (Q(n.errors, $) && E.focus) return E.focus(), 1;
    },
    G = async (E, $ = {}) => {
      let N, H;
      const B = ps(E);
      if (t.resolver) {
        const j = await M(rt(E) ? E : B);
        (N = qt(j)), (H = E ? !B.some((X) => Q(j, X)) : N);
      } else
        E
          ? ((H = (
              await Promise.all(
                B.map(async (j) => {
                  const X = Q(r, j);
                  return await g(X && X._f ? { [j]: X } : X);
                })
              )
            ).every(Boolean)),
            !(!H && !n.isValid) && C())
          : (H = N = await g(r));
      return (
        c.state.next({
          ...(!Kn(E) || (d.isValid && N !== n.isValid) ? {} : { name: E }),
          ...(t.resolver || !E ? { isValid: N } : {}),
          errors: n.errors,
        }),
        $.shouldFocus && !H && hs(r, z, E ? B : a.mount),
        H
      );
    },
    Z = (E) => {
      const $ = { ...(s.mount ? i : o) };
      return rt(E) ? $ : Kn(E) ? Q($, E) : E.map((N) => Q($, N));
    },
    oe = (E, $) => ({
      invalid: !!Q(($ || n).errors, E),
      isDirty: !!Q(($ || n).dirtyFields, E),
      error: Q(($ || n).errors, E),
      isValidating: !!Q(n.validatingFields, E),
      isTouched: !!Q(($ || n).touchedFields, E),
    }),
    fe = (E) => {
      E && ps(E).forEach(($) => pt(n.errors, $)),
        c.state.next({ errors: E ? n.errors : {} });
    },
    ue = (E, $, N) => {
      const H = (Q(r, E, { _f: {} })._f || {}).ref,
        B = Q(n.errors, E) || {},
        { ref: j, message: X, type: ie, ...Le } = B;
      De(n.errors, E, { ...Le, ...$, ref: H }),
        c.state.next({ name: E, errors: n.errors, isValid: !1 }),
        N && N.shouldFocus && H && H.focus && H.focus();
    },
    pe = (E, $) =>
      Hn(E)
        ? c.values.subscribe({ next: (N) => E(_(void 0, $), N) })
        : _(E, $, !0),
    ke = (E, $ = {}) => {
      for (const N of E ? ps(E) : a.mount)
        a.mount.delete(N),
          a.array.delete(N),
          $.keepValue || (pt(r, N), pt(i, N)),
          !$.keepError && pt(n.errors, N),
          !$.keepDirty && pt(n.dirtyFields, N),
          !$.keepTouched && pt(n.touchedFields, N),
          !$.keepIsValidating && pt(n.validatingFields, N),
          !t.shouldUnregister && !$.keepDefaultValue && pt(o, N);
      c.values.next({ values: { ...i } }),
        c.state.next({ ...n, ...($.keepDirty ? { isDirty: I() } : {}) }),
        !$.keepIsValid && C();
    },
    Ee = ({ disabled: E, name: $, field: N, fields: H }) => {
      ((hn(E) && s.mount) || E || a.disabled.has($)) &&
        (E ? a.disabled.add($) : a.disabled.delete($),
        P($, Jc(N ? N._f : Q(H, $)._f), !1, !1, !0));
    },
    Ge = (E, $ = {}) => {
      let N = Q(r, E);
      const H = hn($.disabled) || hn(t.disabled);
      return (
        De(r, E, {
          ...(N || {}),
          _f: {
            ...(N && N._f ? N._f : { ref: { name: E } }),
            name: E,
            mount: !0,
            ...$,
          },
        }),
        a.mount.add(E),
        N
          ? Ee({
              field: N,
              disabled: hn($.disabled) ? $.disabled : t.disabled,
              name: E,
            })
          : k(E, !0, $.value),
        {
          ...(H ? { disabled: $.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!$.required,
                min: qi($.min),
                max: qi($.max),
                minLength: qi($.minLength),
                maxLength: qi($.maxLength),
                pattern: qi($.pattern),
              }
            : {}),
          name: E,
          onChange: U,
          onBlur: U,
          ref: (B) => {
            if (B) {
              Ge(E, $), (N = Q(r, E));
              const j =
                  (rt(B.value) &&
                    B.querySelectorAll &&
                    B.querySelectorAll("input,select,textarea")[0]) ||
                  B,
                X = Q_(j),
                ie = N._f.refs || [];
              if (X ? ie.find((Le) => Le === j) : j === N._f.ref) return;
              De(r, E, {
                _f: {
                  ...N._f,
                  ...(X
                    ? {
                        refs: [
                          ...ie.filter(Xc),
                          j,
                          ...(Array.isArray(Q(o, E)) ? [{}] : []),
                        ],
                        ref: { type: j.type, name: E },
                      }
                    : { ref: j }),
                },
              }),
                k(E, !1, void 0, j);
            } else
              (N = Q(r, E, {})),
                N._f && (N._f.mount = !1),
                (t.shouldUnregister || $.shouldUnregister) &&
                  !(JS(a.array, E) && s.action) &&
                  a.unMount.add(E);
          },
        }
      );
    },
    Oe = () => t.shouldFocusError && hs(r, z, a.mount),
    de = (E) => {
      hn(E) &&
        (c.state.next({ disabled: E }),
        hs(
          r,
          ($, N) => {
            const H = Q(r, N);
            H &&
              (($.disabled = H._f.disabled || E),
              Array.isArray(H._f.refs) &&
                H._f.refs.forEach((B) => {
                  B.disabled = H._f.disabled || E;
                }));
          },
          0,
          !1
        ));
    },
    be = (E, $) => async (N) => {
      let H;
      N && (N.preventDefault && N.preventDefault(), N.persist && N.persist());
      let B = Kt(i);
      if (a.disabled.size) for (const j of a.disabled) De(B, j, void 0);
      if ((c.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: j, values: X } = await T();
        (n.errors = j), (B = X);
      } else await g(r);
      if ((pt(n.errors, "root"), qt(n.errors))) {
        c.state.next({ errors: {} });
        try {
          await E(B, N);
        } catch (j) {
          H = j;
        }
      } else $ && (await $({ ...n.errors }, N)), Oe(), setTimeout(Oe);
      if (
        (c.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: qt(n.errors) && !H,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        H)
      )
        throw H;
    },
    ce = (E, $ = {}) => {
      Q(r, E) &&
        (rt($.defaultValue)
          ? V(E, Kt(Q(o, E)))
          : (V(E, $.defaultValue), De(o, E, Kt($.defaultValue))),
        $.keepTouched || pt(n.touchedFields, E),
        $.keepDirty ||
          (pt(n.dirtyFields, E),
          (n.isDirty = $.defaultValue ? I(E, Kt(Q(o, E))) : I())),
        $.keepError || (pt(n.errors, E), d.isValid && C()),
        c.state.next({ ...n }));
    },
    Ne = (E, $ = {}) => {
      const N = E ? Kt(E) : o,
        H = Kt(N),
        B = qt(E),
        j = B ? o : H;
      if (($.keepDefaultValues || (o = N), !$.keepValues)) {
        if ($.keepDirtyValues) {
          const X = new Set([...a.mount, ...Object.keys(Ki(o, i))]);
          for (const ie of Array.from(X))
            Q(n.dirtyFields, ie) ? De(j, ie, Q(i, ie)) : V(ie, Q(j, ie));
        } else {
          if (lh && rt(E))
            for (const X of a.mount) {
              const ie = Q(r, X);
              if (ie && ie._f) {
                const Le = Array.isArray(ie._f.refs)
                  ? ie._f.refs[0]
                  : ie._f.ref;
                if (jl(Le)) {
                  const ge = Le.closest("form");
                  if (ge) {
                    ge.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (i = t.shouldUnregister ? ($.keepDefaultValues ? Kt(o) : {}) : Kt(j)),
          c.array.next({ values: { ...j } }),
          c.values.next({ values: { ...j } });
      }
      (a = {
        mount: $.keepDirtyValues ? a.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (s.mount = !d.isValid || !!$.keepIsValid || !!$.keepDirtyValues),
        (s.watch = !!t.shouldUnregister),
        c.state.next({
          submitCount: $.keepSubmitCount ? n.submitCount : 0,
          isDirty: B
            ? !1
            : $.keepDirty
            ? n.isDirty
            : !!($.keepDefaultValues && !Pr(E, o)),
          isSubmitted: $.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: B
            ? {}
            : $.keepDirtyValues
            ? $.keepDefaultValues && i
              ? Ki(o, i)
              : n.dirtyFields
            : $.keepDefaultValues && E
            ? Ki(o, E)
            : $.keepDirty
            ? n.dirtyFields
            : {},
          touchedFields: $.keepTouched ? n.touchedFields : {},
          errors: $.keepErrors ? n.errors : {},
          isSubmitSuccessful: $.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    me = (E, $) => Ne(Hn(E) ? E(i) : E, $);
  return {
    control: {
      register: Ge,
      unregister: ke,
      getFieldState: oe,
      handleSubmit: be,
      setError: ue,
      _executeSchema: T,
      _getWatch: _,
      _getDirty: I,
      _updateValid: C,
      _removeUnmounted: O,
      _updateFieldArray: p,
      _updateDisabledField: Ee,
      _getFieldArray: W,
      _reset: Ne,
      _resetDefaultValues: () =>
        Hn(t.defaultValues) &&
        t.defaultValues().then((E) => {
          me(E, t.resetOptions), c.state.next({ isLoading: !1 });
        }),
      _updateFormState: (E) => {
        n = { ...n, ...E };
      },
      _disableForm: de,
      _subjects: c,
      _proxyFormState: d,
      _setErrors: b,
      get _fields() {
        return r;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return s;
      },
      set _state(E) {
        s = E;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return a;
      },
      set _names(E) {
        a = E;
      },
      get _formState() {
        return n;
      },
      set _formState(E) {
        n = E;
      },
      get _options() {
        return t;
      },
      set _options(E) {
        t = { ...t, ...E };
      },
    },
    trigger: G,
    register: Ge,
    handleSubmit: be,
    watch: pe,
    setValue: V,
    getValues: Z,
    reset: me,
    resetField: ce,
    clearErrors: fe,
    unregister: ke,
    setError: ue,
    setFocus: (E, $ = {}) => {
      const N = Q(r, E),
        H = N && N._f;
      if (H) {
        const B = H.refs ? H.refs[0] : H.ref;
        B.focus && (B.focus(), $.shouldSelect && Hn(B.select) && B.select());
      }
    },
    getFieldState: oe,
  };
}
function cw(e = {}) {
  const t = ve.useRef(void 0),
    n = ve.useRef(void 0),
    [r, o] = ve.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Hn(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: Hn(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...rL(e), formState: r });
  const i = t.current.control;
  return (
    (i._options = e),
    dh({
      subject: i._subjects.state,
      next: (s) => {
        tw(s, i._proxyFormState, i._updateFormState, !0) &&
          o({ ...i._formState });
      },
    }),
    ve.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]),
    ve.useEffect(() => {
      if (i._proxyFormState.isDirty) {
        const s = i._getDirty();
        s !== r.isDirty && i._subjects.state.next({ isDirty: s });
      }
    }, [i, r.isDirty]),
    ve.useEffect(() => {
      e.values && !Pr(e.values, n.current)
        ? (i._reset(e.values, i._options.resetOptions),
          (n.current = e.values),
          o((s) => ({ ...s })))
        : i._resetDefaultValues();
    }, [e.values, i]),
    ve.useEffect(() => {
      e.errors && i._setErrors(e.errors);
    }, [e.errors, i]),
    ve.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch &&
          ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    ve.useEffect(() => {
      e.shouldUnregister && i._subjects.values.next({ values: i._getWatch() });
    }, [e.shouldUnregister, i]),
    (t.current.formState = ew(r, i)),
    t.current
  );
}
const oL = q("span")({ color: "grey" }),
  iL = q(kp)({
    textDecoration: "none",
    color: "#1976d2",
    "&:hover": { textDecoration: "underline" },
  }),
  sL = ({ onSubmit: e }) => {
    const {
      control: t,
      handleSubmit: n,
      getValues: r,
    } = cw({
      mode: "onBlur",
      defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
    });
    return J(mt, {
      component: "form",
      onSubmit: n(e),
      sx: { display: "flex", flexDirection: "column", gap: 2 },
      children: [
        x(Qo, {
          name: "name",
          control: t,
          rules: { required: "Username is required" },
          render: ({ field: o, fieldState: i }) => {
            var s;
            return x(Nt, {
              ...o,
              label: "Username",
              error: !!i.error,
              helperText: (s = i.error) == null ? void 0 : s.message,
            });
          },
        }),
        x(Qo, {
          name: "email",
          control: t,
          rules: {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          },
          render: ({ field: o, fieldState: i }) => {
            var s;
            return x(Nt, {
              ...o,
              label: "Email",
              error: !!i.error,
              helperText: (s = i.error) == null ? void 0 : s.message,
            });
          },
        }),
        x(Qo, {
          name: "password",
          control: t,
          rules: {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          },
          render: ({ field: o, fieldState: i }) => {
            var s;
            return x(Nt, {
              ...o,
              type: "password",
              label: "Password",
              error: !!i.error,
              helperText: (s = i.error) == null ? void 0 : s.message,
            });
          },
        }),
        x(Qo, {
          name: "confirmPassword",
          control: t,
          rules: {
            required: "Confirm password is required",
            validate: (o) => {
              const { password: i } = r();
              return o === i || "Passwords do not match";
            },
          },
          render: ({ field: o, fieldState: i }) => {
            var s;
            return x(Nt, {
              ...o,
              type: "password",
              label: "Confirm Password",
              error: !!i.error,
              helperText: (s = i.error) == null ? void 0 : s.message,
            });
          },
        }),
        x(nn, { type: "submit", variant: "contained", children: "Sign Up" }),
        J(mt, {
          sx: { display: "flex", alignItems: "center", gap: 1 },
          children: [
            x(oL, { children: "Already an user? " }),
            x(iL, { to: "/usersignup/login", replace: !0, children: "Login" }),
          ],
        }),
      ],
    });
  },
  aL = q("span")({ color: "grey" }),
  lL = q(kp)({
    textDecoration: "none",
    color: "#1976d2",
    "&:hover": { textDecoration: "underline" },
  }),
  uL = ({ onSubmit: e }) => {
    const {
      control: t,
      handleSubmit: n,
      formState: { errors: r },
    } = cw({ mode: "onBlur" });
    return J(mt, {
      component: "form",
      onSubmit: n(e),
      sx: { display: "flex", flexDirection: "column", gap: 2 },
      children: [
        x(Qo, {
          name: "email",
          control: t,
          rules: {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          },
          render: ({ field: o, fieldState: i }) => {
            var s;
            return x(Nt, {
              ...o,
              label: "Email",
              error: !!i.error,
              helperText: (s = i.error) == null ? void 0 : s.message,
            });
          },
        }),
        x(Qo, {
          name: "password",
          control: t,
          rules: { required: "Password is required" },
          render: ({ field: o, fieldState: i }) => {
            var s;
            return x(Nt, {
              ...o,
              type: "password",
              label: "Password",
              error: !!i.error,
              helperText: (s = i.error) == null ? void 0 : s.message,
            });
          },
        }),
        x(nn, { type: "submit", variant: "contained", children: "Log In" }),
        J(mt, {
          sx: { display: "flex", alignItems: "center", gap: 1 },
          children: [
            x(aL, { children: "Not an user? " }),
            x(lL, {
              to: "/usersignup/signup",
              replace: !0,
              children: "Sign up",
            }),
          ],
        }),
      ],
    });
  },
  cL = async (e) => {
    try {
      await Bt.post(`${Tt.baseURL}/oauth/signup`, e);
    } catch (t) {
      throw t;
    }
  },
  dL = async (e) => {
    try {
      return await Bt.post(`${Tt.baseURL}/oauth/login`, e);
    } catch (t) {
      throw t;
    }
  },
  Sy = { signupUser: cL, loginUser: dL };
function fL() {
  const [e, t] = S.useState(!1),
    { handleError: n } = oa(),
    r = xp();
  return J(Zc, {
    children: [
      e &&
        x(mt, {
          sx: { display: "flex", justifyContent: "center", my: 2 },
          children: x(Eo, {}),
        }),
      !e &&
        J(W0, {
          children: [
            x(rr, { path: "/", element: x(Rx, { to: "signup" }) }),
            x(rr, {
              path: "signup",
              element: x(sL, {
                onSubmit: async (s) => {
                  t(!0), console.log("Signup Data:", s);
                  try {
                    (await Sy.signupUser(s)).status === 201 && r("/");
                  } catch (a) {
                    n(a);
                  } finally {
                    t(!1);
                  }
                },
              }),
            }),
            x(rr, {
              path: "login",
              element: x(uL, {
                onSubmit: async (s) => {
                  t(!0), console.log("Signup Data:", s);
                  try {
                    (await Sy.loginUser(s)).status === 200 && r("/");
                  } catch (a) {
                    n(a);
                  } finally {
                    t(!1);
                  }
                },
              }),
            }),
          ],
        }),
    ],
  });
}
const pL = Je(
  x("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
  }),
  "Close"
);
function hL() {
  const {
    open: e,
    setOpen: t,
    severity: n,
    notification: r,
  } = S.useContext(Qr);
  return (
    S.useEffect(() => {
      if (e) {
        const i = setTimeout(() => {
          t(!1);
        }, 4e3);
        return () => clearTimeout(i);
      }
    }, [e]),
    e
      ? x(eM, {
          variant: "filled",
          severity: n,
          sx: {
            top: 100,
            left: 75,
            right: 75,
            position: "fixed",
            zIndex: 9999,
          },
          action: x(Ju, {
            size: "small",
            onClick: () => {
              t(!1);
            },
            children: x(pL, { sx: { color: "#ffffff" }, fontSize: "small" }),
          }),
          children: r,
        })
      : null
  );
}
const mL = Je(
    x("path", {
      d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z",
    }),
    "Notifications"
  ),
  gL = async () => {
    try {
      await Bt.post("/api/v1/sse/acknowledge"),
        console.log("Notification acknowledged to backend from service");
    } catch (e) {
      throw (
        (console.error("Error acknowledging notification from service:", e), e)
      );
    }
  },
  yL = { acknowledgeNotification: gL };
function vL() {
  const [e, t] = S.useState(null),
    {
      notifications: n,
      notificationCount: r,
      addNotification: o,
      clearNotifications: i,
    } = S.useContext(Qr),
    [s, a] = S.useState(r),
    l = !!e;
  return (
    S.useEffect(() => {
      a(r);
    }, [r]),
    S.useEffect(() => {
      const c = new EventSource("/api/v1/sse");
      return (
        (c.onmessage = async (f) => {
          try {
            const w = JSON.parse(f.data);
            w.studentName && o(w);
          } catch (w) {
            console.error("Error parsing SSE event data:", w);
          }
        }),
        (c.onerror = (f) => {
          console.error("SSE error:", f), c.close();
        }),
        () => {
          c.close();
        }
      );
    }, []),
    J("div", {
      children: [
        x(Ju, {
          color: "inherit",
          onClick: (c) => {
            t(c.currentTarget);
          },
          children: x(KM, {
            badgeContent: s,
            color: "error",
            children: x(mL, {}),
          }),
        }),
        x(LS, {
          anchorEl: e,
          open: l,
          onClose: async () => {
            t(null), i(), a(0);
            try {
              await yL.acknowledgeNotification(),
                console.log("Notification acknowledged to backend");
            } catch (c) {
              console.error("Error acknowledging notification:", c);
            }
          },
          children:
            n && n.length === 0
              ? x(wf, {
                  disabled: !0,
                  children: x(Sn, {
                    variant: "body2",
                    children: "No new notifications",
                  }),
                })
              : n &&
                n.map((c, f) =>
                  x(
                    wf,
                    {
                      children: J(Sn, {
                        variant: "body2",
                        children: [c.studentName, " - ", c.message],
                      }),
                    },
                    f
                  )
                ),
        }),
      ],
    })
  );
}
const SL = Je(
    x("path", {
      d: "M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0zm6.04-9.66-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19a2.04 2.04 0 0 0-1.92 0",
    }),
    "SchoolRounded"
  ),
  wL = ra({
    palette: { primary: { main: "#9933ff" }, secondary: { main: "#ffffff" } },
  }),
  Lo = q(kp)({
    color: "white",
    textDecoration: "none",
    transition: "all 0.1s ease",
    "&:hover": { fontSize: "1.1rem" },
  });
function bL() {
  return x(yS, {
    theme: wL,
    children: J(x_, {
      children: [
        x(dM, {
          position: "static",
          children: J(f_, {
            children: [
              x(Sn, {
                variant: "h6",
                noWrap: !0,
                component: "div",
                sx: { flexGrow: 1 },
                children: J(Lo, {
                  to: "/",
                  children: ["Attendance App", x(SL, {})],
                }),
              }),
              J(mt, {
                sx: { display: "flex", gap: 2, alignItems: "center" },
                children: [
                  J(cI, {
                    "aria-label": "breadcrumb",
                    separator: "|",
                    sx: { "& .MuiBreadcrumbs-separator": { color: "white" } },
                    children: [
                      x(Lo, { to: "/", children: "Home" }),
                      x(Lo, { to: "/view", children: "View Attendance" }),
                      x(Lo, { to: "/manage", children: "Manage Students" }),
                      x(Lo, { to: "/settings", children: "Settings" }),
                      x(Lo, { to: "/usersignup", children: "Sign Up" }),
                    ],
                  }),
                  x(vL, {}),
                ],
              }),
            ],
          }),
        }),
        x("div", {
          children: J(PS, {
            maxWidth: "lg",
            sx: { mt: 4, padding: { xs: 2, md: 3 } },
            children: [
              x(hL, {}),
              J(W0, {
                children: [
                  x(rr, { path: "/", element: x(E_, { baseURL: Tt.baseURL }) }),
                  x(rr, {
                    path: "/view",
                    element: x(R_, { baseURL: Tt.baseURL }),
                  }),
                  x(rr, {
                    path: "/manage",
                    element: x(__, { baseURL: Tt.baseURL }),
                  }),
                  x(rr, { path: "/settings", element: x(D_, {}) }),
                  x(rr, { path: "/usersignup/*", element: x(fL, {}) }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const CL = ra();
function xL() {
  return x(yS, { theme: CL, children: x(_x, { children: x(bL, {}) }) });
}
ed.createRoot(document.getElementById("root")).render(x(xL, {}));
