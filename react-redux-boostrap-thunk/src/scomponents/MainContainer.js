import React, { Component } from 'react';

import Header from './Header';
import HeaderLink from './HeaderLink';
import Footer from './Footer';

//className Header extends Component{
const MainContainer = ({children}) =>{ 
    //const { Component } = props;   
    
        return (
            <div className="col-md-12">
                
                <Header />
                
                {children}
                <Footer />
            </div>
        )
    
}
export default MainContainer;