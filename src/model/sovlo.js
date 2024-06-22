import { type } from 'os';
import mongoose from './index.js';

const sovloSchema = new mongoose.Schema({
        sovloImage:{
               type:String,
               required: true
        }
},{
    versionKey:false
})

 const sovloModel = mongoose.model('sovlos',sovloSchema);

 export default sovloModel;