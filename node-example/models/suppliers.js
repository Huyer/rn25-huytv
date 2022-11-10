const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const suppliersSchema = new Schema({
  name: { type: String, min: 0, max: 100, require: true },
  email: { type: String, min: 0, max: 50, require: true },
  phoneNumber: { type: String, min: 0, max: 50 },
  address: { type: String, min: 0, max: 500, require: true },
});

const Suppliers = model("Suppliers", suppliersSchema);
module.exports = Suppliers;
