const productSchema = require('../model/products');
const Product = productSchema.Product;

exports.getAllProducts = async (req , res)=>
{
    const products = await Product.find({});
    res.json(products);
}

exports.createNewProduct = async (req , res)=>
{
    const newProduct = new Product(req.body);
    res.json(newProduct);
    newProduct.save();
}

