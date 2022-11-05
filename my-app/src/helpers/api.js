import axios from 'axios'

const BASE_URL = "http://localhost:3001" //MOCK API
//const BASE_URL ="https://bqapi.fakel.lol" -API
const authPath = "/auth"
const productsGetPath = "/products"
const ordersPostPath = "/orders"

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

export const orderPost = (token, saveOrder) => {
    console.log('saveOrder',saveOrder)
    return axios.post(`${BASE_URL}${ordersPostPath}`, saveOrder,
        {headers: {
            'authorization':`Bearer ${token}` 
        }},
    )
}

export const ordersGet = (token) => {
    return axios.get(`${BASE_URL}${ordersPostPath}`, {
        headers: {
            'authorization':`Bearer ${token}` 
        }})
}

export const orderPut = async (token, id) => {
    const user = await axios.get(`${BASE_URL}${ordersPostPath}/:`+id, {
        headers: {
            'authorization':`Bearer ${token}` 
        }}).then(r => {
            console.log('hola')
            console.log(r.data)
            return(r.data)
        }).catch(err=>console.log('error',err))
   console.log(id);
   console.log(`${BASE_URL}${ordersPostPath}/:`+id);
   console.log(user);
    const status = {
        userId: user.userId,
        client: user.client,
        products: user.products,
        status: "delivered",
        dateEntry: user.dateEntry,
        dateProcessed: user.dateProcessed
    }
    return axios.put(`${BASE_URL}${ordersPostPath}/`+id, status,
        {headers: {
            'authorization':`Bearer ${token}` 
        }},
    )
}


// export const orderPut = (token, id) => {    
//     const status = {
//         status: "delivered",
//         dateProcessed: new Date().toLocaleString(),

//     }
//     return axios.patch(`${BASE_URL}${ordersPostPath}/`+id, status,
//         {headers: {
//             'authorization':`Bearer ${token}` 
//         }},
//     )
// }

export const orderPutReverse = (token, id) => {
    // let user = axios.get(`${BASE_URL}${ordersPostPath}/:`+id).then(r => console.log(r.data))
    
    const status = {

        // userId: user.userId,
        // client: user.client,
        // products: user.products,
        //status: "delivered",
        // dateEntry: user.dateEntry,
        // dateProcessed: user.dateProcessed


        //  userId: id.userId,
        //  client: id.client,
        //  products: id.products,
        status: "delivering",
        dateProcessed: "",

    }
    return axios.patch(`${BASE_URL}${ordersPostPath}/`+id, status,
        {headers: {
            'authorization':`Bearer ${token}` 
        }},
    )
}

export const orderPutChef = (token, id) => {
    // let user = axios.get(`${BASE_URL}${ordersPostPath}/:`+id).then(r => console.log(r.data))
    
    const status = {

        // userId: user.userId,
        // client: user.client,
        // products: user.products,
        //status: "delivered",
        // dateEntry: user.dateEntry,
        // dateProcessed: user.dateProcessed


        //  userId: id.userId,
        //  client: id.client,
        //  products: id.products,
        status: "pending",
        dateProcessed: new Date().toLocaleString(),

    }
    return axios.patch(`${BASE_URL}${ordersPostPath}/`+id, status,
        {headers: {
            'authorization':`Bearer ${token}` 
        }},
    )
}