class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

const user = new User("Bob");
console.log(user);

//만약 이렇게 parameter를 넘겨 줄 경우 다른 사람들은 각 자리가
//무슨 값을 의미하는지 알기가 어려움
const user1 = new User("Bob", undefined, undefined, new Address("1", "Main"));
console.log(user1);
