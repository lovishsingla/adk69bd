$(document).ready(function () {
    var scrollPane = $(".scroll-pane"),
        scrollContent = $(".scroll-content");
    //build slider
    var scrollbar = $(".scroll-bar").slider({
        range: "min",
        value: 0,
        min: 0,
        max: 100,
        step: 1,
        slide: function (event, ui) {
            if (scrollContent.width() > scrollPane.width()) {
                scrollContent.css("margin-left", Math.round(
                        ui.value / 100 * ( scrollPane.width() - scrollContent.width() )
                    ) + "px");
            } else {
                scrollContent.css("margin-left", 0);

            }
        },
        change: function (event, ui) {
            if (scrollContent.width() > scrollPane.width()) {
                scrollContent.css("margin-left", Math.round(
                        ui.value / 100 * ( scrollPane.width() - scrollContent.width() )
                    ) + "px");
            } else {
                scrollContent.css("margin-left", 0);
            }
        }
    });
    //append icon to handle
    var handleHelper = scrollbar.find(".ui-slider-handle")
        .mousedown(function () {
            scrollbar.width(handleHelper.width());
        })
        .mouseup(function () {
            scrollbar.width("100%");
        })
        .append("<span class='ui-icon ui-icon-grip-dotted-vertical'></span>")
        .wrap("<div class='ui-handle-helper-parent'></div>").parent();


    //change overflow to hidden now that slider handles the scrolling
    scrollPane.css("overflow", "hidden");
    //size scrollbar and handle proportionally to scroll distance
    function sizeScrollbar() {
        var remainder = scrollContent.width() - scrollPane.width();
        var proportion = remainder / scrollContent.width();
        var handleSize = scrollPane.width() - ( proportion * scrollPane.width() );
        scrollbar.find(".ui-slider-handle").css({
            width: handleSize,
            "margin-left": -handleSize / 2
        });
        handleHelper.width("").width(scrollbar.width() - handleSize);
    }
    //reset slider value based on scroll content position

    function resetValue() {
        var remainder = scrollPane.width() - scrollContent.width();
        var leftVal = scrollContent.css("margin-left") === "auto" ? 0 :
            parseInt(scrollContent.css("margin-left"));
        var percentage = Math.round(leftVal / remainder * 100);
        scrollbar.slider("value", percentage);
    }


    //if the slider is 100% and window gets larger, reveal content

    function reflowContent() {
        var showing = scrollContent.width() + parseInt(scrollContent.css("margin-left"), 10);
        var gap = scrollPane.width() - showing;
        if (gap > 0) {
            scrollContent.css("margin-left", parseInt(scrollContent.css("margin-left"), 10) + gap);

        }
    }

    //change handle position on window resize

    //init scrollbar size
    $('.scroll-pane').mousewheel(function (event) {
        // console.log(event.deltaX, event.deltaY, event.deltaFactor);
    });
    setTimeout(sizeScrollbar, 10);//safari wants a timeout



    // if(  == 0 ){
    //
    // }

    $(".scroll-pane").mousewheel(function (event) {
        var value = scrollbar.slider("option", "value");
            value -= event.deltaY;
            value > 100 && (value = 100);
            value < 0 && (value = 0);
            scrollbar.slider("option", "value", value);

        if($('.slider-section-ui').hasClass('active')){
            $.fn.fullpage.setAllowScrolling(false);
            // $('.small-bottom-bank').toggleClass('bank-move');
            // $('.small-right-bank').toggleClass('small-right-bank-move');
            // $('.small-left-bank').toggleClass('small-left-bank-move');
            // $('.small-right-cup').toggleClass('small-right-cup-move');
            // $('.small-left-cup').toggleClass('small-left-cup-move');
            // event.preventDefault();
        }if( value === 100){
            $.fn.fullpage.setAllowScrolling(true);
        }else if ($('.slider-section-ui').hasClass('active') && value === 0 ){
            $.fn.fullpage.setAllowScrolling(true);

        }
        if(value){
            $('.small-bottom-bank').css({'right': value * 15 + 'px'});
            $('.slide-2 .left-side .big-bank').css({'bottom': -value * 1.8 + 'px'});
            $('.small-right-bank').css({'top': value * 1.3 + 'px'});
            $('.small-right-bank').css({'right': -value * 2.3 + 'px'});
            $('.small-left-bank').css({'left': value * 1.3 + 'px'});
            $('.slide-2 .right-side .big-bank').css({'top': value * 1.1 + 'px'});
            $('.small-right-cup').css({'right': value * 1.3 + 'px'});
            $('.small-left-cup').css({'left': value * 1.2 + 'px'});
            $('.small-bank-orange').css({'height': value * 0.33 + 'px'});
        }
        console.log(value)
    });

    $('#scroll-id').click(function () {
        $.fn.fullpage.setAllowScrolling(true);
    });

    function sizeItem() {
        $('.scroll-content-item').css({
            width: $(window).width()
        });
    };
    sizeItem();


    //change handle position on window resize
    $(window).resize(function () {
        resetValue();
        sizeScrollbar();
        reflowContent();
        sizeItem();
        sizeContent();
        // sizeContent();
    });
    function sizeContent(){
        var blc = $('.scroll-content-item').width(),
            blcLen = $('.scroll-content-item').length;

        $('.scroll-content').css({
            width: (blc * blcLen)
        });
    }
    sizeContent();
    //init scrollbar size

    $('.bul-hov').mouseover(function(){
        $('.bullet-hov').show()
        $('.metter-hov').hide()
    });
    $('.bul-hov').mouseleave(function(){
        $('.metter-hov').show()
        $('.bullet-hov').hide()
    });
    $('.kas-hov').mouseover(function(){
        $('.kasuta-hov').show()
        $('.metter-hov').hide()
    });
    $('.kas-hov').mouseleave(function(){
        $('.metter-hov').show()
        $('.kasuta-hov').hide()
    });
});