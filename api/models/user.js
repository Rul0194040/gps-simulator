const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    emailAddress: {
      type: String,
      required: true,
      unique: true,
    },
    emailStatus: {
      type: String,
      default: 'confirmed',
    },
    emailChangeCandidate: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isSuperAdmin: {
      type: Boolean,
      default: false,
    },
    reactiveUserToken: {
      type: String,
    },
    reactiveUserTokenExpiresAt: {
      type: Date,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetTokenExpiresAt: {
      type: Date,
    },
    emailProofToken: {
      type: String,
    },
    lastSeenAt: {
      type: Date,
    },
    isMobileUser: {
      type: Boolean,
      default: false,
      required: true,
    },
    providers: [Schema.Types.ObjectId],
    comments: [Schema.Types.ObjectId],
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);
