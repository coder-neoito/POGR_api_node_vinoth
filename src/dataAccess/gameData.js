import exppress from "express";
import UserGame from "../models/userGame.js";



const getUsersGames = async (args,populateArgs) => {
  
  const game = await UserGame.find(args).populate(populateArgs);
	return game;
};

export { getUsersGames };
