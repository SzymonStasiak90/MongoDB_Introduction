// const mongoClient = require('mongodb').MongoClient              // zaciagniecie biblioteki mongodb
const mongo = require('mongodb')
const mongoClient = mongo.MongoClient
const ObjectID = mongo.ObjectId

const url = 'mongodb://127.0.0.1:27017'                         // ustanowienie portu komunikacji
const dbname = 'mongo-test'                                     // nadanie nazwy bazie danych



mongoClient.connect(url,{},(error,client) => {                  // nawiazanie polaczenia z baza danych we wskazanym porcie
    if (error)                                                  // obsluga bledu polaczenia
        console.log('Can not connect to Data Base')


    const db = client.db(dbname)                                // utworzenie obiektu db na podstawieklienta bazy o nazwie mongo-test


    const id = new ObjectID()
    console.log(id.toString())
    db.collection('users').insertOne({
        _id: id,
        name: 'Joana',
        age: 67
    }, (error, result) => {
        if (error)
            console.log('Adding User Error',error)
        console.log(result)
    })






// Dodwanie rekordu do bazy danych
    // db.collection('users').insertOne({
    //     name: 'Barbra',
    //     age: 13
    // }, (error, result) => {
    //     if (error)
    //         console.log('Adding User Error',error)
    //     console.log(result)
    // })

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


// Update pojedynczego rekordu w bazie danych
//    db.collection('users').updateOne({
//        age: 22
//    }, {
//        $set: {
//        age: 35
//        }
//    })



// Update wielu rekordow w bazie danych
//    db.collection('users').updateMany({
//        age: {$gt: 20} && {$lt: 35}
//    }, {
//        $set: {
//        age: 40
//        }
//    })


// Usuwanie rekordow
//    db.collection('users').deleteOne({
//        age: 35
//    }, (error,results) => {
//        if (error)
//            console.log('Deleting User Error',error)
//        console.log(result)
//    })


// wyszukiwanie rekordow w bazie danych
//    db.collection('users').find({
//        age: {$gt: 20},                               //wieksze niz {$gt: xx}
//      name: 'Jon'
//    }).toArray((error, results) => {
//        console.log(results)
//    })




    console.log('Data Base Connected')




})