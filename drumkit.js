let sound1 = document.getElementById("sound1");
let sound2 = document.getElementById("sound2");
let sound3 = document.getElementById("sound3");
let sound4 = document.getElementById("sound4");
let sound5 = document.getElementById("sound5");

document.onkeydown = drumSound;

function drumSound(e){
  
  e = e || window.event;
  
  if(e.keyCode == "68"){
    console.log("snare");
    const snare = document.getElementById("snare");
    snare.play();
    sound1.style.color = "white";
    sound1.style.boxShadow = "5px 5px 5px black";
    sound1.style.transition = ".8s all";
  }else if(e.keyCode == "82"){
    console.log("roll");
    const roll = document.getElementById("roll");
    roll.play();
    sound2.style.color = "white";
    sound2.style.boxShadow = "5px 5px 5px black";
    sound2.style.transition = ".8s all";
  }else if(e.keyCode == "85"){
    console.log("bass");
    const bass = document.getElementById("bass");
    bass.play();
    sound3.style.color = "white";
    sound3.style.boxShadow = "5px 5px 5px black";
    sound3.style.transition = ".8s all";
  }else if(e.keyCode == "77"){
    console.log("stick");
    const stick = document.getElementById("stick");
    stick.play();
    sound4.style.color = "white";
    sound4.style.boxShadow = "5px 5px 5px black";
    sound4.style.transition = ".8s all";
  }else if(e.keyCode == "83"){
    console.log("roll");
    const drumRoll = document.getElementById("drumRoll");
    drumRoll.play();
    sound5.style.color = "white";
    sound5.style.boxShadow = "5px 5px 5px black";
    sound5.style.transition = ".8s all";
  }else{
    console.log("check");
  }
}

