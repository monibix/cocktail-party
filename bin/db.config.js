const mongoose = require('mongoose');

const dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

async function connectDB() {
  try {
    const connnection = await mongoose.connect(process.env.MONGODB_URI, dbOptions)
    console.log("Connected DB")
  } catch (error) {
    consolee.log('There is an error connecting the DB', error)
  }
}

module.exports = connectDB