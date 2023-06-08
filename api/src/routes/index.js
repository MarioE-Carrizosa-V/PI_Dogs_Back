const { Router } = require('express');
const postDog = require('../controllers/postDog');
const getDogsById = require('../controllers/getDogsById')
const getRaza = require('../controllers/getRaza')
const getByName = require('../controllers/getByName')
const getTemperament = require('../controllers/getTemperament')
const deleteDog = require('../controllers/getTemperament')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs/:idRaza', (req, res) => {
    getDogsById(req, res)
})
router.get('/dogsName', (req, res) => {
    getByName(req, res)
})

router.get('/dogs/', (req, res) => {
    getRaza(req, res)
})

router.post('/dogs/saveDog/', (req, res) => {
    postDog(req, res)
})

router.get('/temperament', (req, res) => {
    getTemperament(req, res)
})

router.delete('/dogs/delete/:name', (req, res) => {
    deleteDog(req, res)
})


module.exports = router;