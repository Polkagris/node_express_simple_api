const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  customerFirstName: {
    type: String,
    required: true,
    unique: false,
  },
  customerLastName: {
    type: String,
    required: true,
    unique: false,
  },
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
