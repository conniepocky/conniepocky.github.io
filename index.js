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

let slideIndex = 1;
if (document.getElementsByClassName("mobile").style.display === "none") {
  showSlides(slideIndex);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
  slides[slideIndex-1].style.justifyContent = "center";
  slides[slideIndex-1].style.alignItems = "center";
}

let mobileSlideIndex = 1;
if (document.getElementsByClassName("mobile").style.display === "flex") {
  showMobileSlides(mobileSlideIndex);
}

function plusMobileSlides(n) {
  if (document.getElementsByClassName("mobile").style.display === "flex") {
    showMobileSlides(mobileSlideIndex += n);
  }
}

function currentMobileSlide(n) {
  showMobileSlides(mobileSlideIndex = n);
}

function showMobileSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideMobile");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
  slides[slideIndex-1].style.justifyContent = "center";
  slides[slideIndex-1].style.alignItems = "center";
}