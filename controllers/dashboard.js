export default function dashboard(req, res) {

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dashboard</title>
      
        <link rel="stylesheet" href="css/styles.css">
      </head>
      <body>
        <h1>Dashboard</h1>
      
        <div class="container container-centered">
      
          <h1>Bienvenue sur ton dashboard ${req.session.name} !</h1>
  
          <a href="/logout">Déconnexion</a>
      
        </div>
      
      </body>
      </html>
    `)
  };
  