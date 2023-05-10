import exppress from "express";
import GameMatchDetail from "../models/gameMatchDetail.js";

const getGameMatchDetails = async () => {
	const fetchGameMatches = await GameMatchDetail.find();
	return fetchGameMatches;
};

const getGameMatchDetail = async (args,populateArgs) => {
  
  const matchDetails = await GameMatchDetail.find(args).populate(populateArgs);
	return matchDetails;
};

export { getGameMatchDetails, getGameMatchDetail };