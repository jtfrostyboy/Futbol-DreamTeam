const { Schema } = require('mongoose');
const TeamSchema = new Schema(
    {
        name: { type: String, required: true },
        formation: { type: String, ref: 'Formation' },
        players: { type: Array, ref: 'Player'}
    },
    { timestamps: true },
);

module.exports = TeamSchema;