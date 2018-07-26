'use strict';

const azureConfig = require('../config/azureAi/azureConfig.js');

let https = require('https');

let subscriptionKey = azureConfig.azureApiKey1;

let host = 'api.cognitive.microsoft.com';
let path = '/bing/v7.0/images/search';

let term = '';

let returnData = {};

let response_handler = function (response) {
    let body = '';
    response.on('data', function (d) {
        body += d;
    });
    response.on('end', function () {
        console.log('\nRelevant Headers:\n');
        for (var header in response.headers)
            // header keys are lower-cased by Node.js
            if (header.startsWith("bingapis-") || header.startsWith("x-msedge-"))
                 console.log(header + ": " + response.headers[header]);
        body = JSON.stringify(JSON.parse(body), null, '  ');
        console.log('\nJSON Response:\n');
        console.log(body);
        returnData = body;
    });
    response.on('error', function (e) {
        console.log('Error: ' + e.message);
    });
};

let bing_image_search = async function (search) {
  console.log('Searching images for: ' + term);
  let request_params = {
        method : 'GET',
        hostname : host,
        path : path + '?q=' + encodeURIComponent(search),
        count: 2,
        headers : {
            'Ocp-Apim-Subscription-Key' : subscriptionKey,
        },
        aspect: 'Square',
        height: '500',
        width: '500',

    };

    let req = await https.request(request_params, response_handler);

    req.end();
};

module.exports = {
    findByName: function (req, res) {
        if (subscriptionKey.length === 32) {
            bing_image_search(req.params.name);
            res.json(returnData);
        } else {
            console.log('Invalid Bing Search API subscription key!');
            console.log('Please paste yours into the source code.');
        }
    }
}