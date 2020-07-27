/*var express = require('express');
var router = express.Router();

/!* GET home page. *!/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/

const { Router } = require('express');
const router = Router();

const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/index.controller')

router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)


module.exports = router;
