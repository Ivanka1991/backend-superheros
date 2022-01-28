const { Hero } = require('../../model/hero')
 const { sendSuccessRes } = require('../../helpers')

const addHero = async (req, res) => {
  const newHero = await Hero.create(req.body)
   sendSuccessRes(res, { newHero }, 200)
}

module.exports = addHero
