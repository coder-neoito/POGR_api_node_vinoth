import GameService from "../service/game.js";

const gameService = new GameService(); 
class GameController {
 
	getGames = async (req,res) => {
    try {
      const getGames = await gameService.getGames()
      res.status(200).json({ data: getGames });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  getGameById = async (req,res) => {
    try {
     
      const getGames = await gameService.getGameById(userId,gameId)
      res.status(200).json({ data: getGames });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
}

export default GameController;
