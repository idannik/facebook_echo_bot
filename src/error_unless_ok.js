module.exports = operationName => response => {
    
    if (response.statusCode !== 200) {
      throw new Error(`Operation "${operationName}" failed with status code ${response.statusCode}`)
    }
      
    return Promise.resolve(response)
  }