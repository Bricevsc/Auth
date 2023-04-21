import { hash } from "argon2";
import { UsersModel } from "../Models/User.model.js";

export default async function sign(req, res) {
  const { firstname, lastName, email, password } = req.body;

  try {
    if (email === await UsersModel.findOne({ email: email })) {
      res.send("Email déjà existant.");
    } else {
      await UsersModel.create({
        firstname: firstname,
        lastName: lastName,
        email: email,
        password: await hash(password),
      });
      res.redirect("/login");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
}
