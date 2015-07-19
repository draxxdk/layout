$(function () {
    var page = $("div[id=page]").eq(0),
        top = $("div[id=top]").eq(0),
        center = $("div[id=center]").eq(0),
        bottom = $("div[id=bottom]").eq(0),
        left = $("div[id=left]").eq(0),
        right = $("div[id=right]").eq(0),
        center_headline = center.find("h2").eq(0),
        loading = $("div[id=loading]").eq(0),
        dynamicGrids = $(".dynamic"),
        initial = true,
        timeout = null,
        topIsHidden,
        bottomIsHidden,
        leftIsHidden,
        rightIsHidden,
        pageIsCenter;

    updateDynamicGrids = function () {
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

        if (initial = true) {
            initial = false;
            dynamicGrids.show();
            loading.hide();
        }
    }

    $(window).resize(function () {
        if (timeout != null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
            updateDynamicGrids();
        }, 50);
    });
    updateDynamicGrids();

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
        updateDynamicGrids();
    }

    // show/hide left sidebar
    toggleLeft = function () {
        if (left.length > 0) {
            left.toggleClass("hidden");
        } else {
            alert("Left doesn't exist");
        }
        updateDynamicGrids();
    }

    // show/hide right sidebar
    toggleRight = function () {
        if (right.length > 0) {
            right.toggleClass("hidden");
        } else {
            alert("Right doesn't exist");
        }
        updateDynamicGrids();
    }

    var theme = true;
    // switch between base themes
    toggleTheme = function () {
        if(theme) {
            $("#stylesheet-theme").attr("href", "css/theme/base-theme-github.css");
        } else {
            $("#stylesheet-theme").attr("href", "css/theme/base-theme.css");
        }
        theme = !theme;
        updateDynamicGrids();
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
        updateDynamicGrids();
    }
});