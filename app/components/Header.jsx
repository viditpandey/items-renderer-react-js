import React from 'react';

const Header = props => {
    return (
        <div className="row header">
            <div id="brandheader" className="col-xs-12 col-sm-7 brand-name">
                <h1 className="padding-left-15">Brandname ({props.count})</h1>
            </div>
            <div id="header-right-links" className="margin-top-30 col-xs-12 col-sm-5">
                | <a href='#'>Menu Item 1</a> |
                <a href='#'>Menu Item 1</a> |
                <a href='#'>Menu Item 2</a> |
                <a href='#'>Menu Item 3</a> |
                <a href='#'>Menu Item 4</a> |
                <a href='#'>Menu Item 5</a> |
                <a href='#'>Menu Item 6</a> |
            </div>
        </div>
    )
}

export default Header