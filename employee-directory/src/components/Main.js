import React from "react";
import API from "../utils/API";


class Main extends React.Component {

    state = {
        employees: []
    }

    componentDidMount() {
        API.getEmployees()
        .then(data => {
            console.log(data)
            this.setState({
                employees:data.data.results
            })
        })
        .catch(err => console.log(err));
    };

    






    render() {
         return (
             <div>
             <h1>Employee Management</h1>
             <ul>
                 {this.state.employees.map(( employee, i) => (
                     <li
                     key={i}> {employee.picture.thumbnail}
                    {employee.name.first}
                     {employee.name.last}
                     {employee.email}
                     {employee.dob.age}
                     </li>
                 ))}
             </ul>
             </div>
         )
    }
}



export default Main;