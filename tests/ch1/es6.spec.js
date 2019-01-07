describe('es6', () => {
    describe('let', () => {
        it('return undefined when access other code block', () => {
            if (false) {
                var x = "not undefined";
            }
            expect(x).toEqual(undefined);
        });

        it('throw error when access let keyword', () => {
            try {
                if (false) {
                    let x = "hello";
                }
                console.log(x);
            } catch (err) {
                expect(true).toEqual(true);
            }
        });
    });

    describe('const', () => {
        it('throw error when assigned value is changed as scalar value', () => {
            try {
                const x = 10;
                x = 5;
            } catch (err) {
                expect(true).toEqual(true);
            }
        });

        it('not throw error when object is not changed binding', () => {
            const obj = {
                name: 'test-name',
                value: 'test-value',
            };

            obj.name = 'reassigned-test-name';
            expect(obj.name).toEqual('reassigned-test-name');

            try {
                obj = {
                    name: 'new-test-name',
                    value: 'new-test-value',
                }
            } catch (err) {
                expect(true).toEqual(true);
            }
        });
    });

    describe('arrow function', () => {
        it('return this is parent scope', async (done) => {
            function DelayedGreeter(name) {
                this.name = name;
            }

            DelayedGreeter.prototype.greet = function(resolve) {
              setTimeout(() => {
                  let message = 'Hello ' + this.name;
                  console.log(message);
                  resolve(message)
              }, 500);
            };

            const greeter = new DelayedGreeter('rhyno');
            new Promise(resolve => {
                greeter.greet(resolve);
            }).then(result => {
                expect(result).toEqual('Hello rhyno');
                done();
            })

            // const result = await greeter.greet();
            // console.log(result);
            // expect(result).toEqual('Hello rhyno');
        });
    });
});