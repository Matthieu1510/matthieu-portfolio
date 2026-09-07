import { Schema, model, models } from "mongoose";

const projectSchema = new Schema(
    {
        title: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true },
        tags: { type: [String], default: [] },
        order: { type: Number, required: true },
    },
    { timestamps: true }
);

const Project = models.Project ?? model("Project", projectSchema);

export default Project;