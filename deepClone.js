function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key = deepClone(obj[key]);
    }
  }

  return clonedObj;
}

const originalObject = { a: 1, b: { c: 2 } };
const deepClonedObject = deepClone(originalObject);

console.log(deepClonedObject); // { a: 1, b: { c: 2 } }
