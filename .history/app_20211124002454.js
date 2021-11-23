const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://127.0.0.1:27017'
const dbname = 'mongo-test'

mongoClient.connect(url,{},(error,client) => {
    if (error)
        console.log('Can not connect to Data Base')


    const db = client.db(dbname)

    db.collection('users').updateOne({
        age: 22
    }, {
        $set: {
        age: 35
        }
    })



    // wyszukiwanie rekordow w bazie danych
    db.collection('users').find({
        age: {$gt: 20},                               //wieksze niz {$gt: xx}
//      name: 'Jon'
    }).toArray((error, results) => {
        console.log(results)
    })


    // Update rekordow w bazie danych


    console.log('Data Base Connected')

    // dodwanie rekordu do bazy danych

//    db.collection('users').insertOne({
//        name: 'Jon',
//        age: 24
//    }, (error, result) => {
//        if (error)
//            console.log('Adding User Error',error)
//        console.log(result)
//    })

    // Dodawanie wielu rekordow do bazy danych

//    db.collection('users').insertMany([
//        {
//            name: 'Jon',
//            age: 24},
//        {
//            name: 'Simon',
//            age: 21
//        },
//        {
//            name: 'Carl',
//            age: 22
//        }
//    ], (error,result) => {
//        if (error)
//            console.log('Adding Users Error',error)
//        console.log(result)
//    })


})