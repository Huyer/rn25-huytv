var express = require("express");
var router = express.Router();
const { default: mongoose } = require("mongoose");
const { Product } = require("../models");
mongoose.connect("mongodb://localhost:27017/Test");

router.post("/", function (req, res, next) {
  try {
    const newItem = new Product(req.body);
    newItem.save().then((result) => {
      res.send(result);
    });
  } catch (err) {
    res.send(err);
  }
});

router.get("/", function (req, res, next) {
  try {
    Product.find()
      .populate("category")
      .populate("supplier")
      .then((result) => {
        res.send(result);
      });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", function (req, res, next) {
  try {
    Product.findById(req.params.id)
      .populate("category")
      .populate("supplier")
      .then((result) => {
        res.send(result);
      });
  } catch (error) {
    res.send(error);
  }
});

router.patch("/:id", function (req, res, next) {
  const { id } = req.params;
  const { name, price, discount, stock, categoryId, supplierId, description } = req.body;
  try {
    Product.findByIdAndUpdate(id, { name, price, discount, stock, categoryId, supplierId, description }, { new: true }).then((result) => {
      res.send(result);
    });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", function (req, res, next) {
  try {
    const id = req.params.id;
    Product.findByIdAndDelete(id).then((result) => {
      res.send("xoá thành công");
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
