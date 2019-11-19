import React, { Component} from 'react';
import { connect } from 'react-redux'; 
import { firstTestAction,employeesFetchData} from './../actions/index';
import { MDBDataTable } from 'mdbreact';
class Employee extends Component{
    constructor(){
        super();
        this.data = null;
        this.state = {
            empState: null
          };
    }
    componentDidMount() {
        //dispatch(catsAlreadyLoaded(true));
      //  if( ! this.props.hasLoaded  )
         //   this.props.changeData('some shit');
        this.props.fetchData('http://localhost:8080/g2/emp');
    }
    componentDidUpdate(){
        
        
    }
    render(){
        let empData = this.props.empdata;
        const dataForTable = {
            columns: [
              {
                label: 'ID',
                field: 'id',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 270
              },
              {
                label: 'Location',
                field: 'location',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Dept',
                field: 'dept',
                sort: 'asc',
                width: 100
              }],
              rows:empData
            };
        return (
            <div >
                <div className="md-col-12"><h5>Employee Data</h5></div>
                <div className="md-col-12"><MDBDataTable striped bordered small data={dataForTable} /></div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        testmsg: state.firstTestAction,
        empdata: state.employees
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
       // changeData: (str) => dispatch(firstTestAction(str))
       fetchData: (url) => dispatch(employeesFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employee);