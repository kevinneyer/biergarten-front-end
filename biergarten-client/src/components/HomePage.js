import React from 'react'

const HomePage = () => {
    return(
        <div>
            <img className="home-image" src='data:image/jpeg;base64,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' alt="beer" />
        </div>
    )
}

export default HomePage