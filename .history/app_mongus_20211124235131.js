const mongoose = require('mongoose')                             // zaciagniecie biblioteki mongoose

const url = 'mongodb://127.0.0.1:27017/mongoose-test'            // wskazanie portu ORAZ nazwy bazy danych

mongoose.connect(url, {                                           // polaczenie z baza danych
    useNewUrlParser: true,
    userCreateIndex: true,
    useUnifiedTopology: true
})

