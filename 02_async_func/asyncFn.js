const axios = require('axios')

const fetchData = async(prefix) => {
  try {
    const result = await axios.get(`https://61d7bd9d35f71e0017c2ec0f.mockapi.io/${prefix}`)
    if(result.data === "Not Found") {
      throw new Error("fetch fail")
    }

    return result.data;
  } catch(error) {
    console.log(error)
  }
  
}

module.exports = fetchData