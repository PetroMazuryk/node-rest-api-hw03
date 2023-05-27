const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const genreList = ["fantastic", "love"];
const dateRegexp = /^\d{2}-\d{2}-\d{4}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    genre: {
      type: String,
      enum: genreList,
    },
    date: {
      type: String,
      // 16-10-2009
      match: dateRegexp,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
  genre: Joi.string()
    .valid(...genreList)
    .required(),
  date: Joi.string().pattern(dateRegexp).required(),
});

const schemas = {
  addSchema,
};

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemas,
};
