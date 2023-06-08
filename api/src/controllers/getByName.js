const axios = require('axios');
const {Dog, Temperament} = require('../db')
require('dotenv').config();
const {URL} = process.env;

const getByName = async(req, res) => {
    try {
        const {name} = req.query;
        let allDogs = []
        if(!name) throw Error('Ingrese un nombre válido');
        const {data} = await axios(`${URL}`)

            const allDogDB = await Dog.findAll({include: {model: Temperament, through: 'dogTemperament', attributes: ['temperament']}});
            const filterDogDB = allDogDB.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase().trim()))
            if(filterDogDB){
                allDogs = [...filterDogDB]
             }

        const dogExists = data.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase().trim()))

        if(dogExists.length === 0 && filterDogDB.length === 0){
            throw Error(`No hay razas con el nombre: ${name}`)
        }
        allDogs = [...dogExists, ...filterDogDB]
            res.status(200).json(allDogs)            
    } catch (error) {
            res.status(404).send({error: error.message})
    }
}

module.exports = getByName