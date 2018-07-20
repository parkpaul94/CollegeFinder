
require('dotenv').config();

const axios = require('axios');
const authKey = process.env.DOEKEY;

const api_BASE_URL= `https://api.data.gov/ed/collegescorecard/v1/schools?api-key=${authKey}&q=`;

const option1 = '&school.degrees_awarded.predominant=2,3&_fields=id,school.name,2013.student.size'

const option2 = '&id=120184'

const urlexample1 = api_BASE_URL + option1;

const urlexample2 = api_BASE_URL + option2;

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

module.exports = {
    queryAPI: function(req, res) {
        axios(axiosOptions(urlexample1)).then(function (response) {
            let results = response.data.results;
            let nextresults = results[0];
            console.log(nextresults['2015']);
        });
    }
}



