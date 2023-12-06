import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";






const app = express();
dotenv.config()
const PORT = 8000;

const Connect =() =>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Database Connected")
    })
    .catch((err)=>{
        throw err;
    })

}
// Middleware
app.get('/', (req, res) => {
            res.status(200).send(
                {
                    status: 'succes',
                    message: 'You are connected'
                }
            )
         })


app.use(express.json())

// app.use((err, req, res, next)=>{
//     const status = err.status || 500;
//     const message = err.message || "Something went wrong!";
//     return res.status(status).json({
//         success : false,
//         status,
//         message,
//     })

// })

app.listen(PORT,()=>{
    console.log("Connect to Server!")
    Connect();
})