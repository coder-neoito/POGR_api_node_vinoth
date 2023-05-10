import { getGameAchivements } from "../dataAccess/gameAchivements.js";
import { getUsersGames } from "../dataAccess/gameData.js";
import { getGameStatic } from "../dataAccess/gameStatics.js";
import { getUserById } from "../dataAccess/userData.js";

class GameService {
	getGames = async () => {
		const game = await getGames();
		return game;
	};

	getUserGames = async (userId) => {
		const arg = {
			user: userId,
		};
		const populateArgs = ['game'];
		const game = await getUsersGames(arg, populateArgs);

		return game;
	};
	getUserGameProfile = async (userId, gameId) => {
		const arg = {
			user: userId,
			game: gameId,
		};
		const populateArgs = ["game"];
		//let user = await getUserById(userId)
		const gameStatics = await getGameStatic(arg, populateArgs);

		return gameStatics;
	};

	getUserGameAchivements = async (userId, gameId) => {
		const arg = {
			user: userId,
			game: gameId,
		};
		const populateArgs = ["game"];
		const gameAchivements = await getGameAchivements(arg, populateArgs);

		return gameAchivements;
	};
}

export default GameService;
