let user = {
    name: "John",
    surname: "Smith",
    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};
// set fullName is executed with the given value.
user.fullName = "Alice Cooper";
console.log(user.name); // Alice
console.log(user.surname); // Cooper

let user1 = {
    name: "John",
    surname: "Smith"
};
Object.defineProperty(user1, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },
    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});
console.log(user1.fullName); // John Smith
for (let key in user1) console.log(key); // name, surname

let user2 = {
    get name() {
        return this._name;
    },
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short, need at least 4 characters");
            return;
        }
        this._name = value;
    }
};

user2.name = "Pete";
console.log(user2.name); // Pete
user2.name = ""; // Name is too short...

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}
let john = new User("John", new Date(1992, 6, 1));
console.log(john.birthday); // birthday is available
console.log(john.age);      // ...as well as the age