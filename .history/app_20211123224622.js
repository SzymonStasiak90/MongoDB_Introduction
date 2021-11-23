const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://127.0.0.1:27017'
const dbname = 'mongo-test'

mongoClient.connect(url,{},(error,client) => {
    if (error)
        console.log('Can not connect to Data Base')


    const db = client.db(dbname)

    // users
//    db.collection('users').insertOne({
//        name: 'Jon',
//        age: 24
//    }, (error, result) => {
//        if (error)
//            console.log('Adding User Error',error)
//        console.log(result)
//    })

//    db.collection('users').insertMany([
        {
            name: 'Jon',
            age: 24},
        {
            name: 'Simon',
            age: 21
        },
        {
            name: 'Carl',
            age: 22
        }
    ], (error,result) => {
        if (error)
            console.log('Adding Users Error',error)
        console.log(result)
    })
    //console.log('Data Base Connected')
})