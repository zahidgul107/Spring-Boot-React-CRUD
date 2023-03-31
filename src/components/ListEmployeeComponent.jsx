import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    }

    editEmployee(id) {
       this.props.history.push('/updateEmployee/${id}') 
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    addEmployee() {
        this.props.history.push('/addEmployee');
    }

    render() {
        return (
            <div>
                <h1 className='text-center'>Employees List</h1>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addEmployee}> Add Employee </button>
                </div>
                <div className='row'>
                    <table className="table table-success table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Employee First Name</th>
                                <th scope="col">Employee Last Name</th>
                                <th scope="col">Employee Email Id</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <th scope="row">{employee.firstName}</th>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                            <td>
                                                <button className='btn btn-info' onClick={() => this.editEmployee(employee.id)}>Update</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;