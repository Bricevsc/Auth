import dotenv from "dotenv";

dotenv.config();

export default function home(req, res) {
  res.render("sign.pug");
}
