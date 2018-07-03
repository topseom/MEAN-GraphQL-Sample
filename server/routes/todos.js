const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
const graphqlTodoSchema = require('../graphql/schema/todo');
const graphqlHTTP = require('express-graphql');

router.use('/graphql',graphqlHTTP(req=>({
    schema:graphqlTodoSchema,
    graphiql:true
})))

router.post('/',(req,res)=>{
    let todo = new Todo({
        text:req.body.text
    });
    todo.save().then(data=>{
        if(!data){
            return res.status(404).send();
        }
        res.status(200).send(data);
    }).catch(err=>{
        res.status(400).send(err);
    });
});

module.exports = router;