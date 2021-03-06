const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000
const word = require('./word');

app.use(cors({origin: "https://surebits.github.io"}))
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Dictionary project');
});

app.get('/lookup', word.lookup);


app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})