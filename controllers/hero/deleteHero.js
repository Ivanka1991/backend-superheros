const { NotFound } = require('http-errors')

const { Hero } = require('../../model/hero')
const { sendSuccessRes } = require('../../helpers')

const deleteHero = async (req, res) => {
  const { id } = req.params
  const result = await Hero.findByIdAndDelete(id)
  if (!result) {
    throw new NotFound(`Hero with id=${id} not found`)
  }
  sendSuccessRes(res, { message: 'Success delete' })
}

module.exports = deleteHero