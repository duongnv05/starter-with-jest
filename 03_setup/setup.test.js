let mobileMember = ['Son', 'Nguyen', 'Phu', 'Hao']

describe('work on mobileMember', () => {
  beforeEach(() => {
    console.log("BEFORE ALL: ");
    mobileMember = ['Son', 'Nguyen', 'Phu', 'Hao']
  })
  it('push', () => {
    mobileMember.push('Duong');

    expect(mobileMember[mobileMember.length - 1]).toBe('Duong')
  })

  it('unshift', () => {
    mobileMember.unshift('Duong')

    expect(mobileMember[mobileMember.length - 1]).toBe('Hao')
  })

  it('get length team before', () => {
    expect(mobileMember.length).toBe(4)
  })

  it('get length team after', () => {
    mobileMember.push('Duong');
    expect(mobileMember.length).toBe(5)
  })
})


//- error --> beforeEach not effect (beforeEach into another describe)
it('get length original team --> error --> beforeEach not effect (beforeEach into another describe)', () => {
  // mobileMember.push('Duong');
  expect(mobileMember.length).toBe(4)
})