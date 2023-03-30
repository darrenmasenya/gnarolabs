(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        75557: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(77573)
            }])
        },
        73193: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var a = n(52322);

            function r() {
                return (0, a.jsx)("div", {
                    className: "px-8 bg-white border-t border-black border-opacity-10 bg-opacity-100 z-150 ",
                    children: (0, a.jsx)("div", {
                        className: "lg:px-8 max-w-11xl mx-auto",
                        children: (0, a.jsxs)("div", {
                            className: "border-t flex w-full py-8 gap-16 max-w-11xl mx-auto border-t border-black border-opacity-0",
                            children: [(0, a.jsxs)("p", {
                                className: "text-2xs font-mono uppercase opacity-50",
                                children: ["\xa9 Azuki 2022 ", (0, a.jsx)("span", {
                                    className: "opacity-10",
                                    children: "//"
                                }), " "]
                            }), (0, a.jsx)("p", {
                                className: "text-2xs ml-auto font-mono uppercase opacity-50",
                                children: "hello@azuki.com"
                            })]
                        })
                    })
                })
            }
        },
        52516: function(e, t, n) {
            "use strict";
            n(52322), n(2784), n(57753), n(75868), n(41664), n(11163), n(11055), n(31298), n(60426)
        },
        85789: function(e, t, n) {
            "use strict";
            var a = n(52322),
                r = n(10501),
                o = {
                    hidden: {
                        opacity: 0
                    },
                    enter: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    duration: 40
                };
            t.Z = function(e) {
                var t = e.children;
                return (0, a.jsx)(r.E.main, {
                    initial: "hidden",
                    animate: "enter",
                    exit: "exit",
                    variants: o,
                    transition: {
                        type: "easeInOut",
                        duration: .25
                    },
                    className: "",
                    children: t
                })
            }
        },
        77573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return i
                },
                default: function() {
                    return l
                }
            });
            var a = n(52322),
                r = n(85789),
                o = (n(57753), n(73193), n(52516), n(2784)),
                c = n(11163),
                s = n(76699),
                i = (n(11055), !0);

            function l() {
                var e = (0, c.useRouter)(),
                    t = (0, s.$)("nav"),
                    n = (t.t, t.i18n);
                return (0, o.useEffect)((function() {
                    n.changeLanguage(e.locale)
                }), [e.locale]), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(r.Z, {
                        children: [(0, a.jsx)("video", {
                            className: "w-full transform hidden lg:block h-screen object-cover overlay-item z-10",
                            loop: !0,
                            autoPlay: !0,
                            muted: !0,
                            controls: !1,
                            playsInline: !0,
                            children: (0, a.jsx)("source", {
                                src: "https://azuki-website.s3.us-west-1.amazonaws.com/beanz2.mp4",
                                type: "video/mp4"
                            })
                        }), (0, a.jsx)("img", {
                            style: {
                                zIndex: -100
                            },
                            className: "min-w-screen w-full lg:block bottom-0 transform h-screen object-cover absolute top-0 left-0 object-center overlay-item -z-10",
                            src: "/loadingb2.jpg",
                            alt: ""
                        }), (0, a.jsx)("img", {
                            style: {
                                zIndex: -100
                            },
                            className: "w-full bg-olive lg:hidden bottom-0 transform h-screen object-cover object-center overlay-item -z-10",
                            src: "/mobilemeep2.jpg",
                            alt: ""
                        })]
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [5868, 1298, 9774, 2888, 179], (function() {
            return t = 75557, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);