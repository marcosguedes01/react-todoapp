const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])

Todo.updateOptions({ 
    new: true, // Por padrão o update retorna o registro antigo
    runValidators: true // Por padrão não são verificados os required no model
})

module.exports = Todo