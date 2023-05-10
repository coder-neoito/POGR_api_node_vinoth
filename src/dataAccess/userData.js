import exppress from "express";
import User from "../models/user.js";

const getUsers = async () => {
  const fetchUser = await User.find();
  return fetchUser;
};
const getUserById = async (id) => {
  const fetchUser = await User.findById(id);
  return fetchUser;
};

export { getUsers, getUserById };
