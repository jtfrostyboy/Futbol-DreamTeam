const { Schema } = require('mongoose');
const FormationSchema = new Schema(
    {
        name: { type: String, required: true },
        attackers: { type: Number, required: true },
        midfielders: { type: Number, required: true },
        defenders: { type: Number, required: true },
        goalkeeper: { type: Number, required:true }
    },
    { timestamps: true },
);

module.exports = FormationSchema;