import React from 'react';
import ReactDOM from 'react-dom';
import './ContactDetails.css';
class DeleteContactComponents extends React.Component{
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
  return <div>
      <h1>Add New Contact...</h1>
  <p>
      <label>Enter Id:<input type="Number" id="ID"></input></label>
  </p>
  <td><button onClick={() => this.DeleteContact()}>Delete Contact</button></td>
  <p>{this.state.message}</p>
  </div>
  
}

}
const element=<DeleteContactComponents></DeleteContactComponents>
ReactDOM.render(element,document.getElementById("root"));
