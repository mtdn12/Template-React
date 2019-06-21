// import apiClient from '.'

const getGlobalData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        result: 'success',
        item: {
          configs: [],
          themes: {
            mainColor: 'blue',
          },
        },
      })
    }, 1000)
  })
}

// Get data with apiClient
// const getGlobalData = () => apiClient.get('/global')

export const GlobalService = {
  getGlobalData,
}
