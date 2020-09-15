

var images = ['merchimages/DemonSlayerPoster.jpg', 'merchimages/AkameGaKillPoster.jpg', 'merchimages/DarlingintheFranxxPoster.jpg', 'merchimages/AngelsofDeathPoster.jpg', 'merchimages/ServampPoster.jpg', 'merchimages/OwarinoseraphPoster.jpg']; // array of pictures
var stop = '0';


    while(true){

        var imput = prompt('Give a number 1 through 6. Type 0 to exit.');
    
        if(input === stop){
            break;
        }
        else{
         
           if (!IsNaN(input) && images.length >= input)
              showImage(<img src="merchimages/DemonSlayerPoster.jpg"></img>, [input - 1]); 
              showImage(<img src="merchimages/AkameGaKillPoster.jpg"></img>, [input - 2]);
              showImage(<img src="merchimages/DarlingintheFraxxPoster.jpg"></img>, [input - 3]);      
              showImage(<img src="merchimages/AngelsofDeathPoster.jpg"></img>, [input - 4]);
              showImage(<img src="merchimages/ServampPoster.jpg"></img>, [input - 5]);
              showImage(<img src="merchimages/OwarinoseraphPoster.jpg"></img>, [input - 6]); 
        }
    } 




