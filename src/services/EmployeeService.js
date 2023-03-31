import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8086/";
// const ADD_EMPLOYEE_API_BASE_URL = "http://localhost:8086/addEmployee";


class EmployeeService {
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL + 'getAllEmployees');
    }

    addEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + 'addEmployee', employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + 'updateEmployee/' + employeeId);
    }
}

export default new EmployeeService()