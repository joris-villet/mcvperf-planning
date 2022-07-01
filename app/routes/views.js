


module.exports = (fastify, options, done) => {

  fastify.route({
    url: '/',
    method: 'GET',
    handler: (request, reply) => reply.view('./app/views/home.njk' , { title: "mcvperf-planning" })
  })

  fastify.route({
    url: '/rendez-vous',
    method: 'GET',
    handler: (request, reply) => reply.view('./app/views/rdv.njk' , { title: "mcvperf-planning - rendez-vous" })
  })

  done()

}