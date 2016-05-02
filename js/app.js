var $sidenav = $("#sidenav");
jQuery(function(t) {
    new InfoAge.load
});
var InfoAge = {
    load: function() {
        $("#page section").last().css("min-height", $sidenav.height());
        $sidenav.on("click", "a", function() {
            var t = $(this).attr("href");
            $("html,body").animate({
                scrollTop: $(t).offset().top - 60
            }, 600);
            return false
        });
        var t = $("section"),
            e = $("#sidenav ol li > a"),
            i = t.map(function() {
                return $(this).position().top - 70
            }).get(),
            n = i.length - 1,
            s = 0;
        var r = function(t) {
            for (var e = 0, s = n; e < s; e++)
                if (t > i[e] && t < i[e + 1]) return e;
            if (t > 500) return i.length - 1;
            return 0
        };
        $(window).scroll(function(t) {
            var i = $(this).scrollTop(),
                o = r(i);
            if (o !== s) {
                s = o;
                if (s == undefined) s = n;
                e.eq(s).parent("li").addClass("selected").siblings(".selected").removeClass("selected");
                _current = $("nav li a.selected").attr("href")
            }
        })
    }
};
(function() {
    var t = $sidenav.offset(),
        e = $(window).scroll(function() {
            var e = $(this).scrollTop();
            var i = $("#sidenav").width();
            if (e > t.top - 65) $sidenav.css({
                position: "fixed",
                top: "65px",
                width: i + "px"
            });
            else $sidenav.css({
                position: "static"
            })
        })
})();
