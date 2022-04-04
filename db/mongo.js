const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://nassim:cnli140701@practica2.3tqah.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);

const dbName = 'LoremDB';

module.exports = {client, dbName};