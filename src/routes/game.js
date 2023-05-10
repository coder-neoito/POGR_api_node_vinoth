import exppress from "express";
import Game from "../models/game.js";
import GameController from "../controller/game.js";

const gameController = new GameController();
const gameRouter = exppress.Router();

gameRouter.get("/", gameController.getGames);

gameRouter.post("/:gameId", gameController.getGameById);

export default gameRouter;
