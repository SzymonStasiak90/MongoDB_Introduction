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

// Alternatynwy zapis
const user = new User({name: 'Tom', age: "30"}) // podano wiek jako string jednak w oparciu o model w ktorym drugi argument wskazano jak typ Number moongos przekonwertowal zmienna 
// Zapisanie uzytkownika
user.save().then(() => {
    console.log(user)               // wyswietlenie uzytkownika w konsoli
}).catch(error => {
    console.log(error)              // obsluga bledu
})


// Alternatywny zapis z wykorzystaniem funkcji asynchronicznej
const createuser = async (userData) => {                            // Inicjalizacja funkcji asynchronicznej
    const user = new User(userData)                                 // stworzenie usera w oparciu odane dostarczone podczas wywolania funkcji
    await user.save()                                               // zaczekaj na dane i zapisz

    console.log(user)
}

createuser({
    name: 'Mat',
    age: 22
})