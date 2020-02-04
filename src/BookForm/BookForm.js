import React,{Component} from 'react';
import axios from 'axios';
import './../Sai.css';
class BookForm extends Component{

    state={
        name:'',
        price:'',
        genre:'',
        pages:'',
        pubid:'',
        uimessage:''
    }
    postDataHandler=()=>{
        const book={
            name:this.state.name,
            price:this.state.price,
            genre:this.state.genre,
            pages:this.state.pages,
            pubid:this.state.pubid
        }
        axios.post("http://localhost:8080/publisher/"+this.state.pubid+"/books",book).  //////////
        then(response=>{
            if(response.status===201)
            {
                this.setState({
                    name:'',
                    price:'',
                    genre:'',
                    pages:'',
                    pubid:'',
                    uimessage:'created book with id' +response.data.id
                });
                this.props.updateHandler(response.data);
            }
        }).catch(response =>{
            this.setState({uimessage:'Something went wrong'});
        });
    }
    render(){

        return (
            <div className="Sai">
            <div className="form-style-8 h2">
                <h3> Add new Book </h3>
                <label>Name:</label>
                <input type="text"  value={this.state.name} 
                onChange={event=>{this.setState({name:event.target.value})}}/>
                <br></br>
                <label>Price:</label>
                <input type="text" value={this.state.price} onChange={event=>{this.setState({price:event.target.value})}}/>
                <br></br>
                <label> Genre: </label>
                <input type="text" value={this.state.qoh} onChange={event=>{this.setState({genre:event.target.value})}} />
                <br></br>
                <label>pubid:</label>
                <input type="text" value={this.state.qoh} onChange={event=>{this.setState({pubid:event.target.value})}} />
                <br></br>
                <label>Pages:</label>
                <input type="text" value={this.state.pages} onChange={event=>{this.setState({pages:event.target.value})}}/>
                <br></br>
                <button onClick={this.postDataHandler} >Add Book:</button>
                <p className="uimessage">{this.state.uimessage}</p>
            </div>
            </div>
        );
    }
}

export default BookForm;