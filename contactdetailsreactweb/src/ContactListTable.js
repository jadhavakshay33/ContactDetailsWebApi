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
    componentDidMount()
    {
      fetch("https://localhost:44398/Contact/GetAllContactDetails").then(res=>res.json()).then(
        result=>{
          this.setState({contactDetails:result});
        }
      )
    }

    DeleteContact(ID)
    {
    debugger; //https://localhost:44398/Contact/Contact_DeleteConact

      if(window.confirm("Are You Sure"))
      {
        fetch("https://localhost:44398/Contact/DeleteConact/"+ID,
          {
               method:'DELETE',
               headers:{'Accept':'application/json',
                 'Content-type':'application/json'
                       }
            })
        }
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
                    <th></th>
                </tr>
                    {this.state.contactDetails.map(con=>(
                        <tr>
                        <td>{con.ID}</td>
                        <td>{con.Name}</td>
                        <td>{con.Email}</td>
                        <td>{con.Phone}</td>
                        <td>{con.CreationDate}</td> 
                        <td><button onClick={() => this.DeleteContact(con.ID)}>Delete Contact</button></td>
                        </tr>   
                    ))}
            </table>
            </div>
        );
    }
}
const element=<ContactDetailsComponents></ContactDetailsComponents>
ReactDOM.render(element,document.getElementById("root"));
