// INput
const obj = [
  { key: "Sample 1", data: "Data1" },
  { key: "Sample 1", data: "Data1" },
  { key: "Sample 2", data: "Data2" },
  { key: "Sample 1", data: "Data1" },
  { key: "Sample 3", data: "Data1" },
  { key: "Sample 4", data: "Data1" },
];
/* 
Output
let output = {
  Sample1: [
    {
      key: "Sample1",
      data: "Data1",
    },
    {
      key: "Sample1",
      data: "Data1",
    },
    {
      key: "Sample1",
      data: "Data1",
    },
  ],
  Sample2: [{ key: "Sample 2", data: "Data2" }],
  Sample3: [{ key: "Sample 3", data: "Data1" }],
  "Sample4:[ { key: "Sample 4", data: "Data1" }]
};
*/

// Solution 1:
/*const output = {};
obj.forEach((item) => {
  console.log("Item1....", item.key);
  if (output[item.key]) {
    console.log("Item2....", item.key);
    console.log("Iam here already");
    output[item.key].push(item);
  } else {
    console.log("came here");
    console.log("Item3....", item.key);
    output[item.key] = [item];
  }
  console.log("Output in block", output);
});

console.log("Final output", output);
*/
// Solution 2:

function groupBy(arr) {
  return arr.reduce((value, item) => {
    const { key, data } = item;
    if (!value[key]) {
      value[key] = [];
    }
    value[key].push({ key, data });
    return value;
  }, {});
}

const output = groupBy(obj);
// console.log(output);

function groupbyData(arr) {
  return arr.reduce((acc, curr) => {
    const { key, data } = curr;
    if (!acc[data]) {
      acc[data] = [];
    }
    acc[data].push({ key, data });
    return acc;
  }, {});
}

const dataOutput = groupbyData(obj);
console.log("Group by data");
console.log(dataOutput);
