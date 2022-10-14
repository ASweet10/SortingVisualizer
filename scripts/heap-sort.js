//  <  Heap Sort  >
// -Convert array into max-heap or min-heap
// -In max heap, each parent is > its descendants; root is the largest value
// -After each (i)teration n, push root of heap into n-i
// -Bubble next-highest value to the root; repeat until done
//
//  <  Time complexity (worst case): O(n * log(n))  >
// -Heapify is O(log(n)) worst case, and must be called n-1 times
//
//  <  Space complexity: O(1)  >
// -Sorted in-place, no extra memory required

async function heapSort(array) {
    let bars = document.getElementsByClassName("bar");

    //Build the heap (rearrange the array)
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      await max_heapify(array, array.length, i);
    }
    //Extract element from heap one at a time
    for (let i = array.length - 1; i >= 0; i--) {
      //Move current root to end of array
      await swap(array, 0, i, bars);
      bars[i].style.backgroundColor = "green";

      //Max heapify the remaining heap
      await max_heapify(array, i, 0);
    }
    return array;
}

async function max_heapify(array, n, i) {
    let bars = document.getElementsByClassName("bar");
    var largest = i;
    var left = 2 * i + 1;
    var right = 2 * i + 2;

    //If left child is smaller than root
    if (left < n && array[left] > array[largest]) {
        largest = left;
    }
    //If right child is smaller than the smallest so far
    if (right < n && array[right] > array[largest]) {
      largest = right;
    }
    //If smallest value is not root
    if (largest != i) {
      await swap(array, i, largest, bars);
      //Recursively heapify the sub-tree
      await max_heapify(array, n, largest);
    }
}

async function swap(array, i, j, bars) {

  bars[i].style.height = array[i] * barHeight + "px";
  bars[i].style.backgroundColor = "red";

  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;



  bars[j].style.height = array[j] * barHeight + "px";
  bars[j].style.backgroundColor = "brown";

  await sleep(sortSpeed);

  for (let k = i; k >= 0; k--) {
      if (k != j + 1) {
          bars[k].style.backgroundColor = "brown";
      }
    }
}

const heapSortButton = document.getElementById("heap_sort_button");
heapSortButton.addEventListener('click', async function(){
  let bars = document.getElementsByClassName("bar");
  disableButtons();
  await heapSort(unsortedArray);
  for (let k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = "brown";
  }
  enableButtons();
})
