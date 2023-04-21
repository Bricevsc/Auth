export default function isAuthenticated(req, res, next) {
  if (req.session && req.session.isLogged === true) {
    next();
  } else {
    res.redirect("/login");
  }
}
