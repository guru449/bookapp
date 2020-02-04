import React,{Component} from 'react';
import Axios from 'axios';
import './../Sai.css';


class Publisher extends Component{
    state=
    {
        publisher:null
        , currentPublisherId:null

    }
    componentDidUpdate()
    {
        const newPublisherId=this.props.pubid;
//         if(newPublisherId){
//         if(this.state.currentPublisherId !== newPublisherId && newPublisherId !== null)
// {
//         const publisherId=this.props.pubid;
//         console.log(publisherId)
if(newPublisherId)
    Axios.get("http://localhost:8080/publisher/" + newPublisherId ).
    then(response=>{this.setState({publisher:response.data,currentPublisherId:newPublisherId});
});
    } //}}

    render(){
       
        if(this.state.publisher){
            const publisherr=this.state.publisher;
        return(<div className="form-style-8 textarea">
            <h2>Publisher Info</h2>
            <p>{publisherr.name}</p> 
            <p>{publisherr.city} </p></div>);
    // return ( <div className="publisher">
    //         {publisher}
    //  </div>); 
}
return (<div className="publisher">no publisher</div>)

    }

}

export default Publisher;