console.log("A");
//setTimeout goes to queue by default it is 0
setTimeout(() => {
  console.log("B");
});
["C", "D"].forEach((element) => {
  console.log(element);
});

console.log("E");
/*
output
A
C
D
E
B

*/
