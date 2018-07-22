
require('dotenv').config({ path: '../.env' });

const DOEAPIKEY = process.env.DOEKEY;

const axios = require('axios');
const mongoose = require("mongoose");
const db = require("../models");
const config = require('../config/mongoDb/mongoConfig.js');

//College ID Arr
const idArr = require('./idDB');
const idArrLen = idArr.length;
//College Info Object Arr after DOE API Call
const newArr = [];
const idArrIndex = 0; 

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

	try {
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
		return schoolData;
	} catch (e) {
		console.log('There is an err', e);
	}
}

getDOEDataV2 =  (schoolDOEId, i) => {
	i++;
	console.log('Current Index is' , i);
	
	return new Promise((resolve, reject) => {
		axios(
			axiosOptions(`${API_BASE_URL}?api_key=${DOEAPIKEY}&id=${schoolDOEId}`)
		).then(response => {
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
			// console.log(schoolData);
			idArrIndex = i;
			resolve(schoolData);
		}).catch(err => {
			reject(err);
		})
	})
};
db.College.remove({});
// getDOEData(120184);

// setInterval(function () {
// 	console.log(`CRON JOB At position: ${idArrIndex}`);
// 	getDOEDataV2(idArr[idArrIndex],idArrIndex).then((data) => {
// 		newArr[idArrIndex] = data;
// 	});
// }, 5000)

idArr.forEach((eachId, index) => {
		getDOEDataV2(eachId).then((data) => {
			newArr[index] = data;
		});
})

function writetoDB() {
	console.log(newArr);
		db.College
			.insertMany(newArr)
			.then(data => {
				console.log('Successfully wrote to the Database');
				process.exit(0);
			})
			.catch(err => {
				console.error(err);
				process.exit(1);
			});
};

setTimeout(writetoDB, 30000);
