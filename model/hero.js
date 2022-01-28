const { Schema, model } = require('mongoose')
const Joi = require('joi')

const heroSchema = new Schema({
  nickname: {
    type: String,
   required:true,
  },
  real_name: {
    type: String,
    required:true,
   
  },
  origin_description: {
    type: String,
    required:true,
   
  },
  superpowers: {
    type: String,
    required:true,
   
  },
  catch_phrase: {
    type: String,
    required:true,
  },
  avatarURL: {
    type: String,
    required:true,
  },
}, { versionKey: false, timestamps: true })

const joiSchema = Joi.object({
  nickname: Joi.string().required(),
  real_name: Joi.string().required(),
  origin_description: Joi.string().required(),
  superpowers: Joi.string().required(),
  catch_phrase: Joi.string().required(),
  avatarURL: Joi.string().required(),
})

const Hero = model('hero', heroSchema)

module.exports = {
  Hero,
  joiSchema
}