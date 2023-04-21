import dotenv from "dotenv";

dotenv.config();

export default function RenderDashboard(req, res) {
  res.render("dashboard.pug");
}
