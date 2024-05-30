const express = require('express');
const pool = require('../db');
class NaveController {
    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }

    initRoutes() {
        this.router.get('/naves', this.getNaves);
        this.router.put('/naves/:idnave', this.getNave);
    }

    async getNaves(req, res) {
        try {
            const allPlayers = await pool.query("SELECT * FROM nave");
            res.json(allPlayers.rows);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ message: 'Error del servidor.' });
        }
    }

    async getNave(req, res) {
        try {
            const { nombre } = req.body;
            const { idnave } = req.params;
    
            const updateNombre = await pool.query(
                "UPDATE nave SET nombre = $1 WHERE idnave = $2 RETURNING *",
                [nombre, idnave]
            );
            res.json(updateNombre.rows[0]);
        } catch (err) {
            console.error(err.message);
            res.status(500).json("Error en el servidor");
        }
    }
}

module.exports = new NaveController().router;