function countdown(num) {
  console.log(num)
  return num === 1 ? 1 : countdown(num - 1)
}

function factorial(num) {
  return num === 1 ? 1 : num * factorial(num - 1)
}

function arrSum(arr) {
  if(arr.length === 0) {
    return 0
  }
  else {
    return arr.pop() + arrSum(arr)
  }
}

function maxInArr(arr) {
  if(arr.length === 0) {
    return -Infinity
  }
  else {
    let a = arr.pop()
    console.log(arr)    
    return a >= maxInArr(arr) ? a : maxInArr(arr)
  }
}

