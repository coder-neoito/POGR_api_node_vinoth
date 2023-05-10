import exppress from "express";
import Game from "../models/game.js";

const getGames = async (filter) => {
	const fetchGame = await Game.find();
	return fetchGame;
};

const getUsersGames = async (args,populateArgs) => {
  
  const game = await Game.find(args).populate(populateArgs);
	return game;
};

export { getGames, getUsersGames };
