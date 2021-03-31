import React, { useState, useEffect } from 'react'
import getData from '../store/getData';
import Filters from './Filters'
import ItemDescription from './ItemDescription';
import ItemHeader from './ItemHeader';

const ItemsLayout = props => {
    const [items, setItems] = useState([]);
    const [checkedFilters, setFilters] = useState(['fruit', 'vegetable', 'meat']);

    useEffect(() => {
        // error handling can be added
        getData()
        .then(res => { setItems(res) })
        .catch()
    },[])

    function handleFilterClick (filterType) {
        if (checkedFilters.indexOf(filterType) > -1) {
            setFilters([...checkedFilters.filter(i => i !== filterType)])
        } else {
            setFilters([...checkedFilters, filterType])
        }
    }
    const newCount = items.filter(i => checkedFilters.indexOf(i.type) > -1).length
    props.updateCount(newCount)

    return (
        <React.Fragment>
            <Filters checkedFilters={checkedFilters} onClickFilter={filterType => handleFilterClick(filterType)} />
            <div className="row">
                {
                    items.map(item => {
                        if (checkedFilters.indexOf(item.type) === -1) return null
                        return itemRenderer(item)
                    })
                }
            </div>
        </React.Fragment>
    )
}

const itemRenderer = (item) => {
    const classToAdd = `col-xs-12 col-sm-6 col-md-3 col-lg-2 box ${item.type}`
    return (
        <div className={classToAdd} key={item.title}>
            <div className="box-item">
                <div className="box-item-img"></div>
                <ItemHeader item={item} />
                <ItemDescription description={item.description} />
                
            </div>
        </div>
    )
}

export default ItemsLayout