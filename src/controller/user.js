import GameService from "../service/game.js";
import UserService from "../service/user.js";

const userService = new UserService();
const gameService = new GameService();
class UserController {
	getUsers = async (req, res) => {
		try {
			const getUser = await userService.getUsers();
			res.status(200).json({ data: getUser });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	};
	getUserGames = async (req, res) => {
		const userId = req.params.userId;
		try {
			const getUser = await gameService.getUserGames(userId);
			res.status(200).json({ data: getUser });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	};

	getUserGamesProfile = async (req, res) => {
		const userId = req.params.userId;
		const gameId = req.params.gameId;
		try {
			const getGameProfile=await gameService.getUserGameProfile(userId,gameId);
			res.status(200).json({ data: getGameProfile });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	};
}

export default UserController;