function copyToClipboard() {
  var copyText = "cpa.dev.contact@gmail.com";
  navigator.clipboard.writeText(copyText);
  
  var popup = document.getElementById("myPopup");
  
  popup.innerHTML = "Copied to clipboard"
}

function outFunc() {
  var popup = document.getElementById("myPopup");
  popup.innerHTML = "Copy to clipboard";
}

var mobileSlideContainer = document.getElementsByClassName("mobile")[0];

// print the element
// console.log(mobileSlideContainer);

// mobileSlideContainer.addEventListener("click", function (ev) {
//   print("clicked");
//   if (ev.composedPath()[0] === this) {
//       // your code here ...
//   }
// })

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides;

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    slides = document.getElementsByClassName("slideMobile");
  } else {
    slides = document.getElementsByClassName("slide");
  }
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
  slides[slideIndex-1].style.justifyContent = "center";
  slides[slideIndex-1].style.alignItems = "center";
}