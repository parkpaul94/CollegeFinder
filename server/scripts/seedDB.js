
require('dotenv').config({ path: '../.env' });

const mongoose = require("mongoose");
const db = require("../models");
const config = require('../config/mongoDb/mongoConfig.js');

const idArr = require('./idDB');
mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || config.test.databaseUrl,
	config.test.databaseOption
);

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
    const sorted = Object.keys(obj).sort(function(a,b){return obj[b]-obj[a]});
    console.log(sorted);
    const sortedCap = sorted.map(str => {
        return str.split('_').map(c => c.slice(0, 1).toUpperCase() + c.slice(1)).join(' ')
    })
    return sortedCap;
};



// const bookSeed = [
// 	{
// 		title: "The Dead Zone",
// 		author: "Stephen King",
// 		synopsis:
// 			"A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
// 		date: new Date(Date.now())
// 	},
// ];

// db.Book
// 	.remove({})
// 	.then(() => db.Book.collection.insertMany(bookSeed))
// 	.then(data => {
// 		console.log(data.insertedIds.length + " records inserted!");
// 		process.exit(0);
// 	})
// 	.catch(err => {
// 		console.error(err);
// 		process.exit(1);
// 	});
