import React from "react";
import API from "../../utils/API";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import SearchForm from "../SearchForm"
import "./main.css";

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

    handleInputChange = data => {
        // const value = event.target.value;
        // const name = event.target.name;
        this.setState({
          employees: data.data.results.name.last
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        this.searchLastName(this.state.search);
        console.log("name.last")
      };

    

    render() {
         return (
             
              <div> 
             <h1 className = "title">Employee Management</h1>
             
             <ul>
             
                 <SearchForm>

                 </SearchForm>
                 

                 {this.state.employees.map(( employee, i) => (
                     
                     <li
                     key={i}>
                         
                    
                    {employee.picture.thumbnail}
                    
                   
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