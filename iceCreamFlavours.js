// Do not modify these first two lines
var iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...
// Step 1: Add the flavour "root beer" to the array without modifying the original array.
iceCreamFlavours.push("root beer");
console.log(iceCreamFlavours);

// Step 2: console.log the first flavour in the array by indexing it
console.log(iceCreamFlavours[0]);

// Step 3: console.log the last flavour in the array
var numberOfFlavours = iceCreamFlavours.length;
console.log(iceCreamFlavours[numberOfFlavours - 1]);

// Step 4: console.log the number of flavours is the array
console.log(numberOfFlavours);