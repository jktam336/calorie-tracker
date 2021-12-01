const express = require('express');

const foodController = require('../controllers/foodController');

const router = express.Router();

router.get('/',
  foodController.getFood,
  (req, res) => res.status(200).json(res.locals.foodEntries)
);

router.get('/homeworld',
foodController.getHomeworld,
(req, res) => res.status(200).json(res.locals.homeworld[0])
);

router.delete('/food',
  foodController.deleteFood,
  foodController.getFood,
  (req, res) => res.status(200).json(res.locals.foodEntries)
);

router.post('/food',
  foodController.addFood,
  foodController.getFood,
  (req, res) => res.status(200).json(res.locals.foodEntries)
);

module.exports = router;
