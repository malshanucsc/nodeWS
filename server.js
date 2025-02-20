
import express from 'express'
import { scrapeWebsite } from './services/scrape.js';

const app = express();

app.listen(8050, () => {
    console.log("server running");
});

app.get('/', (req, res) => {

    res.send("hello world");

});
app.get('/id', (req, res) => {
    res.send('1');

});

app.get('/price', (req, res) => {
    res.send('100');
})

app.get('/scrape', (req, res) => {

    try {

        scrapeWebsite().then((scrappedData) => {
            res.send(scrappedData)
        });
    } catch (error) {
        console.log(error);
    }

});