import express from 'express' 
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'

const PORT = 7990

const app = express()
app.use(cors(), express.json())

app.listen({port: PORT}, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
});