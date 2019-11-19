import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//class Header extends Component{
const HeaderLink = ({children}) =>{ 
    //const { Component } = props;   
    
        return (
            <div>
                
                <div>
                    <Link to='/'>Home</Link>|
                    <Link to='/cats'>Cats</Link>|
                    <Link to='/somelist'>Student List</Link>
                    <Link to='/catlistandform'>Cat Form</Link>
                </div>
                {children}
                
            </div>
        )
    
}
export default HeaderLink;