var express = require("express");
var router = express.Router();
const { default: mongoose } = require("mongoose");
const { Orders } = require("../models");
mongoose.connect("mongodb://localhost:27017/Test");

router.post("/", function (req, res, next) {
  try {
    const newItem = new Orders(req.body);
    newItem.save().then((result) => {
      res.send(result);
    });
  } catch (err) {
    res.send(err);
  }
});

router.get("/", function (req, res, next) {
  try {
    Orders.find().then((result) => {
      res.send(result);
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", function (req, res, next) {
  try {
    Orders.findById(req.params.id).then((result) => {
      res.send(result);
    });
  } catch (error) {
    res.send(error);
  }
});

router.patch("/:id", function (req, res, next) {
  const { id } = req.params;
  const {
    createdDate,
    shippedDate,
    status,
    description,
    shippingAddress,
    paymentType,
    customerId,
    employeeId,
  } = req.body;
  try {
    Orders.findByIdAndUpdate(
      id,
      {
        createdDate,
        shippedDate,
        status,
        description,
        shippingAddress,
        paymentType,
        customerId,
        employeeId,
      },
      { new: true }
    ).then((result) => {
      res.send(result);
    });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", function (req, res, next) {
  try {
    const id = req.params.id;
    Orders.findByIdAndDelete(id).then((result) => {
      res.send("xoá thành công");
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
