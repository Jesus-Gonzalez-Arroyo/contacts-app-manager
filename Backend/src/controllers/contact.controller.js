import { modelContact } from '../models/contact.model.js'
import { validationResult } from 'express-validator'

const getAllContacts = async (req, res) => {
  const contacts = await modelContact.find();
  res.json(contacts);
};

const createContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { phone, email } = req.body;
  const existing = await modelContact.findOne({
      $or: [{ phone }, { email }]
    });

    if (existing) {
      const errorMessage = existing.phone === phone
        ? 'El número de teléfono ya está registrado.'
        : 'Este correo electrónico ya está registrado.';
      return res.status(409).json({ error: errorMessage });
    }

    const contact = new modelContact(req.body);
    await contact.save();
    res.status(201).json(contact);
};

const updateContact = async (req, res) => {
  const contact = await modelContact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!contact) return res.status(404).json({ message: 'Not found' });

  res.json(contact);
};

const deleteContact = async (req, res) => {
  const contact = await modelContact.findByIdAndDelete(req.params.id);
  if (!contact) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
};

export {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact
}
