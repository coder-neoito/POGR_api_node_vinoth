import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	rank: {
		type: Number,
		default: 0,
	},
	isVerified: {
		type: Boolean,
		default: false,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
const User = mongoose.model("User", userSchema);
export default User;
