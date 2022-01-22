import express from "express";
import { router } from "./routes/router";

//O express não está desaclopado
const app = express()

app.use(express.json())
app.use(router)

export {app}