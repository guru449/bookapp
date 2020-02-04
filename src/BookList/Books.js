import React,{Component} from 'react';
import Axios from 'axios';



class Books extends Component{
    state=
    {
        books:null
        , currentPublisherId:null

    }
    componentDidUpdate()
    {
        const newPublisherId=this.props.publisherId;
        if(newPublisherId){
        if(this.state.currentPublisherId !== newPublisherId && newPublisherId !== null)
{
        const publisherId=this.props.publisherId;
    Axios.get("http://localhost:8080/publisher/" + publisherId +"/books").
    then(response=>{this.setState({books:response.data,currentPublisherId:newPublisherId});
});
    }}}

    render(){
        if(this.state.books !==null){
            const allBooks=this.state.books
        .map(aBook=>{return(<p key={aBook.pubId}>{aBook.name} {aBook.genre} {aBook.pages} {aBook.price}</p>);})
    return ( <div className="books">
            {allBooks}
      </div>); 
}
return (<div className="books"></div>)
    }

}

export default Books;