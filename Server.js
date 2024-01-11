const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/routes');
const mailer = require('./mails/mails');
require('dotenv').config();
const app = express();
const port = 5000;

app.use(express.json())
app.use(cors());
mailer();
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
})
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(router)

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});