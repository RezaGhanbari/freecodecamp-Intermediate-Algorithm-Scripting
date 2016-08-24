
function sumAll(arr) {
  if (arr[0]>arr[1]){
    arr = arr.reverse();
  }
  result = [];
  for (var i =arr[0]; i>=arr[0] && i<=arr[1] ;i++){
    result.push(i);
  }
  sum = 0;
  for (var j =0; j<result.length; j++){
    sum = sum + result[j];
  }
  return sum;
}

sumAll([1, 4]);
