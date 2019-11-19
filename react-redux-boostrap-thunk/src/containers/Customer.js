import React, { Component} from 'react';
import { connect } from 'react-redux'; 
import { customersFetchData} from './../actions/index';

class Customer extends Component{
    componentDidMount() {
        
        this.props.fetchData('http://localhost:8080/g2/cust');
    }
    render(){
        return (
            <div>
                <div className="row"> 
                    <div  className="col-md-12"><h5>Customer Data</h5></div>
                </div>
                <div className="row"> 
                    <div  className="col-md-12"></div>
                </div>
                <div className="row"> 
                    <div  className="col-md-12">
                        <div className="table-responsive">          
                    <table className="table">
                        <thead>
                       
                           <tr>
                               <th>ID</th>
                               <th>Name</th>
                               <th>Location</th>
                               <th>Department</th>
                           </tr>
                        </thead>
                        <tbody>
                            {this.props.custdata.map((emp) => (
                                <tr key={emp.id}>
                                <td >
                                    {emp.id}
                                </td>
                                <td >
                                    {emp.name}
                                </td>
                                <td >
                                    {emp.location}
                                </td>
                                <td >
                                    {emp.dept}
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        //testmsg: state.firstTestAction, 
        custdata: state.customers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
       // changeData: (str) => dispatch(firstTestAction(str))
       fetchData: (url) => dispatch(customersFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customer);