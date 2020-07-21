import React from 'react';
import ReactDOM from 'react-dom';
import './ContactDetails.css';
class AddContactComponents extends React.Component{
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
        return <div>
            <h1>Add New Contact...</h1>
        <p>
            <label>Enter Name:<input type="text" ref="Name" id="Name"></input></label>
        </p>
        <p>
        <label>Enter Email ID:<input type="text" ref="Email" id="Email"></input></label>
       </p>
        <p>
        <label>Enter Phone Number:<input type="text" ref="Phone" id="Phone"></input></label>
        </p>
        <button onClick={e => this.SaveNewContact()}>Save Contact</button>
         <p>{this.state.message}</p>
        </div>
        
    }
}

const element=<AddContactComponents></AddContactComponents>
ReactDOM.render(element,document.getElementById("root"));