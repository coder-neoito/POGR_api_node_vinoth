import { getUserById } from "../dataAccess/userData.js";
const userMiddleware = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await getUserById(userId);
    if (user === null) {
        res.status(404).json({ message: 'cannot find user' })
    }

} catch (error) {
    res.status(400).json({ message: error.message });
}
next();
}
export default userMiddleware;