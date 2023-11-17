const MongoClient = require('mongodb').MongoClient;
// serverUrl ="109.123.235.27";
// const url = 'mongodb://livesignal:livesignal@localhost:27017/livesignal'; // MongoDB server URL
const dbName = 'livesignal'; 
const dotenv = require("dotenv").config();
const databaseUrl = process.env.SERVERURL;



const client = new MongoClient(databaseUrl, {  useUnifiedTopology: true });
async function connect(databaseUrl) {
  
  try {
    
    await client.connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

function getDatabase() {
  return client.db(dbName);
}

module.exports = {
  connect,
  getDatabase,
};
