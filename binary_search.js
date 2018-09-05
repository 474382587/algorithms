function binarySearch(target, arr, low, high) {
  let mid = low + Math.ceil((high - low)/2) === high ? high - Math.ceil((high - low)/2) : low + Math.ceil((high - low)/2)
  if(arr[mid] === target) {
    return mid
  }
  if (arr[mid] > target) {
    return binarySearch(target, arr, low, mid)
  }
  else {
    return binarySearch(target, arr, mid, high)
  }
}



