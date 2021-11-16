const { Schema, model } = require('mongoose');

const UserSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'user',
    },
    enable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = model('users', UserSchema);
