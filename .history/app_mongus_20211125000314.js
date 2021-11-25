const mongoose = require('mongoose')                             // zaciagniecie biblioteki mongoose

const url = 'mongodb://127.0.0.1:27017/mongoose-test'            // wskazanie portu ORAZ nazwy bazy danych

mongoose.connect(url)                                           // nawiazanie polaczenia z baza danych

// Tworzymy model w oparciu o ktory beda tworzone wpisy do bazy danych
const User = mongoose.model('User',
{
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

// Utworzenie uzytkownika
const user = new User({name: 'Sammy', age: 30})
// Zapisanie uzytkownika
user.save().then(() => {
    console.log(user)               // wyswietlenie uzytkownika w konsoli
}).catch(error => {
    console.log(error)              // obsluga bledu
})
