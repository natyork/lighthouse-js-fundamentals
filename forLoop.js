// var result = 1;
// for (var counter = 0; counter < 10; counter = counter + 1){
//   result = result * 2;
//   console.log(result);
// }

for (var current = 20; ; current++) {
  if (current % 7 == 0) {
    break;
  }
}
console.log(current);
// → 21
