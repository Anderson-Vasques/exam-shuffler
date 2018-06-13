const router = require('express').Router();
let User = require('../models/User');

router.get('/', (req, res) => {
  res.render('index.html');
});

router.post('/infos', (req, res) => {
  res.render('data.html', req.body);
});

router.get('/questions', (req, res) => {
  let questions = [];
  User.raw(`select * from question order by Rand();`, (error, results, fields, db) => {
    // db.end();
    if(error) {
      return res.status(500).send({
        auth: false,
        message: error
      });
    }

    res.status(200).send({
      questions: results
    });
  })
});

router.get('/answers/:id', (req, res) => {
  let id = req.params.id;
  // let query = `select * from answer a
  //               inner join question q on a.question_id = q.id
  //               where q.id = ${id}
  //             order by Rand();`;

  let query = `select a.description from answer a
                inner join question q on a.question_id = q.id
                where q.id = ${id}
              order by Rand();`;


  User.raw(query, (error, results, fields) => {
    if(error) {
      return res.status(500).send({
        auth: false,
        message: error
      });
    }

    console.log(JSON.stringify(results))

    res.status(200).send({
      answers: results
    });
  });
});

router.get('exam', (req, res) => {
  User.raw(`select * from question order by Rand();`, (error, results, fields) => {
    if(error) {
      return res.status(500).send({
        auth: false,
        message: error
      });
    }

    

    res.status(200).send({
      questions: results
    });
  })
});

router.get('/answers', (req, res) => {
  let query = `select * from answer order by question_id;`;

  User.raw(query, (error, results, fields) => {
    if(error) {
      return res.status(500).send({
        auth: false,
        message: error
      });
    }

    res.status(200).send({
      answers: results
    });
  })
})

module.exports = router;