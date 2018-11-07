const express = require('express');
// Next we set up the Router
const router = express.Router();

// require Our Model - Remember Model is
// a representation of our data
// The model should capitalized
const Incident = require('../models/incident');
// Creating the index route
// index route should show all the fruits
 router.get('/', async (req, res, next) => {
  // req.body this is from the fetch request
  console.log(req.body, ' this is get all')
     try  {

      const allIncidents = await Incident.find();

      // This is the response to react
      res.json({
        status: 200,
        data: allIncidents
      });

    } catch (err){

      res.send(err)

    }
});


router.post('/', async (req, res) => {

  try {
    console.log(req.body, ' this is req.body');
    const createdIncident = await Incident.create(req.body);
    console.log('response happening?')
    res.json({
      status: 200,
      data: createdIncident
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});





router.get('/:id', async (req, res, next) => {


     try  {

        const foundIncident = await Incident.findById(req.params.id);
        res.json({
          status: 200,
          data: foundMovie
        });

      } catch (err){
        res.send(err);
      }



});

router.put('/:id', async (req, res) => {

  try {
    const updatedIncident = await Incident.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updatedIncident
    });
  } catch(err){
    res.send(err)
  }
});


// Delete route
router.delete('/:id', async (req, res) => {

  try {
     const deletedIncident = await Incident.findByIdAndRemove(req.params.id);
      res.json({
        status: 200,
        data: deletedIncident
      });
  } catch(err){
    res.send(err);
  }
});



module.exports = router;
