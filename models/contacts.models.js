const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({

  fullName: {
    type: String,
    required: "name is required",
    trim: true,
    minlength: 3,
  },

  phoneNumber: {
    type: Number,
    trim: true,
    unique: true,
    // validate: [/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/, "Must be only numbers"]
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    unique: true,
    required: "email is required"
  },
  comments: {
    type: String,
    trim: true,
  }

  });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;