const Koa = require('koa')
const Router = require('koa-router')
const axios = require('axios')

const app = new Koa()
const router = new Router()

router.get('/', async (ctx, next) => {
  // Fetch CryptoKitty
  const kittyId = 116
  const url = `https://public.api.cryptokitties.co/v1/kitties/${kittyId}`
  const kittyJson = await axios.get(url, {
    headers: {
      'x-api-token': 'YOUR-CRYPTOKITTIES-API-KEY'
    }
  })

  // Respond with CryptoKitty data
  ctx.body = kittyJson.data
})

router.post('/example', (ctx, next) => {
  // Do something...

  // Set response
  ctx.body = {
    status: 'hello poster'
  }
})

const port = 4000
app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(port)