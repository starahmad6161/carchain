
    /*toggle menu*/
    function openNav() {
        document.getElementById("mySidepanel").style.width = "250px";
    }
    
    function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
    }
    /*toggle menu end*/

$(function() {
    'use strict';
    $('.recommended-box-slider').owlCarousel({
	    //loop:true,
	    margin:25,
	    dots: true,
	    nav:false,
	    dotsEach:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
    });
    
    $('.recommended-box-slider .inner-img-slider').owlCarousel({
	    //loop:true,
	    margin:17,
	    dots: true,
	    nav:false,
	    dotsEach:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
    });
    
    $('.discover-img-slider').owlCarousel({
	    //loop:true,
	    margin:20,
	    dots: true,
	    nav:false,
	    dotsEach:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:5
	        }
	    }
    })

    
});