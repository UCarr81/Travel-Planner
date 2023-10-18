const express = require('express').Router();
const { Traveler, Location } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const travelers = await Traveler.findAll
        res.status(200).json(travelers);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const travelers = await traveler.findByPk(req.params.id,)
        res.json(travelers);
        } catch (err) {
            res.status(500).json({ error: 'Nope No worky'})
        }
});

router.post('/api/travelers', async (req, res) => {
    try {
      const { name, email } = req.body; // Assuming the request body contains name and email properties
  
      if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
      }
  
      const newTraveler = await Traveller.create({ name, email });
      res.json(newTraveler);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create a traveler' });
    }
  });
  
  router.delete('/api/travelers/:id', async (req, res) => {
    try {
      const travelerId = req.params.id;
  
      const traveler = await Traveller.findByPk(travelerId);
  
      if (!traveler) {
        return res.status(404).json({ error: 'Traveler not found' });
      }
  
      await traveler.destroy();
      res.json({ message: 'Traveler deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Unable to delete traveler' });
    }
  });
  
  module.exports = router;
