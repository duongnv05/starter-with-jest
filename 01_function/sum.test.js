var sum = require("./sum")

describe("matching", () => {
  it('test return fn sum', () => {
    let result = sum(1,2)
  
    expect(result).toBe(3)
    expect(result).toBeGreaterThan(1)
  })

  // to Equal
  it('compare object', () => {
    let a = {};
    let b = {};

    expect(a).toEqual(b)
  })
})

describe('handling string', () => {
  it('match I or not', () => {
    var str = "I am Duong";

    expect(str).toMatch(/I/);
  })
})

describe('handling with array', () => {
  const mobileMembers = [
    'Son', 'Nguyen', 'Duong', 'Phu', 'Hao'
  ];

  expect(mobileMembers).toContain('Duong');
})

function getSomethings() {
  throw new Error("error now");
}

describe('handling with throw', () => {
  it('test somethings', () => {
    expect(() => getSomethings()).toThrow(
      "error now"
    )
  })
})

it('handle with null', () => {
  let v = null;

  expect(v).toBe(null)
  expect(v).toBeNull()
  expect(v).toBeFalsy()
  expect(v).not.toBeTruthy()
  expect(v).not.toBeUndefined()
})

//- the same with undefined specify ""