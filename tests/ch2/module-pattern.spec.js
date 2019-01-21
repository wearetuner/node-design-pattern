import { modulePattern } from '../../libs/ch2/module-pattern';

describe('Module pattern', () => {
  it('expose only exported object', () => {
    const { privateFoo, privateBar, publicFoo, publicBar } = modulePattern();

    expect(privateFoo).toEqual(undefined);
    expect(privateBar).toEqual(undefined);
    expect(publicFoo()).toEqual('public foo');
    expect(publicBar).toEqual(['b', 'a', 'r']);
  });
});
