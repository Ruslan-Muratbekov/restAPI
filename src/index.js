import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import mongoose from "mongoose";
import fileUpload from 'express-fileupload'

import userRouter from "./router/user-router.js";

const app = express()

app.use(express.json())
app.use(express.static('src/static'))
app.use(fileUpload({}))
app.use('/users', userRouter)

async function start(){
	try {
		await mongoose.connect(process.env.url)
		app.listen(5000, () => console.log(`Server started on URL http://localhost:5000`))
	}catch (e) {
		console.log(e)
	}
}

start()