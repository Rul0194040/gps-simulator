const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UbicationSchema = new Schema(
  {
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Ubication', UbicationSchema);
