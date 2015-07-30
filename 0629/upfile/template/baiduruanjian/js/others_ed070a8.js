define("app/others",
function(n) {
    var t = n("underscore"),
    o = n("app/slipblock"),
    i = n("app/fixie"),
    e = ($(window), $("#content")),
    c = function() {
        var n, t = $("#header"),
        o = t.height(),
        i = function() {
            return e.scrollTop() > 150 ? "hidden": "visible"
        },
        c = function() {
            return "hidden" === n ? -o: 0
        },
        a = function() {
            t.finish().animate({
                top: c()
            }).find(".header-tip")["hidden" === n ? "fadeOut": "fadeIn"]()
        };
        return n = i(),
        a(),
        {
            slip: function() {
                var t = i();
                n && n !== t && (n = t, a())
            }
        }
    } ();
    i.start(),
    o.start(),
    $("#nav").on("mouseenter", "li",
    function() {
        o.move($(this))
    }).on("mouseleave",
    function() {
        o.back()
    }),
    $(".button-download-70-qiang").on("click",
    function() {
        window._hmt && _hmt.push(["_trackEvent", "7.0 疯抢版下载按钮", "下载", "下载"])
    }),
    $(".button-download-70-parents").on("click",
    function() {
        window._hmt && _hmt.push(["_trackEvent", "7.0 爸妈版下载按钮", "下载", "下载"])
    }),
    $(".button-download-65-standard").on("click",
    function() {
        window._hmt && _hmt.push(["_trackEvent", "6.5 标准版下载按钮", "下载", "下载"])
    }),
    $(".button-download-65-7k7k").on("click",
    function() {
        window._hmt && _hmt.push(["_trackEvent", "6.5 7K7K游戏版下载按钮", "下载", "下载"])
    }),
    e.on("scroll", t.throttle(c.slip, 100))
});