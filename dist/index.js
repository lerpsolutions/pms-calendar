var fn = Object.defineProperty;
var pn = (e, r, t) => r in e ? fn(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var nr = (e, r, t) => (pn(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as R, jsxs as ie, Fragment as jt } from "react/jsx-runtime";
import * as W from "react";
import He, { useRef as xe, useContext as Le, useLayoutEffect as Ir, useMemo as Oe, useDebugValue as or, createElement as mn, createContext as Nr, useState as me, useCallback as we, useEffect as fe, forwardRef as vn } from "react";
var ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, it = {}, yn = {
  get exports() {
    return it;
  },
  set exports(e) {
    it = e;
  }
}, oe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function gn() {
  if (sr)
    return oe;
  sr = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), i = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), v = Symbol.for("react.client.reference");
  function y(u) {
    if (typeof u == "object" && u !== null) {
      var C = u.$$typeof;
      switch (C) {
        case e:
          switch (u = u.type, u) {
            case t:
            case o:
            case n:
            case l:
            case c:
            case p:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case i:
                case a:
                case h:
                case d:
                  return u;
                case s:
                  return u;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  return oe.ContextConsumer = s, oe.ContextProvider = i, oe.Element = e, oe.ForwardRef = a, oe.Fragment = t, oe.Lazy = h, oe.Memo = d, oe.Portal = r, oe.Profiler = o, oe.StrictMode = n, oe.Suspense = l, oe.SuspenseList = c, oe.isContextConsumer = function(u) {
    return y(u) === s;
  }, oe.isContextProvider = function(u) {
    return y(u) === i;
  }, oe.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, oe.isForwardRef = function(u) {
    return y(u) === a;
  }, oe.isFragment = function(u) {
    return y(u) === t;
  }, oe.isLazy = function(u) {
    return y(u) === h;
  }, oe.isMemo = function(u) {
    return y(u) === d;
  }, oe.isPortal = function(u) {
    return y(u) === r;
  }, oe.isProfiler = function(u) {
    return y(u) === o;
  }, oe.isStrictMode = function(u) {
    return y(u) === n;
  }, oe.isSuspense = function(u) {
    return y(u) === l;
  }, oe.isSuspenseList = function(u) {
    return y(u) === c;
  }, oe.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === t || u === o || u === n || u === l || u === c || typeof u == "object" && u !== null && (u.$$typeof === h || u.$$typeof === d || u.$$typeof === i || u.$$typeof === s || u.$$typeof === a || u.$$typeof === v || u.getModuleId !== void 0);
  }, oe.typeOf = y, oe;
}
var se = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function wn() {
  return ir || (ir = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var C = u.$$typeof;
        switch (C) {
          case r:
            switch (u = u.type, u) {
              case n:
              case s:
              case o:
              case c:
              case d:
              case v:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case a:
                  case l:
                  case p:
                  case h:
                    return u;
                  case i:
                    return u;
                  default:
                    return C;
                }
            }
          case t:
            return C;
        }
      }
    }
    var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
    se.ContextConsumer = i, se.ContextProvider = a, se.Element = r, se.ForwardRef = l, se.Fragment = n, se.Lazy = p, se.Memo = h, se.Portal = t, se.Profiler = s, se.StrictMode = o, se.Suspense = c, se.SuspenseList = d, se.isContextConsumer = function(u) {
      return e(u) === i;
    }, se.isContextProvider = function(u) {
      return e(u) === a;
    }, se.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === r;
    }, se.isForwardRef = function(u) {
      return e(u) === l;
    }, se.isFragment = function(u) {
      return e(u) === n;
    }, se.isLazy = function(u) {
      return e(u) === p;
    }, se.isMemo = function(u) {
      return e(u) === h;
    }, se.isPortal = function(u) {
      return e(u) === t;
    }, se.isProfiler = function(u) {
      return e(u) === s;
    }, se.isStrictMode = function(u) {
      return e(u) === o;
    }, se.isSuspense = function(u) {
      return e(u) === c;
    }, se.isSuspenseList = function(u) {
      return e(u) === d;
    }, se.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === n || u === s || u === o || u === c || u === d || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === h || u.$$typeof === a || u.$$typeof === i || u.$$typeof === l || u.$$typeof === y || u.getModuleId !== void 0);
    }, se.typeOf = e;
  }()), se;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = gn() : e.exports = wn();
})(yn);
function xn(e) {
  function r(k, $, S, N, f) {
    for (var j = 0, b = 0, X = 0, V = 0, q, g, ae = 0, le = 0, Q, pe = Q = q = 0, te = 0, ue = 0, rt = 0, he = 0, ct = S.length, nt = ct - 1, Me, G = "", ce = "", wt = "", xt = "", Re; te < ct; ) {
      if (g = S.charCodeAt(te), te === nt && b + V + X + j !== 0 && (b !== 0 && (g = b === 47 ? 10 : 47), V = X = j = 0, ct++, nt++), b + V + X + j === 0) {
        if (te === nt && (0 < ue && (G = G.replace(p, "")), 0 < G.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              G += S.charAt(te);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            for (G = G.trim(), q = G.charCodeAt(0), Q = 1, he = ++te; te < ct; ) {
              switch (g = S.charCodeAt(te)) {
                case 123:
                  Q++;
                  break;
                case 125:
                  Q--;
                  break;
                case 47:
                  switch (g = S.charCodeAt(te + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (pe = te + 1; pe < nt; ++pe)
                          switch (S.charCodeAt(pe)) {
                            case 47:
                              if (g === 42 && S.charCodeAt(pe - 1) === 42 && te + 2 !== pe) {
                                te = pe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (g === 47) {
                                te = pe + 1;
                                break e;
                              }
                          }
                        te = pe;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; te++ < nt && S.charCodeAt(te) !== g; )
                    ;
              }
              if (Q === 0)
                break;
              te++;
            }
            switch (Q = S.substring(he, te), q === 0 && (q = (G = G.replace(h, "").trim()).charCodeAt(0)), q) {
              case 64:
                switch (0 < ue && (G = G.replace(p, "")), g = G.charCodeAt(1), g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ue = $;
                    break;
                  default:
                    ue = L;
                }
                if (Q = r($, ue, Q, g, f + 1), he = Q.length, 0 < I && (ue = t(L, G, rt), Re = a(3, Q, ue, $, P, K, he, g, f, N), G = ue.join(""), Re !== void 0 && (he = (Q = Re.trim()).length) === 0 && (g = 0, Q = "")), 0 < he)
                  switch (g) {
                    case 115:
                      G = G.replace(M, i);
                    case 100:
                    case 109:
                    case 45:
                      Q = G + "{" + Q + "}";
                      break;
                    case 107:
                      G = G.replace(A, "$1 $2"), Q = G + "{" + Q + "}", Q = x === 1 || x === 2 && s("@" + Q, 3) ? "@-webkit-" + Q + "@" + Q : "@" + Q;
                      break;
                    default:
                      Q = G + Q, N === 112 && (Q = (ce += Q, ""));
                  }
                else
                  Q = "";
                break;
              default:
                Q = r($, t($, G, rt), Q, N, f + 1);
            }
            wt += Q, Q = rt = ue = pe = q = 0, G = "", g = S.charCodeAt(++te);
            break;
          case 125:
          case 59:
            if (G = (0 < ue ? G.replace(p, "") : G).trim(), 1 < (he = G.length))
              switch (pe === 0 && (q = G.charCodeAt(0), q === 45 || 96 < q && 123 > q) && (he = (G = G.replace(" ", ":")).length), 0 < I && (Re = a(1, G, $, k, P, K, ce.length, N, f, N)) !== void 0 && (he = (G = Re.trim()).length) === 0 && (G = "\0\0"), q = G.charCodeAt(0), g = G.charCodeAt(1), q) {
                case 0:
                  break;
                case 64:
                  if (g === 105 || g === 99) {
                    xt += G + S.charAt(te);
                    break;
                  }
                default:
                  G.charCodeAt(he - 1) !== 58 && (ce += o(G, q, g, G.charCodeAt(2)));
              }
            rt = ue = pe = q = 0, G = "", g = S.charCodeAt(++te);
        }
      }
      switch (g) {
        case 13:
        case 10:
          b === 47 ? b = 0 : 1 + q === 0 && N !== 107 && 0 < G.length && (ue = 1, G += "\0"), 0 < I * U && a(0, G, $, k, P, K, ce.length, N, f, N), K = 1, P++;
          break;
        case 59:
        case 125:
          if (b + V + X + j === 0) {
            K++;
            break;
          }
        default:
          switch (K++, Me = S.charAt(te), g) {
            case 9:
            case 32:
              if (V + j + b === 0)
                switch (ae) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Me = "";
                    break;
                  default:
                    g !== 32 && (Me = " ");
                }
              break;
            case 0:
              Me = "\\0";
              break;
            case 12:
              Me = "\\f";
              break;
            case 11:
              Me = "\\v";
              break;
            case 38:
              V + b + j === 0 && (ue = rt = 1, Me = "\f" + Me);
              break;
            case 108:
              if (V + b + j + _ === 0 && 0 < pe)
                switch (te - pe) {
                  case 2:
                    ae === 112 && S.charCodeAt(te - 3) === 58 && (_ = ae);
                  case 8:
                    le === 111 && (_ = le);
                }
              break;
            case 58:
              V + b + j === 0 && (pe = te);
              break;
            case 44:
              b + X + V + j === 0 && (ue = 1, Me += "\r");
              break;
            case 34:
            case 39:
              b === 0 && (V = V === g ? 0 : V === 0 ? g : V);
              break;
            case 91:
              V + b + X === 0 && j++;
              break;
            case 93:
              V + b + X === 0 && j--;
              break;
            case 41:
              V + b + j === 0 && X--;
              break;
            case 40:
              if (V + b + j === 0) {
                if (q === 0)
                  switch (2 * ae + 3 * le) {
                    case 533:
                      break;
                    default:
                      q = 1;
                  }
                X++;
              }
              break;
            case 64:
              b + X + V + j + pe + Q === 0 && (Q = 1);
              break;
            case 42:
            case 47:
              if (!(0 < V + j + X))
                switch (b) {
                  case 0:
                    switch (2 * g + 3 * S.charCodeAt(te + 1)) {
                      case 235:
                        b = 47;
                        break;
                      case 220:
                        he = te, b = 42;
                    }
                    break;
                  case 42:
                    g === 47 && ae === 42 && he + 2 !== te && (S.charCodeAt(he + 2) === 33 && (ce += S.substring(he, te + 1)), Me = "", b = 0);
                }
          }
          b === 0 && (G += Me);
      }
      le = ae, ae = g, te++;
    }
    if (he = ce.length, 0 < he) {
      if (ue = $, 0 < I && (Re = a(2, ce, ue, k, P, K, he, N, f, N), Re !== void 0 && (ce = Re).length === 0))
        return xt + ce + wt;
      if (ce = ue.join(",") + "{" + ce + "}", x * _ !== 0) {
        switch (x !== 2 || s(ce, 2) || (_ = 0), _) {
          case 111:
            ce = ce.replace(O, ":-moz-$1") + ce;
            break;
          case 112:
            ce = ce.replace(Z, "::-webkit-input-$1") + ce.replace(Z, "::-moz-$1") + ce.replace(Z, ":-ms-input-$1") + ce;
        }
        _ = 0;
      }
    }
    return xt + ce + wt;
  }
  function t(k, $, S) {
    var N = $.trim().split(C);
    $ = N;
    var f = N.length, j = k.length;
    switch (j) {
      case 0:
      case 1:
        var b = 0;
        for (k = j === 0 ? "" : k[0] + " "; b < f; ++b)
          $[b] = n(k, $[b], S).trim();
        break;
      default:
        var X = b = 0;
        for ($ = []; b < f; ++b)
          for (var V = 0; V < j; ++V)
            $[X++] = n(k[V] + " ", N[b], S).trim();
    }
    return $;
  }
  function n(k, $, S) {
    var N = $.charCodeAt(0);
    switch (33 > N && (N = ($ = $.trim()).charCodeAt(0)), N) {
      case 38:
        return $.replace(E, "$1" + k.trim());
      case 58:
        return k.trim() + $.replace(E, "$1" + k.trim());
      default:
        if (0 < 1 * S && 0 < $.indexOf("\f"))
          return $.replace(E, (k.charCodeAt(0) === 58 ? "" : "$1") + k.trim());
    }
    return k + $;
  }
  function o(k, $, S, N) {
    var f = k + ";", j = 2 * $ + 3 * S + 4 * N;
    if (j === 944) {
      k = f.indexOf(":", 9) + 1;
      var b = f.substring(k, f.length - 1).trim();
      return b = f.substring(0, k).trim() + b + ";", x === 1 || x === 2 && s(b, 1) ? "-webkit-" + b + b : b;
    }
    if (x === 0 || x === 2 && !s(f, 1))
      return f;
    switch (j) {
      case 1015:
        return f.charCodeAt(10) === 97 ? "-webkit-" + f + f : f;
      case 951:
        return f.charCodeAt(3) === 116 ? "-webkit-" + f + f : f;
      case 963:
        return f.charCodeAt(5) === 110 ? "-webkit-" + f + f : f;
      case 1009:
        if (f.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + f + f;
      case 978:
        return "-webkit-" + f + "-moz-" + f + f;
      case 1019:
      case 983:
        return "-webkit-" + f + "-moz-" + f + "-ms-" + f + f;
      case 883:
        if (f.charCodeAt(8) === 45)
          return "-webkit-" + f + f;
        if (0 < f.indexOf("image-set(", 11))
          return f.replace(J, "$1-webkit-$2") + f;
        break;
      case 932:
        if (f.charCodeAt(4) === 45)
          switch (f.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + f.replace("-grow", "") + "-webkit-" + f + "-ms-" + f.replace("grow", "positive") + f;
            case 115:
              return "-webkit-" + f + "-ms-" + f.replace("shrink", "negative") + f;
            case 98:
              return "-webkit-" + f + "-ms-" + f.replace("basis", "preferred-size") + f;
          }
        return "-webkit-" + f + "-ms-" + f + f;
      case 964:
        return "-webkit-" + f + "-ms-flex-" + f + f;
      case 1023:
        if (f.charCodeAt(8) !== 99)
          break;
        return b = f.substring(f.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + b + "-webkit-" + f + "-ms-flex-pack" + b + f;
      case 1005:
        return y.test(f) ? f.replace(v, ":-webkit-") + f.replace(v, ":-moz-") + f : f;
      case 1e3:
        switch (b = f.substring(13).trim(), $ = b.indexOf("-") + 1, b.charCodeAt(0) + b.charCodeAt($)) {
          case 226:
            b = f.replace(m, "tb");
            break;
          case 232:
            b = f.replace(m, "tb-rl");
            break;
          case 220:
            b = f.replace(m, "lr");
            break;
          default:
            return f;
        }
        return "-webkit-" + f + "-ms-" + b + f;
      case 1017:
        if (f.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch ($ = (f = k).length - 10, b = (f.charCodeAt($) === 33 ? f.substring(0, $) : f).substring(k.indexOf(":", 7) + 1).trim(), j = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8))
              break;
          case 115:
            f = f.replace(b, "-webkit-" + b) + ";" + f;
            break;
          case 207:
          case 102:
            f = f.replace(b, "-webkit-" + (102 < j ? "inline-" : "") + "box") + ";" + f.replace(b, "-webkit-" + b) + ";" + f.replace(b, "-ms-" + b + "box") + ";" + f;
        }
        return f + ";";
      case 938:
        if (f.charCodeAt(5) === 45)
          switch (f.charCodeAt(6)) {
            case 105:
              return b = f.replace("-items", ""), "-webkit-" + f + "-webkit-box-" + b + "-ms-flex-" + b + f;
            case 115:
              return "-webkit-" + f + "-ms-flex-item-" + f.replace(F, "") + f;
            default:
              return "-webkit-" + f + "-ms-flex-line-pack" + f.replace("align-content", "").replace(F, "") + f;
          }
        break;
      case 973:
      case 989:
        if (f.charCodeAt(3) !== 45 || f.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (Y.test(k) === !0)
          return (b = k.substring(k.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(k.replace("stretch", "fill-available"), $, S, N).replace(":fill-available", ":stretch") : f.replace(b, "-webkit-" + b) + f.replace(b, "-moz-" + b.replace("fill-", "")) + f;
        break;
      case 962:
        if (f = "-webkit-" + f + (f.charCodeAt(5) === 102 ? "-ms-" + f : "") + f, S + N === 211 && f.charCodeAt(13) === 105 && 0 < f.indexOf("transform", 10))
          return f.substring(0, f.indexOf(";", 27) + 1).replace(u, "$1-webkit-$2") + f;
    }
    return f;
  }
  function s(k, $) {
    var S = k.indexOf($ === 1 ? ":" : "{"), N = k.substring(0, $ !== 3 ? S : 10);
    return S = k.substring(S + 1, k.length - 1), B($ !== 2 ? N : N.replace(z, "$1"), S, $);
  }
  function i(k, $) {
    var S = o($, $.charCodeAt(0), $.charCodeAt(1), $.charCodeAt(2));
    return S !== $ + ";" ? S.replace(T, " or ($1)").substring(4) : "(" + $ + ")";
  }
  function a(k, $, S, N, f, j, b, X, V, q) {
    for (var g = 0, ae = $, le; g < I; ++g)
      switch (le = w[g].call(d, k, ae, S, N, f, j, b, X, V, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ae = le;
      }
    if (ae !== $)
      return ae;
  }
  function l(k) {
    switch (k) {
      case void 0:
      case null:
        I = w.length = 0;
        break;
      default:
        if (typeof k == "function")
          w[I++] = k;
        else if (typeof k == "object")
          for (var $ = 0, S = k.length; $ < S; ++$)
            l(k[$]);
        else
          U = !!k | 0;
    }
    return l;
  }
  function c(k) {
    return k = k.prefix, k !== void 0 && (B = null, k ? typeof k != "function" ? x = 1 : (x = 2, B = k) : x = 0), c;
  }
  function d(k, $) {
    var S = k;
    if (33 > S.charCodeAt(0) && (S = S.trim()), ee = S, S = [ee], 0 < I) {
      var N = a(-1, $, S, S, P, K, 0, 0, 0, 0);
      N !== void 0 && typeof N == "string" && ($ = N);
    }
    var f = r(L, S, $, 0, 0);
    return 0 < I && (N = a(-2, f, S, S, P, K, f.length, 0, 0, 0), N !== void 0 && (f = N)), ee = "", _ = 0, K = P = 1, f;
  }
  var h = /^\0+/g, p = /[\0\r\f]/g, v = /: */g, y = /zoo|gra/, u = /([,: ])(transform)/g, C = /,\r+?/g, E = /([\t\r\n ])*\f?&/g, A = /@(k\w+)\s*(\S*)\s*/, Z = /::(place)/g, O = /:(read-only)/g, m = /[svh]\w+-[tblr]{2}/, M = /\(\s*(.*)\s*\)/g, T = /([\s\S]*?);/g, F = /-self|flex-/g, z = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Y = /stretch|:\s*\w+\-(?:conte|avail)/, J = /([^-])(image-set\()/, K = 1, P = 1, _ = 0, x = 1, L = [], w = [], I = 0, B = null, U = 0, ee = "";
  return d.use = l, d.set = c, e !== void 0 && c(e), d;
}
var bn = {
  animationIterationCount: 1,
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
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Cn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Sn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ar = /* @__PURE__ */ Cn(
  function(e) {
    return Sn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), $t = {}, Mn = {
  get exports() {
    return $t;
  },
  set exports(e) {
    $t = e;
  }
}, re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function $n() {
  if (cr)
    return re;
  cr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function Z(m) {
    if (typeof m == "object" && m !== null) {
      var M = m.$$typeof;
      switch (M) {
        case r:
          switch (m = m.type, m) {
            case l:
            case c:
            case n:
            case s:
            case o:
            case h:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case a:
                case d:
                case y:
                case v:
                case i:
                  return m;
                default:
                  return M;
              }
          }
        case t:
          return M;
      }
    }
  }
  function O(m) {
    return Z(m) === c;
  }
  return re.AsyncMode = l, re.ConcurrentMode = c, re.ContextConsumer = a, re.ContextProvider = i, re.Element = r, re.ForwardRef = d, re.Fragment = n, re.Lazy = y, re.Memo = v, re.Portal = t, re.Profiler = s, re.StrictMode = o, re.Suspense = h, re.isAsyncMode = function(m) {
    return O(m) || Z(m) === l;
  }, re.isConcurrentMode = O, re.isContextConsumer = function(m) {
    return Z(m) === a;
  }, re.isContextProvider = function(m) {
    return Z(m) === i;
  }, re.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === r;
  }, re.isForwardRef = function(m) {
    return Z(m) === d;
  }, re.isFragment = function(m) {
    return Z(m) === n;
  }, re.isLazy = function(m) {
    return Z(m) === y;
  }, re.isMemo = function(m) {
    return Z(m) === v;
  }, re.isPortal = function(m) {
    return Z(m) === t;
  }, re.isProfiler = function(m) {
    return Z(m) === s;
  }, re.isStrictMode = function(m) {
    return Z(m) === o;
  }, re.isSuspense = function(m) {
    return Z(m) === h;
  }, re.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === c || m === s || m === o || m === h || m === p || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === v || m.$$typeof === i || m.$$typeof === a || m.$$typeof === d || m.$$typeof === C || m.$$typeof === E || m.$$typeof === A || m.$$typeof === u);
  }, re.typeOf = Z, re;
}
var ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function _n() {
  return lr || (lr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function Z(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === c || g === s || g === o || g === h || g === p || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === v || g.$$typeof === i || g.$$typeof === a || g.$$typeof === d || g.$$typeof === C || g.$$typeof === E || g.$$typeof === A || g.$$typeof === u);
    }
    function O(g) {
      if (typeof g == "object" && g !== null) {
        var ae = g.$$typeof;
        switch (ae) {
          case r:
            var le = g.type;
            switch (le) {
              case l:
              case c:
              case n:
              case s:
              case o:
              case h:
                return le;
              default:
                var Q = le && le.$$typeof;
                switch (Q) {
                  case a:
                  case d:
                  case y:
                  case v:
                  case i:
                    return Q;
                  default:
                    return ae;
                }
            }
          case t:
            return ae;
        }
      }
    }
    var m = l, M = c, T = a, F = i, z = r, Y = d, J = n, K = y, P = v, _ = t, x = s, L = o, w = h, I = !1;
    function B(g) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), U(g) || O(g) === l;
    }
    function U(g) {
      return O(g) === c;
    }
    function ee(g) {
      return O(g) === a;
    }
    function k(g) {
      return O(g) === i;
    }
    function $(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    function S(g) {
      return O(g) === d;
    }
    function N(g) {
      return O(g) === n;
    }
    function f(g) {
      return O(g) === y;
    }
    function j(g) {
      return O(g) === v;
    }
    function b(g) {
      return O(g) === t;
    }
    function X(g) {
      return O(g) === s;
    }
    function V(g) {
      return O(g) === o;
    }
    function q(g) {
      return O(g) === h;
    }
    ne.AsyncMode = m, ne.ConcurrentMode = M, ne.ContextConsumer = T, ne.ContextProvider = F, ne.Element = z, ne.ForwardRef = Y, ne.Fragment = J, ne.Lazy = K, ne.Memo = P, ne.Portal = _, ne.Profiler = x, ne.StrictMode = L, ne.Suspense = w, ne.isAsyncMode = B, ne.isConcurrentMode = U, ne.isContextConsumer = ee, ne.isContextProvider = k, ne.isElement = $, ne.isForwardRef = S, ne.isFragment = N, ne.isLazy = f, ne.isMemo = j, ne.isPortal = b, ne.isProfiler = X, ne.isStrictMode = V, ne.isSuspense = q, ne.isValidElementType = Z, ne.typeOf = O;
  }()), ne;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = $n() : e.exports = _n();
})(Mn);
var Vt = $t, kn = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, En = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Tn = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Hr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Gt = {};
Gt[Vt.ForwardRef] = Tn;
Gt[Vt.Memo] = Hr;
function dr(e) {
  return Vt.isMemo(e) ? Hr : Gt[e.$$typeof] || kn;
}
var Pn = Object.defineProperty, Rn = Object.getOwnPropertyNames, ur = Object.getOwnPropertySymbols, An = Object.getOwnPropertyDescriptor, On = Object.getPrototypeOf, hr = Object.prototype;
function Zr(e, r, t) {
  if (typeof r != "string") {
    if (hr) {
      var n = On(r);
      n && n !== hr && Zr(e, n, t);
    }
    var o = Rn(r);
    ur && (o = o.concat(ur(r)));
    for (var s = dr(e), i = dr(r), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!En[l] && !(t && t[l]) && !(i && i[l]) && !(s && s[l])) {
        var c = An(r, l);
        try {
          Pn(e, l, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var Dn = Zr;
function $e() {
  return ($e = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var fr = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, _t = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !it.typeOf(e);
}, pt = Object.freeze([]), De = Object.freeze({});
function Ve(e) {
  return typeof e == "function";
}
function kt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ut(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ge = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Xt = typeof window < "u" && "HTMLElement" in window, Yn = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Ln = {}, In = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Nn() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ee(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Nn.apply(void 0, [In[e]].concat(t)).trim());
}
var Hn = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++)
      n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, i = s; t >= i; )
        (i <<= 1) < 0 && Ee(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var a = s; a < i; a++)
        this.groupSizes[a] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), c = 0, d = n.length; c < d; c++)
      this.tag.insertRule(l, n[c]) && (this.groupSizes[t]++, l++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), s = o + n;
      this.groupSizes[t] = 0;
      for (var i = o; i < s; i++)
        this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var o = this.groupSizes[t], s = this.indexOfGroup(t), i = s + o, a = s; a < i; a++)
      n += this.tag.getRule(a) + `/*!sc*/
`;
    return n;
  }, e;
}(), ht = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), st = 1, lt = function(e) {
  if (ht.has(e))
    return ht.get(e);
  for (; mt.has(st); )
    st++;
  var r = st++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Ee(16, "" + r), ht.set(e, r), mt.set(r, e), r;
}, Zn = function(e) {
  return mt.get(e);
}, Wn = function(e, r) {
  r >= st && (st = r + 1), ht.set(e, r), mt.set(r, e);
}, Fn = "style[" + Ge + '][data-styled-version="5.3.8"]', zn = new RegExp("^" + Ge + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Bn = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, jn = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var a = i.match(zn);
      if (a) {
        var l = 0 | parseInt(a[1], 10), c = a[2];
        l !== 0 && (Wn(c, l), Bn(e, c, a[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, Vn = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Wr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(a) {
    for (var l = a.childNodes, c = l.length; c >= 0; c--) {
      var d = l[c];
      if (d && d.nodeType === 1 && d.hasAttribute(Ge))
        return d;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ge, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = Vn();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, Gn = function() {
  function e(t) {
    var n = this.element = Wr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, a = s.length; i < a; i++) {
        var l = s[i];
        if (l.ownerNode === o)
          return l;
      }
      Ee(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Un = function() {
  function e(t) {
    var n = this.element = Wr(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), s = this.nodes[t];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Xn = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), pr = Xt, Jn = { isServer: !Xt, useCSSOMInjection: !Yn }, vt = function() {
  function e(t, n, o) {
    t === void 0 && (t = De), n === void 0 && (n = {}), this.options = $e({}, Jn, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Xt && pr && (pr = !1, function(s) {
      for (var i = document.querySelectorAll(Fn), a = 0, l = i.length; a < l; a++) {
        var c = i[a];
        c && c.getAttribute(Ge) !== "active" && (jn(s, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(t) {
    return lt(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e($e({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new Xn(i) : s ? new Gn(i) : new Un(i), new Hn(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (lt(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(lt(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(lt(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var a = Zn(i);
        if (a !== void 0) {
          var l = t.names.get(a), c = n.getGroup(i);
          if (l && c && l.size) {
            var d = Ge + ".g" + i + '[id="' + a + '"]', h = "";
            l !== void 0 && l.forEach(function(p) {
              p.length > 0 && (h += p + ",");
            }), s += "" + c + d + '{content:"' + h + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), qn = /(a)(d)/gi, mr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Et(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = mr(r % 52) + t;
  return (mr(r % 52) + t).replace(qn, "$1-$2");
}
var Ie = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Fr = function(e) {
  return Ie(5381, e);
};
function zr(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Ve(t) && !Ut(t))
      return !1;
  }
  return !0;
}
var Kn = Fr("5.3.8"), Qn = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && zr(r), this.componentId = t, this.baseHash = Ie(Kn, t), this.baseStyle = n, vt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = Ze(this.rules, r, t, n).join(""), a = Et(Ie(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, a)) {
          var l = n(i, "." + a, void 0, o);
          t.insertRules(o, a, l);
        }
        s.push(a), this.staticRulesId = a;
      }
    else {
      for (var c = this.rules.length, d = Ie(this.baseHash, n.hash), h = "", p = 0; p < c; p++) {
        var v = this.rules[p];
        if (typeof v == "string")
          h += v, process.env.NODE_ENV !== "production" && (d = Ie(d, v + p));
        else if (v) {
          var y = Ze(v, r, t, n), u = Array.isArray(y) ? y.join("") : y;
          d = Ie(d, u + p), h += u;
        }
      }
      if (h) {
        var C = Et(d >>> 0);
        if (!t.hasNameForId(o, C)) {
          var E = n(h, "." + C, void 0, o);
          t.insertRules(o, C, E);
        }
        s.push(C);
      }
    }
    return s.join(" ");
  }, e;
}(), eo = /^\s*\/\/.*$/gm, to = [":", "[", ".", "#"];
function ro(e) {
  var r, t, n, o, s = e === void 0 ? De : e, i = s.options, a = i === void 0 ? De : i, l = s.plugins, c = l === void 0 ? pt : l, d = new xn(a), h = [], p = function(u) {
    function C(E) {
      if (E)
        try {
          u(E + "}");
        } catch {
        }
    }
    return function(E, A, Z, O, m, M, T, F, z, Y) {
      switch (E) {
        case 1:
          if (z === 0 && A.charCodeAt(0) === 64)
            return u(A + ";"), "";
          break;
        case 2:
          if (F === 0)
            return A + "/*|*/";
          break;
        case 3:
          switch (F) {
            case 102:
            case 112:
              return u(Z[0] + A), "";
            default:
              return A + (Y === 0 ? "/*|*/" : "");
          }
        case -2:
          A.split("/*|*/}").forEach(C);
      }
    };
  }(function(u) {
    h.push(u);
  }), v = function(u, C, E) {
    return C === 0 && to.indexOf(E[t.length]) !== -1 || E.match(o) ? u : "." + r;
  };
  function y(u, C, E, A) {
    A === void 0 && (A = "&");
    var Z = u.replace(eo, ""), O = C && E ? E + " " + C + " { " + Z + " }" : Z;
    return r = A, t = C, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), d(E || !C ? "" : C, O);
  }
  return d.use([].concat(c, [function(u, C, E) {
    u === 2 && E.length && E[0].lastIndexOf(t) > 0 && (E[0] = E[0].replace(n, v));
  }, p, function(u) {
    if (u === -2) {
      var C = h;
      return h = [], C;
    }
  }])), y.hash = c.length ? c.reduce(function(u, C) {
    return C.name || Ee(15), Ie(u, C.name);
  }, 5381).toString() : "", y;
}
var Br = He.createContext();
Br.Consumer;
var jr = He.createContext(), no = (jr.Consumer, new vt()), Tt = ro();
function Vr() {
  return Le(Br) || no;
}
function Gr() {
  return Le(jr) || Tt;
}
var Ur = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Tt);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Ee(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Tt), this.name + r.hash;
  }, e;
}(), oo = /([A-Z])/, so = /([A-Z])/g, io = /^ms-/, ao = function(e) {
  return "-" + e.toLowerCase();
};
function vr(e) {
  return oo.test(e) ? e.replace(so, ao).replace(io, "-ms-") : e;
}
var yr = function(e) {
  return e == null || e === !1 || e === "";
};
function Ze(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, a = e.length; i < a; i += 1)
      (o = Ze(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (yr(e))
    return "";
  if (Ut(e))
    return "." + e.styledComponentId;
  if (Ve(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !r)
      return e;
    var l = e(r);
    return process.env.NODE_ENV !== "production" && it.isElement(l) && console.warn(kt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ze(l, r, t, n);
  }
  var c;
  return e instanceof Ur ? t ? (e.inject(t, n), e.getName(n)) : e : _t(e) ? function d(h, p) {
    var v, y, u = [];
    for (var C in h)
      h.hasOwnProperty(C) && !yr(h[C]) && (Array.isArray(h[C]) && h[C].isCss || Ve(h[C]) ? u.push(vr(C) + ":", h[C], ";") : _t(h[C]) ? u.push.apply(u, d(h[C], C)) : u.push(vr(C) + ": " + (v = C, (y = h[C]) == null || typeof y == "boolean" || y === "" ? "" : typeof y != "number" || y === 0 || v in bn ? String(y).trim() : y + "px") + ";"));
    return p ? [p + " {"].concat(u, ["}"]) : u;
  }(e) : e.toString();
}
var gr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Jt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return Ve(e) || _t(e) ? gr(Ze(fr(pt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : gr(Ze(fr(e, t)));
}
var wr = /invalid hook call/i, dt = /* @__PURE__ */ new Set(), Xr = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (wr.test(s))
          o = !1, dt.delete(t);
        else {
          for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            a[l - 1] = arguments[l];
          n.apply(void 0, [s].concat(a));
        }
      }, xe(), o && !dt.has(t) && (console.warn(t), dt.add(t));
    } catch (s) {
      wr.test(s.message) && dt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Jr = function(e, r, t) {
  return t === void 0 && (t = De), e.theme !== t.theme && e.theme || r || t.theme;
}, co = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, lo = /(^-|-$)/g;
function bt(e) {
  return e.replace(co, "-").replace(lo, "");
}
var qt = function(e) {
  return Et(Fr(e) >>> 0);
};
function ut(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Pt = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, uo = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ho(e, r, t) {
  var n = e[t];
  Pt(r) && Pt(n) ? qr(n, r) : e[t] = r;
}
function qr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (Pt(i))
      for (var a in i)
        uo(a) && ho(e, i[a], a);
  }
  return e;
}
var Ue = He.createContext();
Ue.Consumer;
function fo(e) {
  var r = Le(Ue), t = Oe(function() {
    return function(n, o) {
      if (!n)
        return Ee(14);
      if (Ve(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Ee(7);
      }
      return Array.isArray(n) || typeof n != "object" ? Ee(8) : o ? $e({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? He.createElement(Ue.Provider, { value: t }, e.children) : null;
}
var Ct = {};
function Kr(e, r, t) {
  var n = Ut(e), o = !ut(e), s = r.attrs, i = s === void 0 ? pt : s, a = r.componentId, l = a === void 0 ? function(A, Z) {
    var O = typeof A != "string" ? "sc" : bt(A);
    Ct[O] = (Ct[O] || 0) + 1;
    var m = O + "-" + qt("5.3.8" + O + Ct[O]);
    return Z ? Z + "-" + m : m;
  }(r.displayName, r.parentComponentId) : a, c = r.displayName, d = c === void 0 ? function(A) {
    return ut(A) ? "styled." + A : "Styled(" + kt(A) + ")";
  }(e) : c, h = r.displayName && r.componentId ? bt(r.displayName) + "-" + r.componentId : r.componentId || l, p = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, v = r.shouldForwardProp;
  n && e.shouldForwardProp && (v = r.shouldForwardProp ? function(A, Z, O) {
    return e.shouldForwardProp(A, Z, O) && r.shouldForwardProp(A, Z, O);
  } : e.shouldForwardProp);
  var y, u = new Qn(t, h, n ? e.componentStyle : void 0), C = u.isStatic && i.length === 0, E = function(A, Z) {
    return function(O, m, M, T) {
      var F = O.attrs, z = O.componentStyle, Y = O.defaultProps, J = O.foldedComponentIds, K = O.shouldForwardProp, P = O.styledComponentId, _ = O.target;
      process.env.NODE_ENV !== "production" && or(P);
      var x = function(N, f, j) {
        N === void 0 && (N = De);
        var b = $e({}, f, { theme: N }), X = {};
        return j.forEach(function(V) {
          var q, g, ae, le = V;
          for (q in Ve(le) && (le = le(b)), le)
            b[q] = X[q] = q === "className" ? (g = X[q], ae = le[q], g && ae ? g + " " + ae : g || ae) : le[q];
        }), [b, X];
      }(Jr(m, Le(Ue), Y) || De, m, F), L = x[0], w = x[1], I = function(N, f, j, b) {
        var X = Vr(), V = Gr(), q = f ? N.generateAndInjectStyles(De, X, V) : N.generateAndInjectStyles(j, X, V);
        return process.env.NODE_ENV !== "production" && or(q), process.env.NODE_ENV !== "production" && !f && b && b(q), q;
      }(z, T, L, process.env.NODE_ENV !== "production" ? O.warnTooManyClasses : void 0), B = M, U = w.$as || m.$as || w.as || m.as || _, ee = ut(U), k = w !== m ? $e({}, m, {}, w) : m, $ = {};
      for (var S in k)
        S[0] !== "$" && S !== "as" && (S === "forwardedAs" ? $.as = k[S] : (K ? K(S, ar, U) : !ee || ar(S)) && ($[S] = k[S]));
      return m.style && w.style !== m.style && ($.style = $e({}, m.style, {}, w.style)), $.className = Array.prototype.concat(J, P, I !== P ? I : null, m.className, w.className).filter(Boolean).join(" "), $.ref = B, mn(U, $);
    }(y, A, Z, C);
  };
  return E.displayName = d, (y = He.forwardRef(E)).attrs = p, y.componentStyle = u, y.displayName = d, y.shouldForwardProp = v, y.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : pt, y.styledComponentId = h, y.target = n ? e.target : e, y.withComponent = function(A) {
    var Z = r.componentId, O = function(M, T) {
      if (M == null)
        return {};
      var F, z, Y = {}, J = Object.keys(M);
      for (z = 0; z < J.length; z++)
        F = J[z], T.indexOf(F) >= 0 || (Y[F] = M[F]);
      return Y;
    }(r, ["componentId"]), m = Z && Z + "-" + (ut(A) ? A : bt(kt(A)));
    return Kr(A, $e({}, O, { attrs: p, componentId: m }), t);
  }, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(A) {
    this._foldedDefaultProps = n ? qr({}, e.defaultProps, A) : A;
  } }), process.env.NODE_ENV !== "production" && (Xr(d, h), y.warnTooManyClasses = function(A, Z) {
    var O = {}, m = !1;
    return function(M) {
      if (!m && (O[M] = !0, Object.keys(O).length >= 200)) {
        var T = Z ? ' with the id of "' + Z + '"' : "";
        console.warn("Over 200 classes were generated for component " + A + T + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), m = !0, O = {};
      }
    };
  }(d, h)), y.toString = function() {
    return "." + y.styledComponentId;
  }, o && Dn(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), y;
}
var Rt = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = De), !it.isValidElementType(n))
      return Ee(1, String(n));
    var s = function() {
      return t(n, o, Jt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, $e({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, $e({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(Kr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Rt[e] = Rt(e);
});
var po = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = zr(t), vt.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, o, s) {
    var i = s(Ze(this.rules, n, o, s).join(""), ""), a = this.componentId + t;
    o.insertRules(a, a, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, o, s) {
    t > 2 && vt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
  }, e;
}();
function mo(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Jt.apply(void 0, [e].concat(t)), s = "sc-global-" + qt(JSON.stringify(o)), i = new po(o, s);
  function a(c) {
    var d = Vr(), h = Gr(), p = Le(Ue), v = xe(d.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && He.Children.count(c.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(y) {
      return typeof y == "string" && y.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.server && l(v, c, d, p, h), Ir(function() {
      if (!d.server)
        return l(v, c, d, p, h), function() {
          return i.removeStyles(v, d);
        };
    }, [v, c, d, p, h]), null;
  }
  function l(c, d, h, p, v) {
    if (i.isStatic)
      i.renderStyles(c, Ln, h, v);
    else {
      var y = $e({}, d, { theme: Jr(d, p, a.defaultProps) });
      i.renderStyles(c, y, h, v);
    }
  }
  return process.env.NODE_ENV !== "production" && Xr(s), He.memo(a);
}
function vo(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Jt.apply(void 0, [e].concat(t)).join(""), s = qt(o);
  return new Ur(s, o);
}
var Fe = function() {
  return Le(Ue);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const H = Rt, ot = "reactSchedulerOutsideWrapper", yo = mo`

  #${ot} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${ot} *,
 #${ot} *:before,
 #${ot} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, go = {
  mode: "light",
  navHeight: "44px",
  colors: {
    background: "#FFFFFF",
    gridBackground: "#FFFFFF",
    primary: "#F8F8FD",
    secondary: "#E6F3FF",
    tertiary: "#C9E5FF",
    textPrimary: "#1C222F",
    textSecondary: "#FFFFFF",
    placeholder: "#777777",
    button: "#FFFFFF",
    border: "#D2D2D2",
    tooltip: "#3B3C5F",
    hover: "#E6F3FF",
    disabled: "#777777",
    warning: "#EF4444",
    defaultTile: "#728DE2",
    accent: "#0A11EB"
  }
}, wo = {
  mode: "dark",
  navHeight: "44px",
  colors: {
    background: "#161B22",
    gridBackground: "#1E252E",
    primary: "#303b49",
    secondary: "#444e5b",
    tertiary: "#6E757F",
    textPrimary: "#DADCE0",
    textSecondary: "#EAEBED",
    placeholder: "#bbbbbb",
    button: "#60676f",
    border: "#2C333A",
    hover: "#303439",
    tooltip: "#3B3C5F",
    disabled: "#38414a",
    warning: "#FF4C4C",
    defaultTile: "#728DE2",
    accent: "#1798c2"
  }
}, Ke = `
margin: 0;
padding: 0;
`, Qr = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
H.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const ge = 50, Te = 24, Qe = 16, Ne = 40, Xe = Ne + Qe + Te, Ye = 84, be = 56, Se = 196, ke = 12, ve = 50, Je = 24, at = 16, At = 40, xo = Je + at + At, xr = 1, br = 52, _e = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter"
  }
}, je = 3, bo = 1.6, Co = 4.5, Ot = 12, yt = 24, So = "reactSchedulerCanvasHeaderWrapper", en = "reactSchedulerCanvasWrapper", We = ot, Mo = 4, $o = 48, Ae = 5, _o = 40, Cr = 8, Kt = Te / 2 + 2, tn = Qe / 2 + Te + 1, Sr = 2, de = 60;
var qe = {}, ko = {
  get exports() {
    return qe;
  },
  set exports(e) {
    qe = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", a = "minute", l = "hour", c = "day", d = "week", h = "month", p = "quarter", v = "year", y = "date", u = "Invalid Date", C = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, E = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, A = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(P) {
      var _ = ["th", "st", "nd", "rd"], x = P % 100;
      return "[" + P + (_[(x - 20) % 10] || _[x] || _[0]) + "]";
    } }, Z = function(P, _, x) {
      var L = String(P);
      return !L || L.length >= _ ? P : "" + Array(_ + 1 - L.length).join(x) + P;
    }, O = { s: Z, z: function(P) {
      var _ = -P.utcOffset(), x = Math.abs(_), L = Math.floor(x / 60), w = x % 60;
      return (_ <= 0 ? "+" : "-") + Z(L, 2, "0") + ":" + Z(w, 2, "0");
    }, m: function P(_, x) {
      if (_.date() < x.date())
        return -P(x, _);
      var L = 12 * (x.year() - _.year()) + (x.month() - _.month()), w = _.clone().add(L, h), I = x - w < 0, B = _.clone().add(L + (I ? -1 : 1), h);
      return +(-(L + (x - w) / (I ? w - B : B - w)) || 0);
    }, a: function(P) {
      return P < 0 ? Math.ceil(P) || 0 : Math.floor(P);
    }, p: function(P) {
      return { M: h, y: v, w: d, d: c, D: y, h: l, m: a, s: i, ms: s, Q: p }[P] || String(P || "").toLowerCase().replace(/s$/, "");
    }, u: function(P) {
      return P === void 0;
    } }, m = "en", M = {};
    M[m] = A;
    var T = function(P) {
      return P instanceof J;
    }, F = function P(_, x, L) {
      var w;
      if (!_)
        return m;
      if (typeof _ == "string") {
        var I = _.toLowerCase();
        M[I] && (w = I), x && (M[I] = x, w = I);
        var B = _.split("-");
        if (!w && B.length > 1)
          return P(B[0]);
      } else {
        var U = _.name;
        M[U] = _, w = U;
      }
      return !L && w && (m = w), w || !L && m;
    }, z = function(P, _) {
      if (T(P))
        return P.clone();
      var x = typeof _ == "object" ? _ : {};
      return x.date = P, x.args = arguments, new J(x);
    }, Y = O;
    Y.l = F, Y.i = T, Y.w = function(P, _) {
      return z(P, { locale: _.$L, utc: _.$u, x: _.$x, $offset: _.$offset });
    };
    var J = function() {
      function P(x) {
        this.$L = F(x.locale, null, !0), this.parse(x);
      }
      var _ = P.prototype;
      return _.parse = function(x) {
        this.$d = function(L) {
          var w = L.date, I = L.utc;
          if (w === null)
            return new Date(NaN);
          if (Y.u(w))
            return new Date();
          if (w instanceof Date)
            return new Date(w);
          if (typeof w == "string" && !/Z$/i.test(w)) {
            var B = w.match(C);
            if (B) {
              var U = B[2] - 1 || 0, ee = (B[7] || "0").substring(0, 3);
              return I ? new Date(Date.UTC(B[1], U, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, ee)) : new Date(B[1], U, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, ee);
            }
          }
          return new Date(w);
        }(x), this.$x = x.x || {}, this.init();
      }, _.init = function() {
        var x = this.$d;
        this.$y = x.getFullYear(), this.$M = x.getMonth(), this.$D = x.getDate(), this.$W = x.getDay(), this.$H = x.getHours(), this.$m = x.getMinutes(), this.$s = x.getSeconds(), this.$ms = x.getMilliseconds();
      }, _.$utils = function() {
        return Y;
      }, _.isValid = function() {
        return this.$d.toString() !== u;
      }, _.isSame = function(x, L) {
        var w = z(x);
        return this.startOf(L) <= w && w <= this.endOf(L);
      }, _.isAfter = function(x, L) {
        return z(x) < this.startOf(L);
      }, _.isBefore = function(x, L) {
        return this.endOf(L) < z(x);
      }, _.$g = function(x, L, w) {
        return Y.u(x) ? this[L] : this.set(w, x);
      }, _.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, _.valueOf = function() {
        return this.$d.getTime();
      }, _.startOf = function(x, L) {
        var w = this, I = !!Y.u(L) || L, B = Y.p(x), U = function(b, X) {
          var V = Y.w(w.$u ? Date.UTC(w.$y, X, b) : new Date(w.$y, X, b), w);
          return I ? V : V.endOf(c);
        }, ee = function(b, X) {
          return Y.w(w.toDate()[b].apply(w.toDate("s"), (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(X)), w);
        }, k = this.$W, $ = this.$M, S = this.$D, N = "set" + (this.$u ? "UTC" : "");
        switch (B) {
          case v:
            return I ? U(1, 0) : U(31, 11);
          case h:
            return I ? U(1, $) : U(0, $ + 1);
          case d:
            var f = this.$locale().weekStart || 0, j = (k < f ? k + 7 : k) - f;
            return U(I ? S - j : S + (6 - j), $);
          case c:
          case y:
            return ee(N + "Hours", 0);
          case l:
            return ee(N + "Minutes", 1);
          case a:
            return ee(N + "Seconds", 2);
          case i:
            return ee(N + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, _.endOf = function(x) {
        return this.startOf(x, !1);
      }, _.$set = function(x, L) {
        var w, I = Y.p(x), B = "set" + (this.$u ? "UTC" : ""), U = (w = {}, w[c] = B + "Date", w[y] = B + "Date", w[h] = B + "Month", w[v] = B + "FullYear", w[l] = B + "Hours", w[a] = B + "Minutes", w[i] = B + "Seconds", w[s] = B + "Milliseconds", w)[I], ee = I === c ? this.$D + (L - this.$W) : L;
        if (I === h || I === v) {
          var k = this.clone().set(y, 1);
          k.$d[U](ee), k.init(), this.$d = k.set(y, Math.min(this.$D, k.daysInMonth())).$d;
        } else
          U && this.$d[U](ee);
        return this.init(), this;
      }, _.set = function(x, L) {
        return this.clone().$set(x, L);
      }, _.get = function(x) {
        return this[Y.p(x)]();
      }, _.add = function(x, L) {
        var w, I = this;
        x = Number(x);
        var B = Y.p(L), U = function($) {
          var S = z(I);
          return Y.w(S.date(S.date() + Math.round($ * x)), I);
        };
        if (B === h)
          return this.set(h, this.$M + x);
        if (B === v)
          return this.set(v, this.$y + x);
        if (B === c)
          return U(1);
        if (B === d)
          return U(7);
        var ee = (w = {}, w[a] = n, w[l] = o, w[i] = t, w)[B] || 1, k = this.$d.getTime() + x * ee;
        return Y.w(k, this);
      }, _.subtract = function(x, L) {
        return this.add(-1 * x, L);
      }, _.format = function(x) {
        var L = this, w = this.$locale();
        if (!this.isValid())
          return w.invalidDate || u;
        var I = x || "YYYY-MM-DDTHH:mm:ssZ", B = Y.z(this), U = this.$H, ee = this.$m, k = this.$M, $ = w.weekdays, S = w.months, N = function(X, V, q, g) {
          return X && (X[V] || X(L, I)) || q[V].slice(0, g);
        }, f = function(X) {
          return Y.s(U % 12 || 12, X, "0");
        }, j = w.meridiem || function(X, V, q) {
          var g = X < 12 ? "AM" : "PM";
          return q ? g.toLowerCase() : g;
        }, b = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: k + 1, MM: Y.s(k + 1, 2, "0"), MMM: N(w.monthsShort, k, S, 3), MMMM: N(S, k), D: this.$D, DD: Y.s(this.$D, 2, "0"), d: String(this.$W), dd: N(w.weekdaysMin, this.$W, $, 2), ddd: N(w.weekdaysShort, this.$W, $, 3), dddd: $[this.$W], H: String(U), HH: Y.s(U, 2, "0"), h: f(1), hh: f(2), a: j(U, ee, !0), A: j(U, ee, !1), m: String(ee), mm: Y.s(ee, 2, "0"), s: String(this.$s), ss: Y.s(this.$s, 2, "0"), SSS: Y.s(this.$ms, 3, "0"), Z: B };
        return I.replace(E, function(X, V) {
          return V || b[X] || B.replace(":", "");
        });
      }, _.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, _.diff = function(x, L, w) {
        var I, B = Y.p(L), U = z(x), ee = (U.utcOffset() - this.utcOffset()) * n, k = this - U, $ = Y.m(this, U);
        return $ = (I = {}, I[v] = $ / 12, I[h] = $, I[p] = $ / 3, I[d] = (k - ee) / 6048e5, I[c] = (k - ee) / 864e5, I[l] = k / o, I[a] = k / n, I[i] = k / t, I)[B] || k, w ? $ : Y.a($);
      }, _.daysInMonth = function() {
        return this.endOf(h).$D;
      }, _.$locale = function() {
        return M[this.$L];
      }, _.locale = function(x, L) {
        if (!x)
          return this.$L;
        var w = this.clone(), I = F(x, L, !0);
        return I && (w.$L = I), w;
      }, _.clone = function() {
        return Y.w(this.$d, this);
      }, _.toDate = function() {
        return new Date(this.valueOf());
      }, _.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, _.toISOString = function() {
        return this.$d.toISOString();
      }, _.toString = function() {
        return this.$d.toUTCString();
      }, P;
    }(), K = J.prototype;
    return z.prototype = K, [["$ms", s], ["$s", i], ["$m", a], ["$H", l], ["$W", c], ["$M", h], ["$y", v], ["$D", y]].forEach(function(P) {
      K[P[1]] = function(_) {
        return this.$g(_, P[0], P[1]);
      };
    }), z.extend = function(P, _) {
      return P.$i || (P(_, J, z), P.$i = !0), z;
    }, z.locale = F, z.isDayjs = T, z.unix = function(P) {
      return z(1e3 * P);
    }, z.en = M[m], z.Ls = M, z.p = {}, z;
  });
})(ko);
const D = qe, Mr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Qt = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, rn = (e, r) => D(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), nn = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Qt(e),
  isCurrentDay: e.isSame(D(), "day"),
  year: parseInt(e.format("YYYY"))
}), er = (e, r, t, n, o, s, i) => {
  e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.secondary : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, be), e.strokeRect(r + 0.5, t + 0.5, n, be);
}, Eo = (e, r, t, n, o) => {
  for (let s = 0; s < r; s++)
    for (let i = 0; i <= t; i++) {
      const a = D(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        i,
        "days"
      ), l = a.isSame(D(), "day");
      er(
        e,
        i * ge,
        s * be,
        ge,
        Qt(a),
        l,
        o
      );
    }
}, To = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, Po = (e, r, t, n, o) => {
  let s = 0, i = -(n.dayOfMonth - 1) * ke;
  for (let a = 0; a <= t; a++) {
    const c = D(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      a,
      "weeks"
    ).isSame(D(), "week");
    for (let d = 0; d < r; d++)
      er(e, s, d * be, Ye, !0, c, o);
    s += Ye;
  }
  for (let a = 0; a < t; a++) {
    const l = rn(n, a) * ke;
    To(e, i, r * be, o), i += l;
  }
}, Ro = (e, r, t, n, o) => {
  const s = D(`${n.year}-${n.month + 1}-${n.dayOfMonth + 1}`);
  for (let i = 0; i < r; i++)
    for (let a = 0; a <= t; a++) {
      let l;
      a === Math.floor(t / 2) ? l = D() : a > Math.floor(t / 2) ? l = D().add(a - Math.floor(t / 2), "hours") : l = D().subtract(Math.floor(t / 2) - i, "hours");
      const c = s.isSame(D(), "day") && l.isSame(D(), "hour");
      er(
        e,
        a * ve + ve / 2 - 0.5,
        // -0.5 to make borders better aligned with hour axis
        i * be,
        ve,
        Qt(l),
        c,
        o
      );
    }
}, Ao = (e, r, t, n, o, s) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(en))
    switch (r) {
      case 0:
        Po(e, t, n, o, s);
        break;
      case 1:
        Eo(e, t, n, o, s);
        break;
      case 2:
        Ro(e, t, n, o, s);
        break;
    }
};
var Dt = {}, Oo = {
  get exports() {
    return Dt;
  },
  set exports(e) {
    Dt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    var t = "week", n = "year";
    return function(o, s, i) {
      var a = s.prototype;
      a.week = function(l) {
        if (l === void 0 && (l = null), l !== null)
          return this.add(7 * (l - this.week()), "day");
        var c = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var d = i(this).startOf(n).add(1, n).date(c), h = i(this).endOf(t);
          if (d.isBefore(h))
            return 1;
        }
        var p = i(this).startOf(n).date(c).startOf(t).subtract(1, "millisecond"), v = this.diff(p, t, !0);
        return v < 0 ? i(this).startOf("week").week() : Math.ceil(v);
      }, a.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(Oo);
const Do = Dt;
var Yt = {}, Yo = {
  get exports() {
    return Yt;
  },
  set exports(e) {
    Yt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    return function(t, n, o) {
      n.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(Yo);
const Lo = Yt;
var Lt = {}, Io = {
  get exports() {
    return Lt;
  },
  set exports(e) {
    Lt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    var t = "day";
    return function(n, o, s) {
      var i = function(c) {
        return c.add(4 - c.isoWeekday(), t);
      }, a = o.prototype;
      a.isoWeekYear = function() {
        return i(this).year();
      }, a.isoWeek = function(c) {
        if (!this.$utils().u(c))
          return this.add(7 * (c - this.isoWeek()), t);
        var d, h, p, v, y = i(this), u = (d = this.isoWeekYear(), h = this.$u, p = (h ? s.utc : s)().year(d).startOf("year"), v = 4 - p.isoWeekday(), p.isoWeekday() > 4 && (v += 7), p.add(v, t));
        return y.diff(u, "week") + 1;
      }, a.isoWeekday = function(c) {
        return this.$utils().u(c) ? this.day() || 7 : this.day(this.day() % 7 ? c : c - 7);
      };
      var l = a.startOf;
      a.startOf = function(c, d) {
        var h = this.$utils(), p = !!h.u(d) || d;
        return h.p(c) === "isoweek" ? p ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(c, d);
      };
    };
  });
})(Io);
const No = Lt;
var It = {}, Ho = {
  get exports() {
    return It;
  },
  set exports(e) {
    It = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    return function(t, n, o) {
      n.prototype.isBetween = function(s, i, a, l) {
        var c = o(s), d = o(i), h = (l = l || "()")[0] === "(", p = l[1] === ")";
        return (h ? this.isAfter(c, a) : !this.isBefore(c, a)) && (p ? this.isBefore(d, a) : !this.isAfter(d, a)) || (h ? this.isBefore(c, a) : !this.isAfter(c, a)) && (p ? this.isAfter(d, a) : !this.isBefore(d, a));
      };
    };
  });
})(Ho);
const Zo = It;
var Nt = {}, Wo = {
  get exports() {
    return Nt;
  },
  set exports(e) {
    Nt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    var t, n, o = 1e3, s = 6e4, i = 36e5, a = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c = 31536e6, d = 2592e6, h = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, p = { years: c, months: d, days: a, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, v = function(m) {
      return m instanceof O;
    }, y = function(m, M, T) {
      return new O(m, T, M.$l);
    }, u = function(m) {
      return n.p(m) + "s";
    }, C = function(m) {
      return m < 0;
    }, E = function(m) {
      return C(m) ? Math.ceil(m) : Math.floor(m);
    }, A = function(m) {
      return Math.abs(m);
    }, Z = function(m, M) {
      return m ? C(m) ? { negative: !0, format: "" + A(m) + M } : { negative: !1, format: "" + m + M } : { negative: !1, format: "" };
    }, O = function() {
      function m(T, F, z) {
        var Y = this;
        if (this.$d = {}, this.$l = z, T === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), F)
          return y(T * p[u(F)], this);
        if (typeof T == "number")
          return this.$ms = T, this.parseFromMilliseconds(), this;
        if (typeof T == "object")
          return Object.keys(T).forEach(function(P) {
            Y.$d[u(P)] = T[P];
          }), this.calMilliseconds(), this;
        if (typeof T == "string") {
          var J = T.match(h);
          if (J) {
            var K = J.slice(2).map(function(P) {
              return P != null ? Number(P) : 0;
            });
            return this.$d.years = K[0], this.$d.months = K[1], this.$d.weeks = K[2], this.$d.days = K[3], this.$d.hours = K[4], this.$d.minutes = K[5], this.$d.seconds = K[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var M = m.prototype;
      return M.calMilliseconds = function() {
        var T = this;
        this.$ms = Object.keys(this.$d).reduce(function(F, z) {
          return F + (T.$d[z] || 0) * p[z];
        }, 0);
      }, M.parseFromMilliseconds = function() {
        var T = this.$ms;
        this.$d.years = E(T / c), T %= c, this.$d.months = E(T / d), T %= d, this.$d.days = E(T / a), T %= a, this.$d.hours = E(T / i), T %= i, this.$d.minutes = E(T / s), T %= s, this.$d.seconds = E(T / o), T %= o, this.$d.milliseconds = T;
      }, M.toISOString = function() {
        var T = Z(this.$d.years, "Y"), F = Z(this.$d.months, "M"), z = +this.$d.days || 0;
        this.$d.weeks && (z += 7 * this.$d.weeks);
        var Y = Z(z, "D"), J = Z(this.$d.hours, "H"), K = Z(this.$d.minutes, "M"), P = this.$d.seconds || 0;
        this.$d.milliseconds && (P += this.$d.milliseconds / 1e3);
        var _ = Z(P, "S"), x = T.negative || F.negative || Y.negative || J.negative || K.negative || _.negative, L = J.format || K.format || _.format ? "T" : "", w = (x ? "-" : "") + "P" + T.format + F.format + Y.format + L + J.format + K.format + _.format;
        return w === "P" || w === "-P" ? "P0D" : w;
      }, M.toJSON = function() {
        return this.toISOString();
      }, M.format = function(T) {
        var F = T || "YYYY-MM-DDTHH:mm:ss", z = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return F.replace(l, function(Y, J) {
          return J || String(z[Y]);
        });
      }, M.as = function(T) {
        return this.$ms / p[u(T)];
      }, M.get = function(T) {
        var F = this.$ms, z = u(T);
        return z === "milliseconds" ? F %= 1e3 : F = z === "weeks" ? E(F / p[z]) : this.$d[z], F === 0 ? 0 : F;
      }, M.add = function(T, F, z) {
        var Y;
        return Y = F ? T * p[u(F)] : v(T) ? T.$ms : y(T, this).$ms, y(this.$ms + Y * (z ? -1 : 1), this);
      }, M.subtract = function(T, F) {
        return this.add(T, F, !0);
      }, M.locale = function(T) {
        var F = this.clone();
        return F.$l = T, F;
      }, M.clone = function() {
        return y(this.$ms, this);
      }, M.humanize = function(T) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!T);
      }, M.milliseconds = function() {
        return this.get("milliseconds");
      }, M.asMilliseconds = function() {
        return this.as("milliseconds");
      }, M.seconds = function() {
        return this.get("seconds");
      }, M.asSeconds = function() {
        return this.as("seconds");
      }, M.minutes = function() {
        return this.get("minutes");
      }, M.asMinutes = function() {
        return this.as("minutes");
      }, M.hours = function() {
        return this.get("hours");
      }, M.asHours = function() {
        return this.as("hours");
      }, M.days = function() {
        return this.get("days");
      }, M.asDays = function() {
        return this.as("days");
      }, M.weeks = function() {
        return this.get("weeks");
      }, M.asWeeks = function() {
        return this.as("weeks");
      }, M.months = function() {
        return this.get("months");
      }, M.asMonths = function() {
        return this.as("months");
      }, M.years = function() {
        return this.get("years");
      }, M.asYears = function() {
        return this.as("years");
      }, m;
    }();
    return function(m, M, T) {
      t = T, n = T().$utils(), T.duration = function(Y, J) {
        var K = T.locale();
        return y(Y, { $l: K }, J);
      }, T.isDuration = v;
      var F = M.prototype.add, z = M.prototype.subtract;
      M.prototype.add = function(Y, J) {
        return v(Y) && (Y = Y.asMilliseconds()), F.bind(this)(Y, J);
      }, M.prototype.subtract = function(Y, J) {
        return v(Y) && (Y = Y.asMilliseconds()), z.bind(this)(Y, J);
      };
    };
  });
})(Wo);
const Fo = Nt;
var zo = "Expected a function", $r = 0 / 0, Bo = "[object Symbol]", jo = /^\s+|\s+$/g, Vo = /^[-+]0x[0-9a-f]+$/i, Go = /^0b[01]+$/i, Uo = /^0o[0-7]+$/i, Xo = parseInt, Jo = typeof ye == "object" && ye && ye.Object === Object && ye, qo = typeof self == "object" && self && self.Object === Object && self, Ko = Jo || qo || Function("return this")(), Qo = Object.prototype, es = Qo.toString, ts = Math.max, rs = Math.min, St = function() {
  return Ko.Date.now();
};
function ns(e, r, t) {
  var n, o, s, i, a, l, c = 0, d = !1, h = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(zo);
  r = _r(r) || 0, Ht(t) && (d = !!t.leading, h = "maxWait" in t, s = h ? ts(_r(t.maxWait) || 0, r) : s, p = "trailing" in t ? !!t.trailing : p);
  function v(M) {
    var T = n, F = o;
    return n = o = void 0, c = M, i = e.apply(F, T), i;
  }
  function y(M) {
    return c = M, a = setTimeout(E, r), d ? v(M) : i;
  }
  function u(M) {
    var T = M - l, F = M - c, z = r - T;
    return h ? rs(z, s - F) : z;
  }
  function C(M) {
    var T = M - l, F = M - c;
    return l === void 0 || T >= r || T < 0 || h && F >= s;
  }
  function E() {
    var M = St();
    if (C(M))
      return A(M);
    a = setTimeout(E, u(M));
  }
  function A(M) {
    return a = void 0, p && n ? v(M) : (n = o = void 0, i);
  }
  function Z() {
    a !== void 0 && clearTimeout(a), c = 0, n = l = o = a = void 0;
  }
  function O() {
    return a === void 0 ? i : A(St());
  }
  function m() {
    var M = St(), T = C(M);
    if (n = arguments, o = this, l = M, T) {
      if (a === void 0)
        return y(l);
      if (h)
        return a = setTimeout(E, r), v(l);
    }
    return a === void 0 && (a = setTimeout(E, r)), i;
  }
  return m.cancel = Z, m.flush = O, m;
}
function Ht(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function os(e) {
  return !!e && typeof e == "object";
}
function ss(e) {
  return typeof e == "symbol" || os(e) && es.call(e) == Bo;
}
function _r(e) {
  if (typeof e == "number")
    return e;
  if (ss(e))
    return $r;
  if (Ht(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ht(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(jo, "");
  var t = Go.test(e);
  return t || Uo.test(e) ? Xo(e.slice(2), t ? 2 : 8) : Vo.test(e) ? $r : +e;
}
var ze = ns;
const ft = [0, 1, 2], is = (e) => ft.includes(e), Be = (e) => {
  var n;
  const t = (((n = document.getElementById(We)) == null ? void 0 : n.clientWidth) || 0) - Se;
  switch (e) {
    case 1:
      return Math.ceil(t / ge) * je;
    case 2:
      return Math.ceil(t / ve) * je;
    default:
      return Math.ceil(t / Ye) * je;
  }
}, as = (e) => Be(e) / je, tr = (e, r) => {
  const t = Be(r) / 2;
  let n;
  switch (r) {
    case 1:
      n = e.subtract(t, "days");
      break;
    case 2:
      n = e.subtract(t, "hours");
      break;
    default:
      n = e.subtract(t, "weeks");
      break;
  }
  let o;
  switch (r) {
    case 1:
      o = e.add(t, "days");
      break;
    case 2:
      o = e.add(t, "hours");
      break;
    default:
      o = e.add(t, "weeks");
      break;
  }
  return {
    startDate: n,
    endDate: o
  };
}, cs = (e, r) => {
  const t = tr(e, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, rr = () => {
  var t;
  return ((((t = document.getElementById(We)) == null ? void 0 : t.clientWidth) || 0) - Se) * je;
}, on = Nr({
  handleGoNext: () => {
  },
  handleScrollNext: () => {
  },
  handleGoPrev: () => {
  },
  handleScrollPrev: () => {
  },
  handleGoToday: () => {
  },
  zoomIn: () => {
  },
  zoomOut: () => {
  },
  handleFilterData: () => {
  },
  updateTilesCoords: () => {
  },
  tilesCoords: [],
  zoom: 0,
  isNextZoom: !1,
  isPrevZoom: !1,
  date: D(),
  isLoading: !1,
  cols: 0,
  startDate: {
    hour: 0,
    dayName: "",
    dayOfMonth: 0,
    weekOfYear: 0,
    month: 0,
    monthName: "",
    isCurrentDay: !1,
    isBusinessDay: !1,
    year: 0
  },
  dayOfYear: 0,
  recordsThreshold: 0,
  config: {
    zoom: 0
  }
});
D.extend(Do);
D.extend(Lo);
D.extend(No);
D.extend(Zo);
D.extend(Fo);
const ls = ({
  data: e,
  children: r,
  isLoading: t,
  config: n,
  defaultStartDate: o = D(),
  onRangeChange: s,
  onFilterData: i,
  onClearFilterData: a
}) => {
  const { zoom: l, maxRecordsPerPage: c = 50 } = n, [d, h] = me(l), [p, v] = me(D()), [y, u] = me(!1), [C, E] = me(Be(d)), A = ft[d] !== ft[ft.length - 1], Z = d !== 0, O = Oe(() => cs(p, d), [p, d]), m = tr(p, d).startDate, M = D(m).dayOfYear(), T = nn(m), F = xe(null), [z, Y] = me([{ x: 0, y: 0 }]), J = we(
    (S, N = "auto") => {
      var j, b, X, V;
      const f = rr();
      switch (S) {
        case "back":
          return (j = F.current) == null ? void 0 : j.scrollTo({
            behavior: N,
            left: f / 3
          });
        case "forward":
          return (b = F.current) == null ? void 0 : b.scrollTo({
            behavior: N,
            left: f / 3
          });
        case "middle": {
          const q = f / je / 4;
          return (X = F.current) == null ? void 0 : X.scrollTo({
            behavior: N,
            left: f / 2 - q
          });
        }
        default:
          return (V = F.current) == null ? void 0 : V.scrollTo({
            behavior: N,
            left: f / 2
          });
      }
    },
    []
  ), K = (S) => {
    Y(S);
  }, P = we(
    (S) => {
      const N = as(d);
      let f;
      switch (d) {
        case 0:
          f = N * 7;
          break;
        case 1:
          f = N;
          break;
        case 2:
          f = Math.ceil(N / yt);
          break;
      }
      ze(() => {
        switch (S) {
          case "back":
            v((b) => b.subtract(f, "days"));
            break;
          case "forward":
            v((b) => b.add(f, "days"));
            break;
          case "middle":
            v(D());
            break;
        }
        s == null || s(O);
      }, 300)();
    },
    [s, O, d]
  );
  fe(() => {
    F.current = document.getElementById(We), E(Be(d));
  }, [d]), fe(() => {
    const S = () => E(Be(d));
    return window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, [d]), fe(() => {
    s == null || s(O);
  }, [s, O]), fe(() => {
    u(!1);
  }, [o]), fe(() => {
    y || (J("middle"), u(!0), v(o));
  }, [o, y, J]);
  const _ = () => {
    t || (v(
      (S) => d === 2 ? S.add(xr, "hours") : S.add(Sr, "weeks")
    ), s == null || s(O));
  }, x = we(() => {
    t || (P("forward"), ze(() => {
      J("forward");
    }, 300)());
  }, [t, P, J]), L = () => {
    t || (v(
      (S) => d === 2 ? S.subtract(xr, "hours") : S.subtract(Sr, "weeks")
    ), s == null || s(O));
  }, w = we(() => {
    !y || t || (P("back"), ze(() => {
      J("back");
    }, 300)());
  }, [y, t, P, J]), I = we(() => {
    t || (P("middle"), ze(() => {
      J("middle", "smooth");
    }, 300)());
  }, [t, P, J]), B = () => ee(d + 1), U = () => ee(d - 1), ee = (S) => {
    is(S) && (h(S), E(Be(S)), s == null || s(O));
  }, k = () => i == null ? void 0 : i(), { Provider: $ } = on;
  return /* @__PURE__ */ R(
    $,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: _,
        handleScrollNext: x,
        handleGoPrev: L,
        handleScrollPrev: w,
        handleGoToday: I,
        zoomIn: B,
        zoomOut: U,
        zoom: d,
        isNextZoom: A,
        isPrevZoom: Z,
        date: p,
        isLoading: t,
        cols: C,
        startDate: T,
        dayOfYear: M,
        handleFilterData: k,
        tilesCoords: z,
        updateTilesCoords: K,
        recordsThreshold: c,
        onClearFilterData: a
      },
      children: r
    }
  );
}, et = () => Le(on), sn = (e, r, t) => {
  e.canvas.width = r * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = r + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, ds = H.div`
  height: calc(100vh - headerHeight);
`, us = H.div`
  position: relative;
`, hs = H.canvas``;
H.canvas``;
const kr = H.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, fs = vn(function({ zoom: r, rows: t, data: n, onTileClick: o }, s) {
  const { handleScrollNext: i, handleScrollPrev: a, date: l, isLoading: c, cols: d, startDate: h } = et(), p = xe(null), v = xe(null), y = xe(null), u = Fe(), C = we(
    (E) => {
      const A = rr(), Z = t * be + 1;
      sn(E, A, Z), Ao(E, r, t, d, h, u);
    },
    [d, h, t, r, u]
  );
  return fe(() => {
    if (!p.current)
      return;
    const E = p.current.getContext("2d");
    if (!E)
      return;
    const A = () => C(E);
    return window.addEventListener("resize", A), () => window.removeEventListener("resize", A);
  }, [C]), fe(() => {
    const E = p.current;
    if (!E)
      return;
    E.style.letterSpacing = "1px";
    const A = E.getContext("2d");
    A && C(A);
  }, [l, t, r, C]), fe(() => {
    if (!v.current)
      return;
    const E = new IntersectionObserver(
      (A) => A[0].isIntersecting ? i() : null,
      { root: document.getElementById(We) }
    );
    return E.observe(v.current), () => E.disconnect();
  }, [i]), fe(() => {
    if (!y.current)
      return;
    const E = new IntersectionObserver(
      (A) => A[0].isIntersecting ? a() : null,
      {
        root: document.getElementById(We),
        rootMargin: `0px 0px 0px -${Se}px`
      }
    );
    return E.observe(y.current), () => E.disconnect();
  }, [a]), /* @__PURE__ */ R(ds, { id: en, children: /* @__PURE__ */ ie(us, { ref: s, children: [
    /* @__PURE__ */ R(kr, { position: "left", ref: y }),
    /* @__PURE__ */ R(Ar, { isLoading: c, position: "left" }),
    /* @__PURE__ */ R(hs, { ref: p }),
    /* @__PURE__ */ R(aa, { data: n, zoom: r, onTileClick: o }),
    /* @__PURE__ */ R(kr, { ref: v, position: "right" }),
    /* @__PURE__ */ R(Ar, { isLoading: c, position: "right" })
  ] }) });
}), an = (e) => {
  const r = D.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, cn = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / de);
    t += o.hours + s, n += r % de, n >= de && (t++, n -= de);
  }), { hours: t, minutes: n };
}, ln = (e, r) => {
  let t = Cr;
  switch (r) {
    case 0:
      t = _o;
      break;
    case 1:
      t = Cr;
      break;
    case 2:
      t = 1;
      break;
  }
  const n = () => {
    let s = t - e.hours - 1, i = de - e.minutes;
    return i === de && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: n(),
    overtime: o()
  };
}, ps = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((c) => {
    const d = D(c.startDate).isoWeek(), h = D(c.startDate).isoWeekday(), p = D(c.endDate).isoWeek(), v = D(c.endDate).isoWeekday(), { hours: y, minutes: u } = an(c.occupancy);
    if (n === d) {
      const C = (Ae + 1 - h) * y, E = (Ae + 1 - h) * u;
      return { hours: Math.max(0, C), minutes: E };
    } else if (n === p) {
      const C = v > Ae ? Ae * y : v * y, E = v > Ae ? Ae * u : v * u;
      return { hours: C, minutes: E };
    } else if (D(r).isBetween(c.startDate, c.endDate))
      return { hours: Ae * y, minutes: Ae * u };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = cn(o), { free: a, overtime: l } = ln({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: a,
    overtime: l
  };
}, ms = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((d) => {
    const { hours: h, minutes: p } = an(d.occupancy);
    return o <= (n ? 7 : 5) ? { hours: h, minutes: p } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: a } = cn(s), { free: l, overtime: c } = ln({ hours: i, minutes: a }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, a) },
    free: l,
    overtime: c
  };
}, vs = (e, r) => {
  let t = 0;
  e.forEach((a) => {
    const l = D(a.startDate).hour(), c = D(a.endDate).hour(), d = r.hour(), h = D(a.endDate).minute(), p = D(a.startDate).minute();
    l < d && c > d ? t += de : l === d && c === d && p && h ? t += h ? h - p : de - p : l === d && c >= d ? t += p ? de - p : de : c === d && h && (t += h);
  });
  const n = Math.floor(t / de), o = t % de, s = n || o ? 0 : 1, i = n ? 0 : o ? de - o : 0;
  return {
    taken: { hours: n, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, ys = (e, r, t, n, o = !1) => {
  if (r < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => n === 1 ? D(t).isBetween(i.startDate, i.endDate, "day", "[]") : n === 2 ? D(t).isBetween(i.startDate, i.endDate, "hour", "[]") : D(i.startDate).isBetween(
    D(t),
    D(t).add(6, "days"),
    "day",
    "[]"
  ) || D(t).isBetween(D(i.startDate), D(i.endDate), "day", "[]"));
  switch (n) {
    case 1:
      return ms(s, t, n, o);
    case 2:
      return vs(s, t);
    default:
      return ps(s, t, n);
  }
}, gs = (e, r, t, n, o, s = !1) => {
  let i = "weeks", a;
  switch (o) {
    case 0:
      i = "weeks", a = Ye;
      break;
    case 1:
      i = "days", a = ge;
      break;
    case 2:
      i = "hours", a = ve;
      break;
  }
  const l = Math.ceil(o === 2 ? (r.x - 0.5 * a) / a : r.x / a), c = D(
    `${e.year}-${e.month + 1}-${e.dayOfMonth}T${e.hour}:00:00`
  ).add(l - 1, i), d = Math.ceil(r.y / be), h = t.findIndex((u, C, E) => E.slice(0, C + 1).reduce((Z, O) => Z + O, 0) >= d), p = o === 2 ? (l + 1) * a : l * a, v = (d - 1) * be + be, y = ys(
    n[h],
    h,
    c,
    o,
    s
  );
  return { coords: { x: p, y: v }, resourceIndex: h, disposition: y };
}, ws = (e, r, t, n) => {
  const o = [];
  let s = 0, i = [], a = 0;
  return r.length > n ? (r.forEach((l, c) => {
    const d = { id: e[c].id, label: e[c].label, data: l };
    a >= n && (o.push(i), s += i.length, i = [], a = 0), a++, i.push(d);
  }), t.slice(s).length <= n && (i = [], r.slice(s).forEach((l, c) => {
    const d = {
      id: e[c + s].id,
      label: e[c + s].label,
      data: l
    };
    i.push(d), c === r.length - s - 1 && o.push(i);
  })), o) : (r.forEach((l, c) => {
    const d = { id: e[c].id, label: e[c].label, data: l };
    i.push(d);
  }), o.push(i), o);
}, xs = (e) => {
  const r = [];
  for (const t of e) {
    let n = !1;
    if (r.length)
      for (const o of r) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          if (D(t.startDate).isBetween(o[i].startDate, o[i].endDate, null, "[]") || D(t.endDate).isBetween(o[i].startDate, o[i].endDate, null, "[]")) {
            s = !0;
            break;
          }
          if (D(t.startDate).isBefore(o[i].startDate, "day") && D(t.endDate).isAfter(o[i].endDate, "day")) {
            s = !0;
            break;
          }
        }
        if (!s) {
          o.push(t), n = !0;
          break;
        }
      }
    n || r.push([t]);
  }
  return r;
}, bs = (e) => {
  const r = [[], []], [t, n] = e.reduce((o, s) => {
    const i = xs(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, r);
  return { projectsPerPerson: t, rowsPerPerson: n };
}, Cs = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, Ss = (e) => {
  const { recordsThreshold: r } = et(), [t, n] = me(0), [o, s] = me(0), i = xe(null);
  fe(() => {
    i.current = document.getElementById(We);
  }, []);
  const { projectsPerPerson: a, rowsPerPerson: l } = Oe(() => bs(e), [e]), c = Oe(
    () => ws(e, a, l, r),
    [e, a, r, l]
  ), d = we(() => {
    c[o].length && i.current && (i.current.scroll({ top: 0 }), n((C) => C + c[Math.max(o, 0)].length), s((C) => Math.min(C + 1, c.length - 1)), window.scroll({ top: 0 }));
  }, [o, c]), h = we(() => {
    c[o].length && (n((C) => Math.max(C - c[o - 1].length, 0)), s((C) => Math.max(C - 1, 0)));
  }, [o, c]), p = we(() => {
    n(0), s(0);
  }, []), v = t + c[o].length, y = Oe(
    () => l.slice(t, v),
    [v, l, t]
  ), u = Oe(
    () => a.slice(t, v),
    [v, a, t]
  );
  return {
    page: c[o],
    currentPageNum: o,
    pagesAmount: c.length,
    projectsPerPerson: u,
    rowsPerItem: y,
    totalRowsPerPage: Cs(c[o]),
    next: d,
    previous: h,
    reset: p
  };
};
var Zt = {}, Ms = {
  get exports() {
    return Zt;
  },
  set exports(e) {
    Zt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var n = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (n[(o - 20) % 10] || n[o] || n[0]) + "]";
    } };
  });
})(Ms);
const $s = Zt;
var Wt = {}, _s = {
  get exports() {
    return Wt;
  },
  set exports(e) {
    Wt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(qe);
  })(ye, function(t) {
    function n(p) {
      return p && typeof p == "object" && "default" in p ? p : { default: p };
    }
    var o = n(t);
    function s(p) {
      return p % 10 < 5 && p % 10 > 1 && ~~(p / 10) % 10 != 1;
    }
    function i(p, v, y) {
      var u = p + " ";
      switch (y) {
        case "m":
          return v ? "minuta" : "minutę";
        case "mm":
          return u + (s(p) ? "minuty" : "minut");
        case "h":
          return v ? "godzina" : "godzinę";
        case "hh":
          return u + (s(p) ? "godziny" : "godzin");
        case "MM":
          return u + (s(p) ? "miesiące" : "miesięcy");
        case "yy":
          return u + (s(p) ? "lata" : "lat");
      }
    }
    var a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), c = /D MMMM/, d = function(p, v) {
      return c.test(v) ? a[p.month()] : l[p.month()];
    };
    d.s = l, d.f = a;
    var h = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: d, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(p) {
      return p + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(h, null, !0), h;
  });
})(_s);
const ks = Wt;
var Ft = {}, Es = {
  get exports() {
    return Ft;
  },
  set exports(e) {
    Ft = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(qe);
  })(ye, function(t) {
    function n(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var o = n(t), s = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function i(l, c, d) {
      var h = s[d];
      return Array.isArray(h) && (h = h[c ? 0 : 1]), h.replace("%d", l);
    }
    var a = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
    return o.default.locale(a, null, !0), a;
  });
})(Es);
const Ts = Ft;
var zt = {}, Ps = {
  get exports() {
    return zt;
  },
  set exports(e) {
    zt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(qe);
  })(ye, function(t) {
    function n(d) {
      return d && typeof d == "object" && "default" in d ? d : { default: d };
    }
    var o = n(t), s = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), i = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), a = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, l = function(d, h) {
      return a.test(h) ? s[d.month()] : i[d.month()];
    };
    l.s = i, l.f = s;
    var c = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: l, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(d) {
      return d + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return o.default.locale(c, null, !0), c;
  });
})(Ps);
const Rs = zt, As = {
  feelingEmpty: "Czuję się taki pusty...",
  free: "Wolne",
  loadNext: "Następne",
  loadPrevious: "Poprzednie",
  over: "ponad",
  taken: "Zajęte",
  topbar: {
    filters: "Filtry",
    next: "następny",
    prev: "poprzedni",
    today: "Dziś",
    view: "Widok"
  },
  search: "szukaj",
  week: "tydzień"
}, Os = {
  feelingEmpty: "I feel so empty...",
  free: "Free",
  loadNext: "Next",
  loadPrevious: "Previous",
  over: "over",
  taken: "Taken",
  topbar: {
    filters: "Filters",
    next: "next",
    prev: "prev",
    today: "Today",
    view: "View"
  },
  search: "search",
  week: "week"
}, Ds = {
  feelingEmpty: "Keine Ergebnisse...",
  free: "Frei",
  loadNext: "Weiter",
  loadPrevious: "Zurück",
  over: "über",
  taken: "Gebucht",
  topbar: {
    filters: "Filter",
    next: "vor",
    prev: "zurück",
    today: "Heute",
    view: "Ansicht"
  },
  search: "Suche",
  week: "Woche"
}, Ys = {
  feelingEmpty: "Jaučiuosi toks tuščias...",
  free: "Laisva",
  loadNext: "Kitas",
  loadPrevious: "Ankstesnis",
  over: "virš",
  taken: "Užimta",
  topbar: {
    filters: "Filtras",
    next: "kitas",
    prev: "ankstesnis",
    today: "Šiandien",
    view: "Rodinys"
  },
  search: "ieškoti",
  week: "savaitė"
}, Ls = [
  {
    id: "en",
    lang: Os,
    translateCode: "en-GB",
    dayjsTranslations: $s
  },
  {
    id: "pl",
    lang: As,
    translateCode: "pl-PL",
    dayjsTranslations: ks
  },
  {
    id: "lt",
    lang: Ys,
    translateCode: "lt-LT",
    dayjsTranslations: Rs
  },
  {
    id: "de",
    lang: Ds,
    translateCode: "de-DE",
    dayjsTranslations: Ts
  }
];
class Is {
  constructor() {
    nr(this, "locales", Ls);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(r) {
    this.locales.push(r);
  }
}
const gt = new Is(), dn = Nr({
  localesData: gt.getLocales(),
  currentLocale: gt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), Ns = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = me("en"), s = gt.getLocales(), i = we(() => {
    const h = s.find((p) => p.id === n);
    return typeof (h == null ? void 0 : h.dayjsTranslations) == "object" && D.locale(h.dayjsTranslations), h || s[0];
  }, [n, s]), [a, l] = me(i()), c = (h) => {
    localStorage.setItem("locale", h.translateCode), l(h);
  };
  fe(() => {
    t == null || t.forEach((h) => {
      s.find((v) => v.id === h.id) || gt.addLocales(h);
    });
  }, [s, t]), fe(() => {
    const h = localStorage.getItem("locale"), p = r ?? h ?? "en";
    localStorage.setItem("locale", p), o(p), l(i());
  }, [i, r]);
  const { Provider: d } = dn;
  return /* @__PURE__ */ R(d, { value: { currentLocale: a, localesData: s, setCurrentLocale: c }, children: e });
}, tt = () => Le(dn).currentLocale.lang, Hs = (e) => /* @__PURE__ */ W.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ W.createElement("defs", null, /* @__PURE__ */ W.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ W.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ W.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ W.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ W.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ W.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ W.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ W.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ W.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ W.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ W.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ W.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ W.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ W.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), Zs = H.div`
  height: 440px;
  width: 514px;
  position: relative;
`, Ws = H.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Fs = () => {
  const { feelingEmpty: e } = tt();
  return /* @__PURE__ */ ie(Zs, { children: [
    /* @__PURE__ */ R(Hs, {}),
    /* @__PURE__ */ R(Ws, { children: e })
  ] });
}, zs = H.div`
  position: relative;
  display: flex;
`, Bs = H.div`
  position: relative;
  margin-left: ${Se};
  display: flex;
  flex-direction: column;
  contain: paint;
`, js = H.div`
  width: calc(${({ width: e }) => e}px - ${Se}px);
  position: sticky;
  top: 0;
  height: 100%;
  left: ${Se}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Er = {
  coords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  }
}, Vs = ({
  data: e,
  onTileClick: r,
  onItemClick: t,
  toggleTheme: n,
  topBarWidth: o
}) => {
  const [s, i] = me(Er), [a, l] = me(e), [c, d] = me(!1), [h, p] = me(""), {
    zoom: v,
    startDate: y,
    config: { includeTakenHoursOnWeekendsInDayView: u, showTooltip: C, showThemeToggle: E }
  } = et(), A = xe(null), {
    page: Z,
    projectsPerPerson: O,
    totalRowsPerPage: m,
    rowsPerItem: M,
    currentPageNum: T,
    pagesAmount: F,
    next: z,
    previous: Y,
    reset: J
  } = Ss(a), K = xe(
    ze(
      (L, w, I, B, U) => {
        if (!A.current)
          return;
        const { left: ee, top: k } = A.current.getBoundingClientRect(), $ = { x: L.clientX - ee, y: L.clientY - k }, {
          coords: { x: S, y: N },
          resourceIndex: f,
          disposition: j
        } = gs(
          w,
          $,
          I,
          B,
          U,
          u
        );
        i({ coords: { x: S, y: N }, resourceIndex: f, disposition: j }), d(!0);
      },
      300
    )
  ), P = xe(
    ze((L, w) => {
      J(), l(
        L.filter(
          (I) => I.label.title.toLowerCase().includes(w.toLowerCase())
        )
      );
    }, 500)
  ), _ = (L) => {
    const w = L.target.value;
    p(w), P.current.cancel(), P.current(e, w);
  }, x = we(() => {
    K.current.cancel(), d(!1), i(Er);
  }, []);
  return fe(() => {
    const L = (I) => K.current(I, y, M, O, v), w = A.current;
    if (w)
      return w.addEventListener("mousemove", L), w.addEventListener("mouseleave", x), () => {
        w.removeEventListener("mousemove", L), w.removeEventListener("mouseleave", x);
      };
  }, [K, x, O, M, y, v]), fe(() => {
    h || l(e);
  }, [e, h]), /* @__PURE__ */ ie(zs, { children: [
    /* @__PURE__ */ R(
      Oi,
      {
        data: Z,
        pageNum: T,
        pagesAmount: F,
        rows: M,
        onLoadNext: z,
        onLoadPrevious: Y,
        searchInputValue: h,
        onSearchInputChange: _,
        onItemClick: t
      }
    ),
    /* @__PURE__ */ ie(Bs, { children: [
      /* @__PURE__ */ R(
        qi,
        {
          zoom: v,
          topBarWidth: o,
          showThemeToggle: E,
          toggleTheme: n
        }
      ),
      e.length ? /* @__PURE__ */ R(
        fs,
        {
          data: Z,
          zoom: v,
          rows: m,
          ref: A,
          onTileClick: r
        }
      ) : /* @__PURE__ */ R(js, { width: o, children: /* @__PURE__ */ R(Fs, {}) }),
      C && c && (s == null ? void 0 : s.resourceIndex) > -1 && /* @__PURE__ */ R(fa, { tooltipData: s, zoom: v })
    ] })
  ] });
}, un = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`, Gs = H.div`
  width: calc(${({ width: e }) => e}px - ${Se}px);
  position: sticky;
  top: 0;
  left: ${Se}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: e }) => e.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, Us = H.div`
  display: flex;
  gap: 1.875rem;
`, Tr = H.button`
  ${un};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textPrimary};
  :not(:disabled) {
    cursor: pointer;
  }
`, Xs = H.button`
  ${un};
  position: relative;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.5rem;
  color: ${({ theme: e }) => e.colors.textPrimary};

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1.5rem;
    background-color: ${({ theme: e }) => e.colors.textPrimary};
  }
  &::before {
    left: -1.125rem;
  }
  &::after {
    right: -1.125rem;
  }
`, Js = H.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, qs = H.div`
  display: flex;
`, Ks = H.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`, Qs = ({ width: e, showThemeToggle: r, toggleTheme: t }) => {
  const { topbar: n } = tt(), {
    data: o,
    config: s,
    handleGoNext: i,
    handleGoPrev: a,
    handleGoToday: l,
    zoomIn: c,
    zoomOut: d,
    isNextZoom: h,
    isPrevZoom: p,
    handleFilterData: v,
    onClearFilterData: y
  } = et(), { colors: u } = Fe(), { filterButtonState: C = -1 } = s, E = (A) => {
    A.stopPropagation(), y == null || y();
  };
  return /* @__PURE__ */ ie(Gs, { width: e, children: [
    /* @__PURE__ */ R(qs, { children: C >= 0 && /* @__PURE__ */ ie(
      Mt,
      {
        variant: C ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: v,
        children: [
          n.filters,
          !!C && /* @__PURE__ */ R("span", { onClick: E, children: /* @__PURE__ */ R(Ce, { iconName: "close", height: "16", width: "16", fill: u.textSecondary }) })
        ]
      }
    ) }),
    /* @__PURE__ */ ie(Us, { children: [
      /* @__PURE__ */ ie(Tr, { disabled: !(o != null && o.length), onClick: a, children: [
        /* @__PURE__ */ R(Ce, { iconName: "arrowLeft", height: "15", fill: u.textPrimary }),
        n.prev
      ] }),
      /* @__PURE__ */ R(Xs, { onClick: l, children: n.today }),
      /* @__PURE__ */ ie(Tr, { disabled: !(o != null && o.length), onClick: i, children: [
        n.next,
        /* @__PURE__ */ R(Ce, { iconName: "arrowRight", height: "15", fill: u.textPrimary })
      ] })
    ] }),
    /* @__PURE__ */ ie(Ks, { children: [
      r && /* @__PURE__ */ R(ya, { toggleTheme: t }),
      /* @__PURE__ */ ie(Js, { children: [
        n.view,
        /* @__PURE__ */ R(
          Mt,
          {
            isDisabled: !p,
            onClick: d,
            isFullRounded: !0,
            iconName: "subtract",
            width: "14"
          }
        ),
        /* @__PURE__ */ R(
          Mt,
          {
            isDisabled: !h,
            onClick: c,
            isFullRounded: !0,
            iconName: "add",
            width: "14"
          }
        )
      ] })
    ] })
  ] });
}, ei = (e) => /* @__PURE__ */ W.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), ti = (e) => /* @__PURE__ */ W.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), ri = (e) => /* @__PURE__ */ W.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), ni = (e) => /* @__PURE__ */ W.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), oi = (e) => /* @__PURE__ */ W.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), si = (e) => /* @__PURE__ */ W.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), ii = (e) => /* @__PURE__ */ W.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), ai = (e) => /* @__PURE__ */ W.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), ci = (e) => /* @__PURE__ */ W.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), li = (e) => /* @__PURE__ */ W.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), di = (e) => /* @__PURE__ */ W.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), ui = (e) => /* @__PURE__ */ W.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ W.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), hi = (e) => /* @__PURE__ */ W.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ W.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), fi = (e) => /* @__PURE__ */ W.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ W.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ W.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ W.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ W.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ W.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ W.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ W.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ W.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ W.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), pi = {
  add: ei,
  subtract: ti,
  filter: ri,
  arrowLeft: ni,
  arrowRight: oi,
  defaultAvatar: si,
  calendarWarning: ii,
  calendarFree: ai,
  arrowDown: li,
  arrowUp: ci,
  search: di,
  close: ui,
  moon: hi,
  sun: fi
}, Ce = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = Fe(), i = pi[e];
  return i ? /* @__PURE__ */ R(
    i,
    {
      style: { transition: ".5s ease" },
      fill: n ?? s.accent,
      width: r,
      height: t,
      className: o
    }
  ) : null;
}, mi = (e, r, t) => ({
  outlined: {
    color: t ? e.colors.disabled : e.colors.accent,
    border: `1px solid ${t ? e.colors.disabled : e.colors.accent}`,
    background: "transparent"
  },
  filled: {
    color: t ? e.colors.primary : e.colors.textSecondary,
    background: t ? e.colors.disabled : e.colors.accent,
    border: "1px solid transparent"
  }
})[r], vi = H.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: ${({ isFullRounded: e }) => e ? "50%" : "4px"};
  cursor: ${({ disabled: e }) => e ? "auto" : "pointer"};
  font-size: 14px;
  gap: 4px;
  padding: ${({ hasChildren: e }) => e ? "0 10px" : "0"};
  transition: 0.5s ease;
  ${({ theme: e, variant: r, disabled: t }) => mi(e, r, t)}
`, Mt = ({
  iconName: e,
  width: r,
  height: t,
  fill: n,
  className: o,
  onClick: s,
  children: i,
  isFullRounded: a,
  isDisabled: l,
  variant: c = "outlined"
}) => {
  const { colors: d } = Fe();
  return /* @__PURE__ */ ie(
    vi,
    {
      onClick: s,
      isFullRounded: a,
      hasChildren: !!i,
      disabled: l,
      variant: c,
      children: [
        /* @__PURE__ */ R(
          Ce,
          {
            iconName: e,
            width: r,
            height: t,
            fill: l ? d.disabled : n,
            className: o
          }
        ),
        i
      ]
    }
  );
}, yi = H.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, gi = H.div`
  position: relative;
`, ba = ({
  data: e,
  config: r,
  startDate: t,
  onRangeChange: n,
  onTileClick: o,
  onFilterData: s,
  onClearFilterData: i,
  onItemClick: a,
  isLoading: l
}) => {
  var O;
  const c = Oe(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      showTooltip: !0,
      translations: void 0,
      ...r
    }),
    [r]
  ), d = xe(null), [h, p] = me((O = d.current) == null ? void 0 : O.clientWidth), v = Oe(() => D(t), [t]), [y, u] = me(c.defaultTheme ?? "light"), C = () => {
    u(y === "light" ? "dark" : "light");
  }, E = y === "light" ? go : wo, A = c.theme ? c.theme[E.mode] : {}, Z = {
    ...E,
    colors: {
      ...E.colors,
      ...A
    }
  };
  return fe(() => {
    const m = () => {
      d.current && p(d.current.clientWidth);
    };
    return m(), window.addEventListener("resize", m), () => window.removeEventListener("resize", m);
  }, []), d.current, /* @__PURE__ */ ie(jt, { children: [
    /* @__PURE__ */ R(yo, {}),
    /* @__PURE__ */ R(fo, { theme: Z, children: /* @__PURE__ */ R(Ns, { lang: c.lang, translations: c.translations, children: /* @__PURE__ */ R(
      ls,
      {
        data: e,
        isLoading: !!l,
        config: c,
        onRangeChange: n,
        defaultStartDate: v,
        onFilterData: s,
        onClearFilterData: i,
        children: /* @__PURE__ */ R(
          yi,
          {
            showScroll: !!e.length,
            id: We,
            ref: d,
            children: /* @__PURE__ */ R(gi, { children: /* @__PURE__ */ R(
              Vs,
              {
                data: e,
                onTileClick: o,
                topBarWidth: h ?? 0,
                onItemClick: a,
                toggleTheme: C
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}, wi = H.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, xi = H.button`
  margin-top: 0px;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${({ theme: e }) => e.colors.accent};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.accent};
  line-height: 150%;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: ${({ isVisible: e }) => e ? "1" : "0"};
  pointer-events: ${({ isVisible: e }) => e ? "auto" : "none"};
  &:hover {
    transition: 0.5s ease;
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, bi = H.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Ci = H.p`
  ${Ke}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, Pr = ({
  intent: e,
  onClick: r,
  icon: t,
  isVisible: n,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: a } = tt(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${a} ${o}/${s}`;
  return /* @__PURE__ */ R(wi, { intent: e, children: /* @__PURE__ */ ie(xi, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ R(bi, { children: t }),
    /* @__PURE__ */ R(Ci, { children: l })
  ] }) });
}, Si = H.div`
  min-width: ${Se + "px"};
  max-width: ${Se + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, Mi = H.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Se}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, $i = H.input`
  height: 100%;
  width: calc(100% - 44px);
  background-color: transparent;
  color: ${({ theme: e }) => e.colors.textPrimary};
  padding: 7px 0 7px 12px;
  border: 0;
  outline: none;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.placeholder};
  }
`, _i = H.div`
  margin-left: 10px;
  height: 36px;
  width: calc(100% - 20px); //20px = 10px margin each side
  background-color: ${({ theme: e }) => e.colors.primary};
  border: 1px solid
    ${({ theme: e, isFocused: r }) => r ? e.colors.accent : e.colors.border};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: auto;
    margin-right: 12px;
    height: 24px;
    width: 24px;
  }
`, ki = H.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${be}px;
  height: calc(${be}px * ${({ rows: e }) => e});
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  transition: 0.5s ease;
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Ei = H.div`
  display: flex;
  align-items: center;
`, Ti = H.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`, Pi = H.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Ri = H.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, Rr = H.p`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain: e }) => e ? 0.75 + "rem" : 0.625 + "rem"};
  letter-spacing: ${({ isMain: e }) => e ? 1 + "px" : 0.5 + "px"};
  line-height: ${({ isMain: e }) => e ? 1.125 + "rem" : 0.75 + "rem"};
  color: ${({ isMain: e, theme: r }) => e ? r.colors.textPrimary : r.colors.placeholder};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`, Ai = ({ id: e, item: r, rows: t, onItemClick: n }) => /* @__PURE__ */ R(
  ki,
  {
    title: r.title + " | " + r.subtitle,
    clickable: typeof n == "function",
    rows: t,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ ie(Ei, { children: [
      /* @__PURE__ */ R(Ti, { children: r.icon ? /* @__PURE__ */ R(Pi, { src: r.icon, alt: "Icon" }) : /* @__PURE__ */ R(Ce, { iconName: "defaultAvatar" }) }),
      /* @__PURE__ */ ie(Ri, { children: [
        /* @__PURE__ */ R(Rr, { isMain: !0, children: r.title }),
        /* @__PURE__ */ R(Rr, { children: r.subtitle })
      ] })
    ] })
  }
), Oi = ({
  data: e,
  rows: r,
  onLoadNext: t,
  onLoadPrevious: n,
  pageNum: o,
  pagesAmount: s,
  searchInputValue: i,
  onSearchInputChange: a,
  onItemClick: l
}) => {
  const [c, d] = me(!1), { search: h } = tt(), p = () => d((v) => !v);
  return /* @__PURE__ */ ie(Si, { children: [
    /* @__PURE__ */ ie(Mi, { children: [
      /* @__PURE__ */ ie(_i, { isFocused: c, children: [
        /* @__PURE__ */ R(
          $i,
          {
            placeholder: h,
            value: i,
            onChange: a,
            onFocus: p,
            onBlur: p
          }
        ),
        /* @__PURE__ */ R(Ce, { iconName: "search" })
      ] }),
      /* @__PURE__ */ R(
        Pr,
        {
          intent: "previous",
          isVisible: o !== 0,
          onClick: n,
          icon: /* @__PURE__ */ R(Ce, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: o,
          pagesAmount: s
        }
      )
    ] }),
    e.map((v, y) => /* @__PURE__ */ R(
      Ai,
      {
        id: v.id,
        item: v.label,
        rows: r[y],
        onItemClick: l
      },
      v.id
    )),
    /* @__PURE__ */ R(
      Pr,
      {
        intent: "next",
        isVisible: o !== s - 1,
        onClick: t,
        icon: /* @__PURE__ */ R(Ce, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: o,
        pagesAmount: s
      }
    )
  ] });
}, Di = H.div`
  width: 388px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
  background-color: ${({ theme: e }) => e.colors.secondary};
  opacity: 0.7;
  overflow: hidden;
  z-index: 1;
`, Yi = vo`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Li = H.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Yi} 1s infinite;
`, Ii = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ R(Di, { position: r, children: /* @__PURE__ */ R(Li, {}) }) : null, Ar = Ii, Pe = (e, r) => {
  const {
    ctx: t,
    x: n,
    y: o,
    width: s,
    height: i,
    textYPos: a,
    label: l,
    font: c,
    isBottomRow: d,
    fillStyle: h,
    topText: p,
    bottomText: v,
    labelBetweenCells: y
  } = e;
  if (t.beginPath(), t.strokeStyle = r.colors.border, t.setLineDash([]), l && c && a) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), y ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = c;
    const u = n + s / 2 - t.measureText(l).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.colors.placeholder, t.fillText(l, u, a);
  }
  if (d && h && p && v) {
    t.fillStyle = h, t.fillRect(n, o, s, i), t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = p.font;
    const u = n + s / 2 - t.measureText(p.label).width / 2;
    t.fillStyle = p.color, t.fillText(p.label, u, p.y), t.font = v.font;
    const C = n + s / 2 - t.measureText(v.label).width / 2;
    t.fillStyle = v.color, t.fillText(v.label, C, v.y);
  }
}, hn = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t || !n ? r.colors.secondary : r.colors.primary;
}, Bt = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, Ni = (e, r, t, n) => {
  const o = Xe - Ne / bo, s = Xe - Ne / Co, i = Te + Qe;
  let a = 0;
  for (let l = 0; l < r; l++) {
    const c = nn(
      D(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(l, "days")
    );
    Pe(
      {
        ctx: e,
        x: a,
        y: i,
        width: ge,
        height: Ne,
        isBottomRow: !0,
        fillStyle: hn(
          {
            isCurrent: c.isCurrentDay,
            isBusinessDay: c.isBusinessDay
          },
          n
        ),
        topText: {
          y: o,
          label: c.dayName.toUpperCase(),
          font: _e.bottomRow.name,
          color: Bt(
            { isCurrent: c.isCurrentDay, isBusinessDay: c.isBusinessDay },
            n
          )
        },
        bottomText: {
          y: s,
          label: `${c.dayOfMonth}`,
          font: _e.bottomRow.number,
          color: Bt(
            {
              isCurrent: c.isCurrentDay,
              isBusinessDay: c.isBusinessDay,
              variant: "bottomRow"
            },
            n
          )
        }
      },
      n
    ), a += ge;
  }
}, Hi = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * ke;
  const s = Te;
  let a = t.month;
  for (let l = 0; l < r; l++) {
    a >= Ot && (a = 0);
    const c = rn(t, l) * ke;
    Pe(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: Qe,
        textYPos: tn,
        label: D().month(a).format("MMMM").toUpperCase(),
        font: _e.bottomRow.number
      },
      n
    ), o += c, a++;
  }
}, Zi = (e, r, t) => {
  let o = 0, s = 0, i = 0, a = D(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}`
  ).month();
  o = -r.dayOfMonth * ge + ge;
  for (let l = 0; l < Ot; l++)
    a > Ot - 1 && (a = 0, i++), s = D(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(l, "months").daysInMonth() * ge, Pe(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: Te,
        textYPos: Kt,
        label: D(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(a).format("MMMM").toUpperCase() + ` ${D(`${r.year + i}-${r.month + 1}-${r.dayOfMonth}`).month(a).format("YYYY")}`,
        font: _e.topRow
      },
      t
    ), o += s, a++;
}, Wi = (e, r, t, n) => {
  const o = 7 * ge, s = Te, i = e.canvas.width / o + o, a = r.weekOfYear;
  let l = 0;
  for (let c = 0; c < i; c++) {
    const d = D(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let h = (a + c) % br;
    h <= 0 && (h += br), d !== 1 && c === 0 && (l = -d * ge + ge), Pe(
      {
        ctx: e,
        x: l,
        y: s,
        width: o,
        height: Qe,
        textYPos: tn,
        label: `${t.toUpperCase()} ${h}`,
        font: _e.middleRow
      },
      n
    ), l += o;
  }
}, Fi = (e, r, t, n, o) => {
  const s = Xe - Ne / 1.6, i = Xe - Ne / 4.5, a = Te + Qe;
  let l = 0;
  for (let c = 0; c < r; c++) {
    const d = D(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      c,
      "weeks"
    ), h = d.isSame(D(), "week");
    Pe(
      {
        ctx: e,
        x: l,
        y: a,
        width: Ye,
        height: Ne,
        isBottomRow: !0,
        fillStyle: hn({ isCurrent: h, variant: "yearView" }, o),
        topText: {
          y: s,
          label: d.isoWeek().toString(),
          font: _e.bottomRow.name,
          color: Bt({ isCurrent: h }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: _e.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), l += Ye;
  }
}, zi = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let a = 0, l = 0, c = (Mr(s) - t + 1) * ke, d = 0;
  for (; a + d <= i; )
    l > 0 && (c = Mr(s + l) * ke), d + c > i && l > 0 && (c = Math.ceil((i - d) / ke) * ke), Pe(
      {
        ctx: e,
        x: a,
        y: 0,
        width: c,
        height: Te,
        textYPos: Kt,
        label: (s + l).toString(),
        font: _e.topRow
      },
      n
    ), a += c, d += c, l++;
}, Bi = (e, r, t, n) => {
  const o = Math.floor(r / yt) + 2, s = yt * ve;
  let l = -D(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * ve + 0.5 * ve;
  for (let c = 0; c < o; c++) {
    const d = D(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(c, "day").format("dddd DD.MM.YYYY").toUpperCase();
    Pe(
      {
        ctx: e,
        x: l,
        y: Je,
        width: s,
        height: at,
        textYPos: Je + at / 2 + 2,
        label: d,
        font: _e.bottomRow.number
      },
      n
    ), l += s;
  }
}, ji = (e, r, t, n) => {
  const o = Math.ceil(r / yt), s = D(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), a = s.month(), l = i.add(1, "day").month(), c = a === l ? 1 : 2;
  let d = 0.5 * ve;
  for (let h = 0; h < c; h++) {
    const p = D(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), y = D(`${t.year}-${t.month + h + 1}-01T:23:59:59`).endOf("month"), u = y.format("MMMM").toUpperCase(), C = y.diff(p, "hour") + 1, E = h === 0 ? C * ve : r * ve;
    Pe(
      {
        ctx: e,
        x: d,
        y: 0,
        width: E,
        height: Je,
        textYPos: Kt,
        label: u,
        font: _e.topRow
      },
      n
    ), d += E;
  }
}, Vi = (e, r, t, n) => {
  let o = 0;
  const s = Je + at, i = D(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), a = ve;
  for (let l = 0; l < r; l++) {
    const c = i.add(l, "hours").format("HH:00").toUpperCase();
    Pe(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: At,
        label: c,
        font: _e.bottomRow.number,
        textYPos: Je + at + At / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), o += ve;
  }
}, Gi = (e, r, t, n, o, s, i) => {
  switch (r) {
    case 0:
      zi(e, n, s, i), Hi(e, t, n, i), Fi(e, t, n, o, i);
      break;
    case 1:
      Zi(e, n, i), Wi(e, n, o, i), Ni(e, t, n, i);
      break;
    case 2:
      ji(e, t, n, i), Bi(e, t, n, i), Vi(e, t, n, i);
      break;
  }
}, Ui = H.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, Xi = H.div`
  height: ${Xe}px;
  display: block;
`, Ji = H.canvas``, qi = ({ zoom: e, topBarWidth: r, showThemeToggle: t, toggleTheme: n }) => {
  const { week: o } = tt(), { date: s, cols: i, dayOfYear: a, startDate: l } = et(), c = xe(null), d = Fe(), h = we(
    (p) => {
      const v = rr(), u = (e === 2 ? xo : Xe) + 1;
      sn(p, v, u), Gi(p, e, i, l, o, a, d);
    },
    [i, a, l, o, e, d]
  );
  return fe(() => {
    if (!c.current)
      return;
    const p = c.current.getContext("2d");
    if (!p)
      return;
    const v = () => h(p);
    return window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, [h]), fe(() => {
    const p = c.current;
    if (!p)
      return;
    p.style.letterSpacing = "1px";
    const v = p.getContext("2d");
    v && h(v);
  }, [s, e, h]), /* @__PURE__ */ ie(Ui, { children: [
    /* @__PURE__ */ R(Qs, { width: r, showThemeToggle: t, toggleTheme: n }),
    /* @__PURE__ */ R(Xi, { id: So, children: /* @__PURE__ */ R(Ji, { ref: c }) })
  ] });
}, Ki = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = ke;
      break;
    case 2:
      n = ve;
      break;
    default:
      n = ge;
  }
  const o = () => {
    let s;
    switch (t) {
      case 2:
        s = (e.startDate.diff(r.startDate, "minute") / de + 1) * n - n / 2;
        break;
      default:
        s = (e.startDate.diff(r.startDate, "day") + 1) * n;
    }
    return Math.max(0, s);
  };
  if (e.startDate.isAfter(r.startDate) && e.endDate.isBefore(r.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = e.endDate.diff(e.startDate, "minute") / de * n;
        break;
      default:
        s = e.endDate.diff(e.startDate, "day") * n + n;
    }
    return { x: o(), width: s };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isBefore(r.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = e.endDate.diff(r.startDate, "minute") / de * n + 0.5 * n;
        break;
      default:
        s = e.endDate.diff(r.startDate, "day") * n + n;
    }
    return { x: o(), width: s };
  }
  if (e.startDate.isAfter(r.startDate) && e.endDate.isAfter(r.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = r.endDate.diff(e.startDate, "minute") / de * n;
        break;
      default:
        s = r.endDate.diff(e.startDate, "day") * n + n;
    }
    return { x: o(), width: s };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isAfter(r.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = r.endDate.diff(r.startDate, "minute") / de * n;
        break;
      default:
        s = r.endDate.diff(r.startDate, "day") * n + n;
    }
    return { x: o(), width: s };
  }
  return { x: o(), width: 0 };
}, Qi = (e, r, t, n, o, s) => {
  const i = e * be + Mo, a = r.hour(), l = t.hour();
  let c, d, h, p;
  switch (s) {
    case 2: {
      c = D(n), d = D(o), h = D(r).hour(a).minute(0), p = D(t).hour(l).minute(0);
      break;
    }
    default: {
      c = D(n).hour(0).minute(0), d = D(o).hour(23).minute(59), h = r, p = t;
      break;
    }
  }
  return {
    ...Ki(
      { startDate: c, endDate: d },
      { startDate: h, endDate: p },
      s
    ),
    y: i
  };
}, ea = (e) => {
  if (!e)
    return "white";
  const r = [];
  for (let o = 1; o < 6; o += 2)
    r.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = r.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, ta = H.button`
  ${Ke}
  height: ${$o}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: ${({ theme: e }) => e.colors.textPrimary};
  width: 100%;
  cursor: pointer;
`, ra = H.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Or = H.p`
  ${Ke}
  ${Qr}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, na = H.p`
  ${Ke}
  ${Qr}
`, oa = H.div`
  position: sticky;
  left: ${Se + 16}px;
  overflow: hidden;
`, sa = ({ row: e, data: r, zoom: t, onTileClick: n }) => {
  const { date: o } = et(), s = tr(o, t), { y: i, x: a, width: l } = Qi(
    e,
    s.startDate,
    s.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: c } = Fe();
  return /* @__PURE__ */ R(
    ta,
    {
      style: {
        left: `${a}px`,
        top: `${i}px`,
        backgroundColor: `${r.bgColor ?? c.defaultTile}`,
        width: `${l}px`,
        color: ea(r.bgColor ?? "")
      },
      onClick: () => n == null ? void 0 : n(r),
      children: /* @__PURE__ */ R(ra, { children: /* @__PURE__ */ ie(oa, { children: [
        /* @__PURE__ */ R(Or, { bold: !0, children: r.title }),
        /* @__PURE__ */ R(Or, { children: r.subtitle }),
        /* @__PURE__ */ R(na, { children: r.description })
      ] }) })
    }
  );
}, ia = ({ data: e, zoom: r, onTileClick: t }) => {
  const n = we(() => {
    let o = 0;
    return e.map((s, i) => (i > 0 && (o += Math.max(e[i - 1].data.length, 1)), s.data.map(
      (a, l) => a.map((c) => /* @__PURE__ */ R(
        sa,
        {
          row: l + o,
          data: c,
          zoom: r,
          onTileClick: t
        },
        c.id
      ))
    ))).flat(2);
  }, [e, t, r]);
  return /* @__PURE__ */ R(jt, { children: n() });
}, aa = ia;
H.div`
  box-sizing: border-box;
  font-family: Inter;
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({ isExpanded: e }) => e ? 0 : "-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`;
H.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
H.label`
  font-size: 14px;
`;
H.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
H.input`
  height: 18px;
  width: 18px;
`;
H.button`
  width: 100%;
  font-size: 14px;
  outline: none;
  background-color: #fff;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  color: #0a11eb;
  cursor: pointer;
  &:hover {
    background-color: #c9e5ff;
  }
`;
H.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const ca = H.div`
  padding: 8px 16px;
  position: absolute;
  background-color: ${({ theme: e }) => e.colors.tooltip};
  border-radius: 8px;
  z-index: 3;
  transition: all 0.25s;
  transition-timing-function: ease-out;
  pointer-events: none;
`, la = H.div`
  width: 100%;
`, da = H.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid ${({ theme: e }) => e.colors.tooltip};
`, ua = H.div``, Dr = H.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 8px;
  }
`, Yr = H.div`
  ${Ke}
  display: flex;
  align-items: center;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSecondary};
  line-height: 12px;
  letter-spacing: 0.5px;
`, Lr = H.p`
  ${Ke}
  margin-left: 4px;
  color: ${({ theme: e }) => e.colors.textSecondary};
`, ha = H.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.warning};
`, fa = ({ tooltipData: e, zoom: r }) => {
  const { taken: t, free: n, over: o } = tt(), { coords: s, disposition: i } = e, a = xe(null);
  let l = Ye;
  switch (r) {
    case 0:
      l = Ye;
      break;
    case 1:
      l = ge;
      break;
    case 2:
      l = ve;
      break;
  }
  return Ir(() => {
    if (!a.current)
      return;
    const { width: c } = a.current.getBoundingClientRect();
    let d;
    switch (r) {
      case 2:
        d = c / 2 + l;
        break;
      default:
        d = c / 2 + l / 2;
        break;
    }
    a.current.style.left = `${s.x - d}px`, a.current.style.top = `${s.y + 8}px`;
  }, [s.x, l, i.overtime, s.y, r]), /* @__PURE__ */ ie(ca, { ref: a, children: [
    /* @__PURE__ */ R(la, { children: /* @__PURE__ */ ie(ua, { children: [
      /* @__PURE__ */ ie(Dr, { children: [
        /* @__PURE__ */ R(Ce, { iconName: "calendarWarning", height: "14" }),
        /* @__PURE__ */ ie(Yr, { children: [
          /* @__PURE__ */ R(Lr, { children: `${t}: ${i.taken.hours}h ${i.taken.minutes}m` }),
          (i.overtime.hours > 0 || i.overtime.minutes > 0) && /* @__PURE__ */ ie(jt, { children: [
            " ",
            "-",
            " ",
            /* @__PURE__ */ R(ha, { children: `${i.overtime.hours}h ${i.overtime.minutes}m ${o}` })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ ie(Dr, { children: [
        /* @__PURE__ */ R(Ce, { iconName: "calendarFree", height: "14" }),
        /* @__PURE__ */ R(Yr, { children: /* @__PURE__ */ R(Lr, { children: `${n}: ${i.free.hours}h ${i.free.minutes}m` }) })
      ] })
    ] }) }),
    /* @__PURE__ */ R(da, {})
  ] });
}, pa = H.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({ theme: e }) => e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`, ma = H.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: e }) => e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: e }) => e.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`, va = H.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: e }) => e.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`, ya = ({ toggleTheme: e }) => {
  const r = Fe();
  return /* @__PURE__ */ ie(pa, { onClick: e, children: [
    /* @__PURE__ */ R(ma, {}),
    /* @__PURE__ */ R(va, { children: r.mode === "light" ? /* @__PURE__ */ R(Ce, { iconName: "sun", height: "16", width: "16" }) : /* @__PURE__ */ R(Ce, { iconName: "moon", height: "16", width: "16" }) })
  ] });
};
export {
  ba as Scheduler
};
