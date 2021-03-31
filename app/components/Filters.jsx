import React from 'react';

const Filters = props => {
    return (
        <div className="row item-filters margin-top-30 padding-left-15">
            <div className="col-xs-12">

                filter:&nbsp;&nbsp;&nbsp;
                <div>
                    <div id="fruit-filter-container">
                        <input checked={props.checkedFilters.indexOf('fruit') > -1} type="checkbox" id="fruit" onChange={() => props.onClickFilter('fruit')} name="Fruit" value="fruit" />
                        &nbsp;&nbsp;&nbsp;
                        <div className="filter-item">Fruit</div>
                    </div>
                    &nbsp;&nbsp;&nbsp;

                    <div id="vegetable-filter-container">
                        <input checked={props.checkedFilters.indexOf('vegetable') > -1} type="checkbox" id="vegetable" onChange={() => props.onClickFilter('vegetable')} name="Vegetable" value="vegetable"/>
                        &nbsp;&nbsp;&nbsp;
                        <div className="filter-item">Vegetable</div>
                    </div>
                    &nbsp;&nbsp;&nbsp;

                    <div id="meat-filter-container">
                        <input checked={props.checkedFilters.indexOf('meat') > -1} type="checkbox" id="meat" onChange={() => props.onClickFilter('meat')} name="Meat" value="meat" />
                        &nbsp;&nbsp;&nbsp;
                        <div className="filter-item">Meat</div>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                </div>
            </div>
        </div>
    )
}

export default Filters