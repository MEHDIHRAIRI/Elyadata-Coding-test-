import mongoose from 'mongoose'
import { DB } from '../configs/config'

export function connectToDatabase() {
  const connectionString = DB.CONNECTION_STRING
  if (!connectionString)
    throw new Error(
      'connectToDatabase => DATABASE_CONNECTION_STRING is undefined'
    )

  return mongoose
    .connect(connectionString)
    .then(() => console.info('connected to database'))
    .catch((error) => {
      console.error('connectToDatabase Error =>', error)
    })
}
