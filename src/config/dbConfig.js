const mongoose = require('mongoose');


const  connection=async()=> {
    try {
      console.log("Connecting Database !")
      await mongoose.connect(process.env.REACT_APP_dbUrl);
       console.log("Connection successful!");
    } catch (error) {
      console.log(
        "connection error", error);
    }
  
  }
  module.exports = {
    connection
  }

 