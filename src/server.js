import Hapi from "hapi";

const server = new Hapi.Server({
  host: "localhost",
  port: 3000
});

server.route({
  method: "POST",
  path: "/payload",
  handler: (request, h) => {
    return { body: request.payload.coba };
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
