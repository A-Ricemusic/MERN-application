const express = require('express');
const cors = require('cors');
const { app } = express();

require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
console.log(`server started on port: ${port}`)
});