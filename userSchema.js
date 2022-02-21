const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Name"],
    },
    username: {
        type: String,
        required: [true, "Please Enter username"],
        minlength: 4,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please Enter Email"],
        lowercase: true,
        trim: true,
        validate: function (value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    address: {
        type: Object,
        street: {
            type: String,
            required: [true, "Please Enter Street"]
        },
        suite: {
            type: String,
            required: [true, "Please Enter Suite"]
        },
        city:{
            type: String,
            required: true,
            trim: true,
            validate: function(value) {
              var cityRegex = /^[a-zA-Z ]*$/;
              return cityRegex.test(value);
            }
          },
          zipcode: {
            type: Number,
            required: true,
            validate: function(value){
              var zipRegrex = /(^\d{5}-\d{4}$)/;
              return zipRegrex.test(value)
            }
          },
        geo: {
            type: Object,
            lat: {
                type: String,
                required: [true, "Please Enter Geo"],
            },
            lng: {
                type: String,
                required: [true, "Please Enter lng"]
            }
        }
    },
    phone: {
        type: String,
        required: [true, "Please Enter phone number"],
        validate: function (value) {
            var phoneRegrex = /(^\d{1}-\d{3}-\d{3}-\d{4}$)/;
            return phoneRegrex.test(value)
        }
    },
    website: {
        type: String,
        required: [true, "Please Enter Website"],
        validate: function (value) {
            var webRegrex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
            return webRegrex.test(value)
        }
    },
    company: {
        type: Object,
        name: {
            type: String,
            required: [true, "Please Enter Name of Company"]
        },
        catchPhrase: {
            type: String,
            required: true
        },
        bs: {
            type: String,
            required: true
        }
    }
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;