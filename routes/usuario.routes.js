const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/usuario.controller');


router.get('/', usuarioCtrl.getUser);
router.post('/', usuarioCtrl.createUser);
router.get('/:id', usuarioCtrl.getUniqueuser);
router.put('/:id', usuarioCtrl.editUser);
router.delete('/:id', usuarioCtrl.deleteUser);

module.exports = router;