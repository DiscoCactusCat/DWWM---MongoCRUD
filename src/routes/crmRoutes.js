const routes = (app) => {
  app
    .route("/contacts")
    .get(
        // Middleware : Réception + Traitement
      (req, resp, next) => {
        console.log("Request GET of a user on : "+ req.originalUrl);
        next();
      },
    //   // Envoi de la réponse
      (req, resp) => {
        resp.send("GET contacts works");
      }
    )

    .post((req, resp) => {
      resp.send("POST contacts works");
    });

  app
    .route("/contacts/:id")
    .put((req, resp) => {
      resp.send("PUT contacts/" + req.params.id + " works");
    })
    .delete((req, resp) => {
      resp.send("DELETE contacts/" + req.params.id + " works");
    });
};

exports.routes = routes;
