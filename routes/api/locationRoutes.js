const express = require('express');
const router = express.Router();
const { Location } = require('../models'); // Import your Location model here


router.get('/api/locations', async (req, res) => {
    try {
      const locations = await Location.findAll();
      res.json(locations);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch locations' });
    }
  });
  
  router.post('/api/locations', async (req, res) => {
    try {
      const { location_name } = req.body; // Assuming the request body contains location_name property
  
      if (!location_name) {
        return res.status(400).json({ error: 'Location name is required' });
      }
  
      const newLocation = await Location.create({ location_name });
      res.json(newLocation);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create a location' });
    }
  });
  
  router.delete('/api/locations/:id', async (req, res) => {
    try {
      const locationId = req.params.id;
  
      const location = await Location.findByPk(locationId);
  
      if (!location) {
        return res.status(404).json({ error: 'Location not found' });
      }
  
      await location.destroy();
      res.json({ message: 'Location deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Unable to delete location' });
    }
  });
  
  module.exports = router;
