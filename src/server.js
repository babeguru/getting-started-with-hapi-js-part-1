import Hapi from "hapi";
import Joi from "joi";

const server = new Hapi.Server({
  host: "localhost",
  port: 3000
});

server.route({
  method: "POST",
  path: "/payload",
  config: {
    handler: (request, h) => {
      return "ok sukses!";
    },
    validate: {
      payload: {
        nama: Joi.string().min(3),
        umur: Joi.number()
      }
    }
  }
});

server
  .start()
  .then(() => {
    console.log(`Server started at ${server.info.uri}`);
  })
  .catch(err => {
    console.error("Error was handled!");
    console.error(err);
  });
