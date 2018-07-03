const { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLBoolean
} = require('graphql/type');

const BigInt = require('graphql-bigint');

const Todo = require('../../models/todo');

/*var  getProjection = (fieldASTs)=>{
    return fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
      projections[selection.name.value] = true;
      return projections;
    }, {});
}*/

var todoType = new GraphQLObjectType({
    name: 'todo',
    description: 'todo item',
    fields: () => ({
      text: {
        type: GraphQLString,
        description: 'The text of the todo.',
      },
      completedAt: {
        type: GraphQLInt,
        description: 'Completed todo at? '
      },
      _created:{
        type: BigInt,
        description: 'Timestamp from created.'
      }
    })
});

var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
          todo: {
            type: new GraphQLList(todoType),
            args: {
              itemId: {
                name: 'itemId',
                type: new GraphQLNonNull(GraphQLString)
              }
            },
            resolve: (root, {itemId}, source, fieldASTs) => {
                /*var projections = getProjection(fieldASTs);
                var foundItems = new Promise((resolve, reject) => {
                    Todo.find({_id:itemId}, projections,(err, todos) => {
                      err ? reject(err) : resolve(todos)
                    })
                });*/
                var foundItems = new Promise((resolve, reject) => {
                    Todo.find({_id:itemId},(err, todos) => {
                      err ? reject(err) : resolve(todos)
                    })
                });
                return foundItems
            }
          }
        }
    })
});

module.exports = schema;