// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function sortNumber(a, b) {
  return a - b;
}

function solution(A) {
  const posArr = A.filter((num) => num > 0);
  posArr.sort(sortNumber);
  let asd = 0;

  if (posArr.length >= 3) {
    asd = posArr[0] + posArr[1] + posArr[2];
  } else if (posArr.length >= 2) {
    asd = posArr[0] + posArr[1];
  } else if (posArr.length === 1) {
    asd = posArr[0];
  }
  console.log(posArr);
  return asd;
}

const arr1 = [-2, 0, 1, -4, -8, -1];
console.log(solution(arr1));
