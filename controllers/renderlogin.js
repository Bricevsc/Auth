import dotenv from "dotenv";

dotenv.config();

export default function renderLogin(req, res) {
  res.render('login.pug');
};
