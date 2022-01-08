const fetchDetail = require('./mock');
const axios = require('axios')

it('response data reality', async() => {
  const result = await fetchDetail(1)

  expect(result.id).toBe("1")
  expect(result.name).toBe("name 1")
})

it('response data mock', async() => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: "duongnv",
      name: "Duong"
    }
  })

  const result = await fetchDetail(1)

  expect(result.id).toBe("duongnv")
  expect(result.name).toBe("Duong")
})

describe('mock function', () => {
  function forEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
      callback(array[i])
    }
  }

  it('mock function testing', () => {
    const array = [1, 2, 4, 5]

    const mockFn = jest.fn(x => 95 + x)

    forEach(array, mockFn);

    //- calls is array of input parameters
    // incase mock.calls = [[1], [2], [3], [4]]
    console.log(mockFn.mock.calls)
    expect(mockFn.mock.calls.length).toBe(4)
    expect(mockFn.mock.calls[0][0]).toBe(1)
    expect(mockFn.mock.calls[1][0]).toBe(2)
    expect(mockFn.mock.calls[3][0]).toBe(5)

    //-- result of mockFn
    expect(mockFn.mock.results[0].value).toBe(96)
    expect(mockFn.mock.results[1].value).toBe(97)
    expect(mockFn.mock.results[2].value).toBe(99)
    expect(mockFn.mock.results[3].value).toBe(100)
  })

  it('mock return --> mockReturnValueOnce', () => {
    const mock = jest.fn()

    mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce(false)

    const result1 = mock()
    const result2 = mock()
    const result3 = mock()

    expect(result1).toBe(true)
    expect(result2).toBe(false)
    expect(result3).toBe(false)
  })
})