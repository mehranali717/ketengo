window.addEventListener("scroll", function () {
  var header = document.querySelector(".content-inner");
  var scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    header.style.backgroundColor = "#5b334180";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
