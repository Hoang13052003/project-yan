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