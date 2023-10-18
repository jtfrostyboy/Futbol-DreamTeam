const { Schema } = require('mongoose');
const TeamSchema = new Schema(
    {
        name: { type: String, required: true },
        formation: { type: Object, required: true },
        players: { type: Array, required: true}
    },
    { timestamps: true },
);

module.exports = TeamSchema;