import exppress from "express";
import GameStatics from "../models/gameStatics.js";

const getGameStatics= async () => {
	const fetchGameStatics = await GameStatics.find();
	return fetchGameStatics;
};

const getGameStatic = async (args,populateArgs) => {
  
  const matchDetails = await GameStatics.find(args).populate(populateArgs);
	return matchDetails;
};

export { getGameStatics, getGameStatic };