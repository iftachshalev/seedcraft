var mongoose = require("mongoose");

var seed = new mongoose.Schema({
	seed: String,
	des: String,
    categories: [Number],
    likes: Number,
    disLikes: Number
});

module.exports = mongoose.model("seed", seed);