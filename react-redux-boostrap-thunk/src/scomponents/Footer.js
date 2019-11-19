import React, { Component} from 'react';

class Footer extends Component{
    render(){
        return (
            <footer className="row fixed-bottom">
               <div  className="col-md-6">
               <h6>Copyright @Yapstone</h6>  
               
               </div>
               <div  className="col-md-6">
                 
               <h6 className="float-right"><a href="#">Contact Us</a></h6>
               </div>
                
            </footer>
        )
    }
}
export default Footer;