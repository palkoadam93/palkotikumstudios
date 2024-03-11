// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
      
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("tplogo").style.height = "2rem";
    document.getElementById("tplogo").style.paddingRight = "10px";
  } else {
    document.getElementById("tplogo").style.height = "8rem";
    document.getElementById("tplogo").style.paddingRight = "2rem";
  }
}