// Pobranie biblioteki mongoose - trzeba to robic w kazdym pliku w ktorym jej uzywamy
const mongoose = require('mongoose')

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

// Wypuszczenie obiektu poza plik
module.exports = User