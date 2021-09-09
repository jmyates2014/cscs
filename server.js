const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'You have reached the CSCS Api.' }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
