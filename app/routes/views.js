


module.exports = (fastify, options, done) => {

  fastify.route({
    url: '/',
    method: 'GET',
    handler: (request, reply) => reply.view('./app/views/home.hbs' , { title: "mcvperf-planning" })
  })


  done()

}