const { Schema } = require('mongoose');

const servicesSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  servicesLikes_votes: {
    type: Number,
    default: 0,
  },
  servicesDislikes_votes: {
    type: Number,
    default: 0,
  },
});

module.exports = servicesSchema;
