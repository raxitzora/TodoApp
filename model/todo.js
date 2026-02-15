import mongoose from "mongoose";
import { boolean } from "zod";
import { maxLength, required, trim } from "zod/mini";

const TodoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,"Title is required"],
            trim:true,
            maxLength:[100,"title can't exceed 100 characterd"]
        },

          description:{
            type:String,
            trim:true,
            maxLength:[500,"description can't exceed 100 characterd"]
        },

          completed:{
            type:Boolean,
            default:false
        },

          priority:{
            type:String,
            enum:["low","medium","high"],
            default:"medium"
        },
    },
    {
        timestamps:true
    }
)

export default mongoose.models.Todo || mongoose.model("Todo",TodoSchema)