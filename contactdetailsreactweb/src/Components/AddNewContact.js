//import React from 'react';
import ReactDOM from 'react-dom';
import './ContactDetails.css';
import React,{Component} from 'react';
export class AddNewContact extends Component
{
    constructor(props){
        super(props);

        this.state={
            Message:''
        };
    }

    SaveNewContact=()=>{
      debugger;
        let singleContact={
            ID:0,
            Name:document.getElementById('Name').value,
            Phone:document.getElementById('Phone').value,
            Email:document.getElementById('Email').value,
            CreationDate:null
        };

        fetch("https://localhost:44398/Contact/AddNewContact",{
            method:'POST',
            headers:{'Accept':'application/json',
                     'Content-type':'application/json'
                    },
            body:JSON.stringify(singleContact)
        })
        .then(r=>r.json())
        .then(res=>{
            if(res){
            this.setState({message:'new record is inserted successfully'});
        }
        else
        {
          this.setState({message:'Insertion of Contact Failed...Requiered All Field'});
        }
        })
    }

    render(){
        return( 
        <div class="container">
            <h1 className='m-3 d-flex justify-content-center'>Add New Contact...</h1>
        <p>
            <label>Enter Name:</label><input type="text" class="form-control"  id="Name"></input>
        </p>
        <p>
        <label>Enter Email ID:</label><input type="text" class="form-control"  id="Email"></input>
       </p>
        <p>
        <label>Enter Phone Number:</label><input type="tel" class="form-control" id="Phone"  pattern="[0-9]" required></input>
        </p>
        <button onClick={e => this.SaveNewContact()} class="btn btn-primary btn-lg">Save Contact</button>
         <p>{this.state.message}</p>
        </div>
        )
    }
}

const element=<AddNewContact></AddNewContact>
ReactDOM.render(element,document.getElementById("root"));