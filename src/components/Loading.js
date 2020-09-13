import React from 'react'
import loading from '../pages/images/gif/loading-arrow.gif'

function Loading() {
    return (
        <div className="loading">
            <h4>Products loading....</h4>
            <img src={loading} alt="loading "/>
        </div>
    )
}

export default Loading
