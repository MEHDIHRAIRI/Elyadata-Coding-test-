/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { loadEnv } from '../helpers/load-env'
loadEnv()
const environment = process.env as Record<string, string> 

const Config = {
  SERVER: {
    ENV: environment.NODE_ENV,
    PORT: environment.PORT || 4000,
  },
  DB: {
    CONNECTION_STRING: environment.DATABASE_CONNECTION_STRING,
  },
}

export const {
  SERVER,
  DB
} = Config