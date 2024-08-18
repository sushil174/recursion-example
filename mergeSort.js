function merge(arr,arr1,arr2) {
    let i = j = k = 0
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]){
            arr[k] = arr1[i]
            i += 1
        }else {
            arr[k] = arr2[j]
            j += 1
        }
        k += 1
    }

    for(i;i < arr1.length; i++) {
        arr[k] = arr1[i]
        k += 1
    }

    for(j;j< arr2.length; j++) {
        arr[k] = arr2[j]
        k += 1
    }

    return arr
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr
    else {
        let l = 0
        let h = arr.length 
        let mid = Math.floor((l+h)/2)
        const a = mergeSort(arr.slice(l,mid))
        const b = mergeSort(arr.slice(mid,h))
        return merge(arr,a,b)
    }
}
const result = mergeSort( [3, 2, 1, 13, 8, 5, 0, 1] )
console.log(result)
