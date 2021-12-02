const express = require('express');

const foodController = require('../controllers/foodController');

const router = express.Router();

router.get('/',
  foodController.getFood,
  (req, res) => res.status(200).json(res.locals)
);

router.patch('/food',
foodController.updateFood,
foodController.getFood,
(req, res) => res.status(200).json(res.locals)
);

router.delete('/food',
  foodController.deleteFood,
  foodController.getFood,
  (req, res) => res.status(200).json(res.locals)
);

router.post('/food',
  foodController.addFood,
  foodController.getFood,
  (req, res) => res.status(200).json(res.locals)
);

module.exports = router;
