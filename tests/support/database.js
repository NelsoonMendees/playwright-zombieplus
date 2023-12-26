const { Pool } = require('pg')

const DbConfig = {
  user: 'vpznhysp',
  host: 'berry.db.elephantsql.com',
  database: 'vpznhysp',
  password: 'm8F1P9WZDDbcPHgFN2y1RfYR8jKnizMT',
  port: 5432
}

export async function executeSQL(sqlScript) {
  try {
    const pool = new Pool(DbConfig)

    const client = await pool.connect()

    const result = await client.query(sqlScript)

    console.log(result.rows)
  } catch (error) {
    console.log('Erro ao executar o SQL ' + error)
  }
}
