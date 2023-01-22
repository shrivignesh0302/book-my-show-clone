import React, { Component } from 'react'
import NavBar from '../components/NavBar/NavBar.components';

const DefaultLayout = (Component) => (

    ({ ...props }) => {
        return (
            <div>
                <NavBar />
                <Component {...props} />
            </div>
        )

    }

)

export default DefaultLayout;
