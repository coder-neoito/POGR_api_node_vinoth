import mongoose, { Schema } from "mongoose";
const gameMatchSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['rank', 'classic', 'arcad'],
    default: 'classic',
  },
  startDate: {
		type: Date,
		default: Date.now,
  },
  endDate: {
		type: Date,
		default: null,
  },
  duration: {
		type: Number,
		default: 0,
  },
  status: {
    type: String,
    enum: ['won', 'failed'],
    default: null,
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
const GameMatch = mongoose.model("GameMatch", gameMatchSchema);
export default GameMatch;
