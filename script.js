var elHeaderBox = document.querySelector(".header-box")
var elCloseBtn  =  document.querySelector(".close-button")
var elBurgerMenu = document.querySelector(".burger-menu")

elBurgerMenu.addEventListener("click",  function() {elHeaderBox.classList.add("header-show")})

elCloseBtn.addEventListener("click", function() {elHeaderBox.classList.remove("header-show")});