// alert("Hey, there!");

/* 
1A. addEventListeners to first drum Button(w) using KNOWN FUNCTION

document.querySelector("button").addEventListener("click",handleClick);

function handleClick(){
    alert("I got clicked!");
}
1B. addEventListeners to first drum Button(w) using KNOWN/NAMED FUNCTION

document.querySelector(".drum")[0].addEventListener("click",handleClick);

function handleClick(){
    alert("I got clicked!");
}

2. addEventListeners to All the DRUM Button using KNOWN FUNCTION

document.querySelector("button.w").addEventListener("click",handleClick);
document.querySelector("button.a").addEventListener("click",handleClick);
document.querySelector("button.s").addEventListener("click",handleClick);
document.querySelector("button.d").addEventListener("click",handleClick);
document.querySelector("button.j").addEventListener("click",handleClick);
document.querySelector("button.k").addEventListener("click",handleClick);
document.querySelector("button.l").addEventListener("click",handleClick);

function handleClick(){
    alert("I got clicked!");

3. addEventListeners to first drum Button(w) using UNKNOWN FUNCTION

document.querySelector(".drum")[0].addEventListener("click",function());

function (){
    alert("I got clicked!");
}

 .......***.....However, attempting above mentioned ways is lengthy......****.......
......so alternatively, and the Best way to addEventListener is as below:
*/


// addEventListeners using for loop and anonymous function
// let numberOfDrumButtons = document.querySelectorAll(".drum").length;

//  for (let i=0; i<numberOfDrumButtons; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){alert("I got clicked!");});}


/*  .....***....also, using while loop, we can addEventListeners....****....

let numberOfDrumButtons = document.querySelectorAll(".drum").length;
let i = 0;
while (i<numberOfDrumButtons){

        document.querySelectorAll(".drum")[i].addEventListener("click", function(){alert("I got clicked!");});
        i++;
    }

    */

    

// document.querySelector("button").addEventListener("click", function (){
//     let tom1 = new Audio ("sounds/tom-1.mp3");
//     tom1.play();
// })

/*
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       
       var buttonInnerHTML = this.innerHTML;

       switch (buttonInnerHTML) {
        case "w":
            let tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio ("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio ("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio ("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:console.log(buttonInnerHTML);
       }
        
    });
}
*/

/*
function HouseKeeper(name, age, cleanExperience, cleaningRepertoire) {
    this.name = name;
    this.age = age;
    this.cleanExperience = cleanExperience;
    this.cleaningRepertoire = cleaningRepertoire
    this.cleanFloor = function(){alert("Cleaning in progress...");
         }
}

var houseKeeper1 = new HouseKeeper ("Tom", 23, 4, ["lobby", "bedroom"]);

console.log(houseKeeper1.cleanFloor());

document.addEventListener("keypress", function(){
    alert("key was pressed");
})
*/

// Detecting Button Press
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       
       var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Detecting Keyboard Press


document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key){
    switch (key) {
        case "w":
            let tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio ("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio ("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio ("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:console.log(buttonInnerHTML);
       }
};

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

