import React, { Component} from 'react';
import HeaderLink from './HeaderLink';

class Header extends Component{
    render(){
        return (
            <header className="row mb-0">
               <div  className="col-md-2  mt-0"><img className="headerimg"  /></div>
               <div  className="col-md-2 mt-1"><h6 className="float-left ">Welcome ! </h6></div>
               <div  className="col-md-8"><h6 className="float-right"><HeaderLink /> </h6></div>
            </header>
        )
    }
}
export default Header;