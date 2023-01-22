import React from 'react'
import NavBar from '../components/NavBar/NavBar.components'



const MoviePageHoc = (Components) => (
    ({ ...props }) => {
        return (
            <div>
                <NavBar />
                <Components {...props} />
            </div>
        )

    }
)

export default MoviePageHoc;
