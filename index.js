const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => {
    console.log(`We are listening on port ${PORT}`)
});