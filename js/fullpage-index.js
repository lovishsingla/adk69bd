$(document).ready(function () {
    var appendVideo = $(".video-popup").html();

    $('.wrapper').addClass('wrapp-top')

    if (window.matchMedia("(min-width: 1025px)").matches){
        function setHeiHeight() {
            $('.section').css({
                height: $(window).height()
            });
        }
        setHeiHeight();
        $(window).resize(setHeiHeight);
    }

    $('#fullpage').fullpage({
        fitToSection: false,
        css3: true,
		//	autoScrolling: false,
        // anchors: ['11Page', '12Page', '13Page', '14Page', '1Page', '2Page', '3Page', '5Page', '16Page', '21Page', '4Page', '6Page', '7Page', '8page'],
        // anchors: ['11Page', '12Page', '13Page', '14Page', '1Page', '2Page', '3Page', '5Page', '16Page', '21Page', '4Page', '6Page', '7Page', '8page'],
        afterRender: function(){
            history.replaceState({}, document.title, "index.html");
        },
        onLeave: function (index, nextIndex, direction) {
			
			// var $isAnimatedSecond = $('.second .is-animated'),
			// $isAnimatedSecondSingle = $('.second .is-animated__single');
		 
			/* this code is part of the onLeave callback */   
			// if( index == 1 && nextIndex == 2 ) {
				// $isAnimatedSecond.addClass('animated fadeInUpBig'); 
				// $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
				// $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
				// $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
				// $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
			// }

            if (index == 1 && direction == 'down') {
                // $.fn.fullpage.setAutoScrolling(true);
				// alert('hi');
				
				$('.2nd-ani').addClass("fadeInUp");
				setTimeout(function(){
					$('.2nd-ani').removeClass('fadeInUp');
				}, 3000);
				// $isAnimatedSecond.addClass('animated fadeInUpBig'); 
				// $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
				
                $('.front').addClass('active-top');
                $('.bottom').addClass('active-bottom');
                $('.nav-bar').show();
                setTimeout(function () {
                    $('.share-icon').addClass('share-icon-visible');
                }, 600);
                setTimeout(function () {
                    $('.nav-bar-logo').addClass('logo-visible');
                }, 600);

                $(window).mousewheel(function () {
                    $('.wrapper').removeClass('wrapp-top')
                })
				$(".play-btn, .play-btn-2").on('click', function () {
					// alert('hi');
					$(this).parent().find('.description-video').addClass('is-bottomed');
					$(this).parent().find('.video-pop-up-wrapp').addClass('is-visible');
					$(".video-popup").find("iframe").attr("src", $(this).attr("video-id"));

				});
				$('.video-pop-up-wrapp').on('click', function () {
					$(this).parent().find('.description-video').removeClass('is-bottomed');
					$(this).removeClass('is-visible');
					$(".video-popup").empty();
					$(".video-popup").append(appendVideo)

				});
            } else if (index == 2 && direction == 'up') {
                // $.fn.fullpage.setAutoScrolling(false);
				
				// alert('hi');
				
				
				// $('.logo-block').removeClass("fadeInUp");
				// $('.logo-block').addClass("fadeInUp");
				
                $(window).mousewheel(function () {
                    $('.top-nav-bar').hide();
                    $('.wrapper').addClass('wrapp-top')
                })
                $('.top-nav-bar').removeClass('top-nav-bar-visible');
				$('.share-icon').removeClass('share-icon-visible');
				$('.nav-bar-logo').removeClass('logo-visible');
                $('.nav-bar').hide();
                $('.wrap').addClass('bottom-hidden');
                $('.wrap').removeClass('bottom-visible');
                $('.video-block-hidden').addClass('video-block-visible');
                $('.front').removeClass('active-top');
				// $('.description-video').addClass('animated');
                $('.bottom').removeClass('active-bottom')
            } else if (index == 1 && direction == 'up') {
                $(window).mousewheel(function () {
                    $('.nav-bar').hide();
                    // $('.description-video').addClass('animated');
                })
            }
            else if (index == 2 && direction == 'down') {
                $('.wrapper').removeClass('transform-wrap');
                $('.top-nav-bar').addClass('top-nav-bar-visible');
				// alert('hi');
				// $('.description-video').addClass('animated');
            }
            else if (index == 3 && direction == 'up') {
				
				$('.2nd-ani').addClass("fadeInUp");
				setTimeout(function(){
						$('.2nd-ani').removeClass('fadeInUp');
				}, 3000);
                $('.wrapper').addClass('transform-wrap');
                $('.wrapper').addClass('wrapp-top')
                $('.nav-bar-top').hide();

            }
            else if (index == 0 && direction == 'down') {
                $('.wrapper').removeClass('wrapp-top')
                $('.top-nav-bar').hide();

            }
            else if (index == 0 && direction == 'up') {
                $('.wrapper').removeClass('wrapp-top')
                $('.top-nav-bar').hide();

            }
            else if (index == 1 && direction == 'up') {
                $('.top-nav-bar').hide();
            }
			else if (index == 5 && direction == 'up') {
				$('.hb-img-line').removeClass('hb-line-height');
            }
			
			
			// Product Section
			
			else if (index == 4 && direction == 'down') {
                $('.ani-b').addClass('fadeInUp');
				
				setTimeout(function(){
						$('.hb-img-line').addClass('hb-line-height');
				}, 2300);
				setTimeout(function(){
						$('.ani-b').removeClass('fadeInUp');
				}, 2300);
            }
			else if (index == 6 && direction == 'up') {
                $('.ani-b').addClass('fadeInUp');
				$('.h-m-left-img-line').removeClass('h-m-line-height');
				
				setTimeout(function(){
						$('.ani-b').removeClass('fadeInUp');
				}, 2300);
				setTimeout(function(){
						$('.hb-img-line').addClass('hb-line-height');
				}, 2300);
            }
			// 5 = bullet section
			
			else if (index == 5 && direction == 'down') {
                $('.ani-m').addClass('fadeInUp');
				$('.hb-img-line').removeClass('hb-line-height');
				setTimeout(function(){
						$('.h-m-left-img-line').addClass('h-m-line-height');
				}, 1500);
				setTimeout(function(){
						$('.ani-m').removeClass('fadeInUp');
				}, 2300);
            }
			else if (index == 7 && direction == 'up') {
                $('.ani-m').addClass('fadeInUp');
				
				setTimeout(function(){
						$('.ani-m').removeClass('fadeInUp');
				}, 2300);
				setTimeout(function(){
						$('.h-m-left-img-line').addClass('h-m-line-height');
				}, 1500);
				
            }
            else if (index == 6 && direction == 'down') {
                $('.ani-k').addClass('fadeInUp');
                $('.h-m-left-img-line').removeClass('h-m-line-height');
                setTimeout(function(){
                        $('.ani-k').removeClass('fadeInUp');
                }, 2300);
            }
            else if (index == 8 && direction == 'up') {
                $('.ani-k').addClass('fadeInUp');
                $('.ht90-left-line').removeClass('ht90-left-line-height');
                $('.h-t90-pro-img').removeClass('h-t90-pro-img-ani');
                setTimeout(function(){
                        $('.ani-k').removeClass('fadeInUp');
                }, 2300);
            }
            else if (index == 7 && direction == 'down') {
                $('.ani-90').addClass('fadeInUp');
                $('.ht90-left-line').removeClass('ht90-left-line-height');
                $('.h-t90-pro-img').removeClass('h-t90-pro-img-ani')
                setTimeout(function(){
                        $('.ht90-left-line').addClass('ht90-left-line-height');
                }, 1500);
                setTimeout(function(){
                        $('.h-t90-pro-img').addClass('h-t90-pro-img-ani');
                }, 1000);
                setTimeout(function(){
                        $('.ani-90').removeClass('fadeInUp');
                }, 2300);
                
            }
            else if (index == 9 && direction == 'up') {
            	$('.ani-90').addClass('fadeInUp');
            	$('.ani-22').addClass('fadeInUp');
                $('.ani-22-down').addClass('fadeInDown');
                setTimeout(function(){
                        $('.ani-90').removeClass('fadeInUp');
                }, 2300);
                setTimeout(function(){
                        $('.ht90-left-line').addClass('ht90-left-line-height');
                }, 1500);
                setTimeout(function(){
                        $('.h-t90-pro-img').addClass('h-t90-pro-img-ani');
                }, 1000);
                
            }
            else if (index == 8 && direction == 'down') {
                $('.ani-22').addClass('fadeInUp');
                $('.ani-22-down').addClass('fadeInDown');
                $('.h-t22-left-img-line').removeClass('h-t22-left-img-height');

                setTimeout(function(){
                        $('.h-t22-left-img-line').addClass('h-t22-left-img-height');
                }, 1500);
                setTimeout(function(){
                        $('.ani-22').removeClass('fadeInUp');
                }, 2300);
                setTimeout(function(){
                        $('.ani-22-down').removeClass('fadeInDown');
                }, 3000);
            }
            else if (index == 10 && direction == 'up') {
                $('.ani-22').addClass('fadeInUp');
                $('.ani-22-down').addClass('fadeInDown');
                setTimeout(function(){
                        $('.ani-22-down').removeClass('fadeInDown');
                }, 2300);
                setTimeout(function(){
                        $('ani-22').removeClass('fadeInUp');
                }, 1500);
                setTimeout(function(){
                        $('.h-t22-left-img-line').addClass('h-t22-left-img-height');
                }, 1000);
                
                $('.h-bz-sec1-blitz-text').removeClass('fadeInLeft');
                $('.h-bz-sec1-goldstrip').removeClass('fadeInUp');
                $('.h-bz-sec1-6img').removeClass('fadeInUp');
                $('.h-bz-sec1-p').removeClass('h-bz-sec1-p-ani');
            }
			/*
			else if (index == 6 && direction == 'down') {
                $('.ani-k').addClass('fadeInUp');
				$('.h-m-left-img-line').removeClass('h-m-line-height');
				setTimeout(function(){
						$('.ani-k').removeClass('fadeInUp');
				}, 2300);
            }
			else if (index == 8 && direction == 'up') {
                $('.ani-k').addClass('fadeInUp');
				$('.h-t22-left-img-line').removeClass('h-t22-left-img-height');
				setTimeout(function(){
						$('.ani-k').removeClass('fadeInUp');
				}, 2300);
            }
			else if (index == 7 && direction == 'down') {
                $('.ani-22').addClass('fadeInUp');
                $('.ani-22-down').addClass('fadeInDown');
				
				setTimeout(function(){
						$('.h-t22-left-img-line').addClass('h-t22-left-img-height');
				}, 1500);
				setTimeout(function(){
						$('.ani-22').removeClass('fadeInUp');
				}, 2300);
				setTimeout(function(){
						$('.ani-22-down').removeClass('fadeInDown');
				}, 3000);
            }
			else if (index == 9 && direction == 'up') {
                $('.ani-22').addClass('fadeInUp');
				$('.ani-22-down').addClass('fadeInDown');
				$('.ht90-left-line').removeClass('ht90-left-line-height');
				$('.h-t90-pro-img').removeClass('h-t90-pro-img-ani');
				
				setTimeout(function(){
						$('.h-t22-left-img-line').addClass('h-t22-left-img-height');
				}, 1500);
				setTimeout(function(){
						$('.ani-22').removeClass('fadeInUp');
				}, 2300);
				setTimeout(function(){
						$('.ani-22-down').removeClass('fadeInDown');
				}, 3000);
            }
			else if (index == 8 && direction == 'down') {
                $('.ani-90').addClass('fadeInUp');
				$('.h-t22-left-img-line').removeClass('h-t22-left-img-height');
				setTimeout(function(){
						$('.ani-90').removeClass('fadeInUp');
				}, 2300);
				setTimeout(function(){
						$('.ht90-left-line').addClass('ht90-left-line-height');
				}, 1500);
				setTimeout(function(){
						$('.h-t90-pro-img').addClass('h-t90-pro-img-ani');
				}, 1000);
            }
			else if (index == 10 && direction == 'up') {
                $('.ani-90').addClass('fadeInUp');
				setTimeout(function(){
						$('.ani-90').removeClass('fadeInUp');
				}, 2300);
				setTimeout(function(){
						$('.ht90-left-line').addClass('ht90-left-line-height');
				}, 1500);
				setTimeout(function(){
						$('.h-t90-pro-img').addClass('h-t90-pro-img-ani');
				}, 1000);
				
				$('.h-bz-sec1-blitz-text').removeClass('fadeInLeft');
				$('.h-bz-sec1-goldstrip').removeClass('fadeInUp');
				$('.h-bz-sec1-6img').removeClass('fadeInUp');
				$('.h-bz-sec1-p').removeClass('h-bz-sec1-p-ani');
            }
			*/
			//////
			else if (index == 9 && direction == 'down') {
                $('.ht90-left-line').removeClass('ht90-left-line-height');
                $('.h-t90-pro-img').removeClass('h-t90-pro-img-ani');
                $('.h-bz-sec1-6img').removeClass('fadeInUp');
				
				$('.h-bz-sec1-blitz-text').addClass('fadeInLeft');
				$('.h-bz-sec1-goldstrip').addClass('fadeInUp');
				$('.h-bz-sec1-6img').addClass('fadeInUp');
				setTimeout(function(){
					$('.h-bz-sec1-p').addClass('h-bz-sec1-p-ani');
				}, 1000);
				
            }
			else if (index == 11 && direction == 'up') {
				$('.h-bz-sec1-blitz-text').addClass('fadeInLeft');
				$('.h-bz-sec1-goldstrip').addClass('fadeInUp');
				$('.h-bz-sec1-6img').removeClass('fadeInUp');
				$('.h-bz-sec1-6img').addClass('fadeInUp');
				setTimeout(function(){
					$('.h-bz-sec1-p').addClass('h-bz-sec1-p-ani');	
				}, 1000);
				
				$('.h-sht-img-h-360').removeClass('fadeInUp');
				$('.shot-center').removeClass('fadeInUp');
				$('.h-sht-img-h-320 ').removeClass('fadeInUp');
				$('.h-sht-img-h-320').removeClass('h-sht-img-h-320-ani');
            }
			
			////////
			else if (index == 10 && direction == 'down') {
				// alert('hi');
				$('.h-bz-sec1-blitz-text').removeClass('fadeInLeft');
				$('.h-bz-sec1-goldstrip').removeClass('fadeInUp');
				$('.h-bz-sec1-6img').removeClass('fadeInUp');
				$('.h-bz-sec1-p').removeClass('h-bz-sec1-p-ani');
				
				$('.h-sht-img-h-360').addClass('fadeInUp');
				$('.shot-center').addClass('fadeInUp');
				$('.h-sht-img-h-320').addClass('fadeInUp');
				
				setTimeout(function(){
						$('.h-sht-img-h-320').addClass('h-sht-img-h-320-ani');
				}, 1000);
				
            }
			else if (index == 12 && direction == 'up') {
				$('.h-sht-img-h-360').addClass('fadeInUp');
				$('.shot-center').addClass('fadeInUp');
				$('.h-sht-img-h-320 ').addClass('fadeInUp');
				setTimeout(function(){
						$('.h-sht-img-h-320').addClass('h-sht-img-h-320-ani');
				}, 1000);
            }
			
			/////////
			
			else if (index == 11 && direction == 'down') {
				$('.h-sht-img-h-360').removeClass('fadeInUp');
				$('.shot-center').removeClass('fadeInUp');
				$('.h-sht-img-h-320').removeClass('fadeInUp');
				$('.h-sht-img-h-320').removeClass('h-sht-img-h-320-ani');
            }
			else if (index == 13 && direction == 'up') {
				$('.qua-img').removeClass('qua-img-ani');
				$('.qua-sta-bor').removeClass('qua-sta-bor-ani');
            }
			
			//Jar Section 13
			else if (index == 12 && direction == 'down') {
				//alert('sdfsd');
				setTimeout(function(){
						$('.qua-img').addClass('qua-img-ani');
				}, 400);
				setTimeout(function(){
						$('.qua-sta-bor').addClass('qua-sta-bor-ani');
				}, 400);
            }
			else if (index == 14 && direction == 'up') {
				//alert('sdfsd');
				setTimeout(function(){
						$('.qua-img').addClass('qua-img-ani');
				}, 400);
				setTimeout(function(){
						$('.qua-sta-bor').addClass('qua-sta-bor-ani');
				}, 400);
            }
			
			//Gossip 14
			else if (index == 13 && direction == 'down') {
				$('.qua-img').removeClass('qua-img-ani');
				$('.qua-sta-bor').removeClass('qua-sta-bor-ani');
				//alert('sdfsd');
            }
			else if (index == 15 && direction == 'up') {
				//alert('sdfsd');
            }
			
			//Authentication 15
			else if (index == 14 && direction == 'down') {
				//alert('sdfsd');
            }
			else if (index == 16 && direction == 'up') {
				//alert('sdfsd');
            }
			
			//Retail 16
			else if (index == 14 && direction == 'down') {
				//alert('sdfsd');
            }
			else if (index == 16 && direction == 'up') {
				//alert('sdfsd');
            }
			
			//Contact 17
			else if (index == 15 && direction == 'down') {
				//alert('sdfsd');
            }
			else if (index == 17 && direction == 'up') {
				//alert('sdfsd');
            }
			
			//Footer 18
			else if (index == 16 && direction == 'down') {
				// alert('sdfsd');
				// afterLoad: function(anchor, index){
				  // actualIndexSlide = index;
				  // console.log("after load | anchor:"+anchor+" | index: "+index);
				  // if(actualIndexSlide == totalSlides) {
					// $.fn.fullpage.scrollOverflow(false);
					// $.fn.fullpage.setAutoScrolling(true);
				  // }
				//},
            }
			else if (index == 18 && direction == 'up') {
				// alert('sdfsd');
            }
        }
    });
    function winWindth() {
        if ($(window).width() < 1100) {
            $.fn.fullpage.setAutoScrolling(false);
        }
    }

    // $(window).resize(function () {
    //     winWindth()
    // });
    $(window).load(function () {
        winWindth()
    });
    $(".play-btn, .play-btn-2").on('click', function () {
		alert('hi');
        $(this).parent().find('.description-video').addClass('is-bottomed');
        $(this).parent().find('.video-pop-up-wrapp').addClass('is-visible');
        $(".video-popup").find("iframe").attr("src", $(this).attr("video-id"));

    });
    $('.video-pop-up-wrapp').on('click', function () {
        $(this).parent().find('.description-video').removeClass('is-bottomed');
        $(this).removeClass('is-visible');
        $(".video-popup").empty();
        $(".video-popup").append(appendVideo)

    });
    $('.video-popup').on('click', function (e) {
        e.stopPropagation();
    })

});
