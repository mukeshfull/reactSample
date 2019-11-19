import React, { Component} from 'react';
import { connect } from 'react-redux'; 
import { usersFetchData,addUser,postUserData} from './../actions/index';
import uuidv1 from "uuid";
class Users extends Component{
    constructor() {
        super();
        this.state = {
            login:"",firstName: "",lastName:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const id = this.props.usrdata.length +1;
        const login = this.state.login;
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        this.props.addUser({ id, login,firstName ,lastName });
        const postUrl = 'http://localhost:4001/graphql';
        const payLoad = {"query":"mutation{ createUser(login:\""+login+"\",firstName:\""+firstName+"\","+
            "lastName:\""+lastName+"\") {id,login,firstName,lastName }}"};
        this.props.postUserData(postUrl,payLoad);
        this.setState({ login:"",firstName: "",lastName:"" });
        
    }
    componentDidMount() {
        this.props.fetchData('http://localhost:4001/graphql?query=query%7B%0A%20%20users%20%7B%0A%20%20%20%20id%2Clogin%2C%0A%20%20%20%20firstName%2C%0A%20%20%20%20lastName%0A%20%20%20%20%0A%20%20%7D%0A%7D%0A%0A%0A');
        
    }
    render(){
        return (
            <div>
                <div className="row"> 
                    <div  className="col-md-12"><h5>List of Users </h5></div>
                </div>
                <div className="row"> 
                    <div  className="col-md-12"></div>
                </div>
                <div className="row"> 
                    <div  className="col-md-8">
                        <div className="table-responsive">          
                            <table className="table">
                                <thead>
                            
                                <tr>
                                    <th>ID</th>
                                    <th>Login</th>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                </tr>
                                </thead>
                                <tbody>
                                
                                    {this.props.usrdata.map((emp) => (
                                        <tr key={emp.id}>
                                        <td >
                                            {emp.id}
                                        </td>
                                        <td >
                                            {emp.login}
                                        </td>
                                        <td >
                                            {emp.firstName}
                                        </td>
                                        <td >
                                            {emp.lastName}
                                        </td>
                                        </tr>
                                    ))} 
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div  className="col-md-4"><h5>Add User</h5> 
                        <form  onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="login">Email address:</label>
                                <input type="email" className="form-control" id="login" name="login"
                                    onChange={this.handleChange} value={this.state.login}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" className="form-control" id="firstName"
                                 name="firstName" onChange={this.handleChange}  value={this.state.firstName} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" className="form-control" id="lastName" 
                                    name="lastName" onChange={this.handleChange}  value={this.state.lastName} />
                            </div>
                           
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        
        usrdata: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
       // changeData: (str) => dispatch(firstTestAction(str))
       fetchData: (url) => dispatch(usersFetchData(url)),
       addUser: user => dispatch(addUser(user)),
       postUserData: ( url , payLoad ) => dispatch(postUserData( url, payLoad ))
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);