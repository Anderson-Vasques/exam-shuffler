const db = require('../database');
class Exam {
  exec(query, cb) {
    // console.log('db.connect();');
    // db.connect();
    console.log('query', query);
    db.query(query, function(error, results, fields) {
      if(error) {
        console.log('aiaiaiaiaiaiaiaia', error)
        // db.end();
        throw error;
      }
      
      cb(error, results, fields, db);

    });
    // // console.log('db.end();');
    // // db.end();
  }

  findById(id, cb) {
    console.log('findById')
    this.exec(`SELECT * FROM users WHERE id=${id};`, cb);
  }

  removeById(id, cb) {
    this.exec(`DELETE FROM users WHERE  ID=${id}`, cb);
  }

  insert(obj, cb) {
    this.exec(`INSERT INTO users(name, email, password, salt) VALUES ('${obj.name}', '${obj.email}', '${obj.password}', '${obj.salt}')`, cb);
  }

  raw(query, cb) {
    this.exec(query, cb);
  }
};


module.exports = new Exam();
