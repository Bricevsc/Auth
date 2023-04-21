import { verify } from "argon2";
import { getUserByEmail } from "../data/getUser.js";

export default async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (user.email === email && (await verify(user.password, password))) {
      req.session.isLogged = true;
      req.session.name = login;
      res.redirect("/dashboard");
    } else {
      res.send("Authentification ratée !");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
}
