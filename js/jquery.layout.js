$(function () {
    var page = $("div[id=page]").eq(0),
        top = $("div[id=top]").eq(0),
        center = $("div[id=center]").eq(0),
        bottom = $("div[id=bottom]").eq(0),
        left = $("div[id=left]").eq(0),
        right = $("div[id=right]").eq(0),
        center_headline = center.find("h2").eq(0),
        middle = $("div[id=middle]").eq(0),
        loading = $("div[id=loading]").eq(0),
        dynamicGrids = $(".dynamic"),
        initial = true,
        timeout = null,
        topIsHidden,
        bottomIsHidden,
        leftIsHidden,
        rightIsHidden,
        pageIsCenter,
        windowMinWidth = 700,
        forcedHidden = false;

    updateLayout = function () {
        dynamicGrids.each(function () {
            var width = $(this).outerWidth()
            $(this).find("> [data-width]").each(function () {
                if ($(this).attr("data-width") > width) {
                    $(this).addClass("rows");
                } else {
                    $(this).removeClass("rows");
                }
            });
        });

        if (initial || $(window).width() <= windowMinWidth) {
            if (left.length > 0 && !left.hasClass("hidden") && right.length > 0 && !right.hasClass("hidden")) {
                leftIsHidden = left.hasClass("hidden");
                rightIsHidden = right.hasClass("hidden");
                left.addClass("hidden");
                right.addClass("hidden");
                forcedHidden = true;
            }
        }
        // pure JS media queries here to ensure zero flickering
        if ($(window).width() <= windowMinWidth) {
            if (left.length > 0) {
                left.addClass("small");
            }
            if (right.length > 0) {
                right.addClass("small");
            }
        } else {
            if (left.length > 0) {
                left.removeClass("small");
            }
            if (right.length > 0) {
                right.removeClass("small");
            }
            if (forcedHidden) {
                if (!leftIsHidden) {
                    left.removeClass("hidden");
                }
                if (!rightIsHidden) {
                    right.removeClass("hidden");
                }
                forcedHidden = false;
            }
        }
        if (initial) {
            initial = false;
            loading.hide();
        }
    }

    updateLayout();

    $(window).resize(function () {
        if (timeout != null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
            updateLayout();
        }, 50);
    });

    togglePadding = function () {
        middle.toggleClass("padding");
    }

    // show/hide header
    toggleTop = function () {
        if (top.length > 0) {
            top.toggleClass("hidden");
        } else {
            alert("Top doesn't exist");
        }
    }

    // show/hide footer
    toggleBottom = function () {
        if (bottom.length > 0) {
            bottom.toggleClass("hidden");
        } else {
            alert("Bottom doesn't exist");
        }
    }

    // switch between full width layout and centered layout
    togglePage = function () {
        page.toggleClass("center");
        updateLayout();
    }

    // show/hide left sidebar
    toggleLeft = function () {
        if (left.length > 0) {
            leftIsHidden = !left.hasClass("hidden");
            if (right.length > 0 && left.hasClass("hidden") && $(window).width() <= windowMinWidth) {
                right.addClass("hidden");
            }
            left.toggleClass("hidden")
        } else {
            alert("Left doesn't exist");
        }
        forcedHidden = false;
        updateLayout();
    }

    // show/hide right sidebar
    toggleRight = function () {
        if (right.length > 0) {
            leftIsHidden = !right.hasClass("hidden");
            if (left.length > 0 && right.hasClass("hidden") && $(window).width() <= windowMinWidth) {
                left.addClass("hidden");
            }
            right.toggleClass("hidden");
        } else {
            alert("Right doesn't exist");
        }
        forcedHidden = false;
        updateLayout();
    }

    toggleCenter = function () {
        var isExpanded = $("#toggle-center").hasClass("collapse");
        if (isExpanded) {
            if (top.length > 0 && !topIsHidden) {
                top.removeClass("hidden");
            }
            if (bottom.length > 0 && !bottomIsHidden) {
                bottom.removeClass("hidden");
            }
            if (left.length > 0 && !leftIsHidden) {
                left.removeClass("hidden");
            }
            if (right.length > 0 && !rightIsHidden) {
                right.removeClass("hidden");
            }
            if (pageIsCenter) {
                page.addClass("center");
            }
        } else {
            if (top.length > 0) {
                topIsHidden = top.hasClass("hidden");
                top.addClass("hidden");
            }
            if (bottom.length > 0) {
                bottomIsHidden = bottom.hasClass("hidden");
                bottom.addClass("hidden");
            }
            if (left.length > 0) {
                leftIsHidden = left.hasClass("hidden");
                left.addClass("hidden");
            }
            if (right.length > 0) {
                rightIsHidden = right.hasClass("hidden");
                right.addClass("hidden");

            }
            pageIsCenter = page.hasClass("center");
            page.removeClass("center");
        }
        $("#toggle-center").toggleClass("collapse");
        forcedHidden = false;
        updateLayout();
    }
});