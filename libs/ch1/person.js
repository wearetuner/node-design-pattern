export function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}

Person.prototype.getFullName = function () {
  return this.name + ' ' + this.surname;
};

Person.older = function (person1, person2) {
  return (person1.age >= person2.age) ? person1 : person2;
};

export class Person2 {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  getFullName() {
    return this.name + ' ' + this.surname;
  }

  static older(person1, person2) {
    return (person1.age >= person2.age) ? person1 : person2;
  }
}

export class PersonWithMiddleName extends Person2 {
  constructor(name, middleName, surname, age) {
    super(name, surname, age);
    this.middlename = middleName;
  }

  getFullName() {
    return this.name + ' ' + this.middlename + ' ' + this.surname;
  }
}
