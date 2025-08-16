window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 82 || document.documentElement.scrollTop > 82) {
    document.getElementById("nav-div-sub-scroll").style.top = "0";
  } else {
    document.getElementById("nav-div-sub-scroll").style.top = "-70px";
  }
}