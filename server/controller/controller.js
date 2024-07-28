var Userdb = require('../module/model');

//Create and save a new user in DB
exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({message : "Content cannot be empty"});
        return;
    }

    const user = new Userdb({
        name : req.body.name,
        email : req.body.email,
        gender : req.body.gender,
        status : req.body.status,
    })

    user.save(user)
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        res.status(500).send({
            message : error.message || `Some error occured while creating a create option`
        });
    });
}

// retrive and return all users and alse reteive and return a single user
exports.find = (req, res) => {
    Userdb.find()
    .then(user => {
        res.send(user)
    })
    .catch(error => {
        res.status(500).send({message : error.message || `Some error occured while retriving the data`});
    })
} 

//Update the user by their id
exports.update = (req, res) => {
    if(!req.body){
        return res.status(500).send({message : `Data to update cannot be empty..!`});
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {})
    .then(data => {
        if(!data){
            return res.status(404).send({message : `Cannot find the user with id ${id}`})
        }
        else{
            res.send(data);
        }
    })
    .catch(error => {
        res.status(500).send({message : `Error update user information`});
    })
} 

//Delete the user with their specified id
exports.delete = (req, res) => {
    
} 