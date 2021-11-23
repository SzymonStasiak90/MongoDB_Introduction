const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://127.0.0.1:27017'
const dbname = 'mongo-test'

mongoClient.connect(url,{},(error,client) => {
    if (error)
        console.log('Can not connect to Data Base')

    console.log('Data Base Connected')
})