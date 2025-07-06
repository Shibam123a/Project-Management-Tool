require('dotenv').config();
console.log('MONGO_URI:', process.env.MONGO_URI); // Debugging line

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
