import { env, setupApp } from './config'

setupApp()
  .then(app =>
    app.listen(env.port, () => {
      console.log(`HTTP Server Running 🚀 at http://localhost:${env.port}`)
    }))
  .catch(console.error)
