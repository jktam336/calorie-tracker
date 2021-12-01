const express = require('express');

const foodController = require('../controllers/foodController');

const router = express.Router();

router.get('/',
  foodController.getCharacters,
  (req, res) => res.status(200).json(res.locals.characters)
);

router.get('/species',
  foodController.getSpecies,
  (req, res) => res.status(200).json(res.locals.species[0])
);

router.get('/homeworld',
  foodController.getHomeworld,
  (req, res) => res.status(200).json(res.locals.homeworld[0])
);

router.post('/food',
  foodController.addFood,
  (req, res) => res.status(200).json({})
);

module.exports = router;
