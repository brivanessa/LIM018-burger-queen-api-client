import axios from 'axios'

//const BASE_URL = "http://localhost:3001" //MOCK API
const BASE_URL ="https://bqapi.fakel.lol" //API
const authPath = "/auth"
const productsGetPath = "/products"
const ordersPostPath = "/orders"

const ordersPostPath1 = "/orders?limit=100"


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
    return axios.get(`${BASE_URL}${ordersPostPath1}`, {
        headers: {
            'authorization':`Bearer ${token}` 
        }})
}

// WAITER
// CAMBIANDO DE DELIVERING (PREPARADOS) A DELIVERED (ENTREGADOS)
export const orderPut = async (token, id) => {
    const user = await axios.get(`${BASE_URL}${ordersPostPath}/`+id, {
                    headers: {
                        'authorization':`Bearer ${token}` 
                    }})
                    .then(r => {
                        return(r.data)
                    })
                    .catch(err=>console.log('error',err))
    const status = {
        userId: user.userId,
        client: user.client,
        products: user.products,
        status: "delivered",
        dateEntry: user.dateEntry,
        dateProcessed: new Date().toLocaleString(),
    }
    return axios.put(`${BASE_URL}${ordersPostPath}/`+id, status,
        {headers: {
            'authorization':`Bearer ${token}` 
        }},
    )
}

// WAITER
// CAMBIANDO DE DELIVERED (ENTREGADOS) A DELIVERING (PREPARADOS) 
export const orderPutReverse = async(token, id) => {
    const user = await axios.get(`${BASE_URL}${ordersPostPath}/`+id, {
        headers: {
            'authorization':`Bearer ${token}` 
        }})
        .then(r => {
            return(r.data)
        })
        .catch(err=>console.log('error',err))
    const status = {
        userId: user.userId,
        client: user.client,
        products: user.products,
        status: "delivering",
        dateEntry: user.dateEntry,
        dateProcessed: null,

    }
    return axios.put(`${BASE_URL}${ordersPostPath}/`+id, status,
        {headers: {
            'authorization':`Bearer ${token}` 
        }},
    )
}

// CHEF
// CAMBIANDO DE DELIVERING (PREPARADOS) A PENDING (PENDIENTE)
export const orderPutChefReverse = async(token, id) => {
    const user = await axios.get(`${BASE_URL}${ordersPostPath}/`+id, {
        headers: {
            'authorization':`Bearer ${token}` 
        }})
        .then(r => {
            return(r.data)
        })
        .catch(err=>console.log('error',err))
    const status = {
        userId: user.userId,
        client: user.client.split('-')[0]+'-'+user.client.split('-')[1],
        products: user.products,
        status: "pending",
        dateEntry: user.dateEntry,
        dateProcessed: null
    }
    return axios.put(`${BASE_URL}${ordersPostPath}/`+id, status,
        {headers: {
            'authorization':`Bearer ${token}` 
        }},
    )
}

// CHEF
// CAMBIANDO DE PENDING (PENDIENTE) A DELIVERING (PREPARADOS) 
export const orderPutChef = async(token, id) => {
    const user = await axios.get(`${BASE_URL}${ordersPostPath}/`+id, {
        headers: {
            'authorization':`Bearer ${token}` 
        }})
        .then(r => {
            return(r.data)
        })
        .catch(err=>console.log('error',err))
    const status = {
        userId: user.userId,
        client: user.client+`-${new Date().toLocaleString()}`,
        products: user.products,
        status: 'delivering',
        // dateProcessed: `delivering - ${new Date().toLocaleString()}`,
        //dateDelivering: new Date().toLocaleString(),
    }
    return axios.put(`${BASE_URL}${ordersPostPath}/`+id, status,
        {headers: {
            'authorization':`Bearer ${token}` 
        }},
    )
}

//WAITER: ELIMINAR -de PENDING A CANCELLED
export const orderDelete = async (token, id) => {
    const user = await axios.get(`${BASE_URL}${ordersPostPath}/`+id, {
        headers: {
            'authorization':`Bearer ${token}` 
        }})
        .then(r => {
            return(r.data)
        })
        .catch(err=>console.log('error',err))
    const status = {
        userId: user.userId,
        client: user.client,
        products: user.products,
        status: "canceled",
        dateEntry: user.dateEntry,
        dateProcessed: "",
        dateDelivering: new Date().toLocaleString(),
    }
    return axios.put(`${BASE_URL}${ordersPostPath}/`+id, status,
        {headers: {
            'authorization':`Bearer ${token}` 
        }},
    )

}
