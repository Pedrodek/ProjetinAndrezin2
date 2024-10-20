const db = require('../databasepg')
const Users = db.users

exports.create = (req, res) => {
    Users.create({
        "name": req.body.name
    }).then(user =>{
        res.json(users)
    }).catch(err => {
        console.log(err)
        res.status(500).json({msg: "F", details: err})
    })
}

exports.getAll = (req, res) => {
    Users.findAll().then(user => {
        res.json(user.sort(function(c1, c2) {return c1.id - c2.id}))
    }).catch(err => {
        console.log(err)
        res.status(500).json({msg: "Uma pena", details: err})
    })
}









