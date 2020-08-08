class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

//{}={} 의미는 해당 parameter가 없을 때는 empty{} object return
//if you want to pass the default value
//{ age, phone="111-1111", address } = {}

class User {
  constructor(name, { age, phone, address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user = new User("Bob", { age: 10, address: new Address("1", "Main") });
console.log(user);
