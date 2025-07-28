import express from 'express'
import cors from 'cors'
import { router } from './routes/contact.routes.js'

const app = express();

app.use(cors())
app.use(express.json());
app.use('/api/contacts', router);

export { app }
