const mongoose = require("mongoose");
const Schema = mongoose.Schema;

exports.contactSchema = new Schema({
  firstName: {
    type: String,
    required: "Contact must have a firstname !!!",
  },
  lastName: {
    type: String,
    required: "Contact must have a lastname !!!",
  },
  email: String,
  company: String,
  phone: Number,
  comment: String,
  created: {
    type: Date,
    default: Date.now,
  },
  last_modified: {
    type: Date,
    default: Date.now,
  }
});
