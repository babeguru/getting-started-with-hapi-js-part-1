import Hapi from 'hapi';

const server = new Hapi.Server({
  host: 'localhost',
  port: 3000
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, reply) => {
    return 'Hello World!';
  }
});

server
  .start()
  .then(() => {
    console.log(`Server started at ${server.info.uri}`)
  })
  .catch(err =>{
    console.error('Error was handled!');
    console.error(err);
  });
