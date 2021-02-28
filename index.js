const express = require('express');
const dotenv = require('dotenv');

const app = express();

//Load the env path
dotenv.config({ path:'./config/config.env' })


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`App listening in ${process.env.NODE_ENV} on port ${PORT}`);
});