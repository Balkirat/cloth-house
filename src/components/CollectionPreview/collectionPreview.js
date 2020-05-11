import React from 'react';
import CollectionItem from "../CollectionItem/collectionItem"
import './collectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
      {console.log(items)}
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) =>{
            console.log("in filter", idx)
            return idx < 4
        } )
        .map(({ id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps} /> 
        ))}
    </div>
  </div>
);

export default CollectionPreview;