const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Choose cardio or resistance"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter name of exercise"
        },
        duration: {
            type: Number,
            trim: true,
            required: "Duration of exercise"
        },
        weight: {
            type: Number,
            trim: true,

        },
        reps: {
            type: Number,
            trim: true,

        },
        sets: {
            type: Number,
            trim: true,

        },
        distance: {
            type: Number,
            trim: true,

        },
    }],
},
    {
        //code used with virtuals
        toObject: {
            virtuals: true
        },
        toJSON:
        {
            virtuals: true
        }
    }
);

exerciseSchema.virtual("totalDuration").get(function () {
    return this.exercises
        .reduce((sum, exercise) =>
            sum + exercise.duration, 0);
});

const ExerciseModel = mongoose.model("ExerciseModel", exerciseSchema)

module.exports = ExerciseModel;