require('dotenv').config();
const express =  require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');

// require('notenv').config();
const app = express();

const userRouter = require('./Router/UserRouter.js');
const productRouter = require('./Router/Products.js');
const cartRouter = require('./Router/CartRouter.js')
// const productRouter = require('./Router/Products.js');


// const corsOptions = {
//     originL:"http://localhost:5173",
//     methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
//     Credential:true
//   }


// Middleware
// app.use(express.static(path.resolve(_dirname,'dist')))
app.use(express.static(path.resolve(__dirname,'dist')))
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/auth' , userRouter.router);
app.use('/api/product' , productRouter.router);

// cart Router
app.use('/api/cart',cartRouter.router)

app.get('/',async (req,res)=>{

    try {
        res.status(200).json({msg:"I am in home route"})
    } catch(err){
     res.status(500).json({msg:"Error in home route"})

        
    }
    

});


main().catch(err => console.log(err));

async function main(){
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Data base connected");

}

app.listen(process.env.PORT,()=>{
    console.log("server started");
})
