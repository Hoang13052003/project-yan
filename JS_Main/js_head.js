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
            }, 200);
        } else {
            setTimeout(function(){
                navbar.classList.add('position-sticky');
            }, 200);
        }
    }
    else{
        if(scrollPosition < 5){
            navbar.classList.remove('position-sticky');
        }
    }
  prevScrollPos = currentScrollPos;
});

function goToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // để có hiệu ứng cuộn mượt
    });
}