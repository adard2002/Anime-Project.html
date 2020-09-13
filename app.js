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

//function myFunction() {
  //  greeting = setTimeout(function(){ alert('Hello, ' + userName + ' click OK to proceed.') }, 1.8e+7);
//}

//function myStopFunction() {
    //clearTimeout(greeting);
//}

document.write('<h2 style="color:#b5bcff">' + greeting + '</h2>');

    var header = document.getElementById('removeThis');


//* I was trying to get it so the popup prompt and alerts wouldn't pop up every time you refresh the page and instead only show it every 5 hours.
//* I also wanted a particle effect to be the cursor trail and have the particles fall. 







