import axios from 'axios'

const BASE_URL = "http://localhost:3001"

const authPath = "/auth"

export const auth = (email,password) => {
     console.log(email)
    console.log(password)
    console.log(`${BASE_URL}${authPath}`)
    console.log(axios.post(`${BASE_URL}${authPath}`,{email,password}))
    return axios.post(`${BASE_URL}${authPath}`,{email,password})
}