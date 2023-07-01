const axios = require('axios');
require('dotenv').config();
const {URL} = process.env;
const {Dog, Temperament} = require('../db')


    const getRaza = async (req, res) => {
    
        try {
            let allDogs = []
            const {data} = await axios(`${URL}`)
            const allDogsDB = await Dog.findAll({include: {model: Temperament, through: 'dogTemperament', attributes: ['temperament']}})
            allDogs = [...data, ...allDogsDB]

            return res.status(200).json(allDogs)
    
        } catch (error) {
            
            res.status(404).send(error.message)
    
        }
    
    }

module.exports = getRaza