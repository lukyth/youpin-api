const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const organizationSchema = new Schema({
  name: { type: String, required: true, unique: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  detail: { type: String },
  created_time: { type: Date, default: Date.now },
  updated_time: { type: Date, default: Date.now },
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;
