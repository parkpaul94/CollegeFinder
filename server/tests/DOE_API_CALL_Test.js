require('dotenv').config();

const DOEAPIKEY2 = process.env.DOEKEY;

const axios = require('axios');

const DOEAPIKEY = 'TeOsoCTX5F9r0IXY1th1Ng2711AhnMflEkItgRO2';

const API_BASE_URL= 'https://api.data.gov/ed/collegescorecard/v1/schools.json';

const options = '&school.degrees_awarded.predominant=2,3&_fields=id,school.name,2013.student.size'

const urlexample = API_BASE_URL + `?api_key=${DOEAPIKEY}` + options;

function axiosOptions(url) {
    return {
        method: 'get',
        url,
        responseType: 'stream',
        timeout: 1000,
        withCredentials: false,
        responseType: 'json',
    }
};

console.log(urlexample);

axios(axiosOptions(urlexample)).then(function (response) {
    console.log(response.data);
});