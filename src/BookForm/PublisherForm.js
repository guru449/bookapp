import React,{Component} from 'react';
import axios from 'axios';
import './../Sai.css';
class BookForm extends Component{

    state={
        
        name:'',
        city:'',
        uimessage:''
        
    }
    postDataHandler=()=>{
        const publisher={
            name:this.state.name,
            city:this.state.city,
            
        }
        axios.post("http://localhost:8080/publisher/",publisher).  //////////
        then(response=>{
            if(response.status===201)
            {
                this.setState({
                    name:'',
                    city:'',
                    uimessage:'created publisher with id' +response.data.pubid
                });
                console.log(response.data)
               //this.props.updateHandler(response.data);
            }
        }).catch(response =>{
            this.setState({uimessage:'failed created publisher '+response});
        });
    }
    render(){

        return (
            <div className="Sai">
            <div className="form-style-8 h2">
                <h3> Add new Publisher </h3>
                <label>Name:</label>
                <input type="text"  value={this.state.name} 
                onChange={event=>{this.setState({name:event.target.value})}}/>
                <br></br>
                <label>City:</label>
                <input type="text" value={this.state.city} onChange={event=>{this.setState({city:event.target.value})}}/>
                <br></br>
                <button onClick={this.postDataHandler} >Add Publisher:</button>
                <p className="uimessage">{this.state.uimessage}</p>
            </div>
            </div>
        );
    }
}

export default BookForm;
