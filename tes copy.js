function solution(A) {
  let count = 0;
  let arr = A.split("");
  let asd = arr.length - 1;
  let limit = arr.length * 2;
  for (let i = 0; i < limit; i++) {
    if (arr[asd] == 1) {
      arr[asd] = 0;
      count++;
    } else if (arr[asd] == 0) {
      arr.pop();
      arr.unshift("0");
      count++;
    }
  }
  return count;
}

const binary = "1111010101111";
console.log(solution(binary));
// console.log(solution(binary));
