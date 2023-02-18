import userServices from "../Services/user-services.js";

async function getAll(request, response) {
	try {
		const users = await userServices.getAll()
		return response.json(users)
	} catch (e) {
		console.log(e)
		response.status(500).json(e)
	}
}

async function getUser(request, response) {
	try {
		const {id} = request.params
		if (!id) {
			return response.status(400).json('ID нету')
		}
		const user = await userServices.getUser(id)
		return response.json(user)
	} catch (e) {
		console.log(e)
		response.status(500).json(e)
	}
}

async function createUser(request, response) {
	try {
		const {name, password} = request.body
		const user = await userServices.createUser({name, password}, request.files.picture)
		return response.json(user)
	} catch (e) {
		console.log(e)
		response.status(500).json(e)
	}
}

async function updateUser(request, response) {
	try {
		const data = request.body
		if (!data._id) {
			return response.status(400).json('ID нету')
		}
		const user = await userServices.updateUser(data)
		return response.json(user)
	} catch (e) {
		console.log(e)
		response.status(500).json(e)
	}
}

async function deleteUser(request, response) {
	try {
		const {id} = request.params
		if (!id) {
			return response.status(400).json('ID нету')
		}
		const user = await userServices.deleteUser(id)
		return response.json(user)
	} catch (e) {
		console.log(e)
		response.status(500).json(e)
	}
}

export default {
	getAll,
	getUser,
	createUser,
	updateUser,
	deleteUser
}