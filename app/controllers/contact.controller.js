exports.create = (req, res) =>{
    res.status(201).send({message: "create Handler"});
};
exports.findAll = (req, res) =>{
    res.send({message: "find all handler"});
};
exports.findOne = (req, res) =>{
    res.send({message: "find one handler"});
};
exports.update = (req, res) =>{
    res.send({message: "update handler"});
};
exports.delete = (req, res) =>{
    res.send({message: "delete handler"});
};
exports.deleteAll = (req, res) =>{
    res.send({message: "delete all handler"});
};
exports.findAllFavourite = (req, res) =>{
    res.send({message: "find all favourite handler"});
};
