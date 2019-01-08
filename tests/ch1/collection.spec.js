describe('WeakMap', () => {
  const weakMap = new WeakMap();
  let obj = { id: 'test-id' };
  weakMap.set(obj, { key : 'test-key' });

  it('has key with only object', () => {
    expect(weakMap.get(obj)).toEqual({ key: 'test-key' });
  });

  it('gc when obj reference is only contain weakMap', () => {
    obj = undefined;
    expect(weakMap.has(obj)).toBeFalsy();
  });

});
