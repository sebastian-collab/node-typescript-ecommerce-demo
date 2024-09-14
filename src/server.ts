import app from './app';
import connectDB from './config/db';
import dotenv from 'dotenv';

//database section
connectDB(); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
