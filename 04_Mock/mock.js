const axios = require('axios')

const fetchDetail = async(id) => {
  const result = await axios.get(`https://61d7bd9d35f71e0017c2ec0f.mockapi.io/mobile-members/${id}`)

  return result.data
}

module.exports = fetchDetail