//  <  Quick Sort  >
// -Divide and conquer input into smaller sub-arrays
// -Choose pivot element, put smaller elements to left and larger to right
// -Once sorted, recursively call Quick Sort on sub-arrays until all are sorted
//
//  <  Time (worst case): O(N^2)  >
// -Worst case, chosen pivot is largest or smallest element
//
//  <  Space: O(log(n))  >
// -O(log(n)) possible over O(n) if in-place partitioning used

async function quickSort(array, start, end) {
    let bars = document.getElementsByClassName("bar");
    var pivot;
    if (array.length > 1) 
    {
        pivot = await partition(array, start, end);
        if(start < pivot - 1)
        {
            //Sort elements left of pivot
            await quickSort(array, start, pivot - 1);
        }
        if(pivot < end)
        {
            //Sort elements right of pivot
            await quickSort(array, pivot, end);
        }
    }
    else
    {
        for (let k = 0; k < bars.length; k++) {
            bars[k].style.backgroundColor = "rgb(115, 66, 148)";
        }
        return array;
    }
  

}

async function partition(array, start, end) {
    let bars = document.getElementsByClassName("bar");

    let pivotIndex = Math.floor((start + end) / 2);
    var pivot = array[pivotIndex];
    //var pivot = array[start];
    bars[pivotIndex].style.backgroundColor = "blue";

    for (let i = 0; i < bars.length; i++) {
        if(i != pivotIndex) {
            bars[i].style.backgroundColor = "green";
        }
    }

    while (start <= end) {
        while(array[start] < pivot)
        {
            start++;
        }
        while(array[end] > pivot)
        {
            end--;
        }
        if(start <= end)
        {
            await swap(array, start, end, bars);
            start++;
            end--;
        }
    }
    return start;
}

async function swap(array, i, j, bars) {

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    bars[i].style.height = array[i] * 10 + "px";
    bars[i].style.backgroundColor = "yellow";
    bars[j].style.height = array[j] * 10 + "px";
    bars[j].style.backgroundColor = "red";

    await sleep(sortSpeed);
}

const quickSortButton = document.getElementById("quick_sort_button");
quickSortButton.addEventListener('click', async function(){
    let bars = document.getElementsByClassName("bar");
    disableButtons();
    await quickSort(unsortedArray, 0, unsortedArray.length - 1);
    for (let k = 0; k < bars.length; k++) {
        bars[k].style.backgroundColor = "rgb(115, 66, 148)";
    }
    enableButtons();
})
