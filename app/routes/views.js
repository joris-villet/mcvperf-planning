


module.exports = (fastify, options, done) => {

  fastify.route({
    url: '/',
    method: 'GET',
    handler: (request, reply) => reply.view('./app/views/home.njk' , { title: "MCVPerf planning" })
  })

  fastify.route({
    url: '/rendez-vous',
    method: 'GET',
    handler: (request, reply) => reply.view('./app/views/rdv.njk' , { title: "MCVPerf planning - rendez-vous" })
  })

  done()

}