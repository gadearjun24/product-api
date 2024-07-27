const {mongoose , Schema} = require('mongoose');

// mongoose connection

async function mongooseConnection() {
    await mongoose.connect(process.env.MONGODB_URL).then(()=>
    {
        console.log("mongodb connected");
    }).catch((err)=>
    {
        console.log("error : " ,{err});
    })
}

mongooseConnection();


// mongoose schema

const productSchema = new Schema({

   
title : {type : String},
description : {type : String},
category : {type :String},
price : {type : Number},
discountPercentage : {type : Number},
rating : {type : Number}
});

const Product = mongoose.model('Product' , productSchema);


exports.Product = Product;

