var express = require("express");
var router = express.Router();
const { default: mongoose } = require("mongoose");
const { Order } = require("../models");
mongoose.connect("mongodb://localhost:27017/Test");

router.post("/", function (req, res, next) {
  try {
    const newItem = new Order(req.body);
    newItem.save().then((result) => {
      res.send(result);
    });
  } catch (err) {
    res.send(err);
  }
});

router.get("/", function (req, res, next) {
  try {
    Order.find().then((result) => {
      res.send(result);
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", function (req, res, next) {
  try {
    Order.findById(req.params.id)
      .populate("orderDetails.product")
      .populate("customer")
      .populate("employees")
      .then((result) => {
        res.send(result);
      });
  } catch (error) {
    res.send(error);
  }
});

router.patch("/:id", function (req, res, next) {
  const { id } = req.params;
  const { shippedDate, status, description, shippingAddress, paymentType, customerId, employeeId, orderDetails } = req.body;
  try {
    Order.findByIdAndUpdate(
      id,
      {
        shippedDate,
        status,
        description,
        shippingAddress,
        paymentType,
        customerId,
        employeeId,
        orderDetails,
      },
      { new: true },
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
    Order.findByIdAndDelete(id).then((result) => {
      res.send("xoá thành công");
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
