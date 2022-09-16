const environment = process.env as Record<string, string> 

const Config = {
  SERVER: {
    ENV: environment.NODE_ENV,
    PORT: environment.PORT || 3000,
  },
  DB: {
    CONNECTION_STRING: environment.DATABASE_CONNECTION_STRING,
  },
}

export const {
  SERVER,
  DB
} = Config