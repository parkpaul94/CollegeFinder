'use strict';

const azureConfig = require('../config/azureAi/azureConfig.js');

let https = require('https');

let subscriptionKey = azureConfig.azureApiKey1;

let host = 'api.cognitive.microsoft.com';
let path = '/bing/v7.0/images/search';

let term = '';

console.log(subscriptionKey);

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
    });
    response.on('error', function (e) {
        console.log('Error: ' + e.message);
    });
};

let bing_image_search = function (search) {
  console.log('Searching images for: ' + term);
  let request_params = {
        method : 'GET',
        hostname : host,
        path : path + '?q=' + encodeURIComponent(search),
        headers : {
            'Ocp-Apim-Subscription-Key' : subscriptionKey,
        }
    };

    let req = https.request(request_params, response_handler);
    req.end();
};

module.exports = {
    findByName: function (req, res) {
        if (subscriptionKey.length === 32) {
            bing_image_search(req.params.name);
        } else {
            console.log('Invalid Bing Search API subscription key!');
            console.log('Please paste yours into the source code.');
        }
    }
}