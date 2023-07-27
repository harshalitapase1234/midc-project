// This is Javascript File.

//navbar
var btn = document.querySelector('.toggle');
var btnst = true;
btn.onclick = function() {
  if(btnst == true) {
    document.querySelector('.toggle span').classList.add('toggle');
    document.getElementById('sidebar').classList.add('sidebarshow');
    btnst = false;
  }else if(btnst == false) {
    document.querySelector('.toggle span').classList.remove('toggle');
    document.getElementById('sidebar').classList.remove('sidebarshow');
    btnst = true;
  }
}





// success stories
// const sliderImages = document.querySelector(".grid-area");
// const prevBtn = document.querySelector(".slider-prev");
// const nextBtn = document.querySelector(".slider-next");

// let counter = 0;
// const size = sliderImages.children[0].clientWidth;

// nextBtn.addEventListener("click", () => {
//   if (counter >= sliderImages.children.length - 1) return;
//   counter++;
//   sliderImages.style.transform = `translateX(-${size * counter}px)`;
// });

// prevBtn.addEventListener("click", () => {
//   if (counter <= 0) return;
//   counter--;
//   sliderImages.style.transform = `translateX(-${size * counter}px)`;
// });




// $(document).ready(function() {
//   $('.popup-youtube').magnificPopup({
//     disableOn: 320,
//     type: 'iframe',
//     mainClass: 'mfp-fade',
//     removalDelay: 160,
//     preloader: false,
//     fixedContentPos: true
//   });
// });
// $('.item').magnificPopup({
//   delegate: 'a',
// });