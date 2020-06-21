import React from "react";

import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = (props)=>{
   // console.log(props)
    return (
        <div className='collection-preview'>
            <h1 className='title'>{props.collection.title.toLowerCase()}</h1>
            <div className='preview'>
                {props.collection.items.filter((item,idx)=>idx<4).map((item)=>(
                    // <div key={item.id}>{item.name}</div>
                    <CollectionItem key={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
                ))}
            </div>
        </div>
    )
};

export default CollectionPreview;