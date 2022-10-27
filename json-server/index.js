const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const secret = "EsUnSecreto"

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.use((req, res, next) => {

  console.log("HOLAAAAAA",req.headers);

  if(req.method === "POST" && req.path === "/auth") {
   next();
  } 
  else if (req.headers.authorization === `Bearer ${secret}`) {
    console.log('qqqqqq',req.headers);
  next();
  // }
  // else if(req.method === "GET" && req.path === "/products") {
  //   const datos = router.db.value()
  //   res.jsonp({
  //     products: datos
  //   })
  } else {
  res.sendStatus(401)
  }
 })


server.post('/auth', (req, res) => {
  if (
    req.body.email === 'maria@gmail.com' &&
    req.body.password === '123456') {
        console.log('hey',req.body)
    res.jsonp({
      token: secret
    })
  } else res.status(400).send('Bad Request')
})

server.post("/orders", (req,res)=>{
  console.log('object')
  if(!!req.headers){
    console.log('a')
    const orders = router.db.get('orders');
    //console.log('jj',orders.__wrapped__.orders.length)
    const order = {
      _id: orders.__wrapped__.orders.length + 1,
      userId: req.body.userId,
      client: req.body.client,
      products: req.body.products,
      status: 'pending',
      dateEntry: new Date().toLocaleString(),
      dateProcessed:''
    }
    //const orders = router.db.get('orders');
    orders.push(order).write();
    res.status(200).jsonp(order)
  } else res.status(400).send('Bad Request 3')
})
// server.get("/products",(req,res)=>{
//   console.log('header',req.headers)
//   console.log('hey',!!req.headers)
//   if (!!req.headers) {
//         console.log('hey',req.headers.link)
//         const datos = router.db.value()    
//         res.jsonp({
//           products: datos
//         })
//   } else res.status(401).send('No hay cabeceras')
// })

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})

// const datos = router.db.value()
// // console.log('aqui', datos.user)
// console.log('aqui', datos.products)