describe('object literal', () => {
  const person = {
    name: 'rain',
    age: 36,

    get information() {
      return this.name + ', ' + this.age;
    },

    set information(information) {
      this.name = information.split(',')[0];
      this.age = information.split(',')[1];
    },
  };

  it('return information', () => {
    let information = person.information;
    expect(information).toEqual('rain, 36');
  });

  it('set name', () => {
    person.information = 'rhyno,35';
    expect(person.information).toEqual('rhyno, 35');
  });
});
