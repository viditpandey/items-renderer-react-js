import React from 'react';

const ItemHeader = ({item}) => {
    return (
        <div className="box-item-header">
            <div className="col-xs-12 col-sm-7 box-item-title">
                {item.title}
            </div>
            <div className="col-xs-12 col-sm-4 box-item-type">
                {item.type}
            </div>
            <div className="hidden-xs col-sm-1">
            </div>
            <br/>
        </div>
    )
}

export default ItemHeader