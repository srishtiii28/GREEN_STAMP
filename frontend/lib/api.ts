import axios from 'axios'

const API_URL = 'http://localhost:8001'

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 30000,
})

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('API Error:', error.response.data)
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up request:', error.message)
    }
    return Promise.reject(error)
  }
)

export const analyzeReport = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  try {
    console.log('Sending request to:', API_URL + '/analyze')
    const response = await api.post('/analyze', formData)
    console.log('Response received:', response.data)
    return response.data
  } catch (error: any) {
    console.error('API Error Details:', error)
    
    if (error.response) {
      console.error('Response status:', error.response.status)
      console.error('Response data:', error.response.data)
      throw new Error(`Server error: ${error.response.data}`)
    } else if (error.request) {
      console.error('Request configuration:', error.config)
      console.error('Request headers:', error.config.headers)
      console.error('Request URL:', error.config.url)
      throw new Error(`No response received from server. URL: ${error.config.url}`)
    } else {
      console.error('Error setting up request:', error.message)
      throw new Error('Error setting up request')
    }
  }
}
