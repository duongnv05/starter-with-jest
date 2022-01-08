const fetchData = require('./asyncFn');

it('response length > 0', async() => {
  const result = await fetchData("mobile-members")

  expect(result.length).toBeGreaterThan(0)
})

//- throw

it('expect throw error', async() => {
  try {
    await fetchData('members');

  } catch(error){
    expect(() => fetchData('members')).toThrow("fetch fail");
  }
})