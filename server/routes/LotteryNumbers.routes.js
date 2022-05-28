const PicksController = require('../controllers/LotteryNumbers.controllers');

module.exports = app => {
    app.get('/api/lotterypick', PicksController.findAllPicks);
    app.post('/api/create/lotterypick', PicksController.createNewPick);
    app.delete('/api/lotterypick/:id', PicksController.deleteAnExistingPick);
}