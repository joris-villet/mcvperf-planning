if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const path = require('path')
const fastify = require('fastify')({
  logger: true
})

const start = async () => {

  try {

    await fastify.register(require("@fastify/view"), {
      engine: {
        handlebars: require("handlebars"),
      },
    });

    // await fastify.register(require('@fastify/static'), {
    //   root: path.join(__dirname, './app/views/'),
    //   prefix: '/',
    // })

    await fastify.register(require('./app/routes/views.js'))
    await fastify.register(require('./app/routes/client.js'))
    await fastify.register(require('./app/routes/rdv.js'))
    
    await fastify.listen({ port: 3333 })

  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }

}

start();

