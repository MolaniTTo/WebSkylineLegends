const express = require('express');
const pool = require('../db');
const bcrypt = require('bcrypt');


class JugadorController {
    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }

    initRoutes() {
        this.router.get('/jugadores', this.getJugadores);
        this.router.post('/checklogin', this.checkLogin);
        this.router.put('/update',this.update)
    }

    async getJugadores(req, res) {
        try {
            const allPlayers = await pool.query("SELECT * FROM jugador");
            res.json(allPlayers.rows);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ message: 'Error del servidor.' });
        }
    }

    async checkLogin(req, res) {
        try {
            const { nombre, clave } = req.body;
            if (!nombre || !clave) {
                return res.status(400).json({ message: 'Nombre y clave son requeridos.' });
            }
    
            // Buscar al jugador en la base de datos por nombre
            const jugadorResult = await pool.query("SELECT * FROM jugador WHERE nombre = $1", [nombre]);
    
            if (jugadorResult.rows.length === 0) {
                // Si el jugador no existe, crea uno nuevo con dinero = 0
                const hashedClave = await bcrypt.hash(clave, 10); // Hash de la clave
                await pool.query("INSERT INTO jugador (nombre, clave, dinero) VALUES ($1, $2, $3)", [nombre, hashedClave, 0]);
                try {
                    // First query to get the idjugador
                    const result = await pool.query("SELECT idjugador FROM jugador WHERE nombre = $1", [nombre]);
                    
                    // Check if a result was found
                    if (result.rows.length === 0) {
                      throw new Error("Jugador not found");
                    }
                
                    // Extract the idjugador from the result
                    const idjugador = result.rows[0].idjugador;
                
                    // Use the idjugador in the next queries
                    await pool.query("INSERT INTO tiene (idjugador, idnave, bloqueado) VALUES ($1, $2, $3)", [idjugador, 0, false]);
                    await pool.query("INSERT INTO tiene (idjugador, idnave, bloqueado) VALUES ($1, $2, $3)", [idjugador, 1, true]);
                    await pool.query("INSERT INTO tiene (idjugador, idnave, bloqueado) VALUES ($1, $2, $3)", [idjugador, 2, false]);
                    await pool.query("INSERT INTO tiene (idjugador, idnave, bloqueado) VALUES ($1, $2, $3)", [idjugador, 3, true]);
                    await pool.query("INSERT INTO tiene (idjugador, idnave, bloqueado) VALUES ($1, $2, $3)", [idjugador, 4, true]);
                    await pool.query("INSERT INTO tiene (idjugador, idnave, bloqueado) VALUES ($1, $2, $3)", [idjugador, 5, true]);
                    await pool.query("INSERT INTO tiene (idjugador, idnave, bloqueado) VALUES ($1, $2, $3)", [idjugador, 6, true]);
                    await pool.query("INSERT INTO tiene (idjugador, idnave, bloqueado) VALUES ($1, $2, $3)", [idjugador, 7, true]);
                    await pool.query("INSERT INTO tiene (idjugador, idnave, bloqueado) VALUES ($1, $2, $3)", [idjugador, 8, true]);
                    await pool.query("INSERT INTO tiene (idjugador, idnave, bloqueado) VALUES ($1, $2, $3)", [idjugador, 9, true]);
                
                    console.log('Insertions successful');
                  } catch (err) {
                    console.error('Error executing queries', err.stack);
                  }
                // Envía respuesta indicando que se creó un nuevo jugador y se inició sesión
                return res.status(200).json({ message: 'Usuario creado y inicio de sesión exitoso.' });
            }
    
            const jugador = jugadorResult.rows[0];
            const isMatch = await bcrypt.compare(clave, jugador.clave);
    
            if (isMatch) {
                return res.status(200).json({ message: 'Inicio de sesión exitoso.' });
            } else {
                return res.status(401).json({ message: 'Nombre o clave incorrectos.' });
            }
    
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error del servidor.' });
        }
    }
    async update(req,res){
        try{
            const { nombre, dinero } = req.body;
            const updJugador = await pool.query("UPDATE jugador SET dinero = $1 WHERE nombre = $2 RETURNING *",[dinero, nombre]);
            res.json(updJugador.rows[0]);
        }
        catch{
            console.error(err.message);
            res.status(500).json("Error en el servidor");
        }
    }
}

module.exports = new JugadorController().router;