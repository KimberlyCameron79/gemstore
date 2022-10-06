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
} = require('../Controllers/gemController')


router.get('/seed', seedStarterData)

//Index route
router.get('/', findAllGems)

//new route
router.get('/New', showNewView)

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


module.exports = router