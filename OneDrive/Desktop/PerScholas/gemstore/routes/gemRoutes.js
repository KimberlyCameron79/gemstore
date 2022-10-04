const express = require('express')

const router = express.Router()

const Collection = require('../Models/collection')

// const seed = require('../Models/seed')

//bring in controller functions

const { 
    findAllGems, 
    showNewView, 
    createNewGem,
    seedStarterData,
    showOneGem,
    showEditView,
    updateOneGem,
    deleteOneGem
} = require('../controllers/GemController')



//Index route
router.get('/', findAllGems)

//new route
router.get('/new', showNewView)

//destroy route
router.delete('/:id', deleteOneGem)

// Setup "update" route
router.put('/:id', updateOneGem)

// Setup "create" route
router.post('/', createNewGem)

// Setup "edit" route
router.get('/:id/edit', showEditView)

// Setup "show" route  
router.get('/:id', showOneGem)

// Setup "seed" route
router.get('/seed', seedStarterData)


module.exports = router