// const express = require('express');
// var cors = require('cors')
// const app = express();
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');

// dotenv.config();
// app.use(cors());
// mongoose.connect(process.env.DB_CONNECT,
// {useNewUrlParser:true},
// ()=>console.log('Connected to db'))

// const authRoute=require('./routes/auth');
// const rankRoute=require('./routes/rank');
// app.use(express.json());

// app.use('/api/user',authRoute);
// app.use('/api/rank',rankRoute);
// app.listen(process.env.PORT,()=>console.log('Up and Running'));
// // app.listen(5000, ()=>console.log('Up and Running'));






// const express = require('express');
// const cors = require('cors');
// const app = express();
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');

// // Load environment variables from .env file
// dotenv.config();

// // Enable CORS for cross-origin requests
// app.use(cors());

// // Connect to MongoDB using the connection string from .env
// mongoose.connect(
//   process.env.DB_CONNECT,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => console.log('Connected to db')
// );

// // Import routes
// const authRoute = require('./routes/auth');
// const rankRoute = require('./routes/rank');

// // Middleware to parse JSON
// app.use(express.json());

// // Route middlewares
// app.use('/api/user', authRoute);
// app.use('/api/rank', rankRoute);

// // Start the server
// app.listen(process.env.PORT, () => console.log('Up and Running'));





const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.config();

// Enable CORS for cross-origin requests
app.use(cors());

// Connect to MongoDB using async/await
async function connectDB() {
  try {
    // await mongoose.connect(process.env.DB_CONNECT, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    await mongoose.connect(process.env.DB_CONNECT);
    console.log('Connected to db');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit process if connection fails
  }
}

connectDB();

// Import routes
const authRoute = require('./routes/auth');
const rankRoute = require('./routes/rank');

// Middleware to parse JSON
app.use(express.json());

// Route middlewares
app.use('/api/user', authRoute);
app.use('/api/rank', rankRoute);

// Start the server
app.listen(process.env.PORT, () => console.log('Up and Running'));
