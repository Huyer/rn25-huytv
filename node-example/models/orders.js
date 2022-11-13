const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const orderDetailSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, require: true, min: 0 },
});

orderDetailSchema.virtual("product", {
  ref: "Product",
  localField: "productId",
  foreignField: "_id",
  justOne: true,
});

orderDetailSchema.set("toObject", { virtuals: true });
orderDetailSchema.set("toJSON", { virtuals: true });

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
  orderDetails: [orderDetailSchema],
});

ordersSchema.virtual("customer", {
  ref: "Customer",
  localField: "customerId",
  foreignField: "_id",
  justOne: true,
});

ordersSchema.virtual("employee", {
  ref: "Employee",
  localField: "employeeId",
  foreignField: "_id",
  justOne: true,
});

// Virtuals in console.log()
ordersSchema.set("toObject", { virtuals: true });
// Virtuals in JSON
ordersSchema.set("toJSON", { virtuals: true });
const Oders = model("Oders", ordersSchema);
module.exports = Oders;
