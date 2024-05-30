const express = require('express');
const pool = require('../db');

class PartidasController {
    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }

    initRoutes() {
        this.router.get('/ranking', this.ranking);
        this.router.get('/partidas', this.partidas);
        this.router.post('/insertPartida',this.insert);
    }

    async ranking(req, res) {
        try {
            const allPlayers = await pool.query("SELECT jugador.nombre AS nombre_jugador, nave.nombre AS nombre_nave, partida.mapa, partida.tiempo FROM partida JOIN jugador ON partida.idJugador = jugador.idJugador JOIN nave ON partida.idNave = nave.idNave ORDER BY partida.tiempo ASC");
            res.json(allPlayers.rows);
        } 
        catch (err) {
            console.error(err.message);
        }
    }

    async partidas(req, res) {
        try {
            const allPlayers = await pool.query("SELECT * FROM partida");
            res.json(allPlayers.rows);
        } 
        catch (err) {
            console.error(err.message);
        }
    }
    async insert(req,res){
        const{idjugador, idnave, mapa, tiempo}=req.body;
        try{
        await pool.query("INSERT INTO partida (idjugador,idnave,mapa,tiempo) VALUES($1,$2,$3,$4)",[idjugador,idnave,mapa,tiempo]);
        }
        catch(err){
            console.error(err.message);
        }
    }
}

module.exports = new PartidasController().router;