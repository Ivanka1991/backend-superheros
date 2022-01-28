const express = require('express')

const { controllerWrapper, validation } = require('../../middlewares')
const heroController = require('../../controllers/hero')
const { joiSchema } = require('../../model/hero')
const router = express.Router()

router.get('/', controllerWrapper(heroController.getHeros))

router.get('/:id', controllerWrapper(heroController.getHeroById))

router.post('/', validation(joiSchema), controllerWrapper(heroController.addHero))

router.put('/:id', controllerWrapper(heroController.updateHeroById))

// router.patch('/avatars', upload.single('avatar'), heroController.avatars)

router.delete('/:id', controllerWrapper(heroController.deleteHero))

module.exports = router