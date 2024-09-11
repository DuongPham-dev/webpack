/*! For license information please see main.js.LICENSE.txt */
(() => {
  "use strict";
  var t,
    r,
    e = {
      661: (t, r, e) => {
        var n = e(396),
          o = e.n(n),
          i = e(877);
        e.n(i)()(o()).push([
          t.id,
          "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nh1 {\n  color: red;\n}\n",
          "",
        ]);
      },
      877: (t) => {
        t.exports = function (t) {
          var r = [];
          return (
            (r.toString = function () {
              return this.map(function (r) {
                var e = "",
                  n = void 0 !== r[5];
                return (
                  r[4] && (e += "@supports (".concat(r[4], ") {")),
                  r[2] && (e += "@media ".concat(r[2], " {")),
                  n &&
                    (e += "@layer".concat(
                      r[5].length > 0 ? " ".concat(r[5]) : "",
                      " {"
                    )),
                  (e += t(r)),
                  n && (e += "}"),
                  r[2] && (e += "}"),
                  r[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (r.i = function (t, e, n, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (n)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (a[u] = !0);
                }
              for (var l = 0; l < t.length; l++) {
                var s = [].concat(t[l]);
                (n && a[s[0]]) ||
                  (void 0 !== i &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = i)),
                  e &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = e))
                      : (s[2] = e)),
                  o &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = o))
                      : (s[4] = "".concat(o))),
                  r.push(s));
              }
            }),
            r
          );
        };
      },
      396: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
    },
    n = {};
  function o(t) {
    var r = n[t];
    if (void 0 !== r) return r.exports;
    var i = (n[t] = { id: t, exports: {} });
    return e[t](i, i.exports, o), i.exports;
  }
  (o.m = e),
    (o.n = (t) => {
      var r = t && t.__esModule ? () => t.default : () => t;
      return o.d(r, { a: r }), r;
    }),
    (o.d = (t, r) => {
      for (var e in r)
        o.o(r, e) &&
          !o.o(t, e) &&
          Object.defineProperty(t, e, { enumerable: !0, get: r[e] });
    }),
    (o.f = {}),
    (o.e = (t) =>
      Promise.all(Object.keys(o.f).reduce((r, e) => (o.f[e](t, r), r), []))),
    (o.u = (t) => t + ".main.js"),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r)),
    (t = {}),
    (r = "manual build js project:"),
    (o.l = (e, n, i, a) => {
      if (t[e]) t[e].push(n);
      else {
        var c, u;
        if (void 0 !== i)
          for (
            var l = document.getElementsByTagName("script"), s = 0;
            s < l.length;
            s++
          ) {
            var f = l[s];
            if (
              f.getAttribute("src") == e ||
              f.getAttribute("data-webpack") == r + i
            ) {
              c = f;
              break;
            }
          }
        c ||
          ((u = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          o.nc && c.setAttribute("nonce", o.nc),
          c.setAttribute("data-webpack", r + i),
          (c.src = e)),
          (t[e] = [n]);
        var h = (r, n) => {
            (c.onerror = c.onload = null), clearTimeout(p);
            var o = t[e];
            if (
              (delete t[e],
              c.parentNode && c.parentNode.removeChild(c),
              o && o.forEach((t) => t(n)),
              r)
            )
              return r(n);
          },
          p = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: c }),
            12e4
          );
        (c.onerror = h.bind(null, c.onerror)),
          (c.onload = h.bind(null, c.onload)),
          u && document.head.appendChild(c);
      }
    }),
    (o.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (() => {
      var t;
      o.g.importScripts && (t = o.g.location + "");
      var r = o.g.document;
      if (
        !t &&
        r &&
        (r.currentScript &&
          "SCRIPT" === r.currentScript.tagName.toUpperCase() &&
          (t = r.currentScript.src),
        !t)
      ) {
        var e = r.getElementsByTagName("script");
        if (e.length)
          for (var n = e.length - 1; n > -1 && (!t || !/^http(s?):/.test(t)); )
            t = e[n--].src;
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = t);
    })(),
    (() => {
      var t = { 792: 0 };
      o.f.j = (r, e) => {
        var n = o.o(t, r) ? t[r] : void 0;
        if (0 !== n)
          if (n) e.push(n[2]);
          else {
            var i = new Promise((e, o) => (n = t[r] = [e, o]));
            e.push((n[2] = i));
            var a = o.p + o.u(r),
              c = new Error();
            o.l(
              a,
              (e) => {
                if (o.o(t, r) && (0 !== (n = t[r]) && (t[r] = void 0), n)) {
                  var i = e && ("load" === e.type ? "missing" : e.type),
                    a = e && e.target && e.target.src;
                  (c.message =
                    "Loading chunk " + r + " failed.\n(" + i + ": " + a + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = i),
                    (c.request = a),
                    n[1](c);
                }
              },
              "chunk-" + r,
              r
            );
          }
      };
      var r = (r, e) => {
          var n,
            i,
            [a, c, u] = e,
            l = 0;
          if (a.some((r) => 0 !== t[r])) {
            for (n in c) o.o(c, n) && (o.m[n] = c[n]);
            u && u(o);
          }
          for (r && r(e); l < a.length; l++)
            (i = a[l]), o.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
        },
        e = (self.webpackChunkmanual_build_js_project =
          self.webpackChunkmanual_build_js_project || []);
      e.forEach(r.bind(null, 0)), (e.push = r.bind(null, e.push.bind(e)));
    })();
  function i(t) {
    return (
      (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      i(t)
    );
  }
  function a() {
    a = function () {
      return r;
    };
    var t,
      r = {},
      e = Object.prototype,
      n = e.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (t, r, e) {
          t[r] = e.value;
        },
      c = "function" == typeof Symbol ? Symbol : {},
      u = c.iterator || "@@iterator",
      l = c.asyncIterator || "@@asyncIterator",
      s = c.toStringTag || "@@toStringTag";
    function f(t, r, e) {
      return (
        Object.defineProperty(t, r, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        t[r]
      );
    }
    try {
      f({}, "");
    } catch (t) {
      f = function (t, r, e) {
        return (t[r] = e);
      };
    }
    function h(t, r, e, n) {
      var i = r && r.prototype instanceof b ? r : b,
        a = Object.create(i.prototype),
        c = new G(n || []);
      return o(a, "_invoke", { value: O(t, e, c) }), a;
    }
    function p(t, r, e) {
      try {
        return { type: "normal", arg: t.call(r, e) };
      } catch (t) {
        return { type: "throw", arg: t };
      }
    }
    r.wrap = h;
    var d = "suspendedStart",
      v = "suspendedYield",
      y = "executing",
      g = "completed",
      m = {};
    function b() {}
    function w() {}
    function x() {}
    var E = {};
    f(E, u, function () {
      return this;
    });
    var L = Object.getPrototypeOf,
      j = L && L(L(A([])));
    j && j !== e && n.call(j, u) && (E = j);
    var _ = (x.prototype = b.prototype = Object.create(E));
    function S(t) {
      ["next", "throw", "return"].forEach(function (r) {
        f(t, r, function (t) {
          return this._invoke(r, t);
        });
      });
    }
    function k(t, r) {
      function e(o, a, c, u) {
        var l = p(t[o], t, a);
        if ("throw" !== l.type) {
          var s = l.arg,
            f = s.value;
          return f && "object" == i(f) && n.call(f, "__await")
            ? r.resolve(f.__await).then(
                function (t) {
                  e("next", t, c, u);
                },
                function (t) {
                  e("throw", t, c, u);
                }
              )
            : r.resolve(f).then(
                function (t) {
                  (s.value = t), c(s);
                },
                function (t) {
                  return e("throw", t, c, u);
                }
              );
        }
        u(l.arg);
      }
      var a;
      o(this, "_invoke", {
        value: function (t, n) {
          function o() {
            return new r(function (r, o) {
              e(t, n, r, o);
            });
          }
          return (a = a ? a.then(o, o) : o());
        },
      });
    }
    function O(r, e, n) {
      var o = d;
      return function (i, a) {
        if (o === y) throw Error("Generator is already running");
        if (o === g) {
          if ("throw" === i) throw a;
          return { value: t, done: !0 };
        }
        for (n.method = i, n.arg = a; ; ) {
          var c = n.delegate;
          if (c) {
            var u = P(c, n);
            if (u) {
              if (u === m) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;
          else if ("throw" === n.method) {
            if (o === d) throw ((o = g), n.arg);
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = y;
          var l = p(r, e, n);
          if ("normal" === l.type) {
            if (((o = n.done ? g : v), l.arg === m)) continue;
            return { value: l.arg, done: n.done };
          }
          "throw" === l.type &&
            ((o = g), (n.method = "throw"), (n.arg = l.arg));
        }
      };
    }
    function P(r, e) {
      var n = e.method,
        o = r.iterator[n];
      if (o === t)
        return (
          (e.delegate = null),
          ("throw" === n &&
            r.iterator.return &&
            ((e.method = "return"),
            (e.arg = t),
            P(r, e),
            "throw" === e.method)) ||
            ("return" !== n &&
              ((e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a '" + n + "' method"
              )))),
          m
        );
      var i = p(o, r.iterator, e.arg);
      if ("throw" === i.type)
        return (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), m;
      var a = i.arg;
      return a
        ? a.done
          ? ((e[r.resultName] = a.value),
            (e.next = r.nextLoc),
            "return" !== e.method && ((e.method = "next"), (e.arg = t)),
            (e.delegate = null),
            m)
          : a
        : ((e.method = "throw"),
          (e.arg = new TypeError("iterator result is not an object")),
          (e.delegate = null),
          m);
    }
    function T(t) {
      var r = { tryLoc: t[0] };
      1 in t && (r.catchLoc = t[1]),
        2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
        this.tryEntries.push(r);
    }
    function N(t) {
      var r = t.completion || {};
      (r.type = "normal"), delete r.arg, (t.completion = r);
    }
    function G(t) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        t.forEach(T, this),
        this.reset(!0);
    }
    function A(r) {
      if (r || "" === r) {
        var e = r[u];
        if (e) return e.call(r);
        if ("function" == typeof r.next) return r;
        if (!isNaN(r.length)) {
          var o = -1,
            a = function e() {
              for (; ++o < r.length; )
                if (n.call(r, o)) return (e.value = r[o]), (e.done = !1), e;
              return (e.value = t), (e.done = !0), e;
            };
          return (a.next = a);
        }
      }
      throw new TypeError(i(r) + " is not iterable");
    }
    return (
      (w.prototype = x),
      o(_, "constructor", { value: x, configurable: !0 }),
      o(x, "constructor", { value: w, configurable: !0 }),
      (w.displayName = f(x, s, "GeneratorFunction")),
      (r.isGeneratorFunction = function (t) {
        var r = "function" == typeof t && t.constructor;
        return (
          !!r && (r === w || "GeneratorFunction" === (r.displayName || r.name))
        );
      }),
      (r.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, x)
            : ((t.__proto__ = x), f(t, s, "GeneratorFunction")),
          (t.prototype = Object.create(_)),
          t
        );
      }),
      (r.awrap = function (t) {
        return { __await: t };
      }),
      S(k.prototype),
      f(k.prototype, l, function () {
        return this;
      }),
      (r.AsyncIterator = k),
      (r.async = function (t, e, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new k(h(t, e, n, o), i);
        return r.isGeneratorFunction(e)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
      }),
      S(_),
      f(_, s, "Generator"),
      f(_, u, function () {
        return this;
      }),
      f(_, "toString", function () {
        return "[object Generator]";
      }),
      (r.keys = function (t) {
        var r = Object(t),
          e = [];
        for (var n in r) e.push(n);
        return (
          e.reverse(),
          function t() {
            for (; e.length; ) {
              var n = e.pop();
              if (n in r) return (t.value = n), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (r.values = A),
      (G.prototype = {
        constructor: G,
        reset: function (r) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = t),
            this.tryEntries.forEach(N),
            !r)
          )
            for (var e in this)
              "t" === e.charAt(0) &&
                n.call(this, e) &&
                !isNaN(+e.slice(1)) &&
                (this[e] = t);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (r) {
          if (this.done) throw r;
          var e = this;
          function o(n, o) {
            return (
              (c.type = "throw"),
              (c.arg = r),
              (e.next = n),
              o && ((e.method = "next"), (e.arg = t)),
              !!o
            );
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              c = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var u = n.call(a, "catchLoc"),
                l = n.call(a, "finallyLoc");
              if (u && l) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!l) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, r) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var o = this.tryEntries[e];
            if (
              o.tryLoc <= this.prev &&
              n.call(o, "finallyLoc") &&
              this.prev < o.finallyLoc
            ) {
              var i = o;
              break;
            }
          }
          i &&
            ("break" === t || "continue" === t) &&
            i.tryLoc <= r &&
            r <= i.finallyLoc &&
            (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = t),
            (a.arg = r),
            i
              ? ((this.method = "next"), (this.next = i.finallyLoc), m)
              : this.complete(a)
          );
        },
        complete: function (t, r) {
          if ("throw" === t.type) throw t.arg;
          return (
            "break" === t.type || "continue" === t.type
              ? (this.next = t.arg)
              : "return" === t.type
              ? ((this.rval = this.arg = t.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === t.type && r && (this.next = r),
            m
          );
        },
        finish: function (t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];
            if (e.finallyLoc === t)
              return this.complete(e.completion, e.afterLoc), N(e), m;
          }
        },
        catch: function (t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];
            if (e.tryLoc === t) {
              var n = e.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                N(e);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (r, e, n) {
          return (
            (this.delegate = { iterator: A(r), resultName: e, nextLoc: n }),
            "next" === this.method && (this.arg = t),
            m
          );
        },
      }),
      r
    );
  }
  function c(t, r, e, n, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value;
    } catch (t) {
      return void e(t);
    }
    c.done ? r(u) : Promise.resolve(u).then(n, o);
  }
  function u(t) {
    return function () {
      var r = this,
        e = arguments;
      return new Promise(function (n, o) {
        var i = t.apply(r, e);
        function a(t) {
          c(i, n, o, a, u, "next", t);
        }
        function u(t) {
          c(i, n, o, a, u, "throw", t);
        }
        a(void 0);
      });
    };
  }
  o(661),
    document.querySelector("button").addEventListener(
      "click",
      u(
        a().mark(function t() {
          return a().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), o.e(815).then(o.bind(o, 815));
                case 2:
                  (0, t.sent.showMessage)("Hello world");
                case 5:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )
    );
})();
