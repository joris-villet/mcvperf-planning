if (process.env.NODE_ENV !== 'production') {

  require('dotenv').config()

  const fs = require('fs');
  const distDir = fs.readdirSync('./vue/dist', 'utf-8')
  console.log("result dist dir => ", distDir)

  if (!distDir.length) {
    console.log("****************** NO INDEX.HTML && ASSETS *****************");
  } 
  else {

    fs.rename('./vue/dist/index.html', './app/public/index.html', (err) => {
      if (err) {
        console.log(err)
      }
    })

    fs.rename('./vue/dist/favicon.ico', './app/public/favicon.ico', (err) => {
      if (err) {
        console.log(err)
      }
    })
    
    fs.rename('./vue/dist/assets', './app/public/assets', (err) => {
      if (err) {
        console.log(err)
      }
    })
  }

}

const path = require('path')
const fastify = require('fastify')({
  logger: false
})


// MOVE VUEJS BUILD INTO STATIC PUBLIC FOLDER
// const fs = require('fs');
// const distDir = fs.readdirSync('./vue/dist', 'utf-8')
// console.log("result dist dir => ", distDir)

// if (distDir.length === 1) {
//   console.log("****************** NO INDEX.HTML && ASSETS *****************");
// } 
// else {

//   fs.rename('./vue/dist/index.html', './app/public/index.html', (err) => {
//     if (err) {
//       console.log(err)
//     }
//   })
  
//   fs.rename('./vue/dist/assets', './app/public/assets', (err) => {
//     if (err) {
//       console.log(err)
//     }
//   })
// }



const start = async () => {

  try {

    await fastify.register(require("@fastify/view"), {
      engine: {
        nunjucks: require("nunjucks"),
      },
    });

    await fastify.register(require('@fastify/static'), {
      root: path.join(__dirname, './app/public'),
      prefix: '/',
    })

    await fastify.register(require('@fastify/cors'), { 
      // put your options here
    })

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

