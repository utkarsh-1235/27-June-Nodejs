// const User = require('../Model/userSchema')
// exports.home=(req,res)=>{
//     res.send('Hello Utkarsh')
// }

// exports.createUser = async(req,res)=>{

//     //extract info
//     try{
//         const {name,email} = req.body;

//         if(!name || !email){
//             throw new Error("Name and email are required")
//         }
//         const userExists = User.find();

//         if(userExists){
//             throw new Error("User already exists")
//         }
//            const user = await User.create({
//             name,
//             email
//            })

//            res.status(201).json({
//             success:true,
//             message:"User created Successfully",
//             user
//            })
//     }
//     catch(error){
//           console.log("ERROR",error)
//           res.status(400).json({
//             success:false,
//             message:error.message
//           })
//     }
// }

// exports.getUser = async(req,res)=>{
    
//     try{
//         const users = await User.find({})
//         res.status(201).json({
//             success:true,
//             users
//         })
//     }
//     catch(error){
//            res.status(400).json({
//             success:false,
//             message:error.message
//            })
//     }
// }

const User = require('../Model/userSchema.js')

exports.home = (req, res) => {
    res.send('Hello World!');
}

exports.createUser = async(req, res) => {
    // extract info
    try {
       const {name, email}  = req.body

    //    if(!name || !email){
    //     throw new Error("Name and email are required")
    //    }

       const userExists = User.findOne({email})

       if (userExists) {
        throw new Error("User already exists")

       }

       const user = await User.create({
        name,
        email
       })

       res.status(201).json({
        success: true,
        message: "User created Successfully",
        user
       })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        
        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}