export const modulePattern = () => {
  const privateFoo = () => console.log("private foo");
  const privateBar = [];

  const exported = {
    publicFoo: () => {
      return 'public foo';
    },
    publicBar: ['b', 'a', 'r']
  };

  return exported;
};
