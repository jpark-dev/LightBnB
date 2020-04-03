const { Pool } = require('pg');
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

module.exports = {
  query: (text, params) => {
    const start = Date.now();
    return pool.query(text, params)
    .then(res => {
      const duration = Date.now() - start;
      console.log('rowCnt: ', res.rowCount);
      console.log('executed query', { text, duration, rows: res.rowCount })
      console.log('res: ', res.rows);
      return res.rows;
    })
    .catch(err => console.error(err));
  }
}