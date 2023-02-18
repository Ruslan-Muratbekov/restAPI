import userSchema from "../Sheme/user-sheme.js";
import fileServices from "./file-services.js";

async function getAll() {
	const users = await userSchema.find()
	return users
}

async function getUser(id) {
	const user = await userSchema.findById(id)
	return user
}

async function createUser(body, picture) {
	let filename = fileServices.saveFile(picture)
	const user = await userSchema.create({...body, picture: filename})
	return user
}

async function updateUser(data) {
	const user = await userSchema.findByIdAndUpdate(data._id, data, {new: true})
	return user
}

async function deleteUser(id) {
	const user = await userSchema.findByIdAndDelete(id)
	return user
}

export default {
	getAll,
	getUser,
	createUser,
	updateUser,
	deleteUser
}