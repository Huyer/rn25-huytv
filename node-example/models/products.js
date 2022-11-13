const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productsSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0, default: 0 },
  discount: { type: Number, min: 0, max: 75, default: 0 },
  stock: { type: Number, min: 0, default: 0 },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
  },
  supplierId: { type: Schema.Types.ObjectId, ref: "Suppliers", required: true },
  description: { type: String },
});

productsSchema.virtual("total").get(function () {
  return (this.price * (100 - this.discount)) / 100;
});

productsSchema.virtual("category", {
  ref: "Category",
  localField: "categoryId",
  foreignField: "_id",
  justOne: true,
});

productsSchema.virtual("supplier", {
  ref: "Suppliers",
  localField: "supplierId",
  foreignField: "_id",
  justOne: true,
});

productsSchema.set("toObject", { virtuals: true });
// Virtuals in JSON
productsSchema.set("toJSON", { virtuals: true });

const Products = model("Products", productsSchema);
module.exports = Products;
