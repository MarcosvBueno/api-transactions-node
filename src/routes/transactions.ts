import knex from 'knex'
import { FastifyInstance } from 'fastify'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transaction = await knex('transactions')
      .where('amount', '>', 100)
      .select('*')
    return transaction
  })
}
