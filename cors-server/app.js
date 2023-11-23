const express = require('express');
const { default: Axios } = require("axios");
const cors = require("cors");
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to CORS server 😁')
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})
app.use(cors());

app.get('/cors/:page', async (req, res,data) => {  
    console.log("=====data",req.params.page)
    await Axios.get("https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/"+req.params.page)
        .then((r) => {
        //   console.log(r.data);
          res.send(r.data);
        })
        .catch((err) => {
          console.log(err);
        });
})
