const { newApp } = global;

newApp();

it('should be at home', () => {
  expect(document.title).toBe('Home');
});
