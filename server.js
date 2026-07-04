const express = require('express');
const app = express();

const PORT = 300;

app.use(express.static("frontend"));

app.listen(PORT, function () {
    console.log("Successfully running at http://localhost:" + PORT);
});