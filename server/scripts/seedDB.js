
require('dotenv').config({ path: '../.env' });

const mongoose = require("mongoose");
const db = require("../models");
const config = require('../config/mongoDb/mongoConfig.js');
const idArr = require('./idDB');
const DOEAPIKEY = process.env.DOEKEY;

const axios = require('axios');

const API_BASE_URL = 'https://api.data.gov/ed/collegescorecard/v1/schools';

mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || config.test.databaseUrl,
	config.test.databaseOption
);

process.on('unhandledRejection', function(reason, promise) {
	console.log(promise);
  });

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

function sortPopPrograms(obj) {
	const sorted = Object.keys(obj).sort(function (a, b) { return obj[b] - obj[a] });
	const sortedCap = sorted.map(str => {
		return str.split('_').map(c => c.slice(0, 1).toUpperCase() + c.slice(1)).join(' ')
	})
	return sortedCap;
};

getDOEData = async (schoolDOEId) => {
	const response = await axios(
		axiosOptions(`${API_BASE_URL}?api_key=${DOEAPIKEY}&id=${schoolDOEId}`)
	);
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
		popularprogram: sortPopPrograms(results['2015'].academics.program_percentage),
		annualInCost: results[2015].cost.tuition.in_state,
		annualOutCost: results[2015].cost.tuition.out_of_state
	};
	console.log(schoolData);

	db.College
			.create(schoolData)
			.then(data => {
				console.log('Successfully wrote to the Database');
				process.exit(0);
			})
			.catch(err => {
				console.error(err);
				process.exit(1);
			});
	// return schoolData;
}

// getDOEData(120184);

db.College.remove();

idArr.forEach((eachId, index) => {
	console.log(eachId);
	if (index < 3) {
		console.log(`${index} \n`);
		let eachIdData = getDOEData(eachId);
		console.log(eachIdData);
	} else {
	}
})
