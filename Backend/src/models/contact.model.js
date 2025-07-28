import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, },
  phone: { type: String, required: true, unique: true }
}, { timestamps: true });

const modelContact = mongoose.model('Contact', ContactSchema);

export { modelContact }
