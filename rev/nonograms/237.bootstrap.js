"use strict";
(self.webpackChunkcreate_wasm_app = self.webpackChunkcreate_wasm_app || []).push([[237], {
    21: (t, e, r) => {
        var n = r(676);
        t.exports = r.v(e, t.id, "963addfe188305bb20e6", {
            "./nonogram_bg.js": {
                __wbindgen_throw: n.Qn,
                __wbindgen_init_externref_table: n.bL
            }
        })
    }
    ,
    237: (t, e, r) => {
        r.a(t, (async (t, n) => {
            try {
                r.r(e);
                var i = r(440)
                  , o = r(21)
                  , _ = t([i, o]);
                [i,o] = _.then ? (await _)() : _;
                const s = 20
                  , l = "#CCCCCC"
                  , a = "#000000"
                  , c = "#FFFFFF"
                  , g = i.xA.new()
                  , d = g.width()
                  , w = g.height()
                  , h = document.getElementById("canvas");
                h.height = (s + 1) * w + 1,
                h.width = (s + 1) * d + 1;
                const f = h.getContext("2d")
                  , u = () => {
                    f.beginPath(),
                    f.strokeStyle = l;
                    for (let t = 0; t <= d; t++)
                        f.moveTo(t * (s + 1) + 1, 0),
                        f.lineTo(t * (s + 1) + 1, (s + 1) * w + 1);
                    for (let t = 0; t <= w; t++)
                        f.moveTo(0, t * (s + 1) + 1),
                        f.lineTo((s + 1) * d + 1, t * (s + 1) + 1);
                    f.stroke()
                }
                  , b = (t, e) => t * d + e
                  , p = () => {
                    const t = g.cells()
                      , e = new Uint8Array(o.memory.buffer,t,d * w);
                    f.beginPath();
                    for (let t = 0; t < w; t++)
                        for (let r = 0; r < d; r++) {
                            const n = b(t, r);
                            f.fillStyle = e[n] === i.fh.Off ? c : a,
                            f.fillRect(r * (s + 1) + 1, t * (s + 1) + 1, s, s)
                        }
                    f.stroke()
                }
                  , y = () => {
                    const t = g.answers()
                      , e = new Uint16Array(o.memory.buffer,t,d + w)
                      , r = g.current()
                      , n = new Uint16Array(o.memory.buffer,r,d + w)
                      , i = document.getElementById("rows");
                    let _ = "";
                    for (let t = 0; t < w; t++) {
                        let r = e[t] === n[t] ? "green" : "red";
                        _ += e[t].toString(16).padStart(4, "0") + '<i style="color: ' + r + '">(' + n[t].toString(16).padStart(4, "0") + ") </i>\n"
                    }
                    i.innerHTML = _;
                    for (let t = 0; t < d; t++) {
                        const r = document.getElementById("col-" + t.toString())
                          , i = e[w + t] === n[w + t] ? "green" : "red"
                          , o = e[w + t].toString(16).padStart(4, "0") + '<i style="color: ' + i + '">(' + n[w + t].toString(16).padStart(4, "0") + ") </i>";
                        r.innerHTML = o
                    }
                }
                  , m = () => {
                    const t = document.getElementById("cols");
                    for (let e = 0; e < d; e++) {
                        const r = document.createElement("div");
                        r.classList.add("col"),
                        r.id = "col-" + e.toString(),
                        t.appendChild(r)
                    }
                }
                ;
                h.addEventListener("click", (t => {
                    const e = h.getBoundingClientRect()
                      , r = h.width / e.width
                      , n = h.height / e.height
                      , i = (t.clientX - e.left) * r
                      , o = (t.clientY - e.top) * n
                      , _ = Math.min(Math.floor(o / (s + 1)), w - 1)
                      , l = Math.min(Math.floor(i / (s + 1)), d - 1);
                    g.toggle_cell(_, l),
                    u(),
                    p(),
                    y(),
                    g.win() && alert("You win! Now scan the QR code to get the flag!")
                }
                )),
                m(),
                p(),
                u(),
                requestAnimationFrame(( () => {}
                )),
                y(),
                n()
            } catch (t) {
                n(t)
            }
        }
        ))
    }
    ,
    440: (t, e, r) => {
        r.a(t, (async (t, n) => {
            try {
                r.d(e, {
                    fh: () => o.fh,
                    xA: () => o.xA
                });
                var i = r(21)
                  , o = r(676)
                  , _ = t([i]);
                i = (_.then ? (await _)() : _)[0],
                (0,
                o.lI)(i),
                i.__wbindgen_start(),
                n()
            } catch (t) {
                n(t)
            }
        }
        ))
    }
    ,
    676: (t, e, r) => {
        let n;
        function i(t) {
            n = t
        }
        r.d(e, {
            Qn: () => d,
            bL: () => g,
            fh: () => l,
            lI: () => i,
            xA: () => c
        });
        let o = new ("undefined" == typeof TextDecoder ? (0,
        module.require)("util").TextDecoder : TextDecoder)("utf-8",{
            ignoreBOM: !0,
            fatal: !0
        });
        o.decode();
        let _ = null;
        function s(t, e) {
            return t >>>= 0,
            o.decode((null !== _ && 0 !== _.byteLength || (_ = new Uint8Array(n.memory.buffer)),
            _).subarray(t, t + e))
        }
        const l = Object.freeze({
            On: 1,
            1: "On",
            Off: 0,
            0: "Off"
        })
          , a = "undefined" == typeof FinalizationRegistry ? {
            register: () => {}
            ,
            unregister: () => {}
        } : new FinalizationRegistry((t => n.__wbg_grid_free(t >>> 0, 1)));
        class c {
            static __wrap(t) {
                t >>>= 0;
                const e = Object.create(c.prototype);
                return e.__wbg_ptr = t,
                a.register(e, e.__wbg_ptr, e),
                e
            }
            __destroy_into_raw() {
                const t = this.__wbg_ptr;
                return this.__wbg_ptr = 0,
                a.unregister(this),
                t
            }
            free() {
                const t = this.__destroy_into_raw();
                n.__wbg_grid_free(t, 0)
            }
            static new() {
                const t = n.grid_new();
                return c.__wrap(t)
            }
            width() {
                return n.grid_width(this.__wbg_ptr)
            }
            height() {
                return n.grid_height(this.__wbg_ptr)
            }
            cells() {
                return n.grid_cells(this.__wbg_ptr) >>> 0
            }
            answers() {
                return n.grid_answers(this.__wbg_ptr) >>> 0
            }
            current() {
                return n.grid_current(this.__wbg_ptr) >>> 0
            }
            render() {
                let t, e;
                try {
                    const r = n.grid_render(this.__wbg_ptr);
                    return t = r[0],
                    e = r[1],
                    s(r[0], r[1])
                } finally {
                    n.__wbindgen_free(t, e, 1)
                }
            }
            toggle_cell(t, e) {
                n.grid_toggle_cell(this.__wbg_ptr, t, e)
            }
            win() {
                return 0 !== n.grid_win(this.__wbg_ptr)
            }
        }
        function g() {
            const t = n.__wbindgen_export_0
              , e = t.grow(4);
            t.set(0, void 0),
            t.set(e + 0, void 0),
            t.set(e + 1, null),
            t.set(e + 2, !0),
            t.set(e + 3, !1)
        }
        function d(t, e) {
            throw new Error(s(t, e))
        }
    }
}]);
