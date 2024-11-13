//Let's create an object representing a farmer in Uganda.
//let ugandanFarmer = {
    //name: "James",
    //farmLocation: "Mbale",
    //crop: "Coffee",
    //numberOfAcres: 5
   // };

// Accessing properties
//console.log(`Farmer's Name: ${ugandanFarmer.name}`);
//console.log(`Farm Location: ${ugandanFarmer.farmLocation}`);

//Example 2: Modifying a Farmer's Object
//ugandanFarmer.cropsHarvested = 1000; // Adding a new property
//ugandanFarmer.crop = "Maize"; // Modifying an existing property
//console.log(ugandanFarmer);



//Example 3: Adding a Method to Calculate Farm Revenue
let ugandanFarmer = {
  name: "James",
  farmLocation: "Mbale",
  crop: "Coffee",
  numberOfAcres: 5,
  cropPrice: 3000,
  calculateRevenue: function(harvestedBags) {
    return harvestedBags * this.cropPrice;
  }
};

let revenue = ugandanFarmer.calculateRevenue(200);
console.log(`Total revenue for ${ugandanFarmer.crop} is UGX
${revenue}`);




//Example 4: Nested Object for a Ugandan City
let kampalaCity = {
  name: "Kampala",
  population: 1500000,
  districts: {
    central: "Kampala Central",
    east: "Nakawa",
    north: "Kawempe",
    south: "Makindye",
    west: "Rubaga"
  }
};
console.log(`District in the north of Kampala:
${kampalaCity.districts.north}`);



//Example 5: Iterating Over a Farmer's Properties
let ugandanFarmer = {
    name: "James",
    farmLocation: "Mbale",
    crop: "Coffee",
    numberOfAcres: 5
  };
  
  for (let key in ugandanFarmer) {
  console.log(`${key}: ${ugandanFarmer[key]}`);
  }



  //Example 6: Using this in a Method
let ugandanFarmer = {
  name: "James",
  farmLocation: "Mbale",
  crop: "Coffee",
  numberOfAcres: 5,
  introduceFarmer: function() {
    return `Hello, my name is ${this.name} and I farm ${this.crop}
in ${this.farmLocation}.`;
  }
};
console.log(ugandanFarmer.introduceFarmer());




//Example 7: Creating Multiple Farmers Using a Constructor
function Farmer(name, location, crop, acres) {
  this.name = name;
  this.farmLocation = location;
  this.crop = crop;
  this.numberOfAcres = acres;
  this.introduce = function() {
    return `I am ${this.name}, and I farm ${this.crop} in
${this.farmLocation}.`;
   };
}

let farmer1 = new Farmer("Sarah", "Mbarara", "Bananas", 10);
let farmer2 = new Farmer("David", "Gulu", "Sunflowers", 20);
console.log(farmer1.introduce());
console.log(farmer2.introduce())



//Example 8: Destructuring an Object
let ugandanFarmer = {
  name: "James",
  farmLocation: "Mbale",
  crop: "Coffee"
};
let {name, farmLocation, crop} = ugandanFarmer;
console.log(`${name} farms ${crop} in ${farmLocation}.`);