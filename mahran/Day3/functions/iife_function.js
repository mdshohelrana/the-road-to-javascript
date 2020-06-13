//An Immediately Invoked Function Expressions (IIFE) is a function that is called directly after the function is loaded into the browser’s compiler

(() => console.log("Hello"))();

(function () {
  console.log("Bye Bye");
})();

//call, apply and bind

let user = {
  userName: "codingmonk",
  displayName: "rajesh",
  sendMessage: function (message) {
    console.log(`Sending ${message} to ${this.displayName}`);
  },
};

let student = {
  displayName: "rohan",
};
// usnig call()
user.sendMessage.call(student, "Hello from Rajesh");

//using apply()
user.sendMessage.apply(student, "[Hello from Rajesh again..]");

//using bind()

let sendMessageToStudent = user.sendMessage.bind(student);
