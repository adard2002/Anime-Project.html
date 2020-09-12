'use strict';
console.log('This file is connected and ready to run.');

//The alert box that asks for your first name and the time (military time)
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

document.write('<h2 style="color:#b5bcff">' + greeting + '</h2>');

    var header = document.getElementById('removeThis');


//* some reason when I reload the page the slideshow doesn't show up so you have click on either one of the arrows or one of the dots.
//* I also wasnt able to do the same thing as Craig did in the video; having a little alert or popup box that asked you for your name and the time. 








