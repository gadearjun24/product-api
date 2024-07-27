const express = require('express');
require('dotenv').config();
const productRouter = require('./router/products');
const cors = require('cors');


const server = express();
// middleware
server.use(cors());
server.use(express.json());
server.use("/products/" , productRouter.router);


// connecting server

server.listen(process.env.PORT || 8080 , ()=>
{
    console.log(`Server is running on ${process.env.PORT}`);
});
