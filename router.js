const Router = require('express')
const router = new Router()
const userController = require('./user_controller')

router.post('/signup', userController.createUser)
router.post('/login', userController.getUser)

module.exports = router