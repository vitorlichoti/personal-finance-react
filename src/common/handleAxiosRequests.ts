import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function axiosHandler(url: string, method: string, data?: any, id?: string){
  
  try {
    // eslint-disable-next-line prefer-const
    let baseURL = "https://staging-api-personal-finance-2nfwtff25a-uc.a.run.app" + url
  
    const token = localStorage.getItem('token')
  
    if (id) {
      url = baseURL + id
    }

    axios.defaults.headers.common['user_token'] = token
  
    const request = await axios({
      method: method,
      url: baseURL,
      data
    })

    const response = await request.data
  
    return response
  } catch (error) {
    if (error instanceof Error) {
      console.log(error)
    }
  }
  
}

export default axiosHandler