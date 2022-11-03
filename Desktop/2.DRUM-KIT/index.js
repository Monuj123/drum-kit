
var Buttons=document.querySelectorAll(".drum").length;

for(var i=0;i<Buttons;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
  var butt=this.innerHTML;
  makeSound(butt);

});
}
document.addEventListener("keypress",function(event){
  makeSound(event.key);
});

function makeSound(butt){
  if(butt==="w"){
    var tom1=new Audio('sounds/tom-1.mp3');
    tom1.play();
  }
  if(butt==="a"){
    var tom2=new Audio('sounds/tom-2.mp3');
    tom2.play();
  }
  if(butt==="s"){
    var tom3=new Audio('sounds/tom-3.mp3');
    tom3.play();
  }
  if(butt==="d"){
    var tom4=new Audio('sounds/tom-4.mp3');
    tom4.play();
  }
  if(butt==="k"){
    var crash=new Audio('sounds/crash.mp3');
    crash.play();
  }
  if(butt==="j"){
    var kick=new Audio('sounds/kick-bass.mp3');
    kick.play();
  }
  if(butt==="l"){
    var snare=new Audio('sounds/snare.mp3');
    snare.play();
  }

}
