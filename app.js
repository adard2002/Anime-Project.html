'use strict';
console.log('This file is connected and ready to run.');

/** This is from Class 6 Start, wrap up of 101 js.
new is a keyword object that has properties, the date.
var today = new Date();
var is a keyword that makes the word today a variable.
allow to take the today variable and output to page. 
document.write(today);
*/



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}










