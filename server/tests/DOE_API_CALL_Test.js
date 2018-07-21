require('dotenv').config({ path: __dirname + '/.env' })

const DOEAPIKEY2 = process.env.DOEKEY;

const axios = require('axios');

const DOEAPIKEY = 'TeOsoCTX5F9r0IXY1th1Ng2711AhnMflEkItgRO2';

const API_BASE_URL = 'https://api.data.gov/ed/collegescorecard/v1/schools';

const option1 = '&school.degrees_awarded.predominant=2,3&_fields=id,school.name,2013.student.size'

const option2 = '&id=120184';

const option3 = ''

const urlexample = `${API_BASE_URL}?api_key=${DOEAPIKEY}${option2}`;

console.log(`Here is the DOE API call link \n ${urlexample}`);

function axiosOptions(urlInput) {
    return {
        method: 'get',
        url: urlInput,
        responseType: 'stream',
        timeout: 10000,
        withCredentials: false,
        responseType: 'json',
    }
};

function sortPopPrograms(arr) {
    return arr
};


axios(axiosOptions(urlexample)).then(function (response) {
    const results = response.data.results[0];
    const schoolData = {
        doeId: results.id,
        location: {
            lon: results.location.lon,
            lat: results.location.lat
        },
        collegeName: results.school.name,
        city: results.school.city,
        state: results.school.state,
        weblink: results.school.school_url,
        phoneNum: '800-800-8000',
        annualAveCost: results['2015'].cost.avg_net_price.overall,
        graduationRate: results['2015'].completion.completion_rate_4yr_150nt,
        // // popularprogram: [],
        annualInCost: results[2015].cost.tuition.in_state,
        annualOutCost: results[2015].cost.tuition.out_of_state
    };

    console.log(JSON.stringify(schoolData, null, 2));
});
