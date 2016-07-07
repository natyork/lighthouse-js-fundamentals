var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("List A:");
var indexA = 0;

while (indexA < ingredients.length) {
  console.log(ingredients[indexA]);
  indexA ++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("\nList B:");
for (var indexB = 0; indexB < ingredients.length; indexB++) {
  console.log(ingredients[indexB]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nList C:");
for (var indexC = ingredients.length - 1; indexC >=0; indexC--) {
  console.log(ingredients[indexC]);
}