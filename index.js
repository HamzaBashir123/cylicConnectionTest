import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./User.js";





const app = express();
app.use(express.json())
dotenv.config()
const PORT = 8000;

// const Connect =() =>{
//     mongoose.connect(process.env.MONGOURL)
//     .then(()=>{
//         console.log("Database Connected")
//     })
//     .catch((err)=>{
//         throw err;
//     })

// }
const Connect = () => {
    mongoose
        .connect(process.env.MONGOURL)
        .then(() => {
            console.log('connected to DB');
        })
        .catch((err) => {
            throw err;
        });
};
// Middleware
app.get('/', (req, res) => {
            res.status(200).send(
                {
                    status: 'succes',
                    message: 'You are connected'
                }
            )
         })

    app.use("/signUp",async (req, res) =>{

        try {
            const newUser = new User({ ...req.body });
            await newUser.save();
            res.status(200).send("User has been created!");
          } catch (error) {
            console.log("Error");
          }


    })



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