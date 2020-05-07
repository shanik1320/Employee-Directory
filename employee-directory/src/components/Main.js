import React from "react";


class Main extends React.Component {

    state = {
        employees: []
    }

    componentDidMount() {

    };

    searchEmployees = query => {
        API.search(query)
        .then(res => this.setState({result: res.data}))
        .catch(err => console.log(err));
    }






    render() {
         return (
             <h1>Main Component</h1>
         )
    }
}



export default Main;