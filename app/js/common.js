$(function(){$(".preloader").fadeOut();var $svg=$('svg').drawsvg({duration:10000,easing:'linear'});$svg.drawsvg('animate');$(".icon").click(function(){$(".menu").toggleClass("slide");$(".toggle-mnu").toggleClass("on");});var owl=$('.owl-carousel');owl.owlCarousel({loop:true,responsive:{0:{items:1},700:{items:2},1000:{items:3},1400:{items:5}}});$('.customNextBtn').click(function(){owl.trigger('next.owl.carousel');})
$('.customPrevBtn').click(function(){owl.trigger('prev.owl.carousel',[300]);})
$("#lightgallery").lightGallery({selector:'.light',mode:'lg-fade',cssEasing:'cubic-bezier(0.25, 0, 0.25, 1)'});var autoSwap=setInterval(swap,3500);$('ul, span').hover(function(){clearInterval(autoSwap);},function(){autoSwap=setInterval(swap,3500);});var items=[];var startItem=1;var position=0;var itemCount=$('.carousel li.items').length;var leftpos=itemCount;var resetCount=itemCount;$('li.items').each(function(index){items[index]=$(this).text();});function swap(action){var direction=action;if(direction=='counter-clockwise'){var leftitem=$('.left-pos').attr('id')-1;if(leftitem==0){leftitem=itemCount;}$('.right-pos').removeClass('right-pos').addClass('back-pos');$('.main-pos').removeClass('main-pos').addClass('right-pos');$('.left-pos').removeClass('left-pos').addClass('main-pos');$('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');startItem--;if(startItem<1){startItem=itemCount;}}if(direction=='clockwise'||direction==''||direction==null){function pos(positionvalue){if(positionvalue!='leftposition'){position++;if((startItem+position)>resetCount){position=1-startItem;}}if(positionvalue=='leftposition'){position=startItem-1;if(position<1){position=itemCount;}}return position;}$('#'+startItem+'').removeClass('main-pos').addClass('left-pos');$('#'+(startItem+pos())+'').removeClass('right-pos').addClass('main-pos');$('#'+(startItem+pos())+'').removeClass('back-pos').addClass('right-pos');$('#'+pos('leftposition')+'').removeClass('left-pos').addClass('back-pos');startItem++;position=0;if(startItem>itemCount){startItem=1;}}}$('#next').click(function(){swap('clockwise');});$('#prev').click(function(){swap('counter-clockwise');});$('li').click(function(){if($(this).attr('class')=='items left-pos'){swap('counter-clockwise');}else{swap('clockwise');}});var jssor_1_SlideshowTransitions=[{$Duration:1200,x:0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,x:-0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,y:0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,y:-0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,y:-0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,y:0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,x:0.3,$Cols:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,x:0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,y:0.3,$Rows:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,y:0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,y:-0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,x:0.3,$Rows:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,x:-0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,$Delay:20,$Clip:3,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,$Delay:20,$Clip:12,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,$Delay:20,$Clip:12,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}];var jssor_1_options={$AutoPlay:true,$SlideshowOptions:{$Class:$JssorSlideshowRunner$,$Transitions:jssor_1_SlideshowTransitions,$TransitionsOrder:1},$ArrowNavigatorOptions:{$Class:$JssorArrowNavigator$},$ThumbnailNavigatorOptions:{$Class:$JssorThumbnailNavigator$,$Cols:10,$SpacingX:8,$SpacingY:8,$Align:360}};var jssor_1_slider=new $JssorSlider$("jssor_1",jssor_1_options);function ScaleSlider(){var refSize=jssor_1_slider.$Elmt.parentNode.clientWidth;if(refSize){refSize=Math.min(refSize,1140);jssor_1_slider.$ScaleWidth(refSize);}else{window.setTimeout(ScaleSlider,30);}}ScaleSlider();$(window).bind("load",ScaleSlider);$(window).bind("resize",ScaleSlider);$(window).bind("orientationchange",ScaleSlider);});