import React, {Component} from "react";
import Api from "../../services/Api";
import Actors from "../Actors/Actors"
import style from "../Cast/Cast.module.css"
import PropTypes from "prop-types"






class Cast extends Component {
state = {
  actors: []
}

 async componentDidMount() {
     const { movieId } = this.props.match.params; 

const response = await Api.getMovieCast(movieId).catch(error => console.log(error))
this.setState({ actors: [...response] })

};

    render() {
      const {actors} = this.state;

        return (
          
    <>
      <div >
        <ul className={style.castList}>
          {actors.map(({ credit_id, profile_path, character, name }) => (
              <li className={style.CastItem} key={credit_id}>
                <Actors photo={profile_path} name={name} character={character} />
              </li>
            ))}
        </ul>
      </div>
    </>            
    )
    
    }
}
Cast.propTypes = {
match: PropTypes.object.isRequired
}

export default Cast;