import React from 'react'
import {Card} from 'antd';
import {Link} from 'react-router-dom';

import {EditOutlined, DeleteOutlined} from '@ant-design/icons';

const {Meta} =Card;
const AdminProductCard=({product,handleRemove}) =>{
    const {title, description,images,price,slug}=product
    return(
        <Card
            cover={
                // eslint-disable-next-line jsx-a11y/alt-text
                <img
                src={images &&images.length?images[0].url:''}
                style={{height:'150px',objectFit:'cover'}}
                className="m-2"/>
            }
            actions={[
                <Link to={`/admin/product/${slug}`}>
                    <EditOutlined className="text-warning"/>
                </Link>,
                <DeleteOutlined onClick={() =>handleRemove(slug)}
                className="text-danger"/>]}
            >
                Name
           <Meta title={title} description={`${description && description.substring(0,35)}...`}
           />
           Contact
           <br/>
           {price}     
            </Card>
    )
}

export default AdminProductCard
