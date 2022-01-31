const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    user: "Tebalelo",
    port: "5500",
    password: "1234",
    database: "FinalShoppingDB"
});

client.on("connect", () => {
    console.log("Database connected");
})

client.on("end", () => {
    console.log("Database connection end");
})

module.exports = client;