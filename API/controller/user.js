const { User } = require("../model/user")
const client  = require('../database/connect');
const { ObjectID } = require("bson");

const addUser = async (req, res)=>{
    try{
        let user = new User(

            req.body.login, 
            req.body.password
            );


        let result = await client.db().collection("user").insertOne(user);

        res.status(200).json(result);
    } catch(error){
        console.log(error)
        res.status(500).json(error);
    }
};

const getAllUser = async (req, res)=>{
    try{
    let cursor = client.db().collection("user").find();
    let result = await cursor.toArray();
    if(result.length>0){
        res.status(200).json(result);
    }else{
        res.status(204).json({msg : "Aucun user trouvé"});
    }
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

const getUser = async (req, res)=>{
    try{
    let id = new ObjectID(req.params.id);
    let cursor = client.db().collection("user").find({_id : id});
    let result = await cursor.toArray();
    if(result.length>0){
        res.status(200).json(result[0]);
    }else{
        res.status(204).json({msg : "Ce user n'existe pas"});
    }
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

const editUser = async (req, res)=>{
    try{
        let id = new ObjectID(req.params.id);
        let newLogin = req.body.login;
        let newPassword = req.body.password;

        let result = await client.db().collection("user").updateOne(
            {_id : id}, 
            {$set : {login : newLogin, password : newPassword}});
            res.status(200).json(result);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

const deleteUser = async (req, res)=>{
    try{
        let id = new ObjectID(req.params.id);

        let result = await client.db().collection("user").deleteOne(
            {_id : id});
            res.status(200).json(result);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}
module.exports = {addUser, getAllUser, getUser, deleteUser, editUser};