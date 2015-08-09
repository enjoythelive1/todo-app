var mongoose = require('./../database/mongoose');

var TaskList = mongoose.model('TaskList', {
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    items : [require('./task')],
    image : String
});

module.exports = TaskList;
