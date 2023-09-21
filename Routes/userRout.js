const express = require('express')

const {home,createUser,getUsers} = require('../Controllers/userController.js')

const router = express.Router();
router.get("/",home)
router.post('/createUser',createUser)
router.get('/getUsers',getUsers)

module.exports = router;