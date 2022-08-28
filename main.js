let sortGoButton = document.getElementById("sort-go-button");
let bubbleSortButton = document.getElementById("bubble-sort-button");
let selectionSortButton = document.getElementById("selection-sort-button");
let insertionSortButton = document.getElementById("a");
let mergeSortButton = document.getElementById("merge-sort-button");
let quickSortButton = document.getElementById("quick-sort-button");

let barsContainer = document.getElementById("bars-container");

let speed = document.getElementById("sort-speed");
let size = document.getElementById("sort-size");

let sortSpeed = 100;
let heightFactor = 5;
let min = 1;
let max = 35;
let numberOfBars = 35;
let unsortedArray = new Array(numberOfBars);


speed.addEventListener("change", (e)=>{
    sortSpeed = parseInt(e.target.value);
    console.log(sortSpeed);
})

size.addEventListener("input", function(){
    numberOfBars = 35;
    max = 35;
    barsContainer.innerHTML = "";
    unsortedArray = createRandomArray();
    renderBars(unsortedArray);
})



function createRandomArray(){
    let array = new Array(numberOfBars);
    for(let i = 0; i < numberOfBars; i++) {
        unsortedArray[i] = randomInt(min, max);
    }
    return array;
}

function renderBars(){
    for(let i = 0; i < numberOfBars; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        let heightText = (unsortedArray[i] * heightFactor).toString();
        bar.style.height = heightText + "px";
        barsContainer.appendChild(bar);
    }
} 



document.addEventListener("DOMContentLoaded", function(){
    unsortedArray = createRandomArray();
    renderBars(unsortedArray);
})


sortGoButton.addEventListener("click", function(){
    unsortedArray = createRandomArray();
    barsContainer.innerHTML = "";
    renderBars(unsortedArray);
})


bubbleSortButton.addEventListener("click", function(){
    bubbleSort(unsortedArray);
    quickSortButton.disabled = true;
    selectionSortButton.disabled = true;
    mergeSortButton.disabled = true;
})

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

function randomInt(min, max){
    // Returns a random integer from (min) to (max):
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}