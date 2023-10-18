const { Schema } = require('mongoose');
const PlayerSchema = new Schema(
    {
        name: { type: String, required: true },
        position: { type: String, required: true }
    },
    { timestamps: true },
);

module.exports = PlayerSchema;