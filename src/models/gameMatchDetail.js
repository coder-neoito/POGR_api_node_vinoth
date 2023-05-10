import mongoose, { Schema } from "mongoose";

const gameMatchDetailSchema = new mongoose.Schema({
	kils: {
		type: Number,
		default: 0,
	},
	score: {
		type: Number,
		default: 0,
	},
	death: {
		type: Number,
		default: 0,
	},
	gameMatch: {
		type: Schema.Types.ObjectId,
		ref: "GameMatch",
	},
	game: {
		type: Schema.Types.ObjectId,
		ref: "Game",
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
const GameMatchDetail = mongoose.model(
	"GameMatchDetail",
	gameMatchDetailSchema
);
export default GameMatchDetail;
