import {Person, Person2, PersonWithMiddleName} from '../../libs/ch1/person';

describe('es6 class', () => {
  describe('before es6', () => {
    describe('getFullName', () => {
      it('concat name and surname', () => {
        const person = new Person('rhyno', 'park', 35);
        expect(person.getFullName()).toEqual('rhyno park');
      });
    });

    describe('older as static method', () => {
      it('return older person', () => {
        const youngerPerson = new Person('younger', 'park', 10);
        const olderPerson = new Person('older', 'kim', 30);
        const result = Person.older(youngerPerson, olderPerson);
        expect(result).toEqual(olderPerson);
      });
    });
  });

  describe('es6', () => {
    describe('getFullName', () => {
      it('concat name and surname', () => {
        const person = new Person2('rhyno', 'park', 35);
        expect(person.getFullName()).toEqual('rhyno park');
      });
    });

    describe('older as static method', () => {
      it('return older person', () => {
        const youngerPerson = new Person2('younger', 'park', 10);
        const olderPerson = new Person2('older', 'kim', 30);
        const result = Person2.older(youngerPerson, olderPerson);
        expect(result).toEqual(olderPerson);
      });
    });

    describe('extends super class', () => {
      describe('PersonWithMiddleName', () => {
        it('getFullName include middleName', () => {
          let rain = new PersonWithMiddleName('rain', 'ragu', 'byun', 35);
          expect(rain.getFullName()).toEqual('rain ragu byun');
        });
      });
    });
  });
});
