//script mở thêm item cho danh sách bài mới nhất và danh sách cộng đồng
        // new
function ShowAllNew(className) {
    var cardItems = document.getElementsByClassName(className);
    for (var i = 0; i < cardItems.length; i++) {
        cardItems[i].style.display = "flex";
    }
    var button = document.getElementById("button-new");
    button.style.display = "none";
}

var button = document.getElementById("button-new");
button.onclick = function() {
    ShowAllNew("active-new");
};
// cộng đồng
function ShowAllCD(className) {
    var cardItems = document.getElementsByClassName(className);
    for (var i = 0; i < cardItems.length; i++) {
        cardItems[i].style.display = "flex";
    }
    var buttoncd = document.getElementById("button-cong-dong");
    buttoncd.style.display = "none";
}

var buttoncd = document.getElementById("button-cong-dong");
buttoncd.onclick = function() {
    ShowAllCD("active-cong-dong");
};


///scroll chuột tới vị trí nhất định thì fixed bạn thân phái đẹp
// var fixedElement = document.querySelector('.list-fair');

// // Lấy vị trí ban đầu của phần tử
// var initialOffset = fixedElement.offsetTop;

// // Đăng ký sự kiện cuộn trang
// window.addEventListener("scroll", function() {
//   // Lấy vị trí cuộn chuột
//   var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

//   // Kiểm tra vị trí cuộn chuột
//   if (scrollPosition >= initialOffset + 2500) {
//     // Khi cuộn chuột đến khoảng cách nhất định, cố định phần tử
//     fixedElement.classList.add('fixed-fair');
//   } else {
//     // Khi vị trí cuộn chuột nhỏ hơn khoảng cách nhất định, phần tử không còn cố định
//     fixedElement.classList.remove('fixed-fair');
//   }
// });
