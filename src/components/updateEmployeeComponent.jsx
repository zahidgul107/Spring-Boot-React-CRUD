import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class updateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, this.state.id).then(res => {
            this.props.history.push('/employees');
        });
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailIdHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }
    cancel(e) {
        e.preventDefault();
        let history = this.props.history;
        this.props.history.push("/employees");
    }
    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3 mt-5'>
                    <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <h1 className='text-center'>Add Employee</h1>
                                <label className="form-label">First Name</label>
                                <input type="text" placeholder='Enter First Name' className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input type="text" placeholder='Enter Last Name' className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" placeholder='Enter Email' className="form-control" value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                            </div>

                            <button className="btn btn-primary" onClick={this.updateEmployee}>Save</button>
                            <button className="btn btn-danger ms-2" onClick={this.cancel.bind(this)}> Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default updateEmployeeComponent;