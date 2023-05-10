import mongoose, { Schema } from "mongoose";

const userGameSchema = new mongoose.Schema({
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
	}
});
const userGame = mongoose.model("UserGame", userGameSchema);
export default userGame;
