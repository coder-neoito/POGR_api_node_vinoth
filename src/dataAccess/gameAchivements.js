import exppress from "express";
import GameAchivements from "../models/gameAchivements.js";



const getGameAchivements = async (args,populateArgs) => {
  
  const gameAchivements = await GameAchivements.find(args).populate(populateArgs);
	return gameAchivements;
};

export { getGameAchivements };