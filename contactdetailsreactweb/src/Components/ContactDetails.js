//import React from 'react';
import ReactDOM from 'react-dom';
import './ContactDetails.css';
import React,{Component} from 'react';
export class ContactDetails extends Component{
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
            <div className='container'>
            <h2 className='m-3 d-flex justify-content-center'>Contact Details Table</h2>
            <table class="table" >
              <thead>
                <tr class="thead-dark">
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Creation Date</th>
                </tr>
                </thead >
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
const element=<ContactDetails></ContactDetails>
ReactDOM.render(element,document.getElementById("root"));
