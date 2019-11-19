import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Z_BLOCK } from 'zlib';

class HeaderLink extends Component{
//const HeaderLink = ({children}) =>{ 
    //const { Component } = props;   
    
        render (){
            return(
            
                
                
                    <nav className="navbar navbar-default  ul-inline-block" >
                    <div className="container-fluid">
                        
                        <ul   className="nav navbar-nav ul-inline-block">
                            <li  className="active nav-item li-inline"><Link to='/aboutus'>AboutUs</Link></li>
                            <li  className="nav-item li-inline"><Link to='/employees'>Employees</Link></li>
                            <li  className="nav-item li-inline"><Link to='/customers'>Customer</Link></li>
                            <li  className="nav-item li-inline"><Link to='/users'>Users</Link></li>
                            <li  className="nav-item li-inline"><Link to='/graph'>Graph</Link></li>
                        </ul>
                    </div>
                    </nav>
                   
                
                
            
        )}
    
}
export default HeaderLink;