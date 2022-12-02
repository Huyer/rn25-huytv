const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const customerSchema = new Schema({
  firstName: { type: String, min: 0, max: 50, require: true },
  lasttName: { type: String, min: 0, max: 50, require: true },
  phoneNumber: { type: String, min: 0, max: 50 },
  address: { type: String, min: 0, max: 500, require: true },
  email: { type: String, min: 0, max: 50, require: true },
  birthday: Date,
});

const Customer = model("Customer", customerSchema);
module.exports = Customer;
