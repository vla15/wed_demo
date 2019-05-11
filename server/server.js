const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/gallery', (req, res, next) => {
  //make api call to mongo db
  
})



app.listen(port, () => console.log('Example listening on port: ' + port));