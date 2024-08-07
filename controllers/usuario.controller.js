const ModelUser = require('../models/model');

const usuarioCtrl = {};

//CREATE
usuarioCtrl.createUser= async (req, res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
}

//CONSULTAR
usuarioCtrl.getUser = async (req, res) => {
    const respuesta = await ModelUser.find({})
    res.send(respuesta)
}

//CONSULTAR POR ID
usuarioCtrl.getUniqueuser = async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findById({_id:id})
    res.send(respuesta)
}

//ACTUALIZAR
usuarioCtrl.editUser = async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndUpdate({_id:id},body);
    res.send(respuesta)
}

//ELIMINAR
usuarioCtrl.deleteUser = async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id})
    res.send(respuesta)
}

module.exports = usuarioCtrl;