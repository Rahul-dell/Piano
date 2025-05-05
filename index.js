//for presses
for(var i = 0;i<document.querySelectorAll(".key").length;i++){
document.querySelectorAll(".key")[i].addEventListener("click", play);}
//for keyboard press
document.addEventListener("keydown", function(event){
      switch(event.key){
        case'c':var audio=new Audio("./assets/c.mp3");
        audio.play();
        break;
        case'd':var audio=new Audio("./assets/d.mp3");
        audio.play();
        break;
        case'e':var audio=new Audio("./assets/e.mp3");
        audio.play();
        break;
        case'f':var audio=new Audio("./assets/f.mp3");
        audio.play();
        break;
        case'g':var audio=new Audio("./assets/g.mp3");
        audio.play();
        break;
        case'a':var audio=new Audio("./assets/a.mp3");
        audio.play();
        break;
        case'b':var audio=new Audio("./assets/b.mp3");
        audio.play();
        break;
        default:console.log(event.key);
      }    
    document.querySelector("."+event.key).classList.toggle("pressed");
    setTimeout(function(){document.querySelector("."+event.key).classList.toggle("pressed");}, 150);
    });
function play ()

{     switch(this.textContent){
    case'c':var audio=new Audio("./assets/c.mp3");
    audio.play();
    break;
    case'd':var audio=new Audio("./assets/d.mp3");
    audio.play();
    break;
    case'e':var audio=new Audio("./assets/e.mp3");
    audio.play();
    break;
    case'f':var audio=new Audio("./assets/f.mp3");
    audio.play();
    break;
    case'g':var audio=new Audio("./assets/g.mp3");
    audio.play();
    break;
    case'a':var audio=new Audio("./assets/a.mp3");
    audio.play();
    break;
    case'b':var audio=new Audio("./assets/b.mp3");
    audio.play();
    break;
    default:console.log(this.textContent);
} 
    
    var note = this.classList[0];

    // console.log("."+note);//Inner HTML and text content was not giving exactly the way i want to make class
    document.querySelector("."+note).classList.toggle("pressed");
    setTimeout(function(){document.querySelector("."+note).classList.toggle("pressed");}, 150);
    
    
    }





// JUST SEE WHAT WAS THE PROBLEM BECAUSE OF WHICH I HAVE TO USE INNERHTML AND FOR THAT TOO I NEED TO REMOVE P TAG INSIDE KEY CLASS DIVS
// ############# AND AND AND THEN ALSO IT DID NOT WORKED

//     for(var i = 0;i<document.querySelectorAll(".key").length;i++){
//         document.querySelectorAll(".key")[i].addEventListener("click",
//         function ()
        
//         {
//             var note="."+this.textContent;
//             console.log(note);
//              console.log(document.querySelector(".c").classList.toggle("pressed"));
              
            
            
//             });}