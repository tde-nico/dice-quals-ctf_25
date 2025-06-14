( () => {
    var e, r, t, a, n, o, i = {}, s = {};
    function c(e) {
        var r = s[e];
        if (void 0 !== r)
            return r.exports;
        var t = s[e] = {
            id: e,
            exports: {}
        };
        return i[e](t, t.exports, c),
        t.exports
    }
    c.m = i,
    e = "function" == typeof Symbol ? Symbol("webpack queues") : "__webpack_queues__",
    r = "function" == typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__",
    t = "function" == typeof Symbol ? Symbol("webpack error") : "__webpack_error__",
    a = e => {
        e && e.d < 1 && (e.d = 1,
        e.forEach((e => e.r--)),
        e.forEach((e => e.r-- ? e.r++ : e())))
    }
    ,
    c.a = (n, o, i) => {
        var s;
        i && ((s = []).d = -1);
        var c, p, l, u = new Set, b = n.exports, d = new Promise(( (e, r) => {
            l = r,
            p = e
        }
        ));
        d[r] = b,
        d[e] = e => (s && e(s),
        u.forEach(e),
        d.catch((e => {}
        ))),
        n.exports = d,
        o((n => {
            var o;
            c = (n => n.map((n => {
                if (null !== n && "object" == typeof n) {
                    if (n[e])
                        return n;
                    if (n.then) {
                        var o = [];
                        o.d = 0,
                        n.then((e => {
                            i[r] = e,
                            a(o)
                        }
                        ), (e => {
                            i[t] = e,
                            a(o)
                        }
                        ));
                        var i = {};
                        return i[e] = e => e(o),
                        i
                    }
                }
                var s = {};
                return s[e] = e => {}
                ,
                s[r] = n,
                s
            }
            )))(n);
            var i = () => c.map((e => {
                if (e[t])
                    throw e[t];
                return e[r]
            }
            ))
              , p = new Promise((r => {
                (o = () => r(i)).r = 0;
                var t = e => e !== s && !u.has(e) && (u.add(e),
                e && !e.d && (o.r++,
                e.push(o)));
                c.map((r => r[e](t)))
            }
            ));
            return o.r ? p : i()
        }
        ), (e => (e ? l(d[t] = e) : p(b),
        a(s)))),
        s && s.d < 0 && (s.d = 0)
    }
    ,
    c.d = (e, r) => {
        for (var t in r)
            c.o(r, t) && !c.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: r[t]
            })
    }
    ,
    c.f = {},
    c.e = e => Promise.all(Object.keys(c.f).reduce(( (r, t) => (c.f[t](e, r),
    r)), [])),
    c.u = e => e + ".bootstrap.js",
    c.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    c.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r),
    n = {},
    o = "create-wasm-app:",
    c.l = (e, r, t, a) => {
        if (n[e])
            n[e].push(r);
        else {
            var i, s;
            if (void 0 !== t)
                for (var p = document.getElementsByTagName("script"), l = 0; l < p.length; l++) {
                    var u = p[l];
                    if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == o + t) {
                        i = u;
                        break
                    }
                }
            i || (s = !0,
            (i = document.createElement("script")).charset = "utf-8",
            i.timeout = 120,
            c.nc && i.setAttribute("nonce", c.nc),
            i.setAttribute("data-webpack", o + t),
            i.src = e),
            n[e] = [r];
            var b = (r, t) => {
                i.onerror = i.onload = null,
                clearTimeout(d);
                var a = n[e];
                if (delete n[e],
                i.parentNode && i.parentNode.removeChild(i),
                a && a.forEach((e => e(t))),
                r)
                    return r(t)
            }
              , d = setTimeout(b.bind(null, void 0, {
                type: "timeout",
                target: i
            }), 12e4);
            i.onerror = b.bind(null, i.onerror),
            i.onload = b.bind(null, i.onload),
            s && document.head.appendChild(i)
        }
    }
    ,
    c.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    c.v = (e, r, t, a) => {
        var n = fetch(c.p + "" + t + ".module.wasm")
          , o = () => n.then((e => e.arrayBuffer())).then((e => WebAssembly.instantiate(e, a))).then((r => Object.assign(e, r.instance.exports)));
        return n.then((r => "function" == typeof WebAssembly.instantiateStreaming ? WebAssembly.instantiateStreaming(r, a).then((r => Object.assign(e, r.instance.exports)), (e => {
            if ("application/wasm" !== r.headers.get("Content-Type"))
                return console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e),
                o();
            throw e
        }
        )) : o()))
    }
    ,
    ( () => {
        var e;
        c.g.importScripts && (e = c.g.location + "");
        var r = c.g.document;
        if (!e && r && (r.currentScript && "SCRIPT" === r.currentScript.tagName.toUpperCase() && (e = r.currentScript.src),
        !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
                for (var a = t.length - 1; a > -1 && (!e || !/^http(s?):/.test(e)); )
                    e = t[a--].src
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        c.p = e
    }
    )(),
    ( () => {
        var e = {
            792: 0
        };
        c.f.j = (r, t) => {
            var a = c.o(e, r) ? e[r] : void 0;
            if (0 !== a)
                if (a)
                    t.push(a[2]);
                else {
                    var n = new Promise(( (t, n) => a = e[r] = [t, n]));
                    t.push(a[2] = n);
                    var o = c.p + c.u(r)
                      , i = new Error;
                    c.l(o, (t => {
                        if (c.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0),
                        a)) {
                            var n = t && ("load" === t.type ? "missing" : t.type)
                              , o = t && t.target && t.target.src;
                            i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + o + ")",
                            i.name = "ChunkLoadError",
                            i.type = n,
                            i.request = o,
                            a[1](i)
                        }
                    }
                    ), "chunk-" + r, r)
                }
        }
        ;
        var r = (r, t) => {
            var a, n, [o,i,s] = t, p = 0;
            if (o.some((r => 0 !== e[r]))) {
                for (a in i)
                    c.o(i, a) && (c.m[a] = i[a]);
                s && s(c)
            }
            for (r && r(t); p < o.length; p++)
                n = o[p],
                c.o(e, n) && e[n] && e[n][0](),
                e[n] = 0
        }
          , t = self.webpackChunkcreate_wasm_app = self.webpackChunkcreate_wasm_app || [];
        t.forEach(r.bind(null, 0)),
        t.push = r.bind(null, t.push.bind(t))
    }
    )(),
    c.e(237).then(c.bind(c, 237)).catch((e => console.error("Error importing `index.js`:", e)))
}
)();
