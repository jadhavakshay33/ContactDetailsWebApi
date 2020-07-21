import React from 'react';
import ReactDOM from 'react-dom';
import './ContactDetails.css';
class ContactDetailsComponents extends React.Component{
    constructor(props){
        super(props);

        this.state={
            contactDetails:[]
        };
    }
    componentDidMount(){
      fetch("https://localhost:44398/Contact/GetAllContactDetails").then(res=>res.json()).then(
        result=>{
          this.setState({contactDetails:result});
        }
      )
    }
    render(){
        return(
            <div>
            <h2>Contact Details Table</h2>
            <table class="table" >
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Phone Number</th>
                    <th>Creation Date</th>
                </tr>
                    {this.state.contactDetails.map(con=>(
                        <tr>
                        <td>{con.ID}</td>
                        <td>{con.Name}</td>
                        <td>{con.Email}</td>
                        <td>{con.Phone}</td>
                        <td>{con.CreationDate}</td> 
                        </tr>   
                    ))}
            </table>
            </div>
        );
    }
}
const element=<ContactDetailsComponents></ContactDetailsComponents>
ReactDOM.render(element,document.getElementById("root"));
