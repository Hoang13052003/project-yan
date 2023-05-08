//js phần croll chuột lên xuống ẩn hiện thanh header
var navbar = document.querySelector('.myheader');
var slide = document.querySelector('.myslide');
var prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset;
    var scrollPosition = window.scrollY;
    
    if(scrollPosition > 130){
        navbar.classList.remove('none-position-fixed');
        slide.classList.remove('myslide-update-croll');
        if (prevScrollPos > currentScrollPos) {
            setTimeout(function(){
                navbar.classList.remove('hidden-nav');
            }, 200);
        } else {
            navbar.classList.add('hidden-nav');
        }
    }
    else{
        navbar.classList.add('none-position-fixed');
        slide.classList.add('myslide-update-croll');
    }
  prevScrollPos = currentScrollPos;
});