function selection_sort(arr) {
  if (arr instanceof Array) {
    let temp
    for (let i = 0; i < arr.length; i++) {
      let max = i

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[max] < arr[j]) {
          max = j
        }
      }
      temp = arr[i]
      arr[i] = arr[max]
      arr[max] = temp
    }
  }
  return arr
}
