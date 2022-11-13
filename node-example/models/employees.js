const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const employeesSchema = new Schema({
  firstName: { type: String, min: 0, max: 50, require: true },
  lastName: { type: String, min: 0, max: 50, require: true },
  phoneNumber: { type: String, min: 0, max: 50 },
  address: { type: String, min: 0, max: 500, require: true },
  email: { type: String, min: 0, max: 50, require: true },
  birthday: Date,
});

employeesSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});

employeesSchema.set("toObject", { virtuals: true });
employeesSchema.set("toJSON", { virtuals: true });

const Employees = model("Employees", employeesSchema);
module.exports = Employees;
