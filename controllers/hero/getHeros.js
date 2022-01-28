const { Hero } = require('../../model/hero')
const { sendSuccessRes } = require('../../helpers')

const getHeros = async (req, res) => {
  const heros = await Hero.find({})

  sendSuccessRes(res, { heros })
}
module.exports = getHeros