import React,{Component} from 'react';
export class HomePage extends Component
{
    render(){
        return(
                <div className="cotainer">
                    <h3 className='m-3 d-flex justify-content-center'>Contact Details Application</h3>
                    <div>
                    <a class="btn btn-primary btn-block"  href='addNewContact'>Add Contact</a>
                    <a class="btn btn-primary btn-block"href='deleteContact'>Delete Contact</a>
                    <a class="btn btn-primary btn-block" href='contactDetails'>All Contact</a>
                    </div>
                 </div>
        )
    }
}
