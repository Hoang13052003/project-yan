//js phần croll chuột lên xuống ẩn hiện thanh header
var navbar = document.querySelector('.myheader');
var prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset;
    var scrollPosition = window.scrollY;
    
    if(scrollPosition > 100){
        if (prevScrollPos < currentScrollPos) {
            setTimeout(function(){
                navbar.classList.remove('position-sticky');
            }, 300);
        } else {
            setTimeout(function(){
                navbar.classList.add('position-sticky');
            }, 300);
        }
        // slide.classList.remove('myslide-update-croll');
        // if (prevScrollPos > currentScrollPos) {
        //     setTimeout(function(){
        //         navbar.classList.remove('hidden-nav');
        //     }, 200);
        // } else {
        //     navbar.classList.add('hidden-nav');
        // }
    }
    else{
        navbar.classList.remove('position-sticky');
        // slide.classList.add('myslide-update-croll');
    }
  prevScrollPos = currentScrollPos;
});