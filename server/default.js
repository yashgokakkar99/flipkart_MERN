import {products} from './constants/data.js';
import Product from './model/product-schema.js';
const defaultData =async()=>{
    try{
        await Product.insertMany(products);
        console.log("Data imported successfully !!")
    }catch(error){
        console.log(`Error encountered while inserting default data : `,error.message)
    }
}
export default defaultData;