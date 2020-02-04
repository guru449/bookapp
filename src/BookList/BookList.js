import React,{Component} from 'react';
import './../Sai.css';
import './ProductGist.css';

class BookList extends Component{

    render(){
        

        return (
            
            <div>
                
            <p className="form-style-8 input:hover" onClick={this.props.clickHandler}>
                BookId:{this.props.book.id}
                BookName:{this.props.book.name} <br></br> BookGenre:{this.props.book.genre}</p>

                </div>
                
        );
    }

}

export default BookList;