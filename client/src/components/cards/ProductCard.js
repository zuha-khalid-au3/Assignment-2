import React,{useState, useEffect} from 'react'
import {Card,Tooltip} from 'antd';
import {EyeOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {showAverage} from '../../functions/rating';
import {useSelector,useDispatch} from 'react-redux';
import _ from 'lodash';
const {Meta} =Card;
const ProductCard=({product})=>{
    const [tooltip,setTooltip]=useState('Click to add');
    const {images,title,slug,description,price}=product;
    const {user,cart} =useSelector((state) => ({ ...state }))
    const dispatch=useDispatch();

    const handleAddToCart=()=>{
        
        let cart=[];
        if(typeof window !== 'undefined'){
            if(localStorage.getItem('cart')){
                cart=JSON.parse(localStorage.getItem('cart'));
            }
            cart.push({
                ...product,
                count:1,
            });
            let unique=_.uniqWith(cart,_.isEqual);
           
            localStorage.setItem('cart',JSON.stringify(unique));
            setTooltip('Added');

            dispatch({
                type:'ADD_TO_CART',
                payload:unique,
            });
            dispatch({
                type:'SET_VISIBLE',
                payload:true,
            })
        }
    }




return(
   <> 
   
<Card
cover={
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
    src={images && images.length ? images[0].url:"laptop"}
    style={{height:"150px",objectFit:"cover"}}
    className="p-1"
    />
}

>
    <Meta
    title={`Name: ${title}  Contact: ${price}`}
    description={` Email: ${description && description.substring(0,40)}... `}
    />
    </Card>
    </>
)
}

export default ProductCard