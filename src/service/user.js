import { getUserById } from "../dataAccess/userData.js";
class UserService {
	getUsers = async () => {
		const user = await getUser();
		return user;
	};
	getUserById = async (id) => {
		const user = await getUserById(id);
		return user;
  };
 
}

export default UserService;
