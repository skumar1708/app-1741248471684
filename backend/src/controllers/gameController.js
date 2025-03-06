const Game = require('../models/Game'); const createGame = async (req, res) => { try { const newGame = new Game(req.body); await newGame.save(); res.status(201).json(newGame); } catch (error) { res.status(400).json({ message: error.message }); } }; const getGames = async (req, res) => { try { const games = await Game.find(); res.status(200).json(games); } catch (error) { res.status(400).json({ message: error.message }); } }; module.exports = { createGame, getGames };