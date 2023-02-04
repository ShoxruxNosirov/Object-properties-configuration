let user = {
    name: "John"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert(JSON.stringify(descriptor, null, 2));
/* property descriptor:
{
"value": "John",
"writable": true,
"enumerable": true,
"configurable": true
}
*/

user = {};

Object.defineProperty(user, "name", {
    value: "John"
});
descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert(JSON.stringify(descriptor, null, 2));
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

user = {
    name: "John"
};
Object.defineProperty(user, "name", {
    writable: false
});
// user.name = "Pete"; // Error

user = {};
Object.defineProperty(user, "name", {
    value: "John",
    enumerable: true,
    configurable: true
});
alert(user.name); // John
// user.name = "Pete"; // Error


let user = {
    name: "John",
    toString1() {
        return this.name;
    },
    toString2() {
        return this.name;
    }
};

Object.defineProperty(user, "toString1", {
    enumerable: false
});

// Now our toString disappears:
for (let key in user) alert(key); // name, toString2

descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
alert(JSON.stringify(descriptor, null, 2));
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/
// Math.PI = 3; // Error
// Object.defineProperty(Math, "PI", { writable: true });   // Error, because of configurable: false

user = {
    name: "John"
};

Object.defineProperty(user, "name", {
    configurable: false
});

user.name = "Pete"; // works fine
// delete user.name; // Error

user = {
    name: "John"
  };
  Object.defineProperty(user, "name", {
    writable: false,
    configurable: false
  });
  
  //    won't be able to change user.name or its flags
  //    all this won't work:
  // user.name = "Pete";
  // delete user.name;
  // Object.defineProperty(user, "name", { value: "Pete" });

  let user1;
  Object.defineProperties(user1, {
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
    // ...
  });
  let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user1));