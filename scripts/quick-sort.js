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
    if (start < end) {
        let pivot = await partition(array, start, end);
        await quickSort(array, start, pivot -1);
        await quickSort(array, pivot + 1, end);
    }
    else{
        if(start >= 0 && end >= 0 && start < array.length && end < array.length){
            array[end].style.backgroundColor = "green";
            array[end].style.backgroundColor = "green";
        }
    }
}

async function partition(array, start, end) {
    let index = start - 1;
    array[end].style.backgroundColor = "red";

    for (let j = start; j <= end - 1; j++) {
        array[j].style.backgroundColor = "yellow";
        await sleep(sortSpeed);

        if(parseInt(array[j].style.height) < parseInt(array[end].style.height)){
            index++;            

            let temp = array[index].style.height;
            array[index].style.height = array[j].style.height;
            array[j].style.height = temp;

            array[index].style.backgroundColor = "red";
            await sleep(sortSpeed);
        }
        else{
            array[j].style.backgroundColor = "brown";
        }
    }
    index++;
    await sleep(sortSpeed);

    temp = array[index].style.height;
    array[index].style.height = array[end].style.height;
    array[end].style.height = temp;

    array[end].style.backgroundColor = "brown";
    array[index].style.backgroundColor = "green";

    await sleep(sortSpeed);

    for(let k = 0; k < array.length; k++){
        if(array[k].style.backgroundColor != "green"){
            array[k].style.backgroundColor = "brown";
        }
    }

    return index;
}

const quickSortButton = document.getElementById("quick_sort_button");
quickSortButton.addEventListener('click', async function(){
    let bars = document.getElementsByClassName("bar");
    disableButtons();
    await quickSort(bars, 0, bars.length - 1);
    for (let k = 0; k < bars.length; k++) {
        bars[k].style.backgroundColor = "brown";
    }
    enableButtons();
})
