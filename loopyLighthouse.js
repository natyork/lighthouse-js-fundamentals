// Loopy Lighthouse
// var intercept = 100

// for (var i = 0; i <= 100; i++) {
//   if((i + intercept) % 3 === 0 && (i + intercept) % 4 === 0){
//     console.log("LoopyLighthouse");
//   } else if ((i + intercept) % 3 === 0) {
//     console.log("Loopy");
//   } else if ((i + intercept) % 4 === 0) {
//     console.log("Lighthouse");
//   } else {
//     console.log(intercept + i);
//   }
// }

// Loopy Lighthouse 2
function loopyLighthouse(range, multiples, words){
  for (var i = 0; i <= (range[1] - range[0] - 1); i++) {
    if((i + range[0]) % multiples[0] === 0 && (i + range[0]) % multiples[1] === 0){
      console.log(words[0] + words[1]);
    } else if ((i + range[0]) % multiples[0] === 0) {
      console.log(words[0]);
    } else if ((i + range[0]) % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(range[0] + i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

