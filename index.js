const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json();)

app.get('/', (req, res) => {
 res.send('Hello World')
});

app.post('/user', (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
});

const port = 3000
app.listen(port, () => console.log(`Application started listening on port ${port}!`));


const axios = require('axios');

async function getNumberOfFollowers() {
  
  let res = await axios.get('https://api.github.com/users/janbodnar');
  
  let nOfFollowers = res.data.followers;
  let location = res.data.location;

  console.log(`# of followers: ${nOfFollowers}`);
  console.log(`Location: ${location}`)
}
getNumberOfFollowers();

async function makePostRequest() {

    params = {
        id: 6,
        first_name: 'Fred',
        last_name: 'Blair',
        email: 'freddyb34@gmail.com'
      };

    let res = await axios.post('http://localhost:3000/users/', params);

    console.log(res.data);
}
makePostRequest();

async function makeGetRequest() {
  
  let res = await axios.get('http://localhost:3000/users/');

  let data = res.data;
  console.log(data);
}
makeGetRequest();
