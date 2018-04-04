$(function(){
    $('.wrap').fullpage({
    	navigation:true,
    	afterLoad: function(anchorLink, index){
    		if(index == 1){
    			$('.circle-con').css({'opacity':1,'transform': 'scale(0.6)'},500);
    			
    			console.log('aa');
    		}
			if(index == 2){
				$('.circle-con').css({'opacity':1,'transform': 'scale(1)','transform':'rotate(-65deg)'},200);
				$('.section2').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 3){
				$('.section3').find('p').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 4){
				$('.section4').find('p').fadeIn(2000);
			}
		},
		onLeave: function(index, direction){
			if(index == '1'){
    			
    		}
			if(index == '2'){
				$('.section2').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '3'){
				$('.section3').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '4'){
				$('.section4').find('p').fadeOut(2000);
			}
		}
    });
});