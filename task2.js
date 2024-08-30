const tourPlace = ["coxs bazar", "sajek", "bandhorbhon"];
tourPlace.push("kasmir");
tourPlace.splice(3, 0, "mango", "banana");
console.log(tourPlace);
tourPlace.push("rafa", "kafa");
tourPlace.splice(tourPlace.length - 1, 1);
console.log(tourPlace);
