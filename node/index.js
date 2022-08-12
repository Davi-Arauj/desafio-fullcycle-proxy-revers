const express = require('express')
const app = express()
const porta = process.env.APP_PORT || 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}

const mysql = require('mysql')

const connection = mysql.createConnection(config)

app.get('/', (req, res) => {

  connection.query(`SELECT name FROM people`, (error, results, fields) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
      </ol>
    `)
  })
})

app.listen(porta,()=>{
    console.log('Rodando na porta ' + porta)
})
