const arr = [1, 25, 3, 64, 5, 6, 85, 8, 9, 10];

let num = 0;
for (let i = 0; i < arr.length; i++) {
  const lol = arr[i];
  if (num < lol) {
    num = lol;
  }
}
console.log(num);
