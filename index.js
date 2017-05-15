function iterativeLog(arr){
  arr.forEach(function(element,index) {
    console.log (`${index}: ${element}`)
  })
}

function iterate(callback){
  ans = ["dogs","cats","lemurs"]
  ans.forEach(callback)
  return ans
}

function doToArray(array,callback){
  array.forEach(callback)
}
