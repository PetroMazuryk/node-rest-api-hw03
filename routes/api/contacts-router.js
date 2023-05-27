const express = require("express");
const ctrl = require("../../controllers/contacts-controller");
const { isValidId } = require("../../middlewars");
const { schemas } = require("../../models/contact");
const { validateBody } = require("../../middlewars");
const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", isValidId, ctrl.deleteContactById);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContactById
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.uptadeFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
