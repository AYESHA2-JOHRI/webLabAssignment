const mongoose = require('mongoose');

facultySchema = mongoose.Schema({
    name : String,
    age : Number,
    email: String,
    gender : String,
    course_code : String,
    address : {
        street : String,
        city : String,
        country : String
    },
    phone : Array
});

const Faculty = mongoose.model('Faculty',facultySchema);
module.exports = Faculty;