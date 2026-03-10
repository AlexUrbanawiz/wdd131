
const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];


nums = [12, 10, 8, 15, 3];
console.log(nums.sort(compareFn));


function compareFn(a,b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
 return 0;
}

let simpleSort = simpleList.sort();
console.log(simpleSort);

let lowerList = simpleList.map(item => item.toLowerCase());
console.log(lowerList);
let lowerSort = lowerList.sort();
console.log(lowerSort);

let searchTerm = 'an';
let filterFruit = lowerSort.filter(item => item.includes(searchTerm));
console.log(filterFruit)


const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];

function compareProductFn(a,b) {
  if (a.productName < b.productName) {
    return -1;
  } else if (a.productName > b.productName) {
    return 1;
  }
 return 0;
}


let productSort = products.sort(compareProductFn);
console.log(productSort)



const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];
