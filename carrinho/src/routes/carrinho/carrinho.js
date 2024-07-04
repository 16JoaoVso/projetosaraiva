const express = require("express");
const route_carrinho = express.Router();
const data = require("../../database/config.js");

route_carrinho.get("/listar", (req, res) => {
    data.query("Select * from carrinho", (error, dados) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao carregar dados" });
        }
        return res.status(200).send({ msg: "Ok", paylodad: dados });
    });
});

module.exports = route_carrinho