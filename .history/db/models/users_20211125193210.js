// Pobranie biblioteki mongoose - trzeba to robic w kazdym pliku w ktorym jej uzywamy
const mongoose = require('mongoose')

// // Tworzymy model w oparciu o ktory beda tworzone wpisy do bazy danych
// const User = mongoose.model('User',
// {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })


// Modle pod walidacje
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate(value) {
            if(value === 'Adam')
                throw new Error('You cant use this name')
        }
    },
    age: {
        type: Number,
        default: 18,
        min: 18
    }
})

const User = mongoose.model('User', userSchema)



// Wypuszczenie dostepu do obiektu poza plik
module.exports = User