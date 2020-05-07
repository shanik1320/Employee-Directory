import React from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Row from "../components/Row";
// import Col from "../components/Col";

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
             <Container>
                {/* <Row> */}
             <h1>Employee Management</h1>
             <ul>
                 {this.state.employees.map(( employee, i) => (
                     
                     <li
                     key={i}>
                         <Row>
                    
                    {employee.picture.thumbnail}
                    
                   
                    {employee.name.first}
                    
                     {employee.name.last}
                     
                     {employee.email}
                     
                     {employee.dob.age}
                     
                     </Row>
                     </li>
                     
                 ))}
             </ul>
             {/* </Row> */}
             </Container>
         )
    }
}



export default Main;