import axios from 'axios'

const BASE_URL = "http://localhost:3001"
const authPath = "/auth"
const productsGetPath = "/products"

export const auth = (email,password) => {
     console.log(email)
    console.log(password)
    console.log(`${BASE_URL}${authPath}`)
    console.log(axios.post(`${BASE_URL}${authPath}`,{email,password})) // le envias email y passw pero en las otras peticiones el header creo o token 
    return axios.post(`${BASE_URL}${authPath}`,{email,password})
}

export const productsGet = (token) => {
    return axios.get(`${BASE_URL}${productsGetPath}`, {
        headers: {
            'authorization':`Bearer ${token}` 
        }})
}

// export const productsGet = (token) => {
//     console.log(`${BASE_URL}${productsGetPath}`)
//     if(token==="EsUnSecreto"){
//     return axios.get(`${BASE_URL}${productsGetPath}`)
// }
// }
