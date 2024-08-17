// Input

const a = [1, 2, 3, [4, [5, 6]], 7, 8];

const b = [1, 2, 3, { key: "data1" }, [4, [5, 6]], 7, 8];

//First Input
// function flattenArray(a, flattenArr) {
//   for (let i = 0; i < a.length; i++) {
//     if (typeof a[i] === "number") {
//       flattenArr.push(a[i]);
//     } else {
//       flattenArray(a[i], flattenArr);
//     }
//   }

//   return flattenArr;
// }

// console.log(flattenArray(a, []));

//Second Input

function flattenAnyArray(b, flattenArr) {
  for (let i = 0; i < b.length; i++) {
    if (Array.isArray(b[i])) {
      flattenAnyArray(b[i], flattenArr);
    } else {
      flattenArr.push(b[i]);
    }
  }

  return flattenArr;
}
console.log(flattenAnyArray(b, []));
