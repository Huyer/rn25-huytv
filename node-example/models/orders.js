const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ordersSchema = new Schema({
  createdDate: { type: Date, require: true, default: Date.now },
  shippedDate: { type: Date },
  status: { type: String, min: 0, max: 50, require: true, default: "WAITING" },
  description: { type: String, min: 0, max: 1000 },
  shippingAddress: { type: String, min: 0, max: 500, require: true },
  paymentType: {
    type: String,
    min: 0,
    max: 20,
    require: true,
    default: "CASH",
  },
  customerId: {
    type: Schema.Types.ObjectId,
    ref: "Customers",
    required: true,
  },
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: "Employees",
    required: true,
  },
});

const Oders = model("Oders", ordersSchema);
module.exports = Oders;
