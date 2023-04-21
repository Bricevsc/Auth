export default function logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send(err.message);
      }
  
      res.redirect("/");
    });
  };
  