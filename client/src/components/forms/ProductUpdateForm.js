import React from 'react';
import {Select} from 'antd';
const {Option}=Select;

const ProductUpdateForm =({handleSubmit,
    handleChange,
    values,
    setValues,handleCategoryChange,
    categories,subOptions,
    arrayOfSubs,
    setArrayOfSubIds,selectedCategory,

})=>{
    const {title,description,price,category,subs,shipping,quantity,images,colors,brands,color,brand} =values;
    return(
   <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text"name="title" className="form-control" value={title} 
                    onChange={handleChange}/>
                </div>  
                <div className="form-group">
                    <label>Email</label>
                    <input type="text"name="description" className="form-control" value={description} 
                    onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text"name="price" className="form-control" value={price} 
                    onChange={handleChange}/>
                </div>
                


               <br/>
<button className="btn btn-outline-info">Save</button>
            </form>
    )};

  export default ProductUpdateForm;