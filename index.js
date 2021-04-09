import express from 'express';
import { Issuer } from 'openid-client';

const app = express();
const port = 8080;

Issuer.discover('fff')
    .then(res => {
        v
    })

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})