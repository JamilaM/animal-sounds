var animalDivs = document.querySelectorAll(".animal");



function play(sound){
     var audio = document.getElementById(sound);
     audio.play();
    //play sound on click
 }


animalDivs.forEach(animaldiv => {
    animaldiv.addEventListener("click", () => {
        animaldiv.classList.add("style");
    }); //apply style on click
});



window.addEventListener("keydown", e => {
var sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
var animal = document.querySelector(`.animal[data-key="${e.keyCode}"]`);  
    
if(!sound) return; // quit if there is no sound attached to key
sound.currentTime = 0; //returns sound to beginning before every click
sound.play();
    
animal.classList.add("style");
    
});


 animalDivs.forEach(animalDiv => {
     animalDiv.addEventListener("transitionend", e =>{
         if(e.propertyName !== "transform") return; //skip if transition is not transform because there are many transitions attached to this event
         animalDiv.classList.remove("style"); //remove style when transition ends
         
     });
 });
