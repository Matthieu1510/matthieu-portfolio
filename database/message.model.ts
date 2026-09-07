import {Schema, model, models} from "mongoose";

const messageSchema = new Schema({
    name: {type:String, required:true, trim: true},
    email: {type:String, required:true, trim: true},
    message: {type:String, required:true, trim: true},
}, {timestamps: true});

const Message = models.Message ?? model("Message", messageSchema);

export default Message;