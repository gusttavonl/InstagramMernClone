
const Video = require("../model/video.model")

module.exports = {
    async index(req, res) {
        const video = await Video.find();

        res.json(video)
    },

    async detail(req, res) {
        const { _id } = req.params
        const video = await Video.findOne({ _id });

        res.json(video)
    },

    async delete(req, res) {
        const { _id } = req.params
        const video = await Video.findByIdAndDelete({ _id });

        res.json({ Message: "Excluido com Sucesso" })
    },

    async create(req, res) {
        const {
            titulo,
            descricao,
            data,
            video,
            imagem,
            usuario
        } = req.body;

        let dataCreate = {};

        dataCreate = {
            titulo,
            descricao,
            data,
            video,
            imagem,
            usuario
        } // vars vindo do corpo
        const videoCreate = await Video.create(dataCreate) // criando o video atraves das var que vem do corpo
        return res.status(200).json(videoCreate)

    },

    async update(req, res) {
        const {
            _id,
            titulo,
            descricao,
            data,
            video,
            imagem,
            usuario } = req.body;

        let dataUpdate = {};

        dataUpdate = {
            _id,
            titulo,
            descricao,
            data,
            video,
            imagem,
            usuario
        } // vars vindo co corpo
        videoUpdate = await Video.findByIdAndUpdate({ _id }, dataUpdate, { new: true }) // criando o video atraves das var que vem do corpo
        return res.status(200).json(videoUpdate)

    }
}