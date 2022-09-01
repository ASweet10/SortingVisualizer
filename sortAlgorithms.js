// -- Bubble Sort --
// Time complexity (worst case): O(N^2)
// Space complexity: O(1)
//                      Pros
//Easy to implement, O(N) time if data is sorted
//                      Cons
// Cons: Rarely used, insertion sort better in most cases

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

// -- Insertion Sort --
// Time complexity (worst case): O(N^2)
// Space complexity: O(1)
//                      Pros
// -Easy to implement, O(N) time if data is sorted
//                      Cons
// -Rarely used, insertion sort better in most cases

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
            array[j+1] = current;
        }
    return array;
}