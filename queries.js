const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.USER,
  host: 'database',
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
})

const getPersons = (request, response) => {
    pool.query('SELECT * FROM person ORDER BY id ASC', (error, result) => {
        if (error) {
            response.statusMessage = 'Error while requesting the dataource'
            response.status(500).end()
        } else {
            response.status(200).json(result.rows)
        }
    });
}

module.exports = {
    getPersons
}