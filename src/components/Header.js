import React from 'react'

const {branding} =props
const Header = (props) => {
   
    return (
        <div>
         <h1>{props.branding}</h1>
        </div>
    );
}

export default Header;