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

                bars[j + 1].style.height = array[j + 1] * 10 + "px";
                bars[j + 1].style.backgroundColor = "yellow";

                await sleep(sortSpeed);
            }
        }
        await sleep(sortSpeed);
    }
    for (let k = 0; k < bars.length; k++) {
        bars[k].style.backgroundColor = "rgb(115, 66, 148)";
    }
    enableButtons();
    return array;
}

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
            bars[j + 1].style.height =  array[j + 1] * 10 + "px";
            bars[j + 1].style.backgroundColor = "red";
            await sleep(sortSpeed);

            for (let k = 0; k < bars.length; k++) {
                if (k != j + 1) {
                    bars[k].style.backgroundColor = "green";
                }
            }
            j--;
        }
        array[j + 1] = index;
        bars[j + 1].style.height = array[j + 1] * 10 + "px";
        bars[j + 1].style.backgroundColor = "blue";
        await sleep(sortSpeed);
    }
    for (let k = 0; k < bars.length; k++) {
        bars[k].style.backgroundColor = "rgb(115, 66, 148)";
    }
    enableButtons();
    return array;
}

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



//  <  Heap Sort  >
// -Convert array into max-heap or min-heap
// -In max heap, each parent is > its descendants; root is the largest value
// -After each (i)teration n, push root of heap into n-i
// -Bubble next-highest value to the root; repeat until done
//
//  <  Time complexity (worst case): O(n * log(n))  >
// -Heapify is O(log(n)) worst case, and must be called n-1 times
// -So O(n) * O(log(n)) = O(n * log(n))
//
//  <  Space complexity: O(1)  >
// -Sorted in-place, no extra memory required

async function heapSort(array) {
    let bars = document.getElementsByClassName("bar");

    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      await heapify(array, array.length, i);
    }
    for (let i = array.length - 1; i >= 0; i--) {
      await swap(array, 0, i, bars);
      await heapify(array, i, 0);
    }

    for (let k = 0; k < bars.length; k++) {
      bars[k].style.backgroundColor = "rgb(115, 66, 148)";
    }
    enableButtons();
    return array;
}

async function heapify(array, n, i) {
    let bars = document.getElementsByClassName("bar");
    var largest = i;
    var left = 2 * i + 1;
    var right = 2 * i + 2;

    if (left < n && array[left] > array[largest]) {
        largest = left;
    }
    if (right < n && array[right] > array[largest]) {
      largest = right;
    }
    if (largest != i) {
      await swap(array, i, largest, bars);
      await heapify(array, n, largest);
    }
}


//  <  Merge Sort  >
// -Divide input into two halves
// -Call Merge Sort on both halves 
// -Merge the two halves once sorted
//
//  <  Time complexity (worst case): O(n log(n))  >
// -Always O(n log(n)) for best, average, and worst case
// -Array divided in half every step has O(log(n)) complexity and array is merged (n) times
// -So,  O(n) * O(log(n)) = O(n * log(n))
//
//  <  Space complexity: O(n)  >
// -Store left and right in auxilliary arrays, then back to original array to store once merged
// -Worst case, each sub-array has N/2 elements, so total potential space would be O(n)