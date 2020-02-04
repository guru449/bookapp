import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import './Sai.css';

import './BookList/BookList';
import ProductGist from './BookList/BookList';
import productInfo from './BookInfo/BookInfo';
import BookInfo from './BookInfo/BookInfo';
import Reviews from './BookList/Books'
import BookForm from './BookForm/BookForm';
import PublisherForm from './BookForm/PublisherForm';
import BookList from './BookList/BookList';
import Publisher from './BookList/Publisher';
class App extends Component {

  state = {
    publisher: {},
    books:[],
    selectedpublisher:{},
    selectedBook:null
    
  }
  updateBookList = (newBook) => {
    const updatedBookList = [...this.state.books,newBook];
    this.setState({books: updatedBookList});
  }
  componentDidMount(){ //only called once when the page is started
    axios.get("http://localhost:8080/books")//asynchronous....      axios return promise
    .then(response =>{this.setState({books:response.data})
    
  
  });
}

  bookSelectionHandler = (book) => {
    //console.log(product);
   
    this.setState({selectedBook: book});
  }
  // PublisherSelectionHandler=(publisher)=>
  // {
  //   this.setState({selectedpublisher:publisher});
  // }
render(){
  const BookGists = this.state.books.map(aBook => {
    return (
    <BookList key={aBook.id} book={aBook} 
      clickHandler={() => {this.bookSelectionHandler(aBook)}} />);
  });


var pubid=null;
if(this.state.selectedBook){
  pubid=this.state.selectedBook.publisher.pubid;
}
  return (
    <div className="Sai">
      <div className=".form-style-8 h2">
          <BookForm updateHandler={this.updateBookList} />
          <PublisherForm />
          <div className="form-style-8 h2">
            <h1>List of Books</h1>
              {BookGists}
          </div>
      </div>
      <div className="detailedbookinfo">
        <h1>Detailed information</h1>
          <BookInfo books={this.state.selectedBook} />
          
          <Publisher pubid= {pubid}/>
        
          
      </div>
    </div>
    );
  }
  
 
}
          
          


export default App;