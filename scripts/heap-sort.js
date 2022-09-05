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

const heapSortButton = document.getElementById("heap_sort_button");
heapSortButton.addEventListener('click', async function(){
    disableButtons();
    await heapSort(unsortedArray);
    enableButtons();
})
