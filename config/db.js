const mongoose = require('mongoose')

const connectTodb = async()=>{
  mongoose.connect("mongodb://localhost:27017/university")
  .then((conn)=>{
    console.log(`Connect to db${conn.connection.host}`)
  })
  .catch((err)=>{
        console.log("ERROR",err.message)
        process.exit(1);
  }
  )
}

module.exports = connectTodb