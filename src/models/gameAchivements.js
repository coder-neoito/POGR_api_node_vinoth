import mongoose, { Schema } from "mongoose";
const gameAchivements = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  imageUrl: {
    type: String,
    required:true,
  },
  description: {
    type: String,
    required:true,
  },
  exp: {
    type: Number,
    default: 0
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
	}
});
const GameAchivements = mongoose.model("GameAchivements", gameAchivements);
export default GameAchivements;

