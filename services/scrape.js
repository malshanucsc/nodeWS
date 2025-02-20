import axios from 'axios';
import * as cheerio from 'cheerio';

export const scrapeWebsite = async () => {

    try {
        const response = await axios.get('https://httpbin.org');
        const $ = cheerio.load(response.data);
        const titile = $("title").text();
        return titile;
    } catch (error) {
        console.log(error);
    }

}