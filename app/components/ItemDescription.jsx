import React from 'react';

const ItemDescription = ({ description }) => {
    return (
        <div className="box-item-content row">
            <div className="col-xs-12 box-item-description">
                    {description}
            </div>
        </div>
    )
}

export default ItemDescription