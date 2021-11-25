const mongoose = require('mongoose')                             // zaciagniecie biblioteki mongoose

const url = 'mongodb://127.0.0.1:27017/mongoose-test'            // wskazanie portu ORAZ nazwy bazy danych

mongoose.connect(url)                                           // nawiazanie polaczenia z baza danych

// model w oparciu o ktory beda tworzone wpisy do bazy danych
const User = mongoose.model('User', 
{
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const user = new User({name: 'Sammy', age: 30})