const friends = ["balam", "kala", "rafa"];
console.log(friends.includes("kala"));
if (friends.includes("rafa")) {
  console.log("party");
} else {
  console.log("no party");
}
console.log(friends.indexOf("rafa"));

console.log(friends.indexOf("tareq"));

console.log(friends.join("+"));
