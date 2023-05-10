import mongoose, { Schema } from "mongoose";

const gameSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	}
});
const Game = mongoose.model("Game", gameSchema);
export default Game;
