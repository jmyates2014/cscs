const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to mongoDB
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'You have reached the CSCS Api.' }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/snippets', require('./routes/snippets'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
