const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://127.0.0.1:27017'
const dbname = 'mongo-test'

mongoClient.connect(url,{},(error,client) => {
    if (error)
        console.log('Can not connect to Data Base')


    const db = client.db(dbname)

    // users
    db.collection('users').insertOne({
        name: 'john',
        age: 24
    },(error, result) => {
        if (error)
            console.log('Adding User Error',error)
        console.log(result.ops)
    })

    //console.log('Data Base Connected')
})