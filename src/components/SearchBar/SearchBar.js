
import React, {Component} from "react";
import style from "../SearchBar/SearchBar.module.css"



class SearchBar extends Component {
 state = {searchQuery: ''};


 handleChange = e => {
    this.setState({searchQuery: e.currentTarget.value})
  }
  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchQuery)

    this.setState({searchQuery: ''});
  }
    
    render() {
        return (
            <>
            
            <form onSubmit={this.handleSubmit} className={style.searchForm}>
                <input className={style.input} 
                onChange={this.handleChange}
                value={this.state.searchQuery}
                type='text'
                placeholder="Search movies"
                />
                <button className={style.button} type="submit">
                    <span>Search</span>

                </button>
            </form>
       
            </>
        )
    }
}


export default  SearchBar