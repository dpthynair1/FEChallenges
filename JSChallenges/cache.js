const cache = new Map();
console.log(map);

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = args.slice().sort().join("_");
    console.log("Key:::::", key);
    // TO Avoid pitfall and for complex keys / data use Map

    // Sort arguments to ensure consistency
    // const sortedArgs = args.slice().sort();
    // const key = JSON.stringify(sortedArgs);

    // Generate key without sorting if order matters [! for subtraction where order matters avoid sorting]
    // const key = JSON.stringify(args);
    // if (map.has(key)) {
    //   console.log("From cache");
    //   return cache.get(key);
    // }
    // const result = fn(...args);
    // cache.set(key, result);
    // return result;
    // Without map
    if (cache[key]) {
      console.log("From cache");
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;

      return result;
    }
  };
}

const add = (a, b) => a + b;
const add_memo = memoize(add);
console.log(add_memo(1, 2));
console.log(add_memo(2, 1));
console.log(add_memo(1, 2));
console.log(add_memo(4, 2));
console.log(add_memo(2, 4));
