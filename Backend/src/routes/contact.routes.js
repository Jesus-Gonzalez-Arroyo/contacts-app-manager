import {createContact, updateContact, getAllContacts, deleteContact} from '../controllers/contact.controller.js'
import { Router } from 'express'
import { contactValidation } from '../validations/contact.validation.js'

const router = Router();

router.get('/', getAllContacts);
router.post('/', contactValidation, createContact);
router.put('/:id', contactValidation, updateContact);
router.delete('/:id', deleteContact);

export { router } 
