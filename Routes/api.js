const express = require('express')
const router = express.Router()


const UserController = require('../Controllers/UserController')

router.route('/people').get(UserController.index)
router.route('/people').post(UserController.store)
router.route('/people/:id').get(UserController.show)
router.route('/people/:id').put(UserController.update)
router.route('/people/:id').delete(UserController.delete)

module.exports = router
