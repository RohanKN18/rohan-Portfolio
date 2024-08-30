let body = document.querySelector("body");
let photoContainer = document.querySelector("#photoContainer");
let photo=document.querySelector("#photo");
let questionContainer = document.querySelector("#questionContainer");
let pillsContainer = document.querySelector("#pillsContainer");
let bluePill = document.querySelector("#bluePill");
let redPill = document.querySelector("#redPill");
let pageTwo=document.querySelector('#pageTwo');

redPill.addEventListener("click", function() {
    console.log("hi");
    body.removeChild(pillsContainer);
    body.removeChild(questionContainer);
    body.removeChild(photoContainer);
    pageTwo.style.display="flex";
});