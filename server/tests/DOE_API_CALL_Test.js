require('dotenv').config({path: __dirname + '/.env'})

const DOEAPIKEY2 = process.env.DOEKEY;

const axios = require('axios');

const DOEAPIKEY = 'TeOsoCTX5F9r0IXY1th1Ng2711AhnMflEkItgRO2';

const API_BASE_URL= 'https://api.data.gov/ed/collegescorecard/v1/schools';

const option1 = '&school.degrees_awarded.predominant=2,3&_fields=id,school.name,2013.student.size'

const option2 = '&id=120184'

const urlexample = API_BASE_URL + `?api_key=${DOEAPIKEY}` + option2;

function axiosOptions(url) {
    return {
        method: 'get',
        url,
        responseType: 'stream',
        timeout: 10000,
        withCredentials: false,
        responseType: 'json',
    }
};

console.log(urlexample);

axios(axiosOptions(urlexample)).then(function (response) {
    let results = response.data.results;
    let nextresults = results[0];
    // let result15 = results
    console.log(nextresults['2015']);
});