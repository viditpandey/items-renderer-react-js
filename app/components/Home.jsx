import React from 'react'
import Header from './Header'
import ItemsLayout from './ItemsLayout'

const Home = (props) => {
    const [count, setCount] = React.useState(0);
    function updateCount (newCount) {
        setCount(newCount)
    }
    return (
        <div>
            <Header count={count} />
            <ItemsLayout updateCount={updateCount} />
        </div>
    )
}

export default Home