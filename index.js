const { Client } = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
      }
    });


async function listUsers(
//req,
res) {
    try {
        const db = await client.connect()
        const result = await db.query('SELECT * FROM users');
        const results = { users: (result) ? result.rows : null};
        //res.render('index', results );
        db.release();
        return results;

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


