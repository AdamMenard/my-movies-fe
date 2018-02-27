import React, {Component} from 'react';
import MyLists from '../components/myLists';

class AddToMyLists extends Component {
  constructor(){
    super();
    this.state = {
      addMovie: [],
      movieLists: [],
      title: [],
      newMovieListTitle: ''
    }
    this.onAddMovietoMyList = this.onAddMovietoMyList.bind(this);
    this.updateMovieListTitle = this.updateMovieListTitle.bind(this);
  }
  componentWillMount() {
    fetch('https://my-movies-be.herokuapp.com/api/movie_lists').then((res) => {
      return res.json();
     }).then((json) => {
       console.log(json);
       this.setState({
         movieLists:json
       })
   });
  }
  updateMovieListTitle(e) {
    this.setState({ newMovieListTitle: e.target.value })
  }
  onAddMovietoMyList(e) {
    // e.preventDefault();
    console.log(this.state.newMovieListTitle);
    console.log(this.props.moviePoster);
    console.log(this.props.overview);
    fetch(`https://my-movies-be.herokuapp.com/api/movie_lists`, {
      method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    title: this.state.newMovieListTitle,
        movies: [{
           title: this.props.title,
           description: this.props.overview,
           image: this.props.moviePoster,
         }]
		  }),
		}).then((res) => {
		    return res.json()
		}).then((json) => {
		    this.setState({
		    	movieLists: this.state.movieLists.concat(json),
          newMovieListTitle: '',
		    });
		});
  }
  render(){
    return(
      <div id="addToMyLists">
        <h1>Add Movie to MyLists</h1>
        <img id="addMoviePoster" src={ `https://image.tmdb.org/t/p/w500` + this.props.moviePoster } alt="movie poster"/>
        <hr/>
        <h4>{ this.props.title }</h4>
        <form className="form-inline" onSubmit={ this.onAddMovietoMyList }>
          <label><strong>New Movie List</strong></label>
          <input
            value={ this.state.newMovieListTitle }
	      		onChange={ this.updateMovieListTitle }
            type="text"
            placeholder="new Movie List name"
            ref="movieSearch"
            required />
          <input
            type="hidden"
            value={ this.props.title }/>
          <input
            type="hidden"
            value={ this.props.moviePoster }/>
          <input
            type="hidden"
            value={ this.props.overview }/>
          <input
            type="submit"
            value="Make New List"
            className="btn btn-primary"/>
         </form>
         <MyLists/>
         <hr/>
      </div>
    )
  }
}

export default AddToMyLists;
