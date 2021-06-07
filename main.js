canvas =document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

background_image="mars.jpg";
rover_image="rover.png";

rover_x=10;
rover_y=10;
nasamarsrover=["Mars 1.jpg","Mars 2.jpg","Mars 3.jpg"]
var randomnumber=Math.floor(Math.random()*3)
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src= nasamarsrover[randomnumber];


    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src= rover_image;
 

    
}
function uploadbackground(){
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x,rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
     if(keypress=='38')
     {
       up();
        console.log("up");
    }
    if(keypress=='40')
    {
       down();
        console.log("down");
    }
    if(keypress=='37')
    {
      left();
        console.log("left");
    }
    if(keypress=='39')
    {
        right();
        console.log("right");
    }

    
}
function up(){


if(rover_y>=0){

    rover_y =rover_y-10;
    console.log("when up arrow is pressed, x = "+ rover_x + ",y = "+rover_y)
    uploadbackground();
    uploadrover();

}
}


function down(){


    if(rover_y<=600){
    
        rover_y =rover_y+10;
        console.log("when up arrow is pressed, x = "+ rover_x + ",y = "+rover_y)
        uploadbackground();
        uploadrover();
    
    }
    }

    function left(){


        if(rover_x>=0){
        
            rover_x =rover_x-10;
            console.log("when up arrow is pressed, x = "+ rover_x + ",y = "+rover_y)
            uploadbackground();
            uploadrover();
        
        }
        }

        function right(){


            if(rover_x<=700){
            
                rover_x =rover_x+10;
                console.log("when up arrow is pressed, x = "+ rover_x + ",y = "+rover_y)
                uploadbackground();
                uploadrover();
            
            }
            }

