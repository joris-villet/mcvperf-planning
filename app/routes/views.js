

module.exports = (fastify, options, done) => {

  fastify.route({
    url: '/',
    method: 'GET',
    // handler: (request, reply) => reply.view('./app/views/home.njk' , { title: "MCVPerf planning" })
    handler: (request, reply) => reply.sendFile('index.html')
  })

  // fastify.route({
  //   url: '/rendez-vous',
  //   method: 'GET',
  //   handler: (request, reply) => reply.view('./app/views/rdv.njk' , { title: "MCVPerf planning - rendez-vous" })
  // })

  // fastify.route({
  //   url: '/calendrier',
  //   method: 'GET',
  //   handler: (_, reply) => reply.view('./app/views/calendar.njk' , { title: "MCVPerf planning - calendrier" })
  // })

  done()

}