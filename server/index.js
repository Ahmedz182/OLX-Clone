const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT;

const dbConfig = require("./config/dbConfig")
const auth = require("./route/Auth")
const item = require("./route/Item")
const cors = require('cors');
app.use(cors());
app.use(express.json())
// app.use('/api/portfolio', item);
// app.use('/api/Auth', auth);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)

})