const { User } = require("../model/user")
const client  = require('../database/connect');

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

const getUser = async (req, res)=>{
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

module.exports = {addUser, getUser};