import dotenv from "dotenv";

dotenv.config();

export default function RenderLogin(req, res) {
  res.render('login.pug');
};
