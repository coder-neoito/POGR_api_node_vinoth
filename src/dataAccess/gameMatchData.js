import exppress from "express";
import GameMatch from "../models/gameMatch";

const getGameMatches = async () => {
	const fetchGameMatches = await GameMatch.find();
	return fetchGameMatches;
};

const getUsersGames = async (args,populateArgs) => {
  
  const match = await GameMatch.find(args).populate(populateArgs);
	return match;
};

export { getGameMatches, getUsersGames };
