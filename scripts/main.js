let randomizeArrayButton = document.getElementById("randomize_array_button");

let barsContainer = document.getElementById("bars_container");

let speedInput = document.getElementById("speed");
let sizeInput = document.getElementById("size");

var array = [];
var barSizes = [];

let baseSpeed = 110;
let sortSpeed = 50;
let barHeight = 8;
let min = 1;
let max = sizeInput.value;
let numberOfBars = sizeInput.value;
let unsortedArray = new Array(numberOfBars);


speedInput.addEventListener("change", (e)=>{
    sortSpeed = parseInt(e.target.value);
    //Reverse range to properly offset speed in (ms)
    //Slider from 100 (slow) to 10 (fast)
    sortSpeed = baseSpeed - sortSpeed;
})

sizeInput.addEventListener("input", updateArraySize);

function updateArraySize(){
    numberOfBars = sizeInput.value;
    createRandomArray();
}


function createRandomArray(){
    let array = new Array(numberOfBars);
    for(let i=0; i<numberOfBars; i++){
        array[i] = randomInt(min, max);
    }
    return array;
}

function renderBars(array){
    for(let i = 0; i<numberOfBars; i++){
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * barHeight + "px";
        barsContainer.appendChild(bar);
    }
}

randomizeArrayButton.addEventListener("click", function(){
    randomizeArray();
});

function randomizeArray(){
    unsortedArray = createRandomArray();
    barsContainer.innerHTML = "";
    renderBars(unsortedArray);
}

document.addEventListener("DOMContentLoaded", function(){
    unsortedArray = createRandomArray();
    renderBars(unsortedArray);
});

function randomInt(min, max){
    // Returns a random integer from (min) to (max):
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function disableButtons(){
  document.getElementById("bubble_sort_button").disabled = true;
  document.getElementById("quick_sort_button").disabled = true;
  document.getElementById("insertion_sort_button").disabled = true;
  document.getElementById("heap_sort_button").disabled = true;
  document.getElementById("merge_sort_button").disabled = true;
  randomizeArrayButton.disabled = true;

  speedInput.disabled = true;
  sizeInput.disabled = true;
}

function enableButtons(){
  document.getElementById("bubble_sort_button").disabled = false;
  document.getElementById("quick_sort_button").disabled = false;
  document.getElementById("insertion_sort_button").disabled = false;
  document.getElementById("heap_sort_button").disabled = false;
  document.getElementById("merge_sort_button").disabled = false;
  randomizeArrayButton.disabled = false;

  speedInput.disabled = false;
  sizeInput.disabled = false;
}