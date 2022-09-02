let randomizeArrayButton = document.getElementById("randomize_array_button");
let sortButton = document.getElementById("sort_button");
let sortChoiceSelect = document.getElementById("sort_choice");

let barsContainer = document.getElementById("bars_container");

let speedInput = document.getElementById("speed");
let sizeInput = document.getElementById("size");

var bars = [];
var barSizes = [];
let sortChoice = "";

let baseSpeed = 110;
let sortSpeed = 50;
let heightFactor = 3;
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

sortChoiceSelect.addEventListener("change", function(){
  sortChoice = sortChoiceSelect.value;
})


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
        bar.style.height = array[i] * heightFactor + "px";
        barsContainer.appendChild(bar);
    }
}

randomizeArrayButton.addEventListener("click", function(){
    unsortedArray = createRandomArray();
    barsContainer.innerHTML = "";
    renderBars(unsortedArray);
});

sortButton.addEventListener("click", function(){
    switch (sortChoice) {
      case "Bubble":
        bubbleSort(unsortedArray);
        disableButtons();
        break;
      case "Merge":
        mergeSort(unsortedArray);
        disableButtons();
        break;
      case "Heap":
        heapSort(unsortedArray);
        disableButtons();
        break;
      case "Insertion":
        insertionSort(unsortedArray);
        disableButtons();
        break;
      case "Quick":  
        quickSort(unsortedArray, 0, unsortedArray.length - 1);
        disableButtons();
        break;
      default:
        bubbleSort(unsortedArray);
        disableButtons();
        break;
    }
});


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
    sortChoiceSelect.disabled = true;
    randomizeArrayButton.disabled = true;
    sortButton.disabled = true;

    speedInput.disabled = true;
    sizeInput.disabled = true;
}

function enableButtons(){
    sortChoiceSelect.disabled = false;
    randomizeArrayButton.disabled = false;
    sortButton.disabled = false;

    speedInput.disabled = false;
    sizeInput.disabled = false;
}