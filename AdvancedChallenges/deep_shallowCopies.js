// Shallow copies
const originalObject = {
  firstName: "ambroise",
  lastName: "muhayimana",
  address: {
    city: "kigali",
    country: "Rwanda",
  },
};

// in shallow copies the copies objects will affect the original objects(we use assign function to make shallow copies)
// const shallowCopy = Object.assign({}, originalObject);

// shallowCopy.address.city = "nyagatare";
// console.log(shallowCopy.address.city);
// console.log(originalObject.address.city);

//The change in copied does not affect the changes in of original objects

const deepCopy = JSON.parse(JSON.stringify(originalObject));
deepCopy.address.city = "mukayanza";
console.log(deepCopy.address.city);
console.log(originalObject.address.city);


