// <!-- controller is what will do all of our CRUD -->
// <!-- import our model here! -->

// <!-- these are most of our CRUD functions -->
const Picks = require('../models/LotteryNumbers.model');

// <!-- READ ALL -->
module.exports.findAllPicks = (req, res) => {
    Picks.find()

        // <!-- ******what we return here is what we'll see in React******* -->

        .then(allPicks => res.json(allPicks))
        .catch(err => res.status(400).json(err));
}

module.exports.createNewPick = (req, res) => {
    Picks.create(req.body)
        .then(newlyCreatedPick => res.json(newlyCreatedPick))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteAnExistingPick = (req, res) => {
    Picks.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}