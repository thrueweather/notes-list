const {Nuxt, Builder} = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()

app.use(bodyParser.json())

app.use(session({
  secret: 'notes-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 86400000 } // day
}))

app.put('/api/notes', (req, res) => {
  req.session.notes = req.body.notes
  res.json(req.session.notes)
})

const isProd = process.env.NODE_ENV === 'production'
let config = require('./nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)
// No build in production
const promise = (isProd ? Promise.resolve() : new Builder(nuxt).build())
promise.then(() => {
  app.use(nuxt.render)
  app.listen(3000)
  console.log('Server is listening on http://localhost:3000') 
})
.catch((error) => {
  console.error(error) 
  process.exit(1)
})