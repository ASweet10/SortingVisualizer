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
        await sleep(sortSpeed);
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
        await sleep(sortSpeed);
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

    if (start < end) {
        var pivotPosition = partition(array, start, end);
        //Sort elements left of pivot
        quickSort(array, start, pivotPosition - 1);
        //Sort elements right of pivot
        quickSort(array, pivot, end);
    }
  
    for (let i = 0; i < bars.length; i++) {
        bars[k].style.backgroundColor = "rgb(115, 66, 148)";
        await sleep(sortSpeed);
    }
    return array;
}

async function partition(array, start, end) {
    let bars = document.getElementsByClassName("bar");

    var next = start + 1;
    var pivot = array[start];
    bars[pivot].style.backgroundColor = "red";

    for (let i = 0; i < end; i++) {
        if(array[i] < pivot) {
            bars[i].style.backgroundColor = "black";
            
            bars[next].style.backgroundColor = "red";

            var temp = array[next];
            array[next]=array[i];
            array[i]=temp;

            bars[i].style.backgroundColor = "blue";
            bars[i].style.height = bars[i] * 10 + "px";
            bars[next].style.backgroundColor = "blue";
            bars[next].style.height = bars[next] * 10 + "px";

            i++;
        }
    }
    
    var temp = array[start];//put the pivot element in its proper place.
    array[start] = array[next - 1];
    array[next - 1] = temp;

    bars[start].style.backgroundColor = "blue";
    bars[next - 1].style.backgroundColor = "blue";

    for(var t=start;t<=i;t++)
    {
        bars[t].style.backgroundColor = "green";
    }
    return next - 1;
}







async function swap(array, i, j, bars) {

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    bars[i].style.height = array[i] * 10 + "px";
    bars[i].style.backgroundColor = "red";
    bars[j].style.height = array[j] * 10 + "px";
    bars[j].style.backgroundColor = "green";

    await sleep(sortSpeed);

    return array;
}



//  <  Heap Sort  >
// -Convert array into max-heap or min-heap
// -In max heap, each parent is > its descendants; root is the largest value
// -After each (i)teration n, push root of heap into n-i
// -Bubble next-highest value to the root; repeat until done
//
//  <  Time complexity (worst case): O(n log(n))  >
// -Worst case, outer loop runs (n) times (O(n * n) = O(n^2))
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
      await sleep(sortSpeed);
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