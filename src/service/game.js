import { getGames, getUsersGames } from "../dataAccess/gameData.js";
import { getGameMatchDetail } from "../dataAccess/gameMatchDetailsData.js";
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
		const populateArgs = [];
		const game = await getUsersGames(arg, populateArgs);

		return game;
	};
	getUserGameProfile = async (userId, gameId) => {
		const arg = {
			user: userId,
			game: gameId,
		};
		const populateArgs = ["user", "game", "gameMatch"];
		//let user = await getUserById(userId)
		const gameMatchDetails = await getGameMatchDetail(arg, populateArgs);

		return gameMatchDetails;
	};
}

export default GameService;
