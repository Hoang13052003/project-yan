const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme);


// thay đổi ảnh moon and sun
function changeImage() {
    var image = document.getElementById("img-themes");
    var moon = document.querySelector('.moon');
    if (image.src.match("img/moon-reading.svg")) {
        image.src = "img/sun-reading.svg";
        moon.classList.remove('note-moon');
    } else {
        moon.classList.add('note-moon');
        image.src = "img/moon-reading.svg";
    }
  }

