const obj = {
    name: 'John',
    greetArrow: () => {
      console.log(`Hello, ${this.name}`); // 'this' is lexically captured from the surrounding context
    },
    greetRegular: function() {
      console.log(`Hello, ${this.name}`); // 'this' is determined by how the function is called
    }
  };
  
  const arrowGreet = obj.greetArrow;
  const regularGreet = obj.greetRegular;
  
  arrowGreet(); // Output: Hello, undefined (lexical 'this' refers to the global object)
  regularGreet(); // Output: Hello, John (this' is the 'obj' object)
  