const mongoose = require("mongoose");
const User = require("./User");
const Product = require("./Product");
const Schema = mongoose.Schema;
const cartSchema = Schema(
  {
    userId: { type: mongoose.ObjectId, ref: User },
    items: [
      {
        productId: { type: mongoose.isObjectIdOrHexString, ref: Product },
        size: { type: String, required: true },
        qty: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

cartSchema.methods.toJSON = function () {
  const obj = this._doc;
  delete obj.updateAt;
  return obj;
};

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
