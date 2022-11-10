const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const orderDetailsSchema = new Schema({
  orderId: { type: Schema.Types.ObjectId, ref: "Orders", required: true },
  productId: { type: Schema.Types.ObjectId, ref: "Products", required: true },
  quantity: { type: Number },
  price: { type: Number },
  discount: { type: Number },
});

const OrderDetails = model("OrderDetails", orderDetailsSchema);
module.exports = OrderDetails;
