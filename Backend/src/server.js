import { app } from '../src/app.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
