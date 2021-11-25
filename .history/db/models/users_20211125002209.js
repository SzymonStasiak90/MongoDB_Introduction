// Pobranie biblioteki mongoose - trzeba to robic wszedzie tam gdzie jej uzywamy
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