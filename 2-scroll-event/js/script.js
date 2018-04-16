var nav = document.querySelector('.stickybar');
var topOfNav = nav.offsetTop;

function fixNav() {
	if(window.scrollY >= topOfNav) {
		document.body.style.paddingTop = nav.offsetHeight + 'px';
		document.body.classList.add('fixed-nav');	
	} else {
		document.body.style.paddingTop = 0;
		document.body.classList.remove('fixed-nav');	
	}
}

window.addEventListener('scroll', fixNav);


/* function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }; */

    const sliderImages = document.querySelectorAll('.slide-in');
    /*
	function checkSlide() {
      sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      });
    }
    window.addEventListener('scroll', checkSlide);
	*/

	var image1 = document.querySelector("main img");

	var images = document.querySelectorAll("main img");
	console.log("alle images " + images);	

    window.addEventListener('scroll', function(){
		
		
		console.log("scroll: " + window.scrollY);
		console.log("image1 offsetTop: " + image1.offsetTop);
		//console.log("image heeft .active? " + image1.classList.contains('active'));
		
		if(window.scrollY+300 > image1.offsetTop){
			image1.classList.add('active');
		}
		
		for(i=0; i < images.length; i++){
			console.log(" IMAGE " + i + " - " + images[i]);
			if(window.scrollY+300 > images[i].offsetTop){
				images[i].classList.add('active');
			}
			
		};

		
	});

