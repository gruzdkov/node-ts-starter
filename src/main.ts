import Fastify, { FastifyInstance } from 'fastify'
import { getUser } from './services/user'

const server: FastifyInstance = Fastify({ logger: true })

server.get('/ping', async () => {
  return getUser()
})

const start = async () => {
  try {
    await server.listen(3000)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()
