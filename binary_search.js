function binarySearch(target, arr, low, high) {
  let mid = low + Math.ceil((high - low)/2) === high ? high - Math.ceil((high - low)/2) : low + Math.ceil((high - low)/2)
  if(arr[mid] === target) {
    console.log("run 1 time")
    return mid
  }
  if (arr[mid] > target) {
    console.log("run 1 time")
    return binarySearch(target, arr, low, mid)
  }
  else {
    console.log("run 1 time")
    return binarySearch(target, arr, mid, high)
  }
}