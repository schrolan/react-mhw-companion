const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mhw-companion')

module.exports = mongoose.connection


//This will be for when it is deployed
// const { MongoClient, ServerApiVersion } = require('mongodb')
// const uri = process.env.MONGODB_URI || "mongodb+srv://root:root@cluster0.5jsp7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true
//     }
// });

// async function connectDB() {
//     try {
//         await client.connect();
//         console.log("Successfully connected to MongoDB!")
//         return client;
//     } catch (err) {
//         console.log("Failed to connect to MongoDB!", err);
//         throw err;
//     }
// }

// module.exports = { connectDB, client };