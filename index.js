const { Client } = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
      }
    });


const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => listUsers(req, res))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


async function listUsers(req, res) {
    try {
        const db = await client.connect()
        const result = await db.query('SELECT * FROM users');
        const results = { users: (result) ? result.rows : null};
        res.render('index', results );
        db.release();

    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
}

if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("SW Registered!");
        console.log(registration);
    }).catch (error => {
        console.log("SW Registration Failed");
        console.log(error);
    });
}


