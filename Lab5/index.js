const { config } = require('dotenv');
const express = require('express');
const path = require('path');
const app = express()
require('dotenv').config();
const PORT = process.env.PORT || 5000;  
 app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT, ()=>{
  console.log(`server work on port ${PORT}`)
})