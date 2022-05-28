const mongoose = require('mongoose');


// <!-- the schema is next. schema is the rules that the entries in the db must follow  -->
const PicksSchema = new mongoose.Schema({
    numberOne: {
        type: Number,
        required: [true, "Pick 1 is required"],
        min: [1, "Pick 1 must be greater than 1"],
        max: [69, "Pick 1 must be less than or equal to 69"]
    },
    numberTwo: {
        type: Number,
        required: [true, "Pick 2 is required"],
        min: [1, "Pick 2 must be greater than 1"],
        max: [69, "Pick 2 must be less than or equal to 69"]
    },
    numberThree: {
        type: Number,
        required: [true, "Pick 3 is required"],
        min: [1, "Pick 3 must be greater than 1"],
        max: [69, "Pick 3 must be less than or equal to 69"]
    },
    numberFour: {
        type: Number,
        required: [true, "Pick 4 is required"],
        min: [1, "Pick 4 must be greater than 1"],
        max: [69, "Pick 4 must be less than or equal to 69"]
    },
    numberFive: {
        type: Number,
        required: [true, "Pick 5 is required"],
        min: [1, "Pick 5 must be greater than 1"],
        max: [69, "Pick 5 must be less than or equal to 69"]
    },
    powerball: {
        type: Number,
        required: [true, "Powerball pick is required"],
        min: [1, "Powerball pick must be greater than 1"],
        max: [26, "Powerball pick must be less than or equal to 26"]
    },
}, {timestamps: true});

// <!-- the model. this is what we use to make actual queries to the DB -->
const Picks = mongoose.model('Picks', PicksSchema);

// <!-- export the model -->
module.exports = Picks;