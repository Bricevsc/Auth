import { verify } from "argon2";

export default async function login(req, res) {
  const { login, pass } = req.body;

  try {
    const user = await getUserByName(login);

    // console.log(user);

    if (user.login === login && await verify(user.password, pass)) {
      req.session.isLogged = true;
      req.session.name = login;
      req.session.isAdmin = user.isAdmin;
      res.redirect("/dashboard");
    }
    else {
      res.send("Authentification ratée !");
    }
  }
  catch (err) {
    res.status(500).send(err.message);
  }
};
