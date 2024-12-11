const express =  require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use("/api/products", productRoute);


app.get('/', (req, res)=>{
    res.send("Hello From Node API Giggity");
});




mongoose.connect("mongodb+srv://mohanrajib21:d0hpiGXVR7dN9Dpv@backenddb.iqt1b.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("Connected to DB");
    app.listen(3000, ()=>{
        console.log("Server is running on localhost 3000");
    });
})
.catch(()=>{
    console.log("Connection Failed");
});
















// app.get('/api/products', async(req, res)=>{
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json(error.message);
//     }
// });

// app.get('/api/products/:id', async(req, res)=>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);

//     } catch (error) {
//         res.status(500).json(error.message);
//     }
// });

// app.post('/api/products',async (req, res)=>{
//     // res.send("Data recieved");
//     // console.log(req.body);
//     // res.send(req.body);

//     try{
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     }
//     catch(error)
//     {
//         res.status(500).json({message: error.message})
//     }
// });

// app.put('/api/products/:id', async (req, res)=>{

//     try {

//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
        
//         if(!product){ res.status(404).json({message:"Product Not Found"});}

//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);

//     } catch (error) {
//         res.status(500).json(error.message);
//     }
// })

// app.delete('/api/products/:id',async(req, res)=>{
//     try {
        
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);

//         if(!product){
//             return res.status(404).json({message:"Product not Found"});
//         }

//         res.status(200).json({message: "Product Deleted Successfully"});

//     } catch (error) {
//         res.status(500).json(error.message);
//     }
// })