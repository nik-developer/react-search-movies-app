import React, {Component} from "react";
import Api from "../../services/Api";

class Reviews extends Component {
state = {
reviews: []
}
async componentDidMount() {
    const { movieId } = this.props.match.params; 

const response = await Api.getMovieReviews(movieId).catch(error => console.log(error))
this.setState({ reviews: [...response] })

};

   render() {
       const {reviews} = this.state;

       return (
   <>
   <div>
    {reviews.length > 0 ? (
     <ul>
      {reviews.map(({id, author, content}) => {
        return (
      <li key={id}>
        <h1>{author}</h1>
         <p>{content}</p>
      </li>
       )
        })}
     </ul>
       ) : (
        <p>We don't have any reviews for this movie</p>
       )}
   </div>
   </>            
   )
   
   }
}

export default Reviews