//                  <  Bubble Sort  >
// -Examine adjacent elements and swap if out of order
//
//     <  Time complexity (worst case): O(N^2)  >
// -Worst case, outer loop runs (n) times (O(n * n) = O(n^2))
// -O(n * n) = O(n^2)
//          <  Space complexity: O(1)  >
// -Only 1 extra memory space required (temp variable)
//                    <  Pros  >
// -Easy to implement, O(N) time if data is sorted
//                    <  Cons  >
// -Rarely used, insertion sort better in most cases

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
    return array;
}

//                  <  Insertion Sort  >
// -Build sorted array one element at a time
//
//     <  Time complexity (worst case): O(N^2)  >
// -Worst case, outer loop runs (n) times (O(n * n) = O(n^2))
// -O(n * n) = O(n^2)
//          <  Space complexity: O(1)  >
// -Sorted in place, no additional memory required
//                    <  Pros  >
// -Simple, effective for small lists, in-place so minimal space required
//                    <  Cons  >
// -Beaten by other algorithms for large data sets

async function insertionSort(array){
    let n = array.length;
        for (let i = 1; i < n; i++) {
            // First element
            let current = array[i];
            // Last element
            let j = i - 1; 
            while ((j > -1) && (current < array[j])) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = current;
        }
    return array;
}

//                  <  Heap Sort  >
// -Convert array into either max-heap or min-heap
// -In max heap, each parent is > its descendants; root is the largest value
// -After each iteration, push root of heap into empty array
// -Bubble next-highest element to the root, and repeat until done
//
//     <  Time complexity (worst case): O(n log(n))  >
// -Worst case, outer loop runs (n) times (O(n * n) = O(n^2))
//          <  Space complexity: O(1)  >
// -Sorted in place, no additional memory required
//                    <  Pros  >
// -Guaranteed O(n log(n)) performance on all data sets
//                    <  Cons  >
// -Not used often in practice as QuickSort 
// -Not stable, doesn't preserve relative element order

async function HeapSort(array) {
    let bars = document.getElementsByClassName("bar");
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      await heapify(array, array.length, i);
    }
    for (let i = array.length - 1; i >= 0; i--) {
      await swap(array, 0, i, bars);
      await heapify(array, i, 0);
    }
    for (let k = 0; k < bars.length; k++) {
      bars[k].style.backgroundColor = "aqua";
      await sleep(speedFactor);
    }
    return array;
  }

async function swap(items, leftIndex, rightIndex, bars) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    bars[leftIndex].style.height = items[leftIndex] * heightFactor + "px";
    bars[leftIndex].style.backgroundColor = "lightgreen";
    //bars[leftIndex].innerText = items[leftIndex];
    bars[rightIndex].style.height = items[rightIndex] * heightFactor + "px";
    bars[rightIndex].style.backgroundColor = "lightgreen";
    //bars[rightIndex].innerText = items[rightIndex];
    await sleep(speedFactor);
  }
