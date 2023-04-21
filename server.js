import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/routes.js";


import route from "./routes/routes.js";

// ==========
// App initialization
// ==========

dotenv.config();
const { APP_HOSTNAME, APP_PORT, NODE_ENV } = process.env;

const app = express();

app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'templates'));
app.locals.pretty = (NODE_ENV !== 'production'); // Indente correctement le HTML envoyé au client (utile en dev, mais inutile en production)

// ==========
// App middlewares
// ==========

app.use(router);

// ==========
// App routers
// ==========

app.use("/", route);

// ==========
// App start
// ==========

await mongoose.connect(process.env.MONGO_STRING);

// ==========
// Connexion à mongoose
// ==========

app.listen(APP_PORT, () => {
  console.log(`App listening at http://${APP_HOSTNAME}:${APP_PORT}`);
});
