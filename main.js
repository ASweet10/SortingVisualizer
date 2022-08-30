let randomizeArrayButton = document.getElementById("randomize_array_button");
let sortButton = document.getElementById("sort_button");

let bubbleSortButton = document.getElementById("bubble-sort-button");
let selectionSortButton = document.getElementById("selection-sort-button");
let insertionSortButton = document.getElementById("a");
let mergeSortButton = document.getElementById("merge-sort-button");
let quickSortButton = document.getElementById("quick-sort-button");


let barsContainer = document.getElementById("bars_container");

let speedInput = document.getElementById("speed");
let sizeInput = document.getElementById("size");

var bars = [];
var barSizes = [];
let sortChoice = "";

let baseSpeed = 110;
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

sizeInput.addEventListener("input", function(){
    numberOfBars = slider.value;
    max = slider.value;
    unsortedArray = createRandomArray();
    barsContainer.innerHTML = "";
    renderBars(unsortedArray);
});

/*
createArrayButton.addEventListener("click", createArray);

function updateArraySize(){
    numberOfBars = sizeInput.value;
    createArray();
}*/


function createRandomArray(){
    let array = new Array(numberOfBars);
    /*
    for(var i = 0; i < numberOfBars; i++) {
        barSizes[i] = randomInt(min, max);
        bars[i] = document.createElement("div");
        barsContainer.appendChild(bars[i]);
        let margin = 0.1;
        bars[i].style=" margin:0% " + margin + "%; background-color: green; width:" +
            (100/numberOfBars-(2*margin)) + "%; height:" + (barSizes[i]) +"%;";
    }
    */
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
        break;
      case "merge":
        if (
          confirm(
            "Merge Sort is not visualized properly. Do you want to continue?"
          )
        ) {
          mergeSort(unsortedArray);
        } else {
          break;
        }
        break;
      case "heap":
        HeapSort(unsortedArray);
        break;
      case "insertion":
        InsertionSort(unsortedArray);
        break;
      case "quick":  
        quickSort(unsortedArray, 0, unsortedArray.length - 1);
        break;
      default:
        bubbleSort(unsortedArray);
        break;
    }
});


document.addEventListener("DOMContentLoaded", function(){
    unsortedArray = createRandomArray();
    renderBars(unsortedArray);
});

// Change this to function that can disable any button instead of making multiple like a noob
bubbleSortButton.addEventListener("click", function(){
    sortChoice = "Bubble";
    quickSortButton.disabled = true;
    selectionSortButton.disabled = true;
    mergeSortButton.disabled = true;
    createArrayButton.disabled = true;
});

function randomInt(min, max){
    // Returns a random integer from (min) to (max):
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function enableButtons(){

    // Determine which button was pressed before and re-enable


    speedInput.disabled = false;
    sizeInput.disabled = false;
    createArrayButton.disabled = false;
}

async function bubbleSort(array){
    let bars = document.getElementsByClassName("bar");
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - i - 1; j++){
            if(array[j] > array[j + 1]){
                for(let k = 0; k < bars.length; k++){
                    if(k !== j && k != j + 1){
                        bars[k].style.backgroundColor = "green";
                    }
                }
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                bars[j].style.height = array[j] * 10 + "px";
                bars[j].style.backgroundColor = "red";

                bars[j].title = bars[j].style.height;

                //bars[j].innerText = array[j];

                bars[j + 1].style.height = array[j + 1] * 10 + "px";
                bars[j + 1].style.backgroundColor = "yellow";

                //bars[j + 1].innerText = array[j + 1];

                await sleep(sortSpeed);
            }
        }
        await sleep(sortSpeed);
    }
    return array;
}