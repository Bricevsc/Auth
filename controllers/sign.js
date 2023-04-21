export default async function sign(req, res) {
  const { firstname, lastName, email, pass } = req.body;

  try {
    const user = await getUserByName(login); // query vers db pour check si user existe deja

    // console.log(user);

    if (user.login === login && await verify(user.password, pass)) {
      req.session.isLogged = true;
      req.session.name = login;
      res.redirect("/dashboard");
    }
    else {
      res.send("Inscription ratée !");
    }
  }
  catch (err) {
    res.status(500).send(err.message);
  }
};
