const { NotFound } = require('http-errors')

const { Hero } = require('../../model/hero')
const { sendSuccessRes } = require('../../helpers')

const updateHeroById = async (req, res) => {
  const { id } = req.params
  const result = await Hero.findByIdAndUpdate(id, req.body, { new: true })
  if (!result) {
    throw new NotFound(`Hero with id=${id} not found`)
  }
  sendSuccessRes(res, { result })
}

module.exports = updateHeroById