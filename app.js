'use strict';
console.log('This file is connected and ready to run.');

/** This is from Class 6 Start, wrap up of 101 js.
new is a keyword object that has properties, the date.
var today = new Date();
var is a keyword that makes the word today a variable.
allow to take the today variable and output to page. 
document.write(today);
*/

// slideshow js

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//automatic?

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
  setTimeout(showSlides, 4000); 
}
//end of slideshow js

var userName = prompt('Please enter your first name.');
alert('Hello, ' + userName + ' click OK to proceed.');

var hourNow = prompt('What time is it, friend? Use Military time.');

var greeting;

if(hourNow >= 0 &&hourNow < 7){
    greeting = 'Good Morning, ' + userName;
} else if (hourNow >= 7 && hourNow <= 12){
    greeting = 'Good mid day. ' + userName;
} else if (hourNow > 12 && hourNow < 18){
    greeting = 'Good afternoon ' + userName;
} else if (hourNow >= 18 && hourNow <= 24){
    greeting = 'Good Evening ' + userName;
} else {
    'Something went wrong!';
}

document.write('h1 style="color:yellow">' + greeting + '</h1>');

var header = document.getElementById('removeThis');
header.remove();






