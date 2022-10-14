//  <  Bubble Sort  >
// -Examine adjacent elements and swap if out of order
//
//  <  Time (worst case): O(N^2)  >
// -Worst case, outer loop runs (n) times (O(n * n) = O(n^2))
//
//  <  Space: O(1)  >
// -Only 1 extra memory space required (temp variable)

async function bubbleSort(array){
    let bars = document.getElementsByClassName("bar");

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - i - 1; j++){
            if(array[j] > array[j + 1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                bars[j].style.height = array[j] * barHeight + "px";
                bars[j].style.backgroundColor = "red";
                bars[j + 1].style.height = array[j + 1] * barHeight + "px";
                bars[j + 1].style.backgroundColor = "yellow";

                await sleep(sortSpeed);
            }
            bars[j].style.backgroundColor = "brown";
            bars[j + 1].style.backgroundColor = "brown";
        }
        bars[array.length-i-1].style.backgroundColor = "green";
        await sleep(sortSpeed);
    }

    return array;
}

const bubbleSortButton = document.getElementById("bubble_sort_button");
bubbleSortButton.addEventListener('click', async function(){
    disableButtons();
    await bubbleSort(unsortedArray);
    let bars = document.getElementsByClassName("bar");
    for (let k = 0; k < bars.length; k++) {
        bars[k].style.backgroundColor = "brown";
    }
    enableButtons();
})
