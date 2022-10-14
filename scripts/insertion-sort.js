//  <  Insertion Sort  >
// -Build sorted array one element at a time
// -Each iteration, insert element and determine its position
//
//  <  Time (worst case): O(N^2)  >
// -Worst case, outer loop runs (n) times (O(n * n) = O(n^2))
//
//  <  Space: O(1)  >
// -Sorted in-place, no extra memory required

async function insertionSort(array){
    let bars = document.getElementsByClassName("bar");

    for (let i = 1; i < array.length; i++) {
        let index = array[i];
        let j = i - 1;
        while ((j >= 0) && (array[j] > index)) {
            array[j + 1] = array[j];
            bars[j + 1].style.height =  array[j + 1] * barHeight + "px";
            bars[j + 1].style.backgroundColor = "red";
            await sleep(sortSpeed);
            for (let k = i; k >= 0; k--) {
                if (k != j + 1) {
                    bars[k].style.backgroundColor = "green";
                }
            }
            j--;
        }
        array[j + 1] = index;
        bars[j + 1].style.height = array[j + 1] * barHeight + "px";
        bars[j + 1].style.backgroundColor = "brown";
        await sleep(sortSpeed);
    }
    
    return array;
}

const insertSortButton = document.getElementById("insertion_sort_button");
insertSortButton.addEventListener('click', async function(){
    let bars = document.getElementsByClassName("bar");
    disableButtons();
    await insertionSort(unsortedArray);
    for (let k = 0; k < bars.length; k++) {
        bars[k].style.backgroundColor = "brown";
    }
    enableButtons();
})
