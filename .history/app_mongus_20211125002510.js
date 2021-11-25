// Pobranie/ referencja / zaczytanie z pliku db zawierajacego konfiguracje bazy danych
require('./db/mongoos')

// podpiecie pliku zawierajacego model stworzenia uzytkownika
const User = require('./db/models/users')

// // Utworzenie uzytkownika
// const user = new User({name: 'Sammy', age: 30})
// // Zapisanie uzytkownika
// user.save().then(() => {
//     console.log(user)               // wyswietlenie uzytkownika w konsoli
// }).catch(error => {
//     console.log(error)              // obsluga bledu
// })

// // Alternatynwy zapis
// const user = new User({name: 'Tom', age: "30"}) // podano wiek jako string jednak w oparciu o model w ktorym drugi argument wskazano jak typ Number moongos przekonwertowal zmienna 
// // Zapisanie uzytkownika
// user.save().then(() => {
//     console.log(user)               // wyswietlenie uzytkownika w konsoli
// }).catch(error => {
//     console.log(error)              // obsluga bledu
// })


// // Alternatywny zapis z wykorzystaniem funkcji asynchronicznej
// const createuser = async (userData) => {                            // Inicjalizacja funkcji asynchronicznej
//     const user = new User(userData)                                 // stworzenie usera w oparciu odane dostarczone podczas wywolania funkcji
//     await user.save()                                               // zaczekaj na dane i zapisz

//     console.log(user)                                               // zapisz uzytkownika
// }

// createuser({                                                        // wywolanie funkcji i wprowadzenie parametrow
//     name: 'Mat',
//     age: 22
// })


// Alternatywny zapis z wykorzystaniem funkcji asynchronicznej z blokiem try catch

const createuser = async (userData) => {
    try {
        const user = new User(userData)
        await user.save()
        console.log(user)

    } catch (error) {
        console.log(error)
    }}