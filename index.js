const express = require('express');
const router = require('./routes/myrouting')
const app = express()

app.use(router)

app.listen(8080,() => {
    console.log("listening to http://localhost:8080");
})

