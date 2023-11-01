const {Schema , model} = require ('mongoose');

//Esquema de clases
const classesSchema = new Schema ({
    name: {
        type : String,
        required : true,
        unique: true
    },
    date: {
        type  :String,
        required : true
    },
    hour: {
        type : String,
        required : true,
        unique: false
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: "Teachers"
    },
    users: [{
        type : Schema.Types.ObjectId,
        ref : "User"
    }]
    
});

module.exports = model ( 'Classes', classesSchema, 'Classes');