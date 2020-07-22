//import React from 'react';
import ReactDOM from 'react-dom';
import './ContactDetails.css';
import React,{Component} from 'react';
export class DeleteContact extends Component{
  constructor(props){
      super(props);
      this.state={
        Message:''
    };
  }
  DeleteContact()
    {
    debugger; //https://localhost:44398/Contact/Contact_DeleteConact
var ID=document.getElementById('ID').value
      if(window.confirm("Are You Sure"))
      {
        fetch("https://localhost:44398/Contact/DeleteConact/"+ID,
          {
               method:'DELETE',
               headers:{'Accept':'application/json',
                 'Content-type':'application/json'
                       }
            })
         .then(r=>r.json())
        .then(res=>{
            if(res){
            this.setState({message:'Deleted successfully'});
        }
        else
        {
          this.setState({message:'Enter Valid ID'});
        }
        })
                
        }
    }


render(){
  return <div className='container'>
      <h1 className='m-3 d-flex justify-content-center'>Delete Contact...</h1>
  <p>
      <label>Enter Id:</label> <input type="Number" id="ID" class="form-control"></input>
  </p>
  <td><button onClick={() => this.DeleteContact()} class="btn btn-primary btn-lg">Delete Contact</button></td>
  <p>{this.state.message}</p>
  </div>
  
}

}
const element=<DeleteContact></DeleteContact>
ReactDOM.render(element,document.getElementById("root"));
