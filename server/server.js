import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';


//config dotenv
dotenv.config();

connectDB(); // connect to MongoDB
const app = express();  

// middleware
app.use(morgan('dev'));
app.use(express.json()); // logging middleware
app.use(cors()); // enable CORS


//routes and imports
import testRoute from './routes/testroute.js';
import userRoute from './routes/userRoute.js';
app.use('/api/v1', testRoute); // test route
app.use('/api/v1/user',userRoute)
app.get('', (req, res) => {
  res.send('Hello World!fsjkhsk');
}   );

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});