//Assignment 1 <-------------------

function fib(n) {
  return n > 1 ? fib(n - 1) + fib(n - 2) : n == 1 ? 1 : 0;
}

function fibsRec(n, array = []) {
  if (n == 0) {
    return array;
  } else {
    array.push(fib(n));
    return fibsRec(n - 1, array);
  }
}

//Assignment 2 <-------------------
function mergeSort(array) {
  if (array.length > 1) {
    let mid = array.length / 2;
    return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
  } else return array;
}

function merge(a, b) {
  let max_length = a.length + b.length;
  let temp = [];
  let i = 0;
  let j = 0;
  while (temp.length < max_length) {
    if (a[i] <= b[j]) {
      temp.push(a[i]);
      a.splice(i, 1);
      i = 0;
      j = 0;
    } else if (b.length) {
      temp.push(b[j]);
      b.splice(j, 1);
      i = 0;
      j = 0;
    } else {
      temp.push(a[0]);
      a.splice(0, 1);
    }
  }
  return temp;
}


