const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const { mongoose } = require('./db/mongoose'); 
const allowCrossHeader = require('./header');

const todoRoute = require('./routes/todos');

app.use(allowCrossHeader);
app.use(bodyParser.json());
app.use('/api/v1/todos/',todoRoute);

app.get('/',(req,res)=>{
    res.send("hello world!");
});

app.listen(port,()=>{
    console.log(`app runging at ${port}`);
});


// const graphqlHTTP = require('express-graphql');
// const { buildSchema } = require('graphql');

// var schema = buildSchema(`
//     type Query {
//         title: String,
//         price: Int
//     }
// `);
// var root = {
//     title: ()=>{
//         return 'Item1!';
//     },
//     price: ()=>{
//         return 200;
//     }
// }
// app.use('/graphql',graphqlHTTP({
//     schema,
//     rootValue: root
// }));