const router = require('express').Router();
const travelerRoutes = require('./travelerRousstes');
const locationRoutes = require('./locationRoutes');

router.use('/replace', travelerRoutes);
router.use('/replace', locationRoutes);

module.exports = router;
