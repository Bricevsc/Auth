import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config();

const HOSTNAME = process.env.APP_HOSTNAME;
const PORT = process.env.APP_PORT;


export default function home(req, res) {
  res.sendFile(path.join(__dirname, '..', 'views', 'sign.html'));
};
