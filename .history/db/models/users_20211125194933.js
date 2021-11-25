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


// Model pod walidacje
const userSchema = new mongoose.Schema({        // nalezy skorzystac z metody Schema ktora dostarcza funkcje walidacyjne
    name: {
        type: String,
        required: true,                         // pole wymagane
        validate(value) {                       // pole domyslne
            if(value === 'Adam')
                throw new Error('You cant use this name')   // obsluga bledu
        },
        unique: true,                           // wartosc unikatowa
        lowercase: true                         // konwertowanie na male litery
    },
    age: {
        type: Number,
        default: 18,                            // wartosc domyslna
        min: 18                                 // wartosc minimalna
    }
})

// Operacja wykonywana przed zapisaniem
userSchema.pre('save', function(next) {         // inicjalizacja funkcji wykonywanej przed zapisem
    this.name += ' is the best!'                //  dowolna operacja
    next()                                      // powrot do funkcji wtornej
})


const User = mongoose.model('User', userSchema)



// Wypuszczenie dostepu do obiektu poza plik
module.exports = User