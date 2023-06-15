const mongoose = require('mongoose')

mongoose
    .connect(`mongodb+srv://maxpavlenko133:apSQ7Nysol2aZpf8@cluster0.vvsqq1o.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })



const db = mongoose.connection

module.exports = db