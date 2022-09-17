import bodyParser from 'body-parser'
import cors from 'cors'
import express, { Application } from 'express'
import { connectToDatabase } from './helpers/connect-to-database'
import { SERVER } from './configs/config'
import { v1Router } from './routes/v1/routes'

const app: Application = express()

// Middlewares
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

// Routes
app.use('/v1', v1Router)

connectToDatabase().then(async () => {
  const PORT = SERVER.PORT
  app.listen(PORT, async () => {
    console.info(`Listening on ${PORT}`)
  })
})