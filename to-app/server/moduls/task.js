const mangoose = require('mongoose');
const TaskSchema = new mangoose.Schema({
    userId: { type: mangoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    status: {type: Boolean, default: false},
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    category: { type: mangoose.Schema.Types.ObjectId, ref: 'Category' },
    deadline: { type: Date },
}, {timestamps: true});

module.exports = mangoose.model('Task', TaskSchema);