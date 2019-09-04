const router = require('express').Router();

function uppercaser(req, res, next) {
    const name = req.params.name;
    if(name) {
        req.name = name.toUpperCase();
    }
  next();
}


router.get('/', (req, res) => {
    res.send('get to /suppliers/')
})

router.get('/:name', uppercaser, (req, res) => {
    // const { id } = req.params.name;
    res.send(`get to /suppliers/${req.name}`)
})

module.exports = router;