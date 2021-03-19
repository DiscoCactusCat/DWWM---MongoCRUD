const mongoose = require('mongoose');
const { contactSchema } = require('../models/crmModels');

const Contact = mongoose.model('Contact', contactSchema);

exports.addNewContact = (req, res) => {
  const newContact = new Contact(req.body);
  newContact.save((err, data) => {
    if (err) res.send(err);
    res.json(data);
    console.log('Method addNewContact from crmControllers: ', data);
  });
}