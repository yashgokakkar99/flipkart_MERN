import mongoose from 'mongoose';
//@=%40
export const Connection = async(username,password)=>{
    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.hvfxc4k.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true});
        console.log(`Database connected successfully !!`)
    } catch(error){
        console.log(`Connection Error : `,error.message);
    }
}
export default Connection;