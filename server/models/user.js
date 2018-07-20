const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')
mongoose.promise = Promise

const UserSchema = new Schema({

    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    password: {
        type: String,
        trim: true,
    },

    firstname: {
        type: String,
        trim: true,
        // required: "Firstname is Required"
    },

    lastname: {
        type: String,
        trim: true,
        // required: "Firstname is Required"
    },

    zipcode: {
        type: String,
        trim: true,
        // required: "Firstname is Required"
    },

    userCreated: {
        type: Date,
        default: Date.now
    },

    lastlogin_time: {
        type: Date,
    }

});

UserSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

const User = mongoose.model("User", UserSchema);

module.exports = User;



