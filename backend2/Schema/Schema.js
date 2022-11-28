const mongoose = require('mongoose');
const nodeSchema = mongoose.Schema(
    {
        name: {
            require: true,
            type : String
        },
        price: {
            require : true,
            type : Number
        },
        dd : {
            require : true,
            type : String
        }
    }
)
module.exports = mongoose.model('me', nodeSchema)