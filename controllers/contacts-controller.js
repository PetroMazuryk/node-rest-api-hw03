// const contacts = require("../models/contacts");
const Contact = require("../models/contact");
// const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../decorators");

const getAllContacts = async (req, res) => {
  // const result = await contacts.listContacts();
  const result = await Contact.find();
  res.json(result);
};

// const getById = async (req, res, next) => {
//   const { id } = req.params;
//   const result = await contacts.getContactById(id);
//   if (!result) {
//     throw HttpError(404, "Not found");
//     // const error = new Error("Not found");
//     // error.status = 404;
//     // throw error;
//     // // return res.status(404).json({
//     // //   message: "Not found",
//     // // });
//   }
//   res.json(result);
// };

// const addContact = async (req, res, next) => {
//   // const { error } = addSchema.validate(req.body);
//   // if (error) {
//   //   throw HttpError(400, error.message);
//   // }
//   const result = await contacts.addContact(req.body);
//   res.status(201).json(result);
// };

// const deleteContactById = async (req, res, next) => {
//   const { id } = req.params;
//   const result = await contacts.removeContact(id);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   // res.status(204).send()
//   res.json({
//     message: "Delete success",
//   });
// };

// const updateContactById = async (req, res, next) => {
//   // const { error } = addSchema.validate(req.body);
//   // if (error) {
//   //   throw HttpError(400, error.message);
//   // }
//   const { id } = req.params;
//   const result = await contacts.updateContact(id, req.body);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  // getById: ctrlWrapper(getById),
  // addContact: ctrlWrapper(addContact),
  // deleteContactById: ctrlWrapper(deleteContactById),
  // updateContactById: ctrlWrapper(updateContactById),
};
