//  <  Merge Sort  >
// -Divide input into two halves
// -Call Merge Sort recursively on both halves 
// -Merge the two halves once sorted
//
//  <  Time complexity (worst case): O(n log(n))  >
// -Always O(n log(n)) for best, average, and worst case
// -Array divided in half every step has O(log(n)) complexity and array is merged (n) times
//
//  <  Space complexity: O(n)  >
// -Store left and right in auxilliary arrays, then back to original array to store once merged
// -Worst case, each sub-array has N/2 elements, so total potential space would be O(n)

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
        bars[start + i].style.backgroundColor = "red";
        leftArray[i] = bars[start + i].style.height;
        await sleep(sortSpeed);

    }

    for (let i = 0; i < right; i++) {

        bars[start + 1 + i].style.backgroundColor = "yellow";
        rightArray[i] = bars[mid + 1 + i].style.height;

        await sleep(sortSpeed);
    }

    let i = 0, j = 0, k = start;

    while(i < left && j < right){
        await sleep(sortSpeed);
        
        if(parseInt(leftArray[i]) <= parseInt(rightArray[j])){

            if((left + right) === bars.length){
                bars[k].style.backgroundColor = 'brown';
            }
            else{
                bars[k].style.backgroundColor = 'green';
            }
            
            bars[k].style.height = leftArray[i];
            i++;
            k++;
        }
        else{

            if((left + right) === bars.length){
                bars[k].style.backgroundColor = 'brown';
            }
            else{
                bars[k].style.backgroundColor = 'green';
            } 
            bars[k].style.height = rightArray[j];
            j++;
            k++;
        }
    }
    while(i < left){
        await sleep(sortSpeed);


        if((left + right) === bars.length){
            bars[k].style.backgroundColor = 'brown';
        }
        else{
            bars[k].style.backgroundColor = 'green';
        }
        bars[k].style.height = leftArray[i];
        i++;
        k++;
    }
    while(j < right){
        await sleep(sortSpeed);

        if((left + right) === bars.length){
            bars[k].style.backgroundColor = 'brown';
        }
        else{
            bars[k].style.backgroundColor = 'green';
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
        array[k].style.backgroundColor = "brown";
    }
    enableButtons();
})