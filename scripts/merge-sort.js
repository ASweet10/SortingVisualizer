
//  <  Merge Sort  >
// -Divide input into two halves
// -Call Merge Sort recursively on both halves 
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

/*
async function merge(left, right){
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (left.length > 0 && right.length > 0) {
        await sleep(sortSpeed);
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[leftIndex] < right[rightIndex]) {
            sortedArray.push();
            leftIndex ++;
        } else {
            sortedArray.push();
            rightIndex ++;
        }
    }
    //Use concat because there will always be one element left in one of the arrays
    sortedArray.concat(left.slice(leftIndex));
    sortedArray.concat(right.slice(rightIndex));

    return sortedArray;
}
*/
/*
function mergeSortD(array, start, end) {
    if (array.length < 2) {
      return array;
    }
  
    let middle = Math.floor((start + end) / 2);
    let left = array.slice(start, middle);
    let right = array.slice(middle, end);
  
    mergeSort(right);
}
*/


async function merge(bars, start, mid, end){

    if(bars.length < 2)
    {
        return bars;
    }

    const left = mid - start + 1;
    const right = end - mid;

    let leftArray = new Array(left);
    let rightArray = new Array(right);

    for (let i = 0; i < left; i++) {
        //bars[start + i].style.height = i * 10 + "px";
        bars[start + i].style.backgroundColor = "black";
        leftArray[i] = bars[start + i].style.height * 10 + "px";

        await sleep(sortSpeed);
    }

    for (let i = 0; i < right; i++) {
        //bars[start + 1 + i].style.height = i * 10 + "px";
        bars[start + 1 + i].style.backgroundColor = "yellow";

        rightArray[i] = bars[mid + 1 + i].style.height * 10 + "px";

        await sleep(sortSpeed);
    }

    let i = 0, j = 0, k = start;
    while(i < left && j < right){
        await sleep(sortSpeed);
        
        if(parseInt(leftArray[i]) <= parseInt(rightArray[j])){

            if((left + right) === bars.length){
                bars[k].style.backgroundColor = 'green';
            }
            else{
                bars[k].style.backgroundColor = 'lightgreen';
            }
            
            bars[k].style.height = leftArray[i] * 10 + "px";
            i++;
            k++;
        }
        else{

            if((left + right) === bars.length){
                bars[k].style.backgroundColor = 'green';
            }
            else{
                bars[k].style.backgroundColor = 'lightgreen';
            } 
            bars[k].style.height = rightArray[j] * 10 + "px";
            j++;
            k++;
        }
    }
    while(i < left){
        await sleep(sortSpeed);


        if((left + right) === bars.length){
            bars[k].style.backgroundColor = 'green';
        }
        else{
            bars[k].style.backgroundColor = 'lightgreen';
        }
        bars[k].style.height = leftArray[i];
        i++;
        k++;
    }
    while(j < right){
        await sleep(sortSpeed);

        // color
        if((left + right) === bars.length){
            bars[k].style.backgroundColor = 'green';
        }
        else{
            bars[k].style.backgroundColor = 'lightgreen';
        }
        bars[k].style.height = rightArray[j];
        j++;
        k++;
    }

    await sleep(sortSpeed);
}

async function mergeSort(array, left, right){

    if(left >= right){
        return;
    }
    const mid = left + Math.floor((right - left) / 2);

    await mergeSort(array, left, mid);
    await mergeSort(array, mid + 1, right);
    await merge(array, left, mid, right);
}

const mergeSortButton = document.getElementById("merge_sort_button");
mergeSortButton.addEventListener('click', async function(){
    let array = document.getElementsByClassName("bar");
    let left = 0;
    let right = parseInt(array.length) - 1;
    disableButtons();
    await mergeSort(array, left, right);

    for (let k = 0; k < array.length; k++) {
        array[k].style.backgroundColor = "rgb(115, 66, 148)";
    }
    enableButtons();
})