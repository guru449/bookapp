import React,{Component} from 'react';
import './../Sai.css';
class BookInfo extends Component{
    render()
    {
        if(this.props.books){
       return ( 
       <div className="form-style-8 textarea">
           {/* {/* <img src={this.props.product.image} height="100" width="100" /> */ //} */
           }
           <h2>Book Info</h2>
           <p className="bookname">book:  {this.props.books.name} </p> 
      <p className="bookgenre">genre: {this.props.books.genre}</p>
      <p className="bookprice">price: {this.props.books.price}</p>
      <p className="bookpage">pages: {this.props.books.pages}</p>


      {/* <p className="productQuantity">Available qty: {this.props.product.qoh}</p> */}
      </div>);
    }
    else
    return(<div></div>)
}
}
export default BookInfo;