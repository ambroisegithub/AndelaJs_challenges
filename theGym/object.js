// object in javascript

const person = {
    isHuman: false,
    Production: function functionName() {
      console.log(
        `Hello i sure my name is ${this.name} and ${this.isHuman}ly  i'am a human.`
      );
    },
  };
  
  const me = Object.create(person);
  me.name = "ambroise";
  me.isHuman = true;
  me.Production();
  
  
  