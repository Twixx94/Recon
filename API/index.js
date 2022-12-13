const express = require('express');
const { connection } = require('./database/connect');
const routesUser = require('./route/user');
const app = express();
const port = 3000;
app.disable('x-powered-by'); // delete header: X-Powered-By: Express


// Middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // parsing form: 'application/x-www-form-urlencoded'
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*"); 
   res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Credentials");
   res.header("Access-Control-Allow-Credentials", "true"); 
   res.header("Access-Control-Allow-Methods", "PUT, DELETE"); 
   next();
})


connection("mongodb://127.0.0.1:27017/", (erreur)=>{
    if(erreur){
        console.log(erreur)
        console.log("erreur lors de la connection a la db");
        process.exit(-1);
    }else{
        console.log("connection à la db reussie");
        app.listen(3000, () =>{
            console.log('Port is listening on: ', port);
        })

    }
});


app.get('/', (req,res) =>{
    res.send('<h3>Server connected !</h3>');
})
app.use("/recon", routesUser);
