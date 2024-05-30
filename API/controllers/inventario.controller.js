const express = require('express');
const pool = require('../db');

class InventarioController {
    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }

    initRoutes() {
        this.router.get('/inventario', this.inventario);
        this.router.put('/updateState', this.updateState);
    }

    async inventario(req, res) {
        try {
            const allPlayers = await pool.query("SELECT tiene.id, jugador.nombre AS nombre_jugador, nave.nombre AS nombre_nave, tiene.bloqueado FROM tiene JOIN jugador ON tiene.idJugador = jugador.idJugador JOIN nave ON tiene.idNave = nave.idNave;");
            res.json(allPlayers.rows);
        } catch (err) {
            console.error(err.message);
        }
    }
    async updateState(req,res){
        try{
            const { idjugador, idnave } = req.body;
            const updInventario = await pool.query("UPDATE tiene SET bloqueado = false WHERE idjugador = $1 AND idnave=$2 RETURNING *",[idjugador, idnave]);
            res.json(updInventario.rows[0]);
        }
        catch(err){
            console.error(err.message);
            res.status(500).json("Error en el servidor");
        }
    }
}

module.exports = new InventarioController().router;